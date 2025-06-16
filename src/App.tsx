import React from 'react'
import logo from './logo.svg'
import './App.css'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const bold = css`
  font-weight: bold;
`

const containerStyles = css`
  color: red;
  ${bold}
`

const Button = styled.button`
  color: pink;
  ${bold}
`

function App() {
  return (
    <div className="App" css={containerStyles}>
      <Button>pink</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
