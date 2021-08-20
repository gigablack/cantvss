import "tailwindcss/dist/base.min.css"
import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import AuthApolloProvider from "./src/Auth/AuthApolloProvider"
import UserProvider from "./src/Auth/UserProvider"
import Layout from "./src/components/Layout/Layout"

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
      redirectUri={process.env.GASTBY_AUTH0_REDIRECT_URI}
      audience={process.env.GATSBY_AUTH0_AUDIENCE}
    >
      <AuthApolloProvider>
        <UserProvider>{element}</UserProvider>
      </AuthApolloProvider>
    </Auth0Provider>
  )
}

export const wrapPageElement = ({ element }) => {
  return (
            <Layout>
                {element}
            </Layout>
  )
}
