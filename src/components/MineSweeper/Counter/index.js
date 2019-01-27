import React from "react"
import styled from "styled-components"
import _ from "lodash"

import Character from "./Character"

const Wrap = styled.div`
  display: flex;
  background-color: #000;
  margin: 4px 5px;
  border-top: solid 1px #777;
  border-left: solid 1px #777;
  border-bottom: solid 1px #777;
  border-right: solid 1px #777;
`

const Counter = ({value, length}) => {

  let characters = _.toArray(_.padStart(value, length || value.length, ' '))

  return (
    <Wrap>
      { characters.map((character,i) => <Character key={i} character={character} />) }
    </Wrap>
  )
}

export default Counter