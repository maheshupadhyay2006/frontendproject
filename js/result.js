let obj=[
{id:1,pname:"Smart Mobile",category:"mobile",subcat:"nokia",price:54000,pimage:"../image/m1.jpg"},
{id:2,pname:"Smart Mobile",category:"mobile",subcat:"lg",price:52000,pimage:"../image/m2.jpg"},
{id:3,pname:"Smart Mobile",category:"mobile",subcat:"samsung",price:44000,pimage:"../image/m3.jpg"},
{id:4,pname:"Smart Mobile",category:"mobile",subcat:"nokia",price:34000,pimage:"../image/m4.jpg"},
{id:5,pname:"Shirt",category:"shirt",subcat:"man",price:2700,pimage:"../image/s1.jpg"},
{id:6,pname:"Shirt",category:"shirt",subcat:"kids",price:1700,pimage:"../image/s2.jpg"},
{id:7,pname:"Shirt",category:"shirt",subcat:"woman",price:5700,pimage:"../image/s3.jpg"},
{id:8,pname:"Shirt",category:"shirt",subcat:"man",price:4700,pimage:"../image/s4.jpg"},
{id:9,pname:"Smart Watch",category:"watch",subcat:"manwatch",price:8700,pimage:"../image/w1.jpg"},
]

function filterdata(cat,scat){
   if(cat,scat){
    var fdata=obj.filter((pro)=>{
   return cat===pro.category && scat===pro.subcat
    })
   }
   else if(cat){
    var fdata=obj.filter((pro)=>{
  return cat===pro.category
    })
   }
   else{
    let newarr=obj.map((item)=>{
        return(
          `
          <div class="product">
          <img src='${item.pimage}'>
          <div class="content">
      <h2>${item.pname} </h2>
      <p>price=Rs.${item.price}</p>
      <p>category=${item.category}</p>
      <p>sub category=${item.subcat}</p>
      <button>Add to cart</button>
          </div>
          </div>
          `
        )
      })
      document.getElementById("myrow").innerHTML=newarr.join('');
   }
   let newarr=fdata.map((item)=>{
    return(
      `
      <div class="product">
      <img src='${item.pimage}'>
      <div class="content">
  <h2>${item.pname} </h2>
  <p>price=Rs.${item.price}</p>
  <p>category=${item.category}</p>
  <p>sub category=${item.subcat}</p>
  <button>Add to cart</button>
      </div>
      </div>
      `
    )
  })
  document.getElementById("myrow").innerHTML=newarr.join('');




}

filterdata()


















































/*
let newarr=obj.map((item)=>{
  return(
    `
    <div class="product">
    <img src='${item.pimage}'>
    <div class="content">
<h2>${item.pname} </h2>
<p>price=Rs.${item.price}</p>
<p>category=${item.category}</p>
<p>sub category=${item.subcat}</p>
<button>Add to cart</button>
    </div>
    </div>
    `
  )
})
document.getElementById("myrow").innerHTML=newarr.join('');


function catfilter(cat){
     let fdata=obj.filter((pro)=>{
   return cat===pro.category
     })

     let newarr=fdata.map((item)=>{
        return(
          `
          <div class="product">
          <img src='${item.pimage}'>
          <div class="content">
      <h2>${item.pname} </h2>
      <p>price=Rs.${item.price}</p>
      <p>category=${item.category}</p>
      <p>sub category=${item.subcat}</p>
      <button>Add to cart</button>
          </div>
          </div>
          `
        )
      })
      document.getElementById("myrow").innerHTML=newarr.join('');
   
}

function subcatfilter(cat,scat){
  var fdata=obj.filter((pro)=>{
  return cat===pro.category && scat===pro.subcat
  })
  let newarr=fdata.map((item)=>{
    return(
      `
      <div class="product">
      <img src='${item.pimage}'>
      <div class="content">
  <h2>${item.pname} </h2>
  <p>price=Rs.${item.price}</p>
  <p>category=${item.category}</p>
  <p>sub category=${item.subcat}</p>
  <button>Add to cart</button>
      </div>
      </div>
      `
    )
  })
  document.getElementById("myrow").innerHTML=newarr.join('');
  
}
  */ 