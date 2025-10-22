document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");


  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (username === "user" && password === "user") {
        alert("Login berhasil! Selamat datang, Bos 😎");
        window.location.href = "index.html"; 
      } 
      else if (username === "admin" && password === "admin") {
        alert("Login berhasil! Selamat datang, Admin 😎");
        window.location.href = "admin/index.html"; 
      } 
      else {
        alert("Username atau password salah!");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Akun berhasil dibuat! Silakan login.");
      window.location.href = "login.html";
    });
  }
});
