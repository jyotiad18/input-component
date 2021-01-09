import React from 'react';
import cname from 'classnames';
import './Input.css';

function Input({ 
	title,
	labelFor,
	inputType,
	placeholder,
	value,
	hover,
	focus,
	error,
	disabled,
	helperText,
	startIcon,
	endIcon,
	size,
	fullWidth,
	multiline,
	rows
}) {	
	return (
		<div className={'input ' + 
			cname({	
				[`input__size-${size}`]: size,
				hover: hover,
				focus: focus,
				error: error,
				disabled: disabled
			})
		 }>
			<label for={labelFor}>{title}</label>
			<div className={'input__detail ' + 
				cname({					
					fullWidth: fullWidth
				})
		     }>
				{startIcon}
				{
					multiline ? 
						<textarea
							placeholder={placeholder}
							id={labelFor}
							value={value}
							disabled={disabled}
							rows={rows}
						></textarea>
					:
					<input
						type={inputType}
						placeholder={placeholder}
						id={labelFor}
						value={value}
						disabled={disabled}
				  />
				}
			
			{endIcon}
			</div>
			{
				helperText ?
					<p>{helperText}</p>
					: null
			}
		</div>
	)
}

export default Input;
