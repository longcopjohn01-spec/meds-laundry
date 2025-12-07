const LOGIN_KEY = 'user'
function login() {
    const username = document.getElementById("login-user").value
    const password = document.getElementById("login-pass").value

    if (username === 'admin' && password === 'admin') {
    	sessionStorage.setItem(LOGIN_KEY, 'ok')
        window.location.href = 'admin-inquiry-records.html'
    } else {
        alert('Wrong account')
    }
}

function logout() {
	sessionStorage.removeItem(LOGIN_KEY)
    window.location.href = 'index.html'
}

function checkLogin(redirect = false) {
    const ok = sessionStorage.getItem(LOGIN_KEY)
    const el = document.getElementById('login-btn')

    if (ok) {
        if(el) {
            el.innerHTML = 'Dashboard'
            el.href = 'admin-inquiry-records.html'
        }   
    } else {
        if(el) {
            el.innerHTML = 'Owner Login'
            el.href = 'login.html'
        }

        if (redirect) {
            alert('Login required')
            window.location.href = 'login.html'
        }
    }

}
