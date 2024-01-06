let saveEl=document.getElementById("save-el")
let countEl=document.getElementById("count")

 console.log(countEl)

 let count= 0

 function increament(){

//  console.log("Clicked")
 count+= 1
 countEl.innerText = count
 
 }

 function save(){

    let countStr = count + " -  "
    saveEl.innerText+=countStr
    console.log(count)
    countEl.innerText = 0
    count=0

 }
 
save()







//  var username = prompt("Please enter your username:");
//  let messageToUser = message + ", " + username + "!"
//  console.log(messageToUser)





 