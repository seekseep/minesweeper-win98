import styled from "styled-components"

const Bomb = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #000;
  box-shadow:
    -1px -1px 0px 3px #000 inset,
    0px 0px 0px 4px #FFF inset,
    0px 4px 0px -3px #333,
    0px 5px 0px -3px #333,
    4px 0px 0px -3px #333,
    5px 0px 0px -3px #333,
    0px -4px 0px -3px #333,
    0px -5px 0px -3px #333,
    -4px 0px 0px -3px #333,
    -5px 0px 0px -3px #333,
    -3px 3px 0px -3px #333,
    -4px 4px 0px -3px #333,
    -3px -3px 0px -3px #333,
    -4px -4px 0px -3px #333,
    3px -3px 0px -3px #333,
    4px -4px 0px -3px #333,
    3px 3px 0px -3px #333,
    4px 4px 0px -3px #333;
`

export default Bomb
