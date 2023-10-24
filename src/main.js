// import {Howl, Howler} from 'howler';

const { Vex } = require("vexflow");


// const cNote = new Howl({
//   src: ['/piano-mp3/piano-mp3/C4']
// })

// cNote.play()

// const playButton = document.querySelector('#play-button')

// const { Renderer, Stave } = Vex.Flow;

// // Create an SVG renderer and attach it to the DIV element named "boo".
// const div = document.getElementById("output");
// const renderer = new Renderer(div, Renderer.Backends.SVG);

// // Configure the rendering context.
// renderer.resize(500, 500);
// const context = renderer.getContext();

// // Create a stave of width 400 at position 10, 40 on the canvas.
// const stave = new Stave(10, 40, 400);

// // Add a clef and time signature.
// stave.addClef("treble").addTimeSignature("4/4");

// // Connect it to the rendering context and draw!
// stave.setContext(context).draw();

const vf = new Vex.Flow.Factory({renderer: {elementId: 'output'}});
const score = vf.EasyScore();
const system = vf.System();

system.addStave({
  voices: [score.voice(score.notes('C#5/q, B4, A4, G#4'))]
}).addClef('trebel').addEndTimeSignature('4/4');

vf.draw();