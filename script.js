const WindowOutputiframe = document.getElementById("WindowOutput");
const OpenConsoleBtn = document.getElementById("Run"); 
const CloseConsoleBtn = document.querySelector(".console-button"); 
const Console = document.querySelector(".console-overlay");
const CurrentHeight = window.innerHeight;
let isConsoleOpen = false;

window.onload= function(){
WindowOutputiframe.focus();
}

OpenConsoleBtn.onclick = OpenConsole;
CloseConsoleBtn.onclick = CloseConsole;

function OpenConsole(){
if(isConsoleOpen){
CloseConsole();
}
else {
Console.style.display = "block"; 
isConsoleOpen = true;
if(isSidebarOpen){
CloseSideBar(); 
} 
}
}

function CloseConsole(){
Console.style.display = "none";
isConsoleOpen = false;
}

// Disable right-click for all images on the page
function disableRightClickForAllImages() {
const images = document.querySelectorAll("img");
images.forEach(image => {
image.addEventListener("contextmenu", function(event) {
event.preventDefault();
});
});
}

// Call the function
disableRightClickForAllImages();

const menuBtn = document.getElementById("Menu");
const sidebar = document.getElementById("Sidebar");
const glasspane = document.getElementById("glasspane"); 

let isSidebarOpen = false; // Track sidebar state

menuBtn.onclick = OpenSideBar; 

glasspane.addEventListener('click', function(event){
if(!sidebar.contains(event.target)){
CloseSideBar(); 
}
}); 
    
function OpenSideBar() {
if (isSidebarOpen) {
// Close sidebar
CloseSideBar();
} else {
// Open sidebar
sidebar.style.left = "0";
isSidebarOpen = true;
glasspane.style.display = "block";
document.body.style.overflow = "hidden";
if(isConsoleOpen){
CloseConsole(); 
} 
}
};

function CloseSideBar(){
sidebar.style.left = "-100%";
isSidebarOpen = false;
glasspane.style.display = "none";
document.body.style.overflow = "auto"; 
//CloseFolder();
}

const HtmlCode = document.getElementById("Html");
const CssCode = document.getElementById("Css");
const CactusJs = document.getElementById("CactusJs");
const DinoJs = document.getElementById("DinoJs"); 
const GroundJs = document.getElementById("GroundJs"); 
const ScriptJs = document.getElementById("ScriptJs"); 
const UpdateCustomPropertyJs = document.getElementById("UpdateCustomPropertyJs"); 
const Folder = document.getElementById("Folder");
const CactusFile = document.getElementById("CactusFile"); 
const DinoLoseFile = document.getElementById("DinoLoseFile"); 
const DinoRun0File = document.getElementById("DinoRun0File"); 
const DinoRun1File = document.getElementById("DinoRun1File"); 
const DinoStationaryFile = document.getElementById("DinoStationaryFile"); 
const GroundFile = document.getElementById("GroundFile");

const HomeBtn = document.getElementById("Home"); 

HideAllDiv();
ResetColors();

document.getElementById("HomeDiv").style.display = "flex";

HomeBtn.onclick = function(){
HideAllDiv();
CloseSideBar(); 
document.getElementById("HomeDiv").style.display = "flex"; 
} 


HtmlCode.onclick = function(){
SelectedFile("Html" , "HTMLCode" , false); 
} 


CssCode.onclick = function(){
SelectedFile("Css" , "CSSCode" , false);
} 


CactusJs.onclick = function(){
SelectedFile("CactusJs" , "CactusJSCode" , false);
} 

DinoJs.onclick = function(){
SelectedFile("DinoJs" , "DinoJSCode" , false);
}

GroundJs.onclick = function(){
SelectedFile("GroundJs" , "GroundJSCode" , false); 
}

ScriptJs.onclick = function(){
SelectedFile("ScriptJs" , "ScriptJSCode" , false);
}

UpdateCustomPropertyJs.onclick = function(){
SelectedFile("UpdateCustomPropertyJs" , "UpdateCustomPropertyJSCode" , false);
}

Folder.onclick = function(){
OpenFolderDropDown();
}

CactusFile.onclick = function(){
SelectedFile("CactusFile" , "CactusDiv" , true); 
}

DinoLoseFile.onclick = function(){
SelectedFile("DinoLoseFile" , "DinoLoseDiv" , true); 
}


DinoRun0File.onclick = function(){
SelectedFile("DinoRun0File" , "DinoRun0Div" , true); 
}

