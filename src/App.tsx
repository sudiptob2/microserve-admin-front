import ProductList from './components/ProductList';
import Header from './layout/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
