import { AxiosResponse } from 'axios'
import { api } from 'config/api'

export type SaleType = {
  id?: number
  dataVenda: Date
  valotTotal: number
  valorDesconto: number
  usuario: number
}

export const getAllSales = async (): Promise<AxiosResponse<SaleType[]>> => {
  const response = await api.get(`/venda`)
  return response.data
}

export const getSaleById = async (id: string): Promise<AxiosResponse<SaleType>> => {
  const response = await api.get(`/venda/${id}`)
  return response.data
}

export const saveSale = async (data: SaleType): Promise<AxiosResponse<SaleType>> => {
  const response = await api.post(`/venda`, data)
  return response.data
}

export const updateSale = async (
  id: string,
  data: SaleType
): Promise<AxiosResponse<SaleType>> => {
  const response = await api.put(`/venda/${id}`, data)
  return response.data
}
