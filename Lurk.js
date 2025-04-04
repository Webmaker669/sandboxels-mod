runAfterLoad(function() {
    // Check if elements & behaviors are available
    if (typeof elements === "undefined" || typeof behaviors === "undefined") {
        console.error("Sandboxels API is not available yet.");
        return;
    }

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

    // Add Lurk to eLists.CONDIMENT if it doesn’t exist
    if (!eLists.CONDIMENT) {
        eLists.CONDIMENT = [];
    }
    if (!eLists.CONDIMENT.includes("lurk")) {
        eLists.CONDIMENT.push("lurk");
    }

    // Check if Lurk is defined and properly loaded
    if (elements.lurk) {
        console.log("✅ Lurk element loaded successfully.");
    } else {
        console.error("❌ Lurk element failed to load.");
    }
});
