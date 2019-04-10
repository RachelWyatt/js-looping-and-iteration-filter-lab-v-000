// Code your solution in this file
function findMatching(drivers, string) {
  drivers.filter(function (name) { return name == string; });
}