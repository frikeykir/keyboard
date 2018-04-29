(function(){
    "use strict";
    let textline = document.getElementById('textline');
    let container = document.getElementById('container');

    let letterBtn = document.querySelectorAll('.letter');

    let backspace = document.getElementById('sn8'),
        close = document.getElementById('close'),
        space = document.getElementById('sn32'),
        tab = document.getElementById('sn9'),
        shift = document.querySelectorAll('.shift'),
        capsLock = document.getElementById('sn20'),
        clearAll = document.getElementById('clearAll');

    let isShift = false,
        upCase = false,
        isCaps = false;

    // container.addEventListener('click',(event)=>{
    //     if(!event.target.classList.contains('keyboardNumbs'))return;
    //     if(event.target.classList.contains('spec'))return;
    //     textline.value += event.target.getAttribute('data-button');
    // });
    for (let i = 0; i < letterBtn.length; i++) {
        let letter = letterBtn[i];
        letter.addEventListener('click', (e)=> {
            if(isCaps){
                textline.value += e.target.getAttribute('data-button').toUpperCase();
            }
            else if (upCase){
                textline.value += e.target.getAttribute('data-button').toUpperCase();
                for (let i = 0; i < shift.length; i++) {
                    shift[i].className='keyboardNumbs spec shift active-button'
                }
                for (let i = 0; i<letterBtn.length;i++){
                    letterBtn[i].style.textTransform = 'lowercase';
                }
                isShift = false;
                upCase = false;
            }
            else textline.value += e.target.getAttribute('data-button');
        })
    }


    backspace.addEventListener('click',()=>{
        textline.value = textline.value.substr(0, textline.value.length-1);
    });
    close.addEventListener('click',()=>{
        container.style.display = 'none';
    });
    space.addEventListener('click',()=>{
        textline.value += ' ';
    });
    tab.addEventListener('click',()=>{
        textline.value += '   ';
    });
    clearAll.addEventListener('click',()=>{
        textline.value = '';
    });


    for (let i = 0; i < shift.length; i++) {
        shift = shift[i];
        shift.addEventListener('click', shiftAdd)
    }
    function shiftAdd() {
        if (!isShift) {
            for (let i = 0; i < shift.length; i++) {
                shift[i].className='keyboardNumbs spec shift active-button';
            }
            for (let i = 0; i<letterBtn.length;i++){
                letterBtn[i].style.textTransform = 'uppercase';
            }
            upCase = true;
            isShift = true;
        }
        else {
            for (let i = 0; i < shift.length; i++) {
                shift[i].className='keyboardNumbs spec shift';
            }
            for (let i = 0; i<letterBtn.length;i++){
                letterBtn[i].style.textTransform = 'lowercase';
            }
            upCase = false;
            isShift = false;
        }
    }

    capsLock.addEventListener('click',capsAdd);

    function capsAdd() {
        if (!isCaps){
            capsLock.className = 'keyboardNumbs spec active-button';
            isCaps = true;
            upCase = true;
            for (let i = 0; i<letterBtn.length;i++){
                letterBtn[i].style.textTransform = 'uppercase';
            }
        }
        else {
            capsLock.className = 'keyboardNumbs spec';
            isCaps = false;
            upCase = false;
            for (let i = 0; i<letterBtn.length;i++){
                letterBtn[i].style.textTransform = 'lowercase';
            }
        }
    }


    document.addEventListener('keydown',(event)=>{
        let char = event.keyCode || event.charCode || event.which;
        if(char===8 || char===9 || char===20 || char===13 || char===16 || char===17 || char=== 18 || char===32 || char===18 || char===37 || char===39 || char===38 || char===40 || char===91){
            document.getElementById('sn'+char).className='keyboardNumbs spec active-button';
        } else{
        let s = String.fromCharCode(char).toLowerCase();
        document.getElementById(s).className='keyboardNumbs active-button';}
    });

    document.addEventListener('keyup',(event)=>{
        let char = event.keyCode || event.charCode || event.which;
        if(char===8 || char===9 || char===20 || char===13 || char===16 || char===17 || char=== 18 || char===32 || char===18 || char===37 || char===39 || char===38 || char===40 || char===91){
            document.getElementById('sn'+char).className = 'keyboardNumbs spec';
        }else {
            let s = String.fromCharCode(char).toLowerCase();
            document.getElementById(s).className = 'keyboardNumbs ';
        }
    });


}());