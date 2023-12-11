import logo from './logo.svg';
import './App.css';
import ClassComponent from '../components/ClassComponent';

function App() {
  let user = {
    firstName : 'Harry',
    lastName : 'Potter',
    className : 'T2308E'
  };
  function formatUser(user){
    return user.firstName + ' '+ user.lastName + ', class: '
     +user,className;
  }

  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}
export default App;
