import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import spacex from "../api/spacex";

const mock = new MockAdapter(axios);
jest.spyOn(axios, "request");

describe("spacex", () => {
  test("launches() sends a correctly formatted GET request to the SpaceX endpoint", async () => {
    mock.onGet("https://api.spacexdata.com/v4/launches").reply(200, {});

    await spacex.launches();

    expect(axios.request).toHaveBeenCalledWith({
      method: "GET",
      url: "https://api.spacexdata.com/v4/launches",
    });
  });

  test("latestLaunch() sends a correctly formatted GET request to the SpaceX endpoint", async () => {
    mock.onGet("https://api.spacexdata.com/v4/launches/latest").reply(200, {});

    await spacex.latestLaunch();

    expect(axios.request).toHaveBeenCalledWith({
      method: "GET",
      url: "https://api.spacexdata.com/v4/launches/latest",
    });
  });
});
