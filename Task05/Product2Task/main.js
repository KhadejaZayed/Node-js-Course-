class Product{
    static counter=1;
    static totalPrice=3;
    
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
        Product.counter+=1;
        Product.totalPrice +=this.price;
        UI.displayRecord({id:this.id,name: this.name,price: this.price});
    }

    static getTotalPriceOfProducts(){
        console.log(Product.totalPrice);
    }    
}

class UI{
    static totalPrice=3;    
    static displayProducts(){
        const products=[{id:1,name:'Chocolate',price:3}];
        
        for(let product of products){
            UI.displayRecord(product);
        }
    }

    static displayRecord(product){    
        const tbody =document.querySelector('tbody'),
            record= document.createElement('tr');
        
        
        record.innerHTML=`
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        `;

        tbody.appendChild(record);
    }
}
document.addEventListener('DOMContentLoaded',UI.displayProducts());

const p2= new Product(2,'Biscuit',5);
const p3= new Product(3,'Chips',10);
const p4= new Product(4,'Water',5);
const p5= new Product(5,'Cola',10);

Product.getTotalPriceOfProducts();

