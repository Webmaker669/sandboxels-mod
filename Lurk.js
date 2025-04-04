runAfterLoad(function() {
    // Check if 'elements' is available
    if (typeof elements === "undefined") {
        console.error("Elements API is not available.");
        return;
    }

    // Adding the Lurk element
    elements.lurk = {
        color: "#f4c542", // Color of Lurk
        behavior: behaviors.LIQUID, // Lurk behaves as a liquid
        category: "liquids", // It shows up under the liquids category
        viscosity: 100000, // It’s a very viscous liquid
        state: "liquid", // Liquid state
        density: 1420, // The density of Lurk
    };

    // Log to confirm Lurk is added
    console.log("Lurk element has been added!");

    // Check if the element has been registered correctly
    if (elements.lurk) {
        console.log("Lurk element registered successfully.");
    } else {
        console.error("Lurk element failed to register.");
    }
});
