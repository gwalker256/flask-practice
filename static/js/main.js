function funcExample() {
    console.log("Hello World");
};

funcExample();

// let my_name = "Will"

function reallyGoodFunction (num1, num2){
    let result = num1 + num2;
    return result;
};

function taskHider () {
    let element = document.getElementById("task-box")
    element.classList.toggle("hidden")
}

function darkMode () {
    let element = document.getElementById("base-body")
    
    element.classList.toggle("dark-mode")
}