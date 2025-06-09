const pertanyaan = [
    {
        soal: "Kamu terlahir dari bunga yang tumbuh di Taman Empat Musim. Bunga apa itu?",
        jawaban: {
            a: { text: "Bunga Salju", skor: 1 },
            b: { text: "Bunga Sakura", skor: 2 },
            c: { text: "Bunga Maple", skor: 3 },
            d: { text: "Bunga Matahari", skor: 4 }
        }
    },
    {
        soal: "Saat Pertama Membuka Mata Apa hal pertama yang kamu lakukan?",
        jawaban: {
            a: { text: "Melihat sekeliling dengan hati-hati, lalu menyentuh tanah", skor: 1 },
            b: { text: "Mencium aroma bunga di dekatmu", skor: 2 },
            c: { text: "Memperhatikan lingkungan dan mencari teman", skor: 3 },
            d: { text: "Tertawa dan langsung terbang ke atas pohon", skor: 4 }
        }
    },
    {
        soal: "Para peri berkumpul untuk menyambutmu. Ratu Peri muncul dengan mahkota bersinar. Apa yang kamu lakukan?",
        jawaban: {
            a: { text: "Membungkuk diam-diam, takut menarik perhatian", skor: 1 },
            b: { text: "Menyerahkan bunga yang baru kamu petik", skor: 2 },
            c: { text: "Ekspresi terima kasih melalui bait-bait puisi pendek", skor: 3 },
            d: { text: "Menyapa dengan suara riang dan memperkenalkan diri", skor: 4 }
        }
    },
    {
        soal: "Ratu berkata, 'Pergilah ke Hutan Ajaib untuk menemukan jati dirimu!' Kamu...",
        jawaban: {
            a: { text: "Bertanya, 'Apa ada bahaya di sana...?'", skor: 1 },
            b: { text: "Mengajak peri lain untuk bersama", skor: 2 },
            c: { text: "Membawa peta dan buku catatan", skor: 3 },
            d: { text: "Langsung terbang dengan semangat!", skor: 4 }
        }
    },
    {
        soal: "Di pintu hutan ada beberapa jalan yang bisa kamu ambil. Jalan mana yang kamu pilih?",
        jawaban: {
            a: { text: "Jalan Berkabut", skor: 1 },
            b: { text: "Jalan Bunga", skor: 2 },
            c: { text: "Jalan Berdaun Emas", skor: 3 },
            d: { text: "Jalan Terang", skor: 4 }
        }
    },
    {
        soal: "Saat berjalan memasuki hutan, kamu bertemu mahkluk hutan. Mahkluk itu adalah...",
        jawaban: {
            a: { text: "Serigala yang Dingin", skor: 1 },
            b: { text: "Kelinci yang Cemas", skor: 2 },
            c: { text: "Burung Hantu Bijak", skor: 3 },
            d: { text: "Naga Kecil yang Lucu", skor: 4 }
        }
    },
    {
        soal: "Sebuah cermin ajaib menunjukkan bayanganmu sebagai...",
        jawaban: {
            a: { text: "Peri yang berdiri di tengah salju sendirian", skor: 1 },
            b: { text: "Penanam kebun bunga yang penuh warna", skor: 2 },
            c: { text: "Penjaga perpustakaan kuno dengan buku bersinar", skor: 3 },
            d: { text: "Petualang dengan senyum lebar", skor: 4 }
        }
    },
    {
        soal: "Kamu harus menyeberangi jembatan tua yang hampir patah. Bagaimana caramu menyeberang?",
        jawaban: {
            a: { text: "Berjalan pelan sambil merangkul diri", skor: 1 },
            b: { text: "Memanggil burung untuk membawamu terbang", skor: 2 },
            c: { text: "Memperbaiki jembatan dengan sihir daun", skor: 3 },
            d: { text: "Lari cepat sambil tertawa", skor: 4 }
        }
    },
    {
        soal: "Peri tua muncul dan bertanya, 'Apa yang kau cari di sini?' Jawabanmu:",
        jawaban: {
            a: { text: "Aku... tersesat...", skor: 1 },
            b: { text: "Teman yang bisa membantuku.", skor: 2 },
            c: { text: "Kebijaksanaan untuk memahami diriku.", skor: 3 },
            d: { text: "Petualangan seru!", skor: 4 }
        }
    },
    {
        soal: "Danau ini hanya bisa diseberangi dengan menjawab teka-teki:'Aku selalu ada di depanmu, tapi tak pernah terlihat. Apa aku?'",
        jawaban: {
            a: { text: "Bayangan...", skor: 1 },
            b: { text: "Harapan.", skor: 2 },
            c: { text: "Angin.", skor: 3 },
            d: { text: "Masa depan!", skor: 4 }
        }
    },
    {
        soal: "Kamu menemukan dua jalan: Gua Gelap (Konon ada harta karun) dan Bukit Terang (Tempat peri bijak tinggal). Pilihanmu?",
        jawaban: {
            a: { text: "Hanya mengintip dari luar gua", skor: 1 },
            b: { text: "Pergi ke bukit, tapi bawa sesuatu dari gua", skor: 2 },
            c: { text: "Membaca prasasti di pintu gua dulu", skor: 3 },
            d: { text: "Masuk gua tanpa ragu!", skor: 4 }
        }
    },
    {
        soal: "Peri jahat mencuri kantong sihirmu! Reaksimu:",
        jawaban: {
            a: { text: "Diam dan membiarkannya pergi", skor: 1 },
            b: { text: "Memanggil hewan hutan untuk membantu", skor: 2 },
            c: { text: "Menggunakan logika untuk menjebaknya", skor: 3 },
            d: { text: "Mengejar sambil tertawa", skor: 4 }
        }
    },
    {
        soal: "Sebelum pulang, kamu ingin membawa satu kenangan dari hutan, benda apa itu?",
        jawaban: {
            a: { text: "Kristal es abadi", skor: 1 },
            b: { text: "Bibit bunga langka", skor: 2 },
            c: { text: "Daun dengan tulisan", skor: 3 },
            d: { text: "Batu permata berapi", skor: 4 }
        }
    },
    {
        soal: "Setelah kembali, Ratu memberimu hadiah. Apa yang kamu pilih?",
        jawaban: {
            a: { text: "Jubah Salju", skor: 1 },
            b: { text: "Bibit Pohon Kehidupan", skor: 2 },
            c: { text: "Pena Ajaib", skor: 3 },
            d: { text: "Tanduk Sihir", skor: 4 }
        }
    },
    {
        soal: "Ratu Peri berkata bunga ini mencerminkan hatimu. Warnanya?",
        jawaban: {
            a: { text: "Biru pucat", skor: 1 },
            b: { text: "Pink muda", skor: 2 },
            c: { text: "Emas dan oranye", skor: 3 },
            d: { text: "Merah menyala", skor: 4 }
        }
    }
];

