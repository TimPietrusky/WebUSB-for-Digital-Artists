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
import {css} from 'styled-components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB for Digital Artists</h3>
    <p>When you want to use WebUSB in your digital art projects today, you need two things:</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>
        WebUSB for
       </Title>
       <Title><RainbowText style={{filter: css`invert(0%)`}} time={30} text="Digital Artists"/></Title>
    </A>

  </Slide>
)
