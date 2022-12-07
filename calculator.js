function numberclear()
{
    document.getElementById("screen").value=''
}
function numberclick(paramVal)
{
    console.log(paramVal)
    document.getElementById("screen").value+=paramVal
}
function resultDisplay()
{
    var textInput = document.getElementById("screen").value
    var textResult = eval(textInput)
    console.log(textResult)
    document.getElementById("screen").value = textResult
}
