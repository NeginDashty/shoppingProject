import { fetchData } from "../utils/httpReq.js";
import Products from "../modules/products.js";

const productsNode=document.getElementById('products');

async function render() {
    const productsData = await fetchData(); 
    const productsInstance=new Products(productsNode,productsData);
    console.log(productsInstance);
    productsInstance.showProducts();
}

document.addEventListener('DOMContentLoaded', render);
