const menu = [
  { name: "Nasi Goreng Spesial", price: 25000 },
  { name: "Mie Goreng Jawa", price: 22000 },
  { name: "Sate Ayam Madura", price: 30000 },
  { name: "Gado-Gado Betawi", price: 20000 },
  { name: "Bakso Kuah", price: 18000 },
  { name: "Es Teh Manis", price: 7000 },
  { name: "Jus Jeruk Segar", price: 12000 },
];

let selectedItem = null;
const menuList = document.getElementById('menu-list');
const pesananList = document.getElementById('pesanan-list');
const tambahBtn = document.getElementById('tambah-btn');

// Tampilkan menu
menu.forEach((item, index) => {
  const div = document.createElement('div');
  div.classList.add('menu-item');
  div.innerHTML = `${item.name}<br><small>Rp ${item.price.toLocaleString()}</small>`;
  div.addEventListener('click', () => {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('selected'));
    div.classList.add('selected');
    selectedItem = item;
  });
  menuList.appendChild(div);
});

// Tambah ke pesanan
tambahBtn.addEventListener('click', () => {
  if (!selectedItem) return alert("Pilih menu terlebih dahulu!");

  const li = document.createElement('li');
  li.textContent = `${selectedItem.name} - Rp ${selectedItem.price.toLocaleString()}`;
  pesananList.appendChild(li);

  // Reset pilihan
  document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('selected'));
  selectedItem = null;
});