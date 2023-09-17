// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

// apabila kita mengklik salah satu action button seprti batu maka permainan akan dimulai
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Loop through each option image again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // Remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Mengatur batas waktu untuk menunda penghitungan hasil
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Dapatkan sumber gambar opsi yang diklik
            let imageSrc = e.target.querySelector("img").src;
            // Mengatur gambar pengguna ke gambar opsi yang diklik
            userResult.src = imageSrc;

            // Menghasilkan angka acak antara 0 dan 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Membuat serangkaian pilihan gambar CPU
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            // Mengatur gambar CPU ke opsi acak dari larik
            cpuResult.src = cpuImages[randomNumber];

            //Menetapkan nilai huruf untuk opsi CPU (R untuk batu, P untuk kertas, S untuk gunting)
            let cpuValue = ["R", "P", "S"][randomNumber];
            //Menetapkan nilai huruf pada opsi yang diklik (berdasarkan indeks)
            let userValue = ["R", "P", "S"][index];

            // Membuat objek dengan semua kemungkinan hasil
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            //Mencari nilai hasil berdasarkan opsi pengguna dan CPU
            let outComeValue = outcomes[userValue + cpuValue];

            // Menampilkan hasilnya
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2500);
    });
});
