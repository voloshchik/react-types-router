import React from 'react'
import { IUser } from '../types/types'

interface UserListProps {
  users: IUser[]
}

const userList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <p>{user.name}</p>
      })}
    </div>
  )
}

export default userList
