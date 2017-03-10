// @flow

function getJson(): Promise<Object> {
  return fetch('https://raw.githubusercontent.com/globoi/react-native-draftjs-render/master/example/src/resourceMock.json?token=AIsLi6e9LAXYExs8J_AQJzj2J_EAWqp0ks5YzA4JwA%3D%3D')
  .then((response: Object): Promise<Object> => response.json());
}

export default getJson;
