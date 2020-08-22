# merge_update
new array merge old array keeping duplicate old value order and append new value

## Intro

for example

```JavaScript
var arrOld = [2, 5, 3, 8, 9, 11, 12];
var arrNew = [8, 1, 3, 35, 5, 7];

// output
// [5, 3, 8, 1, 35, 7]

var arrOld = [
    {id: 2},
    {id: 5},
    {id: 3},
    {id: 8},
    {id: 9},
    {id: 11},
    {id: 12}
];

var arrNew = [
    {id: 8},
    {id: 1},
    {id: 3},
    {id: 35},
    {id: 5},
    {id: 7}
];

// output
/*
[
    {id: 5},
    {id: 3},
    {id: 8},
    {id: 1},
    {id: 35},
    {id: 7}
]
*/

var arrOld = [
    {id: 2},
    {id: 5},
    {id: '3'},
    {id: 'hihi'},
    {id: 9},
    {id: 11},
    {id: 12}
];

var arrNew = [
    {id: 'hihi'},
    {id: 1},
    {id: '3'},
    {id: 35},
    {id: 5},
    {id: 7}
];

// output
/*
[
    {id: 5},
    {id: "3"},
    {id: "hihi"},
    {id: 1},
    {id: 35},
    {id: 7}
]
*/
```

## Usage

```JavaScript
var arrOld = [2, 5, 3, 8, 9, 11, 12];
var arrNew = [8, 1, 3, 35, 5, 7];

mergeUpdate(arrOld, arrNew);
// [5, 3, 8, 1, 35, 7]
```
