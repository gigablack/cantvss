import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import { useEffect, useState } from "react"
import useUser from "./useUser"

const techRoutes = []

const useRedirect = () => {
  const location = useLocation()
  const {
    user: { name, technician, ready },
    userError,
  } = useUser()
  const [loading, setLoading] = useState(true)
  const [uiReady, setUiReady] = useState(false)
  const [startLoading, setStartLoading] = useState(Date.now())
  const loadRoute = () => {
    localStorage.setItem("pathname", '')
    setLoading(false)
  }
  useEffect(() => {
    if (ready) {
      const route = localStorage.getItem("pathname")
      if (!name) navigate("/update-profile")
      if (techRoutes.includes(location.pathname) && !technician) {
        navigate("/reports")
      }
      if (route && route === location.pathname) {
        localStorage.setItem("pathname", "")
        setLoading(false)
      } else if (route) {
        navigate(route)
      } else {
        loadRoute()
      }
    } else if (location.pathname !== "/") {
      localStorage.setItem("pathname", location.pathname)
      setLoading(true)
      navigate("/")
    }
  }, [location.pathname, ready])
  useEffect(() => {
    setStartLoading(Date.now())
    if (!loading && location.pathname === "/" && ready) {
      setLoading(true)
      localStorage.setItem("pathname", "/reports")
      navigate(localStorage.getItem("pathname"))
    }
  }, [loading])
  useEffect(() => {
    ;(() => {
      const inter = setInterval(() => {
        if (
          (Date.now() > startLoading + 1000 && (ready || userError)) ||
          Date.now() > startLoading + 10000
        ) {
          setUiReady(true)
          clearInterval(inter)
        }
      }, 1000)
    })()
  }, [startLoading])
  return { uiReady }
}

export default useRedirect
