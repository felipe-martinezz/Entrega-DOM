class Usuario{
    constructor(nombre, email, constraseña, numero, pais) {
        this.nombre = nombre
        this.email = email
        this.constraseña = constraseña
        this.numero = numero
        this.pais = pais
    }
    
    }
    
    const usuarios = []
    
    const form = document.getElementById("idForm")
    
    form.addEventListener("submit", (event) => {
    event.preventDefault()
    let nombre = document.getElementById("idNombre").value
    let email= document.getElementById("idEmail").value
    let constraseña = document.getElementById("idContraseña").value
    let numero =  document.getElementById("idNumero").value
    let pais = document.getElementById("idPais").value
    
    const usuario = new Usuario(nombre, email, constraseña, numero, pais)
    usuarios.push(usuario)
    console.log(usuarios)
    })