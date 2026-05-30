const player = document.getElementById("player");

function playSong() {
  player.pause();
  player.src = "https://drive.usercontent.google.com/uc?id=1xv5YJzYruYZikCoK6OTcbic0X8m3FYQ8&export=download";
  player.load();
  player.play().catch(err => {
    alert("Tarayıcı oynatmayı engelledi, tekrar tıkla");
  });
}