const board = document.getElementById("chessboard");

let selectedCell = null;

board.addEventListener("click", function (e) {

    const cell = e.target.closest("td");

    if (!cell) return;
    
    if (cell.classList.contains("marking")) return;

    if (selectedCell === null) {

        if (cell.textContent !== "") {

            selectedCell = cell;
            cell.style.outline = "3px solid red";

        }

    } 
    else {

        cell.textContent = selectedCell.textContent;

        if (cell !== selectedCell) {
            selectedCell.textContent = "";
        }
        
        selectedCell.style.outline = "";

        selectedCell = null;

    }

});