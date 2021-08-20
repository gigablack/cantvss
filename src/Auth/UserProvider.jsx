import {useAuth0} from "@auth0/auth0-react"
import React, { createContext, useEffect, useState } from "react"
import { useQuery } from "urql"

export const UserContext = createContext()

const initialUser = {
  id: "",
  name: "",
  lastname: "",
  ci: 0,
  email: "",
  technician: null,
  ready: false,
}

const GET_USER = `
query get_user($id: String!) {
  cantvss_users_by_pk(id: $id) {
    id
    name
    lastname
    ci
    email
    technician {
      id
    }
  }
}
`

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser)
    const { user: auth0User, logout } = useAuth0()
  const [{ data, fetching, error }] = useQuery({ query: GET_USER, variables: { id: auth0User?.sub } })
  useEffect(() => {
    if (data && !fetching) {
      setUser({
        ...data.cantvss_users_by_pk,
        ready: true,
      })
    }
  }, [data, fetching])
  return (
    <UserContext.Provider value={{ user, setUser, userError: error, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
