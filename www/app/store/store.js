import User from '../models/user.js'
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000/',
  timeout: 3000
})

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
    console.log('login creds', creds)
    api.post('auth/login', creds)
      .then(data => {
        setState('user', new User(data.data))
        draw()
      })
      .catch(console.error)
  }
  register(creds, draw) {
    api.post('auth/register', creds)
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