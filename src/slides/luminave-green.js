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
    <p>change the color to green</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#35c9a4" mixin="--slide-color: white" animationIn={flip.y} animationOut={flip.y}>
    <Plugins.Data luminave={['0position 1', 'color green']}></Plugins.Data>

    {notes}

    <A>
      <Title><Uppercase>Green</Uppercase></Title>
    </A>

  </Slide>
)
