var randomNumber = [];
while (randomNumber.length <5){
    var n = parseInt(Math.random()*100);
    if(!randomNumber.includes(n)){
        randomNumber.push(n);
    }
}

var luckyNumber = [];

function inputNumber() {
    var input = document.getElementById("luckynumber");
    var n = parseInt(input.value);
    if(!luckyNumber.includes(n) && luckyNumber.length<5 && n>=0 && n<=99){
        luckyNumber.push(n);
    }

    if(luckyNumber.length == 5){
        var count = 0;
        for(var i=0;i < randomNumber.length;i++){
            if (luckyNumber.includes(randomNumber[i])){
                count++;
            }
        }
        switch (count) {
            case 3: alert("Chuc mung ban da trung thuong 500.000VND!");break;
            case 4: alert("Chuc mung ban da trung thuong 20.000.000VND!");break;
            case 5: alert("Chuc mung ban da trung thuong 10.000.000.000VND!");break;
            default: alert("Rat tiec. Chuc ban may man lan sau.");
        }
    }

}
