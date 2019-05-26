//import React from 'react';
//import { API_URL } from 'consts';

export class Api {
  constructor(url) {
    this.url = url;
  }
  getData() {
    return fetch(`${this.url}/list`)
      .then((res) => res.json())
      .then((data) => data.list)
      .catch(err => console.log('blad', err));
  }
}
