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
  const { error, weather } = await result.current;
  expect(mockGetWeatherData).toHaveBeenCalledTimes(1);
  expect(mockGetWeatherData).toHaveBeenCalledWith({
    lat: coords.latitude,
    lon: coords.longitude,
  });
  act(async () => {
    expect(error).toBeNull();
    expect(weather).toStrictEqual(apiResponse);
  });
});
