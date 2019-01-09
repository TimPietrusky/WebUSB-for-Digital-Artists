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
// import {SuperTimer} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Security</h3>
    <p>First of all: https only (and of course you can use it without https on localhost)</p>
    <p>The website that want's to use the device has to provide a user gesture, so that user has to manually request access to a specific device</p>
    <p>Also once a website has claimed access to the device, not any other webiste can claim access to the same device again</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>https only</Title>

      <Fragment order={1}>
        <Title>User Gesture</Title>
      </Fragment>
    </A>

  </Slide>
)
