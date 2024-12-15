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
console.log(isFolderChild);
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

// Define base screen dimensions for both landscape and portrait
const LandScapeScreenWidth = 1317;
const LandScapeScreenHeight = 568; //568

const PortraitScreenWidth = 823;
const PortraitScreenHeight = 1062; //1062

function CalculateScaleFactors(){
// Get current screen dimensions
let CurrentScreenHeight = window.innerHeight;
let CurrentScreenWidth = window.innerWidth;

// Calculate the aspect ratio for current and base screens
let BaseScreenWidth, BaseScreenHeight;

if(CurrentScreenWidth > CurrentScreenHeight){ // Landscape orientation
BaseScreenWidth = LandScapeScreenWidth;
BaseScreenHeight = LandScapeScreenHeight;
} else { // Portrait orientation
BaseScreenWidth = PortraitScreenWidth;
BaseScreenHeight = PortraitScreenHeight;
}

const ScaleWidth = CurrentScreenWidth / BaseScreenWidth;
const ScaleHeight = CurrentScreenHeight/ BaseScreenHeight;

const ScaleFont = (CurrentScreenWidth > CurrentScreenHeight) ? ScaleWidth : ScaleHeight; 

// Apply styles to Window Output iframe
document.getElementById("WindowOutput").style.height = 350 * ScaleHeight + "px";

// Apply styles to Console Title
document.querySelector(".console-title").style.height = 70 * ScaleHeight + "px";
document.querySelector(".console-title").style.padding = 10 * ScaleHeight + "px";
document.querySelector(".console-title").style.fontSize = 25 * ScaleWidth + "px";

// Apply styles to Console Button
document.querySelector(".console-button").style.marginTop = 5 * ScaleHeight + "px";
document.querySelector(".console-button").style.marginBottom = 5 * ScaleHeight + "px";
document.querySelector(".console-button").style.marginLeft = 20 * ScaleWidth + "px";
document.querySelector(".console-button").style.marginRight = 20 * ScaleWidth + "px";
document.querySelector(".console-button").style.paddingTop = 10 * ScaleHeight + "px";
document.querySelector(".console-button").style.paddingBottom = 10 * ScaleHeight + "px";
document.querySelector(".console-button").style.paddingLeft = 25 * ScaleWidth + "px";
document.querySelector(".console-button").style.paddingRight = 25 * ScaleWidth + "px";
document.querySelector(".console-button").style.fontSize = 20 * ScaleWidth + "px";
document.querySelector(".console-button").style.borderRadius = 15 * ScaleHeight + "px";

// Apply styles to Run Button
document.getElementById("Run").style.paddingTop = 10 * ScaleHeight + "px";
document.getElementById("Run").style.paddingBottom = 10 * ScaleHeight + "px";
document.getElementById("Run").style.paddingLeft = 20 * ScaleWidth + "px";
document.getElementById("Run").style.paddingRight = 20 * ScaleWidth + "px";
document.getElementById("Run").style.fontSize = 20 * ScaleWidth + "px";
document.getElementById("Run").style.borderRadius = 15 * ScaleHeight + "px";

// Apply styles to File Tab Container
document.querySelectorAll(".FileTabContainer").forEach(function(item){ 
item.style.width = 782 * ScaleWidth + "px";
});
// Apply styles to PreTags
document.querySelectorAll(".PreTags").forEach(function(item){ 
item.style.width = 750 * ScaleWidth + "px";
});
// Apply styles to Useful Buttons
document.querySelectorAll(".UsefulBtns").forEach(function(button) {
    button.style.padding = 10 * ScaleHeight + "px";
});

// Apply styles to File Tab
document.querySelectorAll(".FileTab").forEach(function(item){ 
item.style.fontSize = 25 * ScaleWidth + "px";
item.style.padding = 15 * ScaleHeight + "px";
item.style.gap = 10 * ScaleHeight + "px";
item.style.borderRadius = 15 * ScaleHeight + "px";
});


// Apply styles to Tab Image
document.querySelector(".TabImg").style.width = 25 * ScaleWidth + "px";

// Apply styles to Imgs
document.querySelectorAll(".Imgs").forEach(function(item){ 
item.style.width = 17 * ScaleWidth + "px";
});
// Apply styles to Logos
document.querySelectorAll(".Logos").forEach(function(item){ 
item.style.width = 20 * ScaleWidth + "px"; 
});

// Apply styles to Run Image
document.getElementById("RunImage").style.width = 15 * ScaleWidth + "px";

// Apply styles to Sidebar
document.querySelector(".sidebar").style.width = 400 * ScaleWidth + "px";

// Apply styles to Sidebar Menu List Item
document.querySelectorAll(".sidebar-menu li").forEach(function(item) {
    item.style.marginTop = 15 * ScaleHeight + "px";
    item.style.marginBottom = 15 * ScaleHeight + "px";
    item.style.marginLeft = 25 * ScaleWidth + "px";
    item.style.marginRight = 25 * ScaleWidth + "px";
    item.style.gap = 10 * ScaleHeight + "px";
    item.style.fontSize = 25 * ScaleWidth + "px";
});

// Apply styles to Html
document.getElementById("Html").style.marginTop = 40 * ScaleHeight + "px";

// Apply styles to Top Div
document.querySelector(".TopDiv").style.height = 70 * ScaleHeight + "px";
document.querySelector(".TopDiv").style.paddingLeft = 15 * ScaleWidth + "px";
document.querySelector(".TopDiv").style.paddingRight = 15 * ScaleWidth + "px";

// Apply styles to Folder Menu
document.querySelector(".folder-menu").style.marginLeft = 30 * ScaleWidth + "px";  // Kept as is

// Apply styles to Ground Image
document.getElementById("GroundImg").style.width = 1000 * ScaleWidth + "px";  // Kept as is

// Apply styles to Folder Images
document.querySelectorAll(".folder-imgs").forEach(function(item){
item.style.width = 250 * ScaleWidth + "px"; 
}); // Kept as is
}

console.log(document.querySelectorAll(".sidebar-menu li").length);

CalculateScaleFactors();
let resizeTimeout; // Variable to track the debounce timer

// Debounced resize/orientationchange handler
function handleResize() {
clearTimeout(resizeTimeout); // Clear any previously set timeout
resizeTimeout = setTimeout(() => {
CalculateScaleFactors(); // Call the function after a delay
}, 200); // Delay of 200ms
}
// Add event listeners
window.addEventListener("resize", handleResize);
//window.addEventListener("orientationchange", handleResize); 
