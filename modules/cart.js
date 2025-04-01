class Cart{
    constructor(parent,price ){
        this.parent=parent;
        this.price=price;
        this.products=[];
        this.toShow=[];
    }
    showProducts(){
    this.toShow=[...new Set(this.products)];

    this.toShow.forEach((product)=>{
        const qty=this.products.filter((p)=>p.id===product.id).length;
        this.createCard(product,qty);
    })
    

    }
    //data = array members which have been in Set
    createCard(data,qty){
        const cardElement=document.createElement('div');

        const imgElement=this.productImg(data);
        const infoElement=this.productInfo(data);
        const controlElement=this.productControl(data,qty);

        cardElement.innerHTML=imgElement;
        cardElement.innerHTML+=infoElement;
        cardElement.innerHTML+=controlElement;

        this.parent.appendChild(cardElement);
        

    }
    productImg(data){
        const{image,alt} = data;
        const imgJsx=`<img alt=${alt} src=${image}>`;
        return imgJsx;

    }

    productInfo(data){
        const {name,price} = data;
        const infoJsx=`
        <div id="cart-info">
        <h4>${name}</h4>
        <p>$${price}</p>
        </div>
        `;
        return infoJsx;
    }
    productControl(data,qty){
        const {id} = data;
        const controlJsx=`
        <div id="cart-control">
           <div>
           <button data-id=${id}> - </button>
           <span>${qty}</span>
           <button data-id=${id}> + </button>
           </div>
           <button data-id=${id}> Remove </button>
        </div>
        `
        return controlJsx;
    }


};


export default Cart;