import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import Text, {Title, Subtitle, Uppercase, Bold, Center, colorSchemes} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import 'codemirror/mode/javascript/javascript'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
import {slide} from '@dekk/animation'
import {LargeImage, Spacer} from '../components'
import styled from 'styled-components'
import {RainbowText} from '../components'
import {css} from 'styled-components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>USB Descriptor</h3>
    <p>Describes the properties and function of a USB device so that the OS understands how to use it</p>
    <p>Device: basic information like USB version, vendor and product id</p>
    <p>Configuration: how the device is powered, maximum power consumption</p>
    <p>Interface: Functional endpoint, combines the endpoints into functional groups to perform a single feature of the device</p>
    <p>Endpoints: Channel on where data is send or received</p>
  </Notes>
)


const StyledBox = styled.div`
  --h: ${({hue}) => hue};
  --color: ${({color}) => color};
  --width: ${({width}) => width};
  --background: ${({background}) => background};

  //background-color: hsl(var(--h), 80%, 80%);
  background-color: var(--background);
  // color: hsl(var(--h), 60%, 10%);
  color: #fff;
  padding: .25em .25em 0 .25em;
  // border: 0.1em solid hsl(var(--h), 60%, 50%);
  width: var(--width);
  margin: 0 0 .25em 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

StyledBox.defaultProps = {
  hue: 0,
  color: 'white'
}

const Rapppper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
`


export default (
  <Slide key={uuid()} background="#000" mixin="--slide-color: white">
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
      <Title>USB Descriptor</Title>


      <br />
      <Rapppper>

        <Fragment order={1} animation={slide.normal}>
          <StyledBox width="100vw" background="var(--color-red)">
            <Subtitle>Device</Subtitle>
            <Text>USB Version, vendor, productid</Text>
          </StyledBox>
        </Fragment>

        <Fragment order={2} animation={slide.normal}>
          <StyledBox width="80vw" hue="90" background="var(--color-green)">
            <Subtitle>Configurations</Subtitle>
            <Text>How to power the device, max power consumption</Text>
          </StyledBox>
        </Fragment>

        <Fragment order={3} animation={slide.normal}>
          <StyledBox width="60vw" hue="180" background="var(--color-yellow)">
            <Subtitle>Interfaces</Subtitle>
            <Text>A feature of the device</Text>
          </StyledBox>
        </Fragment>

        <Fragment order={4} animation={slide.normal}>
          <StyledBox width="40vw" hue="270" background="var(--color-blue)">
            <Subtitle>Endpoints</Subtitle>
            <Text>Send or receive data</Text>
          </StyledBox>
        </Fragment>

      </Rapppper>
    </A>

  </Slide>
)
