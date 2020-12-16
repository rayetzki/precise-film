import { renderHook, act } from "@testing-library/react-hooks";
import { useCurrentWeather } from "../useCurrentWeather";
import { getWeatherData as mockGetWeatherData } from "../../api/weather";

beforeAll(() => jest.spyOn(window, "fetch"));

afterAll(() => jest.restoreAllMocks());

jest.mock("../../api/weather");
it("Returns weather by coordinates", async () => {
  const apiResponse = { conditions: "Good" };
  const coords = { latitude: 51.1, longitude: 45.3 };
  mockGetWeatherData.mockResolvedValueOnce(apiResponse);
  window.navigator.geolocation = {
    getCurrentPosition: jest
      .fn()
      .mockImplementationOnce((success) => success({ coords })),
  };
  const { result } = renderHook(useCurrentWeather);
  expect(mockGetWeatherData).toHaveBeenCalledTimes(1);
  expect(mockGetWeatherData).toHaveBeenCalledWith({
    lat: coords.latitude,
    lon: coords.longitude,
  });
  await act(async () => {});
  const { error, weather } = result.current;
  expect(error).toBeNull();
  expect(weather).toStrictEqual(apiResponse);
});

it("Returns an error if the weather for the location was not found", async () => {
  mockGetWeatherData.mockRejectedValueOnce(
    "Нету данных по твоему местоположению"
  );
  const coords = { latitude: 51.1, longitude: 45.3 };
  window.navigator.geolocation = {
    getCurrentPosition: jest
      .fn()
      .mockImplementationOnce((success) => success({ coords })),
  };
  const { result } = renderHook(useCurrentWeather);
  await act(async () => {});
  const { error, weather } = result.current;
  expect(error).toBe("Нету данных по твоему местоположению");
  expect(weather).toBeNull();
});

it("Returns an appropriate error if geolocation API is not found", () => {
  delete window.navigator.geolocation;
  const { result } = renderHook(useCurrentWeather);
  const { error, weather } = result.current;
  expect(error).toBe("Геолокация недоступная. Попробуйте ручной режим");
  expect(weather).toBeNull();
});
