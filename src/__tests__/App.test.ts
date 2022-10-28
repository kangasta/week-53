import { fireEvent, render, screen } from "@testing-library/svelte";

import App from "../App.svelte";
import { getWeek, getWeekNumber, getWeekYear, WEEK_IN_MS } from "../Utils/week";

const getCurrentWeekThursday = (): Date => {
  const today = new Date();
  const year = getWeekYear(today);
  const weekNumber = getWeekNumber(today);
  return getWeek(year, weekNumber)[3];
};

const addWeeks = (date: Date, n: number): Date =>
  new Date(date.getTime() + n * WEEK_IN_MS);

const checkDateVisible = async (
  date: Date,
  findByText = screen.findByText
): Promise<void> => {
  await findByText(date.getFullYear().toString());
  await findByText(date.getDate().toString());
};

test("App displays current week by default", async (): Promise<void> => {
  const { findByText } = render(App);

  const date = getCurrentWeekThursday();
  await checkDateVisible(date, findByText);
});

test("App displays today indicator", async (): Promise<void> => {
  const { findByText, queryByText } = render(App);

  const todayIndicator = await findByText("Today");
  const day = todayIndicator.parentNode;
  expect(day.textContent).toContain(new Date().getDate());

  await fireEvent.click(await findByText("Next"));
  expect(queryByText("Today")).toBeNull();
});

test("App provides links to navigate between weeks", async (): Promise<void> => {
  const { findByText } = render(App);

  const date = getCurrentWeekThursday();
  await fireEvent.click(await findByText("Current week"));
  await checkDateVisible(date, findByText);

  await fireEvent.click(await findByText("Previous"));
  await checkDateVisible(addWeeks(date, -1), findByText);

  await fireEvent.click(await findByText("Next"));
  await fireEvent.click(await findByText("Next"));
  await fireEvent.click(await findByText("Next"));
  await checkDateVisible(addWeeks(date, 2), findByText);

  await fireEvent.click(await findByText("Current week"));
  await checkDateVisible(date, findByText);
});

test("App provides full year view", async (): Promise<void> => {
  const { findAllByText, findByText } = render(App);

  await fireEvent.click(await findByText("Current week"));
  let weeks = await findAllByText(/Week [0-9]+/);
  expect(weeks.length).toBeLessThan(52);

  await fireEvent.click(await findByText("Year"));
  weeks = await findAllByText(/Week [0-9]+/);
  expect(weeks.length).toBeGreaterThanOrEqual(52);
});
