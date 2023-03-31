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
    "  \"query\": \"You are a member of a small community that has been divided into two groups - the Reds and the Blues. The community has been split for years due to a long-standing feud between the two groups. You have always identified as a proud member of the Reds.\",\n" +
    "  \"children\": [\n" +
    "    {\n" +
    "      \"name\": \"Continue\",\n" +
    "      \"query\": \"You overhear a group of Blues talking about an upcoming community event. They mention that they have a great idea for a fundraiser that could benefit both groups. You know that the Reds are struggling financially and could really use the money. Do you:\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Tell the Reds about the Blue's idea and suggest that they work together on the fundraiser.\",\n" +
    "          \"query\": \"You are at a community meeting where a heated discussion is taking place between the Reds and the Blues. The Reds are advocating for a new community center to be built on their side of town, while the Blues are pushing for a more centralized location that would benefit both groups. Do you:\",\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Support the Reds and argue that the community center should be built on their side of town.\"\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Suggest a compromise where the community center is built in a more central location that benefits both groups. \"\n" +
    "            }\n" +
    "          ]\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"Keep the information to yourself, thinking that it's better for the Reds to handle things on \",\n" +
    "          \"query\": \"You are at a community meeting where a heated discussion is taking place between the Reds and the Blues. The Reds are advocating for a new community center to be built on their side of town, while the Blues are pushing for a more centralized location that would benefit both groups. Do you:\",\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Support the Reds and argue that the community center should be built on their side of town.\"\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Suggest a compromise where the community center is built in a more central location that benefits both groups. \"\n" +
    "            }\n" +
    "          ]\n" +
    "        }\n" +
    "      ]\n" +
    "    },\n" +
    "    {\n" +
    "      \"name\": \"Continue\",\n" +
    "      \"query\": \"You overhear a group of Blues talking about an upcoming community event. They mention that they have a great idea for a fundraiser that could benefit both groups. You know that the Reds are struggling financially and could really use the money. Do you:\",\n" +
    "      \"children\": [\n" +
    "        {\n" +
    "          \"name\": \"Tell the Reds about the Blue's idea and suggest that they work together on the fundraiser. \",\n" +
    "          \"query\": \"You are at a community meeting where a heated discussion is taking place between the Reds and the Blues. The Reds are advocating for a new community center to be built on their side of town, while the Blues are pushing for a more centralized location that would benefit both groups. Do you:\",\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Support the Reds and argue that the community center should be built on their side of town.\"\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Suggest a compromise where the community center is built in a more central location that benefits both groups. \"\n" +
    "            }\n" +
    "          ]\n" +
    "        },\n" +
    "        {\n" +
    "          \"name\": \"Keep the information to yourself, thinking that it's better for the Reds to handle things on \",\n" +
    "          \"query\": \"You are at a community meeting where a heated discussion is taking place between the Reds and the Blues. The Reds are advocating for a new community center to be built on their side of town, while the Blues are pushing for a more centralized location that would benefit both groups. Do you:\",\n" +
    "          \"children\": [\n" +
    "            {\n" +
    "              \"name\": \"Support the Reds and argue that the community center should be built on their side of town.\"\n" +
    "            },\n" +
    "            {\n" +
    "              \"name\": \"Suggest a compromise where the community center is built in a more central location that benefits both groups. \"\n" +
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
        if(obj.name ==="Support the Reds and argue that the community center should be built on their side of town."|| obj.name ==="Suggest a compromise where the community center is built in a more central location that benefits both groups. "){
            document.location.href = "GroupInfo.html";
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
        if (obj.name === "Support the Reds and argue that the community center should be built on their side of town." || obj.name === "Suggest a compromise where the community center is built in a more central location that benefits both groups. ") {
            document.location.href = "GroupInfo.html";
        }

        printLetterByLetter("debug", obj.query + "", 40)
        document.getElementById("debug").innerHTML = "";

        document.getElementById("ma1").innerText = obj.children[0].name;
        document.getElementById("work").innerHTML = obj.children[0].name;
        document.getElementById("ma2").innerHTML = obj.children[1].name;
        document.getElementById("work1").innerHTML = obj.children[1].name;
    }
};
