function Mostrar(){
    const Local = document.getElementById('local');
    const Formulario = document.forms["formulario"];
    let factura = [];
    let text = "";
    let user=Formulario['user'];
    let email = Formulario['email'];
    let password = Formulario['password'];
    let passwordre = Formulario['repeatPassword'];
    console.log(user.value);
    // for (let element of Formulario) {
    //   text += element.value;
    // }
    function guardarlocal(a) {
      localStorage.setItem("datos", JSON.stringify(a));
    }
    Local.onclick = (e) => {
      let datos = {
        User:user.value,
        Email:email.value,
        Password:password.value,
        Repeat:passwordre.value
      };
      factura.push(datos);
      guardarlocal(factura);
      Formulario.reset();
    };
}
