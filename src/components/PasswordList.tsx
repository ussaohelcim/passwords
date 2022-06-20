import React from 'react';

import {db, refreshEvent } from '../App';

export class PasswordList extends React.Component{
	refresh(){
		this.setState({})
	}
	removeFromList(input:any){
		const e = input.target 
		const tr = e.parentElement!.parentElement as HTMLTableRowElement
		const service = tr.querySelector("#service")?.innerHTML 
		const username = tr.querySelector("#username")?.innerHTML 
		const id = tr.id

		if(confirm(`Do you really want to remove ${service}:${username} ?`))
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
			return <tr key={i} id={`${i}`} >
				<th id='service'>{acc.service}</th>
				<th id='username'>{acc.username}</th>
				<th className='password'>
					{acc.password}
				</th>
				<th>
					<input type="button"  value="delete" onClick={this.removeFromList.bind(this)} />
				</th>
			</tr>
		}) 

		return (
			<div className="border flexBox">
				<p>Password list:</p>
				<table >
					<thead>
						<tr>
							<th>Service</th>
							<th>Username</th>
							<th>Password</th>
							<th>x</th>
						</tr>
					</thead>
					<tbody>{r}</tbody>
				</table>
			</div>
		)
	}
}
