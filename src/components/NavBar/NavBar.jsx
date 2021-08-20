import React from 'react'
import tw from 'twin.macro'

const Nav = tw.nav`
bg-white h-24 flex fixed bottom-0 w-screen shadow
`

const NavBar = ({children}) => {

    return <Nav>{ children }</Nav>
}

export default NavBar
