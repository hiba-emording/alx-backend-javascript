export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => ({ status: 500, body: 'error' }))
    .finally(() => console.log('Got a response from the API'));
}
