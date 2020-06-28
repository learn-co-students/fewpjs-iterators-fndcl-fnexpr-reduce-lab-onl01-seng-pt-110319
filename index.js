// const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
   
//   function ourReduce(couponLocations, couponCounter, 0) {
//       let accum = 0;
//       couponLocations.forEach(element => {
//           accum = couponCounter(accum, element);
//       });
//       return accum;
//   }
   
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
   
//   console.log(ourReduce(couponLocations, couponCounter, 0)); // prints 15
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total}, 0)