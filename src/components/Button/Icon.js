import React from 'react'
import styled, { css } from 'styled-components'

const Body = styled.div`

  .before, .after {
    display: none;
  }

  ${props => props.name === 'minimize' && css`
    width: 6px;
    height: 2px;
    background: #000;
    position: absolute;
    top: 8px;
    left: 3px;
  `}

  ${props => props.name === 'maximize' && css`
    width: 9px;
    height: 9px;
    position: absolute;
    top: 1px;
    left: 2px;
    border-color: #86807F;
    background-color: transparent;
    border-style: solid;
    border-width: 2px 1px 1px 1px;
    box-shadow: 1px 1px 1px #FFF;
  `}

  ${props => props.name === 'close' && css`

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: left;

    .before, .after{
      display: block;
      width: 8px;
      height: 0;
      border-bottom: 1px solid #000;
      position: absolute;
      top: 50%;
      left: 50%;
    }

    .before{
      transform: translate(-50%, -50%) rotate(45deg);
    }

    .after{
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
`

const Icon = (props) => (
  <Body name={props.name}>
    <span className='before'></span>
    <span className='after'></span>
  </Body>
)

export default Icon