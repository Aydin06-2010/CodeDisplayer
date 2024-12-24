const root = document.documentElement; // Reference to the :root (CSS variables)
root.style.setProperty("--scroll-width", document.documentElement.scrollWidth + "px");
root.style.setProperty("--scroll-height", document.documentElement.scrollHeight + "px");
// Define base screen dimensions for both landscape and portrait
const LandScapeScreenWidth = 1317;
const LandScapeScreenHeight = 655; //568

const PortraitScreenWidth = 823;
const PortraitScreenHeight = 1149; //1062

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
item.style.width = 776 * ScaleWidth + "px";
});
// Apply styles to PreTags
document.querySelectorAll(".PreTags").forEach(function(item){ 
item.style.width = 700 * ScaleWidth + "px";
item.style.fontSize = 20 * ScaleWidth + "px";
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
document.querySelectorAll(".TabImg").forEach(function(item){ 
item.style.width = 25 * ScaleWidth + "px";
});

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

document.querySelector(".sidebar-menu").style.maxHeight = 720 * ScaleHeight + "px";

// Apply styles to Sidebar Menu List Item
document.querySelectorAll(".sidebar-menu li").forEach(function(item) {
    item.style.marginTop = 15 * ScaleHeight + "px";
    item.style.marginLeft = 25 * ScaleWidth + "px";
    item.style.marginRight = 25 * ScaleWidth + "px";
    item.style.gap = 10 * ScaleHeight + "px";
    item.style.fontSize = 23 * ScaleWidth + "px";
});

document.querySelectorAll(".sidebar-menu li:not(:nth-child(8))").forEach(function(item){
    item.style.marginBottom = 15 * ScaleHeight + "px";
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
