const pics = [ 
    '../images/kirby.jpg', 
    '../images/serious.jpg', 
    '../images/sunglasses.jpg', 
    '../images/cocomelon.jpg', 
]; 

function random_pic() {
  var a = Math.floor(Math.random() * pics.length); 
  var img = pics[a]; 
  document.getElementById("random_pic").src = img;
}

setInterval(random_pic, 2000); 