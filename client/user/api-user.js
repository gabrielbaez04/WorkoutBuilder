const create = user => fetch('/api/users/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then(response => response.json()).catch(err => res.status(400).send({
    error: err,
  }));

const list = () => fetch('/api/users/', {
  method: 'GET',
}).then(response => response.json()).catch(err => res.status(400).send({
  error: err,
}));

const read = (params, credentials) => fetch(`/api/users/${params.userId}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
}).then(response => response.json()).catch(err => res.status(400).send({
  error: err,
}));

const update = (params, credentials, user) => fetch(`/api/users/${params.userId}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
  body: JSON.stringify(user),
}).then(response => response.json()).catch(err => res.status(400).send({
  error: err,
}));

const remove = (params, credentials) => fetch(`/api/users/${params.userId}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
}).then(response => response.json()).catch(err => res.status(400).send({
  error: err,
}));

export {
  create, list, read, update, remove,
};
