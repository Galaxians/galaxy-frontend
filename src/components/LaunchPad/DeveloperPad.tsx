import React, { useContext, useMemo, useState } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
// import VolumeDown from '@material-ui/icons/VolumeDown';
// import VolumeUp from '@material-ui/icons/VolumeUp';
import { Card, Button, ChevronDownIcon, SearchIcon, Text, ChevronLeftIcon, ChevronRightIcon } from 'glx-uikit'
import { ChevronRight } from 'react-feather';

export const DeveloperDiv = styled.div`
    width: 900px;
    background: transparent;
    margin-top: 50px;
`

export const MainDiv = styled.div`
    margin-top: 50px;
    background: #0B001E;
`

export const ChildDiv = styled.div`
    flex: 1;
    background: transparent linear-gradient(132deg, #61319F 0%, #311950 100%) 0% 0% no-repeat padding-box;
    color: white;
    padding: 100px 0px;
    border: 0.5px solid #707070;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
        background: #440C8B 0% 0% no-repeat padding-box;
    }
`

export const BackDiv = styled.div`
    color: white;
    width: 100px;
    cursor: pointer;
`

export const PresaleDiv = styled.div`
    background: #40117E 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 86px #00000029;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px 8px 0px 0px;
    opacity: 1;
    width: 100%;
    color: white;
    padding: 25px;
`

export const PresaleDetail = styled.div`
    background: #40117E 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 86px #00000029;
    border: 0.5px solid #FF1FFF;
    border-top: 0px;
    border-radius: 0px 0px 8px 8px;
    opacity: 1;
    width: 100%;
    color: white;
    padding: 25px;
`
export const TokenInput = styled.input`
  position: relative;
  display: flex;
  padding: 10px;
  color: white;
  align-items: center;
  white-space: nowrap;
  background: #320B67;
  border: 0.5px solid #FF1FFF;
  outline: none;
  border-radius: 8px;
  -webkit-appearance: none;
  font-size: 16px;
  transition: border 100ms;
  width: 70%;
`

export const CheckBtn = styled.div`
    background: #FF1FFF 0% 0% no-repeat padding-box;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px;
    opacity: 1;
    cursor: pointer;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
`

export const SimpleInput = styled.input`
    background: unset;
    border: unset;
    outline: unset;
    color: white;
`

export const PreDiv = styled.div`
    background: #320B67 0% 0% no-repeat padding-box;
    border: 0.5px solid #FF1FFF;
    border-radius: 8px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    padding: 10px
`

