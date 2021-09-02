import React, { useContext, useMemo, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import {
  Card,
  Button,
  ChevronDownIcon,
  SearchIcon,
  Text,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "glx-uikit";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export const QuestionMark = styled(Text)`
  margin-left: 5px;
  border-radius: 100%;
  background: transparent;
  color: #ff1fff;
  border: 1px solid #ff1fff;
  width: 12px;
  height: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Btn = styled.button`
  flex: 1;
  display: flex;
  background: #9a9a9a;
  border-radius: 8px;
  height: 32px;
  align-items: center;
  justify-content: center;
  border: unset;
  color: white;
  &:hover {
    background: #ff1fff;
  }
`;

export const DetailCard = styled(Card)`
  background: transparent linear-gradient(132deg, #0b001e 0%, #440c8b 100%) 0%
    0% no-repeat padding-box;
  border-radius: 8px;
  opacity: 1;
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding: 50px;
  @media (max-width: 700px) {
    padding: 50px 5px 5px 5px;
    border: 1px solid #ff1fff;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
  @media (max-width: 700px) {
    margin: 0px;
    margin-top: 10px;
    padding: 0px;
  }
`;

export const Header = styled.div`
  background: #40117e 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 86px #00000029;
  border: 0.5px solid #ff1fff;
  border-radius: 8px 8px 0px 0px;
  opacity: 1;
  width: 100%;
  color: white;
  padding: 12px;
  font-size: 14px;
  font-weight: 700;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  background: #40117e 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 86px #00000029;
  border: 0.5px solid #ff1fff;
  border-top: 0px;
  border-radius: 0px 0px 8px 8px;
  opacity: 1;
  width: 100%;
  color: white;
  padding: 12px;
  font-size: 12px;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  width: 100%;
  background: #40117e 0% 0% no-repeat padding-box;
  border: 0.5px solid #ff1fff;
  border-radius: 8px;
  margin-top: 5px;
  font-size: 14px;
  padding: 8px 12px;
  outline: none;
  color: white;
`;

export const TokenDetailText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: lighter;
  > div {
    display: flex;
    margin: 5px 0px;
    >div: first-child {
      flex: 4;
    }
    >div: last-child {
      flex: 5;
    }
  }
`;

export default function LaunchPadDetatil() {
  const [isPair, setPair] = useState(true);

  const btnclick = () => {
    // console.log('haha');
  };

  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (screenWidth > 700) setIsMobile(false);
    else setIsMobile(true);
  }, [screenWidth]);

  return (
    <DetailCard>
      {!isMobile ? (
        <>
          <div style={{ flex: 1.5, display: "flex", flexDirection: "column" }}>
            <div
              style={{ display: "flex", margin: "25px 0px", padding: "5px" }}
            >
              <div
                style={{
                  width: "150px",
                  position: "relative",
                  display: "flex",
                }}
              >
                <img
                  src="./assets/img/Kal-with-tongue-out.png"
                  alt="tongue"
                  style={{ width: "150px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    color: "black",
                    fontSize: "14px",
                    right: -25,
                    top: -50,
                    background: "white",
                    borderRadius: "100%",
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Token Logo Here
                </div>
              </div>
              <div style={{ marginTop: "-40px", marginLeft: "70px" }}>
                <div style={{ padding: "5px" }}>Socials</div>
                <div>
                  <a
                    href="https://discord.com/invite/dq7m6R7UAz"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "5px" }}
                  >
                    <img src="./assets/img/icon-1.png" alt="" width="25px" />
                  </a>
                  <a
                    href="https://t.me/GalaxyProtocolOfficialTG"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "5px" }}
                  >
                    <img src="./assets/img/telegram.png" alt="" width="25px" />
                  </a>
                  <a
                    href="https://twitter.com/GalaxyProtocol"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "5px" }}
                  >
                    <img src="./assets/img/twitter.png" alt="" width="25px" />
                  </a>
                </div>
              </div>
            </div>
            <Body>
              <Header>Tag line of the token here</Header>
              <Footer>
                <div>
                  <span style={{ fontWeight: 600 }}>Presale Address: </span>
                  <span style={{ fontWeight: "lighter" }}>
                    0x45ce53b1760eBFF556a2f670b0530822C5b7500A
                  </span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span style={{ fontWeight: 600 }}>Token Address: </span>
                  <span style={{ fontWeight: "lighter" }}>
                    0xC512261b8AE70260447A74aC7d94dAee150B90C0
                  </span>
                </div>
                <div style={{ marginTop: "3px", color: "#FF1FFF" }}>
                  Do not send BNB to the token address
                </div>
              </Footer>
            </Body>
            <Body>
              <Header>About the token</Header>
              <Footer
                style={{
                  fontWeight: "lighter",
                  lineHeight: "1.3",
                  fontSize: "12px",
                  paddingRight: "50px",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Footer>
            </Body>
            <Body>
              <Header>Token details</Header>
              <Footer>
                <TokenDetailText>
                  <div>
                    <div>Sale Id</div>
                    <div>16</div>
                  </div>
                  <div>
                    <div>Total Supply</div>
                    <div>100000000000.0000 TKN</div>
                  </div>
                  <div>
                    <div>Tokens For Presale</div>
                    <div>8000000000.0000 TKN</div>
                  </div>
                  <div>
                    <div>Tokens For Liquidity</div>
                    <div>5000000.0000 TKN</div>
                  </div>
                  <div>
                    <div>Soft Cap</div>
                    <div>250 BNB</div>
                  </div>
                  <div>
                    <div>Hard Cap</div>
                    <div>500 BNB</div>
                  </div>
                  <div>
                    <div>Presale Rate</div>
                    <div>200000.0000 TKN per BNB</div>
                  </div>
                  <div>
                    <div>Minimum Contribution</div>
                    <div>0.05 BNB</div>
                  </div>
                  <div>
                    <div>Maximum Contribution</div>
                    <div>3 BNB</div>
                  </div>
                  <div>
                    <div>Presale Start Time</div>
                    <div>21 July 2021 at 20:00</div>
                  </div>
                  <div>
                    <div>Presale End Time</div>
                    <div>24 July 2021 at 20:00</div>
                  </div>
                  <div>
                    <div>Liquidity Unlock Date</div>
                    <div>15 Aug 2022 at 21:00</div>
                  </div>
                </TokenDetailText>
              </Footer>
            </Body>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "45px" }}>
                <span style={{ fontWeight: 800 }}>Raised</span>: 50/100 BNB
              </div>
              <QuestionMark style={{ marginTop: "35px" }}>?</QuestionMark>
            </div>
            <div
              style={{
                position: "relative",
                background: "#3F064E",
                width: "100%",
                height: "12px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "50%",
                  borderRadius: "10px",
                  background: "#FF1FFF",
                }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <span style={{ fontWeight: 800 }}>Sale ends in</span>: 00:11:23:10
            </div>
            <div style={{ marginTop: "30px", fontSize: "12px" }}>
              Participate in this token
            </div>
            <Input placeholder="1BNB = 10000000000 Tokencoinname" />
            <div
              style={{
                fontWeight: 800,
                marginTop: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#FF1FFF 0% 0% no-repeat padding-box",
                borderRadius: "8px",
                height: "32px",
                cursor: "pointer",
              }}
            >
              BUY TOKEN
            </div>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "12px" }}>The amount you founded</div>
                <Input placeholder="1BNB" />
              </div>
              <div style={{ flex: 1, marginLeft: "5px" }}>
                <div style={{ fontSize: "12px" }}>
                  Amount of tokens reserved
                </div>
                <Input placeholder="1000,000,000" />
              </div>
            </div>
            <div
              style={{
                marginTop: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#9A9A9A 0% 0% no-repeat padding-box",
                borderRadius: "8px",
                height: "32px",
                cursor: "pointer",
              }}
            >
              <Btn style={{ fontWeight: 800 }}>CLAIM TOKEN</Btn>
            </div>
            <Body style={{ padding: "0px", margin: "20px 0" }}>
              <Header>{`{Token name}  `}Token locks</Header>
              <Footer style={{ textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <QuestionMark
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "0px",
                      fontSize: "20px",
                      color: "#40117E",
                      background: "#FF1FFF",
                      fontWeight: 900,
                    }}
                  >
                    !
                  </QuestionMark>
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    fontSize: "14px",
                    fontWeight: 700,
                  }}
                >
                  No token Locks for this token
                </div>
                <div style={{ marginTop: "5px" }}>On GalaxySwap</div>
              </Footer>
            </Body>
            <Footer
              style={{
                textAlign: "center",
                borderRadius: "8px",
                border: "0.5px solid #FF1FFF",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <QuestionMark
                  style={{
                    width: "20px",
                    height: "20px",
                    margin: "0px",
                    fontSize: "20px",
                    color: "#40117E",
                    background: "#FF1FFF",
                    fontWeight: 900,
                  }}
                >
                  !
                </QuestionMark>
              </div>
              <div
                style={{ marginTop: "5px", fontSize: "14px", fontWeight: 700 }}
              >
                No token Locks for this token
              </div>
              <div style={{ marginTop: "5px" }}>On GalaxySwap</div>
            </Footer>
            <Body style={{ padding: "0px", margin: "20px 0" }}>
              <Header style={{ textAlign: "center", display: "flex" }}>
                {isPair ? (
                  <>
                    <div
                      style={{
                        fontSize: "12px",
                        flex: 1,
                        textAlign: "right",
                        marginRight: "60px",
                        color: "#FF1FFF",
                      }}
                      onClick={() => setPair(true)}
                      onKeyDown={() => btnclick()}
                      role="button"
                      tabIndex={0}
                    >
                      Pairs
                    </div>
                    <div
                      style={{ fontSize: "12px", flex: 1, textAlign: "left" }}
                      onClick={() => setPair(false)}
                      onKeyDown={() => btnclick()}
                      role="button"
                      tabIndex={0}
                    >
                      Comments(15)
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        fontSize: "12px",
                        flex: 1,
                        textAlign: "right",
                        marginRight: "60px",
                      }}
                      onClick={() => setPair(true)}
                      onKeyDown={() => btnclick()}
                      role="button"
                      tabIndex={0}
                    >
                      Pairs
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        flex: 1,
                        textAlign: "left",
                        color: "#FF1FFF",
                      }}
                      onClick={() => setPair(false)}
                      onKeyDown={() => btnclick()}
                      role="button"
                      tabIndex={0}
                    >
                      Comments(15)
                    </div>
                  </>
                )}
              </Header>
              <Footer
                style={{
                  textAlign: "center",
                  minHeight: "100px",
                  padding: "0px",
                }}
              >
                {isPair ? (
                  <></>
                ) : (
                  <img src="./assets/img/comments.png" alt="comment" />
                )}
              </Footer>
            </Body>
          </div>
        </>
      ) : (
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{ width: "120px", position: "relative", display: "flex" }}
            >
              <img
                src="./assets/img/Kal-with-tongue-out.png"
                alt="tongue"
                style={{ width: "120px" }}
              />
              <div
                style={{
                  position: "absolute",
                  color: "black",
                  fontSize: "10px",
                  right: -20,
                  top: -30,
                  background: "white",
                  borderRadius: "100%",
                  width: "75px",
                  height: "75px",
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Token Logo Here
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
                width: "calc(100% - 170px)",
                fontSize: "12px",
              }}
            >
              <div>
                <span style={{ fontWeight: 800 }}>Sale ends in</span>:
                00:11:23:10
              </div>
              <div
                style={{
                  position: "relative",
                  background: "#3F064E",
                  width: "100%",
                  height: "12px",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "50%",
                    borderRadius: "10px",
                    background: "#FF1FFF",
                  }}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <span style={{ fontWeight: 800 }}>Raised</span>: 50/100 BNB
              </div>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Body>
              <Header>Tag line of the token here</Header>
              <Footer>
                <div>
                  <span style={{ fontWeight: 600 }}>Presale Address: </span>
                  <span style={{ fontWeight: "lighter" }}>
                    0x45ce53b...b7500A
                  </span>
                </div>
                <div style={{ marginTop: "15px" }}>
                  <span style={{ fontWeight: 600 }}>Token Address: </span>
                  <span style={{ fontWeight: "lighter" }}>
                    0xC512261...150B90C0
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "3px",
                    color: "#FF1FFF",
                    fontSize: "12px",
                  }}
                >
                  Do not send BNB to the token address
                </div>
                <div style={{ marginTop: "10px" }}>
                  <a
                    href="https://discord.com/invite/dq7m6R7UAz"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "5px" }}
                  >
                    <img src="./assets/img/icon-1.png" alt="" width="25px" />
                  </a>
                  <a
                    href="https://t.me/GalaxyProtocolOfficialTG"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "5px" }}
                  >
                    <img src="./assets/img/telegram.png" alt="" width="25px" />
                  </a>
                  <a
                    href="https://twitter.com/GalaxyProtocol"
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "5px" }}
                  >
                    <img src="./assets/img/twitter.png" alt="" width="25px" />
                  </a>
                </div>
              </Footer>
            </Body>
          </div>
          <div style={{ marginTop: "30px", fontSize: "12px" }}>
            Participate in this token
          </div>
          <Input placeholder="1BNB = 10000000000 Tokencoinname" />
          <div
            style={{
              fontWeight: 800,
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#FF1FFF 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              height: "32px",
              cursor: "pointer",
            }}
          >
            BUY TOKEN
          </div>
          <div style={{ marginTop: "20px", display: "flex" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "12px" }}>The amount you founded</div>
              <Input placeholder="1BNB" />
            </div>
            <div style={{ flex: 1, marginLeft: "5px" }}>
              <div style={{ fontSize: "12px" }}>Amount of tokens reserved</div>
              <Input placeholder="1000,000,000" />
            </div>
          </div>
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#9A9A9A 0% 0% no-repeat padding-box",
              borderRadius: "8px",
              height: "32px",
              cursor: "pointer",
            }}
          >
            <Btn style={{ fontWeight: 800 }}>CLAIM TOKEN</Btn>
          </div>
          <Body style={{ padding: "0px", margin: "20px 0" }}>
            <Header>{`{Token name}  `}Token locks</Header>
            <Footer style={{ textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <QuestionMark
                  style={{
                    width: "20px",
                    height: "20px",
                    margin: "0px",
                    fontSize: "20px",
                    color: "#40117E",
                    background: "#FF1FFF",
                    fontWeight: 900,
                  }}
                >
                  !
                </QuestionMark>
              </div>
              <div
                style={{ marginTop: "5px", fontSize: "14px", fontWeight: 700 }}
              >
                No token Locks for this token
              </div>
              <div style={{ marginTop: "5px" }}>On GalaxySwap</div>
            </Footer>
          </Body>
          <Footer
            style={{
              textAlign: "center",
              borderRadius: "8px",
              border: "0.5px solid #FF1FFF",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <QuestionMark
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "0px",
                  fontSize: "20px",
                  color: "#40117E",
                  background: "#FF1FFF",
                  fontWeight: 900,
                }}
              >
                !
              </QuestionMark>
            </div>
            <div
              style={{ marginTop: "5px", fontSize: "14px", fontWeight: 700 }}
            >
              No token Locks for this token
            </div>
            <div style={{ marginTop: "5px" }}>On GalaxySwap</div>
          </Footer>
          <Body style={{ padding: "0px", margin: "20px 0" }}>
            <Header style={{ textAlign: "center", display: "flex" }}>
              {isPair ? (
                <>
                  <div
                    style={{
                      fontSize: "12px",
                      flex: 1,
                      textAlign: "right",
                      marginRight: "60px",
                      color: "#FF1FFF",
                    }}
                    onClick={() => setPair(true)}
                    onKeyDown={() => btnclick()}
                    role="button"
                    tabIndex={0}
                  >
                    Pairs
                  </div>
                  <div
                    style={{ fontSize: "12px", flex: 1, textAlign: "left" }}
                    onClick={() => setPair(false)}
                    onKeyDown={() => btnclick()}
                    role="button"
                    tabIndex={0}
                  >
                    Comments(15)
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      fontSize: "12px",
                      flex: 1,
                      textAlign: "right",
                      marginRight: "60px",
                    }}
                    onClick={() => setPair(true)}
                    onKeyDown={() => btnclick()}
                    role="button"
                    tabIndex={0}
                  >
                    Pairs
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      flex: 1,
                      textAlign: "left",
                      color: "#FF1FFF",
                    }}
                    onClick={() => setPair(false)}
                    onKeyDown={() => btnclick()}
                    role="button"
                    tabIndex={0}
                  >
                    Comments(15)
                  </div>
                </>
              )}
            </Header>
            <Footer
              style={{
                textAlign: "center",
                minHeight: "100px",
                padding: "0px",
              }}
            >
              {isPair ? (
                <></>
              ) : (
                <img src="./assets/img/comments.png" alt="comment" />
              )}
            </Footer>
          </Body>
          <Body>
            <Header>About the token</Header>
            <Footer
              style={{
                fontWeight: "lighter",
                lineHeight: "1.3",
                fontSize: "12px",
                paddingRight: "50px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Footer>
          </Body>
          <Body>
            <Header>Token details</Header>
            <Footer>
              <TokenDetailText>
                <div>
                  <div>Sale Id</div>
                  <div>16</div>
                </div>
                <div>
                  <div>Total Supply</div>
                  <div>100000000000.0000 TKN</div>
                </div>
                <div>
                  <div>Tokens For Presale</div>
                  <div>8000000000.0000 TKN</div>
                </div>
                <div>
                  <div>Tokens For Liquidity</div>
                  <div>5000000.0000 TKN</div>
                </div>
                <div>
                  <div>Soft Cap</div>
                  <div>250 BNB</div>
                </div>
                <div>
                  <div>Hard Cap</div>
                  <div>500 BNB</div>
                </div>
                <div>
                  <div>Presale Rate</div>
                  <div>200000.0000 TKN per BNB</div>
                </div>
                <div>
                  <div>Minimum Contribution</div>
                  <div>0.05 BNB</div>
                </div>
                <div>
                  <div>Maximum Contribution</div>
                  <div>3 BNB</div>
                </div>
                <div>
                  <div>Presale Start Time</div>
                  <div>21 July 2021 at 20:00</div>
                </div>
                <div>
                  <div>Presale End Time</div>
                  <div>24 July 2021 at 20:00</div>
                </div>
                <div>
                  <div>Liquidity Unlock Date</div>
                  <div>15 Aug 2022 at 21:00</div>
                </div>
              </TokenDetailText>
            </Footer>
          </Body>
        </div>
      )}
    </DetailCard>
  );
}
