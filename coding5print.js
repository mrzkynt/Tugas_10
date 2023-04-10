function printData(data) {
    for (let i = 0; i < data.length; i++) {
      console.log("Data ke-" + (i+1));
      console.log("Nama: " + data[i].nama);
      console.log("Umur: " + data[i].umur);
      console.log("Alamat: " + data[i].alamat);
      console.log("No. Telepon: " + data[i].noTelp);
      console.log("------------------------");
    }
  }
  
  let dataArray = [
    {nama: "Fitria", umur: 25, alamat: "Jakarta", noTelp: "081234567890"},
    {nama: "Yanda", umur: 28, alamat: "Bandung", noTelp: "085678912345"},
    {nama: "Rizky", umur: 23, alamat: "Surabaya", noTelp: "087654321098"},
    {nama: "Reskha", umur: 30, alamat: "Yogyakarta", noTelp: "081234567890"}
  ];
  
  printData(dataArray);
  