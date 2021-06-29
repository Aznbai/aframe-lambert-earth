AFRAME.registerComponent("lambert-earth", {
    schema: {
        opacity: { type: "number", default: 1 },
        reflectivity: { type: "number", default: 1 },
        transparent: { type: 'boolean', default: true },
        emissiveIntensity: { type: "number", default: 20 },
        emissive: { type: "color", default: "#fff" },
        // emissive: { type: "color", default: "#fff" },
        // emissiveIntensity: { type: "number", default: 0 },
        // metalness: { type: "number", default: 0.5 },
        // roughness: { type: "number", default: 0.5 },
        // envMap: { type: 'map', default: '' },
        // alphaTest: { type: 'number', default: 0.5 },
        // fog: { type: 'boolean', default: true },
        // depthTest: { type: 'boolean', default: true },
        // transparent: { type: 'boolean', default: false },
        // wireframe: { type: 'boolean', default: false },
        // blending: { type: "string", default: 'normal', oneOf: ['none', 'normal', 'additive', 'subtractive', 'multiply'] },
        // shader: { type: 'string', default: 'standard', oneOf: ['standard', 'flat'] },
        // side: { type: 'string', default: 'front', oneOf: ['front', 'back', 'double'] },
        // flipTextureY: { type: 'boolean', default: false },
        // flipTextureX: { type: 'boolean', default: false }
    },
    init: function() {
        this.el.addEventListener("loaded", e => {
            const envMapSpace = new THREE.TextureLoader().load(
                "img/space_small.jpg"
            );
            const srcMapSpace = new THREE.TextureLoader().load(
                "img/earth1_small.jpg"
            );
            envMapSpace.mapping = THREE.EquirectangularReflectionMapping;
        var mesh = this.el.getObject3D("mesh");
        

            this.el.components.material.setMaterial(
                new THREE.MeshLambertMaterial({
                    // map: srcMapSpace,
                    envMap: envMapSpace,
                    emissiveMap: envMapSpace,
                    emissive: this.data.emissive,
                    emissiveIntensity: this.data.emissiveIntensity,
                    reflectivity: this.data.reflectivity,
                    transparent: this.data.transparent,
                    opacity: this.data.opacity
                })
            );
        });
    }
});
