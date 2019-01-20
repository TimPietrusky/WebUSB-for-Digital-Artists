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
import {DmxChannels, Channel, Info} from '../components/dmxChannels'
import { topCenter, LargeImage } from '../components/images'
import {css} from 'styled-components'
import {Half} from '../masters/index'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>Arduino Headers</h3>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#fff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
        {/* <Title>Extend the Arduino</Title> */}

        <LargeImage 
            src="media/arduino_dmx_shield.jpg"
            alt="Arduino DMX512 Shield"
        />

      <ImportantLink href="https://www.tindie.com/products/Conceptinetics/25kv-isolated-dmx-512-shield-for-arduino-r2/">tindie.com/products/Conceptinetics/25kv-isolated-dmx-512-shield-for-arduino-r2</ImportantLink>

    </A>

  </Slide>
)
