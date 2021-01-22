import axios from 'axios';
const API = 'https://www.json-generator.com/api/json/get/bUAgWyuTsi';

export function getAllContacts() { 
  return axios.get(API);
}