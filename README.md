
# Mock test Binar Academy

Mock test ini adalah assessment yang bertujuan untuk melengkapi proses menuju job connect. Mock test tersebut berisi lima soal. Berikut lampiran soal beserta jawaban menurut saya pribadi:

### 1. Apakah Kegunaan JSON pada REST API?
Dengan menggunakan JSON dalam REST API, pengembang dapat mempermudah pertukaran data antara klien dan server serta memastikan interoperabilitas yang baik antara berbagai bahasa pemrograman.

### 2. Jelaskan bagaimana REST API bekerja
REST API bekerja dengan prinsip-prinsip berikut:

### Protokol Komunikasi: 
REST API menggunakan protokol komunikasi HTTP (Hypertext Transfer Protocol) yang sudah umum digunakan di web. Klien (seperti aplikasi web atau perangkat lunak) dan server berinteraksi melalui permintaan (request) dan respon (response) HTTP.

### Pengidentifikasian Sumber Daya: 
REST API berfokus pada sumber daya yang ingin diakses atau dimanipulasi. Sumber daya diidentifikasi melalui URI (Uniform Resource Identifier) atau URL (Uniform Resource Locator). Misalnya, URI "/users" dapat digunakan untuk mengidentifikasi sumber daya pengguna.

### Metode HTTP: 
REST API menggunakan metode HTTP untuk berinteraksi dengan sumber daya. Metode umum yang digunakan antara lain:

```
GET: Mendapatkan data dari sumber daya.
POST: Membuat sumber daya baru.
PUT: Mengubah atau memperbarui sumber daya yang ada.
DELETE: Menghapus sumber daya.
```

### Representasi Data: 
Data yang dikirimkan antara klien dan server dalam REST API umumnya menggunakan format data yang umum seperti JSON (JavaScript Object Notation) atau XML (eXtensible Markup Language). Format ini digunakan untuk mengemas data yang dikirimkan dalam permintaan atau respon.

### Status Kode HTTP: 
Setiap respon HTTP dari server mengandung status kode yang mengindikasikan keberhasilan atau kegagalan permintaan. Contoh kode status umum adalah:

```
200: Permintaan berhasil.

404: Sumber daya tidak ditemukan.

500: Kesalahan server.
```

### Stateless: 
REST API dirancang agar stateless, yang berarti server tidak menyimpan informasi status klien antara permintaan. Setiap permintaan dari klien harus berisi semua informasi yang diperlukan untuk diproses oleh server.

### 3. Buatlah sebuah website dengan fungsi dibawah ini:






- #### Login Page 

![App Screenshot](https://i.ibb.co/2tG593y/Cuplikan-layar-dari-2023-06-22-22-09-27.png)


- #### Fitur To Do List Sederhana

![App Screenshot](https://i.ibb.co/0rnL5Bs/Cuplikan-layar-dari-2023-06-22-22-16-16.png)


## To do list API

#### Get all items

```bash
  GET /api/todos
```


#### Get item

```bash
  POST /api/todos
```

#### Add item

```http
  GET /api/todos/${id}
```


#### Delete item

```bash
  DELETE /api/todos/${id}
```


## Dependencies

```json
"dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "axios": "^1.4.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "nodemon": "^2.0.22",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.1",
    "react-router-dom": "^6.13.0",
    "redux-thunk": "^2.4.2"
  },
```

## Demo

https://fsw-mocktest.netlify.app/

