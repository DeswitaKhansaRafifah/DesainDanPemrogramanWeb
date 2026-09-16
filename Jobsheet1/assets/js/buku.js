// ===== Memuat Daftar Buku (pakai fungsi generik dari app.js) =====
function muatDaftarBuku() {
    muatDaftar(
        "../data/buku.json",
        ["judul", "pengarang", "tahun", "stok", "kategori"],
        { hasDetailButton: true }
    );
}

document.addEventListener("DOMContentLoaded", muatDaftarBuku);

// ===== Tombol Muat Ulang =====
const btnReload = document.getElementById("btn-reload");
if (btnReload) {
    btnReload.addEventListener("click", muatDaftarBuku);
}