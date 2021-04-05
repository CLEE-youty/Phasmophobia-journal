import React, {FC} from 'react'
import styled from 'styled-components'
import { PHASMOPHOBIA } from '@/components/Templates/Phasmophobia'

const EVIDENCE_LIST = [
  'EMF Level 5',
  'Spirit Box',
  'Finger Print',
  'Ghost Orb',
  'Ghost Writing Book',
  'Freezing Temperature',
]

const GHOST_LIST = [
  'Spirit',
  'Wraith',
  'Phantom',
  'Poltergeist',
  'Banshee',
  'Jinn',
  'Mare',
  'Revenant',
  'Shade',
  'Demon',
  'Yurei',
  'Oni',
]

export const Index: FC = () => {
  return (
    <PHASMOPHOBIA evidence={EVIDENCE_LIST} ghost={GHOST_LIST} />
  )
}