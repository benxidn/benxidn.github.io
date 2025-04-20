function loadComponent(id, path) {
   fetch(path)
     .then(response => response.text())
     .then(data => {
       document.getElementById(id).innerHTML = data;
     })
     .catch(error => {
       console.error(`Gagal memuat komponen ${id}:`, error);
     });
 }
 
 document.addEventListener("DOMContentLoaded", () => {
   loadComponent("header", "components/header.html");
   loadComponent("footer", "components/footer.html");
 
// Menyisipkan tahun saat ini ke elemen dengan id "tahun"
document.addEventListener("DOMContentLoaded", () => {
   const tahunSekarang = new Date().getFullYear();
   const cekTahun = setInterval(() => {
     const el = document.getElementById("tahun");
     if (el) {
       el.textContent = tahunSekarang;
       clearInterval(cekTahun);
     }
   }, 100);
 });

// Fungsi navigasi ke berbagai link
function Home() {
   window.open("../../../", "_self");
 }
 
 function Channel() {
   window.open("https://dexter.rf.gd/1/channel1", "_self");
 }
 
 function AntiBan() {
   window.open("https://youtu.be/szocEpRmGTI", "_blank");
 }
 
 function Download() {
   window.open("https://youtu.be/Hl3Gu1IejBg", "_blank");
 }
 
 function InstallAPK() {
   window.open("https://youtu.be/gyDQEhZl4es", "_blank");
 }
 
 function AddScript() {
   window.open("https://youtu.be/6aqGQwdazVg", "_blank");
 }
 
 function Server5K() {
   window.open("https://youtu.be/EoyTJI0PyRU", "_blank");
 }
 
 function BeliAkun() {
   window.open("https://wa.me/6281338214136?text=Halo+min+saya+mau+beli+AKUN+ML+SERVER+5K+harga+5K+!!!", "_blank");
 }
 
 function Drone() {
   window.open("https://dexter.rf.gd/1/channel1", "_self");
 }
 
 function Fakecez() {
   window.open("https://dexter.rf.gd/1/channel1", "_self");
 }
 
 function Dexter() {
   window.open("https://dexter.rf.gd/1/channel1", "_self");
 }
 
 // Fungsi salin teks
 let stringText = '000';
 let stringText2 = 'SUBSCRIBE';
 
 function copyBtn() {
   navigator.clipboard.writeText(stringText);
 }
 