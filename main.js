let title = document.querySelector('.title')
let turn = 'X';
let squares = [];
function end(item1,item2,item3){
    title.innerHTML =`${squares[1]} Winner`;
        
        setInterval(function(){title.innerHTML += ''},1000);
        setTimeout(function(){location.reload()},1000)
}
function winner(){
    for(let i = 1; i<10;i++){
        squares [i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] &&squares[2] == squares[3] &&squares[1] !='')
    {
        end(1,2,3)
        document.getElementById('item1').style.background = '#000';
        document.getElementById('item2').style.background = '#000';
        document.getElementById('item3').style.background = '#000';
    }

    else if(squares[4] == squares[5] &&squares[5] == squares[6] &&squares[4] !='')

    {
        end(4,5,6)
        document.getElementById('item4').style.background = '#000';
        document.getElementById('item5').style.background = '#000';
        document.getElementById('item6').style.background = '#000';

    }
    else if(squares[7] == squares[8] &&squares[8] == squares[9] &&squares[8] !=''){

        end(7,8,9)
        document.getElementById('item7').style.background = '#000';
        document.getElementById('item8').style.background = '#000';
        document.getElementById('item9').style.background = '#000';
    }
    if(squares[3] == squares[6] &&squares[6] == squares[9] &&squares[6] !=''){

        end(3,6,9)
        document.getElementById('item3').style.background = '#000';
        document.getElementById('item6').style.background = '#000';
        document.getElementById('item9').style.background = '#000';
    }
    if(squares[1] == squares[5] &&squares[5] == squares[9] &&squares[9] !=''){
        end(1,5,9)
        document.getElementById('item1').style.background = '#000';
        document.getElementById('item5').style.background = '#000';
        document.getElementById('item9').style.background = '#000';
    }
    if(squares[3] == squares[5] &&squares[5] == squares[7] &&squares[5] !=''){
        end(3,5,7)
        document.getElementById('item3').style.background = '#000';
        document.getElementById('item5').style.background = '#000';
        document.getElementById('item7').style.background = '#000';
    }
    if(squares[1] == squares[4] &&squares[4] == squares[7] &&squares[1] !=''){
        end(1,4,7)
        document.getElementById('item1').style.background = '#000';
        document.getElementById('item4').style.background = '#000';
        document.getElementById('item7').style.background = '#000';
    }
    if(squares[2] == squares[5] &&squares[5] == squares[8] &&squares[5] !=''){
        end(2,5,8)
        document.getElementById('item2').style.background = '#000';
        document.getElementById('item5').style.background = '#000';
        document.getElementById('item8').style.background = '#000';
    }






}

function game(id){
    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML== '' ){

        element.innerHTML = 'X'
        turn = 'O';
        title.innerHTML = "O";
    
    }
    else if(turn === 'O' &&element.innerHTML== ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = "X";
    }
    winner();  
}