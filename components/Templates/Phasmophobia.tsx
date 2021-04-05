/** Phasmophobia */
import styled from 'styled-components'
import { SELECT_PANELS } from '../Organisms/panels'
import { TEXT_BOX } from '../Atoms/textBox'
import { brandColor } from '@/const/color'
import { SP_WIDTH } from '@/const/breakpoint'

interface Lists {
  evidence: Array<string>;
  ghost: Array<string>
}

export const PHASMOPHOBIA = ({ evidence, ghost }: Lists) => {
  return (
    <Wrapper>
        <SELECT_PANELS evidence={evidence} />
        <TEXT_BOX list={ghost} />
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