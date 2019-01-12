import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {StyledFooter} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB: Let's hack any keyboard in the world</h3>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url(media/keyboard.jpg)`} mixin="--footer-color: #f00;">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
       <StyledFooter><a href="https://www.flickr.com/photos/qubodup/14303947303/">flickr.com/photos/qubodup/14303947303</a></StyledFooter>
    </A>

  </Slide>
)
