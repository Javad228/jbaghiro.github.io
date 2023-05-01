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
    "  \"query\": \"You are stranded on an abandoned island with limited supplies and no means of escape. Your objective is to survive for as long as possible until help arrives. However, the island is not as deserted as you thought.\",\n" +
    "  \"children\": [\n" +
    "    {\n" +
    "      \"name\": \"Continue\",\n" +
    "      \"query\": \"You make your way to the beach and start searching for supplies. You find a few useful items, but you also encounter a group of survivors. You have two options: try to make contact or avoid them.\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Try to make contact\",\n" +
    "          \"query\": \"You try to make contact with the survivors, but they're not interested in talking. They attack you, and you're forced to flee. You feel betrayed and frustrated that you couldn't make a connection.\",\n" +
    "\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            }\n" +
    "          ]\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"Avoid them\",\n" +
    "          \"query\": \"They notice you sneaking away from them and attack you. You feel betrayed and frustrated that you couldn't make a connection.\",\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            }\n" +
    "          ]\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"Continue\",\n" +
    "      \"query\": \"You make your way to the beach and start searching for supplies. You find a few useful items, but you also encounter a group of survivors. You have two options: try to make contact or avoid them.\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Make contact\",\n" +
    "          \"query\": \"You try to make contact with the survivors, but they're not interested in talking. They attack you, and you're forced to flee. You feel betrayed and frustrated that you couldn't make a connection.\",\n" +
    "\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            }\n" +
    "          ]\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"Avoid\",\n" +
    "          \"query\": \"They notice you sneaking away from them and attack you. You feel betrayed and frustrated that you couldn't make a connection.\",\n" +
    "\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"Later on you meet a new group of survivors. They seem friendlier and want to make contact with you. However they ask that you share your food with them and start living with them immediately. Do you accept?\",\n" +
    "\n" +
    "              \"children\": [\n" +
    "                {\n" +
    "                  \"name\": \"Yes\"\n" +
    "                },\n" +
    "                {\n" +
    "                  \"name\": \"No\"\n" +
    "                }\n" +
    "              ]\n" +
    "            }\n" +
    "          ]\n" +
    "        }\n" +
    "      ]\n" +
    "    }\n" +
    "  ]\n" +
    "}\n";

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
        if(obj.name ==="Yes"){
            document.location.href = "AvoidantInfo.html";
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
        if (obj.name === "No") {
            document.location.href = "AvoidantInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40)
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
