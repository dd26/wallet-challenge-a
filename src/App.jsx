import './App.css';
import Index from './pages/Index';
import Layout from './layout/Layout';
import StateAppProvider from './context/contextProvider';


function App() {
  return (
    <div className="App">
      <StateAppProvider>
        <Layout>
          <Index />
        </Layout>
      </StateAppProvider>
    </div>
  );
}

export default App;
