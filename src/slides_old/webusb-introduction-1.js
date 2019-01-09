import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
// import * as wimbAnimation from '../animation'
// import * as dekkAnimation from '@dekk/animation'
import {Quote, TextMarker} from '../components'

const {Slide, A} = Main

const notes = (
  <Notes>
    <h3>WebUSB: Introduction 1</h3>
    <p>In it's introduction it says</p>
    <p>Quote 1: The Universal Serial Bus (USB) is the de-facto standard for wired peripherals.</p>
    <p>I think we can all agree on that.</p>
    <p>Quote 2: Most USB devices implement one standard device class, which defines what the device can do and how others can use it</p>
    <p>Quote 3: Standard device classes include keyboard, mice, audio, video and storage devices.</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
        <Quote>
            <Fragment order={0}>
                The Universal Serial Bus (USB) is the <TextMarker>de-facto standard for wired peripherals</TextMarker>.
            </Fragment>
                <br /><br />
            <Fragment order={1}>
                <TextMarker>Most USB devices implement</TextMarker> one of roughly a dozen <TextMarker>standard "device classes"</TextMarker> which specify a way for the device to advertise the features it supports and commands and data formats for using those features. 
            </Fragment>
                <br /><br />
            <Fragment order={2}>
                <TextMarker>Standard device classes</TextMarker> include keyboard, mice, audio, video and storage devices.            
            </Fragment>
        </Quote>
    </A>

  </Slide>
)
