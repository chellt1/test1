// Функція для об'єднання рядків і видалення символів "z"

function combineAndRemoveZ(strings) {
    return strings.join('').replace(/z/g, '');
  }
  
// Функція для перевірки логіну та пароля і повернення секретної фрази
function checkCredentials(username, password) {
    const validCredentials = [
      { username: 'admin', password: 'password1', secretPhrase: 'Secret Phrase 1' },
      { username: 'user1', password: 'password2', secretPhrase: 'Secret Phrase 2' },
      { username: 'user2', password: 'password3', secretPhrase: 'Secret Phrase 3' },
    ];
  
    const user = validCredentials.find(
      (cred) => cred.username === username && cred.password === password
    );
  
    return user ? user.secretPhrase : null;
  }
  
  
//   Unit-тести для функції combineAndRemoveZ
const assert = require('assert');

// Тест 1: Перевірка об'єднання рядків та видалення символів "z"
assert.strictEqual(combineAndRemoveZ(['abc', 'def']), 'abcdef');

// Тест 2: Перевірка об'єднання рядків та видалення символів "z" з пустим рядком
assert.strictEqual(combineAndRemoveZ(['abc', '', 'def']), 'abcdef');

// Тест 3: Перевірка об'єднання рядків та видалення символів "z" з великими літерами
assert.strictEqual(combineAndRemoveZ(['ABC', 'def']), 'ABCdef');

console.log('Усі тести пройдені успішно');

//   Unit-тести для функції checkCredentials
const assert = require('assert');

// Тест 1: Перевірка правильного логіну та пароля
assert.strictEqual(checkCredentials('admin', 'password1'), 'Secret Phrase 1');

// Тест 2: Перевірка неправильного логіну
assert.strictEqual(checkCredentials('user', 'password2'), null);

// Тест 3: Перевірка неправильного пароля
assert.strictEqual(checkCredentials('user1', 'wrongpassword'), null);

console.log('Усі тести пройдені успішно');
