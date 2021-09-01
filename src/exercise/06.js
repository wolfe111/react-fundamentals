// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  const inputEl = React.useRef(null)

  const [error, setError] = useState(false)
  const [username, setUsername] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const username = event.target.elements.usernameInput.value
    onSubmitUsername(username)
  }

  function handleSubmit2(event) {
    event.preventDefault()
    const username = inputEl.current.value
    onSubmitUsername(username)
  }

  function handleSubmit3(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const value = event.target.value
    if (value === value.toLowerCase()) {
      setError(false)
    } else {
      setError(true)
    }
  }

  function handleInputChange(event) {
    const value = event.target.value

    return setUsername(value.toLowerCase())
  }

  return (
    // <form onSubmit={handleSubmit2} onChange={handleChange}>
    <form onSubmit={handleSubmit3}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* <input value={user} ref={inputEl} id="usernameInput" type="text" /> */}
        <input onChange={handleInputChange} value={username} type="text" />
      </div>

      {error && (
        <h2 style={{color: 'red'}}>THERES A CAPITAL IN THE USERNAME</h2>
      )}
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
