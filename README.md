# winbox-react

> This package is the react version of Winbox.js

Documentation with example code: [Visit Now](https://tanvirmahin24.github.io/winbox-react/)

[![NPM](https://img.shields.io/npm/v/winbox-react.svg)](https://www.npmjs.com/package/winbox-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save winbox-react
```
## Usage in functional components

```jsx
import React from 'react'

import WinboxReact from 'winbox-react'
import 'winbox-react/dist/index.css'

cosnt Example = () =>{
    return <WinboxReact />
  
}
```

## Usage in Class based components

```jsx
import React, { Component } from 'react'

import WinboxReact from 'winbox-react'
import 'winbox-react/dist/index.css'

class Example extends Component {
  render() {
    return <WinboxReact />
  }
}
```

## All available props

```jsx
const options = {
    // ADDING CUSTOM TITLE
    title: 'Custom Title',

    //ADDING BORDER example:  25px, 1rem, 10%, 3em. If any number is given it will be count as pixels
    border: '4',

    //ADDING BACKGROUND COLOR any valid css color code can be used. You also can use gradients.
    background:
      'linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)',

    //CUSTOM className
    className: '',

    //CUSTOM POSITION any valid
    x: 'center',
    y: 'center',

    //CUSTOM SIZE
    width: '20%',
    height: '50%',

    //LIMIT VIEWPORT
    top: 50,
    right: 50,
    bottom: 100,
    left: 50,

    //IS MODAL OR WINDOW (default is false)
    modal: false,

    //EMBED A WEBSITE using the url prop ()
    url: '',

    //USE THE MODERN THEME OF WINBOX
    modern: false

    //onClose EVENT
    onClose: myCustomFunction()
  }

  <WinboxReact {...options}>
          <h4>Lorem ipsum dolor sit amet</h4>
  </WinboxReact>
```

## License

MIT © [TanvirMahin24](https://github.com/TanvirMahin24)
