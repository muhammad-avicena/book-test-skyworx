import AppRoutes from "./routes";
import { BookProvider } from "./contexts/BookContext";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <BookProvider>
          <AppRoutes />
        </BookProvider>
      </AuthProvider>
    </>
  );
}

export default App;
