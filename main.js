console.log("umakant")

let a=true;
let b=true;
console.log(a && b);

//template literal
let name1="umakkant"
let name2="kanaujiya"
console.log(`${name1} ${name2}`);

//ternary operator
//condition ? statement1:statement2
const recepe=true;
recepe? console.log(getrecipe1('pizza')) : console.log(getrecipe2('coke'));


let recipe1=false;
function getrecipe1(recipeName) {
    return recipeName;
}
function getrecipe2(recipeName) {
    return recipeName
}
if(recipe1){
    console.log(getrecipe1("pizza"));
}else{
    console.log(getrecipe2("coke"));
}

//destructuring object and array;
const id=1;
const productName="apple watch";
const rating=5;

const product={
    id:id,
    productName:productName,
    rating:rating
}
console.log(product);