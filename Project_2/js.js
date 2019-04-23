


let money, time; 

function start () {
	money = prompt("Ваш бюджет на месяц?", '');
	//time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?", '');
	}
}

start(); //бюджет

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = +prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = +prompt("Во сколько обойдется?", '');
	
		if ((typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;	
		} else {
			// alert("Вы ввели неврные данные, попробуйте снова!");
			
		}  
	}
}

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};




chooseExpenses(); //расходы
appData.noneyPerDay = (appData.budget / 30).toFixed();


function detectDayBudget() { 
	let DayBudget = (appData.budget/365).toFixed();
	appData.noneyPerDay = DayBudget;
	
	alert("Дневной бюджет: " + DayBudget);
}

detectDayBudget(); //дневной бюджет

function detectLevel() {	

	if (appData.noneyPerDay < 100) {
		console.log("Минимальный уровень достатка");
	} else if (appData.noneyPerDay > 100 && appData.noneyPerDay < 2000) {
		console.log("Средний уровеь достатка");
	} else if (appData.noneyPerDay > 2000) {
		console.log("Высокий уровеь достатка");
	}
}

detectLevel(); //уровень достатка



function chooseOptExpenses() {
	
	for(let i = 0; i < 3; i++)
	{
		let statia = +prompt("Статья необязательных расходов?");
		appData.optionalExpenses[i] = statia;
	}
	
}

chooseOptExpenses(); //необязательные расходы



function chekSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма пополненй?");
		let percent = +prompt("Под какой процент?");
			
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

chekSavings();














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