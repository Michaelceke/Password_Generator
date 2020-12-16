

  let ranger= document.getElementById("myRange");
  let vall = document.getElementById('val');
  //val.innerHTML= 'ranger.value'
  //let Length;
  vall.innerHTML = ranger.value

  function updateLength(){
    vall.innerHTML = ranger.value
    console.log(ranger.value);
    vall.innerHTML = ranger.value
    }

  let uppercaseToggle= document.getElementById("toggle1")
  let lowercaseToggle= document.getElementById("toggle2")
  let numbersToggle= document.getElementById("toggle3")
  let symbolsToggle= document.getElementById("toggle4")
  

  

  function getRandomInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
  }
  
  
  /***************************************************************************/
                          // CODE BASE//
  /***************************************************************************/
  
  const generateNumber= function generateNumber(){    // GENERATE RANDOM NUMBER
    let min=48;
    let max=57;
    const number= getRandomInclusive(min,max) 
    return String.fromCharCode(number) 
  }
  
  
  const generateUpperCase= function generateUpperCase(){        //GENERATE RANDOM UPPERCASE
    let min=65;
    let max=90;
    const upperCase= getRandomInclusive(min,max) 
    return String.fromCharCode(upperCase) 
  }
  
  
  const generateLowerCase= function generateLowerCase(){        //GENERATE RANDOM UPPERCASE
    let min=97;
    let max=122;
    const lowerCase= getRandomInclusive(min,max) 
    return String.fromCharCode(lowerCase) 
  }
  
  const generateAlphaNum=function generateAlphaNum(){     //GENERATE RANDOM ALPHANUMERICS
     let arr=[33,58,91,123];      //minimum values of the array _God Help Me
     let max;
     let  index= getRandomInclusive(0,3)
     if (index==0){
         min=arr[index]
         max=47
      }
      else if(index==1){ 
           min=arr[index]
           max=64
      }
      else if(index==2){ 
           min=arr[index]
           max=96
      }
      else{
           min=arr[index]
           max=126
      }
      let range=[min,max];
      const alphaNum= getRandomInclusive(...range) 
      return String.fromCharCode(alphaNum)
  }
  
  //OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  //00000000000000000000000000000000000000000000000000000000000000000000000
  //*****************************MAIN CODE *******************************/
  
  
  function generate(uppercasey,lowercasey,numbery,symboly,Lenghty){  
     let uppercase=uppercasey;
     let lowercase=lowercasey;
     let number=numbery
     let symbols=symboly;
     let length=Lenghty;
    let functionArray=[generateNumber,generateUpperCase,generateLowerCase,generateAlphaNum]

    let password=new Array(length).fill(0)         //Initialize password Array
    // array of all  generator functions 
  
   let input=[number,uppercase,lowercase,symbols]     // array of inputs aligned with their corresponding generator
  
    const activeInput= input.map((a,b)=>{     //This produces an array of arrays of input and its position(for record) then filters out input "false"
              if (a===true)
              return [a,b]
     }) .filter(each=>{
        return each!==undefined
    })
  
    const activeFunctions=activeInput.map((a)=>{
         return functionArray[a[1]]
    })
  
    password=password.map((a,b)=>{
        if (b<activeInput.length)
          return  activeFunctions[b]()
        else {
             index= getRandomInclusive(0, activeFunctions.length-1)
             return activeFunctions[index]()
        }
         
    }).join("")
     //console.log(inputObject)
    //password=password.map(()=>functionArray[getRandomInclusive(0,3)]())
  
     return password
  }



 function myFunction(){
  
     
    document.getElementById("para1").innerHTML = "Password Generated";
      document.getElementById("para2").innerHTML=generate(uppercaseToggle.checked, lowercaseToggle.checked, numbersToggle.checked,symbolsToggle.checked,Number(ranger.value));
    
      
    
}



document.getElementById("copy").addEventListener("click", function() {

var r = document.createRange();
r.selectNode(document.getElementById("para2"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy');
//window.getSelection().removeAllRanges();
document.getElementById("copy").innerHTML="copied"
  
})
