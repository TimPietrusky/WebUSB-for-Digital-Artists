import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText} from '../components'
import {SmallImage} from '../components/images'
import {ImportantLink} from '../components/links'
import { HalfVertical } from '../masters';

const {Slide, A, B} = HalfVertical

const notes = (
  <Notes>
    <h3>Custom Device</h3>
    <p>Let's create our own device by using an Arduino</p>
    <p>Arduino is a microcrontroller that comes in different shapes and sizes</p>
    <p>The one you see right now is called "Leonardo", which gives full control over it's USB hardware to the code running on it</p>
    <p>We can do this because Reilly Grant, one of the authors of the WebUSB spec, has created this repo</p>
    <p>In there we find code that we have to put onto the Arduino in order to be accessable via WebUSB</p>
    <p>And code for the browser to talk via WebUSB with the Arduino</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="Arduino"/></Title>
      <Fragment order={1}>
        <Subtitle>
          <ImportantLink href="https://github.com/webusb/arduino">github.com/webusb/arduino</ImportantLink>
        </Subtitle>
      </Fragment>
      <br /><br/>
    </A>

    <B>
      <SmallImage
          src="media/arduino_leonardo_.png"
          alt="Arduino Leonardo"
      />
    </B>

  </Slide>
)
