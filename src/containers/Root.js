import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App'

import { injectGlobal } from "styled-components"

injectGlobal`
  body {
    font-family: Arial, sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 11px;
    user-select: none;
    margin: 0;
    -webkit-user-select: none;
    cursor: default;
  }

  button {
    &:focus {
      outline: none;
    }
  }
  .win98 {
    div {
      box-sizing: border-box;
      &::before, &::after {
        content: "";
        display: none;
      }
    }
  }
`

const Root = ({ store }) => (
  <Provider store={store}>
    <div className="win98">
      <Route path="/" component={App} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root