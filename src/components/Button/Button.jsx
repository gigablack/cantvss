import React from 'react'
import tw from 'twin.macro'

const ButtonWhite = tw.button`
bg-white rounded-full text-red-800 text-2xl p-3 w-1/2 my-10 shadow-xl
md:w-1/3
`

const Button = (props) => {
    const { children } = props
    return <ButtonWhite {...props}>{ children }</ButtonWhite>
}

export default Button
