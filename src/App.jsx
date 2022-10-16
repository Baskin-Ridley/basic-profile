import { useState } from 'react'
import './App.css'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Main from './components/main/Main'
function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Contact />
    </div>
  )
}

export default App
