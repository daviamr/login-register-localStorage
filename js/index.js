const user = document.getElementById('user_register_id');
const pass = document.getElementById('user_register_pass');
const form = document.getElementById('form');
const acc_section = document.getElementById('acc_section');

const data = JSON.parse(localStorage.getItem('acc_data')) || [];
data.forEach(element => {
    if (data.length > 0) {
        showAccount(element.usuario, element.senha)
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userValue = user.value;
    const passValue = pass.value;


    if (userValue === '' || passValue === '') {
        alert('Preencha corretamente.')
    };

    let exist = true;

    for (i = 0; i < data.length; i++) {
        if (userValue === data[i].usuario) {
            alert('Usuário já cadastrado!');
            exist = false;
            break
        } else {
            var newUser = {
                'usuario': userValue,
                'senha': passValue
            }
            data.push(newUser);
            localStorage.setItem('acc_data', JSON.stringify(data));
            break
        }
    }

    if (exist) {
        showAccount(newUser.usuario, newUser.senha);
    }

    user.value = '';
    pass.value = '';
})
console.log(data)

function showAccount(user, pass) {
    const list = document.createElement('ul');
    const itemList = document.createElement('li');
    list.appendChild(itemList)
    itemList.innerText += `${user}, ${pass}`;

    acc_section.appendChild(list);
}