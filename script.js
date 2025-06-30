function peringati() {
  alert("Hahahhaha, tempat ini telah diserang oleh hantu anomali berkepala tiga!");
  document.getElementById("utama").style.backgroundColor = "red";
  let sound = document.createElement("audio");
  sound.src = "https://audio.jukehost.co.uk/58fx8oCMdBtlBHoAdJzkMpEokQKKtWkW";
  sound.type = "audio/mpeg"
  sound.loop = true;
  sound.play();
  document.getElementById("gambar").classList.add("geser");
  document.getElementById("teks-berjalan").classList.add("ganti");
  let gambar = document.getElementById("gambar");
  let index = 0;
  const gambarArray = ["TungTung.jpg","Balerina.jpg","Dontol.jpg","GedaGedi.jpg", "Hiu.jpg","Buaya.jpg", "Gajah.jpg","Monyet.jpg","Garam.jpg", "Patapim.jpg","Bis.jpg","BisHitam.jpg","Kadal.jpg","Pisang.jpg","Assasino.jpg"];
  setTimeout(() => {
    gambar.style.animationPlayState = "running";
    setInterval(() => {
      gambar.src = gambarArray[index];
      index = (index + 1) % gambarArray.length;
    }, 5000); 
  }, 100);
}
