import { createContext, useState } from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'

export let UserContext = createContext()

function App() {

  let [user, setUser] = useState(
    {
      name: "Miru",
      age: 23,
      email: "abc@gmail.com"
    }
  )


  return (
    <UserContext.Provider value={{user}}>
      <div className='app'>
        <Header />
        <Content user = {user}/>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
