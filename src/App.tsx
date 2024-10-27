import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { theme } from './theme';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}