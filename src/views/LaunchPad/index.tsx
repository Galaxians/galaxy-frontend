import React, { useContext, useMemo, useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Button, ChevronDownIcon, SearchIcon, Text, ChevronLeftIcon, ChevronRightIcon } from 'glx-uikit'
import LaunchPadItem from 'components/LaunchPad/LaunchPadItem'
import LaunchPadDetail from 'components/LaunchPad/LaunchPadDetail'
import DeveloperPad from 'components/LaunchPad/DeveloperPad'
import { setupNetwork } from 'utils/wallet'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const BuyerCard = styled(Card)`
  position: relative;
  z-index: 5;
  padding: 20px;
  padding-top: 150px;
  width: 350px;
  height: 400px;
  background: transparent linear-gradient(317deg, #440C8B 0%, #FF00FF 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #FF1FFF;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  margin: 15px;
  cursor: pointer;
  >div:first-child {
    font-size: 40px;
    font-weight: 800;
    margin-bottom:10px
  }
  >div:last-child {
    font-size: 22px;
  }
  * {
    font-family: 'Mosk';
  }
  &:hover {
    background: transparent linear-gradient(317deg, #FF00FF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  }
  transition: 0.3s;
  @media (max-width: 900px) {
    padding-top: 125px;
    width: 300px;
    height: 350px;
  }
`

export const DeveloperCard = styled(Card)`
  position: relative;
  z-index: 5;
  padding: 20px;
  padding-top: 150px;
  width: 350px;
  height: 400px;
  background: transparent linear-gradient(137deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #440C8B;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  margin: 15px;
  cursor: pointer;
  >div:first-child {
    font-size: 40px;
    font-weight: 800;
    margin-bottom:10px
  }
  >div:last-child {
    font-size: 22px;
  }
  * {
  font-family: 'Mosk';
}
>div:first-child {
  margin-bottom:10px
}
  &:hover {
    background: transparent linear-gradient(319deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
  }
  transition: 0.3s;
  @media (max-width: 900px) {
    padding-top: 125px;
    width: 300px;
    height: 350px;
  }
`

export const GobackCard = styled(Card)`
  margin-top: 25px;
  max-width: 1000px;
  width: 98%;
  background: #0B001E 0% 0% no-repeat padding-box;
  border: 1px solid #FF1FFF;
  border-radius: 11px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  overflow: visible;
  cursor: pointer;
  justify-content: space-between;
    * {
    font-family: 'Mosk';
  }
  @media (max-width: 700px) {
    border-radius: 3px;
  }
`
export const LaunchPadBody = styled(Card)`
  max-width: 1000px;
  width: 98%;
  background: transparent linear-gradient(309deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  * {
  font-family: 'Mosk';
  }
`

export const StateDiv = styled.div<{ active?: boolean, background: string }>`
  margin-right: 5px;
  display: flex;
  border-radius: 4px;
  background:  ${({ active }) => (active ? '#FF1FFF 0% 0% no-repeat padding-box' : null)};
  border: 1px solid #FF1FFF;
  width: 100px;
  padding: 5px 0px 5px 8px;
  align-items: center;
  justify-content: center;
  font-family: 'Mosk';
  font-size: 12px;
  cursor: pointer;
  color: white;
  >div:first-child {
    position: relative;
    >div:first-child {
      position: absolute;
      background: ${({ background }) => background};
      border-radius: 100%;
      width: 8px;
      height: 8px;
      left: -12px;
      top: 2px;
    }
  }
  @media (max-width: 900px) {
    transition: 0.3s;
    width: 90px;
  }
  @media (max-width: 400px) {
    width: 100%;
    margin-left: 5px;
    font-size: 10px; 
    >div:first-child {
      >div:first-child {
        width: 5px;
        height: 5px;
        top: 2px;
        left: -8px;
      }
    }
  }
}
`

export const MobileBuyerCard = styled(Card)`
  position: relative;
  width: 250px;
  height: 60px;
  font-size: 22px;
  font-weight: 800;
  background: transparent linear-gradient(317deg, #440C8B 0%, #FF00FF 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #FF1FFF;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  display: flex;
  border-radius: 0px;

    align-items: center;
    justify-content: center;
  * {
    font-family: 'Mosk';
  }
  &:hover {
    background: transparent linear-gradient(317deg, #FF00FF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  }
`

