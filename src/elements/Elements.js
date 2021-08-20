import tw from "twin.macro"

export const Main = tw.main`
bg-rose bg-no-repeat bg-cover w-screen min-h-screen flex items-center justify-center flex-col
`
export const LogoLetter = tw.h2`
text-white text-5xl md:text-8xl text-center font-bold
`

export const LetterContainer = tw.div`
flex border-white border-8 items-center justify-center w-full
p-5
`
export const LogoContainer = tw.div`
flex items-center justify-center flex-col
`

export const Title = tw.h1`
text-white text-4xl m-5
`
export const ButtonWhite = tw.button`
rounded-full bg-white text-red-600 p-3 text-2xl w-1/2 md:w-1/3
`
export const Img = tw.img`
w-4/5 md:w-1/2 max-h-60 m-16 md:m-8
`
export const Pane = tw.section`
bg-white rounded-2xl flex-wrap w-4/5 flex items-center justify-evenly
`
export const Card = tw.article`
bg-white rounded shadow p-5 w-1/4 m-5 flex flex-col
`
export const H3 = tw.h3`
text-lg
`
export const H4 = tw.h4`
text-sm text-gray-500
`
export const Span = tw.span`
text-gray-400 text-5xl
`
export const PillRed = tw.div`
rounded-full bg-red-500 text-xs text-white p-1 text-center
`
export const CardDateContainer = tw.div`
flex justify-between mt-3
`
export const ActiveSectorButton = tw.button`
bg-red-500 p-5 rounded-full text-white font-bold m-5 text-2xl
`
