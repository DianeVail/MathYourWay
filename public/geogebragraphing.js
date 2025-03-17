"use strict"

//This code runs the Geogebra Graphing Tool from Geogebra API
var params = {
    "appName": "graphing", 
    "width": 800, 
    "height": 600, 
    "showToolBar": true, 
    "showAlgebraInput": true, 
    "showMenuBar": true,
    };
var ggbApplet = new GGBApplet(params, true);
window.addEventListener("load", function() { 
ggbApplet.inject('ggb-element');
});