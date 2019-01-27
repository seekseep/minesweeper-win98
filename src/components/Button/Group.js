import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
`

const Group = (props) => (
  <Wrap>
    { props.children }
  </Wrap>
)

export default Group
