var charatersArray=[];
var roomArray=[];
var weaponArray=[];
var elemetsCreated=false;
function Game (characterA,roomA,weaponA) {
    this.characterA=characterA;
    this.roomA=roomA;
    this.weaponA=weaponA;
    this.misteryEnvelope=[];
    this.randomSelector=function(arr){
        var selectedValue=arr[Math.floor(Math.random() * arr.length)];
        return selectedValue;
    }
    this.pickMistery=function() { 
        var suspect=this.randomSelector(this.characterA);
        this.misteryEnvelope.push(suspect);
        var weapon= this.randomSelector(this.weaponA);
        this.misteryEnvelope.push(weapon.name);
        room=this.randomSelector(this.roomA);
        this.misteryEnvelope.push(room.name);
       
    }

    this.createCharacters=function(){
        var allCharacters=document.getElementById("character-container");
        for(var i=0;i<this.characterA.length;i++){
            var oneCharacter=document.createElement("div");
            oneCharacter.setAttribute("class","one-character-container");
            var oneCharacterImage= document.createElement("img");
            oneCharacterImage.setAttribute("src",this.characterA[i].image);
            oneCharacterImage.setAttribute("class", "character-img" )
            oneCharacter.append(oneCharacterImage);
            var oneCharacterName=document.createElement("h3");
            oneCharacterName.innerHTML =this.characterA[i].firstName + " " + this.characterA[i].lastName;
            oneCharacter.append(oneCharacterName);
            allCharacters.append(oneCharacter);
            oneCharacterName.addEventListener("click", function() {      
                var fullName=game.misteryEnvelope[0].firstName + " " +game.misteryEnvelope[0].lastName;
               
                if(fullName == this.innerText){
               
                    alert("Thank you sir you found the killer!!")
                    }
                    else {
                alert("This person is innocent!!");
                    }
            }) 
        }
    }

    this.createWeapons =function(){
        var allWeapons=document.getElementById("weapon-container");
        for(var i=0;i<this.weaponA.length;i++){
            var oneWeapon=document.createElement("div");
            var oneWeaponName=document.createElement("h3");
            oneWeapon.appendChild(oneWeaponName);
            allWeapons.append(oneWeapon);
            oneWeapon.setAttribute("class","one-weapon-container");
            oneWeaponName.innerHTML =this.weaponA[i].name;
            oneWeapon.addEventListener("click", function() {
                if(game.misteryEnvelope[1] == this.innerText){
                    alert("This was the weapon used!")
                    }
                    else {
                alert("No this weapon looks like it was not used!");
                    }
            }) 
        }

    }

    this.createRooms = function(){
        var allRooms=document.getElementById("room-container");
        for(var i=0;i<this.roomA.length;i++){
            var oneRoom=document.createElement("div");
            var oneRoomName=document.createElement("h3");
            oneRoom.appendChild(oneRoomName);
            allRooms.append(oneRoom);
            oneRoom.setAttribute("class","one-room-container");
            oneRoomName.innerHTML =this.roomA[i].name;
            oneRoom.addEventListener("click", function() {
                if(game.misteryEnvelope[2] == this.innerText){
                    alert("They where killed in this room!")
                    }
                    else {
                alert("No. not quite it!");
                    }
            })
        }

    }


    this.revealGamer=function() {
        elemetsCreated=false;
        this.revealAwnser();
        var gameContainer= document.getElementById("game-container");
        var muderderBox= document.getElementById("murderer");
        gameContainer.style.display="none";
        muderderBox.style.display="block";
    }


    this.startGame=function(){
        this.misteryEnvelope=[];
        this.init();
    }

    this.revealMistery=function(){
        console.log(`${this.misteryEnvelope[0].firstName} ${this.misteryEnvelope[0].lastName} killed Mr.Boddy using ${this.misteryEnvelope[1]} in the ${this.misteryEnvelope[2]}`)
    }

    this.init =function(){
        var murder=document.getElementById("murderer");
        var gameContainer= document.getElementById("game-container");
        if(elemetsCreated===false){
            murder.style.display="none";
            gameContainer.style.display="block";
            elemetsCreated=true;
        }
        this.pickMistery();
        this.revealMistery();
    }

    this.revealAwnser=function(){
        var nameOfCharacter=document.getElementById("name");
        var characterImage=document.getElementById("murderer-img");
        var weaponOfChoice=document.getElementById("weapon");
        var roomOfChoice=document.getElementById("room");

        nameOfCharacter.innerHTML= game.misteryEnvelope[0].firstName + " " + game.misteryEnvelope[0].lastName;
        characterImage.setAttribute("src", this.misteryEnvelope[0].image);
        weaponOfChoice.innerHTML= game.misteryEnvelope[1];
        roomOfChoice.innerHTML=game.misteryEnvelope[2];
        
    }

}



