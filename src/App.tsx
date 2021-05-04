import React from 'react'
import Card, { CardVariant } from './components/Card'

const App = () => {
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
      </div>
    </div>
  )
}

export default App
