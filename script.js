// Inisialisasi bintang
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        starsContainer.appendChild(star);
    }
}

// Inisialisasi bunga
function createFlowers() {
    const flowersContainer = document.getElementById('flowers');
    const flowerCount = 5;
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flower.style.animationDelay = `${Math.random() * 10}s`;
        flowersContainer.appendChild(flower);
    }
}

// Pesan countdown yang berubah
const countdownMessages = [
    "Menghitung hari hingga setahun lagi keajaibanmu",
    "Setiap detik menghitung menuju momen spesial",
    "Menunggu hari di mana cahayamu bersinar lebih terang",
    "Waktu terus berlari menuju perayaanmu yang istimewa",
    "Menghitung detik-detik menuju kebahagiaanmu"
];

let currentMessageIndex = 0;

// Form handling
document.getElementById('birthdayForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validasi form
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const birthdate = document.getElementById('birthdate').value;
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    
    if (!name) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    if (!age || age < 1 || age > 120) {
        document.getElementById('ageError').style.display = 'block';
        isValid = false;
    }
    
    if (!birthdate) {
        document.getElementById('birthdateError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Tampilkan surat cinta
        document.getElementById('loveLetterCard').style.display = 'block';
        
        // Update countdown
        updateCountdown(name, age, birthdate);
        
        // Scroll ke surat cinta
        document.getElementById('loveLetterCard').scrollIntoView({ behavior: 'smooth' });
    }
});

// Update countdown
function updateCountdown(name, age, birthdate) {
    const birthDate = new Date(birthdate);
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // Tahun lahir berikutnya
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());
    
    // Jika ulang tahun tahun ini sudah lewat, gunakan tahun depan
    if (nextBirthday < now) {
        nextBirthday.setFullYear(currentYear + 1);
    }
    
    // Update countdown setiap detik
    setInterval(() => {
        const now = new Date();
        const diff = nextBirthday - now;
        
        if (diff <= 0) {
            document.getElementById('countdownDisplay').textContent = "Hari Ulang Tahun!";
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdownDisplay').textContent = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
    
    // Update pesan countdown secara berkala
    setInterval(() => {
        currentMessageIndex = (currentMessageIndex + 1) % countdownMessages.length;
        const messageElement = document.getElementById('countdownMessage');
        messageElement.classList.add('message-animation');
        messageElement.innerHTML = `<span class="heart-icon">❤</span> ${countdownMessages[currentMessageIndex]} <span class="heart-icon">❤</span>`;
        
        setTimeout(() => {
            messageElement.classList.remove('message-animation');
        }, 2000);
    }, 5000);
}

// Tema surat cinta
const letterThemes = {
    gratitude: {
        title: "Dengan Tulus Bersyukur",
        content: [
            "Kepada [nama], di ulang tahun ke-[age], lahir pada [formattedDate],",
            "",
            "Pada hari spesial ini, kami ingin menyampaikan rasa syukur yang tulus atas kehadiran Anda dalam hidup kami. Setiap momen bersama adalah anugerah yang tak ternilai.",
            "",
            "Terima kasih telah menjadi sumber cahaya, kehangatan, dan inspirasi. Anda telah membawa keajaiban ke dalam kehidupan kami dengan cara yang tak terduga.",
            "",
            "Semoga tahun ini membawa lebih banyak kebahagiaan, tawa, dan kenangan indah. Anda pantas mendapatkan segala yang terbaik dalam hidup.",
            "",
            "Dengan tulus,",
            "Sahabat Spesial Anda"
        ]
    },
    admiration: {
        title: "Dengan Kekaguman Tulus",
        content: [
            "Kepada [nama], di ulang tahun ke-[age], lahir pada [formattedDate],",
            "",
            "Hari ini adalah hari yang istimewa untuk mengungkapkan kekaguman kami terhadap Anda. Anda memiliki sifat-sifat luar biasa yang membuat Anda begistis.",
            "",
            "Kekaguman kami terhadap Anda tidak terbatas pada satu hal, melainkan pada cara Anda menginspirasi, mencintai, dan memberikan dampak positif di sekitar Anda.",
            "",
            "Kehadiran Anda adalah anugerah bagi semua orang yang beruntung bisa mengenal Anda. Teruslah bersinar dengan cahaya unik Anda.",
            "",
            "Selamat ulang tahun untuk orang yang begitu istimewa dan luar biasa.",
            "",
            "Dengan hormat,",
            "Yang Mengagumi Anda"
        ]
    },
    hopes: {
        title: "Dengan Harapan Penuh Cinta",
        content: [
            "Kepada [nama], di ulang tahun ke-[age], lahir pada [formattedDate],",
            "",
            "Pada ulang tahun Anda, kami mengirimkan harapan terbaik untuk masa depan yang penuh kebahagiaan, kesuksesan, dan cinta.",
            "",
            "Harapan kami untuk Anda adalah bahwa setiap impian Anda akan terwujud, setiap tujuan Anda akan tercapai, dan setiap langkah Anda akan dipenuhi dengan keberuntungan.",
            "",
            "Semoga tahun ini membawa Anda lebih dekat kepada visi Anda dan membuka pintu-pintu baru yang menakjubkan.",
            "",
            "Anda layak mendapatkan semua kebaikan dalam hidup ini. Mari kita rayakan hari ini sebagai awal dari petualangan yang lebih indah.",
            "",
            "Dengan harapan terbaik,",
            "Teman Setia Anda"
        ]
    }
};

// Pilihan tema surat cinta
document.querySelectorAll('.letter-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.letter-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        
        // Update surat cinta
        updateLoveLetter();
    });
});

// Update surat cinta
function updateLoveLetter() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const birthdate = document.getElementById('birthdate').value;
    const selectedTheme = document.querySelector('.letter-option.selected').dataset.theme;
    const theme = letterThemes[selectedTheme];
    
    // Format tanggal
    const formattedDate = new Date(birthdate).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    
    // Isi konten surat
    let letterContent = `<h3 style="font-family: 'Brush Script MT', cursive; font-size: 1.8rem; margin-bottom: 20px; color: #ff6b6b;">${theme.title}</h3>`;
    
    theme.content.forEach(line => {
        letterContent += `<p style="margin-bottom: 15px;">${line.replace('[nama]', name).replace('[age]', age).replace('[formattedDate]', formattedDate)}</p>`;
    });
    
    document.getElementById('loveLetterText').innerHTML = letterContent;
}

// Download surat cinta
document.getElementById('downloadLetter').addEventListener('click', function() {
    const loveLetterContent = document.getElementById('loveLetterContent');
    
    // Tambahkan efek perkamen dan segel
    loveLetterContent.style.background = 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'><rect width=\'100\' height=\'100\' fill=\'%23FFF8DC\'/><path d=\'M0,0 L100,100 M100,0 L0,100\' stroke=\'%23D2B48C\' stroke-width=\'0.5\' opacity=\'0.3\'/></svg>")';
    
    html2canvas(loveLetterContent, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        // Buat link download
        const link = document.createElement('a');
        link.download = `surat-cinta-${document.getElementById('name').value}.png`;
        link.href = canvas.toDataURL();
        link.click();
        
        // Kembalikan background asli
        loveLetterContent.style.background = '';
    });
});

// Pilihan tema latar
document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
        
        const theme = this.dataset.theme;
        document.body.className = '';
        
        if (theme !== 'default') {
            document.body.classList.add(`theme-${theme}`);
        }
    });
});

// Inisialisasi
createStars();
createFlowers();