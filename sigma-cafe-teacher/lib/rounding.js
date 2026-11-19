/*! rounding.js v2.3.1 | third-party library, do not edit */
var Rounding=function(){function r(n,s){var v=Math.round(n*s)/s;return{value:v,adjustment:Math.round((v-n)*100)/100,step:1/s}}return{version:"2.3.1",toNearest5Sen:function(n){return r(n,20)},toNearest10Sen:function(n){return r(n,10)},toNearestRinggit:function(n){return r(n,1)}}}();
