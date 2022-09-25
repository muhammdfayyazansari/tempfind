    let arr = document.querySelector('#array');
    let max = document.querySelector('#max')
    let min = document.querySelector('#min')
    let average = document.querySelector('#average')
    let below = document.querySelector('#below')
    let above = document.querySelector('#above')
    let largeValue= 0;
    let smallValue =50;
    let ave = 0;
    let temps = [];
    let abv = 26;
    let upper = [];
    for (let i=0; i<24; i++){
        let temp = Math.floor(Math.random()*50);
        temps.push(temp);
        arr.innerHTML += temps[i]+"," + " ";
        ave += temp;

        let check = Math.max(largeValue,temps[i]);
        let small = Math.min(smallValue,temps[i])
        largeValue = check;
        smallValue = small;
        if(temp > 26){
            upper.push(temp)
        }
    }
    
   max.innerHTML = 'Max Value: '+ largeValue;
   min.innerHTML = 'Min Value: '+ smallValue;
   average.innerHTML = 'Average Value: '+ ave/temps.length;
   above.innerHTML = 'Above value: '+ ((upper.length/temps.length)*100).toFixed(2) + "%" ;
   below.innerHTML = 'Below value: '+ (((temps.length-upper.length)/temps.length)*100).toFixed(2) + "%";

