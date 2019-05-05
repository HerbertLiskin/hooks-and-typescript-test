import styled, { css } from 'styled-components'

interface Tbody {
  type: string
  header?: boolean
  isHovering?: boolean
  isActive?: boolean
  maxWidth?: string
  minWidth?: string
}

const small = (props: Tbody) => props.type === 'small' && css`
  flex: 0 0 50px;
  justify-content: center;
  text-align: center;
`

const basis = (props: Tbody) => props.type === 'basis' && css`
  flex: 3 0 0%;
  justify-content: flex-start;
  text-align: left;
  ${props.minWidth ? `min-width: ${props.minWidth}` : ''}
`

const left = (props: Tbody) => props.type === 'left' && css`
  flex: 1 1 0%;
  justify-content: flex-start;
  text-align: left;
  ${props.minWidth ? `min-width: ${props.minWidth}` : ''}
`

const right = (props: Tbody) => props.type === 'right' && css`
  flex: 1 1 0%;
  justify-content: flex-end;
  text-align: right;
  ${props.minWidth ? `min-width: ${props.minWidth}` : ''}
`

const center = (props: Tbody) => props.type === 'center' && css`
  flex: 1 1 0%;
  justify-content: center;
  text-align: center;
  ${props.minWidth ? `min-width: ${props.minWidth}` : ''}
`

const isHovering = (props: Tbody) => props.isHovering && css`
  :hover {
    background: #d1d1f1;
  }
`

const isActive = (props: Tbody) => props.isActive && css`
  background: #b1b2fd;
`

const header = (props: Tbody) => props.header && css`
  font-weight: bold;
  color: var(--font-color);
  border: none;
`

const maxWidth = (props: Tbody) => props.maxWidth && css`
  max-width: ${props.maxWidth}
`

/** @component */
export default styled.td`
  display: flex;
  position: relative;
  align-items: center;
  min-height: 32px;
  padding: 5px 15px;

  &:first-child {
    padding: 5px 15px 5px 5px;
  }

  &:last-child {
    padding: 5px 5px 5px 15px;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 40%;
    right: 0;
    border-right: 1px solid #edd0d0;;
  }

  ${header}

  ${small}
  ${basis}
  ${left}
  ${right}
  ${center}

  ${isHovering}
  ${isActive}

  ${maxWidth}
`
