let mdiv=document.getElementById('main');

let pdname=document.getElementById('pname');//product 

const prices=document.getElementById('pcost');//price

getbtn=document.getElementById('additem'); //add button



const newdiv=document.createElement('div'); 

getmaindiv=document.getElementById('main');

getmaindiv.append(newdiv);


 let list=document.createElement('ul');

 newdiv.appendChild(list);

 //array for products
 let products=new Array();

 //array for costs

 let costs=new Array();



getbtn.addEventListener('click',(e)=>{
     e.preventDefault();

     //adding  products to array
     products.push(pdname.value)
     console.log("the products Array  ",products)

    //adding costs to array

    costs.push(Number((prices.value)));
    console.log('the prices Array ',costs);

     newdiv.setAttribute('id','itemdetails');
     let things=document.createElement('li');
     things.innerHTML=pdname.value+'&nbsp;&nbsp;&nbsp;&nbsp;'+Number((prices.value))+'rs';

     list.appendChild(things);

   // console.log(pdname.value);
})


//show amount

let showbill=document.getElementById('billslip');

//console.log(showbill);

let newh2=document.createElement('h2')

showbill.append(newh2)

//total amount

let menu=document.getElementById('subtotal');

let billamount=0;

menu.addEventListener('click',(e)=>{

    e.preventDefault();
    for(let i=0;i<costs.length;i++){
        billamount+=costs[i]
    }
    newh2.innerHTML='the Total Amount is '+'<mark>'+billamount+' rupees'+'</mark>'

    function stopbtn(){
        menu.disabled=true;
        getbtn.disabled=true;
    }

    stopbtn();
    console.log('the total bill '+billamount);

})


let lastbtn=document.getElementById('clearall');
lastbtn.addEventListener('click',(e)=>{
   // e.preventDefault();
mdiv.removeChild(itemdetails)
mdiv.removeChild(billslip)
})
//console.log(menu);
//console.log(billamount);
