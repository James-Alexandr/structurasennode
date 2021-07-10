
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

function bigonotationcalculator() {
    var number = prompt("Enter a number");
    var power = prompt("Enter a power");
    var result = Math.pow(number, power);
    alert(result);
}

function BreadthFirstSearch(graph, start) {
    var queue = [];
    queue.push(start);
    var visited = [];
    visited[start] = true;
    while (queue.length > 0) {
        var vertex = queue.shift();
        console.log(vertex);
        for (var i = 0; i < graph[vertex].length; i++) {
            if (!visited[graph[vertex][i]]) {
                queue.push(graph[vertex][i]);
                visited[graph[vertex][i]] = true;
            }
        }
    }
}

function DFS(graph, start) {
    var visited = [];
    var stack = [];
    stack.push(start);
    while (stack.length > 0) {
        var vertex = stack.pop();
        if (!visited[vertex]) {
            console.log(vertex);
            visited[vertex] = true;
            for (var i = 0; i < graph[vertex].length; i++) {
                stack.push(graph[vertex][i]);
            }
        }
    }
}

function BFS(graph, start) {
    var visited = [];
    var queue = [];
    queue.push(start);
    while (queue.length > 0) {
        var vertex = queue.shift();
        console.log(vertex);
        for (var i = 0; i < graph[vertex].length; i++) {
            if (!visited[graph[vertex][i]]) {
                queue.push(graph[vertex][i]);
                visited[graph[vertex][i]] = true;
            }
        }
    }
}

function cache(fn) {
    var cache = {};
    return function (key) {
        if (!cache[key]) {
            cache[key] = fn(key);
        }
        return cache[key];
    };
}