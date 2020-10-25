import { getWeekNumber, getWeekYear, getWeeksInYear } from '../../Utils/week';

test.each([
	[2020, 53],
	[2021, 52],
	[2022, 52],
	[2023, 52],
	[2024, 52],
	[2025, 52],
	[2026, 53],
	[2027, 52],
	[2028, 52],
	[2029, 52],
])('getWeeksInYear returns the number of weeks in year (%s => %s)', (year: number, numberOfWeeks: number): void => {
	expect(getWeeksInYear(year)).toEqual(numberOfWeeks);
});

test.each([
	['2021-01-01', 2020, 53],
	['2024-12-31', 2025, 1],
])('getWeekNumber and getWeekYear return the dates week and year (%s => %s %s)', (dateStr: string, year: number, weekNumber: number): void => {
	expect(getWeekYear(new Date(dateStr))).toEqual(year);
	expect(getWeekNumber(new Date(dateStr))).toEqual(weekNumber);
});
