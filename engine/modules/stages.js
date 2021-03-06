// # SET STAGES

stages = [
    {
        name: "Stage 0",
        requireCars: 0,
        modelsRange: 1,
        carsActive: 1,
    },
    {
        name: "Stage 1",
        requireCars: 5,
        modelsRange: 1,
        carsActive: 2,
    },
    {
        name: "Stage 2",
        requireCars: 30,
        modelsRange: 1,
        carsActive: 3,
    },
    {
        name: "Stage 3",
        requireCars: 75,
        modelsRange: 2,
        carsActive: 1,
    },
    {
        name: "Stage 4",
        requireCars: 125,
        modelsRange: 3,
        carsActive: 1,
    },
    {
        name: "Stage 5",
        requireCars: 160,
        modelsRange: 4,
        carsActive: 1,
    },
    {
        name: "Stage 6",
        requireCars: 200,
        modelsRange: 4,
        carsActive: 2,
    },
    {
        name: "Stage 7",
        requireCars: 248,
        modelsRange: 4,
        carsActive: 3,
    },
    
];

// # LEVELS
initLevels(40);

// # CREATE X LEVES
function initLevels(nmr){
    
    levels = [];
    levels[0] = 0;
    levels[1] = 20;
    for(var i=2;i<nmr+2;i++){
        levels[i] = Math.floor(levels[i-1]*1.4);
    }
}