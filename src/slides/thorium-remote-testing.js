
import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {LargeImage, StyledFooter} from '../components'
import {fade, flip} from '@dekk/animation'
import {ImportantLink} from '../components/links'


const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Working remote on Thorium</h3>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#000">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/thorium_remote_testing.png"
                  alt="Testing Thorium remote"
                style={{width: 80 + "vw"}} />

    </A>

  </Slide>
)