const karakter = {
    winter: {
        title: "Peri Musim Dingin ❄️",
        description: "Kehadiranmu bagai embun beku di pagi hari—lembut, misterius, dan penuh ketenangan yang menyembuhkan. Meski terkadang dianggap dingin, sejatinya kau menyimpan kehangatan yang hanya bisa dirasakan oleh mereka yang sabar mengenalimu.",
        image: "pixel/1.png",
        color: "#a0d2eb",
        range: "15-25 poin"
    },
    spring: {
        title: "Peri Musim Semi 🌸",
        description: "Energimu seperti tunas pertama yang menembus tanah—penuh harapan, kecerdasan, dan hasrat untuk terus tumbuh. Kau adalah pembawa perubahan, mengubah setiap rintangan menjadi pelajaran dengan senyuman optimismu.",
        image: "pixel/2.png",
        color: "#d0bdf4",
        range: "26-35 poin"
    },
    autumn: {
        title: "Peri Musim Gugur 🍂",
        description: "Kehadiranmu seperti lukisan alam yang indah—kreatif, hangat, dan selalu memberi inspirasi. Kau mengajarkan bahwa keindahan ada dalam setiap fase kehidupan, bahkan saat daun-daun mulai berguguran.",
        image: "pixel/4.png",
        color: "#e5eaf5",
        range: "36-45 poin"
    },
    summer: {
        title: "Peri Musim Panas ☀️",
        description: "Semangatmu menyala seperti matahari di siang bolong—ceria, bersemangat, dan tak tergantikan! Di mana pun kau berada, tawa dan keceriaanmu menular, mengubah hari biasa menjadi petualangan tak terlupakan.",
        image: "pixel/3.png",
        color: "#f75990",
        range: "46-60 poin"
    }
};

