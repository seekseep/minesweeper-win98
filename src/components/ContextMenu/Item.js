import React from 'react'
import styled, { css } from 'styled-components'

const Wrap = styled.div`
    display: flex;
    margin-bottom: 1px;
    line-height: 16px;
    &:hover{
      background-color: #000080;
      color: #FFF;
    }

    ${(props) => props.active && css`
      background-color: transparent;
      color: inherit;
    `}
`

const Check = styled.div`
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
`

const Label = styled.div`
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    text-align-last: left;
    flex-grow: 1;
    white-space: nowrap;
`

const ShortCut = styled.div`
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
`

const Right = styled.div`
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
`

const ChildWrap = styled.div`

`

const Item = (props) => (
  <Wrap>
    <Check />
    <Label>{ props.label }</Label>
    <ShortCut>{ props.shortcut }</ShortCut>
    <Right />
    <ChildWrap>
      { props.children }
    </ChildWrap>
  </Wrap>
)

export default Item
