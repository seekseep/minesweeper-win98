import React, { Component } from 'react'
import styled from 'styled-components'

import Face from "./Face"
import Counter from "./Counter"
import Map from "./Map"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
`

const Head = styled.div`
  margin-bottom: 6px;
  min-height: 37px;
  height: 37px;
  max-height: 37px;
  border-top: solid 2px #888;
  border-left: solid 2px #888;
  border-right: solid 2px #FFF;
  border-bottom: solid 2px #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Body = styled.div`
  border-top: solid 3px #888;
  border-left: solid 3px #888;
  border-right: solid 3px #FFF;
  border-bottom: solid 3px #FFF;
  flex-grow: 1;
`

class MineSweeper extends Component {

  static propTypes = {
  }

  render() {
    return (
      <Wrap>
        <Head>
          <Counter value={0} length={3} />
          <Face />
          <Counter value={0} length={3} />
        </Head>
        <Body>
          <Map size={8} />
        </Body>
      </Wrap>
    )
  }
}

export default MineSweeper