import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {ViewportSize, Code2, RainbowText} from '../components'
import {fadeSlide, fade, flip, cube} from '@dekk/animation'
import {Half} from '../masters'
import {css} from 'styled-components'
import {StyledList} from '../components/list'


const {Slide, A, B} = Half

import {select} from '../utils'

const ranges = [
  [ select([1, 0], [3, 0]) ], // request access
  [ select([2, 30], [2, 78]) ], // filters
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'dracula'
}

const code = `// Request access to the Arduino Leonardo ETH
navigator.usb.requestDevice({ filters: [{vendorId: 0x2a03, productId: 0x8040}] })

  // Open session to selected Arduino
  .then(selectedDevice => {
    device = selectedDevice
    return device.open()
  })

  // Select #1 configuration if not automatially set by OS
  .then(() => {
    if (device.configuration === null) {
      return device.selectConfiguration(1)
    }
  })

  // Get exclusive access to Interface #2
  .then(() => device.claimInterface(2))

  // Tell the Arduino that we are ready to send data on Interface #2
  .then(() => device.controlTransferOut({
    'requestType': 'class',
    'recipient': 'interface',
    'request': 0x22, // SET_CONTROL_LINE_STATE
    'value': 0x01, // Yes
    'index': 0x02 // Interface: #2
  }))

  // Receive 512 bytes on Endpoint #5
  .then(() => device.transferIn(5, 512))

  .then(({ data }) => {
    console.log('Received: ' + new TextDecoder().decode(data))
  })`

const notes = (
  <Notes>
    <h3>Enable WebUSB</h3>
    <p>The User has to trigger requestDevice by an explicit user gesture</p>
    <p>And we set a filter to only interact with the Arduino</p>
    <p>When this gets executed a pop-up opens</p>
  </Notes>
)

export default (
  <Slide key={uuid()} animationOut={fade.in}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle><RainbowText style={{filter: css`invert(0%)`}} time={30} text="JavaScript"/></Subtitle>

      <StyledList>
        <Fragment order={1}>
          <li>Request access to Arduino</li>
        </Fragment>

        <Fragment order={2}>
          <li>Set filter for Arduino Leonardo</li>
        </Fragment>
      </StyledList>
    </A>

    <B>
      <Code2 ranges={ranges} options={codeOptions}>
          {code}
      </Code2>
    </B>

  </Slide>
)
