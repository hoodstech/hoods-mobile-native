import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC, ReactNode } from 'react'

const queryClient = new QueryClient()

type QueryClientProviderProps = {
  children: ReactNode
}

export const QueryProvider: FC<QueryClientProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
