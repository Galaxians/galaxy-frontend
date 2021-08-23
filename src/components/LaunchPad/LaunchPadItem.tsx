import React, { useContext, useMemo, useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Checkbox from '@material-ui/core/Checkbox';
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
  font-size: 8px;
  display: flex;
  align-items: center;
  padding: 0px !important;
  justify-content: center;
  * {
      font-family: 'Mosk';
  }
`

export const Btn = styled.button`
    flex: 1;
    display: flex; 
    background: #391D5D; 
    border-radius: 8px; 
    margin: 4px; 
    height: 40px; 
    align-items: center; 
    justify-content: center;
    border: unset;
    color: white;
    font-weight: 800;
    * {
        font-family: 'Mosk';
    }
`

export const DetailCard = styled(Card)`
    cursor: pointer; 
    background: #0B001E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    * {
        font-family: 'Mosk';
    }
    &:hover {
        background: #16003C 0% 0% no-repeat padding-box;
    }
    @media (max-width: 800px) {
        position: absolute;
        bottom: 10px;
        right: 5px;
        background: transparent;
        justify-content: flex-end;
    } 
    @media (max-width: 420px) {
        font-size: 12px;
    }
`

export const ContentCard = styled(Card)`
    cursor: pointer;
    background: #0B001E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2px;
    height: 120px;
    * {
        font-family: 'Mosk';
    }
    &:hover {
        background: #16003C 0% 0% no-repeat padding-box;
    }
    @media (max-width: 800px) {
        width: 100%;
    }
`

const TokenLogo = styled.div`
    width: 100px;
    position: relative;
    display: flex;
    >img {
        width: 100px;
        margin-left: 10px;
        margin-top: 30px;
    }
    >div {
        position: absolute;
        color: black;
        font-size: 10px;
        font-family: 'Mosk';
        right: -30px;
        top: -5px;
        background: white;
        border-radius: 100%;
        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        text-align: center;
    }
    @media (max-width: 550px) {
        >img {
            width: 75px;
        }
        >div {
            width: 50px;
            height: 50px;
            right: 0px;
            top: 0px;
        }
    }
`

const TokenTxt = styled.div`
    width: calc(50% - 100px);
    display: flex;
    justicy-content: center;
    flex-direction: column;
    padding-left: 120px;
    font-size: 16px;

    >div:last-child {
        font-size: 12px;
        margin-top: 15px;
        display: flex;
        >div {
            border-radius: 100%;
            width: 10px;
            height: 10px;
            margin-right: 10px;
        }
    }
    @media (max-width: 900px) {
        padding-left: 100px;
    }
    @media (max-width: 650px) {
        padding-left: 60px;
    }
    @media (max-width: 550px) {
        width: calc(50% - 75px);
        padding-left: 20px;
    }
    @media (max-width: 420px) {
        padding-left: 10px;
        >div:first-child {
            font-size: 12px;
        }
        >div:last-child {
            font-size: 8px;
            >div {
                margin-right: 5px;
                width: 7px;
                height: 7px;
            }
        }
    }
`

const TokenDetail = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    >div {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-bottom: 5px;
        @media(max-width: 650px) {
            display: none;
        }
    }
    >div: nth-child(3) {
        justify-content: space-between;
        >div: first-child {
            display: flex;
            align-items: center;
        }
        >div: last-child {
            font-size: 14px;
            display: flex;
            >div:first-child {
                font-weight: 700;
            }
        }
        @media(max-width: 650px) {
            display: flex;
            >div: first-child {
                display: none;
            }
        }
        @media (max-width: 420px) {
            >div * {
                font-size: 12px;
            }
        }
    }
    >div: nth-child(4) {
        position: relative;
        background: #3F064E;
        width: 100%;
        height: 12px;
        border-radius: 10px;
        marginTop: 5px;
        marginBottom: 5px;
        >div {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 50%;
            border-radius: 10px;
            background: #FF1FFF
        }
        @media(max-width: 650px) {
            display: flex;
        }
    }
    >div: last-child {
        display: flex;
        >div: first-child {
            font-weight: 700;
        }
        @media (max-width: 420px) {
            font-size: 10px;
        }
    }
`

export const AgreeText = styled.p`
    cursor: pointer;
    color: #FF1FFF
`

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        maxWidth: 800,
        width: '95%',
        backgroundColor: '#0B001E',
        border: '1px solid #FF1FFF',
        padding: theme.spacing(2, 4, 3),
        opacity: 1,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Mosk',
    },
}));

