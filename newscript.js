// Grab the element from the document

let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector("#simleyDiv");
let welcomeText = document.querySelector("#welcomeText");
// let sad = document.querySelector("#sad");
let displayMood = document.querySelector("#displayMood");
let imgTag = document.querySelectorAll("img");
let btnMessage = document.querySelector("#btnMessage");
let displayMessage = document.querySelector("#displayMessage");
let sad = document.querySelector("#sad");
let happy = document.querySelector("#happy");
let stressed = document.querySelector("#stressed");




// let btnFirstName = document.getElementById("btnFirstName");

// console.log(btnFirstName);

// Add an event listener

btnFirstName.addEventListener("click",displaySecond);

//define the function

function displaySecond(){
    // alert("here");
    if(firstName.value === ""){
        errMsg.innerHTML = "Please enter your name in the box"
        errMsg.style.color = "red";
    }else{
        simleyDiv.style.display= "block";
        welcomeText.innerHTML = `Welcome ${firstName.value}. What is your mood today? `

    }
}

// sad.addEventListener("mouseover", function2);
// function function2(){
//     displayMood.innerHTML = sad.getAttribute("alt");
//     displayMood.style.color = "red";
// }

for(let i=0; i < imgTag.length; i++){

    imgTag[i].addEventListener("mouseover",() => {
        displayMood.innerHTML = imgTag[i].getAttribute("alt");

         switch (imgTag[i].getAttribute("alt")){
             case "Sad" : displayMood.style.color = "red";
             break;
             case "Stressed" : displayMood.style.color = "yellow";
             break;
             case "Happy" : displayMood.style.color = "green";
             break;

         }
        // displayMood.style.color = "red";
    });
}

btnMessage.addEventListener("click",()=>{
    if(displayMood.innerHTML === "Sad"){
        displayMessage.style.display = "block";
        displayMessage.style.color = "red";
        displayMessage.innerHTML = `You need a vacation <br/>
        <img src="./myimages/beach.jpg" alt="beach" class="beachimg">`;
    }else  if(displayMood.innerHTML === "Stressed"){
        displayMessage.style.display = "block";
        displayMessage.style.color = "yellow";
        displayMessage.innerHTML = `You need a sleep <br/>
        <img src="./myimages/sleep.jpg" alt="beach" class="beachimg">`;
    }else  if(displayMood.innerHTML === "Happy"){
        displayMessage.style.display = "block";
        displayMessage.style.color = "green";
        displayMessage.innerHTML = `Let's go a party <br/>
        <img src="./myimages/party.jpg" alt="beach" class="beachimg">`;
    }
})