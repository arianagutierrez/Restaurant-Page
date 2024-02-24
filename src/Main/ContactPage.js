import { infoRestaurant } from "./AboutPage"

function ContactContent() {
    const contactContent = document.createElement('section')
    contactContent.className = 'contact-content'

    contactContent.append(Form(), Info())

    return contactContent
}

function Form(){
    const FindATable = document.createElement('div')
    FindATable.className = 'find-a-table'

    const titleForm = document.createElement('h2')
    titleForm.textContent = 'Find a table'

    const form = document.createElement('form')
    form.className = 'reservation-form'

    const nameInput = createInput('text', 'name', 'Name 👤', true)
    const emailInput = createInput('email', 'email', 'Email 📧', true)
    const dateInput = createInput('date', 'date', '', true)
    const timeSelect = createTimeSelect()
    const guestsInput = createInput('number', 'guests', 'N° of Guests 👥 (max. 20)', true, 1, 20)
    
    const Message = document.createElement('p')
    Message.className = 'message'
    Message.innerHTML = `🍽 Restaurant Operation:<br/>
    Monday - Friday 12am - 10pm<br/>
    Saturday - Sunday 12am - 11:30pm`
    
    const submitBtn = document.createElement('button')
    submitBtn.className = 'submit-form'
    submitBtn.setAttribute('type', 'submit')
    submitBtn.textContent = 'check availability'

    form.append(nameInput, emailInput, dateInput, guestsInput, timeSelect, Message, submitBtn)
    
    form.addEventListener('submit', function(event) {
        event.preventDefault() // Prevent the form from submitting

        const existingAlert = form.querySelector('.alert')
        if (existingAlert) {
            existingAlert.remove()
        }

        const alert = document.createElement('div')
        alert.className = 'alert'

        const alertText = document.createElement('p')
        alertText.className = 'alert-text'
        alertText.textContent = 'Date not available!'
        const tryAgain = document.createElement('span')
        tryAgain.textContent = 'try again'

        tryAgain.addEventListener('click', () =>{
            alert.remove()

            nameInput.value = ''
            emailInput.value = ''
            dateInput.value = ''
            timeSelect.value = ''
            guestsInput.value = ''
        })

        alert.append(alertText, tryAgain)
        form.append(alert)
    })

    FindATable.append(titleForm, form)

    return FindATable
}

function createInput(type, name, placeholder, required, min, max) {
    const input = document.createElement('input')
    input.setAttribute('type', type)
    input.setAttribute('name', name)
    input.setAttribute('placeholder', placeholder)

    if (required) {
        input.setAttribute('required', '')
    }
    if (min !== undefined) {
        input.setAttribute('min', min)
    }
    if (max !== undefined) {
        input.setAttribute('max', max)
    }

    return input
}

function createTimeSelect() {
    const select = document.createElement('select')
    select.setAttribute('name', 'time')
    select.setAttribute('required', '')

    const defaultOption = document.createElement('option')
    defaultOption.setAttribute('value', '')
    defaultOption.textContent = 'Select a time'
    select.appendChild(defaultOption)

    const timeOptions = [
        { value: '12:00', label: '12:00 pm' },
        { value: '12:30', label: '12:30 pm' },
        { value: '13:30' , label: '1:30 pm' },
        { value: '14:00', label: '2:00 pm' },
        { value: '14:30', label: '2:30 pm' },
        { value: '15:00', label: '3:00 pm' },
        { value: '15:30', label: '3:30 pm' },
        { value: '16:00', label: '4:00 pm' },
        { value: '16:30', label: '4:30 pm' },
        { value: '17:00', label: '5:00 pm' },
        { value: '17:30', label: '5:30 pm' },
        { value: '18:00', label: '6:00 pm' },
        { value: '18:30', label: '6:30 pm' },
        { value: '19:00', label: '7:00 pm' },
        { value: '19:30', label: '7:30 pm' },
        { value: '20:00', label: '8:00 pm' },
        { value: '20:30', label: '8:30 pm' },
        { value: '21:00', label: '9:00 pm' },
        { value: '21:30', label: '9:30 pm' },
        { value: '22:00', label: '10:00 pm' },
        { value: '22:30', label: '10:30 pm' },
        { value: '23:00', label: '11:00 pm' },
        { value: '23:30', label: '11:30 pm' }
    ]

    timeOptions.forEach(option => {
        const timeOption = document.createElement('option')
        timeOption.setAttribute('value', option.value)
        timeOption.textContent = option.label
        select.appendChild(timeOption)
    });

    return select
}

function Info() {
    const ContactUs = document.createElement('div')
    ContactUs.className = 'contact-info'

    const TitleInfo = document.createElement('h2')
    TitleInfo.textContent = 'Contact Us'

    const field = document.createElement('div')
    field.className = 'information'

    const Phone = document.createElement('p')
    Phone.textContent = '☎️ 0417082812'

    const Email = document.createElement('p')
    Email.textContent = '📧 info@limaromaexperience.com'
    
    field.append(Phone, Email)
    ContactUs.append(TitleInfo, field)

    return ContactUs
}

export default function pageContact() {
    const overlay = document.getElementById("overlay")
    overlay.textContent = ''

    overlay.append(ContactContent(), infoRestaurant())
}