import React from "react"
import styled from "styled-components"

const Wrap = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px #FFF;
  border-left: solid 1px #FFF;
  border-right: solid 1px #000;
  border-bottom: solid 1px #000;
  box-shadow: -1px -1px 0px #777 inset, 1px 1px 0px #777, -1px -1px 0px #777;
  background-color: #CCC;
  padding: 0;
  cursor: pointer;

  &:active{
    border-bottom: solid 1px #FFF;
    border-right: solid 1px #FFF;
    border-left: solid 1px #000;
    border-top: solid 1px #000;
    box-shadow: none;
  }
`

const Line = styled.div`
  width: 17px;
  height: 17px;
  border: solid 1px #000;
  border-radius: 50%;
  background: #f7fb06;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 1px;
  margin-left: 1px;   */
`

const Eyes = styled.div`
  display: flex;
  width: 7px;
  height: 2px;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px 3px;
`

const Eye = styled.div`
  width: 2px;
  height: 2px;
  background: #000;
`

const Mouse = styled.div`
  width: 9px;
  height: 3px;
  margin: 0 0 3px;
  overflow: hidden;
  position: relative;

  .after {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    border: solid 1px #000;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 50%;
  }
`

const Face = (props) => {
  return (
    <Wrap>
      <Line>
        <Eyes>
          <Eye/>
          <Eye/>
        </Eyes>
        <Mouse><div className="after" /></Mouse>
      </Line>
    </Wrap>
  )
}

export default Face
