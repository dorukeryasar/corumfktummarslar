const player = document.getElementById("player");

function playSong() {
  player.pause();

  const url = "https://drive.usercontent.google.com/uc?id=1xv5YJzYruYZikCoK6OTcbic0X8m3FYQ8&export=download";

  player.src = url;
  player.load();

  // en kritik kısım: direkt kullanıcı action içinde play
  player.play();
}
