function myFirstApp(name, age) {
	alert("Привет, меня зовут "+name+" и это моя первая программа!");

	function showSkills() {
		let skills = ["html","css","wordpress"];
		for (i=0; i<skills.length; i++) {
      document.write("Я владею "+skills[i]+"<br>");
		}
	}

	function checkAge() {
		if (age<18) {
			document.write("Но мне еще нет 18 лет!"+"<br>");
		} else {
			document.write("И я уже совершеннолетний!"+"<br>");
		}
	}

	function calcPow(num) {
		document.write(num*num);
	}

	showSkills();
	checkAge();
	calcPow(4);
}

myFirstApp("Roman", 21);