(function() {

  function loadJSON(callback) {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET',
     'https://jsonplaceholder.typicode.com/posts', 
     true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == "200") {
        callback(xhr.responseText);
      }
    }
    xhr.send(null);
  }

  loadJSON(function(response) {
    let jsonResponse = JSON.parse(response);
    renderTable(jsonResponse);
  });

  function renderTable(jsonObject) {
    let tableBody = document.querySelector('[data-js=tableBody]');
    
    for (let i = 0; i < jsonObject.length; i++) {
      let row = document.createElement('tr');
      let userId = document.createElement('td');
      let id = document.createElement('td');
      let title = document.createElement('td');
      let body = document.createElement('td');
      
      userId.textContent = jsonObject[i].userId;
      id.textContent = jsonObject[i].id;
      title.textContent = jsonObject[i].title;
      body.textContent = jsonObject[i].body;

      row.appendChild(userId)
      row.appendChild(id);
      row.appendChild(title);
      row.appendChild(body);

      tableBody.appendChild(row);
    }
  }
})();