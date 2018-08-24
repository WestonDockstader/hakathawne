import User from '../models/user.js'

let store

let state = {
  user: {}
}

function setState(prop, data) {
  state[prop] = data
  console.log(state)
}

export default class Store {
  login(creds, draw) {
    fetch('/auth/login', {
      method: 'post',
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
      .then(data => {
        setState('user', new User(data))
        draw()
      })
      .catch(console.error)
  }
  register(creds, draw) {
    fetch('/auth/register', {
      method: 'post',
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(res => res.json())
      .then(data => {
        setState('user', new User(data))
        draw()
      })
      .catch(console.error)
  }

  constructor() {
    if (store) {
      return store
    }
    store = this
  }
  get state() {
    return {
      ...state
    }
  }
}