# Setup Login Admin Aman (Firebase Auth)

Panduan singkat untuk mengaktifkan login admin yang sudah disuntikkan ke `index.html`.

1. Buat proyek Firebase di https://console.firebase.google.com/
2. Aktifkan Authentication → Sign-in method → Email/Password.
3. Buat akun admin pada Authentication → Users ("Add user") dengan email dan password.
4. Dapatkan konfigurasi proyek (Project settings → Your apps → Web app). Salin `firebaseConfig` dan tempelkan ke bagian `const firebaseConfig = { ... }` di `index.html`.

Catatan keamanan:
- Gunakan rules Firestore/Storage yang ketat jika menambah penyimpanan gambar.
- Jangan menyimpan password di berkas frontend. Admin harus dibuat melalui Firebase Console atau backend terpisah.

Jika ingin otorisasi lebih lanjut, pertimbangkan memeriksa `user.email` di aplikasi untuk memastikan hanya email admin yang diizinkan mengakses dashboard, atau gunakan custom claims lewat Firebase Admin SDK di backend.

Firestore (opsional):
- Aktifkan Firestore di Firebase Console → Firestore Database.
- Untuk prototyping, Anda bisa menggunakan mode test (buka akses) sementara, tetapi untuk produksi, atur rules agar hanya admin yang dapat menulis.
- Koleksi yang digunakan oleh aplikasi ini:
	- `menus` (dok id = menu.id)
	- `members` (dok id = phone)
	- `sales` (dok otomatis)

Jika Firestore dikonfigurasi di `index.html`, aplikasi akan mencoba membaca data dari Firestore saat mulai dan menulis perubahan (tambah menu, update member, simpan transaksi) ke Firestore juga. Jika Firestore tidak tersedia, aplikasi tetap menggunakan `localStorage`.

Google Sign-In (untuk dashboard admin):
- Di Firebase Console → Authentication → Sign-in method, aktifkan `Google` sebagai provider.
- Tambahkan domain tempat Anda menjalankan `index.html` ke Authorized domains pada pengaturan Authentication (mis. `localhost`).
- Pastikan akun Google `gintingdhanie@gmail.com` ada dan Anda akan log in menggunakan tombol "Masuk dengan Google" di modal login admin.
- Aplikasi ini membatasi akses admin hanya ke email `gintingdhanie@gmail.com`. Jika akun yang login bukan email tersebut, akses admin akan otomatis di-logout.
