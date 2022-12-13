import { QueryClientProvider, QueryClient } from "react-query";
import Users from "./features/user/Users";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
};

export default App;
