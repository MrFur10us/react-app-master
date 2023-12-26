import authImg from './assets/bg.png'
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="container">
          <div className="App">
      <div className="auth">
        <div className="auth-info">
          <Header />
          <Form />
          <Footer />
        </div>
        <div className="auth-img">
          <img src={authImg} alt="BG" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
