import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Detail from './components/Detail';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <div className="App container">
      <h1>Star Wars API</h1>
      <SearchForm></SearchForm>
      <Switch>
        <Route exact path= "/:category/:id">
          <Detail></Detail>
        </Route>
      </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
