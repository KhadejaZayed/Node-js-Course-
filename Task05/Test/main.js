class UI{

    static displayCourses(){
        const courses=[
            {name: 'BackEnd Node Js', price:2100, instructor: 'Hesham Mohammed',description:"Learning Basices of Node Js"}
        ]
    
        for( let course of courses){
            UI.displayRecord(course);
        }
    }

    static displayRecord(course){
        const tbody = document.querySelector('tbody'),
            row= document.createElement('tr');
        
        row.innerHTML=`
            <td>${course.name}</td>
            <td>${course.price}</td>
            <td>${course.instructor}</td>
            <td>${course.description}</td>
            <td><button type="button" class="delete">Delete</button></td>
        `;
    
        tbody.appendChild(row);
    }

    static clearInputs(){
        document.querySelector('#courseTitle').value ='';
        document.querySelector('#price').value='';
        document.querySelector('#instructor').value='';
        document.querySelector('#description').value='';
    }

    static showMessages(textMessage, messageClass){
        const form= document.querySelector('form'),
            body =  document.querySelector('body'),
            div = document.createElement('div');
        div.className= `${messageClass}`;
        body.insertBefore(div,form);
        div.appendChild(document.createTextNode(textMessage));
        setTimeout(() => {
            document.querySelector(`.${messageClass}`).remove();
        }, 2000);
    }

    static deleteRecord(element){
        if(element.classList.contains('delete')){
            element.parentElement.parentElement.remove();
        }
    }
}

class Course{
    
    constructor (name, price, instructor, description){
        this.name=name;
        this.price=price;
        this.instructor= instructor;
        this.description=description;
    }
}  

document.addEventListener('DOMContentLoaded',UI.displayCourses());

document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const name= document.querySelector('#courseTitle').value,
        price= document.querySelector('#price').value,
        instructor= document.querySelector('#instructor').value,
        description= document.querySelector('#description').value;

    
    if(name ==''||price=='' || instructor==''){
        UI.showMessages('There are inputs required !','warning');
    }else{
        UI.showMessages('Adding course is done successfuly :)','success');
        const newCourse = new Course(name, price, instructor, description);
        UI.displayRecord(newCourse);
        UI.clearInputs();
    }

});

document.querySelector('tbody').addEventListener('click',(e)=>{
    UI.deleteRecord(e.target);
});
