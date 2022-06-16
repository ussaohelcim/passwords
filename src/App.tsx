import './App.css';

import { Database } from './Database';
import { ExportAccounts } from './ExportAccounts';
import { FooterComponent } from './Footer';
import { HeaderComponent } from './Header';
import { HelpPage } from './HelpPage';
import { ImportAccounts } from './ImportAccounts';
import { NewAccount } from './NewAccount';
import { PasswordList } from './PasswordList';

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
