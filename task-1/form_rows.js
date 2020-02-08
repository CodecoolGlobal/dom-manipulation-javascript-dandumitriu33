function main() {
    let addButton = document.getElementById("add_row");
    addButton.addEventListener('click', clickHandler);

    function clickHandler(event) {
        console.log('Add button clicked.');
        addRow();
    }

    let elements = document.getElementsByTagName("label");
    console.log(elements.length);

    function addRow() {
        if (elements.length >= 10) {
            alert("Cannot build more rows. 10 limit reached.")
        } else {

            console.log('building row');
            let maxID = 1;
            let temp_number;
            for (element of elements) {
                let elementID;
                console.log(element.innerText);
                temp_number = element.innerText.slice(5, 7);
                if (temp_number.slice(1) === ":") {
                    elementID = temp_number.slice(0, 1);
                } else if (temp_number.slice(2) === ":") {
                    elementID = temp_number.slice(0, 2);
                }
                console.log(elementID);
                if (elementID > maxID) {
                    maxID = parseInt(elementID);
                }
            }
            

            let rowID = maxID + 1;
            let f = document.createElement("line");
            f.innerHTML = `<label for="item_${rowID}">Item ${rowID}:</label><input type="text" name="item_${rowID}" id="item_${rowID}"/> <br/>`
            console.log(f.innerHTML);
            console.log(document.querySelector(".container"));
            document.querySelector(".container").appendChild(f);

        }
    }

}

main();