DinoRun1File.onclick = function(){
SelectedFile("DinoRun1File" , "DinoRun1Div" , true); 
}

DinoStationaryFile.onclick = function(){
SelectedFile("DinoStationaryFile" , "DinoStationaryDiv" , true); 
}

GroundFile.onclick = function(){
SelectedFile("GroundFile" , "GroundDiv" , true); 
}

function SelectedFile(ElementID,DivID,isFolderChild){
if(isFolderChild){
FolderChild();
}
else{
NotFolderChild();
}
const Element = document.getElementById(ElementID);
const DivElement = document.getElementById(DivID); 
DivElement.style.display = "flex";
Element.style.color = "#72a9d5"; 
}

function HideAllDiv(){
document.getElementById("HTMLCode").style.display = "none";
document.getElementById("CSSCode").style.display = "none";
document.getElementById("CactusJSCode").style.display = "none";
document.getElementById("DinoJSCode").style.display = "none";
document.getElementById("GroundJSCode").style.display = "none";
document.getElementById("ScriptJSCode").style.display = "none";
document.getElementById("UpdateCustomPropertyJSCode").style.display = "none";
document.getElementById("CactusDiv").style.display = "none";
document.getElementById("DinoLoseDiv").style.display = "none";
document.getElementById("DinoRun0Div").style.display = "none";
document.getElementById("DinoRun1Div").style.display = "none";
document.getElementById("DinoStationaryDiv").style.display = "none";
document.getElementById("GroundDiv").style.display = "none";
document.getElementById("HomeDiv").style.display = "none"; 
}

function ResetColors(){
HtmlCode.style.color = "";
CssCode.style.color = "";
CactusJs.style.color = "";
DinoJs.style.color = "";
ScriptJs.style.color = "";
GroundJs.style.color = "";
UpdateCustomPropertyJs.style.color = "";
CactusFile.style.color = "";
DinoLoseFile.style.color = "";
DinoRun0File.style.color = "";
DinoRun1File.style.color = "";
DinoStationaryFile.style.color = "";
GroundFile.style.color = "";
}

function NotFolderChild(){
HideAllDiv();
ResetColors();
CloseSideBar();
CloseFolderDropDown();
}

function FolderChild(){
HideAllDiv();
ResetColors();
CloseSideBar();
}

const OpenFolderImg = document.getElementById("OpenFolder");
const CloseFolderImg = document.getElementById("CloseFolder");
const FolderMenu = document.querySelector(".folder-menu"); 
let isFolderOpen = false;


function OpenFolderDropDown(){
if(isFolderOpen){
CloseFolderDropDown();
}
else {
OpenFolderImg.style.display = "block";
FolderMenu.style.display = "block";
CloseFolderImg.style.display = "none";
isFolderOpen = true;
Folder.style.color = "#72d582";
}
}

function CloseFolderDropDown(){
FolderMenu.style.display = "none";
OpenFolderImg.style.display = "none";
CloseFolderImg.style.display = "block";
isFolderOpen = false;
ResetColors(); 
Folder.style.color = "";  
}

// Set the event date in UTC format
const eventDateUTC = new Date(Date.UTC(2024, 11, 16, 1, 0, 0)); // new Date("2024-12-16T07:00:00+06:00").getTime();
// Note: Month is 0-indexed, so 11 = December

function updateCountdown() {
// Get the current UTC time
const nowUTC = new Date().getTime();
const distance = eventDateUTC - nowUTC;

if (distance <= 0) {
HideTimerDiv(); 
clearInterval(interval);
return;
}
else if(distance > 0){
ShowTimerDiv(); 
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").textContent = `Time Left Till Event: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
const interval = setInterval(updateCountdown, 10);

function HideTimerDiv(){
document.getElementById("TimerDiv").style.display = "none";
document.body.pointerEvents = "auto";
}

function ShowTimerDiv(){
document.getElementById("TimerDiv").style.display = "flex";
document.body.pointerEvents = "none";
}


function getLocalTime() {
const now = new Date();

// Get hours, minutes, and seconds
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

// Add leading zeros to single-digit numbers (e.g., 08 instead of 8)
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;

// Return the time in hh:mm:ss format
return `${hours}:${minutes}:${seconds}`;
}

// Function to update the Time element
function updateTime() {
document.getElementById("Time").textContent = ` Local Time: ${getLocalTime()}`;
}

// Update the time every second
setInterval(updateTime, 10);
