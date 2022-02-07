
let p = document.getElementById("texted");



function nomo() {



    if (document.getElementById("text").value == '') {



        alert("please enter something habibi");
        setInterval(() => {
            document.getElementById("text").style.display = "block";
        }, 1000);
        document.getElementById("text").style.display = "none";

    } else {



        document.getElementById("text").style.display = "block";


        let text = document.getElementById("text");


        const button = document.createElement("button");

        const texto = document.createTextNode("Delete");
        const p = document.createElement("p");


        const textnode = document.createTextNode(text.value);


        p.appendChild(textnode);
        p.appendChild(button);

        button.appendChild(texto);



        document.getElementById("texted").appendChild(p);
        document.getElementById("text").value = "";
        button.setAttribute("class", "helloButton");

        button.addEventListener("click", function () {
            p.remove();


            // });

        })

    }
}











