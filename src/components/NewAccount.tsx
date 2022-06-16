import React from 'react';
import {db, refreshEvent } from '../App';

export interface IAccount{
	username:string
	password:string
	service:string
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
		window.dispatchEvent(new Event(refreshEvent))
		db.add(acc)
	}

	generateRandomPassword(btn:any){
		const passwordForm = btn.target.parentNode as HTMLFormElement
		const inputBox = passwordForm!.querySelector("#passwordInputBox") as HTMLInputElement

		let newPass = ""
		let passLength = 20

		for (let index = 0; index < passLength; index++) {
			//32 = " "
			//126 = "~"
			let dec = Math.floor(Math.random() * (126-32) ) + 32

			newPass += String.fromCharCode(dec)
		}
		
		inputBox.value = newPass
	}

	render(): React.ReactNode {
		return <div>
			<p>Password creation:</p>
			<form onSubmit={this.handleForm.bind(this)}>
				<input type="text" name="service" placeholder='service name' id="" />
				<input type="text" name="username" placeholder='username' id="" />
				<input type="text" name="password" placeholder='password' id="passwordInputBox" />
				<input type="button" value="Generate random pass" onClick={this.generateRandomPassword.bind(this)}/>
				<input type="submit" value="Add account" />
			</form>
		</div>
	}
}