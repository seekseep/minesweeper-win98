import React from "react"
import styled from "styled-components"

const Body = styled.div`
  position: absolute;
  width: 5px;
  height: 4px;
  top: 2px;
  left: 3px;
  border-right: solid 4px #800000;
  border-top: solid 5px #ff0000;
`

const Bar = styled.div`
  position: absolute;
  left: 4px;
  top: 0px;
  width: 1px;
  height: 5px;
  background-color: #000;
`

const Ground = styled.div`
  position: absolute;
  top: 4px;
  left: 1px;
  width: 7px;
  height: 1px;
  border-bottom: solid 2px #000;
  border-left: transparent 2px solid;
  border-right: transparent 2px solid;
`

const Flag = () => (
  <Body>
    <Bar />
    <Ground />
  </Body>
)

export default Flag