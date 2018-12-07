let board = document.querySelector(".board");

fillBoard();
arrangeFigure(arrayStart);

/*==========================================================================*/
function fillBoard() {
    let block;
    let flag = false;
    let c = 0;

    let abc = ["A", "B", "C", "D", "E", "F", "G", "H"]
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            block = document.createElement('div');
            c = abc[j - 1] + (9 - i) || null;
            if (i == 0 || i == 9) {
                if (j == 0 || j == 9) {
                    block.className = "angel_brim";
                } else {
                    block.className = "row_brim";

                    block.innerHTML = "<span>" + abc[j - 1] + "</span>";
                }
            } else if (j == 0 || j == 9) {
                block.className = "column_brim";
                block.innerHTML = "<span>" + (9 - i) + "</span>";

            } else if (flag) {
                block.className = "black cell " + c;


            } else {
                block.className = "white cell " + c;
            }
            flag = !flag;

            if (i == 0 || j == 9) {
                block.className += " reverse"
            }

            board.appendChild(block);
        }
        flag = !flag;
    }
}
/*==========================================================================*/

function arrangeFigure(arr) {
    for (i of arr) {
        let cell = document.querySelector('.' + i.cell);
        cell.style.backgroundImage = "url(img/chess.png)";
        cell.style.backgroundSize = "32rem 12rem"
        cell.style.backgroundPosition = position[i.fig];
    }
}

/*==========================================================================*/