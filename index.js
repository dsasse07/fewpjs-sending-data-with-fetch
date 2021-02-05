// Add your code here
const submitData = (name, email) => {
  let user = {name, email}

  let config = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  }

  const appendUserToDom = obj => {
    let name = document.createElement("p")
    let email = document.createElement("p")
    let id = document.createElement("p")
      name.textContent = obj.name
      email.textContent = obj.email
      id.textContent = obj.id
        
    document.body.append(name, email, id)
  }

  const appendError = e => {
    let error = document.createElement("p")
    error.textContent = e.message
    document.body.append(error)
  }

  return fetch('http://localhost:3000/users', config)
          .then( r => r.json() )
          .then( d => appendUserToDom(d))
          .catch( e => appendError(e))
}
