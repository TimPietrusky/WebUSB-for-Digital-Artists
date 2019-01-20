import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {Title} from '../components/title'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {Grid} from '../masters'
import {RainbowText} from '../components'
import {ImportantLink} from '../components/links'
import {css} from 'styled-components'
import { topCenter } from '../components/images'
import {fade, flip, cube} from '@dekk/animation'



const {Slide, A, B, C, D} = Grid

const notes = (
  <Notes>
    <h3>Wrap it up</h3>
    <p>We can't hack our keyboard because it's a standard device that is already claimed by the OS</p>
  </Notes>
)

export default (
  <Slide key={uuid()} animationOut={fade.in}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>Wrap it up!</Title>
    </A>
    
    <B>
      <Fragment fit order={1}>
        <div className="invert">
          <Subtitle>WebUSB Spec</Subtitle>
          <ImportantLink style={{maxWidth: css`70vw`, margin: css`1em`}} href="https://wicg.github.io/webusb">wicg.github.io/webusb</ImportantLink>
        </div>
      </Fragment>
    </B>

    <C>
      <div className="overlay">
        <Fragment fit order={2}>
          <FitImage topCenter 
                src="media/webusb_dmx512_controller.jpg"
                alt="WebUSB DMX512 Controller"
              />

        </Fragment>

        <Fragment order={2}>
          <div className="child">
            <ImportantLink style={{maxWidth: css`70vw`, margin: css`1em`}} href="https://medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino-e0dd8efb7bf0">medium.com/@timpietrusky/how-to-build-a-webusb-dmx512-controller-by-using-an-arduino</ImportantLink>
          </div>
        </Fragment>

      </div>
    </C>

    <D>
      <Fragment fit order={3}>
        <div className="invert">
          <Subtitle><RainbowText time={5} text="luminave"/></Subtitle>
          <ImportantLink style={{margin: css`1em`}} src="https://github.com/NERDDISCO/luminave">github.com/NERDDISCO/luminave</ImportantLink>
        </div>
      </Fragment>
    </D>

  </Slide>
)
