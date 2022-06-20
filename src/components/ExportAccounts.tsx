import React from 'react';
import {db, refreshEvent } from '../App';
import { Tooltip } from './Tooltip';

export class ExportAccounts extends React.Component{

	render(): React.ReactNode {
		return <div className='border'>
			<p>Password export:</p>
			{/* <input type="text" name="masterKey" placeholder='master password' id="" /> */}
			<Tooltip text='Export an account list to a base64 string'></Tooltip>
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
