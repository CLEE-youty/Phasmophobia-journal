/** panel */
import { string } from 'prop-types'
import styled from 'styled-components'
import { LEFT_BUTTON, RIGHT_BUTTON } from '../Atoms/button'
import { TEXT_BOX } from '../Atoms/textBox'

interface EvidenceText {
  evidence: Array<string>;
}

export const SELECT_PANEL = ({ evidence }: EvidenceText) => {
  return (
    <Wrapper>
      <LEFT_BUTTON />
      <TEXT_BOX evidence={evidence}/>
      <RIGHT_BUTTON />
    </Wrapper>
  )
}

const Wrapper = styled.div``