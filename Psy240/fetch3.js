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
    "  \"query\": \"You were miraculously saved from the grasps of the grizzly bear. You can now choose to end its life which will prevent it from harming anyone else on the densely populated hiking trail or you can do nothing.\",\n" +
    "  \"children\": [\n" +
    "    {\n" +
    "      \"name\": \"End the life of the bear\",\n" +
    "      \"query\": \"How easily did you make this choice?\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Very easily\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"Not easily\"\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"Do nothing\",\n" +
    "      \"query\": \"How easily did you make this choice?\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Very easily\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"Not easily\"\n" +
    "        }\n" +
    "      ]\n" +
    "    }\n" +
    "  ]\n" +
    "}\n"

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
        if(obj.name === "Very easily" || obj.name === "Not easily"){
            document.location.href = "DissonanceInfo.html";
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
        if (obj.name === "Very easily" || obj.name === "Not easily") {
            document.location.href = "DissonanceInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40)
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
