export default function storeLocalStorage(data) {
    if (localStorage.getItem('card') === null) {
        localStorage.setItem('card', JSON.stringify([data]))
    } else {
        const products = JSON.parse(localStorage.getItem('card'))
        // products.includes(data) ? e.preventDefault():products.push(data) && localStorage.setItem('card', JSON.stringify(products))
        products.some(item => data.id===item.id ) ? "" : products.push(data) && localStorage.setItem('card', JSON.stringify(products))
        console.log(products);
                //
    }
}