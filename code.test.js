const async = require('async');
const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

let tests = [];
let cases = [];
let keys = [];

tests[0] = [0];
cases[0] = 1;
keys[0] = 0;

tests[1] = [1,2,3];
cases[1] = 1;
keys[1] = 1;

tests[2] = [1,2,1,3,1,4,1,5];
cases[2] = 4;
keys[2] = 1;

tests[3] = [5,5,5,5,5];
cases[3] = 5;
keys[3] = 5;

tests[4] = [-2,-1,0,1,2];
cases[4] = 1;
keys[4] = -2;


async function test() {
    const promises = tests.map((test, index) => countMatchesAsync(test, keys[index]));
    return Promise.all(promises);
}

test().then(results => {
        for (let i = 0; i < results.length; i++) {
        assert.equal(results[i], cases[i]);
        }
    }).catch(err => {
    console.error("Error:", err);
});