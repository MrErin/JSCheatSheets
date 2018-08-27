const componentFactory = (type, contents, id, classes) => {
    const component = document.createElement(type)
    if (type === 'input'){
        component.placeholder = contents
        component.id = id
        component.classList = classes
    } else {
        component.textContent = contents
        component.id = id
        component.classList = classes
    }
    return component
}

module.exports = componentFactory