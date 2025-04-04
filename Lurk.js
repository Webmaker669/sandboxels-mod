// Adding Lurk element:
elements.lurk = {
    color: "#f4c542", // Yellow color for Lurk
    behavior: behaviors.LIQUID, // Lurk behaves like a liquid
    category: "liquids", // It will show under the "liquids" category
    viscosity: 100000, // High viscosity
    state: "liquid", // It’s a liquid state
    density: 1420, // Density of the element
    reactions: {
        "bleach": { // Reaction with bleach
            "elem1": "explosion", // Lurk turns into an explosion when it comes in contact with bleach
            "elem2": null, // No second element in this reaction
            "chance": 1 // 100% chance of the reaction
        }
    }
};

// Create a new tool to interact with Lurk:
elements.lurk_exploder = {
    color: "#ff0000", // Red color for the tool
    tool: function(pixel) {
        if (pixel.element == "lurk") { // If the pixel is Lurk
            pixel.element = "explosion"; // It turns into an explosion
        }
    },
    category: "tools", // Categorized under tools
};

// Add Lurk to eLists.CONDIMENT (or any list you'd like)
if (!eLists.CONDIMENT) { // Ensure the list exists
    eLists.CONDIMENT = [];
}
if (!eLists.CONDIMENT.includes("lurk")) { // Check if Lurk is already in the list
    eLists.CONDIMENT.push("lurk"); // Add Lurk to the list
}

// Log when the mod is fully loaded:
runAfterLoad(function() {
    console.log("Lurk mod loaded successfully ✅");
});
