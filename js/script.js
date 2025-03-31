import { fetchData } from "../utils/httpReq.js";
import Products from "../modules/products.js";
import Cart from "../modules/cart.js";

const productsNode=document.getElementById('products');
const cartListNode=document.getElementById('cart-list');
const priceNode=document
.getElementById('total-price')
.querySelector('span');


async function render() {
    const productsData = await fetchData(); 
    
    const cartInstance=new Cart(cartListNode,priceNode);
    const productsInstance=new Products(productsNode,productsData,cartInstance);
    console.log(cartInstance)
    productsInstance.showProducts();
}

document.addEventListener('DOMContentLoaded', render);
