const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const initialValue = 0;
const totalBatteries = batteryBatches.reduce(function (previousValue, currentValue) { 
    return previousValue + currentValue}, initialValue
)
