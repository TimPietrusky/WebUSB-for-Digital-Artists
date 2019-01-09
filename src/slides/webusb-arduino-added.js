import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {LargeImage} from '../components'
import {fade, flip} from '@dekk/animation'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB Arduino added</h3>
    <p>...we get this nice notification which indicates that we should open localhost:1337</p>
    <p>The URL is the one we specified in the Arduino Sketch</p>
    <p>Not working in Windows as of now</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#f8f8ff" animationIn={fade.in}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/webusb_dmxcontroller_added.png"
                  alt="Added WebUSB DMX512 Controller to computer"
                style={{width: 90 + "vw"}} />
    </A>

  </Slide>
)
