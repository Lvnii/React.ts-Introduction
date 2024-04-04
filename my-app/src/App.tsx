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

    type Func = (name: string, lastName: string, age?: number) => string

    let getFullName: Func;

    getFullName = (name, lastName, age) => {
      const full = `${name} ${lastName}`;
      return full;
    }

    type Gender = 'Male' | 'Female' | 'Other';

    let gender : Gender = 'Male';
    console.log(gender)

    const flag: boolean = true


    const fullName = getFullName('levani','esitashvili')


    
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

    // console.log(persons)

    // for (let i = 0; i < persons.length; i++) {
    //   console.log(persons[i].lastName)
    // }
    
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
