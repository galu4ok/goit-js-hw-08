// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище,
// коли користувач щось друкує.

// 1) Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// 2) Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// 3) Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та
// їхніми поточними значеннями.
// 4) Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', onTextareaInput);
form.addEventListener('submit', throttle(onFormSubmit, 500));

onClickPageReload();

function onTextareaInput(evt) {
  const { email, message } = evt.currentTarget.elements;
  const feedbackFormState = {
    email: email.value.trim(),
    message: message.value,
  };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function onClickPageReload() {
  const storageData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  const { email, message } = storageData;
  if (storageData) {
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const { email, message } = evt.currentTarget.elements;
  const userEmail = email.value.trim();
  const userMessage = message.value;
  const feedbackFormData = { userEmail, message };
  if (email.value === '' || message.value === '') {
    return alert('Please fill in all the fields!');
  }

  localStorage.removeItem('feedback-form-state');
  evt.currentTarget.reset();
}
