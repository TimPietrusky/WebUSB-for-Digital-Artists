import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText} from '../components'
import {ImportantLink} from '../components/links'
import {Half} from '../masters'
import {css} from 'styled-components'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>WebUSB DMX512 controller</h3>
    <p>In my digital art projects I love to use DMX512, which is a standard for professional lighting</p>
    <p>One way of controlling other hardware with the Arduino is by using shields, so I added this DMX512 shield on top of the Arduino</p>
    <p>I have written a detailed guide on how you can do this too, but as I don't have much time left I will just show you the WebUSB DMX512 Controller in action</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Fragment order={0}>
      <Title><RainbowText time={30} text="DMX512"/></Title>
      </Fragment>

      <br /><br />
      
      <Fragment order={2}>
        <Subtitle>
          <ImportantLink style={{maxWidth: css`40vw`}} href="https://medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino-e0dd8efb7bf0">How to build a<br />WebUSB DMX512<br />Controller<br />by using an Arduino</ImportantLink>
        </Subtitle>
      </Fragment>
    </A>

    <B>
      <Fragment fit order={1}>
        <FitImage 
          src="media/webusb_dmx512_controller.jpg"
          alt="WebUSB DMX512 Controller"
        />
      </Fragment>
    </B>
  </Slide>
)
