
var form = document.getElementById('userForm');
var addBtn = document.getElementById('addBtn');
var resetBtn = document.getElementById('resetBtn');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = document.getElementById('name').value;
    var emailValue = document.getElementById('email').value;
    var ageValue = document.getElementById('age').value;

    var row = document.createElement('tr');
    row.innerHTML = '<td>' + nameValue + '</td><td>' + ageValue + '</td><td>' + emailValue + '</td>';
    document.getElementById('userTable').appendChild(row);

});

resetBtn.addEventListener('click', function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
});
