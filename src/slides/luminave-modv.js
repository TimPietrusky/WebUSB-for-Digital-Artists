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
import {RainbowText} from '../components'


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
      <Title style={{textAlign: 'center'}}><RainbowText time={5} text="luminave"/></Title>
      <Title style={{textAlign: 'center'}}>+</Title>

        <SmallImage 
                src="media/modv_logo.png"
                alt="modV logo"
            />
          
          <br />
        <ImportantLink src="https://modv.js.org">modv.js.org</ImportantLink>
    </A>

  </Slide>
)
