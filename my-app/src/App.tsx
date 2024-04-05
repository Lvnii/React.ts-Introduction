import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/counter';
import Users from './Components/Users/Users';

// type User = {
//   email: string,
//   name: string,
//   lastName: string,
//   age: number,
//   pn: string,
// }

// type Admin = User & {
//   access: string[],
// }

// const user: User = {
//   email: '',
//   name: '',
//   lastName: '',
//   age: 0,
//   pn: '',
// }

// const admin: Admin = {
//   email: '',
//   name: '',
//   lastName: '',
//   age: 0,
//   pn: '',
//   access: [ 'edit', 'delete', 'update', 'create' ]
// }


// interface User {
//   name: string,
//   lastName: string,
//   middleName: string,
// }

// interface Guest extends Omit<User, 'name'> {}

// type User = {
//   name: string,
//   lastName: string,
//   middleName: string,
// }

// type Guest = Omit<User, 'name'>

// const sum = (a: number, b: number) => {
//   return a + b
// }

// const c = sum( 1, 2)

function App() {
    
    return (
      <div className="App">
        <Counter />
        <Users />
      </div>
  );
}

export default App;
