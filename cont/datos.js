const Button = document.getElementById('Ingresar');
let local = JSON.parse(localStorage.getItem('datos'));

Button.addEventListener('click',()=>{
  if (local[0].User == local[0].User && local[0].Password == 1234) {
    location = "/html/Plan.html";
  }else{
    alert('no es el usuario')
  }
})
console.log(local[0].Password);