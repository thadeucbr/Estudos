function removeGenderCustom() {
  if (document.getElementById('gender-custom') !== null) {
    document.getElementById('gender-custom').remove();
  }
}

const other = document.getElementById('personalizado');
other.addEventListener('change', () => {
  removeGenderCustom();
  const father = document.getElementById('signup-form');
  const customGender = document.createElement('input');
  customGender.type = 'text';
  customGender.name = 'gender-custom';
  customGender.placeholder = 'Gênero (opcional)';
  customGender.id = 'gender-custom';
  customGender.style.display = 'flex';
  customGender.style.width = '100%';
  other.appendChild(customGender);
  father.insertBefore(customGender, father.childNodes[16]);
});

document.getElementById('feminino').addEventListener('change', () => {
  removeGenderCustom();
});

document.getElementById('masculino').addEventListener('change', () => {
  removeGenderCustom();
});

const error = document.getElementById('firstname-error');
const firstname = document.getElementById('firstname');
firstname.addEventListener('input', function () {
  if (firstname.validity.valid) {
    error.innerHTML = '';
    error.className = 'error';
  }
});

function firstNameValidate() {
  if (!firstname.validity.valid) {
    error.innerHTML = 'Campos inválidos';
    error.className = 'error active';
  }
}

const lastname = document.getElementById('lastname');
lastname.addEventListener('input', function () {
  if (lastname.validity.valid) {
    error.innerHTML = '';
    error.className = 'error';
  }
});

function lastNameValidate() {
  if (!lastname.validity.valid) {
    error.innerHTML = 'Campos inválidos';
    error.className = 'error active';
  }
}

const phoneEmail = document.getElementById('phone_email');
phoneEmail.addEventListener('input', function () {
  if (lastname.validity.valid) {
    error.innerHTML = '';
    error.className = 'error';
  }
});

function phoneEmailValidate() {
  if (!phoneEmail.validity.valid) {
    error.innerHTML = 'Campos inválidos';
    error.className = 'error active';
  }
}

const passwordVal = document.getElementById('password');
passwordVal.addEventListener('input', function () {
  if (passwordVal.validity.valid) {
    error.innerHTML = '';
    error.className = 'error';
  }
});

function passwordValidate() {
  if (!passwordVal.validity.valid) {
    error.innerHTML = 'Campos inválidos';
    error.className = 'error active';
  }
}

const birthdate = document.getElementById('birthdate');
birthdate.addEventListener('input', function () {
  if (lastname.validity.valid) {
    error.innerHTML = '';
    error.className = 'error';
  }
});

function birthdateValidate() {
  if (!birthdate.validity.valid) {
    error.innerHTML = 'Campos inválidos';
    error.className = 'error active';
  }
}

const gender = document.getElementById('feminino');
const genderMale = document.getElementById('masculino');
gender.addEventListener('input', function () {
  if (gender.validity.valid) {
    error.innerHTML = '';
    error.className = 'error';
  }
});

function genderValidate() {
  if (
    !gender.validity.valid &&
    !other.validity.valid &&
    !genderMale.validity.valid
  ) {
    error.innerHTML = 'Campos inválidos';
    error.className = 'error active';
  }
}

document.getElementById('button-login').addEventListener('click', () => {
  const email = document.getElementById('user-email-phone').value;
  const password = document.getElementById('user-password').value;
  alert(email + password);
});

document.getElementById('facebook-login').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  firstNameValidate();
  lastNameValidate();
  phoneEmailValidate();
  passwordValidate();
  birthdateValidate();
  genderValidate();
  e.preventDefault();
});
