/** panels */
import styled from 'styled-components'
import { SELECT_PANEL } from '../Molecules/panel'

interface EvidenceText {
  evidence: Array<string>
}

export const SELECT_PANELS = ({ evidence }: EvidenceText) => {
  return (
    <Wrapper>
      <SELECT_PANEL evidence={evidence} />
      <SELECT_PANEL evidence={evidence} />
      <SELECT_PANEL evidence={evidence} />
    </Wrapper>
  )
}

const Wrapper = styled.div``