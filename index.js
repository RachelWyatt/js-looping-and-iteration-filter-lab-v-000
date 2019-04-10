// Code your solution in this file
function findMatching(drivers, string) {
  findByName = drivers.filter(function (name) { return name == string.toLowerCase; });
  return findByName
}