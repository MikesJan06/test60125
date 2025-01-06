
document.addEventListener("DOMContentLoaded", () => {
    const zacatek = localStorage.getItem("zacatek") || "";
    const zvrat = localStorage.getItem("zvrat") || "";
    const zaver = localStorage.getItem("zaver") || "";
  
    document.getElementById("zacatek").value = zacatek;
    document.getElementById("zvrat").value = zvrat;
    document.getElementById("zaver").value = zaver;
  
    if (zacatek || zvrat || zaver) {
      showIndex();
    }
  });
  
  
  function saveStory() {
    const zacatek = document.getElementById("zacatek").value;
    const zvrat = document.getElementById("zvrat").value;
    const zaver = document.getElementById("zaver").value;
  
    localStorage.setItem("zacatek", zacatek);
    localStorage.setItem("zvrat", zvrat);
    localStorage.setItem("zaver", zaver);
  
    showIndex();
  }
  
 
  function showIndex() {
    document.getElementById("zacatek-text").innerText = localStorage.getItem("zacatek") || "";
    document.getElementById("zvrat-text").innerText = localStorage.getItem("zvrat") || "";
    document.getElementById("zaver-text").innerText = localStorage.getItem("zaver") || "";
  
    document.getElementById("setup").classList.add("hidden");
    document.getElementById("index").classList.remove("hidden");
  }
  
  
  function showSetup() {
    document.getElementById("index").classList.add("hidden");
    document.getElementById("setup").classList.remove("hidden");
  }
  