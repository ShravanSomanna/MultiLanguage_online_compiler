let editorid;

window.onload = function() {
    editorid = ace.edit("editorid");
    editorid.setTheme("ace/theme/monokai"); 
    editorid.session.setMode("ace/mode/c_cpp");
}
 
 

function changeLanguage() {                              //select languages from the html page and set separate texture for each lang

    let language = $("#languages").val();

    if(language == 'c' || language == 'cpp')editorid.session.setMode("ace/mode/c_cpp");
    else if(language == 'php')editorid.session.setMode("ace/mode/php");
    else if(language == 'python')editorid.session.setMode("ace/mode/python");
    else if(language == 'node')editorid.session.setMode("ace/mode/javascript");
   else if(language == "ruby")editorid.session.setMode("ace/mode/ruby");
}



 
//  function saveTextAsFile() 
//         {
//           var SaveAs1 = document.getElementById("inputFileNameToSaveAs1").value;
//           var editortext = documemnt.getElementById("editorid").value;

//           var blob = new Blob([editortext], { type: "text;" });
//           saveAs(blob, SaveAs1);
//         }

function exeloadFile()
{
    var fileToLoad = document.getElementById("fileid").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent)
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("editorid").value = textFromFileLoaded;
        editorid.insert(textFromFileLoaded);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}



function saveTextAsFile()
{
    var text = document.getElementById("editorid").value;
    saveTextToFile(text, "saved_text.txt");
};

function saveTextToFile(text, fileName) {
    var blob = new Blob([text], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
//     // var textToSaveAsBlob = new Blob([textToSave], {type:"text/html"});
//     var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
//     var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs1").value;

//     var downloadLink = document.createElement("a");
//     downloadLink.download = fileNameToSaveAs;
//     downloadLink.innerHTML = "Download File";
//     downloadLink.href = textToSaveAsURL;
//     downloadLink.onclick = destroyClickedElement;
//     downloadLink.style.display = "none";
//     document.body.appendChild(downloadLink);

//     downloadLink.click();
// }

function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}



function executeCode() {                                  //executing the "RUN"

    $.ajax({  

        url: "/ide/app/compiler.php",

        method: "POST",

        data: {
            language: $("#languages").val(),
            code: editorid.getSession().getValue()
        },
        success: function(response) {
            $(".output").text(response)
            
        }
  })
}




















/*css of editorid  not exactly needed but stored fro future use if any...


border: none;
text-align: left;
display: block;
font-size: 16px;
width: auto;
-webkit-text-stroke: ;
height: auto;
min-height: 500px;
}*/