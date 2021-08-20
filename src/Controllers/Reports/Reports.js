import {useQuery} from "urql"

const GET_REPORTS = `
query get_reports {
  cantvss_reports {
    id
    tlf
    date
    sector {
      name
    }
  }
}
`


export const useReports = () => {

    const [{ data, fetching }] = useQuery({ query: GET_REPORTS })

    return {
        reports: data?.cantvss_reports,
        loading: fetching
    }
}
