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
  