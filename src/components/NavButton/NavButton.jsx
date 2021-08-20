import {Link} from 'gatsby'
import React from 'react'
import tw, {styled} from 'twin.macro'
import { useLocation } from '@reach/router'

const StyledLink = styled(Link)([
    tw`w-1/4 flex justify-center items-center text-2xl text-red-800`
])

const StyledLinkActive = styled(Link)([
    tw`w-1/4 flex justify-center items-center text-2xl text-white bg-pink-800`
])

const NavButton = (props) => {
    const { children, to } = props
    const location = useLocation()
    if (location?.pathname === to)return (
        <StyledLinkActive {...props}>
            { children }
        </StyledLinkActive>
    )
    return (
        <StyledLink {...props}>
            { children }
        </StyledLink>
    )
}

export default NavButton
