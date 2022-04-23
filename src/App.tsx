import { ReactKeycloakProvider } from "@react-keycloak/web";
import { Col, Container, Row } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProduct from './components/CreateProduct';
import ProductList from './components/ProductList';
import PrivateRoute from "./helper/PrivateRoute";
import keycloak from "./keycloak";
import Header from './layout/Header';

const tokenLogger = (tokens: any) => {
  localStorage.setItem("token", JSON.stringify(tokens))
}

const App: React.FC = () => {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}
          onTokens={tokenLogger}
      >

      <Header />
        <Container className="mt-5">
          <Row>
            <Col xs={12} md={8}>
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            </Col>
            <Col xs={12} md={4}>
              <PrivateRoute>
                <CreateProduct />
              </PrivateRoute>
            </Col>
          </Row>
        </Container>
        <ToastContainer />

      </ReactKeycloakProvider>

    </div>
  );
}

export default App;
