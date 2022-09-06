function Mostrar(){
    const Local = document.getElementById('local');
    const Formulario = document.forms["formulario"];
    let factura = [];
    let text = "";
    for (let element of Formulario) {
      text += element.value;
    }
    function guardarlocal(a) {
      localStorage.setItem("facturas", JSON.stringify(a));
    }
    Local.onclick = (e) => {
      let datos = {
        Cuenta: text
      };
      factura.push(datos);
      guardarlocal(factura);
      Formulario.reset();
    };
    console.log(text);
}
