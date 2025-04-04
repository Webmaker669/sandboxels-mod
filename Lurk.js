runAfterLoad(function() {
    // Check if the 'elements' API is available
    if (typeof elements === "undefined") {
        console.error("Elements API is not available.");
        return;
    }

    // Define the Lurk element correctly
    elements.lurk = {
        color: "#f4c542", // Lurk's color (yellow-ish)
        behavior: behaviors.LIQUID, // It behaves like a liquid
        category: "liquids", // It will be under "liquids" in the game
        viscosity: 100000, // A very thick liquid
        state: "liquid", // Lurk is a liquid
        density: 1420, // Lurk's density
    };

    // Log the addition of the Lurk element
    console.log("Lurk element added!");
    
    // Confirm the element registration
    if (elements.lurk) {
        console.log("✅ Lurk element registered successfully.");
    } else {
        console.error("❌ Lurk element failed to register.");
    }

    // Test the element by manually creating a pixel of Lurk
    createPixel("lurk", 50, 50);
});
