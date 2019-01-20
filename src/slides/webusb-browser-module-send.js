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
  [ select([1, 0], [2, 0]) ], // Import the module
  [ select([3, 0], [5, 0]) ], // Initialize the controller
  [ select([6, 0], [8, 0]) ], // Get the button
  [ select([9, 0], [12, 0]) ], // Listen to click events 
  [ select([13, 0], [15, 0]) ], // Enable WebUSB
  [ select([16, 0], [18, 0]) ], // Create connection to selected Arduino 
  [ select([19, 0], [24, 0]) ] // Update channel 1 with value 255 
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'dracula'
}

const code = `import Controller from 'webusb-dmx512-controller/controller.js'

// Initialize
const controller = new Controller()

// Get a reference to the button
const activateButton = document.getElementById('activateWebUsb')

// Listen for click events on the activate button, because
// "controller.enable" must be triggered by a user gesture
activateButton.addEventListener('click', e => {

  // Enable WebUSB and select the Arduino
  controller.enable().then(() => {

    // Create a connection to the selected Arduino
    controller.connect().then(() => {

      // Update the 3 channel of the DMX512 universe with value 50
      controller.updateUniverse(3, 50)

      // Update the 5 channel of the DMX512 universe with value 70
      controller.updateUniverse(5, 70)
    })

  })
  
})`

const notes = (
  <Notes>
    <h3>Using the Module</h3>
    <p></p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <StyledList>
        <Fragment order={1}>
          <li>Import the module</li>
        </Fragment>

        <Fragment order={2}>
          <li>Initialize the controller</li>
        </Fragment>

        <Fragment order={3}>
          <li>Reference to button</li>
        </Fragment>

        <Fragment order={4}>
          <li>Listen to click events</li>
        </Fragment>

        <Fragment order={5}>
          <li>Request access to Arduino</li>
        </Fragment>

        <Fragment order={6}>
          <li>Connect to Arduino</li>
        </Fragment>

        <Fragment order={7}>
          <li>Update channel 3 & 5</li>
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
