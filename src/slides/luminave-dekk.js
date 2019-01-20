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
    <h3>What does luminave mean?</h3>
    <p>lumi = light in many languages (illumination in english, iluminando in spanish) and lumi many other languages</p>
    <p>nave = hub of a wheel</p>
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
              src="media/dekk.png"
              alt="dekk logo"
          />
        
        <br />
      <ImportantLink src="https://github.com/pixelass/dekk">github.com/pixelass/dekk</ImportantLink>
    </A>
  </Slide>
)
