AFRAME.registerComponent("fish-creature", 
{
    init: function () {

        for (var i=1; i <= 20; i++) {
            var id = `fish${i}`;

            var posX = Math.floor(Math.random() * (0.10 - (-0.10) + 1)) + (-0.10)   
            var posY = Math.floor(Math.random() * (0.2 - (-0.10) + 1 )) + (-0.10)
            var posZ = 11
        
            var position = { x: posX, y: posY, z: posZ };
        
            //call the function
            this.spawnFish(id, position);
        }
    },

    spawnFish : (id, position) => {
        var terrainEl = document.querySelector("#terrain");
        var fishEl = document.createElement("a-entity");

        fishEl.setAttribute("id",id);
        fishEl.setAttribute("position",position);
        fishEl.setAttribute("scale",{x:1.5, y:1, z:2});

        fishEl.setAttribute(
            "gltf-model",
            "./assets/fish/scene.gltf"
        );

        fishEl.setAttribute("animation-mixer",{});
        terrainEl.appendChild(fishEl)
    }
} 
);