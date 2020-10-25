import { getBasePath } from '../../Utils/navigate';

afterEach(() => {
	// @ts-ignore
	process.env.PUBLIC_URL = '';
});

test.each([
	['https://kangasta.github.io/week-53/', '/week-53'],
	['/week-53/', '/week-53'],
	['/week-53', '/week-53'],
	['', ''],
])('getBasePath returns path with out hostname (%s => %s)', (url: string, path: string): void => {
	// @ts-ignore
	process.env.PUBLIC_URL = url;
	expect(getBasePath()).toEqual(path);
});
