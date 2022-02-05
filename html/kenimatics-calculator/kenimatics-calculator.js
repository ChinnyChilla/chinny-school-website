
window.onload = function () {
    var kinematicCalculate = document.getElementById('kinematicCalculate')
    var degreeSubmit = document.getElementById('degreeCalculate')
    
    kinematicCalculate.onclick = function () {
        console.log("Executing script");
        
        // Gets all values from form
        // all the variables for the y axis
        let emptySpaces_y = 123;
        var initalVel_y = document.getElementById("y_inital_velocity").value;
        var finalVel_y = document.getElementById("y_final_velocity").value;
        var averageVel_y = document.getElementById("y_average_velocity").value;
        var time_y = document.getElementById("y_time").value;
        var distance_y = document.getElementById("y_distance").value;
        var acceleration_y = document.getElementById("y_acceleration").value;
        //all the variables for the x axis
        var emptySpaces_x = 123
        var initalVel_x = document.getElementById("x_inital_velocity").value;
        var finalVel_x = document.getElementById("x_final_velocity").value;
        var averageVel_x = document.getElementById("x_average_velocity").value;
        var time_x = document.getElementById("x_time").value;
        var distance_x = document.getElementById("x_distance").value;
        var acceleration_x = document.getElementById("x_acceleration").value;
        // If it is a number change it to a number and not a string
        if (document.getElementById("same-xy-time").checked && time_y === "" && time_x !== "") {
            time_y = time_x;
        };
        if (initalVel_y !== "") {
            initalVel_y = parseFloat(initalVel_y);
        };
        if (finalVel_y !== "") {
            finalVel_y = parseFloat(finalVel_y);
        };
        if (averageVel_y !== "") {
            averageVel_y = parseFloat(averageVel_y);
        };
        if (time_y !== "") {
            time_y = parseFloat(time_y);
        };
        if (distance_y !== "") {
            distance_y = parseFloat(distance_y);
        };
        if (acceleration_y !== "") {
            acceleration_y = parseFloat(acceleration_y);
        };
        

        // checks if they are blank
        if (initalVel_x !== "") {
            initalVel_x = parseFloat(initalVel_x);
        };
        if (finalVel_x !== "") {
            finalVel_x = parseFloat(finalVel_x);
        };
        if (averageVel_x !== "") {
            averageVel_x = parseFloat(averageVel_x);
        };
        if (time_x !== "") {
            time_x = parseFloat(time_x);
        };
        if (distance_x !== "") {
            distance_x = parseFloat(distance_x);
        };
        if (acceleration_x !== "") {
            acceleration_x = parseFloat(acceleration_x);
        };

        let exitFlag = false;



        while (emptySpaces_y !== 0 && exitFlag === false) {
            console.log("solving for y axis");
            // create solved count
            emptySpaces_y = 0;
            let solveCount_y = 0;
            // Solves for average velocity if blank
            if (averageVel_y === "") {
                if (initalVel_y !== "" && finalVel_y !== "") {
                    averageVel_y = (finalVel_y + initalVel_y) / 2;
                    solveCount_y++;
                } else if (distance_y !== "" && time_y !== "") {
                    averageVel_y = distance_y / time_y;
                    solveCount_y++;
                };
            };
            // Solves for inital Velocity if blank
            if (initalVel_y === "") {
                if (averageVel_y !== "" && finalVel_y !== "") {
                    initalVel_y = (averageVel_y * 2) - finalVel_y;
                    solveCount_y++;
                } else if (acceleration_y !== "" && time_y !== "" && finalVel_y !== "") {
                    initalVel_y = ((acceleration_y * time_y) - finalVel_y) * -1
                    solveCount_y++;
                } else if (finalVel_y !== "" && acceleration_y !== "" && distance_y !== "") {
                    initalVel_y = Math.sqrt(Math.pow(finalVel_y, 2) - (2 * acceleration_y * distance_y));
                    solveCount_y++;
                } else if (distance_y !== "" && time_y !== "" && acceleration_y !== "") {
                    initalVel_y = (distance_y - ((1/2) * (acceleration_y * Math.pow(time_y, 2)))) / time_y;
                    solveCount_y++; 
                };
            };
            // Solves for final Velocity if blank
            if (finalVel_y === "") {
                if (averageVel_y !== "" && initalVel_y !== "") {
                    finalVel_y = (averageVel_y * 2) - initalVel_y;
                    solveCount_y++;
                } else if (time_y !== "" && initalVel_y !== "" && acceleration_y !== "") {
                    finalVel_y = (acceleration_y * time_y) + initalVel_y;
                    solveCount_y++;
                } else if (distance_y !== "" && initalVel_y !== "" && acceleration_y !== "") {
                    finalVel_y = Math.sqrt(Math.pow(initalVel_y, 2) + (2 * acceleration_y * distance_y));
                    solveCount_y++;
                };
            };
            // solves for time_y if blank
            if (time_y === "") {
                if (averageVel_y !== "" && distance_y !== "") {
                    time_y = distance_y / averageVel_y;
                    solveCount_y++;
                } else if (finalVel_y !== "" && initalVel_y !== "" && acceleration_y !== "") {
                    time_y = (finalVel_y - initalVel_y) / acceleration_y;
                    solveCount_y++;
                };
            };
            // solves for distance_y if blank
            if (distance_y === "") {
                if (averageVel_y !== "" && time_y !== "") {
                    distance_y = averageVel_y * time_y;
                    solveCount_y++;
                } else if (finalVel_y !== "" && initalVel_y !== "" && acceleration_y !== "") {
                    distance_y = (Math.pow(finalVel_y, 2) - Math.pow(initalVel_y, 2)) / 2 / acceleration_y;
                    solveCount_y++;
                };
            };
            // solves for acceleration_y if blank
            if (acceleration_y === "" && finalVel_y !== "" && initalVel_y !== "" && time_y !== "") {
                acceleration_y = (finalVel_y - initalVel_y) / time_y;
                solveCount_y++;
            };
            // creates the new array and checks for empty spaces
            const valueArray = new Array(initalVel_y, finalVel_y, averageVel_y, time_y, distance_y, acceleration_y);
            console.log(valueArray);
            emptySpaces_y = 0;
            for (index = 0; index < valueArray.length; index++) {
                if (valueArray[index] === "") {
                    emptySpaces_y++;
                };
            };
            // If solvecount_y is equal to 0 and no values have changed, insufficient information
            console.log("Empty spaces " + emptySpaces_y);
            if(solveCount_y === 0 && emptySpaces_y !== 0) {
                alert("Insufficient information for y axis!");
                exitFlag = true;
            } else if (emptySpaces_y === 0) {
                exitFlag = true;
            } else {solveCount_y === 0};
        };
        document.getElementById("y_inital_velocity").value = initalVel_y.toFixed(3);
        document.getElementById("y_final_velocity").value = finalVel_y.toFixed(3);
        document.getElementById("y_average_velocity").value = averageVel_y.toFixed(3);
        document.getElementById("y_time").value = time_y.toFixed(3);
        document.getElementById("y_distance").value = distance_y.toFixed(3);
        document.getElementById("y_acceleration").value = acceleration_y.toFixed(3);
        // sees if you want to solve the x-axis
        var solveXAxis = document.getElementById("solve-x-axis").checked;

        // Solves for x axis
        if (document.getElementById("same-xy-time").checked && time_x === "" && time_y !== "") {
            time_x = time_y;
        };
        exitFlag = false;
        while (emptySpaces_x !== 0 && exitFlag === false && solveXAxis) {
            console.log("calculating for x axis");
            let solveCount_x = 0;
            // solves for initalvel if not there
            if (initalVel_x === "") {
                if (finalVel_x !== "") {
                    initalVel_x = finalVel_x;
                    solveCount_x++;
                } else if (averageVel_x !== "") {
                    initalVel_x = averageVel_x;
                    solveCount_x++;
                };
            };
            // solves for finalvel if not there
            if (finalVel_x === "") {
                if (initalVel_x !== "") {
                    finalVel_x = initalVel_x;
                    solveCount_x++; 
                } else if (averageVel_x !== "") {
                    finalVel_x = averageVel_x;
                    solveCount_x++;
                };
            };
            // solves for average velocity if not there
            if (averageVel_x === "") {
                if (initalVel_x !== "") {
                    averageVel_x = initalVel_x;
                    solveCount_x++;
                } else if (finalVel_x !== "") {
                    averageVel_x = finalVel_x;
                    solveCount_x++;
                } else if (distance_x !== "" && time_x !== "") {
                    averageVel_x = distance_x / time_x;
                    solveCount_x++;
                };
            };
            // solves for time if not there
            if (time_x === "" && distance_x !=="" && averageVel_x !=="") {
                time_x = distance_x / averageVel_x;
                solveCount_x++;
            };
            // solves for distance if not there
            if (distance_x === "" && time_x !== "" && averageVel_x !== "") {
                distance_x = averageVel_x * time_x;
                solveCount_x++;
            };
            // CHECKs for for empty spaces
            const valueArray_x = new Array(initalVel_x, finalVel_x, averageVel_x, time_x, distance_x, acceleration_x);
            console.log(valueArray_x);
            emptySpaces_x = 0;
            for (index = 0; index < valueArray_x.length; index++) {
                if (valueArray_x[index] === "") {
                    emptySpaces_x++;
                };
            };
            console.log("Empty spaces " + emptySpaces_x);
            if (solveCount_x === 0 && emptySpaces_x !== 0) {
                alert("Insufficient information for x axis!");
                exitFlag = true;
            } else if (emptySpaces_x === 0) {
                exitFlag = true;
            } else {solveCount_x === 0};
           
        };
        if (solveXAxis) {
            document.getElementById("x_inital_velocity").value = initalVel_x.toFixed(3);
            document.getElementById("x_final_velocity").value = finalVel_x.toFixed(3);
            document.getElementById("x_average_velocity").value = averageVel_x.toFixed(3);
            document.getElementById("x_time").value = time_x.toFixed(3);
            document.getElementById("x_distance").value = distance_x.toFixed(3);
            document.getElementById("x_acceleration").value = acceleration_x.toFixed(3);
        }

        // Checks
        const checkAmount = 2
        eq1Problem = initalVel_y + acceleration_y * time_y
        eq2Problem = initalVel_y*time_y + 0.5 * acceleration_y * (time_y * time_y)
        eq3Problem = initalVel_y * initalVel_y + 2 * acceleration_y * distance_y
        if (eq1Problem.toFixed(checkAmount) == finalVel_y.toFixed(checkAmount)) {
            document.getElementById('eq1').setAttribute("style", "background-color: #90EE90")
            document.getElementById('eq1').innerText = "PASS"
        } else {
            document.getElementById('eq1').setAttribute("style", "background-color: red")
            document.getElementById('eq1').innerText = `FAIL\nFailed by ${(finalVel_y - (initalVel_y + acceleration_y * time_y)).toFixed(4)}`
            
        }
        if (eq2Problem.toFixed(checkAmount) == distance_y.toFixed(checkAmount)) {
            document.getElementById('eq2').setAttribute("style", "background-color: #90EE90")
            document.getElementById('eq2').innerText = "PASS"
        } else {
            document.getElementById('eq2').setAttribute("style", "background-color: red")
            document.getElementById('eq2').innerText = `FAIL\nFailed by ${(distance_y - (initalVel_y*time_y + 0.5 * acceleration_y * (time_y * time_y))).toFixed(4)}`
        }
        if (eq3Problem.toFixed(checkAmount) == (finalVel_y ** 2).toFixed(checkAmount)) {
            document.getElementById('eq3').setAttribute("style", "background-color: #90EE90")
            document.getElementById('eq3').innerText = "PASS"
        } else {
            document.getElementById('eq3').setAttribute("style", "background-color: red")
            document.getElementById('eq3').innerText = `FAIL\nFailed by ${(finalVel_y * finalVel_y - (initalVel_y * initalVel_y + 2 * acceleration_y * distance_y)).toFixed(4)}`
        }
    };
};
