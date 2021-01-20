import axios from 'axios';
const API = 'http://www.json-generator.com/api/json/get/bUAgWyuTsi';

export function getAllContacts() { 
  return axios.get(API);
}