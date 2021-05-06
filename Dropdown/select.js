export default class Select {
    constructor(element) {
        this.element = element;
        // ดึง option ทั้งหมดจาก element มาไว้ใน options ( object )
        this.options = getFormattedOption(element.querySelectorAll('option'))
        this.customElement = document.createElement('div')
        this.labelElement = document.createElement('span')
        this.optionsCustomElement = document.createElement('ul')
        setupCustomElement(this)
        element.after(this.customElement)
    }

    get selectedOption() {
        return this.options.find(option => option.selected)
    }
}

function setupCustomElement(select) {
    select.customElement.classList.add('custom-select-container')

    select.labelElement.classList.add('custom-selected-value')
    select.labelElement.innerText = select.selectedOption.value


    // นำ span เข้าใน div (label)
    select.customElement.append(select.labelElement)


    select.optionsCustomElement.classList.add('custom-select-option')
    // นำ ul เข้า div (option ต่างๆ)
    select.options.forEach(option => {
        const optionElement = document.createElement('li')
        optionElement.classList.add('custom-select-option')
        optionElement.classList.toggle('selected',option.selected)
        optionElement.innerText = option.label;
        optionElement.dataset.value = option.value;
        select.optionsCustomElement.append(optionElement)
    })
    select.customElement.append(select.optionsCustomElement)
}


function getFormattedOption(optionElements){
    return [...optionElements].map(optionElement => {
        return {
            value: optionElement.value,
            label: optionElement.label,
            selected: optionElement.selected,
            element: optionElement,
        }
    })

}