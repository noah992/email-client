import React from 'react';

const getEmail = () => fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())

export { getEmail }