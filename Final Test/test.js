function validateForm() {

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var gender = form.querySelectorAll('input[name="gender"]:checked');

    if (firstname === '' || lastname === '' || phone === '' || address === '') {
        alert('Please fill in all fields.');
    } else {
        alert ('Message sent sucessfully')
        document.getElementById('firstname').value = '';
        document.getElementById('lastname').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
    }
    
    if (!gender.length) {
        alert ("You must select your gender(male or female)");
        return false;
    }
}