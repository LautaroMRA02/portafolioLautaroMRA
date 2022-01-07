const Header = {
	render: () => {
            return`
			<div class="name">
                <a href="/#/">Home</a>
            </div>
            <div>
                <a href="/#/example">example</a>
           </div>
           <div>
            <div id="reloj">
                00 : 00 : 00
            </div>
           </div>
           `
	},
	after_render: () => {
        function actual() {
         var fecha=new Date(); //Actualizar fecha.
          var hora=fecha.getHours(); //hora actual
          var minuto=fecha.getMinutes(); //minuto actual
          var segundo=fecha.getSeconds(); //segundo actual
         if (hora<10) { //dos cifras para la hora
             hora= 0 +hora;
             }
         if (minuto<10) { //dos cifras para el minuto
             minuto= 0 +minuto;
             }
         if (segundo<10) { //dos cifras para el segundo
             segundo="0"+segundo;
             }
         //devolver los datos:
         const mireloj = hora+" : "+minuto+" : "+segundo;
         return mireloj;
         }
         function actualizar() { //función del temporizador
            const mihora=actual(); //recoger hora actual
            const mireloj=document.getElementById("reloj"); //buscar elemento reloj
            mireloj.innerHTML=mihora; //incluir hora en elemento
            }
        setInterval(actualizar,1000); //iniciar temporizador

    },
};
export default Header;