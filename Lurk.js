runAfterLoad(function() {
    // Confirm Sandboxels is ready
    if (typeof elements === "undefined" || typeof behaviors === "undefined") {
        console.error("Sandboxels API not available");
        return;
    }

    // Define Lurk
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

    // Add to condiment list
    if (!eLists.CONDIMENT) {
        eLists.CONDIMENT = [];
    }
    if (!eLists.CONDIMENT.includes("lurk")) {
        eLists.CONDIMENT.push("lurk");
    }

    console.log("✅ Lurk element fully loaded.");
});
