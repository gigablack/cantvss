import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../static/hand-loading.json'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

const Container = tw.div`
bg-white min-h-screen flex justify-center
`

const LottieContainer = tw.div`
md:w-1/2 w-full
`
const MotionContainer = motion(Container)

const Loading = () => {
    return (
        <MotionContainer exit={{ opacity: 0 }} >
            <LottieContainer>
                <Lottie options={{ loop: true, autoplay: true, animationData: animationData }} />
            </LottieContainer>
        </MotionContainer>
    )
}

export default Loading
