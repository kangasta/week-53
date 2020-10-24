import { fireEvent, render, screen } from '@testing-library/svelte';

import App from '../App.svelte';
import { getWeek, getWeekNumber, getWeekYear, WEEK_IN_MS } from '../Utils/week';

const getCurrentWeekThursday = (): Date => {
	const today = new Date()
	const year = getWeekYear(today);
	const weekNumber = getWeekNumber(today);
	return getWeek(year, weekNumber)[3];
}

const addWeeks = (date: Date, n: number): Date => new Date(date.getTime() + n * WEEK_IN_MS);

const checkDateVisible = async (date: Date): Promise<void> => {
	await screen.findByText(date.getFullYear().toString());
	await screen.findByText(date.getDate().toString());
}

test('App displays current week by default', async (): Promise<void> => {
	render(App);

	const date = getCurrentWeekThursday();
	await checkDateVisible(date);
});

test('App provides links to navigate between weeks', async (): Promise<void> => {
	render(App);

	const date = getCurrentWeekThursday();
	await checkDateVisible(date);

	await fireEvent.click(await screen.findByText('Previous'));
	await checkDateVisible(addWeeks(date, -1));

	await fireEvent.click(await screen.findByText('Next'));
	await fireEvent.click(await screen.findByText('Next'));
	await fireEvent.click(await screen.findByText('Next'));
	await checkDateVisible(addWeeks(date, 2));

	await fireEvent.click(await screen.findByText('Current week'));
	await checkDateVisible(date);
});
