window.onload = function () {
    var calculate = document.getElementById('calculate')
    var createRow = document.getElementById('createRow')
    var idCount = 0

    createRow.onclick = function () {
        var table = document.getElementById('table1')
        var selectList = document.createElement("select");
        var td = document.createElement("td")
        var tr = document.createElement("tr")
        selectList.setAttribute('name', "select")
        selectList.setAttribute('value', "Select One")
        
        var optiongroup = document.createElement('optgroup')
        optiongroup.setAttribute('label', "Simple Directions")
        selectList.appendChild(optiongroup)
        var list = new Array("North", "South", "East", "West")
        //Create and append the options
        for (var i = 0; i < list.length; i++) {
            console.log("in for loop")
            var option = document.createElement("option");
  
            option.value = list[i];
            option.text = list[i];
            selectList.appendChild(option);
        }
        table.appendChild(selectList)
        var inputNumber = document.createElement("input")
        inputNumber.setAttribute('type', 'number')
        inputNumber.setAttribute('name', 'Quantity')
        td.appendChild(inputNumber)
        table.appendChild(td)
        table.appendChild(tr)
    }
    calculate.onclick = function ()   {
        var distances = document.getElementById('distance')
        console.log(distances.selectedOptions);
    }
}