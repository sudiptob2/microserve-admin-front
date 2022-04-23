import { FormData } from "../components/CreateProduct";
import apiClient from "./index";

const baseUrl: string = process.env.REACT_APP_BASE_URL || ''


export const postProduct = (data: FormData) =>{
  return apiClient.post(`${baseUrl}product/products/`, data)
}

export const getProducts = () =>{
  return apiClient.get(`${baseUrl}product/products/`)
}

export const deleteProduct = (id: number) =>{
  return apiClient.delete(`${baseUrl}product/products/${id}`)
}