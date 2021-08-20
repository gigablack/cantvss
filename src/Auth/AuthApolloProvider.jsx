import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { createClient, Provider } from "urql"

const setupClient = _token => {
  return createClient({
    url: process.env.HASURA_GRAPHQL_URL,
    fetchOptions: () => {
      return {
        headers: {
          authorization: _token ? `Bearer ${_token}` : "",
        },
      }
    },
  })
}

const AuthApolloProvider = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0()
  const [token, setToken] = useState("")
  const [client, setClient] = useState(setupClient(token))
  useEffect(() => {
    ;(async () => {
      if (isAuthenticated) {
        setToken(await getAccessTokenSilently())
      }
    })()
  }, [isAuthenticated, getAccessTokenSilently])
  useEffect(() => {
    setClient(setupClient(token))
  }, [token])
  return <Provider value={client}>{children}</Provider>
}

export default AuthApolloProvider
