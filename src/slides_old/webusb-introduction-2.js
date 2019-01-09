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
    <h3>WebUSB: Introduction 2</h3>
    <p>Nope, because when we go back into the specification</p>
    <p>Quote 1: Standard devices like the keyboard are using the drivers provided by operating systems, which means we can't control them via WebUSB.</p>
    <p>Quote 2: But there are many devices that don't fit into the standard device classes.</p>
    <p>Quote 3.1: Hardware vendors have to write a driver for each operating system in order for us to use the device</p>
    <p>Quote 3.2: But this drivers prevent us from using those devices in the web because the browser can't even get access to the device if the OS or the native driver already claimed access to it</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']}></Plugins.Data>
    {notes}

    <A>
        <Quote>
            <Fragment order={0}>
                Operating systems support such devices using the <TextMarker>"class driver" provided by the OS</TextMarker> vendor.
            </Fragment>
                <br /><br />
            <Fragment order={1}>
                There is however a long tail of <TextMarker>devices that do not fit into</TextMarker> one of the <TextMarker>standardized device classes</TextMarker>. 
            </Fragment>
                <br /><br />
            <Fragment order={2} displayAs="inline">
                These devices require <TextMarker>hardware vendors to write native drivers</TextMarker> and SDKs in order for developers to take advantage of them
            </Fragment>
            <Fragment order={3} displayAs="inline">
               &nbsp;and this <TextMarker>native code prevents these devices from being used by the web</TextMarker>.
            </Fragment>
        </Quote>
    </A>

  </Slide>
)
