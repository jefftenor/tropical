      document.querySelector(".menu").addEventListener("click", function (e) {
        e.preventDefault();
       
        if (e.target.innerText === "Início") {
          location.href = "./../../";
          return;
        }
        const iframe = document.getElementById("iframe");
         iframe.style.display = "none";
        iframe.src = "";


        iframe.src = e.target.getAttribute("url");
                iframe.style.display = "block";
        resizeIframe();
      });