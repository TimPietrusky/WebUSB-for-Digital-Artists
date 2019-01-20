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
    <h3>WebUSB DMX512 Controller on NPM</h3>
    <p>I published a module on npm that you can use to control the WebUSB DMX512 Controller.</p>
    <p>So instead of having all the code that I showed earlier, we now only need a few lines to get started and send data</p>
  </Notes>
)

export default (
  <Slide key={uuid()} background="#fff">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <img src="media/webusb-dmx512-controller-npm.png"
                  alt="Added WebUSB DMX512 Controller to computer"
                style={{width: 80 + "vw"}} />

<StyledFooter>
      <ImportantLink href="https://www.npmjs.com/package/webusb-dmx512-controller">npmjs.com/package/webusb-dmx512-controller</ImportantLink>
</StyledFooter>
    </A>

  </Slide>
)
