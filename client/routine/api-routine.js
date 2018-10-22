const create = routine => fetch('/api/routine', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(routine),
})
  .then(response => response.json()).catch(err => console.log(err));

const list = (params, credentials) => fetch(`/api/routines/${params.userId}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
}).then(response => response.json()).catch(err => console.log(err));

const read = (params, credentials) => fetch(`/api/routine/${params.routineId}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
}).then(response => response.json()).catch(err => console.log(err));

const update = (params, credentials, routine) => fetch(`/api/routine/${params.routineId}`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
  body: JSON.stringify(routine),
}).then(response => response.json()).catch((err) => {
  console.log(err);
});

const remove = (params, credentials) => fetch(`/api/routine/${params.routineId}`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${credentials.t}`,
  },
}).then(response => response.json()).catch((err) => {
  console.log(err);
});

export {
  create, list, read, update, remove,
};
