/* script.js */
 // Background music control
 document.body.addEventListener('click', function() {
    document.getElementById('background-music').play();
});
// Slideshow functionality
let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 2 seconds
} 


function showMessage() {
const username = document.getElementById('username').value;
const messageElement = document.getElementById('message');

let message = '';

switch (username.toLowerCase()) {
case 'sukriti':
    message = ' wao wao waooo,I love you😍😍😍❤️❤️';
    break;
case 'khushi':
    message = 'Thankuu so much!! sab chiz ke lie bachpan se leke ab tak hame 10 saal se v jyada ho gye par hamari jo dosti hai vo abhi bhi un 6th class ke bacho ki tarah hai!! bhaut pyariiii... nazar na lagee thuu thuu!! 🧿❤️and love you so much !!! kabhi bhi meri need ho life me to bs ek call kar dena bina kux soche ..✨🫂';
    break;
case 'swaaaaah':
    message = 'apke bare me to kya kehna ap to mast admi hai... 😍🤣 but schii thankuuu so much for everything my buddy .. tu bhaut axa hai sch me .. ye teko v pata hai 🤣🤣parr best banda hai tu.. mai to  dekh hamesha yahi wish karungi tere lie ki tujhy jindgi me jo chhaiye vo ytujhy mil jayee 🤣🤣❤️.. tere soche hue goals sab pure ho or tu hamesha khush rhe.. tuuu jis din success hoga mai sach me us din bhaut khush hongi... and haa apni shadi me jarur bulana mujhy ok my swaa!!! apna dhyna rakha kar jab tak koi gf ni ban jati dhyn rkhne wali... 🤣🫂🧸✨✨✨✨✨❤️❤️orrr baki tu bhaut axa hai bhaut bhaut bhaut bhaut bhaut .... mai jitna kahu utna kam hai ...tuny mere sath jitna v time bitaya mujhy bhaut axa laga tere sath rehkr .. tere sath mujhy ek alag si hi vibe aati hai jo mujhy sach me kisii ke sath nahi aati chahe mai us insan ke sath kitna v rahu hu tu bilkul alag band hia or ekdam mast hai...itttti sari qualities hai tujhme..khana axa banata hai .. kaam v sab karta hai pdai me v axa hai 🤣🤣🤣🤣🤣jyada tareef  nahi kardi mene teri kahi tu hawa me udra ise padne ke baad or ye mai bs khali tere kehne par ni likhri uss tym mai website banari thi to mere dimag me kux aa ni raha tha kyuki sabke lie likhna tha meko kux na kux ... too isliye mene likh dia ab... ab to khush special admi ... or or or hope sooo hmara bond hamesh ais ehi rahe pyara tha ekdam cute cute sa mast wala... iski vibe kabhi kahatam na ho... 🫂🫂🫂you are my best buddy ever... reallyy...💖💖💖 '
    break;
case 'santoshi':
    message = 'teko har chiz ke lie thankuuu!! jo hamara bond raha hai na vo bhaut pyara hai and please ise kabhi bhi tootne mat dena !!  narazgi wgera to chalta rehta hai but love you!!~🫂❤️✨';
    break;
case 'nishtha':
    message = ' thanku baby girl for everything!! ap bhaut axxe ho.. and hamari dosti chahe thodi late me hui par bhaut axxi hui or mai chahungi ye bond ap kabhi na todo or hmesha ham bhaut axxe friends rahe ... love you !! 🫂🧸✨';
    break;
    case 'vansh': 
    message = 'maaayoovee!! bhaut axa laga tere sath 11th and 12th me.. ladai karke... thnkuu .. mera bhai banne ke lie .. 🤣🤣 take care ✨❤️'
    break;
    case 'shivam': 
    message = 'Thankuuuu so much for everything.. tere sath ye do saal kab gye pata hi nhi chala bhaut maja aaya... hamari ladai v .. ek dusre ko marna bhi.. or aise hi har saal ham milte rhenge or khoob maja karenge..💗🫂'
    break;
  case 'siddharth': 
    message = 'ap bhaut axxe hai or hope so hamesha rahoge bhi... apke sath 2 saal bitake bhaut axa laga thanku so much for being my friend.. 💖'
    break;
    case 'deepika': 
    message = 'ap bhaut axxe hai or hope so hamesha rahoge bhi... aise hi mehnat ke sath padai karte raho dekhna ek din jrur IS banoge..  thaku ek axxa sa dost banne ke lie... 🫂💖.. 💖'
    break;
    case 'mehak': 
    message = 'tere sath tym karke bhaut axa lga thodi khadoos hai tu.. gussa ho jati hai.. par i love challenges🤣🤣..baki love you.. bhaut axxi h tuu ..bs hamse baat v kar lia kar kabhi kabhi .. kux chla thodi jayega... 💖'
    break;
    case 'aradhna': 
    message = 'ap ho ek decent si pyari si ldki.. jo thodi introvert hai par jab baat karti hai to maja taa hai.. thnku ye 2 saal mere sath bitane ke lie.. mujhy bhaut axa laga apke sath...💖💖🧸'
    break;
    case 'radheshyam': 
    message = 'bhaut yaad ati hai na terko meri.. ye le website bana di tere lie🤣🤣...ab jab bhi tu ise dekhega tab or yaad aa jayegi... maja aya par tere sath 10th me v 11th me v or 12th me bhi.. good luck for ur future.. 🫂💖💖💖🧸'
    break;
    case 'harshit':
    message = 'thankuu so much itne saal mere sath axxe se rehne ke lie.. tu bhaut axa hai par or hmesha aise hi rehna.. good luck for ur future harshit✨✨'
    break;
default:
    message = 'Name not recognized';
}

const greetingMessage = `Hey ${username}, `;
messageElement.textContent = `${greetingMessage} ${message}`;

messageElement.style.opacity = 0;
setTimeout(() => {
messageElement.style.opacity = 1;
animateMessage();
}, 2000);
}

