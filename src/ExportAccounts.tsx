import React from 'react';
import {db, refreshEvent } from './App';

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