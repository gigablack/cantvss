import React from "react"
import {FaRegFileAlt} from "react-icons/fa"
import moment from "moment"
import tw from 'twin.macro'

const Report = tw.li`
text-2xl text-red-800 shadow hover:shadow-xl p-3 flex justify-between items-center
my-1 rounded-xl
`

const TextContainer = tw.div`
`

const Text = tw.p`
text-gray-500 text-sm
`

const ReportItem = ({ report: { tlf, date, sector: { name } } }) => {
  return (
    <Report>
      <FaRegFileAlt />
      <TextContainer>
        <Text>{ tlf }</Text>
        <Text>{ name }</Text>
      </TextContainer>
      <TextContainer>
        <Text>{ moment(date).format('l') }</Text>
        <Text>status</Text>
      </TextContainer>
    </Report>
  )
}

export default ReportItem