function animateMessage() {
const messageElement = document.getElementById('message');
messageElement.innerHTML += ' 🌸💖';

let flowerEmoji = '🌸';
let heartEmoji = '💖';

let count = 1; // Start with 1 because one set of emojis is already added

const interval = setInterval(() => {
if (count >= 4) {
    clearInterval(interval);
} else {
    messageElement.innerHTML += `${flowerEmoji} ${heartEmoji}`;
    count++;
}
}, 1000);
}
  
document.getElementById('game-launcher').addEventListener('click', function() {
    document.getElementById('game-container').style.display = 'flex';
});

document.getElementById('shuffle').addEventListener('click', function() {
    shufflePieces();
});

document.getElementById('imageSelect').addEventListener('change', function() {
    imageSrc = this.value;
    createPieces(imageSrc);
    shufflePieces();
});

document.getElementById('game-launcher').addEventListener('click', function() {
    openModal('game');
});


function openModal(modalType) {
    if (modalType === 'gallery') {
        document.getElementById("galleryModal").style.display = "block";
    } else if (modalType === 'game') {
        document.getElementById("gameModal").style.display = "block";
        createPieces()
    }
    else if(modalType==='video'){
        document.getElementById("videoModal").style.display = "block";
    }
}

function closeModal(modalType) {
    if (modalType === 'gallery') {
        document.getElementById("galleryModal").style.display = "none";
    } else if (modalType === 'game') {
        document.getElementById("gameModal").style.display = "none";
    }
    else if(modalType === 'video'){
        document.getElementById("videoModal").style.display = "none";
    }
    document.getElementById("fullSizeImage").style.display = 'none'; // Hide full-size image when modal is closed
}

function showFullSizeImage(src) {
    var fullSizeImage = document.getElementById("fullSizeImage");
    fullSizeImage.src = src;
    fullSizeImage.style.display = "block";
    document.querySelector('.close-enlarged').style.display = 'block';
}

function closeFullSizeImage() {
    var fullSizeImage = document.getElementById("fullSizeImage");
    fullSizeImage.style.display = "none";
    document.querySelector('.close-enlarged').style.display = 'block';}


createPieces(imageSrc);
shufflePieces();

function createPieces(imageSrc) {
    pieces = [];
    puzzle.innerHTML = '';

    for (let i = 0; i < 16; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.style.backgroundImage = `url(${imageSrc})`;
        piece.style.backgroundPosition = `${-(i % 4) * 100}px ${-Math.floor(i / 4) * 100}px`;
        piece.draggable = true;
        pieces.push(piece);
        puzzle.appendChild(piece);

        // Add drag event listeners to each piece
        piece.addEventListener('dragstart', handleDragStart);
        piece.addEventListener('dragover', handleDragOver);
        piece.addEventListener('drop', handleDrop);
        piece.addEventListener('dragend', handleDragEnd);
    }
}

function shufflePieces() {
    pieces.sort(() => Math.random() - 0.5);
    puzzle.innerHTML = '';
    pieces.forEach(piece => puzzle.appendChild(piece));
}

function checkSolved() {
    for (let i = 0; i < pieces.length; i++) {
        const expectedPosition = `${-(i % 4) * 100}px ${-Math.floor(i / 4) * 100}px`;
        if (pieces[i].style.backgroundPosition !== expectedPosition) {
            return false;
        }
    }
    return true;
}
function showFireworks() {
    console.log('Puzzle solved! Showing fireworks...');
    fireworks.style.display = 'block';
    fireworks.innerHTML = '';

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        fireworks.appendChild(firework);
    }

    setTimeout(() => {
        fireworks.style.display = 'none';
        showCongratsText();
    }, 2000);
}

function showCongratsText() {
    const congratsText = document.getElementById('congrats-text');
    congratsText.style.display = 'block';

    setTimeout(() => {
        congratsText.style.display = 'none';
    }, 3000);
}


// Drag and drop handlers
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.style.backgroundPosition);
    e.target.classList.add('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    const dragging = document.querySelector('.dragging');
    const targetStyle = e.target.style.backgroundPosition;
    e.target.style.backgroundPosition = e.dataTransfer.getData('text/plain');
    dragging.style.backgroundPosition = targetStyle;
    dragging.classList.remove('dragging');

    if (checkSolved()) {
        showFireworks();
    }
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}
function showFullSizeVideo(src) {
    var fullSizeVideo = document.getElementById("fullSizeVideo");
    fullSizeVideo.src = src;
    document.getElementById("fullSizeVideoContainer").style.display = "block";
}

function closeFullSizeVideo() {
    var fullSizeVideoContainer = document.getElementById("fullSizeVideoContainer");
    fullSizeVideoContainer.style.display = "none";
    var fullSizeVideo = document.getElementById("fullSizeVideo");
    fullSizeVideo.src = "";  // To stop the video when modal is closed
}

document.querySelectorAll('.modal-content video').forEach(video => {
    video.addEventListener('click', function() {
        showFullSizeVideo(this.querySelector('source').src);
    });
});
