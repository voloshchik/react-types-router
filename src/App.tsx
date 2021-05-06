import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import List from './components/List'
import UserItem from './components/UserItem'

import { ITodo, IUser } from './types/types'
// import  {IUser} from './types/types'
const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limits=5')
    const data = await res.json()
    setUsers(data)
  }
  async function fetchTodos() {
    const res = await fetch('http://jsonplaceholder.typicode.com/todos?_limit=10')
    const data = await res.json()
    setTodos(data)
  }
  console.log('fetchTodos', todos)
  return (
    <div>
      <div className='container'>
        <Card
          variant={CardVariant.outlined}
          height='200px'
          width='200px'
          onClick={() => console.log('click App')}
        >
          <button className='btn btn-primary'>btn</button>
        </Card>

        <hr />
        <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
      </div>
    </div>
  )
}

export default App
