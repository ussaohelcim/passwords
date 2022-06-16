import React from 'react';
import {db, refreshEvent } from './App';

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