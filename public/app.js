var addCat = function(name, favourite_food, image){
    
    // var catList = document.createElement('ul');
    // catList.classList.add('cat');
    // var catName = document.createElement('li');
    // catName.innerText = 'Name: ' + name;
    // var fav_food = document.createElement('li');
    // fav_food.innerText = 'Favourite food: ' + favourite_food;
    // var imageList = document.createElement('li');
    // var catImage = document.createElement('img');
    // catImage.width = 500;
    // catImage.src = image;

    // imageList.appendChild(catImage);
    // catList.appendChild(catName);
    // catList.appendChild(fav_food);
    // catList.appendChild(catImage);
    // console.log(catList);
    // var catTag = document.getElementById('cats');
    // console.log(catTag);
    // catTag.appendChild(catList);


    addToPage(createCatList(), addCatName(name),addFavFood(favourite_food), createImageList(), addImage(image));
}

window.onload = function(){
    var cattery = catData();
    console.log(cattery);
    for (let item of cattery){
        
        addCat(item.name, item.fav_food, item.image );
    };
    
   }

var createCatList = function (){
    var catList = document.createElement('ul');
    catList.classList.add('cat');
    return catList;
}

var addCatName = function(name){
    var catName = document.createElement('li');
    catName.innerText = 'Name: ' + name;
    return catName;
}

var addFavFood = function(favourite_food){
    var fav_food = document.createElement('li');
    fav_food.innerText = 'Favourite food: ' + favourite_food;
    return fav_food;
}

var createImageList = function(){
    var imageList = document.createElement('li');
    return imageList;
}

var addImage = function(image){
    
    var catImage = document.createElement('img');
    catImage.width = 500;
    catImage.src = image;
    return catImage;
}

var addToPage = function(catList, catName, fav_food, imageList, catImage){
    imageList.appendChild(catImage);
    catList.appendChild(catName);
    catList.appendChild(fav_food);
    catList.appendChild(catImage);
    var catTag = document.getElementById('cats');
    catTag.appendChild(catList);
}

var catData = function(name, favFood, image){
    var array = [];
    let Cat = function(name, favFood, image){
        this.name = name;
        this.fav_food = favFood;
        this.image = image;
    }
    array.push(cat1 = new Cat("Boba", "Sock fluff", 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'));
    array.push(cat2 = new Cat("Barnaby", "Tuna", 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'));
    array.push(cat3 = new Cat("Max", "Whiskas Temptations", 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'));
    array.push(cat4 = new Cat("Garfield", "Lasagne", 'https://vignette.wikia.nocookie.net/villainstournament/images/f/f2/Garfield.jpg/revision/latest?cb=20141219205245'))
    return array;
}


