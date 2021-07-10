
function medianOfTwosortedarrays() {

    var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

    var median = (arr1[4] + arr2[4]) / 2;
    console.log(median);

}

medianOfTwosortedarrays();

function breadthfirsttraversal(graph, start) {
    var queue = [];
    queue.push(start);
    while (queue.length > 0) {
        var vertex = queue.shift();
        console.log(vertex);
        for (var i = 0; i < graph[vertex].length; i++) {
            queue.push(graph[vertex][i]);
        }
    }
}


function userlogin() {
    var username = prompt("Enter your username");
    var password = prompt("Enter your password");
    if (username == "admin" && password == "admin") {
        alert("Welcome Admin");
    } else {
        alert("Invalid username or password");
    }
}