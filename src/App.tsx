import './styles/App.css';

import { Database } from './Database';
import { ExportAccounts } from './components/ExportAccounts';
import { FooterComponent } from './components/Footer';
import { HeaderComponent } from './components/Header';
import { HelpPage } from './components/HelpPage';
import { ImportAccounts } from './components/ImportAccounts';
import { NewAccount } from './components/NewAccount';
import { PasswordList } from './components/PasswordList';

export const refreshEvent = "refresh-list"
export const db = new Database()

function App() {
  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <NewAccount></NewAccount>
      <PasswordList></PasswordList>
      <ImportAccounts></ImportAccounts>
      <ExportAccounts></ExportAccounts>
      <HelpPage></HelpPage>
      <FooterComponent></FooterComponent>
    </main>
  );
}

export default App;
