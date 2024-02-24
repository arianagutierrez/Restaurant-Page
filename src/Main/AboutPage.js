function AboutContent() {
    const aboutContent = document.createElement('section')
    aboutContent.className = 'about-content'

    const presentation = document.createElement('div')
    presentation.className = 'info presentation'

    const title = document.createElement('h1')
    title.id = 'title-page'
    title.textContent = 'About us'
    const paragraph = document.createElement('p')
    paragraph.id = 'paragraph'
    paragraph.innerHTML = "We're pleased to welcome you to the unique and engaging atmosphere of the LimaRoma Experience, where Peruvian culinary culture blends harmoniously with Italian gastronomic traditions to create an unparalleled taste experience!"

    presentation.append(title, paragraph)
    
    const infos = [
        {
            id: 'history',
            title: 'our history',
            description: 'Founded by a group of passionate and innovative chefs, LimaRoma Experience is the result of a shared vision: to offer our guests an unforgettable culinary journey, where every dish is a testimony to the art and passion of Italian and Peruvian cuisine.',
            image: 'images/about-1.jpg',
            text: 'Founders: Carina, Virgilio, Wilfredo, Carmen'
        },
        {
            id: 'cuisine',
            title: 'our cuisine',
            description: 'Our experienced chefs, inspired by the rich culinary traditions of Peru and Italy, create extraordinary dishes that satisfy the senses and nourish the soul. Using the finest ingredients, each bite becomes a celebration of culinary diversity and creativity.',
            image: 'images/about-2.jpg',
            text: 'Pollo a la Brasa'
        },
        {
            id: 'experience',
            title: 'the experience',
            description: "At LimaRoma Experience, we create a cosy and refined atmosphere where you can relax and enjoy every moment. With a combination of contemporary elegance and traditional warmth, our restaurant offers a unique ambience that will make you feel at home.",
            image: 'images/about-3.png',
            text: 'Lasagna'
        }
    ]
    
    aboutContent.appendChild(presentation)
    infos.forEach(info => {
        aboutContent.appendChild(content(info.id, info.title, info.description, info.image, info.text))
    })
    
    return aboutContent
}

function content(id, title, paragraph, image, text) {
    const aboutInfo = document.createElement('div')
    aboutInfo.className = `info ${id}`

    const subTitle = document.createElement('h2')
    subTitle.id = 'sub-title'
    subTitle.textContent = title

    const txt = document.createElement('p')
    txt.id = `text-${id}`
    txt.innerHTML = paragraph

    const spanImg = document.createElement('span')
    spanImg.className = 'img-content'
    spanImg.id = `img-${id}`
    spanImg.style.background = `url('${image}') center center/cover no-repeat`
    spanImg.innerHTML = 
    `<span class="img-text">
        <p>${text}</p>
    </span>`

    const subjectContent = document.createElement('div')
    subjectContent.className = 'content'
    subjectContent.append(txt, spanImg)

    aboutInfo.append(subTitle, subjectContent)
    
    return aboutInfo
}

export function infoRestaurant() {
    const restaurantInfo = document.createElement('div')
    restaurantInfo.className = 'restaurant-info'

    const textInfo = document.createElement('h4')
    textInfo.id = 'restaurant-text'
    textInfo.innerHTML = 
    '<span id="green">Gries</span> - Bozen, <span id="red">Italy</span>   |   <span id="red">Barranco</span> - Lima, <span id="red">Perú</span>  |   Mon - Fri 12am - 10pm, Sat - Sun 12am - 11:30pm'

    restaurantInfo.appendChild(textInfo)

    return restaurantInfo
}

export default function pageAbout() {
    const overlay = document.getElementById("overlay")
    overlay.textContent = ''
    
    overlay.append(AboutContent(), infoRestaurant())
}