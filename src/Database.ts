import { IAccount } from "./components/NewAccount"

export class Database{
	passwordList: IAccount[] = []
	import(acc:IAccount[]){
		acc.forEach((a)=>{
			this.passwordList.push(a)
		})
	}
	getAll():IAccount[]{
		return this.passwordList
	}
	add(acc:IAccount){
		this.passwordList.push(acc)
	}
	save(){
		let passwordsEnconded = btoa(JSON.stringify(this.passwordList))
		localStorage.setItem("password",passwordsEnconded)
	}
	load(){
		let storage = localStorage.getItem("password")
		if(storage)
		{
			let json = JSON.parse(atob(storage))
			this.passwordList = json
		}
	}
	remove(index:number){
		this.passwordList.splice(index,1)
	}
}

export {}