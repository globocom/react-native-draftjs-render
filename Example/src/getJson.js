function getJson() {
  return fetch('https://raw.githubusercontent.com/globoi/react-native-draftjs/master/Example/resourceMock.json?token=AIIYJ7eWNEszPudzPYJbwgzoMq5A8xCgks5YysHkwA%3D%3D')
  .then(response => response.json());
}

export default getJson;
