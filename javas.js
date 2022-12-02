let title = document.getElementById('title')
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads =  document.getElementById('ads');
let discount=document.getElementById('discount');
let total  = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
console.log(title);

//get total
function getTotal()
{

if(price.value != '' ){
    let result = (+price.value + +taxes.value + +ads.value)
    - +discount.value;
    total.innerHTML= result;
    total.style.background='#040';
}
 else{

    total.innerHTML = '';
    total.style.background='#a00d02';

 }  

}


// create + localstorage
let  ;
if(localStorage.product!= null){
    datapro = JSON.parse(localStorage.product)
}
else{
    datapro= [];
}

submit.onclick = function(){
     let newpro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
     }
     datapro.push(newpro);//ajouter les elements a la fin d'un tableau
     localStorage.setItem('product',  JSON.stringify(datapro) );
     //setItem ('nom du element',JSON.stringify(NOM-DE TABLEAU)):fonction pour ajouter une element dans localstorage
     console.log(datapro)
    cleardata();
    showdata();
}
//clear input 
function cleardata(){
    title.value= '';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';

}

//read 
function showdata(){

    let table= '';
    for (let i = 0 ; i< datapro.length;i ++) {
        table += ` <tr>
        <td>${i}</td>
        <td>${datapro[i].title}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].taxes}</td>
        <td>${datapro[i].ads}</td>
        <td>${datapro[i].discount}</td>
        <td>${datapro[i].total}</td>
        <td>${datapro[i].category}</td>
        <td><button class="update">update</button>
        <td><button class="delete">delete</button>
        </td>
        </tr>
 `
      
    }
    document.getElementById('tbody').innerHTML = table;

}

showdata()
