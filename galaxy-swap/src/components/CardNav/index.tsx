import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, useModal } from 'glx-uikit'

import useI18n from 'hooks/useI18n'
import SettingsModal from '../PageHeader/SettingsModal'
import RecentTransactionsModal from '../PageHeader/RecentTransactionsModal'

const StyledNav = styled.div`
  margin-bottom: 10px;
`

function Nav({ activeIndex = 0 }: { activeIndex?: number }) {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)
  return (
    <StyledNav style={{ marginLeft: '10px', borderRadius: '4px' }}>
      <div className="row" style={{ marginTop: '10px'}}>
        <div className="col-auto" style={{ background: '#0B001E' }}>
          <ButtonMenu activeIndex={activeIndex} scale="sm">
            {activeIndex === 0 ? (
              <ButtonMenuItem
                style={{
                  paddingLeft: '0.9rem',
                  paddingRight: '0.9rem',
                  paddingTop: '0.9rem',
                  paddingBottom: '0.9rem',
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
                  paddingLeft: '0.9rem',
                  paddingRight: '0.9rem',
                  paddingTop: '0.9rem',
                  paddingBottom: '0.9rem',
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
                  paddingLeft: '0.9rem',
                  paddingRight: '0.9rem',
                  paddingTop: '0.9rem',
                  paddingBottom: '0.9rem',
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
                  paddingLeft: '0.9rem',
                  paddingRight: '0.9rem',
                  paddingTop: '0.9rem',
                  paddingBottom: '0.9rem',
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
                  paddingLeft: '0.9rem',
                  paddingRight: '0.9rem',
                  paddingTop: '0.9rem',
                  paddingBottom: '0.9rem',
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
                  paddingLeft: '0.9rem',
                  paddingRight: '0.9rem',
                  paddingTop: '0.9rem',
                  paddingBottom: '0.9rem',
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
          <ButtonMenuItem className="setting-icon" scale="sm" onClick={onPresentSettings} style={{ marginLeft: '0px', height:'32px',width:'32px' }} />
          <ButtonMenuItem
            className="order-history-icon"
            scale="sm"
            onClick={onPresentRecentTransactions}
            style={{ marginLeft: '9px', marginRight:'10px' }}
          />
        </div>
      </div>
    </StyledNav>
  )
}

export default Nav
