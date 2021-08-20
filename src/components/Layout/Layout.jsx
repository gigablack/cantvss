import React from 'react'
import tw from 'twin.macro'
import {AnimatePresence} from 'framer-motion'
import useRedirect from '../../Auth/useRedirect'
import Loading from '../Loading/Loading'
import NavBar from '../NavBar/NavBar'
import NavButton from '../NavButton/NavButton'
import { FaFileInvoice, FaUser, FaRoute, FaPowerOff } from 'react-icons/fa'
import useUser from '../../Auth/useUser'
import NavLogOutButton from '../NavLogOutButton/NavLogOutButton'

const Main = tw.main`
bg-rose min-h-screen bg-cover flex flex-col
`

const Layout = ({children}) => {

    const {uiReady} = useRedirect()
    const { logout, user:{ ready } } = useUser()
    return (
        <Main>
            <AnimatePresence>
                { uiReady ? children : (<Loading />) }
                { ready && (<NavBar key='navbar'>
                    <NavButton to='/reports'><FaFileInvoice /></NavButton>
                    <NavButton to='/profile'><FaUser /></NavButton>
                    <NavButton to='/route'><FaRoute /></NavButton>
                    <NavLogOutButton onClick={logout}><FaPowerOff /></NavLogOutButton>
                </NavBar>)}
            </AnimatePresence>
        </Main>
    )
}

export default Layout
