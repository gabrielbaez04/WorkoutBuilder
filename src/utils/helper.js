const $ = window.$;
module.exports = {  
    initializeCube : () => {
        $('.shape').shape();
    },  
    nextExercise : (currentSide) => {
        $('.shape').shape('set next side','.side'+currentSide).shape('flip right');
    },   
    prevExercise : (currentSide) => {
        $('.shape').shape('set next side','.side'+currentSide).shape('flip left');
    }
};