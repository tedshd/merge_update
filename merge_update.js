/**
 *
 * @authors Ted Shiu (tedshd@gmail.com)
 * @date    2020-01-12 22:39:02
 */

function mergeUpdate(arrOld, arrNew) {
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

  for (var x = arrNew.length - 1; x >= 0; x--) {
    for (var y = matchArray.length - 1; y >= 0; y--) {
      if (JSON.stringify(arrNew[x]) === JSON.stringify(matchArray[y])) {
          arrNew.splice(x, 1);
          matchArray.splice(y, 1);
          break;
      }
    }
  }

  return tmpArray.concat(arrNew);
}
