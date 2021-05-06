import React from 'react'
import { IUser } from '../types/types'

interface UserItemProps {
  user: IUser
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className='card ' key={user.id}>
      <div className='card-body '>
        {user.name} живет в городе {user.address.city} по адрессу {user.address.street}
      </div>
    </div>
  )
}

export default UserItem
