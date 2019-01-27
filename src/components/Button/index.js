import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from "./Icon"
import Group from "./Group"

const Wrap = styled.button`
    background-color: #DDD;
    width: 16px;
    height: 14px;
    border-top: solid 1px #FFF;
    border-left: solid 1px #FFF;
    border-right: solid 1px #413f42;
    border-bottom: solid 1px #413f42;
    box-shadow: -1px -1px 0px #817c78 inset;
    cursor: pointer;
    position: relative;

    &:active {
      border-right: solid 1px #FFF;
      border-bottom: solid 1px #FFF;
      border-left: solid 1px #413f42;
      border-top: solid 1px #413f42;
      box-shadow: none;
    }
`

class Button extends Component {

  static propTypes = {
    icon: PropTypes.string
  }

  render() {
    return (
      <Wrap>
        <Icon name={this.props.icon} />
      </Wrap>
    )
  }
}


Button.Group = Group

export default Button
