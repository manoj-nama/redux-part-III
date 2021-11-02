import logo from './logo.svg';
import './App.css';
import UserList from "./components/user.list";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <h1>React + Redux</h1>
      <UserList />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
