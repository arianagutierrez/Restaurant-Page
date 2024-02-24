import pageAbout from "./Main/AboutPage"
import { setActiveButton } from "./NavBar"
import pageContact from "./Main/ContactPage"

const welcomePage = document.getElementById('welcome-page')

function TextPage() {
    const text = document.createElement('div')
    text.className = 'text-page'

    const firstText = document.createElement('p')
    firstText.id = 'first-text'
    firstText.innerHTML = "We're delighted to welcome you <br/> to the heart of our Peruvian-Italian cuisine! <br/>  We're open to delight you with our <br/> unique and authentic flavours!<br/>"

    const secondText = document.createElement('p')
    secondText.id = 'second-text'
    secondText.innerHTML = "Monday - Friday 12am - 10pm <br/> Saturday - Sunday 12am - 11:30pm"

    const thirdText = document.createElement('p')
    thirdText.id = 'third-text'
    thirdText.innerHTML = "Perhaps you're looking for <br/> an unforgettable culinary experience or simply <br/>   want to savour a moment of relaxation, <br/> we're here to satisfy your gastronomic desires!"

    text.append(firstText, secondText, thirdText)

    return text
}

function BtnsPage() {
    const btns = document.createElement('div')
    btns.className = 'btns-page'

    const welcomeBtn = document.createElement('button')
    welcomeBtn.id = 'welcome-btn'
    welcomeBtn.innerHTML = 'Welcome to <span>LimaRoma</span>'

    welcomeBtn.addEventListener('click', () => {
        welcomePage.style.display = 'none'
        const aboutBtn = document.getElementById('about-btn')
        setActiveButton(aboutBtn)
        pageAbout()
    })

    const reservationBtn = document.createElement('button')
    reservationBtn.id = 'reservation-btn'
    reservationBtn.textContent = 'Reservation'

    reservationBtn.addEventListener('click', () => {
        welcomePage.style.display = 'none'
        const contactBtn = document.getElementById('contact-btn')
        setActiveButton(contactBtn)
        pageContact()
    })

    btns.append(welcomeBtn, reservationBtn)

    return btns
}

function AutorPage() {
    const autor = document.createElement('div')
    autor.className = 'autor-page'

    const name = document.createElement('p')
    name.id = 'name-autor'
    name.textContent= 'developed by Ariana GG'

    autor.appendChild(name)

    return autor
}

function OverlayContent() {
    const overlay = document.createElement('div')
    overlay.id = 'bg-overlay'

    overlay.append(TextPage(), BtnsPage(), AutorPage())

    return overlay
}

const images = [
    './images/LimaRoma-1.jpg', 
    './images/LimaRoma-2.jpg',
    './images/LimaRoma-3.jpg',
    './images/LimaRoma-4.jpg',
    './images/LimaRoma-5.jpg',
    './images/LimaRoma-6.jpg',
    './images/LimaRoma-7.jpg',
    './images/LimaRoma-8.jpg'
]

let currentIndex = 0
const transitionDuration = 6000

function BackgroundTransition() {
    welcomePage.style.backgroundImage = `url('${images[currentIndex]}')`

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length //Increases the index and returns it to zero if the end of the array is reached
        
        // A new temporary div element is created to manage the transition of the background image
        const transitionBg = document.createElement('div')
        transitionBg.className = 'transition-bg'
        transitionBg.style.backgroundImage = `url('${images[currentIndex]}')`

        welcomePage.appendChild(transitionBg)
        
        // Start the gradual transition to the next image
        setTimeout(() => {
            transitionBg.classList.add('fade')
        }, 2000)
        
        // Removes the temporary div after the END of the transition to show the welcomePage with the same current Image
        setTimeout(() => {
            welcomePage.style.backgroundImage = `url('${images[currentIndex]}')`
            welcomePage.style.backgroundAttachment = 'fixed'
            transitionBg.remove()
        }, 5000)

    }, transitionDuration) 
}

export default function WelcomePageContent() {
    BackgroundTransition()
    welcomePage.appendChild(OverlayContent())
}