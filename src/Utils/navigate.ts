import { navigate as sr_navigate } from 'svelte-routing';
import { getWeek, getWeekNumber, getWeekYear, WEEK_IN_MS } from './week';

export const getFromEnv = (key: string): string => {
	try {
		// @ts-ignore
		const { env } = process ?? {};
		const value = env[key] ?? ''
		return String(value);
	} catch(_) {
		return ''
	}
}

const withoutTrailingSlash = (path: string) => path.endsWith('/') ? path.slice(0, -1) : path;

export const getBasePath = () => {
	const public_url = getFromEnv('PUBLIC_URL');
	const urlMatch = public_url.match(/\:\/\/[^/]+(.*)/);

	if (!urlMatch) {
		return withoutTrailingSlash(public_url);
	}

	return withoutTrailingSlash(urlMatch[1]);
};

export const withBasePath = (target: string) => {
	const prefix = target.startsWith('/') ? getBasePath() : '';
	return `${prefix}${target}`;
}

export const navigate = (target: string, options: {replace?: boolean, state?: object}): void => sr_navigate(withBasePath(target), options);

export const getWeekRoute = (year: number, weekNumber: number, i: number): string => {
	const thursday = getWeek(year, weekNumber)[3];
	const relatedThursday = new Date(thursday.getTime() + i * WEEK_IN_MS);

	return `/${getWeekYear(relatedThursday)}/${getWeekNumber(relatedThursday)}`;
}

export const getYearRoute = (year: number, i=0): string => `/${year + i}`;
