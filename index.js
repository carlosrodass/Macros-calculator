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

    var sedentaryActivity = 1.2;
    var moderateActivity = 1.6;
    var activeActivity = 1.8;


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

    function calculateMacros(calories, weight) {
        var proteinGrams = weight * 2.5;
        var fatGrams = weight * 1;
        var carboCalories = calories - ((proteinGrams * 4) + (fatGrams * 9));
        console.log(carboCalories);
        var carboGrams = carboCalories / 4;

        console.log(proteinGrams, fatGrams, carboGrams);
    }

    function isFemale() {
        //PERDER PESO
        if (lose.checked === true && gain.checked === false && recomp.checked == false) {
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                console.log("soy mujer, PERDER PESO, SEDENTARIA ", age.value, height.value, weight.value);
                // TASA METABOLICA BASAL
                var bmr = calculateBmrWomen(weight.value, height.value, age.value);
                // TASA METABOLICA BASAL * ACTIVIDAD = CONSUMO CALORIAS POR DIA
                var caloriesPerDay = bmr * sedentaryActivity;
                // CALCULANDO MACROS Y CALORIAS A CONSUMIR PARA PERDER PESO CON RATIO 40 PRO 30 GRASS 30 CARBO
                var losewe = caloriesPerDay * 0.2;
                
                var total = caloriesPerDay - losewe;

                calculateMacros(total, weight.value);

            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                console.log("soy mujer PERDER PESO, ACTIVA ", age.value, height.value, weight.value);

                // FORMULA GENERAL DE LAS CALORIAS QUE SU CUERPO CONSUME SIENDO ACTIVA

                // RESULTADO OPERADO POR LA META DE PERDER PESO
            } else {
                console.log("soy mujer PERDER PESO, MODERADA ", age.value, height.value, weight.value);

                // FORMULA GENERAL DE LAS CALORIAS QUE SU CUERPO CONSUME SIENDO MODERADA

                // RESULTADO OPERADO POR LA META DE PERDER PESO
            }
            //GANAR PESO 
        } else if (gain.checked === true && lose.checked === false && recomp.checked == false) {
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                console.log("soy mujer, GANAR PESO, SEDENTARIA ", age.value, height.value, weight.value);

                // FORMULA GENERAL DE LAS CALORIAS QUE SU CUERPO CONSUME SIENDO SEDENTARIA

                // RESULTADO OPERADO POR LA META DE GANAR PESO
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                console.log("soy mujer, GANAR PESO, ACTIVA ", age.value, height.value, weight.value);

                // FORMULA GENERAL DE LAS CALORIAS QUE SU CUERPO CONSUME SIENDO ACTIVA

                // RESULTADO OPERADO POR LA META DE GANAR PESO
            } else {
                console.log("soy mujer, GANAR PESO, MODERADA ", age.value, height.value, weight.value);

                // FORMULA GENERAL DE LAS CALORIAS QUE SU CUERPO CONSUME SIENDO MODERADA

                // RESULTADO OPERADO POR LA META DE GANAR PESO
            }
            //RECOMPONER PESO
        } else {
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                console.log("soy mujer, RECOMPONER PESO, SEDENTARIA ", age.value, height.value, weight.value);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                console.log("soy mujer, RECOMPONER PESO, ACTIVA ", age.value, height.value, weight.value);
            } else {
                console.log("soy mujer, RECOMPONER PESO, MODERADA ", age.value, height.value, weight.value);
            }
        }
    }

    function isMale() {
        // Comprobando goals
        if (lose.checked === true && gain.checked === false && recomp.checked == false) {
            // Comprobando actividad
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                console.log("soy HOMBRE, PERDER PESO, SEDENTARIO ", age.value, height.value, weight.value);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                console.log("soy HOMBRE PERDER PESO, ACTIVO ", age.value, height.value, weight.value);
            } else {
                console.log("soy HOMBRE PERDER PESO, MODERADO ", age.value, height.value, weight.value);
            }
        } else if (gain.checked === true && lose.checked === false && recomp.checked == false) {
            // Comprobando actividad
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                console.log("soy HOMBRE, GANAR PESO, SEDENTARIO ", age.value, height.value, weight.value);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                console.log("soy HOMBRE, GANAR PESO, ACTIVO ", age.value, height.value, weight.value);
            } else {
                console.log("soy HOMBRE, GANAR PESO, MODERADO ", age.value, height.value, weight.value);
            }
        } else {
            // Comprobando actividad
            if (sedentary.checked === true && moderate.checked === false && active.checked == false) {
                console.log("soy HOMBRE, RECOMPONER PESO, SEDENTARIO ", age.value, height.value, weight.value);
            } else if (active.checked === true && moderate.checked === false && recomp.checked == false) {
                console.log("soy HOMBRE, RECOMPONER PESO, ACTIVO ", age.value, height.value, weight.value);
            } else {
                console.log("soy HOMBRE, RECOMPONER PESO, MODERADO ", age.value, height.value, weight.value);
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
