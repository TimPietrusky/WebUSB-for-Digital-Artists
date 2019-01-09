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
import { Half } from '../masters';
import { topCenter } from '../components/images'

const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3>DMX512</h3>
    <p>DMX512 is a standard for professional lighting</p>
    <p>All the lights you can see here and also all the lights in this venue can be controlled via DMX</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title><RainbowText time={30} text="DMX512"/></Title>
      <Subtitle>
        <ImportantLink href="https://en.wikipedia.org/wiki/DMX512">en.wikipedia.org/wiki/DMX512</ImportantLink>
      </Subtitle>
      <br /><br />
    </A>

    <B>
      <FitImage
        mixin={topCenter}
        src="media/newyears_eve_2017.jpg"
        alt="New Years Eve 2017"
      />
    </B>

  </Slide>
)
