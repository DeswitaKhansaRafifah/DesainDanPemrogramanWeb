// ===== Memuat Daftar Anggota (pakai fungsi generik dari app.js) =====
function muatDaftarAnggota() {
    muatDaftar(
        "../data/anggota.json",
        ["no_anggota", "nama", "alamat", "no_hp"]
    );
}

document.addEventListener("DOMContentLoaded", muatDaftarAnggota);