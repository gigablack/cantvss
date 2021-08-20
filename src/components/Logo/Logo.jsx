import React from "react"
import tw from 'twin.macro'

const Div = tw.div`
border-white border-4 w-full sm:w-3/5 md:w-1/3
`

const H1 = tw.h1`
text-6xl text-white border-blue-500 text-center
md:text-8xl
`

const Logo = () => {
  return (
      <Div>
          <H1>APP</H1>
      </Div>
  )
}

export default Logo
