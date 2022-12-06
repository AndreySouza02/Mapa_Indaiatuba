var map = L.map('mapInda').setView([-23.092128, -47.216663], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-23.118391, -47.230418]).addTo(map)
    .bindPopup('Ário Barnabé: <a href="./ario_barnabe.html" class="speciallink">Clique aqui</a>');

L.marker([-23.114746, -47.221695]).addTo(map)
    .bindPopup('Francisco de Paula Leite: <a href="./francisco_paula.html" class="speciallink">Clique aqui</a>');  
    
L.marker([-23.112136, -47.223496]).addTo(map)
    .bindPopup('Laura Fahl Côrrea: <a href="./laura_fahl.html" class="speciallink">Clique aqui</a>');    
    
L.marker([-23.090955, -47.217865]).addTo(map)
    .bindPopup('Dom José de Camargo Barros: <a href="jose_camargo.html" class="speciallink">Clique aqui</a>');  
    
L.marker([-23.091034, -47.219742]).addTo(map)
    .bindPopup('Casarão do Pau Preto: <a href="./casarao.html" class="speciallink">Clique aqui</a>');      

    function onMapClick(e) {
         alert("You clicked the map at " + e.latlng);
      }
    
      map.on('click', onMapClick);

      //-23.091034, -47.219742