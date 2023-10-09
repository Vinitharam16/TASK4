var res = fetch(" https://jsonplaceholder.typicode.com/users")
res.then((data) => data.json()).then((value) => bar(value))

var container = document.createElement("div")
container.className = "container"
var row = document.createElement("div")
row.className = "row"
var newdiv = document.createElement("div")
newdiv.innerHTML = `<nav class="navbar sticky-top text-white bg-primary">
                        <span class="navbar-text">
                        Users List
                        </span>
                    </nav>`
document.body.append(newdiv)
container.append(row);

function bar(value) {
    for(var i = 0; i < value.length; i++ ){
        row.innerHTML += `
        <div class = "col-md-3">
        <div class="card" style="width: 260px; height: 140px">
            <div class="card-body">
            <p class="card-text bold">Name: ${value[i].company.name}</p>
            <p class="card-text">Email: ${value[i].email}</p>
            <p class="card-text">street: ${value[i].address.street}</p>
            <p class="card-text">City: ${value[i].address.city}</p>
            </div>
        </div>
        </div>
        `
    }
    document.body.append(container);
}