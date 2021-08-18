import React, { useContext, useMemo, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'
import { Card, Button, ChevronDownIcon, SearchIcon, Text, ChevronLeftIcon, ChevronRightIcon } from 'glx-uikit'

export const QuestionMark = styled(Text)`
  margin-left: 5px;
  border-radius: 100%;
  background: transparent;
  color: #FF1FFF;
  border: 1px solid #FF1FFF;
  width: 12px;
  height: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const Btn = styled.button`
    flex: 1;
    display: flex; 
    background: #9A9A9A; 
    border-radius: 8px; 
    height: 32px; 
    align-items: center; 
    justify-content: center;
    border: unset;
    color: white;
    &:hover{
        background: #FF1FFF;
    }
`

export const DetailCard = styled(Card)`
    background: transparent linear-gradient(132deg, #0B001E 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    width: 900px;
    padding: 50px;
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 5px;
`

export const Header = styled.div`
    background: #40117E 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 86px #00000029;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    width: 100%;
    color: white;
    padding: 10px;
    font-size: 14px;
`

export const Footer = styled.div`
    background: #40117E 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 86px #00000029;
    border: 0.5px solid #FF1FFF;
    border-top: 0px;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    width: 100%;
    color: white;
    padding: 10px;
    font-size: 12px;
`
export const Input = styled.input`
    width: 100%;
    background: #40117E 0% 0% no-repeat padding-box;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px;
    margin-top: 5px;
    font-size: 14px;
    padding: 4px;
    outline: none;
    color: white;
`

export default function LaunchPadDetatil() {

    return (
        <DetailCard>
            <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', margin: '25px 0px', padding: '5px' }}>
                    <div style={{ flex: 1, width: '50%', position: 'relative', display: 'flex' }}>
                        <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue" style={{ width: '150px' }} />
                        <div style={{ position: 'absolute', color: 'black', fontSize: '14px', right: 60, top: -40, background: 'white', borderRadius: '100%', width: '100px', height: '100px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>Token Logo Here</div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ padding: '5px' }}>
                            Socials
                        </div>
                        <div >
                            <a href="https://discord.com/invite/dq7m6R7UAz" target='_blank' rel="noreferrer" style={{ padding: '5px' }}>
                                <img src="./assets/img/icon-1.png" alt="" width="25px" />
                            </a>
                            <a href="https://t.me/GalaxyProtocolOfficialTG" target='_blank' rel="noreferrer" style={{ padding: '5px' }}>
                                <img src="./assets/img/telegram.png" alt="" width="25px" />
                            </a>
                            <a href="https://twitter.com/GalaxyProtocol" target='_blank' rel="noreferrer" style={{ padding: '5px' }}>
                                <img src="./assets/img/twitter.png" alt="" width="25px" />
                            </a>
                        </div>
                    </div>
                </div>
                <Body>
                    <Header>
                        Tag line of the token here
                    </Header>
                    <Footer>
                        <div >Presale Address: 0x45ce53b1760eBFF556a2f670b0530822C5b7500A</div>
                        <div style={{ marginTop: '15px' }}>Token Address: 0xC512261b8AE70260447A74aC7d94dAee150B90C0</div>
                        <div style={{ marginTop: '5px', color: '#FF1FFF' }}>Do not send BNB to the token address</div>
                    </Footer>
                </Body>
                <Body>
                    <Header>
                        About the token
                    </Header>
                    <Footer>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Footer>
                </Body>
                <Body>
                    <Header>
                        Token details
                    </Header>
                    <Footer>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Sale Id</div>
                                <div style={{ flex: 1 }}>16</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Total Supply</div>
                                <div style={{ flex: 1 }}>100000000000.0000 TKN</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Tokens For Presale</div>
                                <div style={{ flex: 1 }}>8000000000.0000 TKN</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Tokens For Liquidity</div>
                                <div style={{ flex: 1 }}>5000000.0000 TKN</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Soft Cap</div>
                                <div style={{ flex: 1 }}>250 BNB</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Hard Cap</div>
                                <div style={{ flex: 1 }}>500 BNB</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Presale Rate</div>
                                <div style={{ flex: 1 }}>200000.0000 TKN per BNB</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Minimum Contribution</div>
                                <div style={{ flex: 1 }}>0.05 BNB</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Maximum Contribution</div>
                                <div style={{ flex: 1 }}>3 BNB</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Presale Start Time</div>
                                <div style={{ flex: 1 }}>21 July 2021 at 20:00</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Presale End Time</div>
                                <div style={{ flex: 1 }}>24 July 2021 at 20:00</div>
                            </div>
                            <div style={{ display: 'flex', margin: '5px 0px' }}>
                                <div style={{ flex: 1 }}>Liquidity Unlock Date</div>
                                <div style={{ flex: 1 }}>15 Aug 2022 at 21:00</div>
                            </div>
                        </div>
                    </Footer>
                </Body>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginTop: '45px' }}>Raised: 50/100 BNB</div><QuestionMark style={{ marginTop: '35px' }}>?</QuestionMark>
                </div>
                <div style={{ position: 'relative', background: '#3F064E', width: '100%', height: '12px', borderRadius: '10px' , marginTop: '10px'}}>
                    <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '50%', borderRadius: '10px', background: '#FF1FFF' }} />
                </div>
                <div style={{marginTop: '10px'}}>
                    Sale ends in: 00:11:23:10
                </div>
                <div style={{marginTop: '30px', fontSize: '12px'}}>
                    Participate in this token
                </div>
                <Input placeholder="1BNB = 10000000000 Tokencoinname"/>
                <div style={{marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#FF1FFF 0% 0% no-repeat padding-box', borderRadius:'8px', height: '32px', cursor: 'pointer'}}>
                    BUY TOKEN
                </div>
                <div style={{marginTop: '20px', display: 'flex'}}>
                    <div style={{flex: 1}}>
                        <div style={{fontSize: '12px'}}>The amount you founded</div>
                        <Input placeholder="1BNB"/>
                    </div>
                    <div style={{flex: 1, marginLeft: '5px'}}>
                        <div style={{fontSize: '12px'}}>Amount of tokens reserved</div>
                        <Input placeholder="1000,000,000"/>
                    </div>
                </div>
                <div style={{marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#9A9A9A 0% 0% no-repeat padding-box', borderRadius:'8px', height: '32px', cursor: 'pointer'}}>
                    <Btn>CLAIM TOKEN</Btn>
                </div>
                <Body style={{padding: '0px', margin: '20px 0'}}>
                    <Header>
                        Token locks
                    </Header>
                    <Footer style={{textAlign: 'center'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}><QuestionMark style={{width: '20px', height: '20px', margin: '0px', fontSize: '20px', color: '#40117E', background: '#FF1FFF'}}>!</QuestionMark></div>
                        <div style={{marginTop: '5px', fontSize: '14px'}}>No token Locks for this token</div>
                        <div style={{marginTop: '5px'}}>On GalaxySwap</div>
                    </Footer>
                </Body>
                <Footer style={{textAlign: 'center', borderRadius: '8px', border: '0.5px solid #FF1FFF'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}><QuestionMark style={{width: '20px', height: '20px', margin: '0px', fontSize: '20px', color: '#40117E', background: '#FF1FFF'}}>!</QuestionMark></div>
                        <div style={{marginTop: '5px', fontSize: '14px'}}>No token Locks for this token</div>
                        <div style={{marginTop: '5px'}}>On GalaxySwap</div>
                </Footer>
                <Body style={{padding: '0px', margin: '20px 0'}}>
                    <Header style={{textAlign: 'center'}}>
                        Pairs &nbsp; &nbsp; &nbsp; &nbsp; Comments(15)
                    </Header>
                    <Footer style={{textAlign: 'center', height: '100px'}}/>
                </Body>
            </div>
        </DetailCard>
    )
}
