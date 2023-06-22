var table = document.getElementById("myTable");
var form = document.getElementById("myForm");

var contacts = [];

function create() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var birthdate = document.getElementById("birthdate").value;
  var cpf = document.getElementById("cpf").value;
  var phone = document.getElementById("phone").value;

  var contact = {
    name: name,
    email: email,
    birthdate: birthdate,
    cpf: cpf,
    phones: [phone]
  };

  contacts.push(contact);
  displayContacts();
  form.reset();
}

function displayContacts() {
  table.innerHTML = "<tr><th>Nome</th><th>E-mail</th><th>Data de Nascimento</th><th>CPF</th><th>Telefones</th><th>Ações</th></tr>";

  for (var i = 0; i < contacts.length; i++) {
    var row = table.insertRow(i + 1);
    var contact = contacts[i];

    var phones = contact.phones.join(", ");

    row.innerHTML = "<td>" + contact.name + "</td>" +
                    "<td>" + contact.email + "</td>" +
                    "<td>" + contact.birthdate + "</td>" +
                    "<td>" + contact.cpf + "</td>" +
                    "<td>" + phones + "</td>" +
                    "<td><button onclick='edit(" + i + ")'>Editar</button> <button onclick='remove(" + i + ")'>Excluir</button></td>";
  }
}

function edit(index) {
  var contact = contacts[index];
  document.getElementById("name").value = contact.name;
  document.getElementById("email").value = contact.email;
  document.getElementById("birthdate").value = contact.birthdate;
  document.getElementById("cpf").value = contact.cpf;
  document.getElementById("phone").value = contact.phones[0];
}

function remove(index) {
  contacts.splice(index, 1);
  displayContacts();
}
