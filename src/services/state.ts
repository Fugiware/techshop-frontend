import { AxiosResponse } from 'axios'
import { api } from 'config/api'

export type StateType = {
  id: number
  nome: string
  sigla: string
}

export const getAllStates = async (): Promise<AxiosResponse<StateType[]>> => {
  const response = await api.get(`/estado`)
  return response.data
}

export const getStateById = async (id: string): Promise<AxiosResponse<StateType>> => {
  const response = await api.get(`/estado/${id}`)
  return response.data
}
