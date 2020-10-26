import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'

export default function UserFirstName(props) {
  const { me } = useContext(UserContext)
  return (
    <span>
      {me.firstName}
    </span>
  )
}
