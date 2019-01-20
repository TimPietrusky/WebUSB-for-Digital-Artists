import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {RainbowText, LayoutAB, Spacer, Column} from '../components'
import { HalfVertical } from '../masters'
import { topCenter, SmallImage } from '../components/images'
import { ImportantLink } from '../components/links'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>luminave + Thorium</h3>
    <p>Because of the WebUSB-DMX512-Controller module on GitHub I was approached by a school in Utah (USA)</p>
    <p>They run a couple of space ship simulators and have an open source software that is running on the terminals there which is called Thorium</p>
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
                src="media/thorium.svg"
                alt="Thorium logo"
            />
          
          <br />
        <ImportantLink src="https://thoriumsim.com/">thoriumsim.com</ImportantLink>
    </A>
  </Slide>
)
