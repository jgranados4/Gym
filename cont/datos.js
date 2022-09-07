const Button = document.getElementById('Ingresar');
let local = JSON.parse(localStorage.getItem('datos'));

Button.addEventListener('click',()=>{
  if(local[0].Password==1234){
    location='/html/Plan.html'
  }
})
console.log(local[0].Password);