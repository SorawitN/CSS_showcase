import Select from './select.js'

const selectElements = document.querySelectorAll('[data-custom]')

selectElements.forEach(selectElement => {
    new Select(selectElement)
    // วนลูปสร้าง instance ของ class Select 
})


