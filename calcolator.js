let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText= '';
                break;
            case 'Delete':
                let ciao = display.innerText.slice(0, -1);
                if(ciao != ""){
                    display.innerText = ciao;
                } else {
                    display.innerText = 0;
                }
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});