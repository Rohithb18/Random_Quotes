var quotes=["A journey of thousand miles begin with a single step.",
"We are here to add what we can to Life, not to get what we can from life.",
"For the great doesn't happen through impulse alone, and is a succession of little things that are brought together.",
"Perfection is not attainable. But if we chase perfection we can catch excellence.",
"You have succeeded in life when all you really want is only what you really need.",
"Believe you can and you're halfway there.",
"You will face many defeats in life, but never let yourself be defeated.",
"The greatest glory in living lies not in never falling, but in rising every time we fall.",
"Life is either a daring adventure or nothing at all.",
"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
];
var author=["-Lao Tzu","-William Osler","-Vincent Van Gogh","-Vince Lombardi",
"-Vernon Howard","-Theodore Roosevelt","-Maya Angelou","-Nelson Mandela","Helen Keller","-Dr.Seuss"];
var heights=["260px","290px","310px","290px","290px","250px","280px","290px","260px","330px"];
var background_color=["#3AA6B9","#FF9B9B","black","#C689C6","#C9CCD5","#F25287","#804674","#8EA7E9","#1E5128","#C0A080"];
document.querySelector("button").addEventListener("click",click_handling);
var previous=0;
var before_previous=-1;
function click_handling()
{
    var n=Math.floor(Math.random()*quotes.length);
    if(before_previous==-1)
    {
        while(n==previous)
        {
            n=Math.floor(Math.random()*quotes.length);
        }
        console.log(previous+" "+before_previous+" "+n);
        before_previous=previous;
        previous=n;
    }
    else{
        while(previous==n || before_previous==n)
        {
            n=Math.floor(Math.random()*quotes.length);
        }
        before_previous=previous;
        previous=n;
    }
    document.body.style.backgroundColor=background_color[n];
    document.querySelector("p").style.color=background_color[n];
    document.querySelector("button").style.backgroundColor=background_color[n];
    document.getElementById("author").style.color=background_color[n];
    document.getElementById("text").innerHTML='" '+quotes[n];
    document.getElementById("author").innerHTML=author[n]; 
    document.getElementById("container").style.height=heights[n];
}
