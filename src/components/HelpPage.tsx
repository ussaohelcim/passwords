import React from 'react';

export class HelpPage extends React.Component{
	render(): React.ReactNode {
		return <div >
			<label htmlFor="showHelp">Show help</label>
			<input type="checkbox" name="showHelp" id="showHelp" />
			
			<div className='help'>
				<p>--help</p>
				<p>
					Add new account: <br />
					- fill the "Password creation" form <br />
					- click on "add account"
				</p>
				<p>
					Export accounts: <br />
					You can export your accounts. They will be outputted as a BASE64 text, so you can save in a secure place and import them after. <br />
					- click on "export" <br />
					- copy the result and save in some safe place

				</p>
				<p>
					Import accounts: <br />
					You can import your exported accounts. <br />
					- paste your export text at "import string" <br />
					- click on "import" <br />
					You can now add new accounts.
				</p>
			</div>
		</div>
	}
}
