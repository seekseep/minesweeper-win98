import React from "react"
import styled, { css } from "styled-components"

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const Value = styled.div`
  display: block;
  font-weight: bold;
  transform: scale(1.4,1);
  font-size: 14px;
  ${props => props.value === 1 && css`color: #0000FF;`}
  ${props => props.value === 2 && css`color: #00CC00;`}
  ${props => props.value === 3 && css`color: #FF0000;`}
  ${props => props.value === 4 && css`color: #FF00FF;`}
  ${props => props.value === 5 && css`color: #FF00FF;`}
  ${props => props.value === 6 && css`color: #FF00FF;`}
  ${props => props.value === 7 && css`color: #FF00FF;`}
  ${props => props.value === 8 && css`color: #FF00FF;`}
`

const Hint = (props) => (
  <Wrap>
    <Value value={props.value}>{props.value}</Value>
  </Wrap>
)

export default Hint