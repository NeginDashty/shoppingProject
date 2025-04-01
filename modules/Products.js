class Products {
    constructor(parent, productsData,cart) {
        this.parent = parent;
        this.productsData = productsData;
        this.cart=cart;
        //this => handelEvent**
        this.parent.addEventListener('click',this);
    }

    showProducts() {
        this.productsData.forEach(product => {
            this.createCard(product);
        });
    }

    createCard(data) {
        const cardElemnt = document.createElement('div');
        const img=this.productImg(data);
        const infoElement=this.productInfo(data);
        
        cardElemnt.innerHTML=img; 
        cardElemnt.innerHTML+=infoElement;
        this.parent.appendChild(cardElemnt);
    }
    productImg(data){
        const {image , alt}=data;
        const imgJsx =`<img alt=${alt} src=${image} />`;
        return imgJsx;
    }
    productInfo(data){
        const {id,name,price}=data;
        const infoJsx=`<div id="product-info">
        <h3>${name}</h3>

        <div>
        <span> ${price} </span>
        <button data-id=${id}> + </button>
        </div>
        </div>`;
        return infoJsx;
    }
    handleEvent(){
        const element=event.target;
        
        if (element.tagName === "BUTTON") {
            this.addToCard(element.dataset.id)
        }
    }

    addToCard(id){
        const product = this.productsData.find(i => i.id === +id);
        console.log(product)
        this.cart.products.push(id);

    }

}

export default Products;
