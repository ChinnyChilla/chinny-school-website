window.onload = function () {
    //all the buttons
    var calculate = document.getElementById('calculate');
    var createRow = document.getElementById('createRow');

    createRow.onclick = function () {
        // all the elements needed for creating new row
        var table = document.getElementById('table1');
        var selectList = document.createElement("select");
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        selectList.setAttribute('name', "select");
        selectList.setAttribute('class', 'select');
        selectList.setAttribute('value', "Select One");
        //creating new option group with options in array list
        var optiongroup = document.createElement('optgroup');
        optiongroup.setAttribute('label', "Simple Directions");
        selectList.appendChild(optiongroup);
        var list = new Array("north", "south", "east", "west");
        //Create and append the options
        for (var i = 0; i < list.length; i++) {
            var option = document.createElement("option");
            option.value = list[i];
            option.text = list[i][0].toUpperCase() + list[i].slice(1);
            selectList.appendChild(option);
        };
        //appends it to the table with all other elements
        table.appendChild(selectList);
        var inputNumber = document.createElement("input");
        inputNumber.setAttribute('type', 'number');
        inputNumber.setAttribute('name', 'Quantity');
        inputNumber.setAttribute('class', 'quantity');
        td.appendChild(inputNumber);
        table.appendChild(td);
        table.appendChild(tr);
    }
    calculate.onclick = function () {
        var selectedDirection = document.getElementsByClassName('select')
        var quantities = document.getElementsByClassName('quantity')
        for (i = 0; i < selectedDirection.length; i++) {
            console.log(selectedDirection[i].value)
            console.log(quantities[i].value)
        };
    };
}