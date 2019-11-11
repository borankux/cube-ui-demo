import requests from "../utils/request";

export function getData() {
  return requests({
    url: '/static/data.json',
    method: 'get',
  });
}
