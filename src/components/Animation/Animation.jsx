import React from 'react'
import tw from 'twin.macro'
import Lottie from 'react-lottie'

const LottieContainer = tw.div`
w-full
`

const Animation = ({ animation }) => {
    return (
        <LottieContainer>
            <Lottie options={{ loop: true , autoplay: true, animationData: animation }} />
        </LottieContainer>
    )
}

export default Animation
