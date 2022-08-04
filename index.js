// 1. the result must be "Flo"
const name = "mir"
name = 'Flo'
console.log("1. ",name);

// ****************************************************************

// 2. the result must be Number "45"
const firstNumber = '12'
const secondNumber = '33'
console.log("2. ",firstNumber + secondNumber)

// ****************************************************************

// 3. the result must be "your website is not loaded yet"
const isLoading = true
if(isLoading){
   console.log("3. ",'your website is loading')
}else{
   console.log("3. ",'your website is not loaded yet');
}
// ****************************************************************

// 4. the result must be 'null'
let shouldBeNull;
console.log("4. ",shouldBeNull)

// ****************************************************************

// 5. we should see if the cat is lazy or not "true"

const cat = {
   name: 'malus',
   race: 'persian',
   isLazy: true
}
console.log("5. ",cat)


// ****************************************************************

// 6. change Persian to Spanish without touching line 44 and 46

const languagues = ["English", "Arabic", "German", "Persian"]

console.log("6. ",languagues[3])