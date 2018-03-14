var language = 
[
    {
        "merry":"merrui",
        "christmas":"christmas",
        "and":"a",
        "a":"a",
        "happy":"happui",
        "new":"siniath",
        "year":"ín"
    }, 
    {
        "merry":"merry",
        "christmas":"christmas",
        "and":"'ej",
        "a":"a",
        "happy":"happy",
        "new":"new",
        "year":"dis"
    }, 
    {
        "merry":"merry",
        "christmas":"christmas",
        "and":"ma",
        "a":"a",
        "happy":"happy",
        "new":"sash",
        "year":"firesof"
    }
]



function check(languageIdx)
{
    var words = document.getElementById("input").value.toLowerCase().split(" ");
    words.forEach(word => 
    {
        if(Object.keys(language[0]).indexOf(word) != -1)
        {
            translation(words, languageIdx);
        } else
        {
            alert("Sorry that is not an accepted phrase :(. Please try again.");
        }  
    });
}

function translation(wordsArray, languageIdx)
{
    var domArray = [];
    wordsArray.forEach(function(e)
    {
        domArray.push(language[languageIdx][e]);
    });
    var stringToPrint = domArray.join(' ');
    printToDom(stringToPrint, 'output');
}

function onButtonClick() 
{
    var buttons = document.getElementsByTagName('button');
    buttons[0].onclick = function(){check(0);};  
    buttons[1].onclick = function(){check(1);};  
    buttons[2].onclick = function(){check(2);};  
}

function printToDom(stringToPrint, domId)
{
    document.getElementById(domId).innerHTML = stringToPrint
}

onButtonClick();

