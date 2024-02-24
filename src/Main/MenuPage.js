import { infoRestaurant } from "./AboutPage"
import { DessertsItems, DrinksItems, MealsItems } from "./MenuItems"

function createContainer(category) {
    const Container = document.createElement('div')
    Container.className = 'container'

    const Title = document.createElement('h2')
    Title.className = 'category'
    Title.textContent = category

    //SLIDER
    const Slider = document.createElement('div')
    Slider.classList.add(`${category}`, 'item-wrapper')

    if (Slider.classList.contains('meals')) {
        MealsItems().forEach(meal => {
            Slider.appendChild(Item(meal.name, meal.image, meal.description));
        });
    } else if (Slider.classList.contains('drinks')) {
        DrinksItems().forEach(drink => {
            Slider.appendChild(Item(drink.name, drink.image, drink.description));
        });
    } else if (Slider.classList.contains('desserts')) {
        DessertsItems().forEach(dessert => {
            Slider.appendChild(Item(dessert.name, dessert.image, dessert.description));
        });
    } else {
        console.log('Items NOT found!')
    }

    //BUTTONS
    const PrevBtn = document.createElement('button')
    PrevBtn.classList.add('pre-btn')
    const NxtBtn = document.createElement('button')
    NxtBtn.classList.add('nxt-btn')

    const ImgBtn = document.createElement('img')
    ImgBtn.src = './images/arrow.png'
    ImgBtn.alt = ' '

    PrevBtn.appendChild(ImgBtn.cloneNode(true))
    NxtBtn.appendChild(ImgBtn.cloneNode(true))

    Container.append(Title, Slider, PrevBtn, NxtBtn)

    return Container
}

function Item(title, image, text) {
    const Item = document.createElement('div')
    Item.classList.add('item')

    const ItemBox = document.createElement('div')
    ItemBox.className = 'item-box'

    const ImageItem = document.createElement('div')
    ImageItem.id = title
    ImageItem.className = 'img-item'
    ImageItem.style.background = `url('${image}') center center/cover no-repeat`

    const ImageSpan = document.createElement('span')
    ImageSpan.className = 'img'
    
    const Info = document.createElement('div')
    Info.className = 'info-item'

    const nameItem = document.createElement('h3')
    nameItem.className = 'name-item'
    nameItem.textContent = title

    const description = document.createElement('p')
    description.className = 'description'
    description.innerHTML = text

    Info.append(nameItem, description)

    ImageSpan.appendChild(Info)
    ImageItem.appendChild(ImageSpan)
    ItemBox.appendChild(ImageItem)
    Item.appendChild(ItemBox)

    return Item
}

function Slider() {
    const itemWrappers = document.querySelectorAll('.item-wrapper'),
    prevBtns = document.querySelectorAll('.pre-btn'),
    nextBtns = document.querySelectorAll('.nxt-btn')

    // For each itemWrapper(meals, drinks, desserts), add scrolling events
    itemWrappers.forEach((itemWrapper, index) => {
        // Gets all the items inside the current itemWrapper
        const items = itemWrapper.querySelectorAll('.item')

        let scrollAmount = 0 // to store the slide amount
        let itemsPerScroll = calculateItemsPerScroll(itemWrapper)

        prevBtns[index].addEventListener('click', function() {
            scrollAmount -= itemsPerScroll * items[0].offsetWidth // Calculate slip amount
            
            // Ensures that the slip amount is not less than 0
            if (scrollAmount < 0) scrollAmount = 0
            
            // Performs backward scrolling of the current itemWrapper
            itemWrapper.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            })
        })

        nextBtns[index].addEventListener('click', function() {
            scrollAmount += itemsPerScroll * items[0].offsetWidth
            
            // Ensures that the scroll amount doesn't exceed the total width of the itemWrapper
            if (scrollAmount > itemWrapper.scrollWidth - itemWrapper.clientWidth) {
                scrollAmount = itemWrapper.scrollWidth - itemWrapper.clientWidth
            }
            
            // Performs forward scrolling of the current itemWrapper
            itemWrapper.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            })
        })

        // Add a handler for the window resize event
        window.addEventListener('resize', function() {
            itemsPerScroll = calculateItemsPerScroll(itemWrapper) // Recalculates the number of elements to be scrolled for each scroll
        })
    })

    // Calculates the number of elements to be scrolled for each scroll
    function calculateItemsPerScroll(itemWrapper) {
        const wrapperWidth = itemWrapper.clientWidth // Get the width of the current itemWrapper
        const itemWidth = itemWrapper.querySelector('.item').offsetWidth // Get the width of a single element inside the itemWrapper
        return Math.floor(wrapperWidth / itemWidth) // Calculates the number of items that can be displayed simultaneously in the itemWrapper
    }
}

function MenuContent() {
    const menuContent = document.createElement('section')
    menuContent.className = 'menu-content'

    const titles = [
        { id: 'meals'},
        { id: 'drinks'},
        { id: 'desserts'}
    ]

    titles.forEach(title => {
        menuContent.appendChild(createContainer(title.id))
    })

    return menuContent
}

export default function pageMenu() {
    const overlay = document.getElementById("overlay")
    overlay.textContent = ''

    overlay.append(MenuContent(), infoRestaurant())
    Slider()
}