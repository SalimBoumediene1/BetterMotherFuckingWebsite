if(confirm("Voulez-vous visiter le site xxxvidsxxx?")){
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
 }else 
    {alert("Vous pouvez activer le mode psychédélique!");
    }

const listPara = document.getElementsByTagName("p");
//list of all paragraphs
const listHeading = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
//list of all headings

function changeBackground() 
    {
        document.body.style.background = 'magenta';

        for (var i = 0; i < listPara.length; i++)
        {
            listPara[i].style.color = "blue";
            listPara[i].style.fontFamily = "papyrus";
        }
        for (var i = 0; i < listHeading.length; i++)
        {
            listHeading[i].style.color = "red";
            listHeading[i].style.fontFamily = "I hate Comic Sans";
        }
    }
            
