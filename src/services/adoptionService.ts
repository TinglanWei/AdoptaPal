import axios from "axios";
import { AdoptionForm } from "../models/AdoptionForm";

const apiURL = 'https://my-json-server.typicode.com/TinglanWei/adopt-json-server/adoptions';

export const postAdoption = async (formValues: AdoptionForm) : Promise<any> => {
    const response = await axios.post(`${apiURL}`, formValues);
    return response.data;
}