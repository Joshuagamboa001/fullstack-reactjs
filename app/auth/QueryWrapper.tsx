'use client'

import { QueryClient } from "@tanstack/react-query"
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from 'react-hot-toast';

interface Props {
    children? : ReactNode
}

const queryClient = new QueryClient();

const QueryWrapper = ({children}: Props) => (
    <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
    </QueryClientProvider>
)

export default QueryWrapper