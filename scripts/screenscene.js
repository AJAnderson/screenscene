console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function () {
    console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function () {
    console.log("This code runs once core initialization is ready and game data is available.");
});

Hooks.on("canvasReady", function () {
    console.log("Hi I'm doing something");
    screenY = screen.availHeight
    screenX = screen.availWidth
    canvasWidth = canvas.dimensions.sceneWidth
    canvasHeight = canvas.dimensions.sceneHeight
    padX = canvas.dimensions.paddingX
    padY = canvas.dimensions.paddingY

    // Compute the centre point
    centreX = padX + canvasWidth / 2
    centreY = padY + canvasHeight / 2

    // Compute the scale
    scale = (screenX / canvasWidth)
    console.log("Computed Scale:" + scale + ", Centre X:" + centreX + ", Centre Y:" + centreY)


    x = centreX
    y = centreY

    canvas.animatePan({ x: x, y: y, scale: scale })
});