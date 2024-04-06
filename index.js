let shop=document.getElementById('shop')
console.log(shop);

let shopItemsData =[{
    id:"a",
    name:"Casual Shirt",
    price:45,
    desc:" lorem hbdcwio ecjbwie cejbwej ejbdqijw  dbe  qi  ",
    img:"images/img-1.jpg"
},
{
    id:"b",
    name:"Office Shirt",
    price:45,
    desc:" lorem hbdcwio ecjbwie cejbwej ejbdqijw  dbe  qi  ",
    img:"images/img-2.jpg"
},
{
    id:"c",
    name:"T-Shirt",
    price:40,
    desc:" lorem hbdcwio ecjbwie cejbwej ejbdqijw  dbe  qi  ",
    img:"images/img-3.jpg"
},
{
    id:"d",
    name:"Mens Suit",
    price:50,
    desc:" lorem hbdcwio ecjbwie cejbwej ejbdqijw  dbe  qi  ",
    img:"images/img-4.jpg"
}]

let basket=JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {    
return  (shop.innerHTML = shopItemsData.map((targetx)=>{
    let {id,name,price,desc,img} = targetx;     
    let search = basket.find((x)=>x.id===id) || []
    // !destructing is done here
    return ` 
    <div id=product-id-${id} class="item">
    <img width="220" src=${img} alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
                <i onclick="increment(${id})"        class="bi bi-plus"></i>
                <div id=${id} class = " quantity ">${search.item=== undefined? 0 : search.item}</div>
                <i onclick="decrement(${id})" class="bi bi-dash"></i>
            </div>
        </div>
    </div>
</div>`;
})
.join(""));
};


generateShop();

let increment=(id)=>{
    let selectedItem=id;
    let search = basket.find((x)=>x.id === selectedItem.id);

    if(search === undefined){
    basket.push({
        id: selectedItem.id,
        item:1,
    });
}
else{
    search.item +=1;
}
localStorage.setItem("data",JSON.stringify(basket)) ; ///setting the key....
    //console.log(basket);
    update(selectedItem.id);
};

let decrement=(id)=>{
    let selectedItem=id;
    let search = basket.find((x)=>x.id === selectedItem.id);
    
    if(search === undefined)return;
    else if(search.item === 0) return ;
else{
    search.item -=1;
}
localStorage.setItem("data",JSON.stringify(basket));
// console.log(update);
update(selectedItem.id);
 
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation()
};

let calculation = () => {
  let cartIcon =document.getElementById("cart-amount");
  cartIcon.innerHTML=(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
  
}
calculation()

