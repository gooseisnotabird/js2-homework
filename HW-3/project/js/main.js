const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];  // массив товаров из json документа
        this._getProducts()    // рекомендация, чтобы метод был вызван в текущем классе
            .then(data => {  //.json всегда возвращает (строка 18) promise, потому здесь .then (data - объект js)
                this.goods = data;
                this.render()
            });
    }
    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //block.innerHtml += item.render();
        }
    }
    // getSum() {
    //     let sum = 0;
    //     this.goods.forEach(item => {
    //         sum += item.price;
    //     })

    //     for (let product of this.goods) {
    //         sum += product.price;
    //     }
    //     alert(sum);
    //     console.log(sum)
    // }

    // getSum() {
    //     return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    // }
}
class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.picture = img;
        //this.picture = product.img;
    }
    render() {
        return `<div class="product-item">
        <h3 class="product-title">${this.title}</h3>
        <img src =" ${this.picture}"></img>  
        <p class="price">${this.price}</p>
        <button class="buy-btn">Купить</button>
    </div>`
    }
}





class Basket {
    constructor(container = '.cart') {
        this.container = container;
        this.cartGoods = [];  // массив товаров из json док-а
        this._showBasket();
        this._getCartGoods()
            .then(cartData => {// после fetch .then всегда
                this.cartGoods = cartData.contents;
                this.render()
            });
    }
    _getCartGoods() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.cartGoods) {
            const item = new ElemBasket(product);
            block.insertAdjacentHTML("beforeend", item.render());
            //block.innerHtml += item.render();
        }
    }
    addGoods() {
    }
    removeGoods() {
    }
    changeGoods() {
    }
    _showBasket() {
        document.querySelector('.btnCart').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle('hidden');
        });
    }
}
class ElemBasket {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.picture = img;
        this.quantity = product.quantity;
    }

    render() {
        return `<div class="cartProduct-item">
        <h3 class="cartProduct-title">${this.title}</h3>
        <div class="cartBox">
        <img class="cartImg" src =" ${this.picture}"></img>  
        <p class="price">${this.price}</p>
  
        <p class="quantity">qty: ${this.quantity}</p>
        </div>
        
        
    </div>`
    }
}


let list = new ProductList();
let cart = new Basket();





//list.getSum();
//console.log(list.getSum());



