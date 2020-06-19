import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:4000/api/clientes";

export default {
  register(name, lastname, type_document, document, date_exp_docuement, address, number_phone, date_born, 
    email, password) {
    const user = { name, lastname, type_document, document, date_exp_docuement, address, number_phone, date_born, 
        email, password };
    return axios.post(ENDPOINT_PATH + "register", user);
  }
    }; 