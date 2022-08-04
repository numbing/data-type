// 1. the result must be "Flo"
const name = "mir"
name = 'Flo'
console.log(name);

// ****************************************************************

// 2. the result must be Number "45"
const firstNumber = '12'
const secondNumber = '33'
console.log(firstNumber + secondNumber)

// ****************************************************************

// 3. the result must be "your website is not loaded yet"
const isLoading = true
if(isLoading){
    console.log('your website is loading')
}else{
    console.log('your website is not loaded yet');
}
// ****************************************************************

// 4. the result must be 'null'
let shouldBeNull;
console.log(shouldBeNull)

// ****************************************************************

// 5. we should see if the cat is lazy or not "true"

const cat = {
    name: 'malus',
    race: 'persian',
    isLazy: true
}
console.log(cat)


// ****************************************************************

// 6. change Persian to Spanish without touching line 36 and 38

const languagues = ["English", "Arabic", "German", "Persian"]

console.log(languagues[3])