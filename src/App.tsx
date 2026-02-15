import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"

// tomar cuidado pra nao levar muita logica para um componente, pois ele ira se tornar inutilizavel em outros contextos da aplicação
// como verifico se ele ficou mais utilizavel nessa 

export default function App() {
  const [todos, setTodos] = useState<string[]>([])

  useEffect(() => {
    // carregar uma lista de todos do back-end
  }, [])

  function createTodo() {
    // chamada p/ API
  }

  function deleteTodo() {
    // chamada p/ API
  }

  return (
    <div>
      <Header onCreateNewTodo={createTodo} />

      <main>
        <h2>advantages</h2>

        <section>
          <div>
            <h3>
              blazing fast
            </h3>
            <p>this to-do list app is insanely fast.</p>
          </div>
          <div>
            <h3>
              no css
            </h3>
            <p>Clean and flat design with no CSS</p>
          </div>
        </section>

        <ul>
          {todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>

      </main>
      <Footer />
    </div>
  )
}