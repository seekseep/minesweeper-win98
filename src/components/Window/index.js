import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Content from "./Content"

const Wrap = styled.div`
  position: relative;
  background-color: #DDD;
  border-top: solid 1px #FFF;
  border-left: solid 1px #FFF;
  border-right: solid 1px #413f42;
  border-bottom: solid 1px #413f42;
  box-shadow: -1px -1px 0px #817c78 inset;
`

class Window extends Component {

  static propTypes = {
    children: PropTypes.node,
    width: PropTypes.number,
    height: PropTypes.number
  }

  render() {

    let style = {
      width: this.props.width ? this.props.width + "px" : "auto",
      height: this.props.height ? this.props.height + "px" : "auto"
    }

    return (
      <Wrap style={style}>
        { this.props.children }
      </Wrap>
    )
  }
}
Window.Content = Content


export default Window
