"use strict"

let uniDivs=[]
let unixs=[]
let colours=["#EFEFEF","#FEC82C","#C32790","#F26022","#30B24A","#15909B","#0B4438","#2495D2","#CBB480","#9E9FA2"]

const numUnicorns= 10
let i=0

while(i<numUnicorns){
    uniDivs[i]=document.createElement("div")
    document.body.appendChild(uniDivs[i])
    uniDivs[i].classList.add("unicorn")
    uniDivs[i].style.top=i*6+"%"
    uniDivs[i].style.backgroundColor=colours[i]
}

// let uni0=document.getElementById("unicorn0")
// let uni0x=0  //Unicorn0's X position
// let uni1=document.getElementById("unicorn1")
// let uni1x=0
// let uni2=document.getElementById("unicorn2")
// let uni2x=0
// let finish=document.getElementById("finish")


// //Extra challenges .. Set the background colour of each unicorn .. (so they are different) .. ideally with Javascript (not CSS)
// //Add a third unicorn - three horse race
// // - What if we wanted 20 unicorns ??  []


// setInterval(moveUnicorns,50)  //How fast the race is - smaller=faster


// function moveUnicorns(){

//     uni0.style.left= uni0x +"%"
//     uni0x +=(Math.random()) //add 1% to the unicorns x position (Add a random amount instead)   
//     uni1.style.left= uni1x +"%"
//     uni1x +=(Math.random()) 
//     uni2.style.left= uni2x +"%"
//     uni2x +=(Math.random())


//     //Move all unicorns a random amount each
//     //If a unicorn has crossed the finish line
//     if(uni0x>90){
//         alert("uni0 wins")
//         uni0x=0
//         uni1x=0
//         uni2x=0
//     }
//      if(uni1x>90){
//         alert("uni1 wins")
//         uni0x=0
//         uni1x=0
//         uni2x=0
//     }
//      if(uni2x>90){
//         alert("uni2 wins")
//         uni0x=0
//         uni1x=0
//         uni2x=0
//     }

//         //Display winner
//         // restart race           
// }





