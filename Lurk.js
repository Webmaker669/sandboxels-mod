// Lurk.js - Explodes on bleach contact
runAfterLoad(function() {
    // Define Lurk element
    elements.lurk = {
        color: "#f4c542",
        behavior: behaviors.LIQUID,
        category: "liquids",
        viscosity: 100000,
        state: "liquid",
        density: 1420,
        reactions: {
            "bleach": {
                "elem1": "explosion",
                "elem2": null,
                "chance": 1
            }
        }
    };

    // Add Lurk to eLists.CONDIMENT
    if (!eLists.CONDIMENT) {
        eLists.CONDIMENT = [];
    }
    if (!eLists.CONDIMENT.includes("lurk")) {
        eLists.CONDIMENT.push("lurk");
    }

    console.log("Lurk mod loaded ✅");
});
