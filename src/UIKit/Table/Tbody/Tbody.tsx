import styled from 'styled-components'

interface Tbody {
  striped?: boolean
}

const striped = (props: Tbody) => props.striped && `
  color: #ddd;
`
/** @component */
export default styled.tbody`
  display: block;
  color: var(--colorText);

  & tr:nth-child(2n) {
    ${striped}

    &:hover {
      background-color: var(--background-button-active);
    }
  }
`
