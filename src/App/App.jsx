import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./AppRouter";
import { FavoritesProvider } from "../Context/FavoriteCotext";

const client = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <FavoritesProvider>
          <AppRouter />
        </FavoritesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