const ModalWindow = styled.div`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        max-width: 800px;
        width: 95%;
        background-color: #0B001E;
        border: 1px solid #FF1FFF;
        padding: 32px 64px 48px;
        opacity: 1;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Mosk';
        >div:first-child {
            >img {
                width: 200px;
                @media (max-width: 500px) {
                    width: 100px;
                }
            }
            >div {
                font-size: 32px;
                font-weight: 800;
                padding: 10px;   
                @media (max-width: 500px) {
                    font-size: 24px;
                }
            }
            @media (max-width: 500px) {
                display: flex;
                align-items: center;
            }
        }
        @media (max-width: 500px) {
            padding: 30px 15px;
        }
        >div:nth-child(2) {
            margin-top: 10px;
        }
        >div:nth-child(3) {
            >span {
                @media (max-width: 500px) {
                    margin-left: -10px !important;
                }
            }
            >p {
                @media (max-width: 500px) {
                    font-size: 12px;
                    align-self: center;
                }
            }
        }
        >div:last-child {
            display: flex;
            padding: 30px 0px 0px; 
            width: 100%;
            @media (max-width: 500px) {
                padding: 10px 0px 0px;
                >button {
                    height: 32px;
                    font-size: 14px;
                }
            }
        }

`

export default function LaunchPadItem({ stateIndex, changeDetail }: { stateIndex: number, changeDetail: () => void }) {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleOpen = () => {
        setChecked(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        setOpen(false);
        changeDetail();
    }

    const Modalbody = (
        <ModalWindow>
            <div>
                <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue"/>
                <div>Disclaimer</div>
            </div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
            <div style={{ display: 'flex', padding: '10px 0px' }}>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    style={{ marginLeft: '-40px', color: '#FF1FFF' }}
                />
                <AgreeText onClick={() => setChecked(true)}>
                    I have read and agree to the Terms and Conditions and I understand that I am responsible for doing my own research!
                </AgreeText>
            </div>
            <div>
                <Btn onClick={() => handleClose()}>CANCEL</Btn>
                {checked ? <Btn style={{ background: '#FF1FFF' }} onClick={() => handleConfirm()}>CONFIRM</Btn> : <Btn disabled>CONFIRM</Btn>}
            </div>
        </ModalWindow>
    );

    return (<>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px', position: 'relative' }}>
            {/* <div style={{ cursor: 'pointer', background: '#0B001E 0% 0% no-repeat padding-box', borderRadius: '8px', height: '120px', width: '800px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2px' }}> */}
            <ContentCard>
                <TokenLogo>
                    <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue"/>
                    <div>Token Logo Here</div>
                </TokenLogo>
                <TokenTxt>
                    <div>
                        <div>TKN$</div>
                        <div style={{ marginTop: '10px' }}>TOKEN</div>
                    </div>
                    <div>
                        {stateIndex === 0 ? <>
                            <div style={{ background: 'red'}} />
                            <span>Presale upcoming</span>
                        </> : null}
                        {stateIndex === 1 ? <>
                            <div style={{ background: 'yellow'}} />
                            <span>Presale Live</span>
                        </> : null}
                        {stateIndex === 2 ? <>
                            <div style={{ background: 'green'}} />
                            <span>Presale success</span>
                        </> : null}
                        {stateIndex === 3 ? <>
                            <div style={{ background: 'gray'}} />
                            <span>Presale failed</span>
                        </> : null}
                    </div>
                </TokenTxt>
                <TokenDetail>
                    <div>
                        <div>Soft Cap: 50 BNB</div>
                        <QuestionMark>?</QuestionMark>
                    </div>
                    {stateIndex === 0 || stateIndex === 1 ?
                        <div>
                            <div>Hard Cap: 100 BNB</div>
                            <QuestionMark>?</QuestionMark>
                        </div>
                        : <div/>}
                    <div>
                        <div>
                            <div>Min: 0.10 Max: 3.00BNB</div>
                            <QuestionMark>?</QuestionMark>
                        </div>
                        <div>
                            <div>Sales end in: &nbsp;</div>
                            <div >00:11:23:10 </div>
                        </div>
                    </div>
                    <div>
                        <div/>
                    </div>
                    <div>
                        <div>Raised: 50/100 BNB</div>
                        <QuestionMark>?</QuestionMark>
                    </div>
                </TokenDetail>
            </ContentCard>
            <DetailCard onClick={() => handleOpen()}>
                Detail <ChevronRightIcon style={{fill: '#FF1FFF'}}/>
            </DetailCard>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {Modalbody}
        </Modal>
    </>
    )
}
