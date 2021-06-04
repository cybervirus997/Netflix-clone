  function loginpage()
    {
        window.location.href = "/index.html";
    }

let buttn1 = document.getElementById("signupdata");
buttn1.addEventListener("click", test123);
    function test123()
    {
        

        var database=document.getElementById("form1");
        var name=database.name1.value;
        var dob=database.dob.value;
        var username=database.username.value;
        var password=database.password.value;
        
           let data =
        {
            username: username,
            password: password,
            name: name,
            dob:dob
        }

        
        if (username.length == 0 || dob.length == 0 || name.length == 0 || password.length == 0)
        {
            if (name.length == 0) {
                var styname = document.getElementById("name1");
                styname.style.border = "3px solid red";
            }
            else if (dob.length == 0)
            {
                var stydob = document.getElementById("dob");
                stydob.style.border = "3px solid red";
            }
            else if (username.length == 0)
            {
                var styuser = document.getElementById("username");
                styuser.style.border = "3px solid red";
            }
            else if (password.length == 0)
            {
                var stypass = document.getElementById("password");
                stypass.style.border = "3px solid red";
            }
            

            alert("put all credntials");

        } else
        {
            
        
             let arr;

            arr = localStorage.getItem("mainData");

            if (arr == null) {
                arr = [];
            } else {
                arr = JSON.parse(localStorage.getItem("mainData"));
            }
            arr.push(data);
            localStorage.setItem("mainData", JSON.stringify(arr));

            var styname = document.getElementById("name1");
            styname.style.border = "1px solid red";
       

            alert("signup sucessfully");
            window.location.href = "/home.html";


        }


    }
