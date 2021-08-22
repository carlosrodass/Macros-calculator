'use strict';

window.addEventListener('load', function () {

    var form = document.getElementById('form');
    var age = document.getElementById('age');
    var weight = document.getElementById('weight');
    var height = document.getElementById('height');
    // Radio buttons gender
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    // Radio buttons Exercise level
    var sedentary = document.getElementById('sedentary');
    var moderate = document.getElementById('moderate');
    var active = document.getElementById('active');
    // Radio buttons Goal
    var lose = document.getElementById('lose');
    var gain = document.getElementById('gain');
    var recomp = document.getElementById('recomp');
    var btn = document.getElementById('btn');
    // Result
    var result = this.document.getElementById('result');
    // Activities
    var sedentaryActivity = 1.2;
    var moderateActivity = 1.6;
    var activeActivity = 1.8;


    const totalsName = ["Proteins", "Fats", "Carbohydrates"];

    var carboss = document.createElement("img");
    var prott = document.createElement("img");
    var fatss = document.createElement("img");

    carboss.style = {
        height: '25%',
        width: '25%'
    }

    carboss.src = "./images/carbohydrates.png";
    const carbo = carboss;

    
    prott.style = {
        height: '25%',
        width: '25%'
    }

    prott.src = "./images/protein.png";
    const proteina = prott;

    
    fatss.style = {
        height: '25%',
        width: '25%'
    }

    fatss.src = "./images/fat.png";
    const fatsss = fatss;


    var elementsI = [proteina, fatsss, carbo];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInputs();
    })

    function calculateBmrWomen(weight, height, age) {
        var total = (10 * weight) + (6.25 * height) - (5 * age) - 16;
        return total;
    }

    function calculateBmrMen(weight, height, age) {
        var total = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        return total;
    }


    function loseWeightMacros(calories, weight) {
        var proteinGrams = weight * 2.5; //Gramos de proteina || cada gramo de proteina son 4kcal 
        var fatGrams = weight * 1; //Gramos de Grasa || cada gramo de Grasa son 9kcal 
        var grassProteinCalories = ((proteinGrams * 4) + (fatGrams * 9));
        var carboCalories = calories - grassProteinCalories;
        var carboGrams = carboCalories / 4;
        return { proteinGrams: proteinGrams, fatGrams: fatGrams, carboGrams: carboGrams }
    }

    function gainWeightMacros(calories, weight) {
        var proteinGrams = weight * 2; //Gramos de proteina || cada gramo de proteina son 4kcal 
        var fatGrams = weight * 1.5; //Gramos de Grasa || cada gramo de Grasa son 9kcal 
        var grassProteinCalories = ((proteinGrams * 4) + (fatGrams * 9));
        var carboCalories = calories - grassProteinCalories;
        var carboGrams = carboCalories / 4;
        return { proteinGrams: proteinGrams, fatGrams: fatGrams, carboGrams: carboGrams }
    }


    function mantainWeightMacros(calories, weight) {
        var proteinGrams = weight * 2.5; //Gramos de proteina || cada gramo de proteina son 4kcal 
        var fatGrams = weight * 0.5; //Gramos de Grasa || cada gramo de Grasa son 9kcal 
        var grassProteinCalories = ((proteinGrams * 4) + (fatGrams * 9));
        var carboCalories = calories - grassProteinCalories;
        var carboGrams = carboCalories / 4;
        return { proteinGrams: proteinGrams, fatGrams: fatGrams, carboGrams: carboGrams }
    }


    function commonWomenLoseWeight(frequencyActivity) {
        var bmr = calculateBmrWomen(weight.value, height.value, age.value);
        var caloriesPerDay = bmr * frequencyActivity;
        var losewe = caloriesPerDay * 0.2;
        var total = caloriesPerDay - losewe;
        const macros = loseWeightMacros(total, weight.value);
        const totals = [macros.proteinGrams, macros.fatGrams, macros.carboGrams];
        result.style.display = "block";

        for (let i = 0; i < totals.length; i++) {

            var newDiv = document.createElement("div");
        

            newDiv.appendChild(elementsI[i]);

            var macroElement = document.createElement("h4");
            var macroText = document.createTextNode(totalsName[i]);

            macroElement.appendChild(macroText);
            newDiv.appendChild(macroElement);

            var parrafo = document.createElement("p");
            var texto = document.createTextNode(totals[i]);

            parrafo.appendChild(texto);
            newDiv.appendChild(parrafo);

            result.appendChild(newDiv);

        }
        btn.disabled = true;
    }


    function commonWomenGainWeigth(frequencyActivity) {
        var bmr = calculateBmrWomen(weight.value, height.value, age.value);
        var caloriesPerDay = bmr * frequencyActivity;
        var gainWeight = caloriesPerDay * 0.2;
        var total = caloriesPerDay + gainWeight;
        const macros = gainWeightMacros(total, weight.value);
        const totals = [macros.proteinGrams, macros.fatGrams, macros.carboGrams]
        result.style.display = "block";

        for (let i = 0; i < totals.length; i++) {

            var newDiv = document.createElement("div");
            
            newDiv.appendChild(elementsI[i]);

            var macroElement = document.createElement("h4");
            var macroText = document.createTextNode(totalsName[i]);

            macroElement.appendChild(macroText);
            newDiv.appendChild(macroElement);

            var parrafo = document.createElement("p");
            var texto = document.createTextNode(totals[i]);

            parrafo.appendChild(texto);
            newDiv.appendChild(parrafo);

            result.appendChild(newDiv);
        }
        btn.disabled = true;

    }

    function commonWomenMantainWeight(frequencyActivity) {
        var bmr = calculateBmrWomen(weight.value, height.value, age.value);
        var caloriesPerDay = bmr * frequencyActivity;
        const macros = mantainWeightMacros(caloriesPerDay, weight.value);
        const totals = [macros.proteinGrams, macros.fatGrams, macros.carboGrams]
        result.style.display = "block";

        for (let i = 0; i < totals.length; i++) {

            var newDiv = document.createElement("div");
            
            newDiv.appendChild(elementsI[i]);

            // var caloriess = document.createElement("h1");
            // var caloria = document.createTextNode(caloriesPerDay);
            // caloriess.appendChild(caloria)
            // newDiv.appendChild(caloriess);

            var macroElement = document.createElement("h4");
            var macroText = document.createTextNode(totalsName[i]);

            
            macroElement.appendChild(macroText);
            newDiv.appendChild(macroElement);

            var parrafo = document.createElement("p");
            var texto = document.createTextNode(totals[i]);

            parrafo.appendChild(texto);
            newDiv.appendChild(parrafo);

            result.appendChild(newDiv);
        }
        btn.disabled = true;
    }


    function commonMenLoseWeight(frequencyActivity) {
        var bmr = calculateBmrMen(weight.value, height.value, age.value);
        var caloriesPerDay = bmr * frequencyActivity;
        var losewe = caloriesPerDay * 0.2;
        var total = caloriesPerDay - losewe;
        const macros = loseWeightMacros(total, weight.value);
        const totals = [macros.proteinGrams, macros.fatGrams, macros.carboGrams]
        result.style.display = "block";

        for (let i = 0; i < totals.length; i++) {

            var newDiv = document.createElement("div");
            
            newDiv.appendChild(elementsI[i]);

            var macroElement = document.createElement("h4");
            var macroText = document.createTextNode(totalsName[i]);

            macroElement.appendChild(macroText);
            newDiv.appendChild(macroElement);

            var parrafo = document.createElement("p");
            var texto = document.createTextNode(totals[i]);

            parrafo.appendChild(texto);
            newDiv.appendChild(parrafo);

            result.appendChild(newDiv);

        }
        btn.disabled = true;
    }


    function commonMenGainWeight(frequencyActivity) {
        var bmr = calculateBmrMen(weight.value, height.value, age.value);
        var caloriesPerDay = bmr * frequencyActivity;
        var gainWeight = caloriesPerDay * 0.2;
        var total = caloriesPerDay + gainWeight;
        const macros = gainWeightMacros(total, weight.value);
        const totals = [macros.proteinGrams, macros.fatGrams, macros.carboGrams]
        result.style.display = "block";

        for (let i = 0; i < totals.length; i++) {

            var newDiv = document.createElement("div");
            
            newDiv.appendChild(elementsI[i]);

            var macroElement = document.createElement("h4");
            var macroText = document.createTextNode(totalsName[i]);

            macroElement.appendChild(macroText);
            newDiv.appendChild(macroElement);

            var parrafo = document.createElement("p");
            var texto = document.createTextNode(totals[i]);

            parrafo.appendChild(texto);
            newDiv.appendChild(parrafo);

            result.appendChild(newDiv);

        }
        btn.disabled = true;
    }


    function commonMenMantainWeight(frequencyActivity) {
        var bmr = calculateBmrMen(weight.value, height.value, age.value);
        var caloriesPerDay = bmr * frequencyActivity;
        const macros = mantainWeightMacros(caloriesPerDay, weight.value);
        const totals = [macros.proteinGrams, macros.fatGrams, macros.carboGrams]
        result.style.display = "block";

        for (let i = 0; i < totals.length; i++) {

            var newDiv = document.createElement("div");
            
            newDiv.appendChild(elementsI[i]);

            var macroElement = document.createElement("h4");
            var macroText = document.createTextNode(totalsName[i]);

            macroElement.appendChild(macroText);
            newDiv.appendChild(macroElement);

            var parrafo = document.createElement("p");
            var texto = document.createTextNode(totals[i]);

            parrafo.appendChild(texto);
            newDiv.appendChild(parrafo);

            result.appendChild(newDiv);

        }
        btn.disabled = true;
    }

    function isFemale() {
        //PERDER PESO
        if (lose.checked === true && gain.checked === false && recomp.checked == false) {
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                commonWomenLoseWeight(sedentaryActivity)
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                commonWomenLoseWeight(activeActivity);
            } else {
                commonWomenLoseWeight(moderateActivity);
            }
            //GANAR PESO 
        } else if (gain.checked === true && lose.checked === false && recomp.checked == false) {
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                commonWomenGainWeigth(sedentaryActivity);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                commonWomenGainWeigth(activeActivity);
            } else {
                commonWomenGainWeigth(moderateActivity);
            }
            //RECOMPONER PESO
        } else {
            console.log("aqui");
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                commonWomenMantainWeight(sedentaryActivity);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                commonWomenMantainWeight(activeActivity);
            } else {
                commonWomenMantainWeight(moderateActivity);
            }
        }
    }

    function isMale() {
        // Comprobando goals
        if (lose.checked === true && gain.checked === false && recomp.checked == false) {
            // Comprobando actividad
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                commonMenLoseWeight(sedentaryActivity);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                commonMenLoseWeight(activeActivity);
            } else {
                commonMenLoseWeight(moderateActivity);
            }
        } else if (gain.checked === true && lose.checked === false && recomp.checked == false) {
            // Comprobando actividad
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                commonMenGainWeight(sedentaryActivity);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                commonMenGainWeigth(activeActivity);
            } else {
                commonMenGainWeight(moderateActivity);
            }
        } else {
            // Comprobando actividad
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                commonMenMantainWeight(sedentaryActivity);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                commonMenMantainWeight(activeActivity);
            } else {
                commonMenMantainWeight(moderateActivity);
            }
        }
    }

    const checkInputs = () => {
        if (!age.value || isNaN(age.value)) {
            alert("Age is empty");
            return;
        } else {
            if (!weight.value || isNaN(weight.value)) {
                alert("Weight is empty");
                return;
            } else {
                if (!height.value || isNaN(height.value)) {
                    alert("height is empty");
                    return;
                } else { // ES MUJER
                    if (female.checked == true) {
                        isFemale();
                    } else { // ES HOMBRE
                        isMale();
                    }
                }
            }
        }
    }


})
