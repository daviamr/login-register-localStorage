const user = document.getElementById('user_id');
const user_pass = document.getElementById('user_pass');
const form = document.getElementById('form');

const data = JSON.parse(localStorage.getItem('acc_data'));

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userValue = user.value
    const passValue = user_pass.value
    let valida = false;

    data.forEach(element => {
        if (element.usuario === userValue && element.senha === passValue) {
            valida = true
            alert('Autenticado!');
            window.location.href = '/home.html';
        }
    })
    if (valida != true) {
        alert('Confira os dados e tente novamente.');
    }
})

// for (i = 0; i < data.length; i++) {
//     if (data[i].usuario === userValue && data[i].senha === passValue) {
//         alert('Autenticado!');
//         window.location.href = '/home.html';
//         break
//     } else {
//         alert('Confira os dados e tente novamente.');
//     }
// }