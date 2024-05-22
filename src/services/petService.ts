import axios from "axios";
import { Pet } from "../models/pet";

const apiURL = process.env.REACT_APP_API_URL + "pets" || "";

// get a optional search term from the use (which will be the name / breed of the pet)
export const getPets = async (searchTerm?:string) : Promise<Pet[]> => {
    let response;
    if(searchTerm){
        response = await axios.get(`${apiURL}?q=${searchTerm}`);
    }
    else{
        response = await axios.get(apiURL);
    }

    return response.data as Pet[];
} 

export const getPetById = async (id:number) : Promise<Pet> => {
    const response = await axios.get(`${apiURL}/${id}`);

    return response.data as Pet;
}
