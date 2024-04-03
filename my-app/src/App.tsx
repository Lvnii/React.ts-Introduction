import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // type Person = {
  //   name: string,
  //   lastName: string,
  //   age?: number,
  //   fullName?: string,
  // }  
  
  // const obj: Person = {
    //   name: 'levani',
    //   lastName: 'esitashvili',
    //   age: 12,
    //   fullName: 'esitaanti',
    // }

    // console.log(obj)

    const getFullName = (name: string, lastName: string, age?: number) => {
      console.log(name + ' ' + lastName)
    }

    getFullName('levani','esitashvili', 20)
    
    type Person = {
      name: string,
      lastName: string,
      age?: number,
      fullName?: string,
    }
    
    const person: Person = {
      name: 'test',
      lastName: 'test',
    }

    const persons: Person[] = [person]
    // const persons: Array<Person> = [person]

    console.log(persons)

    for (let i = 0; i < persons.length; i++) {
      console.log(persons[i].lastName)
    }
    
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
