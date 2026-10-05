const r = require("raylib");

function calculatePercentage(total, amount) {
    return (amount / total) * 100;
}

function createPortion(name, total, amount) {
    return {
        name: name,
        total: total,
        amount: amount,
        percentage: calculatePercentage(total, amount),
        startAngle: 0,
    };
}

function drawPortion(startAngle, endAngle, color) {
    r.DrawCircleSector(
        { x: 300, y: 200 },
        120,
        startAngle,
        endAngle,
        20,
        color,
    );
}

function drawText(expense, x, y, color) {
    r.DrawText(`${expense.name} : ${expense.percentage}%`, x, y, 18, color);
}

function moveAngle(expense) {
    if (expense.startAngle <= expense.percentage * 3.6) {
        expense.startAngle += 1;
    }
}

module.exports = {
    createPortion,
    drawPortion,
    moveAngle,
    drawText,
};
