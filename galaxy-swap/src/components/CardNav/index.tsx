import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from 'glx-uikit'
import useI18n from 'hooks/useI18n'

const StyledNav = styled.div`
  margin-bottom: 20px;
`


function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()

  return (
    <StyledNav style={{ marginLeft: '25px', borderRadius: '4px' }}>
      <div className="row mt-4">
        <div className="col-auto" style={{ background: '#0B001E' }}>
          <ButtonMenu activeIndex={activeIndex} scale="sm">
            {activeIndex === 0 ? (
              <ButtonMenuItem
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                  background: '#271049',
                  border: '1px solid #FF00FF',
                  borderRadius: '4px',
                }}
                id="swap-nav-link"
                to="/swap"
                as={Link}
              >
                {TranslateString(1142, 'Exchange')}
              </ButtonMenuItem>
            ) : (
              <ButtonMenuItem
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                  background: '#271049',
                  borderRadius: '4px',
                }}
                id="swap-nav-link"
                to="/swap"
                as={Link}
              >
                {TranslateString(1142, 'Exchange')}
              </ButtonMenuItem>
            )}
            {activeIndex === 1 ? (
              <ButtonMenuItem
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                  background: '#271049',
                  borderRadius: '4px',
                  border: '1px solid #FF00FF',
                }}
                id="pool-nav-link"
                to="/pool"
                as={Link}
              >
                {TranslateString(262, 'Pool')}
              </ButtonMenuItem>
            ) : (
              <ButtonMenuItem
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                  background: '#271049',
                  borderRadius: '4px',
                }}
                id="pool-nav-link"
                to="/pool"
                as={Link}
              >
                {TranslateString(262, 'Pool')}
              </ButtonMenuItem>
            )}

            {activeIndex === 2 ? (
              <ButtonMenuItem
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                  background: '#271049',
                  borderRadius: '4px',
                  border: '1px solid #FF00FF',
                }}
                id="pool-nav-link"
                as="a"
                href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bridge
              </ButtonMenuItem>
            ) : (
              <ButtonMenuItem
                style={{
                  paddingLeft: '25px',
                  paddingRight: '25px',
                  paddingTop: '25px',
                  paddingBottom: '25px',
                  background: '#271049',
                  borderRadius: '4px',
                }}
                id="pool-nav-link"
                as="a"
                href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bridge
              </ButtonMenuItem>
            )}
          </ButtonMenu>
        </div>
        <div className="col-auto">
          <ButtonMenuItem className="setting-icon" style={{marginLeft: '-14px' }} />
          <ButtonMenuItem className="order-history-icon" style={{ marginLeft: '4px' }} />
        </div>
      </div>
    </StyledNav>
  )
}

export default Nav
