import React from "react"
import styled, { css } from "styled-components"

const activeColor = "#FF0000"

const Wrap = styled.div`
  width: 13px;
  height: 23px;
  position: relative;
  color: #440000;
`

const TopBar = styled.div`
  position: absolute;
  top: 1px;
  left: 2px;
  width: 9px;
  height: 3px;
  border-top: solid currentColor 3px;
  border-left: solid transparent 3px;
  border-right: solid transparent 3px;

  ${(props) => props.active === true && css`color: ${activeColor}`}
`

const LeftBar = styled.div`
  position: absolute;
  left: 1px;
  width: 3px;
  height: 9px;
  border-left: solid currentColor 3px;
  border-top: solid transparent 3px;
  border-bottom: solid transparent 3px;

  ${props => props.top && css`top: 2px;`}
  ${props => props.bottom && css`bottom: 2px;`}
  ${props => props.active && css` color: ${activeColor}`}
`
const RightBar = styled.div`
  position: absolute;
  right: 1px;
  width: 3px;
  height: 9px;
  border-right: solid currentColor 3px;
  border-top: solid transparent 3px;
  border-bottom: solid transparent 3px;

  ${props => props.top && css`top: 2px;`}
  ${props => props.bottom && css`bottom: 2px;`}
  ${props => props.active && css` color: ${activeColor}`}
`
const MiddleBar = styled.div`
  width: 5px;
  height: 3px;
  position: absolute;
  left: 4px;
  top: 10px;
  color: inherit;
  background-color: currentColor;

  .before, .after {
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: 1px;
    height: 3px;
  }

  .before {
    left: -2px;
    top: 0;
    border-top: solid 1px transparent;
    border-right: solid 2px currentColor;
    border-bottom: solid 1px transparent;
  }

  .after {
    right: -2px;
    bottom: 0;
    border-top: solid 1px transparent;
    border-left: solid 2px currentColor;
    border-bottom: solid 1px transparent;
  }

  ${props => props.active && css`
    &, .before, .after {
      color: ${activeColor};
    }
  `}
`
const BottomBar = styled.div`
  position: absolute;
  bottom: 1px;
  left: 2px;
  width: 9px;
  height: 3px;
  border-bottom: solid currentColor 3px;
  border-left: solid transparent 3px;
  border-right: solid transparent 3px;
  color: inherit;

  ${props => props.active && css` color: ${activeColor}`}
`

const Character = ({character}) => {

  let c = character,
    isTopbarActive = !!"02356789".match(c),
    isTopLeftpbarActive = !!"045689".match(c),
    isTopRightpbarActive = !!"01234789".match(c),
    isMiddlebarActive = !!"2345689".match(c),
    isBottomLeftbarActive = !!"0268".match(c),
    isBottomRightbarActive = !!"013456789".match(c),
    isBottombarActive = !!"0235689".match(c)

  return (
    <Wrap>
      <TopBar active={isTopbarActive} />
      <LeftBar top active={isTopLeftpbarActive} />
      <RightBar top active={isTopRightpbarActive} />
      <MiddleBar active={isMiddlebarActive}>
        <div className="before" />
        <div className="after" />
      </MiddleBar>
      <LeftBar bottom active={isBottomLeftbarActive} />
      <RightBar bottom active={isBottomRightbarActive} />
      <BottomBar active={isBottombarActive} />
    </Wrap>
  )
}

export default Character