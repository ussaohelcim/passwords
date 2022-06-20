import React from 'react';
import {db, refreshEvent } from '../App';

import { Tooltip } from './Tooltip';

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
		const passlen = passwordForm.querySelector("#inputPasslen") as HTMLInputElement

		let newPass = ""
		let passwordLengthgth = Number(passlen.value) || 12 

		for (let index = 0; index < passwordLengthgth; index++) {
			//32 = " "
			//126 = "~"
			let dec = Math.floor(Math.random() * (126-32) ) + 32

			newPass += String.fromCharCode(dec)
		}
		
		inputBox.value = newPass
	}

	setPasswordLengthText(input:any){
		const passwordForm = input.target.parentNode as HTMLFormElement
		const passlen = passwordForm!.querySelector("#passlen") as HTMLInputElement
		passlen.innerText = `Password length: ${input.target.value}`
	}

	render(): React.ReactNode {
		return <div className="border">
			<p>Password creation:</p>
			<form onSubmit={this.handleForm.bind(this)}>
				<input type="text" name="service" placeholder='service name' id="" required/>
				<input type="text" name="username" placeholder='username' id="" required/>
				<input type="text" name="password" placeholder='password' id="passwordInputBox" required/>
				<label id='passlen' htmlFor="passwordLength">Password length: 8</label>
				<input type="range" name="passwordLength" min={8} max={128} defaultValue={8} onChange={this.setPasswordLengthText.bind(this)} id="inputPasslen" /> 
				<Tooltip text='Generate a new random password and add to the password field above.'></Tooltip>
				<input type="button" value="Generate random pass" onClick={this.generateRandomPassword.bind(this)}/>
				<div>
				<Tooltip text='Add the above account to the account list'></Tooltip>
				<input type="submit" value="Add account" />
				</div>
				
			</form>
		</div>
	}
}
