import styled, { css } from 'styled-components'

interface TrModel {
  isHovering?: boolean
  isActive?: boolean
  isDisabled?: boolean
}


const isHovering = (props: TrModel) => props.isHovering && css`
  :hover {
    border-radius: 4px;
    border: #edd0d0;
  }
`

const isActive = (props: TrModel) => props.isActive && css`
  border-radius: 4px;

  td::after {
    border-right-color: #edd0d0 !important;
  }
`

const isDisabled = (props: TrModel) => props.isDisabled && css`
  opacity: .4;
`

/** @component */
export default styled.tr`
  font-size: 12px;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: stretch;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0);
  border-right: 1px solid rgba(255, 255, 255, 0);
  border-bottom: 1px solid #edd0d0;
  border-left: 1px solid rgba(255, 255, 255, 0);

  ${isHovering}
  ${isActive}
  ${isDisabled}
`
