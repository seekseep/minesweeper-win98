import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Button from './Button'

const Wrap = styled.div`
  display: flex;
  width: auto;
  height: 18px;
  padding: 1px;
  margin: 1px;
  color: #FFF;
  background: linear-gradient(left, #102463, #9BD0FB);
  background: -webkit-linear-gradient(left, #102463, #9BD0FB);
  cursor: move;
`

const Icon = styled.div`

  ${(props => props.name === "bomb" && css`
    position: relative;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;
    background-color: #000;
    box-shadow:
      -1px -1px 0px 3px #000 inset,
      0px 0px 0px 4px #FFF inset,
      0px 4px 0px -3px #333,
      0px 5px 0px -3px #333,
      4px 0px 0px -3px #333,
      5px 0px 0px -3px #333,
      0px -4px 0px -3px #333,
      0px -5px 0px -3px #333,
      -4px 0px 0px -3px #333,
      -5px 0px 0px -3px #333,
      -3px 3px 0px -3px #333,
      -4px 4px 0px -3px #333,
      -3px -3px 0px -3px #333,
      -4px -4px 0px -3px #333,
      3px -3px 0px -3px #333,
      4px -4px 0px -3px #333,
      3px 3px 0px -3px #333,
      4px 4px 0px -3px #333;
  `)}
`

const Label = styled.div`
  flex-grow: 1;
  line-height: 16px;
  text-align: left;
`

const Control = styled.div`
  display: flex;
  padding: 1px;
`

class TitleBar extends Component {

  static propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    onMinizie: PropTypes.func,
    onMaximize: PropTypes.func,
    onClose: PropTypes.func
  }

  render() {
    return (
      <Wrap>
        <Icon name={this.props.icon} />
        <Label>{this.props.label}</Label>
        <Control>
          <Button.Group>
            <Button icon="minimize" />
            <Button icon="maximize" />
            <Button icon="close" />
          </Button.Group>
        </Control>
      </Wrap>
    )
  }
}

export default TitleBar