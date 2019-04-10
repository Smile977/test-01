let money = prompt("Ваш бюджет на месяц?", ''),
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
 
let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
    let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = +prompt("Во сколько обойдется?", '');

	if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
		console.log("done");
		appData.expenses[a] = b;	
	} else {
		alert("Вы ввели неврные данные, попробуйте снова!");
		
	}  
};

// while ( let i < 2 ) {
// 	let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt("Во сколько обойдется?", '');

// 	if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;	
// 	} else {
// 		alert("Вы ввели неврные данные, попробуйте снова!");
		
// 	}  let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = +prompt("Во сколько обойдется?", '');

// 	if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;	
// 	} else {
// 		alert("Вы ввели неврные данные, попробуйте снова!");		
// 	}  
// }

appData.noneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.noneyPerDay);

if (appData.noneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.noneyPerDay > 100 && appData.noneyPerDay < 2000) {
	console.log("Средний уровеь достатка");
} else if (appData.noneyPerDay > 2000) {
	console.log("Высокий уровеь достатка");
}
