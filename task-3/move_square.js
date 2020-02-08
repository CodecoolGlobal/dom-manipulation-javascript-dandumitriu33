// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();
const moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight
};

function moveLeft(position) {
    // console.log('entered moveleft');
    if (position[1] === '0') {
        alert("Can't move out of bounds.")
    }
    else {
        let newID;
        newID = position[0] + (parseInt(position[1]) - 1).toString();
        let newCell = document.getElementById(`${newID}`);
        console.log(newCell);
        newCell.setAttribute('class', 'inactive');
        let oldCell = document.getElementById(`${position}`);
        oldCell.setAttribute('class', 'active');
    }
}

function moveDown(position) {
    // console.log('entered movedown');
    if (position[0] === '9') {
        alert("Can't move out of bounds.")
    }
    else {
        let newID;
        newID = (parseInt(position[0]) + 1).toString() + position[1];
        let newCell = document.getElementById(`${newID}`);
        console.log(newCell);
        newCell.setAttribute('class', 'inactive');
        let oldCell = document.getElementById(`${position}`);
        oldCell.setAttribute('class', 'active');
    }
}

function moveUp(position) {
    // console.log('entered moveup');
    if (position[0] === '0') {
        alert("Can't move out of bounds.")
    }
    else {
        let newID;
        newID = (parseInt(position[0]) - 1).toString() + position[1];
        let newCell = document.getElementById(`${newID}`);
        console.log(newCell);
        newCell.setAttribute('class', 'inactive');
        let oldCell = document.getElementById(`${position}`);
        oldCell.setAttribute('class', 'active');
    }
}

function moveRight(position) {
    // console.log('entered moveright');
    if (position[1] === '9') {
        alert("Can't move out of bounds.")
    }
    else {
        let newID;
        newID = position[0] + (parseInt(position[1]) + 1).toString();
        let newCell = document.getElementById(`${newID}`);
        console.log(newCell);
        newCell.setAttribute('class', 'inactive');
        let oldCell = document.getElementById(`${position}`);
        oldCell.setAttribute('class', 'active');
    }
}

function main() {
    let table10 = document.createElement("table");
    table10.setAttribute('class', 'table10');
    document.querySelector(".container").appendChild(table10);
    for (let i=0; i<10; i++) {
        let row = document.createElement("row");
        row.setAttribute('class', `row${i}`);
        document.querySelector(".table10").appendChild(row);
        let currentRow;
        for (let j=0; j<10; j++) {
            let cell = document.createElement("td");
            cell.setAttribute('class', 'cell');
            cell.innerHTML = `<div class="active" id=${i.toString()+j.toString()}>[ ]</div>`;
            currentRow = 'row'+i;
            document.querySelector(`.${currentRow}`).appendChild(cell);
        }
    }

    let selected;

    let allCells = document.querySelectorAll(".active");
    // console.log(allCells.length);
    for (cell of allCells) {
        cell.addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        console.log(this.id);
        selected = this.id;
        this.setAttribute('class', 'inactive');
    };
    

    document.addEventListener('keyup', (e) => {
        if (e.code === "ArrowUp") {
            let position = document.querySelector('.inactive');
            moves[119](position.id);
        }        
        else if (e.code === "ArrowDown") {
            let position = document.querySelector('.inactive');
            moves[115](position.id);
        }
        else if (e.code === "ArrowLeft") {
            let position = document.querySelector('.inactive');
            moves[97](position.id);
        }
        else if (e.code === "ArrowRight") {
            let position = document.querySelector('.inactive');
            moves[100](position.id);
        }
        
        });


}

main();
