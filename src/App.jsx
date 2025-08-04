import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LudoBoard from './LudoBoard'
import Form from "./Form"
import CommentsForm from '../CommentsForm'

function App() {

  return (
    <>
    <Form/>
    <LudoBoard/>
    </>
  )
}

export default App
