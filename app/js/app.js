'use strict';


// Declare app level module which depends on filters, and services
function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("post").style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("post2").style.marginLeft = "300px";
    document.getElementById("form").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("post").style.backgroundColor = "white";
    document.getElementById("post2").style.marginLeft = "auto";
    document.getElementById("form").style.marginLeft = "auto";
}


angular.module('musicApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])
