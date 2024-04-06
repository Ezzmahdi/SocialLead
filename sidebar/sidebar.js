const body = document.querySelector('body');
    sidebar = body.querySelector('body');
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwtich = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");
    
    toggle.addEventListener("click", () =>{
      var sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.toggle("close");
      } else {
        console.error("Sidebar element not found.");
      }
    });
  
    searchBtn.addEventListener("click", () =>{
      
      var sidebar = document.querySelector('.sidebar');
      if (sidebar) {
        sidebar.classList.remove("close");
      } else {
        console.error("Sidebar element not found.");
      }
    });
    
    modeSwtich.addEventListener("click", () =>{
      body.classList.toggle("dark");
    
      if(body.classList.contains('dark')){
          modeText.innerText = 'Light Mode'
      }else{
          modeText.innerText = 'Dark Mode'
      }
    });