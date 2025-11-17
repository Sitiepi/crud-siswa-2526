// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// GANTI DENGAN FIREBASE CONFIG ANDA
const firebaseConfig = {
    apiKey: "AIzaSyDgGanI0xfwbMbF2Q20eftio7Hc6iyPVgI",
    authDomain: "insancemerlang-e9c87.firebaseapp.com",
    projectId: "insancemerlang-e9c87",
    storageBucket: "insancemerlang-e9c87.firebasestorage.app",
    messagingSenderId: "1009245252263",
    appId: "1:1009245252263:web:637bfe528eddfc0dc18982"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const siswaCollection = collection(db,"siswa")

// fungsi untuk menampilkan daftar siswa
export async function tampilkanDaftarSiswa() {
  // ambil snapshot data dari koleksi siswa
  const snapshot = await getDocs(siswaCollection)
  
  // ambil element tabel data
  const tabel = document.getElementById("tabelData")
  
  //kosongkan isi tablel 
  tabel.innerHTML = ""
  
  //loop setiap dokumen dalam snapshot
  snapshot.forEach((doc) => {
    // variabel untuk menyimpan data 
    const data = doc.data()
    const id = doc.id
    
    // buat element baris baru
    const baris = document.createElement("tr")
    
    //buat element kolom untuk nis
    const kolomNIS = document.createElement("td")
    kolomNIS.textContent = data.nis
    
    //buat element kolom untuk nama
    const kolomNama = document.createElement("td")
    kolomNama.textContent = data.nama
    
    // buat kolom kelas
    const kolomKelas = document.createElement("td")
    kolomKelas.textContent = data.kelas
    
    // buat element kolom untuk Aksi
    const kolomAksi = document.createElement("td")
    
    // buat tombol edit
    const tombolEdit = document.createElement("button")
    tombolEdit.textContent = "Edit"
    tombolEdit.href = "edit.html?id" + id
    tombolEdit.className = "button edit"
    
    //buat tombol hapus
    const tombolHapus = document.createElement("button")
    tombolHapus.textContent = "Hapus"
    tombolHapus.className = "button delete"
    
    //tambahkan element ke dalam kolom aksi
    kolomAksi.appendChild(tombolEdit)
    kolomAksi.appendChild(tombolHapus)
    
    //tambah kolom kedalam baris
    baris.appendChild(kolomNIS)
    baris.appendChild(kolomNama)
    baris.appendChild(kolomKelas)
    baris.appendChild(kolomAksi)
    
    //tambahkan baris kedalam tabel
    tabel.appendChild(baris)
  })
}