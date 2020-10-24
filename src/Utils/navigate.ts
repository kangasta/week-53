import { navigate as sr_navigate } from 'svelte-routing';
import { getWeek, getWeekNumber, getWeekYear, WEEK_IN_MS } from './week';

export const getFromEnv = (key: string): string => {
	try {
		// @ts-ignore
		const value = process.env[key] ?? ''
		return String(value);
	} catch(_) {
		return ''
	}
}

export const getBaseUrl = () => getFromEnv('PUBLIC_URL');

export const withBaseUrl = (target: string) => {
	const prefix = target.startsWith('/') ? getBaseUrl() : '';
	return `${prefix}${target}`;
}

export const navigate = (target: string, options: {replace?: boolean, state?: object}): void => sr_navigate(withBaseUrl(target), options);

export const getWeekRoute = (year: number, weekNumber: number, i: number): string => {
	const thursday = getWeek(year, weekNumber)[3];
	const relatedThursday = new Date(thursday.getTime() + i * WEEK_IN_MS);

	return `/${getWeekYear(relatedThursday)}/${getWeekNumber(relatedThursday)}`;
}

export const getYearRoute = (year: number, i=0): string => `/${year + i}`;
