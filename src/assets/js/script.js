//Навігація по кнопкам
document.getElementById('scrollButton').addEventListener('click', function () {
    let target = document.getElementById('targetParagraph');
    target.scrollIntoView({behavior: 'smooth'});
});
document.getElementById('scrollSecondButton').addEventListener('click', function () {
    let target = document.getElementById('targetSpan');
    target.scrollIntoView({behavior: 'smooth'})
})
document.getElementById('scrollThirdButton').addEventListener('click', function () {
    let target = document.getElementById('targetDiv');
    target.scrollIntoView({behavior: 'smooth'})
})
document.querySelector('a[href^="#"]').addEventListener('click', function (event) {
    event.preventDefault();

    let targetId = this.getAttribute('href').substring(1);
    let target = document.getElementById(targetId);

    if (target) {
        target.scrollIntoView({behavior: 'smooth'});
    }
});

//Підсвічування блоків під картинками
const first_image = document.getElementById('first_image');
const first_bottom = document.getElementById('first_bottom');

const second_image = document.getElementById('second_image');
const second_bottom = document.getElementById('second_bottom');

const third_image = document.getElementById('third_image');
const third_bottom = document.getElementById('third_bottom');

const fourth_image = document.getElementById('fourth_image');
const fourth_bottom = document.getElementById('fourth_bottom');

const fifth_image = document.getElementById('fifth_image');
const fifth_bottom = document.getElementById('fifth_bottom');

const sixth_image = document.getElementById('sixth_image');
const sixth_bottom = document.getElementById('sixth_bottom');

first_image.addEventListener('mouseover', function () {
    first_bottom.style.backgroundColor = '#debe33';
});
first_image.addEventListener('mouseout', function () {
    first_bottom.style.backgroundColor = '#F7F7F7';
});

second_image.addEventListener('mouseover', function () {
    second_bottom.style.backgroundColor = '#debe33';
});
second_image.addEventListener('mouseout', function () {
    second_bottom.style.backgroundColor = '#F7F7F7';
});

third_image.addEventListener('mouseover', function () {
    third_bottom.style.backgroundColor = '#debe33';
});
third_image.addEventListener('mouseout', function () {
    third_bottom.style.backgroundColor = '#F7F7F7';
});

fourth_image.addEventListener('mouseover', function () {
    fourth_bottom.style.backgroundColor = '#debe33';
});
fourth_image.addEventListener('mouseout', function () {
    fourth_bottom.style.backgroundColor = '#F7F7F7';
});
fifth_image.addEventListener('mouseover', function () {
    fifth_bottom.style.backgroundColor = '#debe33';
});
fifth_image.addEventListener('mouseout', function () {
    fifth_bottom.style.backgroundColor = '#F7F7F7';
});

sixth_image.addEventListener('mouseover', function () {
    sixth_bottom.style.backgroundColor = '#debe33';
});
sixth_image.addEventListener('mouseout', function () {
    sixth_bottom.style.backgroundColor = '#F7F7F7';
});


$('#exampleModal').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget)
    let recipient = button.data('whatever')
    let modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})

//Модальні картинки
let firstImage = document.getElementById('first_image');
let firstModal = document.getElementById('modal_first');
let modalImage = document.getElementById('image_first');

function openModal() {
    firstModal.style.display = 'block';
    modalImage.src = firstImage.src;
}


function closeModal() {
    firstModal.style.display = 'none';
}

modalImage.addEventListener('click', openModal);
firstModal.addEventListener('click', closeModal);

let secondImage = document.getElementById('second_image');
let secondModal = document.getElementById('modal_second');
let secondModalImage = document.getElementById('image_second');

function secondOpenModal() {
    secondModal.style.display = 'block';
    secondModalImage.src = secondImage.src;
}

function secondCloseModal() {
    secondModal.style.display = 'none';
}

secondModalImage.addEventListener('click', secondOpenModal);
secondModal.addEventListener('click', secondCloseModal);

let thirdImage = document.getElementById('third_image');
let thirdModal = document.getElementById('modal_third');
let thirdModalImage = document.getElementById('image_third');

function thirdOpenModal() {
    thirdModal.style.display = 'block';
    thirdModalImage.src = thirdImage.src;
}

function thirdCloseModal() {
    thirdModal.style.display = 'none';
}

thirdModalImage.addEventListener('click', thirdOpenModal);
thirdModal.addEventListener('click', thirdCloseModal);

let fourthImage = document.getElementById('fourth_image');
let fourthModal = document.getElementById('modal_fourth');
let fourthModalImage = document.getElementById('image_fourth');

function fourthOpenModal() {
    fourthModal.style.display = 'block';
    fourthModalImage.src = fourthImage.src;
}

function fourthCloseModal() {
    fourthModal.style.display = 'none';
}

fourthModalImage.addEventListener('click', fourthOpenModal);
fourthModal.addEventListener('click', fourthCloseModal);

let fifthImage = document.getElementById('fifth_image');
let fifthModal = document.getElementById('modal_fifth');
let fifthModalImage = document.getElementById('image_fifth');

function fifthOpenModal() {
    fifthModal.style.display = 'block';
    fifthModalImage.src = fifthImage.src;
}

function fifthCloseModal() {
    fifthModal.style.display = 'none';
}

fifthModalImage.addEventListener('click', fifthOpenModal);
fifthModal.addEventListener('click', fifthCloseModal);

let sixthImage = document.getElementById('sixth_image');
let sixthModal = document.getElementById('modal_sixth');
let sixthModalImage = document.getElementById('image_sixth');

function sixthOpenModal() {
    sixthModal.style.display = 'block';
    sixthModalImage.src = sixthImage.src;
}

function sixthCloseModal() {
    sixthModal.style.display = 'none';
}

sixthModalImage.addEventListener('click', sixthOpenModal);
sixthModal.addEventListener('click', sixthCloseModal);


//Збереження даних з модальної форми у Google Storage
document.getElementById("submit").addEventListener("click", function () {
    let recipient = document.getElementById("recipient-name").value;
    let message = document.getElementById("message-text").value;

    let dataObject = {
        recipient: recipient,
        message: message
    };

    let dataArray = localStorage.getItem("dataArray");
    if (dataArray) {
        dataArray = JSON.parse(dataArray);
    } else {
        dataArray = [];
    }

    dataArray.push(dataObject);
    localStorage.setItem("dataArray", JSON.stringify(dataArray));
    $('#exampleModal').modal('hide');
    document.getElementById("recipient-name").value = "";
    document.getElementById("message-text").value = "";
});












