import React, { createContext, ReactNode } from 'react'
import { useToast, UseToastOptions } from '@chakra-ui/react'

type ProviderProps = {
  children: ReactNode
}

type MessageType = {
  title: string
  description: string
}

export type NotifyContextType = {
  showSuccess: (message: string | MessageType) => void
  showWarning: (message: string | MessageType) => void
  showError: (message: string | MessageType) => void
  showInfo: (message: string | MessageType) => void
}

export const NotifyContext = createContext({} as NotifyContextType)

export const NotifyProvider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
  const toast = useToast()

  function buildNotify(
    status: 'info' | 'warning' | 'success' | 'error' | undefined,
    message: string | MessageType
  ): UseToastOptions {
    const common = {
      duration: 3000,
      isClosable: true,
      status,
    }
    if (typeof message === 'object') {
      return { ...common, ...message }
    }
    return { ...common, title: message }
  }

  function showSuccess(message: string | MessageType) {
    const builded = buildNotify('success', message)
    toast(builded)
  }

  function showError(message: string | MessageType) {
    const builded = buildNotify('error', message)
    toast(builded)
  }

  function showWarning(message: string | MessageType) {
    const builded = buildNotify('warning', message)
    toast(builded)
  }

  function showInfo(message: string | MessageType) {
    const builded = buildNotify('info', message)
    toast(builded)
  }

  return (
    <NotifyContext.Provider value={{ showSuccess, showError, showWarning, showInfo }}>
      {children}
    </NotifyContext.Provider>
  )
}
