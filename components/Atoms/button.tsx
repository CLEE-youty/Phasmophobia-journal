/** button */
import styled from 'styled-components'

const arrowLeftImg = 'static/img/arrow-left.svg'
const arrowRightImg = 'static/img/arrow-right.svg'

export const LEFT_BUTTON = () => <LeftButton />
export const RIGHT_BUTTON = () => <RightButton />

const Button = styled.button`
  display: inline-block;
  background-color: black;
  height: 20px;
  width: 20px;
`

export const LeftButton = styled(Button)`
  background: url(${arrowLeftImg});
`

export const RightButton = styled(Button)`
  background: url(${arrowRightImg});
`