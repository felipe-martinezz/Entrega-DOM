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
    const divUsers = document.getElementById("divUsers")
    const botonUsers = document.getElementById("botonUsers")
    
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

    form.reset()
})

botonUsers.addEventListener('click', () => {
    usuarios.forEach(Usuario => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${Usuario.nombre}</h5>
                <p class="card-text">${Usuario.email}</p>
                <p class="card-text">${Usuario.pais}</p>
            </div>
        </div>
        
        `
    })
})