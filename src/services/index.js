import '@babel/polyfill';

import { API_URL } from 'consts';
import { Api } from './Api';

export const api = new Api(API_URL);
