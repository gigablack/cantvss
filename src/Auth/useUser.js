import { useContext } from "react"
import { useMutation } from "urql"
import { UserContext } from "./UserProvider"

const UPDATE_USER = `
mutation UpdateUser($id: ID!, $name: String!, $lastname: String!, $ci: Int!) {
  update_cantvss_users_by_pk(pk_columns: {id: $id}, _set: {name: $name, lastname: $lastname, ci: $ci}) {
    id
    name
    lastname
    email
    ci
  }
}
`

const useUser = () => {
    const { user, setUser, userError, logout } = useContext(UserContext)
  const [{ data, fetching }, updateUserMutation] = useMutation(UPDATE_USER)
  const updateUser = async (name, lastname, ci) => {
    try {
      await updateUserMutation({ id: user.id, name, lastname, ci })
      if (!fetching) {
        setUser({
          ...data?.update_cantvss_users_by_pk,
          ready: true,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return {
    user,
    updateUser,
    loading: fetching,
    userError,
    logout
  }
}

export default useUser
