const $ = window.$;

function initializeCube(){
    $('.shape').shape();
}

function nextExercise(){
    $('.shape').shape('flip right');
}

function prevExercise(){
    $('.shape').shape('flip left');
}

export default (initializeCube, nextExercise, prevExercise)