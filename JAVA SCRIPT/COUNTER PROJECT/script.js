const countvalue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countvalue.innerHTML)
    value = value+1
    countvalue.innerHTML = value;
}
const decrement = () => {
    let value = parseInt(countvalue.innerHTML)
    value = value-1
    countvalue.innerHTML = value;
}