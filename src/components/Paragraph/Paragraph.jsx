import React from 'react'
import tw from 'twin.macro'

const P = tw.p`
text-white text-center
`

const Paragraph = ({children}) => {
    return (
        <P>{children}</P>
    )
}

export default Paragraph
