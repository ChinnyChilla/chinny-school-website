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
        var x = 0;
        var y = 0;
        var total = 0;
        for (i = 0; i < selectedDirection.length; i++) {
            var direction = selectedDirection[i].value
            var quantity = quantities[i].value ? parseInt(quantities[i].value) : 0
            if (direction == "north") {
                y += quantity;
            } else if (direction == "south") {
                y-= quantity;
            } else if (direction == "east") {
                x -= quantity;
            } else if (direction == "west") {
                x += quantity
            }
            total += quantity;
        };
        console.log(total)
        document.getElementById('dataDistance').innerHTML = total
        document.getElementById('dataDisplacement').innerHTML = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
        var angleDeg = (Math.atan2(y, x) * 180 / Math.PI)
        console.log("X" + x + "Y" + y)
        console.log("Angle Degree" + angleDeg)
        if (angleDeg > 0) {
            angleDeg -= 90
        } else {
            angleDeg += 270
        }
        document.getElementById('dataAngle').innerHTML = x == 0 && y == 0 ? 0 : angleDeg
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
        document.getElementById('dataDirection').innerHTML = directions[Math.round(angleDeg / 45)]
    };  
}