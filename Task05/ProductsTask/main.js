class UI{
    //display products on the table
    static displayProducts(){
        //initial product
        const products=[
            {name: 'Entity', price:3, factory: 'Ronesca',description:"Chocolate Bescuit"}
        ]
        //display all current products on the table
        for(let product of products){
            UI.displayRecord(product);
        }
    }

    //display the one product
    static displayRecord(product){
        const tbody = document.querySelector('tbody'),
            row= document.createElement('tr');
        
        row.innerHTML=`
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.factory}</td>
            <td>${product.description}</td>
            <td><button type="button" class="delete">Delete</button></td>
        `;
        tbody.appendChild(row);
    }

    //remove the inputs which are written
    static clearInputs(){
        document.querySelector('#name').value ='';
        document.querySelector('#price').value='';
        document.querySelector('#factory').value='';
        document.querySelector('#description').value='';
    }

    static showMessages(textMessage, messageClass){
        const form= document.querySelector('form'),
            body =  document.querySelector('body'),
            div = document.createElement('div');
        div.className= `${messageClass}`;
        //adding new div before form tag in the body
        body.insertBefore(div,form);
        //create text node as a child of the div
        div.appendChild(document.createTextNode(textMessage));
        //making the div diappear after 4sec
        setTimeout(() => {
            document.querySelector(`.${messageClass}`).remove();
        }, 4000);
    }

    static deleteRecord(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }
}

class Product{
    constructor (name, price, factory, description){
        this.name=name;
        this.price=price;
        this.factory= factory;
        this.description=description;
    }
}  

document.addEventListener('DOMContentLoaded',UI.displayProducts());
//show messages
document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const name= document.querySelector('#name').value,
        price= document.querySelector('#price').value,
        factory= document.querySelector('#factory').value,
        description= document.querySelector('#description').value;

    if(name ==''||price=='' || factory=='' || description==''){
        UI.showMessages('There are inputs required !','warning');
    }else{
        UI.showMessages('Product addition is done successfuly :)','success');
        const newProduct= new Product(name, price, factory, description);
        UI.displayRecord(newProduct);
        UI.clearInputs();
    }
});

document.querySelector('tbody').addEventListener('click',(e)=>{
    UI.deleteRecord(e.target);
});
