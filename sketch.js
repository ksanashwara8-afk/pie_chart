const r = require("raylib");
const g = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

function setup(world) {
    const w = {
        width: 700,
        height: 500,
        FPS: 60,
    };

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(w.width, w.height, "Pie Chart");
    r.SetTargetFPS(w.FPS);

    world.food = g.createPortion("food", 10000, 3000);
    world.travel = g.createPortion("travel", 10000, 3000);
    world.savings = g.createPortion("savings", 10000, 4000);

    return world;
}

function update(world) {
    g.moveAngle(world.food);
    g.moveAngle(world.travel);
    g.moveAngle(world.savings);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    g.drawPortion(0, world.food.startAngle, r.RED);
    g.drawPortion(
        world.food.startAngle,
        world.food.startAngle + world.travel.startAngle,
        r.YELLOW,
    );
    g.drawPortion(
        world.food.startAngle + world.travel.startAngle,
        world.food.startAngle +
            world.travel.startAngle +
            world.savings.startAngle,
        r.GREEN,
    );

    g.drawText(world.food, 500, 400, r.RED);
    g.drawText(world.travel, 500, 430, r.YELLOW);
    g.drawText(world.savings, 500, 460, r.GREEN);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};
