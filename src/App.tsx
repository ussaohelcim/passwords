import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { ExportAccounts,ImportAccounts, PasswordList, NewAccount, FooterComponent, HelpPage, HeaderComponent } from './PasswordList';

export const refreshEvent = "refresh-list"
// window.addEventListener('')

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
