import styled, { css } from "styled-components"

const Cell = styled.div`

  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  position: relative;

  ${props => props.flat && css`
    border-top: 1px solid #FFF;
    border-left: 1px solid #FFF;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    box-shadow: -1px -1px #777 inset;
    cursor: pointer;

    &:active{
      border-bottom: 1px solid #FFF;
      border-right: 1px solid #FFF;
      border-left: 1px solid #000;
      border-top: 1px solid #000;
      box-shadow: none;
    }

  `}

  ${props => props.mined && css`
    border-left: dotted 1px #000;
    border-top: dotted 1px #000;
  `}

  ${props => props.danger && css`
    background-color: #F00;
  `}
`

export default Cell