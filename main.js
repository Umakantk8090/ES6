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

const product2={
    description:"product2.description",
    id,
    productName,
    rating,
};
//const getproduct2description=product2.description;
//console.log(getproduct2description);
const {description}=product2;
console.log(description);


//desructuring again in array
const array=[1,2,3];
let getArray1=array[0];
let getArray2=array[1];
console.log(getArray1,getArray2);

const [get1,get2,get3]=array;
console.log(get1,get2,get3);

//default parameter,spread(...) and rest operator
function adding(num1,num2){
    return num1+num2;
}
console.log(adding(5,8));

const array2=[4,5,8]
const array3=[5,3,6]
console.log([999,...array2, 90,...array3]);

//rest parameter
function getInfo(a,...c){
    console.log(a,c);
    return "umakant kanaujiya";
}
console.log(getInfo(1,5,9,3,4,7));


//map,filter,find, some,includes,indexOf,findindex;

const personArray=[
    {
        user : "umakant4",
        age:22,
        country:'india',
       },
    {
    user : "umakant1",
    age:24,
    country:'india',
   },
   {
    user : "umakant2",
    age:25,
    country:'russia',
   },
   {
    user : "umakant3",
    age:23,
    country:'usa',
   },
]
let getAllNames=personArray.map((singalePerson,index)=>{
    console.log(singalePerson,index);
    return `${singalePerson.user} age is ${singalePerson.age}`;

});
console.log(getAllNames);


//find(return only one value of first element and again similar element match its not return)
let getPersonFromUSA=personArray.find((singalePerson,index)=>{
    return singalePerson.country==='india'
});
console.log(getPersonFromUSA);


//fiilter(return all according to condition)
let getAllPersonFromUSA = personArray.filter((singalePerson,index)=>{
    return singalePerson.country==='india'
})
console.log(getAllPersonFromUSA);

//some(which mean return only true or false)
let checkSomeArrayMethodWithExample=personArray.some((singalePerson,index)=>{
    return singalePerson.age>22
})
console.log(checkSomeArrayMethodWithExample);


//includes(its also returning true or false ),indexOf
const fruitArray=["apple","mango","banana"];
console.log(fruitArray.includes('apple'),fruitArray.indexOf("banana"));


//findIndex
let getfindIndexOfRussia=personArray.findIndex((singalePerson,index)=>{
    return singalePerson.country==='russia'
})
console.log(getfindIndexOfRussia);


let getListOfproductsElement=document.querySelector('.list-of-products');

function renderProducts(getProducts){
    getListOfproductsElement.innerHTML=getProducts.map(singleProductItem => `<p>${singleProductItem.title}</p>`).join(' ');
}



async function fetchListOfProducts(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/products',{
            method : 'GET'
        });
        const result=await apiResponse.json();
        console.log(result);
        if(result?.products?.length >0) renderProducts(result?.products)
        
    } catch (e) {
        console.log(e);
    }
}


fetchListOfProducts()