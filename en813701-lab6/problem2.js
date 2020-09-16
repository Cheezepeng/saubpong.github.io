let countVar = [];
checkVarPos:
while (true){
    let n = prompt('Enter an positive integer(a negative integer to quit):');
    let number = parseInt(n);
    if(number>0){
        countVar.push(number);
        continue ;
    }
    else if(number<0){
        
        break;
    }
    else{
        continue ;
    }
}
    
function readInput(list){
    list = readInput(countVar);
    alert("For the list"+list);
    
}

function displayStat(y){
    alert()
   
}

/*function avg(countVar){
    let avg = (countVar/countVar.length)*countVar.length;
    alert(avg);
}

function minVar(countVar){
    Math.min(countVar);
    alert(minVar(countVar));
}

function maxVar(countVar){
    Math.max(countVar);
    alert(maxVar(countVar));
}
*/
readInput(countVar);
displayStat(countVar);

