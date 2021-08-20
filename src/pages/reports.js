import React from "react"
import tw from 'twin.macro'
import Image from '../components/Image/Image'
import reportImage from '../../static/reports.svg'
import Paragraph from "../components/Paragraph/Paragraph"
import { FaFileMedical } from 'react-icons/fa'
import ReportList from "../components/ReportList/ReportList"

const Section = tw.section`
px-5 flex flex-col items-center
`
const RoundedButton = tw.button`
text-red-800 p-3 bg-white rounded-full text-2xl self-end shadow-xl
`

const Reports = () => {
    return (
        <Section>
            <Image src={reportImage} alt='reports'/>
            <Paragraph>Agrega y gestiona los reportes de los numeros a tu nombre.</Paragraph>
            <RoundedButton><FaFileMedical /></RoundedButton>
            <ReportList />
        </Section>
    )
}

export default Reports
