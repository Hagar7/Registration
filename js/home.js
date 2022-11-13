if(!localStorage.getItem("isLogged")){
    location.href = "index.html"
}

let perv = document.getElementById('perv');
let next = document.getElementById('next');
var newImgArray = document.getElementById('myImg');
var newImgArray = document.getElementById('myImg');
let logOut = document.getElementById('logOut');
var currentIndex=0;
var newrecipes;
//slider
let imgArray = [
    "images/food-slide-1.jpg",
    "images/food-slide-2.jpg",
    "images/food-slide-3.jpg"
];

function slider(){
    var newImgArray = document.getElementById('myImg');
    newImgArray.setAttribute('src',imgArray[currentIndex]);
    
    setInterval(function(){
        if(currentIndex == imgArray.length - 1) {
            currentIndex=0;
        } else{
            currentIndex++;
        }
        newImgArray.setAttribute('src',imgArray[currentIndex]);
    },4500)
}
slider()

perv.addEventListener('click',prevSlider);
next.addEventListener('click',nextSlider)


//prev slider
function prevSlider(){
    currentIndex --;
    if(currentIndex < 0) { 
        currentIndex = imgArray.length -1
    }
    newImgArray.setAttribute('src',imgArray[currentIndex]);
}

function nextSlider(){
    currentIndex++;
 if(currentIndex == imgArray.length) { 
    currentIndex=0
 }
 newImgArray.setAttribute('src',imgArray[currentIndex]);
};


links = document.querySelectorAll('.nav-link');
for(var i=0;i <links.length;i++){
    links[i].addEventListener('click',function(e){
        checkRequsest(e.target.text)
    })
}

async function checkRequsest(meal){
    var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`);
    recipes = await response.json();
     newrecipes = recipes.recipes;
    displayPost()
}


function displayPost() {
    var cols ="";
    for(var i=0;i<newrecipes.length;i++){
        cols+= `
        <div class="col-md-4">
        <div class="post-item">
        <img src="${newrecipes[i].image_url}" alt="" class="w-100 postImg">
        <h6 class="content-title">${newrecipes[i].title}</h6>
        <h6 class="post-span">${newrecipes[i].publisher}</h6>
        </div>
    </div>
        `
    }
    document.getElementById('rescipeDisplay').innerHTML = cols
}

async function getRecpi(){
await checkRequsest('pizza');
  displayPost()
}
getRecpi()


//logout 



logOut.addEventListener('click',function(){
    localStorage.removeItem("isLogged")
    location.href = "index.html"
})

