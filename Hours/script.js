function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#FDC990'
} else if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#4C302B'
} else {
    //Boa Noite!
    img.src = 'fotonoite.png'
    document.body.style.background = '#08243E'
}
