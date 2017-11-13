function doIt(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;
    document.getElementById("output").innerHTML = horoscope(parseInt(month), parseInt(day), name, year);
    document.getElementById("zodiac").innerHTML = zodiac(year);
}

function horoscope(month, day, name, year){
    var sign;

    if (month===2&&day===31||month===2&&day===30||month===9&&day===31||month===4&&day===31||month===6&&day===31||month===11&&day===31){
        sign ="impossible";
    }else if (month===1&&day>=20||month===2&&day<=18){
        sign="aquarius";
    }else if (month===2&&day>=19||month===3&&day<=20){
        sign="pisces";
    }else if (month===3&&day>=21||month===4&&day<=19){
        sign="aries";
    }else if (month===4&&day>=20||month===5&&day<=20){
        sign="taurus";
    }else if (month===5&&day>=21||month===6&&day<=20){
        sign="gemini";
    }else if (month===6&&day>=21||month===7&&day<=22){
        sign="cancer";
    }else if (month===7&&day>=23||month===8&&day<=22){
        sign="leo";
    }else if (month===8&&day>=23||month===9&&day<=22){
        sign="virgo";
    }else if (month===9&&day>=23||month===10&&day<=22){
        sign="libra";
    }else if (month===10&&day>=23||month===11&&day<=21){
        sign="scorpio";
    }else if (month===11&&day>=22||month===12&&day<=21){
        sign="sagittarius";
    }else if (month===12&&day>=22||month===1&&day<=19){
        sign="capricorn";
    }
    console.log(sign);
    determineImage(sign);
    return message(sign,name);
}

function message(sign,name){
    if (sign==="aquarius"){
        return "Congratulations "+ name+ "! You are an Aquarius. You are a deep thinker and highly intellectual, and you are a progressive thinker."
    }
    if (sign==="pisces"){
        return "Congratulations "+ name+ "! You are a Pisces. You are friendly and artistic, and known for being compassionate."
    }
    if (sign==="aries"){
        return "Congratulations "+ name+ "! You are an Aries. People know you to be courageous and determined, and slightly competitive."
    }
    if (sign==="taurus"){
        return "Congratulations "+ name+ "! You are a Taurus. You are stubborn but reliable, and people like you because you are always grounded."
    }
    if (sign==="gemini"){
        return "Congratulations "+ name+ "! You are a Gemini. You are curious and affectionate, but can be shy. You have a very flexible personality."
    }
    if (sign==="cancer"){
        return "Congratulations "+ name+ "! You are a Cancer. You can be challenging to get to know, but are loyal and care deeply for those close to you."
    }
    if (sign==="leo"){
        return "Congratulations "+ name+ "! You are a Leo. You are creative, passionate, and are naturally charming. People follow your lead naturally."
    }
    if (sign==="virgo"){
        return "Congratulations "+ name+ "! You are a Virgo. You are loyal and detail-orientated, and people know you as kind and careful."
    }
    if (sign==="libra"){
        return "Congratulations "+ name+ "! You are a Libra. You are cooperative and peaceful. THose around you see that you are social and diplomatic."
    }
    if (sign==="scorpio"){
        return "Congratulations "+ name+ "! You are a Scorpio. You are passionate and resourceful, and you hate lies. You are a brave, true friend."
    }
    if (sign==="sagittarius"){
        return "Congratulations "+ name+ "! You are a Sagittarius. You are curious, energetic, and have a great sense of humor. Of all the signs, you are the one who loves to travel most."
    }
    if (sign==="capricorn"){
        return "Congratulations "+ name+ "! You are a Capricorn. You are responsible and disciplined, and people know you make good decisions."
    }
    if (sign==="impossible"){
        return "You gave a date that doesn't exist. Please try again."
    }
}

function determineImage(sign){
    document.getElementById("image").innerHTML = "<img src='img/" + sign + ".png'>";
}

function zodiac(year){
    if (year%12===1){
        return "You were born in the year of the Rooster!";
    }
    if (year%12===2){
        return "You were born in the year of the Dog!";
    }
    if (year%12===3){
        return "You were born in the year of the Pig!";
    }
    if (year%12===4){
        return "You were born in the year of the Rat!";
    }
    if (year%12===5){
        return "You were born in the year of the Ox!";
    }
    if(year%12===6){
        return "You were born in the year of the Tiger!";
    }
    if(year%12===7){
        return "You were born in the year of the Rabbit!";
    }
    if(year%12===8){
        return "You were born in the year of the Dragon!";
    }
    if(year%12===9){
        return "You were born in the year of the Snake!";
    }
    if(year%12===10){
        return "You were born in the year of the Horse!";
    }
    if(year%12===11){
        return "You were born in the year of the Sheep!";
    }
    if(year%12===0){
        return "You were born in the year of the Monkey!";
    }
}