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

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB DMX512 controller</h3>
    <p>One way of controlling other hardware with the Arduino is by using shields, so I added this DMX512 shield on top of the Arduino</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url("media/webusb_dmx512_controller.jpg")`}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <br />
    </A>
  </Slide>
)
