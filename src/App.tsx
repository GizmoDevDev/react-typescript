import './App.css'
import {Component} from "./Component";

function App() {
  const article = {
    title: 'title',
    text: 'text',
    author: 'Gizmo'
  }
  return (
    <div className="App">
      <Component article={article} isHidden>
        <div>Child 1</div>
        <div>Child 2</div>
      </Component>
    </div>
  )
}

export default App
