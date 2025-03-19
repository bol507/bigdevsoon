import App from "./App"
import AppRouter from "./core/route/app-router"


const AppProviderContainer = () => {
  return (
    <AppRouter>
        <App />
    </AppRouter>
  )
}

export default AppProviderContainer