export const MobileDeveloperCard = styled(Card)`
margin-top: 2px;
position: relative;
width: 250px;
height: 60px;
font-size: 22px;
font-weight: 800;
background: transparent linear-gradient(319deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 46px #FF00FF45;
border: 1px solid #FF1FFF;

opacity: 1;
text-align: center;
border-radius: 0px;

cursor: pointer;
display: flex;
  align-items: center;
  justify-content: center;
* {
  font-family: 'Mosk';
}
&:hover {
  background: transparent linear-gradient(137deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;

}
`

const MobileText = styled.div`
  color: white;
  font-family: 'Mosk';
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 10px;
`

const ComboDiv = styled.div<{ ref: any }>`
  cursor :pointer;
  align-items: center;
  width: 100%; 
  height: 32px; 
  padding: 5px 10px; 
  border: 1px solid #27262C; 
  border-radius: 4px;
  display: flex; 
  justify-content: space-between;
  position: relative;
  overflow: visible !important;
`
const ComboDetailBody = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 35px;
  left: 0px;
  padding: 5px 10px;
  border: 1px solid #27262C; 
  background: rgb(11, 0, 30);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`

const ComboDetailCard = styled.div`
  background: transparent;
  height: 32px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background: rgb(22, 0, 60);
  }
`

const StateCard = ({ text, active, background, onClick }) => {
  return (
    <StateDiv active={active} background={background} onClick={onClick}>
      <div>
        {text}
        <div />
      </div>
    </StateDiv>
  )
}

const StaticText = styled.div`
  margin-right: 10px;
  width: 25%;
  >div:first-child {
    font-size: 12px;
    padding: 5px 0px;
  }
  >div:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    width: 100%;
    height: 32px;
    padding: 5px 10px;
    border: 1px solid #27262C;
    border-radius: 4px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`

const SearchText = styled.div`
  display:flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #27262C;
  width: 400px;
  padding: 5px 20px;
  align-items: center;
  >input {
    font-size: 16px;
    background: unset;
    outline: unset;
    border: unset;
    color: white;
    width: 250px;
    height: 30px;
    @media (max-width: 700px) {
      width: 100%;
      height: unset;
    }
  }
  >svg {
    cursor: pointer;
  }
  transition: 0.3s;
  @media (max-width: 900px) {
    width: 300px;
  }
  @media (max-width: 750px) {
    width: 250px;
  }
  @media (max-width: 700px) {
    border-radius: 0px;
    padding: 5px;
    border-radius: 4px;
    width: 100%;
  }

