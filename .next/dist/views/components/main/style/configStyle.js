'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var grayMid = exports.grayMid = '#c3cad0';
var grayDark = exports.grayDark = '#7b8a99';

var blueLight = exports.blueLight = '#00aaff';
var blueDark = exports.blueDark = '#0076ff';

var containerSmallWidth = exports.containerSmallWidth = '750px';
var containerMediumWidth = exports.containerMediumWidth = '970px';
var containerLargeWidth = exports.containerLargeWidth = '1170px';

var containerSmallMinWidth = exports.containerSmallMinWidth = '768px';
var containerMediumMinWidth = exports.containerMediumMinWidth = '992px';
var containerLargeMinWidth = exports.containerLargeMinWidth = '1200px';

var animateTime = exports.animateTime = '.3s';
var addTransition = exports.addTransition = function addTransition(variableName) {
    if (!Array.isArray(variableName)) {
        variableName = [variableName];
    }
    var genAnimate = function genAnimate() {
        return variableName.map(function (variable) {
            return variable + ' ' + animateTime + '  ease-out';
        });
    };
    return '-webkit-transition: ' + genAnimate() + ';\n            -moz-transition:    ' + genAnimate() + ';\n            -o-transition:      ' + genAnimate() + ';\n            transition:         ' + genAnimate() + ';';
};

var borderStyle = exports.borderStyle = '\n    border: 1px solid;\n    // border-radius: 2px;\n';

var inputStyle = exports.inputStyle = '\n    ' + addTransition('border-color') + '\n    ' + borderStyle + '\n    background-color:white;\n    border-color:' + grayMid + ';\n    color:' + grayDark + ';\n\n    height: 50px;\n    font-size: 20px;\n    padding:1px 6px 1px 6px;\n    box-sizing: border-box;';