let now = new Date()
let hour = now.getHours()

const title_now = document.querySelector('div.hora-agora')
const img_now = document.querySelector('div.img-agora')
const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')

title_now.innerHTML = `<h2> Agora são ${hour} horas </h2>`
 
if (hour < 12 && hour >= 5) {
    img_now.style.backgroundImage = "url('images/morning.jpg')"
} else if (hour < 18 && hour >= 12) {
    img_now.style.backgroundImage = "url('images/afternoon.jpeg')"
    body.style.backgroundColor = 'cyan'
}else {
    img_now.style.backgroundImage = "url('images/night.png')"
    body.style.backgroundColor = 'DarkBlue'
    header.style.color = 'White'
    footer.style.color = 'white'
}


