/** button */
import styled from 'styled-components'

const arrowLeftImg = 'static/img/arrow-left.svg'
const arrowRightImg = 'static/img/arrow-right.svg'

export const LEFT_BUTTON = () => {
  return <LeftButton />
}

export const RIGHT_BUTTON = () => {
  return <RightButton />
}

const Button = styled.button`
  display: inline-block;
  background-color: black;
  height: 20px;
  width: 20px;
`

const LeftButton = styled(Button)`
  background: url(${arrowLeftImg});
`

const RightButton = styled(Button)`
  background: url(${arrowRightImg});
`