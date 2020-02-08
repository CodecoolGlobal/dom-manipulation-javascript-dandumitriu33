function main() {
    let addButton = document.getElementById("add_row");
    addButton.addEventListener('click', clickHandler);

    function clickHandler(event) {
        // console.log('Add button clicked.');
        addRow();
    }

    let elements = document.getElementsByTagName("label");

    function addRow() {
        if (elements.length >= 10) {
            alert("Cannot build more rows. 10 limit reached.")
        } else {
            let maxID = 1;
            let temp_number;
            for (element of elements) {
                let elementID;
                // console.log(element.innerText);
                temp_number = element.innerText.slice(5);
                if (temp_number.slice(1) === ":") {
                    elementID = temp_number.slice(0, 1);
                } else if (temp_number.slice(2) === ":") {
                    elementID = temp_number.slice(0, 2);
                }
                // console.log(elementID);
                if (parseInt(elementID) > parseInt(maxID)) {
                    maxID = parseInt(elementID);
                }
            }
            

            let rowID = parseInt(maxID) + 1;
            let f = document.createElement("form");
            f.setAttribute('method', 'GET');
            f.setAttribute('id', `form_item_${rowID}`);
            f.innerHTML = `<label for="item_${rowID}">Item ${rowID}:</label><input type="text" name="item_${rowID}" id="item_${rowID}"/> <button type="button" class="remover" id="_${rowID}">Remove</button> <br/>`
            // console.log(f.innerHTML);
            // console.log(document.querySelector(".container"));
            document.querySelector(".container").appendChild(f);

            let buttons = document.querySelectorAll(".remover");
            for (button of buttons) {
                // console.log('btn: ', button);
                button.addEventListener('click', handleRemove);
            }

            function handleRemove(event) {
                this.parentNode.remove();
            }

        }
    }

}

main();
