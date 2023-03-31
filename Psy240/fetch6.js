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
    "  \"query\": \"Assume you are preparing a speech. Do you think your performance depends on the amount of people watching? Do you think you will perform better if there was no one there?\",\n" +
    "  \"children\": [\n" +
    "    {\n" +
    "      \"name\": \"Yes. I do worse when people are watching\",\n" +
    "      \"query\": \"What if those people were blindfolded and wore headphones? Would that make it better?\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Yes it would\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"No it would still be stressful\"\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"No. I perform better under stress.\",\n" +
    "      \"query\": \"What if an expert speaker was evaluating your performance? Would that affect your performance?\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"My performance would be worse\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"My performance would be better or wouldn't change\"\n" +
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
        if(obj.name === "Yes it would" || obj.name === "No it would still be stressful"|| obj.name ==="My performance would be worse"|| obj.name ==="My performance would be better or wouldn't change"){
            document.location.href = "EvalInfo.html";
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
        if (obj.name === "Yes it would" || obj.name === "No it would still be stressful"|| obj.name ==="My performance would be worse"|| obj.name ==="My performance would be better or wouldn't change") {
            document.location.href = "EvalInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40)
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
