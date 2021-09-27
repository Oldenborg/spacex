import axios from "axios";

async function launches() {
    const request = await axios.request({
      method: "GET",
      url: "https://api.spacexdata.com/v4/launches",
    });
	if(!request) return null;

    return request.data;
}

async function latestLaunch() {
    const request = await axios.request({
      method: "GET",
      url: "https://api.spacexdata.com/v4/launches/latest",
    });
	if(!request) return null;

    return request.data;
}

const spacex = {
  launches,
  latestLaunch,
};

export default spacex;
