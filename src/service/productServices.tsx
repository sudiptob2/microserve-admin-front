import axios from "axios";
import { FormData } from "../components/CreateProduct";

const baseUrl: string = process.env.REACT_APP_BASE_URL || ''

export const postProduct = (data: FormData) =>{
  return axios.post(`${baseUrl}products/`, data)
}