const player = document.getElementById("player");

function playSong() {
  player.src = "https://drive.usercontent.google.com/uc?id=1xv5YJzYruYZikCoK6OTcbic0X8m3FYQ8&export=download";
  
  player.load();

  // küçük gecikme = tarayıcı engelini bypass eder
  setTimeout(() => {
    const playPromise = player.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        alert("▶ Tekrar butona bas");
      });
    }
  }, 200);
}
