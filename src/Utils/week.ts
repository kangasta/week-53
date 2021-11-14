export const DAY_IN_MS = 24 * 3600 * 1000;
export const WEEK_IN_MS = 7 * DAY_IN_MS;

const getWeekMonday = (date: Date): Date => new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() + 6) % 7)
const getWeekThursdayDate = (date: Date): number => date.getDate() + 3 - (date.getDay() + 6) % 7;

const getFirstThursday = (year: number): Date => {
	const week1 = new Date(year, 0, 4);
	week1.setDate(getWeekThursdayDate(week1));

	return week1;
}

export const getWeek = (year: number, weekNumber: number): Date[] => {
	const thursday = new Date(getFirstThursday(year).getTime() + (weekNumber - 1) * WEEK_IN_MS);
	const monday = getWeekMonday(thursday);

	return [...Array(7)].map((_, i): Date => new Date(monday.getTime() + i * DAY_IN_MS));
}

export const validateWeekNumber = (year: number, weekNumber: number): {year: number, weekNumber: number} => {
	const dates = getWeek(year, weekNumber);
	return {
		year: getWeekYear(dates[0]),
		weekNumber: getWeekNumber(dates[0]),
	}
}

export type WeekByMonth = {[key: number]: Date[]};
export const getWeekByMonth = (year: number, weekNumber: number): WeekByMonth => {
	const week = getWeek(year, weekNumber);
	const weekByMonth: WeekByMonth = {};

	week.forEach(day => {
		const month = day.getMonth();

		if (!weekByMonth[month]) {
			weekByMonth[month] = [];
		}

		weekByMonth[month].push(day);
	});

	return weekByMonth;
}

export const getWeeksInYear = (year: number): number => getWeekNumber(new Date(year, 11, 28));

// Source: https://weeknumber.net/how-to/javascript
export const getWeekNumber = (dateIn?: Date): number => {
	const date = dateIn ? new Date(dateIn) : new Date();
	date.setHours(0, 0, 0, 0);
	date.setDate(getWeekThursdayDate(date));

	const week1 = getFirstThursday(date.getFullYear())

	return 1 + Math.round(((date.getTime() - week1.getTime()) / WEEK_IN_MS));
}

// Source: https://weeknumber.net/how-to/javascript
export const getWeekYear = (dateIn?: Date): number => {
	const date = dateIn ? new Date(dateIn) : new Date();
	date.setDate(getWeekThursdayDate(date));

	return date.getFullYear();
}

export const isToday = (date: Date): boolean => {
	const today = new Date();
	return ['getDate', 'getMonth', 'getFullYear'].every(fnName => today[fnName]() === date[fnName]());
}