function Suspects (firstName,lastName,color,description,age,image,occupation){
    this.firstName=firstName;
    this.lastName=lastName;
    this.color=color;
    this.description=description;
    this.age=age;
    this.image=image;
    this.occupation=occupation;
}


function Weapon (name,weight) {
    this.name=name;
    this.weight=weight;
}


function Room (name) {
    this.name=name;
}

//Suspects
var drOrchid = new Suspects("Doctor","Orchid","White","PhD in plant toxicology. Adopted daughter of Mr. Boddy","26","http://www.radiotimes.com/uploads/images/Original/111967.jpg","Scientist");
charatersArray.push(drOrchid);
var profVictor = new Suspects("Victor","Plum","purple","Billionare video game designer","22","https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg","Designer");
charatersArray.push(profVictor);
var missScarlet = new Suspects("Kassandra","Scarlet","red","She is an A-list movie star with a dark past","31","https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg","Actor");
charatersArray.push(missScarlet);
var mrsPeacock = new Suspects("Elianor","Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity","36","https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg","Socialite");
charatersArray.push(mrsPeacock)
var mrMustard = new Suspects("Jack","Mustard","yellow"," He is a former football player who tries to get by on his former glory","62"," https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg","Retired Football player");
charatersArray.push(mrMustard);



//Weapons
var rope=new Weapon("rope",10);
weaponArray.push(rope);
var knife=new Weapon("knife",8);
weaponArray.push(knife);
var candleStick= new Weapon("candleStick",2);
weaponArray.push(candleStick);
var dumbbell = new Weapon("dumbbell",30);
weaponArray.push(dumbbell);
var poision = new Weapon("poison",2);
weaponArray.push(poision);
var axe = new Weapon("axe",15);
weaponArray.push(axe);
var bat = new Weapon("bat",13);
weaponArray.push(bat);
var trophy = new Weapon("trophy", 25);
weaponArray.push(trophy);
var pistol = new Weapon("pistol",20);
weaponArray.push(pistol);


//Rooms
var dinningRoom= new Room("Dinning Room");
roomArray.push(dinningRoom);
var conservatory = new Room("Conservatory");
roomArray.push(conservatory);
var kitchen = new Room("Kitchen");
roomArray.push(kitchen);
var study= new Room ("Study");
roomArray.push(study);
var library = new Room("Library");
roomArray.push(library);
var billiardRoom= new Room("Billiard Room");
roomArray.push(billiardRoom);
var lounge = new Room("Lounge");
roomArray.push(lounge);
var ballroom= new Room ("Ballroom");
roomArray.push(ballroom);
var hall = new Room("Hall");
roomArray.push(hall);
var spa= new Room("Spa");
roomArray.push(spa);
var livingRoom= new Room( "Living Room");
roomArray.push(livingRoom);




var startButton= document.getElementById("start");
var revealButton=document.getElementById("reveal")
game =new Game(charatersArray,roomArray,weaponArray)

 startButton.addEventListener("click", function(){game.startGame()});
 revealButton.addEventListener("click",function(){game.revealGamer()});


 game.createCharacters();
 game.createWeapons();
 game.createRooms();