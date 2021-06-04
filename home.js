
var movies =[

    {
        movieName: "Thor",
        release : "23rd-march-2020",
        imdb : 5,
        movieImage:"https://wallpapercave.com/wp/wp2062925.jpg"
    },
    {
        movieName: "Avenger: End GAME",
        release : "23rd January 2019",
        imdb : 4.5,
         movieImage:"https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SY606_.jpg"
    },
    {
        movieName: "Bahubali",
        release : "13 December 2018",
        imdb : 4,
         movieImage:"https://images-na.ssl-images-amazon.com/images/I/711eHgGtnFL._SX522_.jpg"
    },
    {
        movieName: "Interstaler",
        release : "07th November 2015",
        imdb : 5,
         movieImage:"https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg"
    },
    {
        movieName: "Flynn Ridder",
        release: "21 march 2020",
        imdb: 5,
        movieImage: "https://images-na.ssl-images-amazon.com/images/I/91Uy7WhX-eL.jpg"
    },
    {
        movieName: "Radhe",
        release : "04th march 2021",
        imdb : 1,
        movieImage:"https://cdn.siasat.com/wp-content/uploads/2021/05/radhe-1.jpg"
    },
    {
        movieName: "Iron-Man",
        release : "09 December 2020",
        imdb : 4.8,
         movieImage:"https://flxt.tmsimg.com/assets/p170620_p_v10_an.jpg"
    },
    {
        movieName: "Inception",
        release : "14 april 2021",
        imdb : 4.4,
        movieImage:"https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg"
    },
    {
        movieName: "Gang of wasseypur",
        release : "GOOgle it bro",
        imdb : 4.99,
        movieImage:"https://upload.wikimedia.org/wikipedia/en/6/6a/Gangs_of_Wasseypur_poster.jpg"
    }
]
    if (localStorage.getItem("movie") == null)
 {
    localStorage.setItem("movie",JSON.stringify(movies));
}


{
    let z = document.getElementById("movies-list");

    
    let x = JSON.parse(localStorage.getItem("movie"));
    
    console.log(x);
    
    for (let i = 0; i < x.length; i++) {
        
       let z2 = document.createElement("div");

        

        let imgg = document.createElement("img");
        imgg.src = x[i].movieImage;

        let nm = document.createElement("p");
        nm.innerHTML = x[i].movieName;

        let rls = document.createElement("p");
        rls.innerHTML = x[i].release;
         
        let imdb = document.createElement("p");
        imdb.innerHTML = x[i].imdb;

        z2.append(imgg, nm, rls, imdb);
    

        z.append(z2);


    }
}




function lowtohigh()
{


    let abc = JSON.parse(localStorage.getItem("movie"));
    let arr = [];
    for (let i = 0; i < abc.length; i++)
    {
        
        arr.push(abc[i].imdb);
        
    }
   
    arr.sort(function (a, b) { return a - b });
    document.getElementById("movies-list").innerHTML = null;
    for (let j = 0; j < abc.length; j++)
    {
        for (let k = 0; k < abc.length; k++)
        {
            if (arr[j] == abc[k].imdb)
            {
                
                ////////
                let z = document.getElementById("movies-list");
                
                let z2 = document.createElement("div");
                
                let imgg = document.createElement("img");
                imgg.src = abc[k].movieImage;

                let nm = document.createElement("p");
                nm.innerHTML = abc[k].movieName;

                let rls = document.createElement("p");
                rls.innerHTML = abc[k].release;
         
                let imdb = document.createElement("p");
                imdb.innerHTML = abc[k].imdb;

                z2.append(imgg, nm, rls, imdb);
    

                z.append(z2);

                //////////
            }
            
            
        }
        
    }

}
 
     

          

        
function light()
{
    let lig = document.getElementById("main").style;
    lig.backgroundColor = "transparent";
}
    
function dark()
{
    let lig = document.getElementById("main").style;
    lig.backgroundColor = "black";
}