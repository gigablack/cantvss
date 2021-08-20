import React from "react"
import {useReports} from "../../Controllers/Reports/Reports"
import ReportItem from "../ReportItem/ReportItem"
import tw from 'twin.macro'
import Animation from "../Animation/Animation"
import animationData from '../../../static/searching.json'

const Pane = tw.ul`
bg-white rounded-xl my-5 w-full p-3
`

const ReportList = () => {

    const { reports, loading } = useReports()
    return (
        <Pane>
        { loading ? <Animation animation={ animationData } /> : reports.map( report => <ReportItem report={report} key={report.tlf}/> ) }
        </Pane>
  )
}

export default ReportList
