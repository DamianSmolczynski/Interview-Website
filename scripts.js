document.getElementById("edgar").addEventListener("click", function(){
document.querySelector("#edgar-modal").style.display = "flex";});
    document.querySelector("#edgarExit").addEventListener("click", () =>{
    document.querySelector("#edgar-modal").style.display = "none";});


document.getElementById("mae").addEventListener("click", function(){
document.querySelector("#mae-modal").style.display = "flex";});
    document.querySelector("#maeExit").addEventListener("click", () =>{
    document.querySelector("#mae-modal").style.display = "none";});

document.getElementById("david").addEventListener("click", function(){
document.querySelector("#david-modal").style.display = "flex";});
    document.querySelector("#davidExit").addEventListener("click", () =>{
    document.querySelector("#david-modal").style.display = "none";});
    


document.getElementById("frederic").addEventListener("click", function(){
document.querySelector("#frederic-modal").style.display = "flex";});
    document.querySelector("#fredericExit").addEventListener("click", () =>{
    document.querySelector("#frederic-modal").style.display = "none";});


document.querySelector(".film").addEventListener("click", function(){
document.querySelector("#video-modal").style.display = "flex";
document.querySelector(".fixed-social-media").style.display = "none";
document.querySelector("#fixFb").style.display = "none";});    

document.querySelector("#video-modal").addEventListener("click", () =>{
    document.querySelector("#video-modal").style.display = "none";
    document.querySelector(".fixed-social-media").style.display = "flex";
    document.querySelector("#fixFb").style.display = "flex";
});
    





