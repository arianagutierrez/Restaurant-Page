import WelcomePageContent from "./welcomePage"
import createNavBar from "./NavBar"

function HeaderContent() {
    const header = document.getElementById('header')
    header.innerHTML = 
    `<span class="toggle-btn">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </span>`

    const title = document.createElement('span')
    title.className = 'title-restaurant'

    const text = document.createElement('h1')
    text.className = 'name-restaurant'
    text.innerHTML= '<span id="red">L</span>im<span id="red">a</span><span id="green">R</span>om<span id="red">a</span> <span id="experience">Experience</span>'

    const icon = document.createElement('img')
    icon.id = 'icon-restaurant'
    icon.src = 'images/icon.png'
    icon.alt = 'icon-restaurant'

    title.append(icon, text)
    header.append(title, createNavBar())

    return header
}

function MainContent(){
    const bgOverlay = document.createElement('div')
    bgOverlay.className = 'bg-overlay'
    bgOverlay.id = 'overlay'

    return bgOverlay
}

function FooterContent() {
    const copyright = document.createElement("p")
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Ariana Gutierrez`
    return copyright
}

export default function initializeWebsite() {
    const main = document.getElementById('main')
    const footer = document.getElementById('footer')
    
    main.style.background = 'url(images/bg-restaurant.jpg) center/cover no-repeat'
    main.style.backgroundAttachment = 'fixed'
    
    WelcomePageContent()
    HeaderContent()
    main.appendChild(MainContent())
    footer.appendChild(FooterContent())
}