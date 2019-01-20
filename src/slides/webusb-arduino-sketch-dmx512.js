import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
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
  [ select([2, 0], [3, 0]) ], // Conceptinetics
  [ select([7, 0], [9, 0]) ], // Amount of channels
  [ select([10, 0], [14, 0]) ], // I/O pin
  [ select([15, 0], [17, 0]) ], // store incoming bytes  
  [ select([20, 0], [22, 0]) ], // Initialize with 0  
  [ select([28, 0], [30, 0]) ], // Start transmission to DMXShield 
  [ select([37, 0], [39, 0]) ], // Read 512 bytes and store into incoming  
  [ select([40, 0], [45, 0]) ] // Iterate over all channels and set the value 
]

const codeOptions = {
  lineNumbers: true,
  mode: 'clike',
  theme: 'dracula'
}

const code = `#include <WebUSB.h>
#include <Conceptinetics.h>

WebUSB WebUSBSerial(1, "nerddisco.github.io/webusb-dmx512-controller");
#define Serial WebUSBSerial

// Amount of channels in the universe
#define channels 512

// dmx_master(channels , pin);
// channels: Amount of channels in the universe
// pin: Pin to do read / write operations on the DMX shield
DMX_Master dmx_master(channels, 2);

// Store the incoming WebUSB bytes
byte incoming[channels];

// Run once on startup
void setup() {
  // Initialize incoming with 0
  memset(incoming, 0, sizeof(incoming));

  // Wait until WebUSB connection is established
  while (!Serial) {
    ;
  }

  // Start transmission to DMXShield
  dmx_master.enable();
}

// Run over and over again
void loop() {
  // WebUSB is available
  if (Serial.available() > 0) {

    // Read 512 incoming bytes
    Serial.readBytes(incoming, channels);

    // Iterate over all channels
    for (int i = 0; i < channels; i++) {
      // Set the value for each channel
      dmx_master.setChannelValue(i + 1, incoming[i]);
    }
  }
}`

const notes = (
  <Notes>
    <h3>Updated Sketch</h3>
    <p>Library of the shield from the same people that made the shield</p>
    <p>512 channels for our universe</p>
    <p>Pin used to send / receive data between the Arduino and the shield</p>
    <p>Array to save the incoming bytes</p>
    <p>Initialize all channels with 0 so every function of every fixture is turned off</p>
    <p>Start transmission with the shield</p>
    <p>Receive 512 bytes from the browser</p>
    <p>Iterate over every byte and set the corresponding value for each channel in the universe</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <StyledList>
        <Fragment order={1}>
          <li>Library for the Shield</li>
        </Fragment>

        <Fragment order={2}>
          <li>512 channels</li>
        </Fragment>

        <Fragment order={3}>
          <li>Shield's Pin for read / write</li>
        </Fragment>

        <Fragment order={4}>
          <li>byte array</li>
        </Fragment>

        <Fragment order={5}>
          <li>Initialize all channels with 0</li>
        </Fragment>

        <Fragment order={6}>
          <li>Start transmission</li>
        </Fragment>

        <Fragment order={7}>
          <li>Receive 512 bytes</li>
        </Fragment>

        <Fragment order={8}>
          <li>Set value for each channel</li>
        </Fragment>
      </StyledList>
    </A>

    <B>
      <Fragment order={0}>
        <Code2 ranges={ranges} options={codeOptions}>
            {code}
        </Code2>
      </Fragment>
    </B>

  </Slide>
)
