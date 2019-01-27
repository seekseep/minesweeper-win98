import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import * as actions from "../actions"
import Window from "../components/Window"
import TitleBar from "../components/TitleBar"
import MenuBar from "../components/MenuBar"
import ContextMenu from "../components/ContextMenu"
import MineSweeper from "../components/MineSweeper"

const Screen  = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #327D81;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {

  constructor(props) {
    super(props)

    console.log(props)

    this.state = {
      openedMenuItem: null
    }
  }

  static propTypes = {
    children: PropTypes.node,
    contextMenu: PropTypes.string
  }

  rootClick (event) {
    console.log(event.target)
  }

  render() {
    return (
      <Screen onClick={this.rootClick}>
        <Window>
          <TitleBar icon="bomb" label="Minesweeper" />
          <MenuBar>
            <MenuBar.Item label="Game" name="game" onClick={this.props.openContextMenu}>
              <ContextMenu name="game" current={this.props.contextMenu}>
                <ContextMenu.Item label="New" shortcut="F2" />
                <ContextMenu.Separator />
                <ContextMenu.Item label="Beginner" />
                <ContextMenu.Item label="Intermediate" />
                <ContextMenu.Item label="Expert" />
                <ContextMenu.Item label="Custom" />
                <ContextMenu.Separator />
                <ContextMenu.Item label="Mark (?)" />
                <ContextMenu.Item label="Color" />
                <ContextMenu.Separator />
                <ContextMenu.Item label="Best Times ..." shortcutIndex="5" />
                <ContextMenu.Separator />
                <ContextMenu.Item label="Exit" shortcutIndex="1" />
              </ContextMenu>
            </MenuBar.Item>
            <MenuBar.Item label="Help" name="help" onClick={this.props.openContextMenu}>
              <ContextMenu name="help" current={this.props.contextMenu}>
                <ContextMenu.Item label="Help Topics" />
                <ContextMenu.Item label="About Minesweeper" />
              </ContextMenu>
            </MenuBar.Item>
          </MenuBar>
          <Window.Content>
            <MineSweeper />
          </Window.Content>
        </Window>
      </Screen>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  contextMenu: state.contextMenu
})

export default withRouter(connect(mapStateToProps, {
  openContextMenu: actions.openContextMenu,
  closeContextMenu: actions.closeContextMenu
})(App))
