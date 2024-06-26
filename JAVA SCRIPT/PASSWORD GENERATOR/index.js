const  inputslider = document.querySelector("[data-lengthslider]");
const lengthdisplay = document.querySelector("[data-lengthnumber]")
const passworddisplay = document.querySelector("[data-passworddisplay]")
const copybtn = document.querySelector("[data-copy]")
const copymsg = document.querySelector("[data-copymsg]")
const uppercasecheck = document.querySelector("#uppercase")
const lowercasecheck = document.querySelector("#lowercase")
const numberscheck = document.querySelector("#numbers")
const symbolscheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const generatebtn = document.querySelector(".generatorbutton")
const allcheckbox = document.querySelectorAll("input[type=checkbox")
const symbols = '~`!@#$%^&*()_+-={}[]:";?><.,/\|';

let password = ""
let passwordlength = 10
let checkcount = 0

handleslider();
setindicator('#ccc')

//set password length
function handleslider(){

    inputslider.value = passwordlength;
    lengthdisplay.innerHTML = passwordlength;
    const min = inputslider.min;
    const max = inputslider.max;

    inputslider.style.backgroundSize = ((passwordlength-min) * 100/(max-min)) + "% 100%"
}

function setindicator(color){
    indicator.style.backgroundColor = color;
    //shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`
}

function getrandinteger(min ,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generaterandomnumber(){
    return getrandinteger(0,9);
}

function getlowercase(){
   return String.fromCharCode(getrandinteger(97,123));
}

function getuppercase(){
   return String.fromCharCode(getrandinteger(65,91));
}

function getsymbol(){
    const randnum = getrandinteger(0,symbols.length);
    return symbols.charAt(randnum);
}

function calcstrength(){
    let hasupper = false;
    let haslower = false;
    let hasnum = false;
    let hassym = false;
    if(uppercasecheck.checked) hasupper = true;
    if(lowercasecheck.checked) haslower = true;
    if(numberscheck.checked) hasnum = true;
    if(symbolscheck.checked) hassym = true;

    if(hasupper && haslower && (hasnum || hassym) && passwordlength>=10){
        setindicator("#0f0");
    }
    else if((haslower || hassym) && (hasnum && hassym) && passwordlength >=6){
        setindicator("#ff0");
    }
    else{
        setindicator("#f00")
    }
}

async function copycontent(){
    try{
        await navigator.clipboard.writeText(passworddisplay.value)
        copymsg.innerHTML = "copied";
    }
    catch(e){
        copymsg.innerHTML = "Failed";
    }
    //to make copy wala span visible
    copymsg.classList.add("active");

    setTimeout(() => {
        copymsg.classList.remove("active")
    } , 2000);
}

function shufflepassword(array){
    //fisher yates method
    for (let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      let str = "";
      array.forEach((el) =>{
        (str+=el)
      })
      return str;
}

  
function handlecheckboxchange(){
    checkcount = 0;
    allcheckbox.forEach((checkbox) => {
        if(checkbox.checked){
            checkcount++;
        }
    });

    //special condition
    if(passwordlength<checkcount){
        passwordlength = checkcount;
        handleslider();
    }
}

allcheckbox.forEach((checkbox) => {
    checkbox.addEventListener('change' , handlecheckboxchange);
});

inputslider.addEventListener('input' , (e) => {
    passwordlength = e.target.value;
    handleslider();
})

copybtn.addEventListener('click' , () => {
    if(passworddisplay.value){
        copycontent();
    }
})

generatebtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkcount == 0) 
        return;

    if(passwordlength < checkcount) {
        passwordlength = checkcount;
        handleslider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    let funcarr = [];

    if(uppercasecheck.checked)
        funcarr.push(getuppercase);

    if(lowercasecheck.checked)
        funcarr.push(getlowercase);

    if(numberscheck.checked)
        funcarr.push(generaterandomnumber);

    if(symbolscheck.checked)
        funcarr.push(getsymbol);

    //compulsory addition
    for(let i=0; i<funcarr.length; i++) {
        password += funcarr[i]();
    }
    console.log("COmpulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordlength-funcarr.length; i++) {
        let randIndex = getrandinteger(0 , funcarr.length);
        console.log("randIndex" + randIndex);
        password += funcarr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflepassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passworddisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcstrength();
});