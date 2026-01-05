import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest01';
import Ex01Con from './containers/Ex01Con';
import Quiz01Con from './containers/Quiz01Con';
function App() {
  return (<>
  <Quiz01Con />

  <hr></hr>
    <Ex01Con />
    <hr />
    <StateTest01 />
  </>);
}

export default App;
