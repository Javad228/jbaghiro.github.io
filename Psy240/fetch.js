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
    "  \"query\": \"You are walking through the forest when suddenly you hear a loud growl. You turn around and see a massive grizzly bear charging towards you. You panic, but you remember seeing two pathways ahead of you. You quickly decide to take your chances and choose one of the paths.\",\n" +
    "  \"children\": [\n" +
    "    {\n" +
    "      \"name\": \"Go left\",\n" +
    "      \"query\": \"You come across two doors. One on the left and one on the right. You don't have time to check both. The left door has a skull drawn on it, while the right one is plain. You take a deep breath and consider your options. After a moment of contemplation, you decide to go ...\",\n" +
    "\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Open the left door.\",\n" +
    "          \"query\": \"You reach for the doorknob, turn it, but the door is locked. Suddenly, you hear the bear's growls getting closer and closer. You frantically try to open the door, but it's too late. The bear catches up to you, and you lose.\",\n" +
    "\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "          \"name\": \"Open the right door\",\n" +
    "          \"query\": \"You reach for the doorknob, turn it, but the door is locked. Suddenly, you hear the bear's growls getting closer and closer. You frantically try to open the door, but it's too late. The bear catches up to you, and you lose.\",\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "      \"name\": \"Go right\",\n" +
    "      \"query\": \"You come across two doors. One on the left and one on the right. You don't have time to check both. The left door has a skull drawn on it, while the right one is plain. You take a deep breath and consider your options. After a moment of contemplation, you decide to go ...\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Open the left door\",\n" +
    "          \"query\": \"You reach for the doorknob, turn it, but the door is locked. Suddenly, you hear the bear's growls getting closer and closer. You frantically try to open the door, but it's too late. The bear catches up to you, and you lose.\",\n" +
    "\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "          \"name\": \"Open the right door\",\n" +
    "          \"query\": \"You reach for the doorknob, turn it, but the door is locked. Suddenly, you hear the bear's growls getting closer and closer. You frantically try to open the door, but it's too late. The bear catches up to you, and you lose.\",\n" +
    "\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Continue\",\n" +
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
    "              \"query\": \"As you lie there, defeated, you wonder if you could have predicted this outcome. Did you know deep down in your gut that the door you chose was a bad option? a bad choice?\",\n" +
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
        if (obj.name === "Yes" || obj.name === "No") {
            document.location.href = "HindsightInfo.html";
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
        if (obj.name === "Yes" || obj.name === "No") {
            document.location.href = "HindsightInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40)
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
