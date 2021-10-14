import './App.css';
import Form from './Components/Form/Form';
import TaskList from './Components/TaskList/TaskList';

function App() {
  // const {tasks} = this.props
  return (
    <main>
      <h1>TODO LIST</h1>
        <Form />
      <div>
        <TaskList  />
      </div>
    </main>
  );
}

export default App;
