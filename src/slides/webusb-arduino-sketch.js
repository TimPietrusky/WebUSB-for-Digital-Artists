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
  [ // Include WebUSB
    select([1, 0], [2, 0])
  ],
  [ // localhost:1337
    select([3, 0], [5, 0])
  ],
  [ // setup
    select([6, 0], [16, 0])
  ],
  [ // loop
    select([17, 0], [30, 0])
  ],
  // [ // WebUSB is ready
  //   select([19, 0], [21, 0])
  // ],
  [ // Read incoming data
    select([22, 0], [24, 0])
  ],
  [ // Write data to browser
    select([25, 0], [28, 0])
  ]
]

const codeOptions = {
  lineNumbers: true,
  mode: 'clike',
  theme: 'dracula'
}

const code = `#include <WebUSB.h>

WebUSB WebUSBSerial(1, "localhost:1337");
#define Serial WebUSBSerial

// Run once on startup
void setup() {
  // Wait until WebUSB connection is established
  while (!Serial) {
    ;
  }

  // Set data rate (bits per second)
  Serial.begin(9600);
}

// Run over and over again
void loop() {
  // WebUSB is available
  if (Serial.available() > 0) {

    // Read incoming data from the browser
    int byte = Serial.read();

    // Send data to the browser
    Serial.write("Your data is awesome!");
    Serial.flush();
  }
}`

const notes = (
  <Notes>
    <p>The code that you load onto an Arduino is called sketch</p>
    <p>We load the WebUSB library which transforms the Arduino into a WebUSB compatible device</p>
    <p>We set the URL which tells the browser the page our device should be used with</p>
    <p>setup() is called once when the Arduino is started and sets some defaults</p>
    <p>loop() is called over and over again, the important bits are that we can read data from the browser and can also send data back to the browser</p>
    <p>When we load this code onto the Arduino and connect the Arduino via USB to the computer...</p>
  </Notes>
)

export default (
  <Slide key={uuid()} animationOut={fade.in}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle><RainbowText style={{filter: css`invert(0%)`}} time={30} text="Arduino Sketch"/></Subtitle>

      <StyledList>
        <Fragment order={1}>
          <li>WebUSB library</li>
        </Fragment>

        <Fragment order={2}>
          <li>Set default URL</li>
        </Fragment>

        <Fragment order={3}>
          <li>setup()</li>
        </Fragment>

        <Fragment order={4}>
          <li>loop()</li>
        </Fragment>

        <Fragment order={5}>
          <li>Receive data from Browser</li>
        </Fragment>

        <Fragment order={6}>
          <li>Send data to Browser</li>
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
