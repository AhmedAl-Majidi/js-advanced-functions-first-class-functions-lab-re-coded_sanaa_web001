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
  let b =[];
    for (var i = arr.length-1 ; i > arr.length-3 ; i--) {
      b.shift(arr[i]);
      // a[i] = arr[i];
    }
    return b;
}
returnLastTwoDrivers(drivers)
