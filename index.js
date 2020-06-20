const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;
// Code your solution here
batteryBatches.reduce(function(total, element) {
    totalBatteries = total + element;
    return totalBatteries;
}, 0)