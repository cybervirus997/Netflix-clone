
var data = [

    {
        username: "somu@gmail.com",
        password: "somu123",
        name: "Soumya Ranjan Purohit",
        dob:"03/12/1997"
    },
    {
        username: "ankita@gmail.com",
        password: "ankita123",
        name: "Ankita Mishra",
        dob:"18/08/1997"
    },
    {
        username: "Admin",
        password: "admin",
        name: "ADMIN",
        dob:"00/00/0000"
    }

]

if (localStorage.getItem("mainData") == null)
{
    localStorage.setItem("mainData", JSON.stringify(data));
}

function login(e)
{
    e.preventDefault();
    let flag = document.getElementById("loginForm");
    let name = flag.userName.value;
    let passkey = flag.password.value;

    let collect = JSON.parse(localStorage.getItem("mainData"));
    
    for (let i = 0; i < collect.length; i++) {
        
        if ((collect[i].username == name) && (collect[i].password == passkey))
        {
            window.location.href = "/home.html";
            break;
        }
         else if (i == collect.length - 1 && ((collect[i].username != name) && (collect[i].password != passkey)))
        {
            let warning = document.createElement("p");
            warning.innerHTML = "Incorrect Credentials";
            
            warning.style.color = "red";
            let warn = document.getElementById("pass");

            alert("Incorrect credential");
        }
        
    }

}

function signup()
{
    window.location.href = "/signup.html";
        
}
function home()
{
    alert("You need to login First");
    // need to delete it after completing the asignmesnt
    window.location.href = "/home.html";
}
