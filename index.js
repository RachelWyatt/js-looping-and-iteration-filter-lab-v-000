// Code your solution in this file
function findMatching(drivers, string) {
  let findByName = drivers.filter(function (name) { return name == string || name == string.toLowerCase(); });
  return findByName
}

function fuzzyMatch(drivers, string) {
  let findByFirstInitial = drivers.filter(name => name.startsWith(string));
  return findByFirstInitial
}

function matchName(drivers, string) {
  let nameMatch = drivers.filter(function (name) { return name == string; });
  return nameMatch
}