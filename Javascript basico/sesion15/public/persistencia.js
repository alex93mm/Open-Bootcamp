
    //accesibles desde el mismo servidor

    function guardar() {
        window.localStorage.setItem("miVariable", nombre.value)
        window.sessionStorage.setItem("miVariable2", nombre.value)
    }

    function mostrar() {
        result.value = window.localStorage.getItem("miVariable")
    }
    function quitar() {
        window.localStorage.removeItem("miVariable")
    }

    function ponCookie() {
        document.cookie = 'cookie1=test; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'
    }