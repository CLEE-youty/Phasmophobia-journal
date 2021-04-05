/** panel */
import styled from 'styled-components'
import { LeftButton, RightButton } from '../Atoms/button'
import { TEXT_BOX } from '../Atoms/textBox'

interface Lists {
  evidence: Array<string>
}

const click = (e) => {
}

export const SELECT_PANEL = ({ evidence }: Lists) => {
  return (
    <Wrapper>
      <LEFT_BUTTON_STYLED onClick={click} />
      <TEXT_BOX list={evidence}/>
      <RIGHT_BUTTON_STYLED onClick={click} />
    </Wrapper>
  )
}

const Wrapper = styled.div``

/**
 * Atomのコンポーネントのスタイルを変更する場合は、
 * そのスタイル自体を定義している変数
 * e.x) Atoms/button.tsx ⇨ LeftButton
 * をstyled()の引数として引っ張ってくる
 */
const LEFT_BUTTON_STYLED = styled(LeftButton)`
  border: none;
  width: 30px;
  height: 30px;
`
const RIGHT_BUTTON_STYLED = styled(RightButton)`
  border: none;
  width: 30px;
  height: 30px;
`