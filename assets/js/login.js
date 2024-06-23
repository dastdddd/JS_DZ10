
const login = document.getElementById('loginForm')
const nameInp = document.getElementById('name')
const passwordInp = document.getElementById('password')
const formButton = document.getElementById('button')

//-----------------------------------------------


function check(event){
    event.preventDefault()

    if(passwordInp.value === "1234" && nameInp.value === 'admin'){
        localStorage.setItem('login',JSON.stringify(true))
        window.location.pathname = '/index.html'
    }else{
        alert('Не верно введены данные')
    }
}

login.addEventListener('submit',check)




