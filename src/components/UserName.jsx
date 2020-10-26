import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'

export default function UserName(props) {
  const { me } = useContext(UserContext)
  return (
    <div>
      {me.username}
    </div>
  )
}
