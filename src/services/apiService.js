export const apiService = async (
  endpoint,
  method = 'GET',
  params = '',
  headers = {'Content-Type': 'application/json'},
) => {
  console.log('endpoint', endpoint);
  return fetch(endpoint, {
    method,
    headers,
    body: params,
  })
    .then((response) => {
      // console.log('response', response);
      if (response.status === 200) {
        return response.json().then((data) => ({
          success: true,
          data,
        }));
      } else {
        return response.json().then((data) => ({
          success: false,
          message: 'Something went wrong, please try again later',
        }));
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        message: 'Something went wrong, please try again later',
        success: false,
        data: '',
        error,
      };
    });
};
