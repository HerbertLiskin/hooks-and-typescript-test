import styled, { css } from 'styled-components'

interface ButtonModel {
  fullWidth?: boolean
  small?: boolean
  disabled?: boolean
}

const fullWidth = (p: ButtonModel) => p.fullWidth && css`
  width: 100%;
`

const small = (p: ButtonModel) => p.small && css`
  font-size: 12px;
  padding: 0 15px;
  height: 36px;
`

const disabled = (p: ButtonModel) => p.disabled && css`
  background-color: grey;
  pointer-events: none;
  cursor: initial;
  color: white;
`

/** @component */
export default styled.button`
  font-size: 14px;
  position: relative;
  height: 40px;
  padding: 0 40px;
  overflow: visible;
  border: none;
  border-radius: 3px;
  background-color: blue;
  text-align: center;
  color: white;
  box-shadow: 0;
  transition: 0.1s ease-in-out all;
  cursor: pointer;

  ::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  :hover {
    box-shadow: 0 8px 16px rgba(0, 13, 38, .1);
  }

  ${fullWidth}
  ${small}
  ${disabled}
`
