let random = Math.floor(Math.random() * 20) + 10;
console.log(random);
let original = [];
for (let i = 0; i < random; i++) {
    original.push({ name: "natureProduct_" + i, value: i });
}
console.log(original);

let myNamedProducts = [];
for (let i = 0; i < 5; i++) {
    myNamedProducts.push({ name: "Sawan", value: i });
}
console.log(myNamedProducts);

let myAndOriginal = [];
function addToOriginalArray(myNamedProducts_array) {
    for (let i = 0; i < myNamedProducts_array.length; i++) {
        myAndOriginal.push(myNamedProducts_array[i]);
    }
    for (let i = 0; i < original.length; i++) {
        original[i].value = i + myNamedProducts_array.length;
        myAndOriginal.push(original[i]);
    }
    console.log(myAndOriginal);
}

addToOriginalArray(myNamedProducts);

function proposeRandomItem(myAndOriginal_array) {
    let random = Math.floor(Math.random() * myAndOriginal_array.length);
    let randomObject = myAndOriginal_array[random];
    console.log(randomObject);
    if (random<5) {
        console.log("Yes, the random proposed item includes my name.");
    } else {
        console.log("No, the random proposed item DOES NOT include my name.");
    }
}
proposeRandomItem(myAndOriginal);


function generateFactors(myAndOriginal_array, rnd_num) {
    let array_Factors = [];
    console.log(rnd_num);
    for (let i = 0; i < myAndOriginal_array.length; i++) {
        if (rnd_num % i === 0) {
            array_Factors.push(myAndOriginal_array[i]);
        }
    }
    console.log(array_Factors);
}
generateFactors(myAndOriginal, Math.floor(Math.random()*myAndOriginal.length));