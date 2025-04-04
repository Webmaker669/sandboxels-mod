// Lurk — the explosive chemical condiment
elements.lurk = {
    color: "#f4c542",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 1420,
    reactions: {
        "bleach": {
            "elem1": "explosion", // Lurk goes boom
            "elem2": null,
            "chance": 1
        }
    }
};

// Add Lurk to the CONDIMENT eList if not already added
if (!eLists.CONDIMENT) {
    eLists.CONDIMENT = [];
}
if (!eLists.CONDIMENT.includes("lurk")) {
    eLists.CONDIMENT.push("lurk");
}
