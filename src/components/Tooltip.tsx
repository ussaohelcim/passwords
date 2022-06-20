interface ITooltip{
	text:string
}

export function Tooltip(props:ITooltip)
{
	return (
		<span className="tooltip">
			{props.text}
		</span>
	) 
}
