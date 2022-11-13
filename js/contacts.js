let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z']
let colors = ['#FF7A00', '#9327FF', '#29ABE2', '#FC71FF', '#02CF2F', '#AF1616', '#462F8A', '#FFC700', '#EE00D6', '#007CEE', '#4E963D'];
let charFirstName = [];
let charLastName = [];

function rednerContacts() {
    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < contacts.length; j++) {
            if (alpha[i] == contacts[j].lastName.charAt(0)) {
                charFirstName.push(contacts[j].firstName.charAt(0))
                charLastName.push(contacts[j].lastName.charAt(0))
                document.getElementById('contactsContainerLeft').innerHTML += `
                <div id="character${i}"></div>
                <div class="contactsRow"">
                    <div class="initials" id="initial${j}"></div>
                    <div>
                        <div class="contactName">${contacts[j].lastName} ${contacts[j].firstName}</div>
                        <a class="email" href="mailto:${contacts[j].email}">${contacts[j].email}</a>
                    </div>
                </div>
                `
                renderLetters(i);
                setInitials(j);
            }
        }
    }
}

function renderLetters(i) {
    if (document.getElementById('character' + i)) {
        document.getElementById('character' + i).innerHTML = `
        <div class="contactsCharacter">${alpha[i]}</div>
    `
    }
}


function setInitials(j) {
    if (document.getElementById('initial' + j)) {
        for (let i = 0; i < charFirstName.length; i++) {
            document.getElementById('initial' + j).innerHTML = `
            <div class="circleBg" id="circleBg${i}">${charLastName[i]}${charFirstName[i]}</div>
        `
        getRandomColor(i);
        }
    }
}

function getRandomColor(i) {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('circleBg'+ i).style.backgroundColor = color;
  }
  
