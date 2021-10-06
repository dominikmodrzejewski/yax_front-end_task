/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Yax | Software House Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia :)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.form__btn')

const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const mailSign = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

const checkData = () => {
	if (firstName.value.match(letters) && lastName.value.match(letters) && email.value.match(mailSign)) {
		alert('Podałeś poprawne dane, rejestracja ukonczona')
	} else {
		alert('Sprawdz poprawność danych')
	}
}

sendBtn.addEventListener('click', checkData)
