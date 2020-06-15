const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// let totalBatteries = () => {
//     let t
//     return t = batteryBatches.reduce((total, amount) => total + amount, 0)
// }

// let totalBatteries = () => {
//     let totalBatteries
//     return totalBatteries = batteryBatches.reduce(function(total, amount) {
//         return total + amount
//     }) 
// }

// const totalBatteries = batteryBatches.reduce(function(total, batches){
//     return batches + total
//     }
//   )

const totalBatteries = batteryBatches.reduce(function(total, batches){
    return batches + total
})