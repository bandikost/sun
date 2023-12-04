/*-------------------------------------------------------------------------
IMPORTANT: the development build does not use this entrypoint


changes made to this file should be duplicated to `/dev-server/js/entry.js`
if they are intended to affect the development build
-------------------------------------------------------------------------*/

"use strict"

//promise polyfill for fetch api
import 'babel-polyfill'

//import React & ReactDOM for browser rendering
import React from 'react'
import {render} from "react-dom"

import Index from './index.js'

render(
    <Index />,
    document.getElementById('app-container')
)
