import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const SearchFilter = ({ searchName, handleSearchChange }) => (
  <div>
    search: <input value={searchName} onChange={handleSearchChange} />
  </div>
)

const PersonForm = ({ addPhone, newName, handleNameChange, newPhone, handlePhoneChange }) => (
  <form onSubmit={addPhone}>
    <div>
      name: <input value={newName} onChange={handleNameChange} />
      phone: <input value={newPhone} onChange={handlePhoneChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)

const PersonList = ({ persons }) => (
  <div>
    <h2>Numbers</h2>
    {persons.map(person => (
      <div key={person.id}>{person.name}: {person.phone}</div>
    ))}
  </div>
)

const App = () => {
  const [showAll, setShowAll] = useState(true)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPhone = (event) => {
    event.preventDefault()
    const phoneObject = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1
    }
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(phoneObject))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const phoneToShow = searchName === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm
        addPhone={addPhone}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <SearchFilter
        searchName={searchName}
        handleSearchChange={handleSearchChange}
      />
      <PersonList persons={phoneToShow} />
    </div>
  )
}

export default App
