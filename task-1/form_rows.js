function main() {
    let addButton = document.getElementById("add_row");
    addButton.addEventListener('click', clickHandler);

    function clickHandler(event) {
        console.log('Add button clicked.');
    }
}

main();
