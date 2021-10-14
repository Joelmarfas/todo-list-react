import './App.css';
import Form from './Components/Form/Form';

function App() {
  return (
    <main>
      <h1>TODO LIST</h1>
      <Form />
      <div>
        <ul>
         <div>
         <li>task 1</li>
         <button>Del</button>
         </div>
         <div>
         <li>task 2</li>
         <button>Del</button>
         </div>
         <div>
         <li>task 3</li>
         <button>Del</button>
         </div>
        </ul>
      </div>
    </main>
  );
}

export default App;
