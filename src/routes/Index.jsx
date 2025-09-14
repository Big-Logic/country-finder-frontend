import { BrowserRouter, Routes, Route, Navigate } from "react-router";

// PROVIDERS
import AuthProvider from "../providers/AuthProvider/AuthProvider";

// LAYOUTS
import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";
import PageLayout from "../layouts/PageLayout";

// PAGES
import Countries from "../pages/Countries";
import Country from "../pages/Country";
import User from "../pages/User";
import SaveCountries from "../pages/SavedCountries";
import UserSetting from "../pages/UserSetting";
import Login from "../pages/Login";
import CountriesProvider from "../providers/CountriesProvider/CountriesProvider";
import QueryClientProvider from "../providers/QueryClientProvider";
import GlobalStyle from "../styles/GlobalStyle";

export default function AppRoutes() {
  return (
    <QueryClientProvider>
      <GlobalStyle />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route element={<CountriesProvider />}>
                <Route element={<AppLayout />}>
                  <Route element={<PageLayout />}>
                    <Route path="/" element={<Navigate to="/countries" />} />
                    <Route path="countries" element={<Countries />} />
                    <Route path="countries/:countryId" element={<Country />} />
                    <Route path="user" element={<User />} />
                    <Route
                      path="user/savedcountries"
                      element={<SaveCountries />}
                    />
                    <Route path="user/setting" element={<UserSetting />} />
                    <Route path="/setting" element={<h1>Setting</h1>} />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="/auth/login" element={<Login />} />
            <Route path="*" element={<h1>Nothing found at this route</h1>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}
