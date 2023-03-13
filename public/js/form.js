const scriptURL =
  "https://script.google.com/macros/s/AKfycbxqLcLaoePQb8ZvOcqSbYw58grtbCotBcgFS8TTmty14eBqVCbsyGZBd_f1DjzhCEQDbA/exec";
const form = document.forms["portolio-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol kirim di submit
  //tampilkan tombol loading, sembunyikan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form)
  })
    .then((response) => {
      //tampilkan tombol kirim,hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampilkan alert
      myAlert.classList.toggle("d-none");
      //reset formulir
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});