let currentQuestion = 0;
let totalScore = 0;

function displayQuestion() {
    const quizElement = document.getElementById("quiz");
    if (!quizElement) return;

    const question = pertanyaan[currentQuestion];
    let html = `<div class="question-container fade-in">`;
    html += `<div class="question-counter">Pertanyaan ${currentQuestion + 1} dari ${pertanyaan.length}</div>`;
    html += `<h3>${question.soal}</h3>`;
    html += `<div class="options-container">`;

    for (const key in question.jawaban) {
        html += `
            <div class="option-card" data-value="${key}" data-score="${question.jawaban[key].skor}">
                <p>${question.jawaban[key].text}</p>
            </div>
        `;
    }

    html += `</div></div>`;
    quizElement.innerHTML = html;

    // Add event listeners to option cards
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', function() {
            selectAnswer(this);
        });
    });

    // Scroll to question
    quizElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function selectAnswer(card) {
    const selectedScore = parseInt(card.getAttribute('data-score'));
    totalScore += selectedScore;

    // Add visual feedback
    card.classList.add('selected');
    
    // Move to next question or show results
    setTimeout(() => {
        if (currentQuestion < pertanyaan.length - 1) {
            currentQuestion++;
            document.getElementById("quiz").classList.add("fade-out");
            setTimeout(() => {
                displayQuestion();
                document.getElementById("quiz").classList.remove("fade-out");
            }, 500);
        } else {
            showResults();
        }
    }, 500);
}

