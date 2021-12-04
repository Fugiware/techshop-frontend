import { AxiosResponse } from 'axios'
import { api } from 'config/api'

export type LoginType = {
  expires: number
}

export type SignupType = {
  expires: number
}

export const sendLogin = async (): Promise<AxiosResponse<LoginType>> => {
  const response = await api.get(`/login`)
  return response.data
}

export const sendSignup = async (): Promise<AxiosResponse<SignupType>> => {
  const response = await api.get(`/signup`)
  return response.data
}
