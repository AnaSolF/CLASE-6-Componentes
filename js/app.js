///////////////////////////////
/// Importar funciones o clases
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";

/////////////////////////////////////////////
//// datos
let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];
let inputArray = ["Username", "Surname", "E-mail", "Password"];
let inputArrayFiltered = inputArray.filter( element => element=="Password");
///////////////////////////////////////////


//////////////////////////////////////////////
// Funciones
//////////////////////////////////////////
function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "none"

    switch (type) {
        case "Password":
            input_type = "password"
            break;
        case "E-mail":
            input_type = "email";
            break;
        default:
            input_type = "text"
            break;
    }

    let myInput = new Input("app", input_type);
    myInput.render();
}
///////////////////////////
////////////////////////////////////
////////////////////////////////////
// Logica de App
mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});

function renderVideo() {
    let myVideo = new Video("video", "https://pluto.tv/es/live-tv/pluto-tv-cine-estelar-1?utm_source=Google&utm_medium=PaidSearch&utm_campaign=1002017&utm_content=10008200&gclid=Cj0KCQjwwtWgBhDhARIsAEMcxeA7jw7qyufm-VgwgtxduWfxfOyD_C6AoBmn7AxystU4PTQhvHNWtI4aAkS_EALw_wcB", "1000px", "800px"); 
    myVideo.render();
}

renderVideo()