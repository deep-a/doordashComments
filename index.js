var copyText = document.querySelectorAll(".copy");

for (const copied of copyText) { 
    copied.onclick = function() { 
        navigator.clipboard.writeText(copied.innerHTML);
        this.style.color = "green";
        
        setTimeout(() => {
            this.style.color = "black";
        }, 250);
    }
  };