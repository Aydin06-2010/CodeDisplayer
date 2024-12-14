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
sidebar.style.left = "-50%";
isSidebarOpen = false;
glasspane.style.display = "none";
document.body.style.overflow = "auto"; 
}

const HtmlCode = document.getElementById("Html");
const CssCode = document.getElementById("Css");
const CactusJs = document.getElementById("CactusJs");
const DinoJs = document.getElementById("DinoJs"); 
const GroundJs = document.getElementById("GroundJs"); 
const ScriptJs = document.getElementById("ScriptJs"); 
const UpdateCustomPropertyJs = document.getElementById("UpdateCustomPropertyJs"); 
const Folder = document.getElementById("Folder");

const HtmlDiv = document.getElementById("HTMLCode");
const CssDiv = document.getElementById("CSSCode");
const CactusJsDiv = document.getElementById("CactusJSCode"); 
const DinoJsDiv = document.getElementById("DinoJSCode"); 
const GroundJsDiv = document.getElementById("GroundJSCode"); 
const ScriptJsDiv = document.getElementById("ScriptJSCode"); 
const UpdateCustomPropertyJsDiv = document.getElementById("UpdateCustomPropertyJSCode"); 

HideAllDiv();
ResetColors();


HtmlCode.onclick = function(){
SelectedFile("Html" , "HTMLCode"); 
} 


CssCode.onclick = function(){
SelectedFile("Css" , "CSSCode"); 
} 


CactusJs.onclick = function(){
SelectedFile("CactusJs" , "CactusJSCode"); 
} 

DinoJs.onclick = function(){
SelectedFile("DinoJs" , "DinoJSCode"); 
}

GroundJs.onclick = function(){
SelectedFile("GroundJs" , "GroundJSCode"); 
}

ScriptJs.onclick = function(){
SelectedFile("ScriptJs" , "ScriptJSCode"); 
}

UpdateCustomPropertyJs.onclick = function(){
SelectedFile("UpdateCustomPropertyJs" , "UpdateCustomPropertyJSCode"); 
}

Folder.onclick = function(){
OpenFolderDropDown();
}

function SelectedFile(ElementID,DivID){
HideAllDiv();
ResetColors(); 
CloseSideBar(); 
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
document.getElementById("UpdateCustomPropertyJSCode") .style.display = "none";
}

function ResetColors(){
HtmlCode.style.color = "";
CssCode.style.color = "";
CactusJs.style.color = "";
DinoJs.style.color = "";
ScriptJs.style.color = "";
GroundJs.style.color = "";
UpdateCustomPropertyJs.style.color = "";
Folder.style.color = ""; 
}

const OpenFolderImg = document.getElementById("OpenFolder");
const CloseFolderImg = document.getElementById("CloseFolder");
const FolderMenu = document.querySelector(".folder-menu"); 
let isFolderOpen = false;


function OpenFolderDropDown(){
if(isFolderOpen){
CloseFolderDropDown();
}
else{
OpenFolderImg.style.display = "block";
FolderMenu.style.display = "block";
CloseFolderImg.style.display = "none";
isFolderOpen = true;
Folder.style.color = "#72a9d5";
}
}

function CloseFolderDropDown(){
FolderMenu.style.display = "none";
OpenFolderImg.style.display = "none";
CloseFolderImg.style.display = "block";
isFolderOpen = false;
ResetColors(); 
}
    
let CurrentScreenHeight = window.innerHeight;
let CurrentScreenWidth = window.innerWidth;
    
// Define base screen dimensions for both landscape and portrait
const LandScapeScreenWidth = 1317;
const LandScapeScreenHeight = 568; //568

const PortraitScreenWidth = 823;
const PortraitScreenHeight = 1062; //1062

function CalculateScaleFactors(){
// Get current screen dimensions

// Calculate the aspect ratio for current and base screens
let BaseScreenWidth, BaseScreenHeight;

if(CurrentScreenWidth > CurrentScreenHeight){ // Landscape orientation
BaseScreenWidth = LandScapeScreenWidth;
BaseScreenHeight = LandScapeScreenHeight;
} else { // Portrait orientation
BaseScreenWidth = PortraitScreenWidth;
BaseScreenHeight = PortraitScreenHeight;
}

// Calculate the aspect ratios
const currentAspectRatio = CurrentScreenWidth / CurrentScreenHeight;
const baseAspectRatio = BaseScreenWidth / BaseScreenHeight;

// Calculate scale factor based on the aspect ratio
const scaleFactor = currentAspectRatio / baseAspectRatio;

// Apply scaling to elements
const styles = {
ContentCodeEditor: {
marginTop: 85 * scaleFactor,
marginLeft: 50 * scaleFactor,
},
firstCode: {
maxHeight: 500 * scaleFactor,
},
RunImage: {
width: 15 * scaleFactor,
},
Run: {
paddingTop: 10 * scaleFactor,
paddingBottom: 10 * scaleFactor,
paddingLeft: 20 * scaleFactor,
paddingRight: 20 * scaleFactor,
fontSize: 20 * scaleFactor,
borderRadius: 15 * scaleFactor,
},
TopDiv: {
height: 70 * scaleFactor,
paddingLeft: 15 * scaleFactor,
paddingRight: 15 * scaleFactor,
},
pre: {
minWidth: 1000 * scaleFactor,
},
consoleTitle: {
height: 70 * scaleFactor,
padding: 10 * scaleFactor,
fontSize: 25 * scaleFactor,
},
consoleButton: {
marginTop: 5 * scaleFactor,
marginBottom: 5 * scaleFactor,
marginLeft: 20 * scaleFactor,
marginRight: 20 * scaleFactor,
paddingTop: 10 * scaleFactor,
paddingBottom: 10 * scaleFactor,
paddingLeft: 25 * scaleFactor,
paddingRight: 25 * scaleFactor,
fontSize: 20 * scaleFactor,
borderRadius: 15 * scaleFactor,
},
WindowOutput: {
height: 350 * scaleFactor,
},
};
    // Apply the styles dynamically
for (let elementId in styles) {
const element = document.getElementById(elementId);
if (element) {
const style = styles[elementId];
for (let property in style) {
element.style[property] = `${style[property]}px`;
}
}
}
}

function UpdateScreenDimensions() {
currentScreenWidth = window.innerWidth;
currentScreenHeight = window.innerHeight;
CalculateScaleFactors();
}   

CalculateScaleFactors();
let resizeTimeout; // Variable to track the debounce timer

// Debounced resize/orientationchange handler
function handleResize() {
clearTimeout(resizeTimeout); // Clear any previously set timeout
resizeTimeout = setTimeout(() => {
UpdateScreenDimensions(); // Call the function after a delay
}, 200); // Delay of 200ms
}
// Add event listeners
window.addEventListener("resize", handleResize);
window.addEventListener("orientationchange", handleResize); 
