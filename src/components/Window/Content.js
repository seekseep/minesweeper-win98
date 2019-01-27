import React from 'react'
import styled from 'styled-components'

var Wrap = styled.div`
    border-top: solid 3px #FFF;
    border-left: solid 3px #FFF;
    border-right: solid 3px #7F8081;
    border-bottom: solid 3px #7F8081;
    background-color: #CCC;
    height: auto;
    margin: 1px;
    padding: 6px;
`

const Content = (props) => (
  <Wrap>
    { props.children }
  </Wrap>
)

export default Content
