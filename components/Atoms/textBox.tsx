/** textBox */
import styled from 'styled-components'

interface Lists {
  list: Array<string>;
}

export const TEXT_BOX = ({ list }: Lists) => {
  return <TextBox>{ list }</TextBox>
}

const TextBox = styled.div`
  display: inline-block;
`