//Проверка пароля
function passChecker(pass) {
	//(?=.*[НАБОР СИМВОЛОВ]) - строка содержит хотя бы один символ из НАБОРА
	//Любые 9 символов латиницы, цифр или пробельных символов, где от двух цифр, хотя бы один спецсимвол, хотя бы одна строчная буква, хотя бы одна прописная буква
	return (/(?=.*[0-9]{2,})(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[\w\s]{9,}/).test(pass);
}

console.log(passChecker("Good Pass567$"));
//true
console.log(passChecker("Bad7#"));
//false