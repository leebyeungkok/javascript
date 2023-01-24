
let init = function(){
    const btnFileRead = document.querySelector('[ref=btnFileRead]');
    btnFileRead.onclick=function(){
        readFile();
    }
}
let readFile = function(){
    document.querySelector('[ref=fileOpenLocal]').value='';
    document.querySelector('[ref=fileOpenLocal]').click();
}
let readFileChg = function(evt) {
    console.log('arguments', arguments);
    let input = document.querySelector('[ref=fileOpenLocal]');
    let reader = new FileReader();
    reader.onload = function(){
        let fileContent = reader.result;

        
        console.log(fileContent);
        let content = JSON.parse(fileContent);
        let output = document.querySelector('[ref=output]');
        console.log(fileContent);
        output.innerHTML = fileContent;

    };
    reader.readAsText(input.files[0]);
}