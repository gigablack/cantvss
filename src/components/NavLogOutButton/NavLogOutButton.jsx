import React from 'react'
import tw from 'twin.macro'

const Button = tw.button`
w-1/4 flex justify-center items-center text-2xl text-red-800
`

const NavLogOutButton = (props) => {
    const { children } = props
    return <Button {...props}>{children}</Button>
}

export default NavLogOutButton
