import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css, keyframes} from 'styled-components'
import Deck, {Elements, Plugins} from '@dekk/dekk'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import "./styles/codemirror"
import Luminave from './plugins/luminave'
import StyledHeader from './components/styledHeader'
import StyledFooter from './components/styledFooter'
import LuminaveButton from './components/luminaveButton'

const mySlides = [
  'cover',
  'webusb-introduction-1',
  'webusb-lets-hack',
  'webusb-introduction-2',
  //'webusb-security',
  'webusb-how-to-use-webusb-then',
  'webusb-requirements',
  // 'webusb-arduino',
  'webusb-arduino-sketch',
  'webusb-arduino-added',
  'webusb-browser-enable',
  'webusb-browser-usb-port-enable-user-gesture',
  'webusb-browser-enable-selected-port',
  'webusb-browser-send',
  'usb-explained',
  'webusb-code-explained-1',
  'webusb-code-explained-2',

  'dmx512',
  'dmx512-fixture',
  'dmx512-universe',
  'dmx512-universe-data',
  'arduino-headers',
  'arduino-shield-dmx512',
  'webusb-dmx512-controller',
  'webusb-arduino-sketch-dmx512',
  'webusb-dmx512-controller-npm',
  'webusb-browser-module-send',

  'attention-flashing-lights',
  
  'luminave-red',
  'luminave-green',
  'luminave-blue',
  'luminave-uv',
  'luminave-strobe',
  'luminave-yellow-uv',

  'luminave',
  'luminave-dekk',
  'luminave-modv',
  'luminave-modv-video',
  'livejs',
  'livejs-performance',
  'luminave-thorium',
  'thorium-remote-testing',

  'wrap-it-up',
  'thank-you'
]

const {present, live} = search.parse(window.location.href)

const baseStyles = css`
  --slide-color: #fff;
  --font-family: "Montserrat", sans-serif;
  --title-font-size: 6em;
  --theme-primary: #fadf1d;
  --theme-primary-dark: #c7b218;
  --theme-on-primary: #000;
  --theme-background: #000;
  --theme-surface: #fff;

  --color-green: #35c9a4;
  --color-red: #DA4453;
  --color-yellow: #ec9f00;
  --color-blue: #3caee5;

  background: var(--theme-background);

  h1, h2 {
    text-align: left;
  }

  h1 {
    width: 100%;
  }

  .strobe-1 {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    animation: strobe 500ms steps(1, end) infinite;
    background: black;

    @keyframes strobe {
      50% { 
        background: white; 
      }
    }
  }

  .invert {
    background: #fff;
    color: #000;
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    > h2 {
      text-align: center;
    }
  }

  .overlay {
    position: relative;
    height: 100%;
    width: 100%; 

    .child {
      position: absolute;
      bottom: 15vh;
      left: 0;
    }
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
    this.slides = this.props.slides
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return (
      <Deck mixin={baseStyles} timer={30}>
        <Elements mode={["live"]}>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="http://localhost:8081"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>
        </Elements>

        <Plugins mode={["present"]}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Luminave publish showFrame={this.state.showFrame} handleFrame={this.setFrame} />
          <LuminaveButton onClick={this.setFrame}>Luminave</LuminaveButton>
        </Plugins>

        <Plugins mode={["live"]}>
          <LocalStorage subscribe />
          <Luminave subscribe handleFrame={this.handleFrame} slides={this.slides} />
        </Plugins>

        <Plugins mode={["default"]}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
        </Plugins>

        {this.slides}

        {/* <Elements mode={["default"]}>
          <StyledFooter isActive={true}>
            <h1>jo jo jo</h1>
          </StyledFooter>
        </Elements> */}
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

/**
 * Dynamically import the slides
 */
async function loadSlides() {
  const slides = []

  await Promise.all(mySlides.map(async (slide, index) => {
    let module = await import(`./slides/${slide}.js`)
    slides[index] = module.default
  }));

  return slides
}

loadSlides().then(slides => {
  render(<App slides={slides} />, mountPoint)
})