export default function DeveloperPad({
    GoBack,
}: { GoBack: () => void }) {

    const [activeIndex, setIndex] = useState(0);
    const [tokenAddress, setToken] = useState('');
    const [tokenCheck, setCheckToken] = useState(false);

    const onChange = event => {
        setToken(event.target.value);
    }

    const handleCheck = () => {
        setCheckToken(!tokenCheck);
    }

    const [slider1, setValue1] = React.useState(30);

    const handleSlider1 = (event, newValue) => {
        setValue1(newValue);
    };

    const [slider2, setValue2] = React.useState(30);

    const handleSlider2 = (event, newValue) => {
        setValue2(newValue);
    };

    const [slider3, setValue3] = React.useState(30);

    const handleSlider3 = (event, newValue) => {
        setValue3(newValue);
    };

    return (<DeveloperDiv>

        {activeIndex === 0 ? <BackDiv onClick={() => GoBack()}>
            <ChevronLeftIcon style={{ fill: '#FF1FFF' }} /> Go Back
        </BackDiv> : <BackDiv onClick={() => setIndex(0)}>
            <ChevronLeftIcon style={{ fill: '#FF1FFF' }} /> Go Back
        </BackDiv>}
        <div style={{ color: 'white', fontSize: '64px', textAlign: 'center', marginTop: '50px' }}>
            Nebula Launchpad
        </div>
        <div style={{ color: '#FF1FFF', fontSize: '24px', textAlign: 'center' }}>
            Launch your token easily
        </div>

        {activeIndex === 0 ? <MainDiv><div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
            Choose the services you would like to use
        </div>
            <div style={{ display: 'flex' }}>
                <ChildDiv onClick={() => setIndex(1)}>
                    <div style={{ fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                        Nebula Lanunchpad
                    </div>
                    <div style={{ fontSize: '11px', padding: '0px 50px', textAlign: 'center' }}>
                        Kickstart you Blockchain project, raise your capital and rock the crypto world!
                    </div>
                </ChildDiv>
                <ChildDiv onClick={() => setIndex(2)}>
                    <div style={{ fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                        High Security Token Locker
                    </div>
                    <div style={{ fontSize: '11px', textAlign: 'center' }}>
                        Lock your BSC tokens
                    </div>
                </ChildDiv>
                <ChildDiv onClick={() => setIndex(3)}>
                    <div style={{ fontSize: '16px', padding: '10px', textAlign: 'center' }}>
                        Intergalatic Liquidity Locker
                    </div>
                    <div style={{ fontSize: '11px', textAlign: 'center' }}>
                        Lock Liquidity tokens
                    </div>
                </ChildDiv>
            </div></MainDiv> : null}
        {activeIndex === 1 ? <div style={{ display: 'flex', justifyContent: 'center' }}><MainDiv style={{ width: '750px' }}>
            <div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                Nebula Lanunchpad
            </div>
            <div style={{ display: 'flex', padding: '50px', flexDirection: 'column', background: 'transparent linear-gradient(342deg, #1D0041 0%, #440C8B 100%) 0% 0% no-repeat padding-box' }}>
                <PresaleDiv>
                    Create your presale
                </PresaleDiv>
                {!tokenCheck ? <PresaleDetail>
                    <div style={{ display: 'flex' }}>
                        <TokenInput placeholder="Enter your token address..." />
                        <CheckBtn onClick={() => handleCheck()}>Check</CheckBtn>
                    </div>
                    <div style={{ display: 'flex', marginTop: '20px' }}>
                        <Text>Buyers participate with</Text>
                        <div style={{ marginLeft: '50px', marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                        <Text>WBNB</Text>
                        <ChevronDownIcon style={{ fill: '#FF1FFF' }} />
                    </div>
                    <Text style={{ marginTop: '20px', fontSize: '12px' }}>GalaxySwap V2 par to created</Text>
                    <Text style={{ fontSize: '12px', color: '#FF1FFF' }}>WBNB/?</Text>
                </PresaleDetail>
                    : <PresaleDetail style={{ padding: '25px 50px' }}>
                        <div style={{ display: 'flex' }}>
                            <TokenInput placeholder="Enter your token address..." />
                            <CheckBtn onClick={() => handleCheck()}>Check</CheckBtn>
                        </div>
                        <PreDiv style={{ width: '350px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100px', fontSize: '12px' }}>Status:</div>
                                <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100px', fontSize: '12px' }}>Code Verifed:</div>
                                <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100px', fontSize: '12px' }}>Proxy:</div>
                                <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100px', fontSize: '12px' }}>Mint:</div>
                                <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100px', fontSize: '12px' }}>lockTransations:</div>
                                <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '100px', fontSize: '12px' }}>Unlimited Fees:</div>
                                <div style={{ background: 'red', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ fontSize: '12px' }}>External Auditors: String []</div>
                            </div>
                        </PreDiv>
                        <div style={{ display: 'flex', marginTop: '20px' }}>
                            <Text style={{ fontSize: '14px' }}>Buyers participate with</Text>
                            <div style={{ marginLeft: '50px', marginRight: '10px', borderRadius: '100%', background: 'white', width: '21px' }} />
                            <Text style={{ fontSize: '14px' }}>WBNB</Text>
                            <ChevronDownIcon style={{ fill: '#FF1FFF' }} />
                        </div>
                        <PreDiv>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '21px', height: '21px' }} />
                                    <Text style={{ fontSize: '12px', color: '#FF1FFF' }}>WBNB / SAFEGALAXY</Text>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Text style={{ fontSize: '12px', color: '#FF1FFF' }}>0x2dbd..54Cc</Text>
                                    <Text style={{ fontSize: '12px', color: 'white', marginLeft: '5px', cursor: 'pointer' }}>X</Text>
                                </div>
                            </div>
                        </PreDiv>
                        <div style={{ marginTop: '20px', fontSize: '12px' }}>GalaxySwap V2 par to be created</div>
                        <div style={{ marginTop: '5px', fontSize: '12px', color: '#FF1FFF' }}>WBNB / SAFEGALAXY</div>
                        <div style={{ marginTop: '20px', fontSize: '14px' }}>Presale creator</div>
                        <div style={{ marginTop: '5px', fontSize: '12px', color: '#FF1FFF' }}>0x2dbd...54Cc</div>
                        <div style={{ marginTop: '20px', fontSize: '12px' }}>This account will be the only account capable of adding presale information, editing presale contract paramaters and unlocking liquidity.</div>
                        <PreDiv style={{ fontSize: '12px', color: '#FF1FFF' }}>
                            We recomend a minimum liquidity percentage of 60%, and a minimum lock of 1 year.
                        </PreDiv>
                        <div style={{ marginTop: '20px', fontSize: '14px' }}>How many SAFEGALAXY are up for presale?</div>
                        <PreDiv>
                            <div style={{ fontSize: '12px', textAlign: 'right', marginBottom: '5px' }}>Balance: 0</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ fontSize: '14px' }}>0</div>
                                <div style={{ fontSize: '14px' }}>SAFEGALAXY</div>
                            </div>
                        </PreDiv>
                        <div style={{ marginTop: '15px', fontSize: '12px', color: '#FF1FFF' }}>A minimum divisibility of 10,000 units (including decimals) is required for a presale.</div>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, fontSize: '14px', marginRight: '20px' }}>Soft Cap</div>
                                <div style={{ flex: 1, fontSize: '14px' }}>Hard Cap</div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, marginRight: '20px' }}>
                                    <PreDiv style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '10px' }}>
                                        <div>0</div><div>WBNB</div>
                                    </PreDiv>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <PreDiv style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '10px' }}>
                                        <div>0</div><div>WBNB</div>
                                    </PreDiv>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px', color: '#FF1FFF', fontSize: '14px' }}>
                                <div style={{ flex: 1 }} />
                                <div style={{ flex: 1 }}>Must be{'>'}0</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px', fontSize: '12px' }}>Presale rate</div>
                        <div style={{ marginTop: '5px', fontSize: '14px' }}>1 WBNB = 0 SAFEGALAXY</div>
                        <div style={{ marginTop: '20px', fontSize: '12px' }}>GalaxySwap listing rate</div>
                        <div style={{ marginTop: '5px', fontSize: '14px' }}>1 WBNB = 0.0 SAFEGALAXY</div>
                        <div style={{ marginTop: '20px', display: 'flex' }}>
                            <div style={{ width: '50px', borderRadius: '10px', border: '1px solid white', fontSize: '12px', cursor: 'pointer', padding: '5px', textAlign: 'center', marginRight: '10px' }}>0%</div>
                            <div style={{ width: '50px', borderRadius: '10px', border: '1px solid white', fontSize: '12px', cursor: 'pointer', padding: '5px', textAlign: 'center', marginRight: '10px' }}>10%</div>
                            <div style={{ width: '50px', borderRadius: '10px', border: '1px solid white', fontSize: '12px', cursor: 'pointer', padding: '5px', textAlign: 'center', marginRight: '10px' }}>25%</div>
                            <div style={{ width: '50px', borderRadius: '10px', border: '1px solid white', fontSize: '12px', cursor: 'pointer', padding: '5px', textAlign: 'center', marginRight: '10px' }}>40%</div>
                            <div style={{ width: '50px', borderRadius: '10px', border: '1px solid white', fontSize: '12px', cursor: 'pointer', padding: '5px', textAlign: 'center', marginRight: '10px' }}>60%</div>
                        </div>
                        <PreDiv style={{ width: '350px', padding: '25px' }}>
                            <div style={{ fontSize: '14px' }}>Amount of tokens for pre-sale</div>
                            <div style={{ fontSize: '14px', marginTop: '5px', textAlign: 'center' }}>{slider1}%</div>
                            <Grid container spacing={2} style={{ alignItems: 'center' }}>
                                <Grid item style={{fontSize: '30px', marginTop: '-5px', cursor: 'pointer'}}>
                                    -
                                </Grid>
                                <Grid item xs>
                                    <Slider value={slider1} onChange={handleSlider1} aria-labelledby="continuous-slider" />
                                </Grid>
                                <Grid item style={{fontSize: '30px', marginTop: '-5px', cursor: 'pointer'}}>
                                    +
                                </Grid>
                            </Grid>
                            <div style={{ fontSize: '14px', marginTop: '5px' }}>Amount of tokens for public sale</div>
                            <div style={{ fontSize: '14px', marginTop: '5px', textAlign: 'center' }}>{slider2}%</div>
                            <Grid container spacing={2} style={{ alignItems: 'center' }}>
                                <Grid item style={{fontSize: '30px', marginTop: '-5px', cursor: 'pointer'}}>
                                    -
                                </Grid>
                                <Grid item xs>
                                    <Slider value={slider2} onChange={handleSlider2} aria-labelledby="continuous-slider" />
                                </Grid>
                                <Grid item style={{fontSize: '30px', marginTop: '-5px', cursor: 'pointer'}}>
                                    +
                                </Grid>
                            </Grid>
                            <div style={{ fontSize: '14px', marginTop: '5px' }}>Amount of tokens for developers</div>
                            <div style={{ fontSize: '14px', marginTop: '5px', textAlign: 'center' }}>{slider3}%</div>
                            <Grid container spacing={2} style={{ alignItems: 'center' }}>
                                <Grid item style={{fontSize: '30px', marginTop: '-5px', cursor: 'pointer'}}>
                                    -
                                </Grid>
                                <Grid item xs>
                                    <Slider value={slider3} onChange={handleSlider3} aria-labelledby="continuous-slider" />
                                </Grid>
                                <Grid item style={{fontSize: '30px', marginTop: '-5px', cursor: 'pointer'}}>
                                    +
                                </Grid>
                            </Grid>
                        </PreDiv>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, fontSize: '14px', marginRight: '20px' }}>WBNB limit per user</div>
                                <div style={{ flex: 1, fontSize: '14px' }}>Lock Liquidity for</div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, marginRight: '20px' }}>
                                    <PreDiv style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '10px' }}>
                                        <div>0</div><div>WBNB</div>
                                    </PreDiv>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <PreDiv style={{ padding: '20px 10px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', marginTop: '10px' }}>
                                        <div>1 year</div><div><ChevronDownIcon /></div>
                                    </PreDiv>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px', color: '#FF1FFF', fontSize: '14px' }}>
                                <div style={{ flex: 1 }}>Must be{'>'}0</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, fontSize: '14px', marginRight: '20px' }}>Start date</div>
                                <div style={{ flex: 1, fontSize: '14px' }}>End date</div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1, marginRight: '20px' }}>
                                    <PreDiv style={{ display: 'flex', marginTop: '10px', fontSize: '12px' }}>
                                        <div>Thu 1 Jan 1970 01:00</div>
                                        <div style={{ color: '#FF1FFF' }}>52 years ago</div>
                                        <div>block 0</div>
                                    </PreDiv>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <PreDiv style={{ display: 'flex', marginTop: '10px', fontSize: '12px' }}>
                                        <div>Thu 1 Jan 1970 01:00</div>
                                        <div style={{ color: '#FF1FFF' }}>52 years ago</div>
                                        <div>block 0</div>
                                    </PreDiv>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: '10px', color: '#FF1FFF', fontSize: '14px' }}>
                                <div style={{ flex: 1 }}>Presale should ideally start 1 week from today to give you time to raise awareness</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '50px', fontSize: '14px' }}>Do you have a valid referral address?</div>
                        <div style={{ display: 'flex', marginTop: '5px' }}>
                            <div style={{ cursor: 'pointer',  marginRight: '10px', width: '70px', height: '30px', borderRadius: '8px', background: '#1AC988', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                No
                            </div>
                            <div style={{ cursor: 'pointer',  width: '70px', height: '30px', borderRadius: '8px', background: 'unset', border: '1px solid #FF1FFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                Yes
                            </div>
                        </div>
                        <div style={{ marginTop: '30px', fontSize: '14px' }}>Fees</div>
                        <PreDiv style={{ display: 'flex', marginTop: '10px', fontSize: '12px', width: '300px' }}>
                            <div>1.5 BNB - Presale & Locking fee </div>
                            <div>1.8% - WBNB raised fee </div>
                            <div>1.8% - SAFEGALAXY sold fee </div>
                            <div>GalaxySwap GSv1 locking fee</div>
                        </PreDiv>
                        <PreDiv style={{ display: 'flex', marginTop: '10px', fontSize: '12px', width: '300px' }}>
                            <div style={{ fontSize: '14px' }}>Total SAFEGALAXY required  </div>
                            <div style={{ fontSize: '14px', color: '#FF1FFF' }}>0 SAFEGALAXY  </div>
                            <div>Amount for sale: 0  </div>
                            <div>Amount for liquidity: 0 </div>
                            <div>Fees: 0</div>
                        </PreDiv>
                        <div style={{ display: 'flex', marginTop: '10px', color: '#FF1FFF', fontSize: '12px' }}>
                            <div style={{ flex: 2 }}>Please note: If the presale is a success, any unsold tokens are sent to the 0x00…dEaD burn address.</div>
                            <div style={{ flex: 1 }} />
                        </div>
                        <div style={{ display: 'flex', marginTop: '40px' }}>
                            <div style={{ cursor: 'pointer',  marginRight: '10px', width: '200px', height: '30px', borderRadius: '8px', background: '#1AC988', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                Approve
                            </div>
                            <div style={{ cursor: 'pointer', width: '200px', height: '30px', borderRadius: '8px', background: 'unset', border: '1px solid #FF1FFF', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                Create presale
                            </div>
                        </div>
                    </PresaleDetail>}
            </div></MainDiv></div> : null}
        {activeIndex === 2 ? <div style={{ display: 'flex', justifyContent: 'center' }}><MainDiv style={{ width: '700px' }}>
            <div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                High Security Token Locker
            </div>
            <div style={{ display: 'flex', padding: '50px 100px', background: 'transparent linear-gradient(342deg, #1D0041 0%, #440C8B 100%) 0% 0% no-repeat padding-box', flexDirection: 'column', textAlign: 'center' }}>
                <Text style={{ fontSize: '12px' }}>We bring you the High Security Token Locker. Token locks are represented as shares of a pool, in a similar way to a GalaxySwap pool, allowing all BEP20 tokens including Rebasing and Deflationary mechanisms to be supported. This means lock amounts may change due to decimal rounding, but you will always retain your share of the pool.</Text>
                <Text style={{ fontSize: '14px', marginTop: '25px' }}>Selected Network</Text>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'center', border: '1px solid #FF1FFF', padding: '5px', width: '350px', alignSelf: 'center', borderRadius: '8px' }}>
                    <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                    <Text>Binance Smart Chain</Text>
                    <ChevronDownIcon style={{ fill: '#FF1FFF' }} />
                </div>
                <div style={{ display: 'flex', marginTop: '20px', justifyContent: 'space-between', border: '1px solid #FF1FFF', padding: '10px', width: '400px', alignSelf: 'center', borderRadius: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '25px', height: '25px' }} />
                        <SimpleInput style={{ width: '300px' }} onChange={onChange} value={tokenAddress} placeholder="Enter your token address" />
                    </div>
                    <SearchIcon style={{ zoom: 1.5 }} />
                </div>
            </div></MainDiv></div> : null}
        {activeIndex === 3 ? <div style={{ display: 'flex', justifyContent: 'center' }}><MainDiv style={{ width: '700px' }}>
            <div style={{ height: '100px', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' }}>
                Intergalactic Liquidity Locker
            </div>
            <div style={{ display: 'flex', padding: '100px 100px', background: 'transparent linear-gradient(342deg, #1D0041 0%, #440C8B 100%) 0% 0% no-repeat padding-box', flexDirection: 'column', textAlign: 'left' }}>
                <Text style={{ fontSize: '12px' }}>The intergalactic Liquidity Locker does say his name. It locks your tokens. That way you will gain trust amongst your investors. If you are not developing a token this section is not ment for you. Instead we kindly direct you to this</Text>
                <Text style={{ fontSize: '14px', marginTop: '50px' }}>Enter the GalaxySwap V1 pair address you would like to lock liquidity for</Text>
                <div style={{ display: 'flex', marginTop: '5px', justifyContent: 'space-between', border: '1px solid #FF1FFF', padding: '5px', width: '100%', alignSelf: 'center', borderRadius: '8px' }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '10px', borderRadius: '100%', background: 'white', width: '24px' }} />
                        <SimpleInput style={{ width: '450px' }} onChange={onChange} value={tokenAddress} placeholder="Enter your token address" />
                    </div>
                </div>
                {tokenAddress === '' ? <Text style={{ fontSize: '12px', marginTop: '5px' }}>e.g. 0xc70bb2736e218861dca818d1e9f7a1930fe61e5b</Text> : <>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px', border: '0.5 solid #FF1FFF', borderRadius: '8px', background: '#760FA0 0% 0% no-repeat padding-box', padding: '10px', color: 'white' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginLeft: '5px', marginRight: '5px', borderRadius: '100%', background: 'white', width: '24px', height: '24px' }} />
                                <Text style={{ fontSize: '14px' }}>SAFEGALAXY / SafeGalaxy</Text>
                            </div>
                            <div style={{ fontSize: '12px' }}>9 Decimals</div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '15px', fontSize: '12px', justifyContent: 'center' }}>
                            Your balance
                        </div>
                        <Text style={{ marginTop: '5px', alignSelf: 'center' }}>0 SAFEGALAXY</Text>
                    </div>
                    <Text style={{ marginTop: '10px' }}>0 SAFEGALAXY</Text>
                </>}
            </div></MainDiv></div> : null}
    </DeveloperDiv>
    )
}
