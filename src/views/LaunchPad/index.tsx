import React, { useContext, useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Button, ChevronDownIcon, SearchIcon, Text, ChevronLeftIcon, ChevronRightIcon } from 'glx-uikit'
import LaunchPadItem from 'components/LaunchPad/LaunchPadItem'
import LaunchPadDetail from 'components/LaunchPad/LaunchPadDetail'
import DeveloperPad from 'components/LaunchPad/DeveloperPad'

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
  padding: 25px;
  padding-top: 125px;
  width: 300px;
  height: 320px;
  background: transparent linear-gradient(317deg, #440C8B 0%, #FF00FF 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #FF1FFF;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  >div:first-child {
    margin-bottom:10px
  }
  * {
    font-family: 'Mosk';
  }
  &:hover {
    background: transparent linear-gradient(317deg, #FF00FF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  }
`

export const DeveloperCard = styled(Card)`
  position: relative;
  z-index: 5;
  padding: 25px;
  padding-top: 125px;
  width: 300px;
  height: 320px;
  background: transparent linear-gradient(137deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 46px #FF00FF45;
  border: 1px solid #440C8B;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  margin: 10px;
  cursor: pointer;
  * {
  font-family: 'Mosk';
}
>div:first-child {
  margin-bottom:10px
}
  &:hover {
    background: transparent linear-gradient(319deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
  }
`

export const GobackCard = styled(Card)`
  margin-top: 25px;
  width: 900px;
  background: #0B001E 0% 0% no-repeat padding-box;
  border: 1px solid #FF1FFF;
  border-radius: 11px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    * {
    font-family: 'Mosk';
  }
`
export const LaunchPadBody = styled(Card)`
  width: 900px;
  background: transparent linear-gradient(309deg, #FF1FFF 0%, #440C8B 100%) 0% 0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  * {
  font-family: 'Mosk';
}
`

export const StateDiv = styled.div<{ active?: boolean }>`
  margin-right: 5px;
  display: flex;
  border-radius: 4px;
  background:  ${({ active }) => (active ? '#FF1FFF 0% 0% no-repeat padding-box' : null)};
  border: 1px solid #FF1FFF;
  width: 100px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  * {
  font-family: 'Mosk';
}
`

export const MobileBuyerCard = styled(Card)`
  position: relative;
  width: 300px;
  height: 75px;
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
margin-top: 5px;
position: relative;
width: 300px;
height: 75px;
background: transparent linear-gradient(319deg, #440C8B 0%, #0B001E 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 46px #FF00FF45;
border: 1px solid #440C8B;

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

  useEffect(() => {
    if (screenWidth > 650) setIsMobile(false)
    else setIsMobile(true)
    // screenWidth > 950 ? setIsMobile(false) : setIsMobile(true)
  }, [screenWidth]);

  const FirstPage = (
    !isMobile ? <div style={{ display: "flex", marginTop: '200px', marginBottom: '150px', justifyContent: 'center' }}>
      <BuyerCard onClick={() => changeIndex(1)}>
        <div style={{ fontSize: '32px', fontWeight: 800 }}>Buyers</div>
        <div>Are you looking to buy brand new tokens in Pre-sale ? Click here</div>
      </BuyerCard>
      <DeveloperCard onClick={() => changeIndex(2)}>
        <div style={{ fontSize: '32px', fontWeight: 800 }}>Developers</div>
        <div>Do you want launch your own Token? Click here</div>
      </DeveloperCard>
    </div> : <div style={{ display: "flex", flexDirection: "column", marginTop: '150px', marginBottom: '300px', alignItems: 'center', justifyContent: 'center' }}>
      <MobileBuyerCard onClick={() => changeIndex(1)}>
        <div style={{ fontSize: '26px', fontWeight: 800 }}>Buyers</div>
      </MobileBuyerCard>
      <MobileDeveloperCard onClick={() => changeIndex(2)}>
        <div style={{ fontSize: '26px', fontWeight: 800 }}>Developers</div>
      </MobileDeveloperCard>
    </div>
  )

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {activeIndex === 0 ? FirstPage : null}
      {activeIndex === 1 ? <><GobackCard>
        <Card style={{ padding: '20px', cursor: 'pointer', display: 'flex' }} onClick={() => GoBack()}><ChevronLeftIcon style={{ fill: '#FF1FFF', zoom: '1.5' }} /><div style={{alignSelf: 'center'}}>Go back</div></Card>
        <div style={{ display: 'flex', padding: '0px 20px 20px 20px' }}>
          <div style={{ marginRight: '10px' }}>
            <div style={{ fontSize: '12px', padding: '5px 0px' }}>Wallet</div>
            <div style={{ alignItems: 'center', width: '180px', height: '32px', padding: '5px 10px', border: '1px solid #27262C', borderRadius: '4px' }}>0d6dbd...54Xd</div>
          </div>
          <div style={{ marginRight: '10px' }}>
            <div style={{ fontSize: '12px', padding: '5px 0px' }}>NetWork</div>
            <div style={{ alignItems: 'center', width: '180px', height: '32px', padding: '5px 10px', border: '1px solid #27262C', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
              <div>BSC Network</div> <ChevronDownIcon style={{ fill: '#FF1FFF' }} />
            </div>
          </div>
          <div style={{ marginRight: '10px' }}>
            <div style={{ fontSize: '12px', padding: '5px 0px' }}>BNB Balance</div>
            <div style={{ alignItems: 'center', width: '180px', height: '32px', padding: '5px 10px', border: '1px solid #27262C', borderRadius: '4px' }}>10.5454 BNB</div>
          </div>
        </div>
        <div style={{ padding: '0px 10px 10px 10px', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StateDiv active={stateIndex === 0} onClick={() => chagneState(0)}>
              <div style={{ background: 'red', borderRadius: '100%', width: '8px', height: '8px', marginRight: '5px' }} />
              <div style={{ fontSize: '12px' }}>UPCOMING</div>
            </StateDiv>
            <StateDiv active={stateIndex === 1} onClick={() => chagneState(1)}>
              <div style={{ background: 'yellow', borderRadius: '100%', width: '8px', height: '8px', marginRight: '5px' }} />
              <div style={{ fontSize: '12px' }}>ACTIVE</div>
            </StateDiv>
            <StateDiv active={stateIndex === 2} onClick={() => chagneState(2)}>
              <div style={{ background: 'green', borderRadius: '100%', width: '8px', height: '8px', marginRight: '5px' }} />
              <div style={{ fontSize: '12px' }}>SUCCESS</div>
            </StateDiv>
            <StateDiv active={stateIndex === 3} onClick={() => chagneState(3)}>
              <div style={{ background: 'gray', borderRadius: '100%', width: '8px', height: '8px', marginRight: '5px' }} />
              <div style={{ fontSize: '12px' }}>FAILD</div>
            </StateDiv>

          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '8px', border: '1px solid #27262C', width: '400px', padding: '5px 20px', alignItems: 'center' }}>
              <div style={{ fontSize: '12px' }}><input placeholder="Put token address here" style={{ background: 'unset', outline: 'unset', border: 'unset', color: 'white', width: '250px', height: '30px', fontSize: '14px' }} /></div>
              <SearchIcon style={{ cursor: 'pointer' }} />
            </div>
          </div>
        </div>
      </GobackCard>
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
