export const databaseInsertion = (queryParameters) => {
  const postOptions = (data = {}) => {
    const options = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    };
    return options;
  }
  return fetch('http://3.19.120.4/mongo/insert/', postOptions(queryParameters) )
    .then(response => response.text())
    .then(response => { console.log('Post', 'fetch', response) })
    .catch(function (error)   { console.log({error}) })
}

export const getUsers = () => {
  return fetch('http://3.19.120.4/mongo/users/')
    .then(function(response) {
      return response.json();
    })
    .then(function(response) { return (console.log('Get', 'fetch', response), response) })
}
