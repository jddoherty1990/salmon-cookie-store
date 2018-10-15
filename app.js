'use strict';

var hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
var firstAndPike = {
    minCustPerHr: [23],
    maxCustPerHr: [65],
    avgCookiesPerCust: [6.3],  
};

// customerPerHr = function() {}

function customerPerHr(minCustPerHr, maxCustPerHr) {
    return Math.random() * (maxCustPerHr - minCustPerHr) + minCustPerHr;
  }