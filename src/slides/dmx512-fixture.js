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
import {ImportantLink} from '../components/links'
import { topCenter } from '../components/images'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Fixture</h3>
    <p>In the DMX512 world a light is called a fixture, because it can be mounted onto other things so that is stays fix</p>
    <p>There are many different types, this one is pointing into a single direction</p>
    <p>There are others that can move or produce smoke or even lasers, but we will focus on this simple one</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background={`url("media/flat_par.jpg")`}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <br />
    </A>

  </Slide>
)
