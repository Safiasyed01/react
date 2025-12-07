import React from 'react'

const App = () => {
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user', 'safia')
  // const user = localStorage.getItem('user')
  // console.log(user)
  // localStorage.removeItem('user')
  const user ={
    userName:'safia',
    age:84,
    city:'pesh'
  }
  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>
      local
    </div>
  )
}

export default App