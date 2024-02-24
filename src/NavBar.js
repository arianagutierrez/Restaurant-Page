import pageAbout from "./Main/AboutPage"
import pageMenu from "./Main/MenuPage"
import pageContact from "./Main/ContactPage"

const welcomePage = document.getElementById('welcome-page')

function HomeBtn() {
    const homeBtn = document.createElement('button')
    homeBtn.classList.add("nav-btn")
    homeBtn.textContent = 'Home'
    
    homeBtn.addEventListener("click", (e) => {
        const overlay = document.getElementById("overlay")
        overlay.textContent = ''
        
        if (e.target.classList.contains("active")) return
        setActiveButton(homeBtn)
        removeActiveBtns()
        welcomePage.style.display = 'block'
    })

    return homeBtn
}

function AboutBtn() {
    const aboutBtn = document.createElement('button')
    aboutBtn.classList.add("nav-btn")
    aboutBtn.id = 'about-btn'
    aboutBtn.textContent = 'About'

    aboutBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return
        setActiveButton(aboutBtn)
        removeActiveBtns()
        pageAbout()
    })

    return aboutBtn
}

function MenuBtn() {
    const menuBtn = document.createElement('button')
    menuBtn.classList.add("nav-btn")
    menuBtn.id = 'menu-btn'
    menuBtn.textContent = 'Menu'

    menuBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return
        setActiveButton(menuBtn)
        removeActiveBtns()
        pageMenu()
    })

    return menuBtn
}

function ContactBtn() {
    const contactBtn = document.createElement('button')
    contactBtn.classList.add("nav-btn")
    contactBtn.id = 'contact-btn'
    contactBtn.textContent = 'Contact'

    contactBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return
        setActiveButton(contactBtn)
        removeActiveBtns()
        pageContact()
    })

    return contactBtn
}

export function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-btn")

    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active")
      }
    })

    button.classList.add("active")

    return buttons
}

function removeActiveBtns() {
    const nav = document.querySelector('.navbar');

    if (nav.classList.contains('active-btns')) { 
        nav.classList.remove("active-btns");
    }
}

export default function createNavBar() {
    const navbar = document.createElement('nav')
    navbar.classList.add('navbar')
    const toggleBtn = document.querySelector('.toggle-btn')

    toggleBtn.addEventListener("click", () => {
        navbar.classList.toggle("active-btns")
    });

    navbar.append(HomeBtn(), AboutBtn(), MenuBtn(), ContactBtn())
    
    return navbar
}