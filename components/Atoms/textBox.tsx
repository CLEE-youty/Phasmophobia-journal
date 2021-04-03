/** textBox */
import styled from 'styled-components'

interface EvidenceText {
  evidence: Array<string>;
}

export const TEXT_BOX = ({ evidence }: EvidenceText) => {
  return <TextBox>{ evidence }</TextBox>
}

const TextBox = styled.div`
  display: inline-block;
`