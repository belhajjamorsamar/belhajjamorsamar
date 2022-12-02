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



//create product  
let datapro =[] ;
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
   console.log  (newpro)
}
