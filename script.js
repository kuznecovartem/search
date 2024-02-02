let searchInput = document.querySelector('#searchInput');
let items = document.querySelectorAll('.item');

let chunk = 'груш';



searchInput.addEventListener('keyup', () => {
    for (let item of items) {
        let str = item.textContent;
        if (str.indexOf(chunk) != -1) {
            console.log(str);
        }
    }
})