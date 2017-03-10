// @flow

function getJson() {
  return fetch('https://raw.githubusercontent.com/globoi/react-native-draftjs-render/master/example/src/resourceMock.json?token=ADTL110jXYMNQRxMMIJ1O_VzoDBsXxhEks5YywPWwA%3D%3D')
  .then(response => response.json());
}

export default getJson;