function showResults() {
    const quizElement = document.getElementById("quiz");
    const resultElement = document.getElementById("result");
    
    // Hide quiz
    quizElement.style.display = "none";
    
    // Determine character based on score
    let character;
    if (totalScore >= 15 && totalScore <= 25) {
        character = karakter.winter;
    } else if (totalScore >= 26 && totalScore <= 35) {
        character = karakter.spring;
    } else if (totalScore >= 36 && totalScore <= 45) {
        character = karakter.autumn;
    } else if (totalScore >= 46 && totalScore <= 60) {
        character = karakter.summer;
    }
    
    // Display result with card
    resultElement.innerHTML = `
        <div class="result-container">
            <h2>Kuis Selesai!</h2>
            <p class="narasi">Ratu Peri memandangmu dengan penuh kebijaksanaan...</p>
            <p class="narasi">Dia mengamati setiap pilihan yang telah kamu buat selama perjalanan...</p>
            <p class="narasi">Kamu adalah...</p>
            
            <div class="character-card" style="background: linear-gradient(135deg, ${character.color}, #ffffff);">
                <img src="${character.image}" alt="${character.title}">
                <h3>${character.title}</h3>
                <p>${character.description}</p>
            </div>
            
            <div class="social-share">
                <p>Bagikan hasilmu!</p>
                <button class="btn-share twitter">Twitter</button>
                <button class="btn-share instagram">Copy Link</button>
            </div>
            
            <button id="restart" class="btn-restart">Main Lagi</button>
        </div>
    `;
    
    resultElement.style.display = "block";
    resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Add restart button event
    document.getElementById("restart").addEventListener('click', restartQuiz);
    
    // Add social share functionality
   const quizUrl = 'https://fadiyah-yeah.github.io/FairyMyFairies/';

document.querySelector('.twitter').addEventListener('click', () => {
    const text = `Aku adalah ${character.title} dalam kuis Peri Empat Musim! Coba ikuti kuisnya juga di sini: ${quizUrl}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(tweetUrl, '_blank');
});

document.querySelector('.instagram').addEventListener('click', () => {
    const text = `Aku adalah ${character.title} dalam kuis Peri Empat Musim! 🌸✨\n\nLihat hasilku di FairyMyFairies dan coba kuisnya di sini: ${quizUrl}`;
    
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('Teks hasil kuis sudah disalin ke clipboard! Siap dibagikan ke teman-temanmu.');
        })
        .catch(err => {
            alert('Gagal menyalin teks ke clipboard. Silakan salin manual.');
            console.error(err);
        });
});
}

function restartQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    
    document.getElementById("result").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    
    displayQuestion();
}

// Initialize quiz when start button is clicked
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("start-btn").addEventListener("click", function() {
        document.getElementById("intro").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        displayQuestion();
    });
});

// Add CSS for animations and styling
const style = document.createElement("style");
style.innerHTML = `
    #quiz {
        transition: opacity 0.5s ease, transform 0.5s ease;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }
    
    .fade-out {
        opacity: 0;
        transform: translateX(-20px);
    }
    
    .fade-in {
        opacity: 1;
        transform: translateX(0);
    }
    
    .question-container {
        padding: 25px;
        background: #CDD4B1;
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        margin: 20px auto;
    }
    
    .question-counter {
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
    }
    
    .options-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-top: 25px;
    }
    
    .option-card {
        padding: 20px;
        border: 2px solid #eee;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.3s ease;
        background: #d8dac1;
    }
    
    .option-card:hover {
        border-color: #bbc1a9;
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    .option-card.selected {
        background-color: #AEB297;
        color: white;
        border-color: #AEB297;
    }
    
    .result-container {
        text-align: center;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
    }
    
    .narasi {
        font-style: italic;
        margin: 15px 0;
        font-size: 18px;
        opacity: 0;
        animation: fadeIn 1s forwards;
        color: #555;
    }
    
    .narasi:nth-child(2) { animation-delay: 0.5s; }
    .narasi:nth-child(3) { animation-delay: 1s; }
    .narasi:nth-child(4) { animation-delay: 1.5s; }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

.character-card img {
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
    border-radius: 15px;
    border: 5px solid white;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.character-card {
    max-width: 500px;
    margin: 30px auto;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    text-align: center;
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 2s;
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .character-card h3 {
        font-size: 28px;
        margin: 10px 0;
        color: #333;
    }
    
    .score-range {
        font-weight: bold;
        color: #666;
        margin-bottom: 15px;
    }
    
    .character-card p {
        font-size: 16px;
        line-height: 1.6;
        color: #444;
    }
    
    .social-share {
        margin: 30px 0;
        opacity: 0;
        animation: fadeIn 1s forwards;
        animation-delay: 2.5s;
    }
    
    .btn-share {
        padding: 10px 20px;
        margin: 0 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: all 0.3s;
    }
    
    .twitter {
        background: radial-gradient(circle at 30% 107%, #F5F8FA 0%, #FFFFFF 5%, #GG757F 45%, #00ACEE 60%, #36D8FF 90%);
        color: white;
    }
    
    .instagram {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    color: white;
    }
    
    .btn-share:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    }
    
    .btn-restart {
        padding: 12px 30px;
        background-color: #D0A77B;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        margin-top: 20px;
        transition: all 0.3s;
        opacity: 0;
        animation: fadeIn 1s forwards;
        animation-delay: 3s;
    }
    
    .btn-restart:hover {
        background-color: #f3decb;
        transform: translateY(-2px);
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
    }
`;
document.head.appendChild(style);