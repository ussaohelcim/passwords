import React from 'react';

import {db, refreshEvent } from './App';

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
