function toggleCard(id) {
  const content = document.getElementById("content" + id);

  if (content.style.display === "block") {
    content.style.display = "none";   // Menyembunyikan jika sudah terbuka
  } else {
    content.style.display = "block";  // Menampilkan jika diklik
  }
}