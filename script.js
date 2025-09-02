
const roles = ["A Frontend Developer", "A Web Designer", "A Post Designer"];
let part = 0;
let currentRole = '';
let isDeleting = false;

function type() {
    const role = roles[part];

    if (isDeleting) {
        currentRole = role.substring(0, currentRole.length - 1);
    } else {
        currentRole = role.substring(0, currentRole.length + 1);
    }

    document.getElementById('typing-text').textContent = currentRole;

    let speed = isDeleting ? 50 : 150;

    if (!isDeleting && currentRole === role) {
        speed = 1000;
        isDeleting = true;
    } else if (isDeleting && currentRole === '') {
        isDeleting = false;
        part = (part + 1) % roles.length;
        speed = 500;
    }

    setTimeout(type, speed);
}

type();

function myFunction() {
   var element = document.getElementById("myDIV");
   element.classList.add("mystyle");
}

// #contact

