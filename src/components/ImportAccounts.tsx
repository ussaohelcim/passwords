import React from 'react';
import {db, refreshEvent } from '../App';
import { Tooltip } from './Tooltip';

export class ImportAccounts extends React.Component{
	render(): React.ReactNode {
		return <div className='border'>
			<p>Password import:</p>
			<form onSubmit={this.import.bind(this)}>
				<input type="text" placeholder='Import string' name="import" id="" />
				{/* <input type="text" placeholder='Master password' name="masterkey" id="" /> */}
				<Tooltip text='Import an account list from a base64 string'></Tooltip>
				<input type="submit" value="import" />
			</form>
		</div> 
	}

	import(input:any){
		input.preventDefault()

		const accountList = input.target.import.value

		if(accountList)
		{
			const json = JSON.parse(atob(accountList)) 

			window.dispatchEvent(new Event(refreshEvent))

			db.import(json)
		}
		
		input.target.reset();
	}
}
