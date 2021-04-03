/** panels */
import styled from 'styled-components'
import { SELECT_PANELS } from '../Organisms/panels'
import { TEXT_BOX } from '../Atoms/textBox'
import { brandColor } from '@/const/color'
import { SP_WIDTH } from '@/const/breakpoint'

interface EvidenceText {
  evidence: Array<string>;
}

export const PHASMOPHOBIA = ({ evidence }: EvidenceText) => {
  return (
    <Wrapper>
        <SELECT_PANELS evidence={evidence} />
        <TEXT_BOX evidence={evidence} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${SP_WIDTH}px;
  margin: 0 auto;
  text-align: center;
  background-color: ${brandColor};
`