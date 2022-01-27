import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

const response = await fetch('https://api.calendly.com/users/me', {
  headers: {
    Authorization: `Bearer ${process.env.CALENDLY_TOKEN}`,
  },
});

const data = await response.json();
console.log(data);
