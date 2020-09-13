const returnFirstTwoDrivers = function(arr) {
  let a =[];
    for (var i = 0; i < 2; i++) {
      a.push(arr[i]);
      // a[i] = arr[i];
    }
    return a;
}
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
}
returnLastTwoDrivers(drivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare){
  return function (ride) {
    return = fare * ride;
  }
}
