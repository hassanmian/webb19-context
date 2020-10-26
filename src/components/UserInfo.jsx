import React from 'react'
import UserFirstName from './UserFirstName'
import UserName from './UserName'

export default function UserInfo(props) {
  return (
    <div>
      <UserName />
      <p>
        <UserFirstName />
      </p>
    </div>
  )
}
