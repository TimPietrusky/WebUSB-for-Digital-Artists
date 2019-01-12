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
import {fadeSlide, fade, flip, cube} from '@dekk/animation'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>luminave</h3>
    <p>change the color to red</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#DA4453" mixin="--slide-color: white" animationOut={flip.y}>
    <Plugins.Data luminave={['0position 1', 'color red']}></Plugins.Data>

    {notes}

    <A>
      <Title><Uppercase>Red</Uppercase></Title>
    </A>

  </Slide>
)
