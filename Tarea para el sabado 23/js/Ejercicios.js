function votar(){
var nombre=prompt("Buen dia, Por favor ingrese su nombre.")
          var select = document.querySelector('select');
          var para = document.querySelector('article');
          function votar(){
            var region = select.value;
            switch (region) {
              case 'Norte':
                   para.textContent = nombre+' Usted ha emitido su voto en la zona: '+region;
                break;
              case 'Sur':
                    para.textContent = nombre+' Usted ha emitido su voto en la zona: '+region;
                break;
              case 'Centro':
                    para.textContent = nombre+' Usted ha emitido su voto en la zona: '+region;
                break;
              }
          }
    
