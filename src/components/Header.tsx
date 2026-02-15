interface HeaderProps {
  onCreateNewTodo: () => void;
}
// agora meu todo nao tem mais dependencia no meu app, se eu quiser chamar ele em outro lugar, eu apenas preciso passar a prop onCreateNewTodo
// e o header nao sabe mais nada sobre o app, ele apenas sabe que vai receber uma prop onCreateNewTodo

export default function Header({ onCreateNewTodo }: HeaderProps) {
  return (
    <header>
      <h1>My new revolutionary to-do list app!</h1>

      <form>
        <input type="text" placeholder="Add a new task" />
        <button onClick={onCreateNewTodo}>Add new todo</button>
      </form>
    </header>
  )
}
