import React, {FC} from 'react'
import styled from 'styled-components'
import { PHASMOPHOBIA } from '@/components/Templates/Phasmophobia'

const EVIDENCE_FIRST = [
  'Ghost Writing Book',
  'Spirit Box',
]

export const Index: FC = () => {
  return (
    <PHASMOPHOBIA evidence={EVIDENCE_FIRST} />
  )
}