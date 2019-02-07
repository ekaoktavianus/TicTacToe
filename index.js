document.addEventListener('DOMContentLoaded', function() {

var play = document.getElementById('play');
play.addEventListener('click',function(){
    
    var set = document.getElementById('setup')
    if(set.value >10){
        alert("the maximum number of board is 10")
        return
    }else if (set.value < 3){
        alert ("the minimum number of board is 3")
        return
    }

    var size = parseInt(document.getElementById('setup').value)
    var square = (size*size)

    document.getElementById('game').innerHTML = '<div id="board" class="board"></div>'
    var board = document.getElementById("board")
    board.style.width=(80*size)+'px';
    board.style.height=(80*size)+'px';
    
    let row = 0;
    let col = 0;
    for (var i = 0; i < square; i++) {
        board.innerHTML += "<button data-row='"+row+"' data-column='"+col+"' class='square' name='square'></button>";
    col ++
    if (col === size) row ++
    if (col === size) col = 0
    };
    
    var turn = document.getElementById('turn')
    var btn = document.getElementsByName('square')
    var num = 0
    turn.style.color = 'red';
    turn.innerHTML = "X's Turn";
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',function(){
            if ((turn.innerHTML)== "X's Turn"){
                this.innerHTML = "X"
                this.style.color = "red"
                this.disabled = 'true'
                turn.innerHTML = "O's Turn"
                num += 1
                checkwin()
                checkdraw()
            } else {
                this.innerHTML = "0"
                this.style.color = "blue"
                this.disabled = 'true'
                turn.innerHTML = "X's Turn"
                num += 1
                checkwin()
                checkdraw()
            }    
        })
        };

    function checkwin() {
        var sq = document.getElementsByClassName('square')
        for(i=0;i<square;i += 1) {
            if((i%size) == 0){
                var rowcheck = [];
                for (var squareNum = i; squareNum<(i+size);squareNum += 1){
                    rowcheck.push(sq[squareNum].innerHTML);
                    }
                if(rowcheck.every(array => array == "X") == true){
                    alert("X's the winner")
                    disablebtn()
                    turn.innerHTML = "X's win the game"
                } else if (rowcheck.every(array => array == "0") == true){
                    alert("O's the winner !!")
                    disablebtn()
                    turn.innerHTML = "O's win the game"
                }
                };
            }
        for(i=0;i<square;i+=1){
            if(i<size){
                var colcheck = []
                for(var squareNum = i;squareNum < square;squareNum += size){
                    colcheck.push(sq[squareNum].innerHTML);
                }
                if(colcheck.every(array => array == "X")==true){
                    alert("X's the winner")
                    disablebtn()
                    turn.innerHTML = "X's win the game"
                } else if(colcheck.every(array=>array=="0")==true){
                    alert("O's the winner")
                    disablebtn()
                    turn.innerHTML = "O's win the game"
                }
            }
        }
        var diag1 = []
        for(i=0;i<square;i+=1){
          if(i%(size+1)==0){
          diag1.push(sq[i].innerHTML);
        }
        }
        if(diag1.every(array => array == "X")==true){
            alert("X's the winner")
            disablebtn()
            turn.innerHTML = "X's win the game"
        }else if(diag1.every(array => array == "0")==true){
            alert("O's the winner")
            disablebtn()
            turn.innerHTML = "O's win the game"
        }
        var diag2 = []
        for (i= (size - 1);i < (square - 1);i+=1){
            if(i%(size-1)==0){
                diag2.push(sq[i].innerHTML)
            }
        }
        if(diag2.every(array => array =="x")==true){
            alert("X's the winner")
            disablebtn()
            turn.innerHTML = "X's win the game"
        } else if(diag2.every(array=>array == "0")==true){
            alert("O's the winner")
            disablebtn()
            turn.innerHTML = "O's win the game"
        }
    }
    function checkdraw() {
        if(num == square){
            alert("DRAW")
        }
    }
    function disablebtn() {
        var bt = document.getElementsByName('square')
        for(i=0;i<bt.length;i++){
            bt[i].disabled = 'true'
        }
        play.innerHTML = "Restart"
    }
})
});
