import { render } from '@testing-library/svelte';

import App from '../App.svelte';

test('App displays current week by default', async (): Promise<void> => {
	const { findByText } = render(App);

	const today = new Date();
	await findByText(today.getFullYear().toString());
	await findByText(today.getDate().toString());
});
