const properties = [
  { type: "Home", city: "Yangon", region: "South", price: "Under $50,000", name: "Cozy Home in Yangon" },
  { type: "Apartment", city: "Mandalay", region: "North", price: "$50,000 - $100,000", name: "Modern Apartment" },
  { type: "Home", city: "Yangon", region: "South", price: "Above $100,000", name: "Luxury Villa" },
];

function filterProperties() {
  const type = document.getElementById("property-type").value;
  const city = document.getElementById("city").value;
  const region = document.getElementById("region").value;
  const price = document.getElementById("price").value;

  const filtered = properties.filter(p => {
    return (!type || p.type === type) &&
           (!city || p.city === city) &&
           (!region || p.region === region) &&
           (!price || p.price === price);
  });

  const catalog = document.getElementById("catalog");
  catalog.innerHTML = filtered.map(p => `
    <div class="property-card">
      <h3>${p.name}</h3>
      <p>Type: ${p.type}</p>
      <p>City: ${p.city}</p>
      <p>Region: ${p.region}</p>
      <p>Price: ${p.price}</p>
    </div>
  `).join('');
}
