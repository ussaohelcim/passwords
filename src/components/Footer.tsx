import React from 'react';

export class FooterComponent extends React.Component{
	render(): React.ReactNode {
		return <footer className='bottom'>
			<p>This website runs 100% locally on your browser.</p>
			<a href="https://github.com/ussaohelcim/passwords">https://github.com/ussaohelcim/passwords</a>
			<p>Made by ussaohelcim</p>
		</footer>
	}
}
