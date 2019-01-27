import React from 'react'
import styled from 'styled-components'
import Item from "./Item"
import Separator from "./Separator"

const Wrap = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    background: #CCC;
    border-top: solid 1px #FFF;
    border-left: solid 1px #FFF;
    border-bottom: solid 1px #888;
    border-right: solid 1px #888;
    box-shadow: -1px -1px 0px #DDD, 0px -1px 0px #DDD, -1px 0px 0px #DDD, 1px 0px 0px #444, 0px 1px 0px #444, 1px 1px 0px #444;
    z-index: 1;
    padding: 2px;
`

const ContextMenu = (props) => (
  <Wrap>
    { props.children }
  </Wrap>
)

ContextMenu.Item = Item
ContextMenu.Separator = Separator

export default ContextMenu
