import React from "react"
import _ from "lodash"
import styled from "styled-components"

import Cell from "./Cell"
import Flag from "./Flag"
import Hint from "./Hint"
import Bomb from "./Bomb"

const Wrap = styled.div`
    position: relative;
    color: #440000;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
`

const MS_Map = (props) => {

  let style = {
    width: props.size * 16 + "px",
    height: props.size * 16 + "px"
  }

  return (
    <Wrap style={style}>
      {_.range(64).map((_, i)=>
        <Cell key={i} mined={0 <= i % 12 && i % 12 <= 10} danger={i % 12 === 10} flat={i % 12 === 11}>
          {(()=>{
            switch(i % 12) {
              case 0: return <Hint value={1} />
              case 1: return <Hint value={2} />
              case 2: return <Hint value={3} />
              case 3: return <Hint value={4} />
              case 4: return <Hint value={5} />
              case 5: return <Hint value={6} />
              case 6: return <Hint value={7} />
              case 7: return <Hint value={8} />
              case 8: return <Flag />
              case 9:
              case 10: return <Bomb />
              default: return null
            }
          })()}
        </Cell>
      )}
    </Wrap>
  )
}

export default MS_Map