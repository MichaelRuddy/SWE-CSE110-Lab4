var i = 0;
for(car in statistics){
    if(i == 0 || i == 3 || i ==5) {
        console.log(statistics[car]);
    }
    else {
        if(statistics[car] % 2 == 1) {
            console.log(statistics[car]);
        }
    }
    i = i + 1;
}