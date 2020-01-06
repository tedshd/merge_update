function mergeUpdate (arrOld, arrNew) {
  var tmpArray = [],
    matchArray = [];

  for (var a = 0; arrOld.length > a; a++) {
    for (var b = 0; arrNew.length > b; b++) {
      if (JSON.stringify(arrOld[a]) === JSON.stringify(arrNew[b])) {
        tmpArray.push(arrOld[a]);
        break;
      }
    }
  }

  matchArray = tmpArray.slice();
  loop();

  function loop () {
    if (!matchArray.length) {
      return;
    }
    for (var x = 0; arrNew.length > x; x++) {
      for (var y = 0; matchArray.length > y; y++) {
        if (JSON.stringify(arrNew[x]) === JSON.stringify(matchArray[y])) {
          arrNew.splice(x, 1);
          matchArray.splice(y, 1);
          return loop();
        }
      }
    }
  }

  return tmpArray.concat(arrNew);
}
