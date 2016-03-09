document.addEventListener('DOMContentLoaded', function(){
    var button = document.createElement('button');
    var text = document.createTextNode('Click Here');
    button.appendChild(text);
    document.body.appendChild(button);
    addEventListener("click", function(){
        return confirm("Here I Am");
        
    });
});