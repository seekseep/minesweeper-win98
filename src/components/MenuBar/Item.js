import React from 'react'
import styled, { css } from 'styled-components'

const labelActive = `
  color: #000;
  background-color: transparent;
  box-shadow: 1px 1px 0px 0px #777 inset;
`

const Wrap = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`

const Label = styled.button`
  padding: 0 6px;
  line-height: 18px;
  display: block;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover{
    color: #FFF;
    background-color: #000080;
  }

  &:active {
    ${labelActive}
  }

  ${props => props.active === true && css`
    ${labelActive}
  `}
`

const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
`

const Item = (props) => (
  <Wrap>
    <Label active={props.active} onClick={props.onClick}>
      { Array.from(props.label).map((c, i) => (i === 0) ? <u key={i}>{c}</u> : <span key={i}>{c}</span>) }
    </Label>
    {(() => props.active ? (
      <Content>
        { props.children }
      </Content>
    ) : null)()}
  </Wrap>
)

export default Item
