import Store from '../../store/store.js'

let store = new Store()

let elem = document.getElementById('app')

function draw() {
  elem.innerHTML = `
  <div>
    <h1>Hello, ${store.state.user.username}</h1>
  </div>
  `
}

export default class UserController {
  constructor() {

  }

  login(e) {
    e.preventDefault();
    let creds = {
      username: e.target.username.value,
      pin: e.target.pin.value
    }
    store.login(creds, draw)
  }
}