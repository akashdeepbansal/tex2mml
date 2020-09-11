/*
 * Converts LaTeX equation into MathML using MathJax 
 * NOTE: Make sure if you have backslash in the equation, you should 
 * replace it with double backslash before passing it as argument 
 */

var eqn = process.argv[2];

if (!eqn) {
  console.log('Usage: js tex2mml.js [input]');
  process.exit(0);
}

// Initiating the MathJax
let mathjax;
const mj = require('mathjax');
let path = '..';
let pp = mj.init({loader: {require:require, paths: {mathjax: path + '/node_modules/mathjax/es5/'}, load: ['input/tex']}});

pp.then((m) => {
	mathjax = m;
  var eqnMML = mathjax.tex2mml(eqn)
  console.log(eqnMML)
})