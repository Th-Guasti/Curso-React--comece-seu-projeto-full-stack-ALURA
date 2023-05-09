import './App.css'
import Logo from './componentes/logo'
import OpcoesHeader from './componentes/opcoesHeader'
import IconesHeader from './componentes/iconesHeader'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App