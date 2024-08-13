let cores = document.getElementById('res')
        
function color1(){
 const colors = ['red', 'blue', 'rgb(13, 247, 13)', 'rgb(237, 123, 142)', 'white', 'rgb(32, 31, 31)'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByTagName("body")[0].style.background = randomColor;
} 

function color2(){

 
}

function red(id){
 if(id == 'red' ){
     document.getElementsByTagName("body")[0].style.background = 'red'
 }

}

function blue(id){
 if(id == 'blue' ){
     document.getElementsByTagName("body")[0].style.background = 'blue'
 }
}

function green(id){
 if(id == 'green' ){
     document.getElementsByTagName("body")[0].style.background = 'rgb(13, 247, 13)'
 }
}

function pink(id){
 if(id == 'pink' ){
     document.getElementsByTagName("body")[0].style.background = 'rgb(237, 123, 142)'
 }
}

 function white(id){
     if(id == 'white'){
         document.getElementsByTagName("body")[0].style.background = 'white'
         document.getElementsByTagName("body")[0].style.color = 'black'
         
     }
 }

 function black(id){
     if(id == 'black'){
         document.getElementsByTagName("body")[0].style.background = 'rgb(32, 31, 31)'
         
     }
 }

 function next(id){
     const colors = ['red', 'blue', 'rgb(13, 247, 13)', 'rgb(237, 123, 142)', 'white', 'rgb(32, 31, 31)'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByTagName("body")[0].style.background = randomColor;
 }

 function back(){
     const colors = ['red', 'blue', 'rgb(13, 247, 13)', 'rgb(237, 123, 142)', 'white', 'rgb(32, 31, 31)'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementsByTagName("body")[0].style.background = randomColor;
 }