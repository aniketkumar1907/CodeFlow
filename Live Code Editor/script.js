
    let htmlCode = document.getElementById("html_code");
    let cssCode = document.getElementById("css_code");
    let jsCode = document.getElementById("js_code");
    let result = document.getElementById("output");

function run(){
    localStorage.setItem('htmlCode',htmlCode.value);
    localStorage.setItem('cssCode',cssCode.value);
    localStorage.setItem('jsCode',jsCode.value);

  result.contentDocument.body.innerHTML =localStorage.htmlCode+ "<style>"+localStorage.cssCode+"</style>";
  result.contentWindow.eval(localStorage.jsCode);
}

htmlCode.value=localStorage.getItem("htmlCode");
cssCode.value=localStorage.getItem("cssCode");
jsCode.value=localStorage.getItem("jsCode");


function myFunction(el){
  el.classList.toggle('fa-moon');
  var elm = document.body;
  elm.classList.toggle('dark-mode');
  
}