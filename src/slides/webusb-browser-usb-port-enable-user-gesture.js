import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {LargeImage} from '../components/images'
import {fadeSlide, fade, flip, cube} from '@dekk/animation'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>User Gesture: Select USB device</h3>
    <p>A popup opens in the browser asking us to select the Arduino</p>
  </Notes>
)

export default (
  <Slide key={uuid()} animationIn={fade.in} animationOut={fade.in}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <LargeImage src="media/webusb_arduino_pair.png"
                  alt="Pair Arduino using WebUSB" />
    </A>

  </Slide>
)
