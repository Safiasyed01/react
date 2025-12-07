import React from 'react'
 
const App = () => {
 const getData = async()=> {
 const response =   await fetch('https://jsonplaceholder.typicode.com/todos')
 const data = await response.json()  
 console.log(data)
  }
  // localStorage.clear()
  // sessionStorage.clear()
  // localStorage.setItem('user', 'safia')
  // const user = localStorage.getItem('user')
  // console.log(user)
  // // localStorage.removeItem('user')
  // const user ={
  //   userName:'safia',
  //   age:84,
  //   city:'pesh'
  // }
  // localStorage.setItem('user',JSON.stringify(user))


  return (
    <div>
      <button onClick={getData}>getData</button>
    </div>
  )
}

export default App