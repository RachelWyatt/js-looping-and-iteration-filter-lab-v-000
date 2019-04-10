// Code your solution in this file
function findMatching(drivers, string) {
  findByName = drivers.filter(function (name) { return name == string || name == string.toLowerCase(); });
  return findByName
}

function fuzzyMatch(drivers, string) {
  findByFirstInitial = drivers.filter(function (name) { return name[0] == string; });
  return findByFirstInitial
}

function matchName(drivers, string)