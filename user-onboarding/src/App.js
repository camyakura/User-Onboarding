import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Form from './components/Form'
import Character from './components/Character'
import './App.css';
import schema from './validation/formSchema'
import * as yup from 'yup'



//https://reqres.in/api/users

const initialValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

const initialErrors = {
  name:'',
  email: '',
  password: '',
  termOfService: false
}

function App() {

  const [characters, setCharacters] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [disabled, setDisabled] = useState(true)

  const getCharacters = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setCharacters(res.data.data)
      })
      .catch(err => console.log(err))
  }

  const postNewCharacter = newCharacters => {
    axios.post('https://reqres.in/api/users', newCharacters)
      .then(res => {
        console.log(res)
        setCharacters([res.data.data,...characters])
        setFormErrors(initialErrors)
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newCharacter = {
      name: formValues.name.trim(),
      email:formValues.email.trim(),
      password:formValues.password,
      // termsOfService: formValues
    }
    postNewCharacter(newCharacter)
  }

  useEffect(() => {
    getCharacters()
  }, [])


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="container">
      <header><h1>Characters App</h1></header>

      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        // disabled={disabled}
        errors={formErrors}
      />

      {
        characters.map(char => {
          return (
            <Character key={char.id} details={char} />
          )
        })
      }
      
    </div>
  );
}

export default App;
