import { products } from "./data.js";
let debug = true;

let log = (mesage) => {
    if (debug) {
        console.log(mesage);
    } else {
        console.log(`Debug is inactive!`);
        
    }
};

log(`Test!`);



document.getElementById('search').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().startsWith(query));

    const list = document.getElementById('results');
    
      if (results.length === 0) {
    list.innerHTML = '<p>Nu s-au găsit rezultate</p>';
    return;
  }

    list.innerHTML = '';
    
  let html = `
    <table>
      <thead>
        <tr>
          <th>Cod</th>
          <th>Denumire</th>
          <th>Detalii</th>
          <th>Pret (RON)</th>
        </tr>
      </thead>
      <tbody>
  `;
  
  results.forEach(p => {
    html += `
      <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.type}</td>
        <td>${p.price.toFixed(2)}</td>
      </tr>
    `;
  });
  
  html += `
      </tbody>
    </table>
  `;
  
  list.innerHTML = html;
});

