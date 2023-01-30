import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import AppShell from "./components/app-shell";
import { store } from "./store/store";
import { AppTheme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider theme={AppTheme}>
    <Provider store={store}>
      <AppShell>
        <App />
      </AppShell>
    </Provider>
  </ChakraProvider>
);
