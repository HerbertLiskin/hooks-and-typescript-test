import styled, { css } from 'styled-components'
import star from './images/star.svg'

interface InputModel {
  required?: boolean
  small?: boolean
  large?: boolean
  isDisabled?: boolean
  center?: boolean
  right?: boolean
}

const required = (props: InputModel) => props.required && css`
  background-image: url(${star});
  background-position: calc(100% - 8px) 50%;
  background-repeat: no-repeat;
  padding-right: 23px;
`

const small = (props: InputModel) => props.small && css`
  font-size: 12px;
  height: 24px;
  padding: 5px 12px;
`

const large = (props: InputModel) => props.large && css`
  height: 48px;
`

const disabled = (props: InputModel) => props.isDisabled && css`
  color: var(--colorTextButtonDisabled);
  background-color: var(--backgroundColorButtonDisabled);
`

const center = (props: InputModel) => props.center && css`
  text-align: center;
`

const right = (props: InputModel) => props.right && css`
  text-align: right;
`

/** @component */
export default styled.input`
  &[type="text"], &[type="password"], &[type="number"] {
    display: block;
    position: relative;
    width: 100%;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #666;
    padding: 10px 12px;
    outline: none;
    transition: border-color .25s;
    font-size: 14px;
    color: #666

    :hover {
      border-color: #999;
    }

    :focus {
      border-color: #000;
    }

    ::placeholder {
      color: #777;
    }

    ${disabled}
    ${required}
    ${large}
    ${small}
    ${center}
    ${right}
  }
`
