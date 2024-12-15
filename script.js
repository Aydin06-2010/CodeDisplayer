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

/*// Calculate the aspect ratios
const currentAspectRatio = CurrentScreenWidth / CurrentScreenHeight;
const baseAspectRatio = BaseScreenWidth / BaseScreenHeight;

// Calculate scale factor based on the aspect ratio
const scaleFactor = currentAspectRatio / baseAspectRatio;

// Apply scaling to elements
/*const styles = {
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


const styles = {
  DinoGameCode: {
    top: 125 * scaleFactor,
    paddingTop: 30 * scaleFactor,
    paddingBottom: 30 * scaleFactor,
  },
  FileTabContainer: {
    width: 1122 * scaleFactor,
  },
  PreTags: {
    width: 1090 * scaleFactor,
  },
  FileTab: {
    fontSize: 25 * scaleFactor,
    padding: 15 * scaleFactor,
    gap: 10 * scaleFactor,
    borderRadius: 15 * scaleFactor,
  },
  TabImg: {
    width: 25 * scaleFactor,
  },
  Imgs: {
    width: 17 * scaleFactor,
  },
  Logos: {
    width: 20 * scaleFactor,
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
  sidebar: {
    width: 400 * scaleFactor,
  },
  sidebarMenuLi: {
    marginTop: 15 * scaleFactor,
    marginBottom: 15 * scaleFactor,
    marginLeft: 25 * scaleFactor,
    marginRight: 25 * scaleFactor,
    gap: 10 * scaleFactor,
  },
  Html: {
    marginTop: 40 * scaleFactor,
  },
  TopDiv: {
    height: 70 * scaleFactor,
    paddingLeft: 15 * scaleFactor,
    paddingRight: 15 * scaleFactor,
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
  GroundImg: {
    width: 1000 * scaleFactor,
  },
  folderImgs: {
    width: 250 * scaleFactor,
  },
};*/


const styles = {
    DinoGameCode: {
        top: `${125 * ScaleHeight}px`,
        padding: `${30 * ScaleHeight}px 0`,
    },
    FileTabContainer: {
        width: `${782 * ScaleWidth}px`,
    },
    PreTags: {
        width: `${750 * ScaleWidth}px`,
    },
    UsefulBtns: {
        padding: `${10 * ScaleHeight}px ${25 * ScaleWidth}px`,
    },
    FileTab: {
        borderRadius: `${15 * ScaleWidth}px`,
        fontSize: `${25 * ScaleFont}px`,
        padding: `${15 * ScaleHeight}px`,
        gap: `${10 * ScaleWidth}px`,
    },
    TabImg: {
        width: `${25 * ScaleWidth}px`,
    },
    Imgs: {
        width: `${17 * ScaleWidth}px`,
    },
    Logos: {
        width: `${20 * ScaleWidth}px`,
    },
    RunImage: {
        width: `${15 * ScaleWidth}px`,
    },
    Run: {
        padding: `${10 * ScaleHeight}px ${20 * ScaleWidth}px`,
        fontSize: `${20 * ScaleFont}px`,
        borderRadius: `${15 * ScaleWidth}px`,
    },
    sidebar: {
        width: `${400 * ScaleWidth}px`,
    },
    sidebarMenu: {
        fontSize: `${20 * ScaleFont}px`,
    },
    sidebarMenuItem: {
        margin: `${15 * ScaleHeight}px ${25 * ScaleWidth}px`,
        gap: `${10 * ScaleWidth}px`,
    },
    TopDiv: {
        height: `${70 * ScaleHeight}px`,
        padding: `0 ${15 * ScaleWidth}px`,
    },
    consoleTitle: {
        height: `${70 * ScaleHeight}px`,
        fontSize: `${25 * ScaleFont}px`,
    },
    consoleButton: {
        margin: `${5 * ScaleHeight}px ${20 * ScaleWidth}px`,
        padding: `${10 * ScaleHeight}px ${25 * ScaleWidth}px`,
        fontSize: `${20 * ScaleFont}px`,
        borderRadius: `${15 * ScaleWidth}px`,
    },
    GroundImg: {
        width: `${1000 * ScaleWidth}px`,
    },
    folderImgs: {
        width: `${250 * ScaleWidth}px`,
    },
};

    
    // Apply the styles dynamically
for (let elementId in styles) {
const element = document.getElementById(elementId);
if (element) {
const style = styles[elementId];
for (let property in style) {
element.style[property] = `${style[property]}`;
}
}
}
console.log(styles);
}

/*function UpdateScreenDimensions() {
currentScreenWidth = window.innerWidth;
currentScreenHeight = window.innerHeight;
CalculateScaleFactors();
}*/

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
