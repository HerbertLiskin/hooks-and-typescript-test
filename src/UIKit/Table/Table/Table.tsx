import styled from 'styled-components'

interface TableModel {
  minWidth?: string
}

const minWidth = (props: TableModel) => props.minWidth && `
  min-width: ${props.minWidth};
`

/** @component */
export default styled.table`
  display: block;
  width: 100%;
  line-height: 1;
  opacity: 1;
  transition: opacity .2s;

  ${minWidth}
`
