import { AppRouting } from '@/routing/app-routing';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from './auth/providers/supabase-provider';
import { SettingsProvider } from './providers/settings-provider';
import { ThemeProvider } from './providers/theme-provider';
import { I18nProvider } from './providers/i18n-provider';
import { BrowserRouter } from 'react-router-dom';
import { LoadingBarContainer } from 'react-top-loading-bar';
import { HelmetProvider } from 'react-helmet-async';
import { TooltipsProvider } from './providers/tooltips-provider';
import { QueryProvider } from './providers/query-provider';
import { Toaster } from '@/components/ui/sonner';
import { ModulesProvider } from './providers/modules-provider';

const { BASE_URL } = import.meta.env;

export function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <SettingsProvider>
                    <ThemeProvider>
                        <I18nProvider>
                            <HelmetProvider>
                                <TooltipsProvider>
                                    <QueryProvider>
                                        <LoadingBarContainer>
                                            <BrowserRouter basename={BASE_URL}>
                                                <Toaster />
                                                <ModulesProvider>
                                                    <AppRouting />
                                                </ModulesProvider>
                                            </BrowserRouter>
                                        </LoadingBarContainer>
                                    </QueryProvider>
                                </TooltipsProvider>
                            </HelmetProvider>
                        </I18nProvider>
                    </ThemeProvider>
                </SettingsProvider>
            </AuthProvider>
        </QueryClientProvider>
    )
}
