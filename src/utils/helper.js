window.helpers = (function () {
    const $ = window.$;
    function initializeCube(){
        $('.shape').shape();
    }
    
    function nextExercise(currentSide){
        $('.shape').shape('set next side','.side'+currentSide).shape('flip right');
    }
    
    function prevExercise(currentSide){
        $('.shape').shape('set next side','.side'+currentSide).shape('flip left');
    }
    
    return {
        initializeCube, 
        nextExercise, 
        prevExercise}
    }());