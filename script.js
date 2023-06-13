function adiciona() {
    var item = document.createElement("li");
    var els = document.getElementById("sas");
    var inputer = document.getElementById("adc").value;
    els.appendChild(item);
    item.innerHTML = inputer;
}

function adiciona1() {
    var item = document.createElement("li");
    var els = document.getElementById("sas1");
    var inputer = document.getElementById("adc1").value;
    els.appendChild(item);
    item.innerHTML = inputer;
}


function adiciona2() {
    var item = document.createElement("li");
    var els = document.getElementById("sas2");
    var inputer = document.getElementById("adc2").value;
    els.appendChild(item);
    item.innerHTML = inputer;

}

function adiciona3() {
    var item = document.createElement("li");
    var els = document.getElementById("sas3");
    var inputer = document.getElementById("adc3").value;
    els.appendChild(item);
    item.innerHTML = inputer;
}

function remove() {
    var element = document.getElementById("sas");
    if (element && element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
  
  function remove1() {
    var element = document.getElementById("sas1");
    if (element && element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
  
  function remove2() {
    var element = document.getElementById("sas2");
    if (element && element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
  
  function remove3() {
    var element = document.getElementById("sas3");
    if (element && element.lastChild) {
      element.removeChild(element.lastChild);
    }
  }
     