// fetch("https://fakestoreapi.com/products")
// fetch('https://dummyjson.com/products')
fetch("https://fakestoreapi.com/products")
.then((data) => data.json())
.then((result) => {
    renderUI(result)
})
.catch((Error)=>{
    console.log("error", Error);
})

const renderUI = (item) => {
    const parent = document.getElementById("parent");
    for ( var product of item){
        // console.log("id", id);
        // console.log(product);
        parent.innerHTML += ` <div class="col-md-3"> 
        <div class="card mt-5" style="width: 100%">
<img src="${product.image}" style="width: 90%; height: 250px; "class="card-img-top" alt="...">
<div class="card-body" >
 <h5 class="card-title" style="font-size: 20px ; font-family: "Poppins", sans-serif;">${product.title.slice(0, 20)}</h5>
 <p class="card-text" style="font-size: 14px ; font-family: "Poppins", sans-serif;" >${product.description.slice(0,90)}</p>
 <a href="#" class="btn btn-dark">Shop Now</a>
</div>
</div>
</div>`
    }        
}


// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);