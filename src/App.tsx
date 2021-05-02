import React from 'react'
import Card, { CardVariant } from './components/Card'

const App = () => {
  return (
    <div>
      <Card
        variant={CardVariant.outlined}
        height='200px'
        width='200px'
        onClick={() => console.log('click App')}
      >
        <button>btn</button>
      </Card>
    </div>
  )
}

export default App
