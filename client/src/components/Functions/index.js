import axios from 'axios';

export const register = async newUser => {
  const res = await axios.post('users/register', {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password
  });
  console.log('Registered');
}

export const login = async user => {
  try {
    const res = await axios.post('/users/login', {
      email: user.email,
      password: user.password
    });
    localStorage.setItem('usertoken', res.data);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
}