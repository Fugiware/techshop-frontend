import { AxiosResponse } from 'axios'
import { api } from 'config/api'
import { StateType } from './state'

export type CityType = {
  id: number
  nome: string
  estado: StateType
}

export const getAllCities = async (): Promise<AxiosResponse<CityType[]>> => {
  const response = await api.get(`/cidade`)
  return response.data
}

export const getCityById = async (id: string): Promise<AxiosResponse<CityType[]>> => {
  const response = await api.get(`/cidade/${id}`)
  return response.data
}

export const getStateByCityId = async (id: string): Promise<AxiosResponse<StateType>> => {
  const response = await api.get(`/cidade/estado/${id}`)
  return response.data
}
