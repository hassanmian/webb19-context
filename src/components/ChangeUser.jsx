import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'


export default function ChangeUser() {
  const { setMe } = useContext(UserContext)
  function handleOnClick() {
    setMe({
      username: "janedoe",
      firstName: "Jane",
      lastName: "Doe"
    })
  }
  return (
    <button onClick={handleOnClick}>
      Change User
    </button>
  )
}
