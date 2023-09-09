const user = document.getElementById('user_register_id');
const pass = document.getElementById('user_register_pass');
const form = document.getElementById('form');
const acc_section = document.getElementById('acc_section');
const item_list = document.getElementsByClassName('remove');

const data = JSON.parse(localStorage.getItem('acc_data')) || [];
data.forEach(element => {
    if (data.length > 0) {
        showAccount(element.usuario, element.senha, element.id)
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userValue = user.value;
    const passValue = pass.value;
    let exist = false;


    if (userValue === '' || passValue === '') {
        alert('Preencha corretamente.')
        return
    }

    for (i = 0; i < data.length; i++) {
        if (userValue === data[i].usuario) {
            alert('Usuário já cadastrado!');
            exist = true;
        }
    }

    if (exist === false) {
        createAccount();
    }

    user.value = '';
    pass.value = '';
})

function showAccount(user, pass, id) {
    const itemList = document.createElement('li');
    itemList.classList.add('li_item');
    const itemListSpan = document.createElement('img');
    itemListSpan.classList.add('remove');
    itemListSpan.setAttribute('src', './img/close.svg');
    itemList.innerHTML += `ID: ${id} | Usuário: ${user} / Senha: ${pass}`;

    //Removendo conta
    itemListSpan.addEventListener('click', () => {
        itemList.remove();
        data.splice(this, 1);
        updateBank();
        console.log(data);
    })

    itemList.appendChild(itemListSpan);
    acc_section.appendChild(itemList);
}

function createAccount() {
    const newUser = {
        'id': data.length,
        'usuario': user.value,
        'senha': pass.value
    }

    data.push(newUser);
    updateBank();
    showAccount(newUser.usuario, newUser.senha, newUser.id);
}


function updateBank() {
    localStorage.setItem('acc_data', JSON.stringify(data));
}

// function removeAccount() {
//     for (i = 0; i < item_list.length; i++) {
//         item_list[i].addEventListener('click', (e) => {
//             let target = e.target
//             target.parentNode.remove();
//             data.splice(target, 1)
//             updateBank();
//         })
//     }
// }
// removeAccount();