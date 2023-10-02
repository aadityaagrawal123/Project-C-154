AFRAME.registerComponent("coins-treasure", 
{
    init: function () {

      for (var i = 1; i <= 20; i++) {
          //id
          var id = `coin${i}`;

          //position variables     
          var posX = Math.floor(Math.random() * (0.10 - (-0.10) + 1)) + (-0.10)   
          var posY = Math.floor(Math.random() * (0.2 - (-0.10) + 1 )) + (-0.10)
          var posZ = 11
    
          var position = { x: posX, y: posY, z: posZ };
    
          //call the function
          this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var coinEl = document.createElement("a-entity");

      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      coinEl.setAttribute("scale",{x:2, y:2, z:1});

      coinEl.setAttribute(
          "gltf-model",
          "./assets/coin/scene.gltf"
      );

      coinEl.setAttribute("animation", {
        property : "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000
      });
  
      terrainEl.appendChild(coinEl);
    }
  });
  
  