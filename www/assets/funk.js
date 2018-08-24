function switchForms() {
  let log = document.getElementById('login')
  let reg = document.getElementById('register')

  if (log.style.display == "") {
    reg.style.display = ""
    log.style.display = "none"
  } else {
    reg.style.display = "none"
    log.style.display = ""
  }
}