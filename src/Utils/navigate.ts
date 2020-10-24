import { navigate as sr_navigate } from 'svelte-routing';
import { getWeek, getWeekNumber, getWeekYear, WEEK_IN_MS } from './week';

export const getBaseUrl = () => {
	try {
		// @ts-ignore
		return process.env.PUBLIC_URL || '';
	} catch(_) {
		return ''
	}
};

export const withBaseUrl = (target: string) => {
	const prefix = target.startsWith('/') ? getBaseUrl() : '';
	return `${prefix}${target}`;
}

export const navigate = (target: string, options: {replace?: boolean, state?: object}): void => sr_navigate(withBaseUrl(target), options);

const getRelativeWeekRoute = (year: number, weekNumber: number, i: number): string => {
	const thursday = getWeek(year, weekNumber)[3];
	const relatedThursday = new Date(thursday.getTime() + i * WEEK_IN_MS);

	return `/${getWeekYear(relatedThursday)}/${getWeekNumber(relatedThursday)}`;
}

export const getPreviousWeekRoute = (year: number, weekNumber: number): string => getRelativeWeekRoute(year, weekNumber, -1);
export const getNextWeekRoute = (year: number, weekNumber: number): string => getRelativeWeekRoute(year, weekNumber, 1);
