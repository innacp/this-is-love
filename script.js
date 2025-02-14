// // function showLoader() {
// //   console.log("loader shown");
// //   loader.classList.add("show");
// // }

// // function hideLoader() {
// //   console.log("loader hidden");
// //   loader.classList.remove("show");
// // }

// // const heartButton = document.querySelector(".heart-button");
// // heartButton.addEventListener("click", () => {
// //   const whisper = document.getElementById("whisper");
// //   whisper.play();
// // });

// function startQuest() {
//   const audioIframe = document.getElementById("audio-player");
//   audioIframe.style.display = "none";

//   audioIframe.contentWindow.postMessage("play-audio", "*");
//   setTimeout(() => {
//     window.location.href = "index.html";
//   }, 2000);
// }

// // let audio = document.getElementById("whisper");
// // let playButton = document.getElementById("play-button");
// // let pauseButton = document.getElementById("pause-button");
// // let isPlaying = false; // Track playback state

// // playButton.addEventListener("click", function () {
// //   audio.play();
// //   isPlaying = true;
// //   playButton.style.display = "none"; // Hide play button
// //   pauseButton.style.display = "inline-block"; // Show pause button
// // });

// // pauseButton.addEventListener("click", function () {
// //   audio.pause();
// //   isPlaying = false;
// //   pauseButton.style.display = "none"; // Hide pause button
// //   playButton.style.display = "inline-block"; // Show play button
// // });

// // // Check if audio was playing on previous page (using localStorage)
// // if (localStorage.getItem("isPlaying") === "true") {
// //   audio.play();
// //   isPlaying = true;
// //   playButton.style.display = "none"; // Hide play button
// //   pauseButton.style.display = "inline-block"; // Show pause button
// // }

// // // Store playback state before navigating away
// // window.addEventListener("beforeunload", function () {
// //   localStorage.setItem("isPlaying", isPlaying);
// // });

// // let audio = document.getElementById("whisper");
// // let isPlaying = true;

// // if (localStorage.getItem("isPlaying") === "true") {
// //   audio.play(); // No need to set isPlaying again

// //   window.addEventListener("beforeunload", function () {
// //     localStorage.setItem("isPlaying", isPlaying);
// //   });
// // }
