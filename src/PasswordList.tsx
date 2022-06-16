import React from 'react';
import { Database } from './Database';
import { refreshEvent } from './App';

const db = new Database()

export class PasswordList extends React.Component{
	refresh(){
		this.setState({})
	}
	removeFromList(input:any){
		let e = input.target as HTMLElement
		let id = e.parentElement!.parentElement!.id

		if(confirm("Do you really want to remove this account?"))
		{
			db.remove(Number(id))

			this.refresh()
		}
	}
	render(): React.ReactNode {
		window.removeEventListener(refreshEvent,()=>{})
		
		window.addEventListener(refreshEvent,()=>{
			this.refresh()
		},{once:true})

		const r = db.getAll().map((acc,i)=>{
			return <tr key={i} id={`${i}`}>
				<th >
					{acc.service}
				</th>
				<th >
					{acc.username}
				</th>
				<th className='password'>
					{acc.password}
				</th>
				<th>
					<input type="button"  value="delete" onClick={this.removeFromList.bind(this)} />
				</th>
			</tr>
		}) 

		

		return (
			<div>
				<p>Password list:</p>
				<table>
					<thead>
						<tr>
							<th>Service</th>
							<th>Username</th>
							<th>Password</th>
							<th>
								x
							</th>
						</tr>
					</thead>
					<tbody>
						{r}
					</tbody>
				</table>
			</div>
		)
	}
}

export class NewAccount extends React.Component{
	
	handleForm(input:any){		
		input.preventDefault()

		const acc:IAccount = {
			username : input.target.username.value,
			password : input.target.password.value,
			service : input.target.service.value
		}
		
		this.addNewAccount(acc)
		
		input.target.reset();

	}
	
	addNewAccount(acc:IAccount){
		//@ts-ignore
		// window.PasswordList.alertMessage();
		window.dispatchEvent(new Event(refreshEvent))
		db.add(acc)
	}

	render(): React.ReactNode {
		return <div>
			<p>Password creation:</p>
			<form onSubmit={this.handleForm.bind(this)}>
				<input type="text" name="service" placeholder='service name' id="" />
				<input type="text" name="username" placeholder='username' id="" />
				<input type="text" name="password" placeholder='password' id=""/>
				<input type="submit" value="add account" />
			</form>
		</div>
	}
}

export class ExportAccounts extends React.Component{

	render(): React.ReactNode {
		return <div>
			<input type="button" value="export" onClick={this.export.bind(this)} />
		</div> 
	}
	export(){
		
		const json = JSON.stringify(db.getAll()) 
		let result = btoa(json)

		const blob = new Blob([result])
		let url = window.URL.createObjectURL(blob)

		window.open(url)
		
	}
}

export class ImportAccounts extends React.Component{
	render(): React.ReactNode {
		return <form onSubmit={this.import.bind(this)}>
			<input type="text" placeholder='import string' name="import" id="" />
			<input type="submit" value="import" />
		</form>
	}

	import(input:any){
		input.preventDefault()

		let r = input.target.import.value

		if(r)
		{
			let json = JSON.parse(atob(r)) 
			window.dispatchEvent(new Event(refreshEvent))
			console.log(json)
			db.import(json)
		}
		
		input.target.reset();

	}
}

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

export class FooterComponent extends React.Component{
	render(): React.ReactNode {
		return <footer className='bottom'>
			<p>This website runs 100% locally on your browser.</p>
			<a href="https://github.com/ussaohelcim/passwords">https://github.com/ussaohelcim/passwords</a>
			<p>Made by ussaohelcim</p>
		</footer>
	}
}

export class HeaderComponent extends React.Component{
	render(): React.ReactNode {
		return <div>
			<h1>Passwords</h1>
			<p>Manage yours passwords localy.</p>
		</div>
	}
}

export interface IAccount{
	username:string
	password:string
	service:string
}
