//Connect the elements of the page to js
//Do this by creating variables
//loop through elements that are multiple
//Add Event Listeners to the elements

//Box change colors

//get box information

//Reset Button

//Score to show button

//determine a win

//keep score after each game
/**********MODAL****** */
let closeBtn=document.querySelector('.close');
let modal=document.querySelector('.modal');
let aboutBtn=document.querySelector('.about');




function openModal(){
    modal.style.display="block";


}


aboutBtn.addEventListener('click',openModal);

function closeModal(){
    modal.style.display="none";


}


closeBtn.addEventListener('click',closeModal);

/**********RECOGNIZE WHAT IS CLICKED****** */


/////USER ONE CLICKS A BUTTON////////////
//look at all the boxes
//have something to count how many turns taken
//if the turn is even number then player one turn
    //clicked box will add class of user1 click

        // user1Boxes[i].classList.add('user1_click');
        // user1Boxes[i].innerText="O";
//if turn is odd number than player 2 turn
        //clicked box will add class of user2 click

            // user2Boxes[i].classList.add('user2_click');
            // user2Boxes[i].innerText="O";



    let allBoxes=document.querySelectorAll('.box');

    let whoseTurn=0;
    // for(let i=0; i<allBoxes.length;i++){
        for(let i=0; i<9;i++){

         function whoseNext(){
            if(whoseTurn<=8&& allBoxes[i].classList.contains('user2_click')===false&&allBoxes[i].classList.contains('user1_click')===false){
                whoseTurn++
                console.log(whoseTurn);
                // console.log(allBoxes.length);

                if(whoseTurn%2===1&&allBoxes[i].classList.contains('user2_click')===false&&allBoxes[i].classList.contains('user1_click')===false){
                    console.log("player 1")
                    allBoxes[i].classList.add('user1_click');
                    allBoxes[i].innerText="X";
                    console.log(this.getBoundingClientRect())
                    console.log(this.classList);
                    console.log(this)


                }
                else if(whoseTurn%2===0&allBoxes[i].classList.contains('user2_click')===false&&allBoxes[i].classList.contains('user1_click')===false){
                    console.log("player 2")
                    allBoxes[i].classList.add('user2_click');
                    allBoxes[i].innerText="O";
                    console.log(this.getBoundingClientRect())
                    console.log(this.classList);
                }





            }

            ////////TYPES OF WINS COMBINATIONS///////////

            let possibleWins=[
//maybe an array of possible wins

//DIAGONAL LEFT
    // if if a box class list contains top 1, middle 2, bottom 3 
    // and has all same user clicks
    ["top_1","middle_2","bottom_3"],

//DIAGONAL RIGHT
    //top 3, middle 2, bottom 1
    // and has all same user clicks
    ["top_3","middle_2","bottom_1"],

//ACROSS TOP
    //"top 1","top", "2",top", "3", 
    // and has all same user clicks
    ["top_1","top_2","top_3"],

//ACROSS MIDDLE
    //"middle", "1","middle", "2","middle", "3"
    // and has all same user clicks
    ["middle_1","middle_2","middle_3"],
//ACROSS BOTTOM
        // "bottom", "1", "bottom", "2", "bottom", "3",
        // and has all same user clicks
        ["bottom_1","bottom_2","bottom_3"],
// DOWN LEFT
        //"top", "1", "middle", "1",  "bottom", "1",
        // and has all same user clicks
        ["top_1","middle_1","bottom_1"],

//DOWN MIDDLE
        //"top", "2",  "middle", "2",  "bottom", "2"
        // and has all same user clicks
        ["top_2","middle_2","bottom_2"],

//DOWN RIGHT
            //"top", "3", "middle", "3",  "bottom", "3",
            // and has all same user clicks
            ["top_3","middle_3","bottom_3"]



            ]
            /////////////
            console.log(possibleWins[0]);
            function didYouWin(e,element, index,array){

//     //I need to look through the array.
//     for( let i=0;i<possibleWins.length;i++){
//         if(allBoxes[i].classList.contains('user2_click')&&e.target[i].classList.contains(possibleWins[i])){
//             {
// console.log("Player 2 Wins");

// }

//             }
//         ///////////////////
//             }}


       return allBoxes[i].classList[i]
                
            }

let checker=(arr,target)=>target.every(allBoxes[i].includes)

console.log(possibleWins);
            // console.log(possibleWins);

///////////////end of array//////////////
           
        }

    

   allBoxes[i].addEventListener('click',whoseNext);
    }
    console.log (whoseNext);

