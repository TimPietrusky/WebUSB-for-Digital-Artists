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
import {Half} from '../masters'
import {css} from 'styled-components'
import {StyledList} from '../components/list'


const {Slide, A, B} = Half

import {select} from '../utils'

const ranges = [
  [ select([1, 0], [3, 0])], // send data
]

const codeOptions = {
  lineNumbers: true,
  mode: 'javascript',
  theme: 'dracula'
}

const code = `// Send data (ArrayBuffer) to the Arduino on Endpoint #4
device.transferOut(4, data)`

const notes = (
  <Notes>
    <h3>Send data to USB device</h3>
    <p>We can also send data (ArrayBuffer) to the Arduino by calling transferOut on Endpoint 4</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Subtitle><RainbowText style={{filter: css`invert(0%)`}} time={30} text="JavaScript"/></Subtitle>

      <StyledList>
        <Fragment order={1}>
          <li>Send data to Arduino</li>
        </Fragment>
      </StyledList>
    </A>

    <B>
      <br />
      <br />
      <Code2 ranges={ranges} options={codeOptions}>
          {code}
      </Code2>
    </B>

  </Slide>
)
