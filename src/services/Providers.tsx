'use client';

import React, { ReactNode } from 'react'
import { QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import { getQueryClient } from '../lib/query';
import { TodoStoreProvider } from '@/stores/todo-store-provider';
import { ThemeProvider } from 'next-themes'
type ProvidersProps = {
  children: ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = getQueryClient()
  return (
    <>
      <ThemeProvider defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <TodoStoreProvider>
            <SnackbarProvider />
            {children}
          </TodoStoreProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default Providers