var going = false;
function printLetterByLetter(destination, message, speed){
    var i = 0;
    going = true;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            going = false;
            clearInterval(interval);
        }
    }, speed);
}

var json = "{\n" +
    "  \"query\": \"Do you think that you lost due to unfairness of the game or your own lack of ability/perception\",\n" +
    "  \"children\": [\n" +
    "    {\n" +
    "      \"name\": \"My lack of ability\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"Unfairness, There was no way to win\"\n" +
    "    }\n" +
    "  ]\n" +
    "}"

// Converting JSON-encoded string to JS object
var obj = JSON.parse(json);
var string = obj.name + "";
// console.log(obj.name.toString().includes("grandchild"))

string = obj.name + "";
console.log(obj.query)
// document.getElementById("debug").innerHTML = obj.query + '';

printLetterByLetter("debug",obj.query + "",40)
document.getElementById("debug").innerHTML = "";


document.getElementById("ma1").innerText = obj.children[0].name;
document.getElementById("work").innerHTML = obj.children[0].name;
document.getElementById("ma2").innerHTML = obj.children[1].name;
document.getElementById("work1").innerHTML = obj.children[1].name;

document.getElementById('work').onclick = function () {
    if(going===false) {
        obj = obj.children[0];
        if(obj.name === "My lack of ability" || obj.name === "Unfairness, There was no way to win"){
            document.location.href = "SelfServingInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40);
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
document.getElementById('work1').onclick = function () {
    if(going===false) {
        obj = obj.children[1];
        if (obj.name === "My lack of ability" || obj.name === "Unfairness, There was no way to win") {
            document.location.href = "SelfServingInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40)
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
