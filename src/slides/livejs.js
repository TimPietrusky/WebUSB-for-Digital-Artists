import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment, {Sequence} from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/dekk'
import {SuperVideo} from '../components/video'

import { topCenter, SmallImage } from '../components/images'
import { ImportantLink } from '../components/links'
const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>liveJS</h3>
    <p>Part of a group of digital artists doing performances with web technology</p>
    <p>Visuals, Music & light in live shows</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
        <SmallImage 
                src="media/livejs-violett_orange.png"
                alt="LiveJS logo"
            />
          
          <br />
        <ImportantLink src="https://livejs.network">livejs.network</ImportantLink>
    </A>

  </Slide>
)
