import React from "react"
import Logo from "../components/Logo/Logo"
import Image from '../components/Image/Image'
import HomeImage from '../../static/login.svg'
import Button from '../components/Button/Button'
import tw from 'twin.macro'
import {useAuth0} from "@auth0/auth0-react"
import {motion} from "framer-motion"

const Container = tw.section`
flex flex-col items-center p-5
`
const MotionContainer = motion(Container)

export default function Home() {

    const { loginWithRedirect } = useAuth0()
    return (
        <MotionContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Logo />
            <Image src={HomeImage} alt='login' />
            <Button onClick={loginWithRedirect}>LOGIN</Button>
        </MotionContainer>
    )
}
