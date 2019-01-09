import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {ViewportSize, Code2, RainbowText} from '../components'
import {fadeSlide, fade, flip, cube} from '@dekk/animation'
import {Half} from '../masters'
import {css} from 'styled-components'
import {StyledList} from '../components/list'

const {Slide, A, B} = Half

import {select} from '../utils'

const ranges = [
  [ // open session
    select([4, 0], [9, 0])
  ],
  [ // Select #1 configuration
    select([10, 0], [16, 0])
  ],
  [ select([17, 0], [19, 0])], // access to interface #2
  [ select([20, 0], [28, 0])], // We are ready to receive data on Endpoint 1 of Interface #2
  [ select([29, 0], [31, 0])], // Receive 512 bytes on Endpoint 5
  [ select([32, 0], [35, 0])] // TextDecoder
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
    <p>Connect to the selectedPort and open a session to the device</p>
    <p>Use configuration #1 if no configuration was automatially applied by the Operating System</p>
    <p>Get exclusive access to interface #2</p>
    <p>We are ready to receive data on Interface #2 using a controlTransferOut -> Send control commands to the USB device</p>
    <p>We wait until we receive 512 bytes on Endpoint 5</p>
    <p>Convert the received bytes data into a String by using a TextDecoder, because what we get are bytes</p>
  </Notes>
)

export default (
  <Slide key={uuid()} animationIn={fade.in}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle><RainbowText style={{filter: css`invert(0%)`}} time={30} text="JavaScript"/></Subtitle>

      <StyledList>
        <li>Connect to Arduino</li>

        <Fragment order={1}>
          <li>Select configuration</li>
        </Fragment>

        <Fragment order={2}>
          <li>Exclusive access</li>
        </Fragment>

        <Fragment order={3}>
          <li>Ready to send data</li>
        </Fragment>

        <Fragment order={4}>
          <li>Receive data from Arduino</li>
        </Fragment>

        <Fragment order={5}>
          <li>Convert Bytes into String</li>
        </Fragment>
      </StyledList>
    </A>

    <B>
      <Code2 ranges={ranges} options={codeOptions} order={-1}>
          {code}
      </Code2>
    </B>

  </Slide>
)
