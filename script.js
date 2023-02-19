const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

const pass1 = document.querySelector('.first-password');
const pass2 = document.querySelector('.second-password');
const btn = document.querySelector('.generator-btn');
const copyBtn1 = document.querySelector('.copy-btn1')
const copyBtn2 = document.querySelector('.copy-btn2')
const selectLength = document.querySelector('.pass-length')

function getPasswords() {
	let newPassword1 = [];
	let newPassword2 = [];
	let passLength = selectLength.value

	for (let i = 0; i < passLength; i++) {
		newPassword1.push(characters[Math.floor(Math.random() * characters.length)]);
		newPassword2.push(characters[Math.floor(Math.random() * characters.length)]);
	}

	pass1.textContent = newPassword1.toString().replaceAll(',', '');
	pass2.textContent = newPassword2.toString().replaceAll(',', '');
}

function copyPassword1(){
    navigator.clipboard.writeText(pass1.textContent)
}
function copyPassword2(){
    navigator.clipboard.writeText(pass2.textContent)
}

btn.addEventListener('click', getPasswords);
copyBtn1.addEventListener('click', copyPassword1)
copyBtn2.addEventListener('click', copyPassword2)
