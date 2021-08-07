import React from 'react'
import styled from 'styled-components'
import { Card } from 'glx-uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  padding: 10px 0px;
  max-width: 500px;
  min-width: 372px;
  width: 100%;
  z-index: 5;
  //background: #0b001e 0% 0% no-repeat padding-box;
  //box-shadow: 0px 3px 99px #ff1fff38;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */

export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <BodyWrapper>{children}</BodyWrapper>
    </div>
  )
}
