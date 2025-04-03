class Cart{
    constructor(parent,price ){
        this.parent=parent;
        this.price=price;
        this.products=[];
        this.toShow=[];
        this.parent.addEventListener('click',this);
    }

    showProducts(){
        this.parent.innerHTML = ""; // ✅ Clear previous cart content

        this.toShow = [...new Set(this.products)];
    
        this.toShow.forEach((product) => {

            const qty = this.products.filter((p) => p.id === product.id).length;
            this.createCard(product, qty);
        });
        this.calculateTotalPrice();

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
           <button  data-id=${id}> + </button>
           </div>
           <button data-id=${id}> Remove </button>
        </div>
        `
        return controlJsx;
    }
    handleEvent(event){
        const tagName=event.target.tagName;
        const id=event.target.dataset.id;
        const type=event.target.innerText;
        if (tagName !== "BUTTON") return;
        switch (type) {
           case "+":
            this.increase(id);
            console.log(id);
           break;

           case("-"):
           this.decrease(id);
           break;

           case("Remove") :
           this.remove(id);
           break;
           
        }
    }

    increase( id ){
        const product=this.products.find(p=>p.id=== +id);
        this.products.push(product);
        this.showProducts();
    }
    decrease( id ){
        const index=this.products.findIndex((p)=>p.id = id);
        this.products.splice(index,1);
        this.showProducts();
    }
    remove( id ){
        const newProducts=this.products.filter((p)=> p.id !== +id);
        this.products=newProducts;
        this.showProducts();
    }
    calculateTotalPrice(){
        const total = this.products.reduce((acc, cur) => {
            return acc + cur.price;
        }, 0);
        
        this.price.innerText=`$ ${total}`;
    }

};


export default Cart;