`

export default function LaunchPad() {

  const [activeIndex, changeIndex] = useState(0);
  const [stateIndex, chagneState] = useState(0);
  const [openDetail, showOpenDetail] = useState(false);
  const GoBack = () => {
    if (openDetail === true) {
      showOpenDetail(false);
    }
    else {
      changeIndex(0);
    }
  }

  const changeDetail = () => {
    showOpenDetail(true);
  }

  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    // console.log("test");
  }
  const ComboTemp = ["BSC NetWork1", "BSC NetWork2", "BSC NetWork3", "BSC NetWork4", "BSC NetWork5"];
  const [showToken, setToken] = useState(ComboTemp[0]);
  const [isCombox, setCombox] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const handleClickOutside = (e: any) => {
    if (menuRef.current && !menuRef.current.contains(e.target))
      setCombox(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  });

  useEffect(() => {
    if (screenWidth > 700) setIsMobile(false)
    else setIsMobile(true)
  }, [screenWidth]);

  const FirstPage = (
    !isMobile ? <div style={{ display: "flex", marginTop: '200px', marginBottom: '150px', justifyContent: 'center' }}>
      <BuyerCard onClick={() => changeIndex(1)}>
        <div>Buyers</div>
        <div>Are you looking to buy brand new tokens in Pre-sale ? Click here</div>
      </BuyerCard>
      <DeveloperCard onClick={() => changeIndex(2)}>
        <div>Developers</div>
        <div>Do you want launch your own Token? Click here</div>
      </DeveloperCard>
    </div> : <div style={{ display: "flex", flexDirection: "column", marginTop: '150px', marginBottom: '150px', justifyContent: 'center', width: '300px' }}>
      <MobileText>Lanunch your</MobileText>
      <MobileText>own otken easily.</MobileText>
      <MobileBuyerCard onClick={() => changeIndex(1)}>
        Buyers
      </MobileBuyerCard>
      <MobileDeveloperCard onClick={() => changeIndex(2)}>
        Developers
      </MobileDeveloperCard>
    </div>
  )

  const SecondPage = (
    !isMobile ? <GobackCard>
      <Card style={{ padding: '20px', borderRadius: '11px' }}><Card onClick={() => GoBack()} style={{ display: 'flex' }} ><ChevronLeftIcon style={{ fill: '#FF1FFF', zoom: '1.5' }} /><div style={{ alignSelf: 'center' }}>Go back</div></Card></Card>
      <div style={{ display: 'flex', padding: '0px 20px 20px 20px' }}>
        <StaticText>
          <div>Wallet</div>
          <div>0d6dbd...54Xd</div>
        </StaticText>
        <StaticText>
          <div>NetWork</div>
          <ComboDiv onClick={() => setCombox(!isCombox)} ref={menuRef}>
            <div style={{overflow: 'visible'}}>{showToken}</div> <ChevronDownIcon style={{ fill: '#FF1FFF' }} />
            {isCombox ? <ComboDetailBody>
              {ComboTemp.map(item =>
                <ComboDetailCard onClick={() => setToken(item)}>{item}</ComboDetailCard>
              )}
            </ComboDetailBody> : null}
          </ComboDiv>
        </StaticText>
        <StaticText>
          <div>BNB Balance</div>
          <div>10.5454 BNB</div>
        </StaticText>
      </div>
      <div style={{ padding: '0px 10px 10px 20px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <StateCard active={stateIndex === 0} background="red" text="UPCOMMING" onClick={() => chagneState(0)} />
          <StateCard active={stateIndex === 1} background="yellow" text="ACTIVE" onClick={() => chagneState(1)} />
          <StateCard active={stateIndex === 2} background="green" text="SUCCESS" onClick={() => chagneState(2)} />
          <StateCard active={stateIndex === 3} background="gray" text="FAILED" onClick={() => chagneState(3)} />
        </div>
        <div>
          <SearchText>
            <input placeholder="Put token address here" />
            <SearchIcon style={{ cursor: 'pointer' }} />
          </SearchText>
        </div>
      </div>
    </GobackCard> : <><GobackCard>
      <div style={{ padding: '20px 20px 0px 20px' }}>
        <StaticText>
          <div>Wallet</div>
          <div>0X4c11249814f11b9346808179cf06e71ac328c1b5</div>
        </StaticText>
      </div>
      <div style={{ padding: '0px 20px 10px 20px', display: 'flex' }}>
        <StaticText style={{ flex: 1 }}>
          <div>NetWork</div>
          <ComboDiv onClick={() => setCombox(!isCombox)} ref={menuRef}>
            <div>{showToken}</div> <ChevronDownIcon style={{ fill: '#FF1FFF' }} />
            {isCombox ? <ComboDetailBody>
              {ComboTemp.map(item =>
                <ComboDetailCard onClick={() => setToken(item)}>{item}</ComboDetailCard>
              )}
            </ComboDetailBody> : null}
          </ComboDiv>
        </StaticText>
        <StaticText style={{ flex: 1, marginRight: '0px' }}>
          <div>BNB Balance</div>
          <div>10.5454 BNB</div>
        </StaticText>
      </div>
      <div style={{ padding: '0px 20px 20px 20px' }}>
        <SearchText>
          <input placeholder="Put token address here" />
          <SearchIcon style={{ cursor: 'pointer' }} />
        </SearchText>
      </div>
    </GobackCard>
      <div style={{ display: 'flex', marginTop: '10px', width: '98%', justifyContent: 'center' }}>
        <StateCard active={stateIndex === 0} background="red" text="UPCOMMING" onClick={() => chagneState(0)} />
        <StateCard active={stateIndex === 1} background="yellow" text="ACTIVE" onClick={() => chagneState(1)} />
        <StateCard active={stateIndex === 2} background="green" text="SUCCESS" onClick={() => chagneState(2)} />
        <StateCard active={stateIndex === 3} background="gray" text="FAILED" onClick={() => chagneState(3)} />
      </div></>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {activeIndex === 0 ? FirstPage : null}
      {activeIndex === 1 ? <>
        {SecondPage}
        <LaunchPadBody style={{ marginTop: '25px', padding: '0px' }}>
          {!openDetail ? <>
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
            <LaunchPadItem stateIndex={stateIndex} changeDetail={changeDetail} />
          </> : <LaunchPadDetail />}
        </LaunchPadBody>
      </> : null}
      {activeIndex === 2 ? <DeveloperPad GoBack={GoBack} /> : null}
    </div>
  )
}
