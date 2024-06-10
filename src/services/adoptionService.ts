import axios from "axios";
import { Adoption } from "../models/AdoptionForm";

const apiURL = 'https://my-json-server.typicode.com/TinglanWei/adopt-json-server/adoptions';

export const postAdoption = async (formValues?: Adoption) : Promise<any> => {
    let response;
    if(formValues){
        response = await axios.post(`${apiURL}`, formValues);
    }
    else{
        response = await axios.get(apiURL);
    }

    return response.data as Adoption[];
}