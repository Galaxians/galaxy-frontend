import React, { useContext } from 'react'
import { Button, useWalletModal as UikitMenu } from 'glx-uikit'
import { useHistory } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'




export default function Leftnav() {
  
  const history = useHistory()

  return (

<div className="d-flex justify-content-left leftnav">
           <ul className="list-unstyled">
             <li className="left-exchange-icon">Exchange</li>
             <li className="left-farms-icon">Galaxia Farms</li>
             <li className="left-farms-icon">Galaxia Pool</li>
           </ul>
        </div>

  )
}
