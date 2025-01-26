import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'
import { addTodo } from './Features/TodoSlice.js'

function App() {

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
