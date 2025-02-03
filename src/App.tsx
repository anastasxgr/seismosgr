// components
import Header from "./components/Header";
import QuakesList from "./components/QuakesList";
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <QuakesList />
      </Provider>
    </>
  );
}

export default App;
