import React from "react"
import useRedirect from "./useRedirect"

const Redirect = ({ children }) => {
  const { uiReady } = useRedirect()
  return <>{uiReady ? children : "Loading..."}</>
}

export default Redirect
