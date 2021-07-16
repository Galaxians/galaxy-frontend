import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'glx-uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 40px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  return (
    <StyledNav style={{marginTop:'20px',marginLeft:'25px',borderRadius: '6px',backgroundColor: '#0B001E'}}>
      <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem style={{padding:'25px',background: '#271049', border:'1px solid #FF00FF',borderRadius: '6px'}} id="swap-nav-link" to="/swap" as={Link}>
          {TranslateString(1142, 'Exchange')}
        </ButtonMenuItem>
        <ButtonMenuItem style={{padding:'25px',background: '#271049', borderRadius: '6px'}} id="pool-nav-link" to="/pool" as={Link}>
          {TranslateString(262, 'Pool')}
        </ButtonMenuItem>
        <ButtonMenuItem
          style={{padding:'25px',background: '#271049', borderRadius: '6px'}}
          id="pool-nav-link"
          as="a"
          href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
          target="_blank"
          rel="noreferrer noopener"
        >
          Bridge
        </ButtonMenuItem>
      </ButtonMenu>

    </StyledNav>
  )
}

export default Nav
