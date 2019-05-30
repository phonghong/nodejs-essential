const moment = require ('moment');

let newDate = new Date('2019-04-19T01:23:44.696Z');

console.log(moment(newDate).format('MM/DD/YYYY'));

console.log(moment(newDate).fromNow());
