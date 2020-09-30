import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: "Bobby Patel", number: "7147494217" },
    { name: "Elmo", number: "7147494217" },
    { name: "Simran", number: "7147494217" },
    { name: "poop", number: "7147494217" },
    { name: "Bob", number: "7147494217" },
  ]) 
  const [ newName, setNewName] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ filteredPersons, setFilteredPersons ] = useState([])

  

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    
  }
  const addNameAndNum = (event) => {
    const newPerson = { name: newName, number: newNum}
    const existingPerson = persons.filter(
      (person) => person.name === newPerson.name
    );
    event.preventDefault()
    if (existingPerson.length>0){
      window.alert("This person already exists in the phonebook.")
    }
    else {
      setPersons(persons.concat(newPerson))
    }
      

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      filter: <input
        value ={filter}
        onChange={handleFilterChange}
      />
      </div>
      <p>searching for: {filter}</p>
      <h2> add a new </h2>
      <form onSubmit = {addNameAndNum}>
        <div>
          name: <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>
        <div>
          number: <input
            value = {newNum}
            onChange = {handleNumChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>Name: {newName} Number: {newNum}</p>
      <ul>
        {persons.map((person) => 
            <li>{person.name} - {person.number}</li>
          )}
      </ul>
      <ul>
        {persons
          .filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase()))
          .map((p) => 
              <li>{p.name}:{p.number}</li>
          )}
      </ul>
    </div>

  )
}

export default App
