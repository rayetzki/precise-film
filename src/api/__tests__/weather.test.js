import { getWeatherData } from "../weather";

beforeAll(() => jest.spyOn(window, "fetch"));

afterAll(() => {
  jest.restoreAllMocks();
});

it("Resolves weather api promise with stub data", async () => {
  const apiResponse = { conditions: "Good" };
  window.fetch.mockResolvedValueOnce({
    json: () => ({ ...apiResponse }),
  });
  const weather = await getWeatherData({ lat: 0, lon: 0 });
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(weather).toStrictEqual({ conditions: "Good" });
});
