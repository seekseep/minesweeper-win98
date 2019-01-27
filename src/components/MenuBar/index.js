import React from 'react'
import styled from 'styled-components'
import Item from "./Item"

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1px;
`

const MenuBar = (props) => (
  <Wrap>
    { props.children }
  </Wrap>
)

MenuBar.Item = Item

export default MenuBar