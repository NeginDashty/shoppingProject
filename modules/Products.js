class Products {
    constructor(parent, productsData) {
        this.parent = parent;
        this.productsData = productsData;
    }

    showProducts() {
        this.productsData.forEach(product => {
            this.createCard(product);
        });
    }

    createCard(data) {
        const cardElemnt = document.createElement('div');

        const img = document.createElement('img');
        img.src = data.image; // ✅ Corrected typo
        img.alt = data.alt;

        cardElemnt.appendChild(img); 
        const info=document.createElement('div');
        const productName=document.createElement('h3');
        const control=document.createElement('div');
        const price=document.createElement('h3');
        const button=document.createElement('button');

        productName.innerText=data.name;
        price.innerText=data.price;
        button.innerText="+";
        this.parent.appendChild(cardElemnt);
    }
    productImg(){
        
    }
}

export default Products;
