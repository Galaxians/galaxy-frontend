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
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const DetailCard = styled(Card)`
    cursor: pointer; 
    background: #0B001E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    height: 120px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #16003C 0% 0% no-repeat padding-box;
    } 
`

export const ContentCard = styled(Card)`
    cursor: pointer;
    background: #0B001E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    height: 120px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2px;
    &:hover {
        background: #16003C 0% 0% no-repeat padding-box;
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
        width: 800,
        backgroundColor: '#0B001E',
        border: '1px solid #FF1FFF',
        padding: theme.spacing(2, 4, 3),
        opacity: 1,
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

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
        <div style={modalStyle} className={classes.paper}>
            <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue" style={{ width: '200px' }} />
            <p style={{ fontSize: '32px', padding: '10px' }}>Disclaimer</p>
            <p style={{ padding: '10px 30px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            <div style={{ display: 'flex', padding: '10px 30px' }}>
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
            <div style={{ display: 'flex', padding: '30px 30px', width: '100%' }}>
                <Btn onClick={() => handleClose()}>CANCEL</Btn>
                {checked ? <Btn style={{ background: '#FF1FFF' }} onClick={() => handleConfirm()}>CONFIRM</Btn> : <Btn disabled>CONFIRM</Btn>}
            </div>
        </div>
    );

    return (<>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px' }}>
            {/* <div style={{ cursor: 'pointer', background: '#0B001E 0% 0% no-repeat padding-box', borderRadius: '8px', height: '120px', width: '800px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2px' }}> */}
            <ContentCard>
                <div style={{ width: '20%', position: 'relative', display: 'flex' }}>
                    <img src="./assets/img/Kal-with-tongue-out.png" alt="tongue" style={{ width: '100px' }} />
                    <div style={{ position: 'absolute', color: 'black', fontSize: '10px', right: 30, top: -20, background: 'white', borderRadius: '100%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', textAlign: 'center' }}>Token Logo Here</div>
                </div>
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
                    <div>TKN$</div>
                    <div style={{ marginTop: '10px' }}>TOKEN</div>
                    <div style={{ fontSize: '12px', marginTop: '15px', display: 'flex' }}>
                        {stateIndex === 0 ? <>
                            <div style={{ background: 'red', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            <div>Presale upcoming</div>
                        </> : null}
                        {stateIndex === 1 ? <>
                            <div style={{ background: 'yellow', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            <div>Presale Live</div>
                        </> : null}
                        {stateIndex === 2 ? <>
                            <div style={{ background: 'green', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            <div>Presale success</div>
                        </> : null}
                        {stateIndex === 3 ? <>
                            <div style={{ background: 'gray', borderRadius: '100%', width: '10px', height: '10px', marginRight: '10px' }} />
                            <div>Presale failed</div>
                        </> : null}
                    </div>
                </div>
                <div style={{ width: '50%', display: 'flex', flexDirection: 'column', padding: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ fontSize: '12px' }}>Soft Cap: 50 BNB</Text>
                        <QuestionMark>?</QuestionMark>
                    </div>
                    {stateIndex === 0 || stateIndex === 1 ?
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Text style={{ fontSize: '12px' }}>Hard Cap: 100 BNB</Text>
                            <QuestionMark>?</QuestionMark>
                        </div>
                        : null}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <Text style={{ fontSize: '12px' }}>Min: 0.10 Max: 3.00BNB</Text>
                            <QuestionMark>?</QuestionMark>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Text style={{ fontSize: '14px' }}>Sales end in: </Text>
                            <Text style={{ fontSize: '14px' }}>00:11:23:10 </Text>
                        </div>
                    </div>
                    <div style={{ position: 'relative', background: '#3F064E', width: '100%', height: '12px', borderRadius: '10px' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '50%', borderRadius: '10px', background: '#FF1FFF' }} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Text style={{ fontSize: '12px' }}>Raised: 50/100 BNB</Text>
                        <QuestionMark>?</QuestionMark>
                    </div>
                </div>
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
