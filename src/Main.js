import React from 'react';
import { useLocation } from "react-router-dom";
import Label from './Label';
import Input from './component/Input';
import "./css/Main.css";

function Main() {
	let location = useLocation().pathname;
	location = location === '/' ? 'inputs' : location.substring(1);
	
	return (
		<div className="main">
			<h1>{location[0].toUpperCase().concat(location.substring(1))}</h1> 			
			<div className="main__grid-three">
				<div className="main__grid-group">
					<Label text={`<Input />`} />    
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
					/>
				</div>
				<div className="main__grid-group">
					<Label text={'&:hover'} classType='light' />	
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						hover={true} />
				</div>
				<div className="main__grid-group">
					<Label text={'&:focus'} classType='light' />	
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						focus={true} />
				</div>	
				<div className="main__grid-group">
					<Label text={`<Input error/>`} /> 
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						error={true} />
				</div>
				<div className="main__grid-group">
					<Label text={'&:hover'} classType='light' />	
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						error={true}
						hover={true} />
				</div>
				<div className="main__grid-group">
					<Label text={'&:focus'} classType='light' />	
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						error={true}
						hover={true}
						focus={true} />
				</div>
				<div className="main__grid-group">
					<Label text={`<Input disabled/>`} />
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						disabled={true} />
				</div>
			</div>	
			<div className="main__grid-two">
				<div className="main__grid-group">
					<Label text={`<Input helperText=”Some interesting text” />`} />         			
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						helperText={'Some interesting text'} />
				</div>	
				<div className="main__grid-group">
					<Label text={`<Input helperText=”Some interesting text” error />`} />         			
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						error={true}
						helperText={'Some interesting text'} />
				</div>
				<div className="main__grid-group">
					<Label text={`<Input startIcon />`} /> 
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						startIcon={<i class="material-icons md-24">phone</i>} />
				</div>	
				<div className="main__grid-group">
					<Label text={`<Input endIcon />`} />   
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						endIcon={<i class="material-icons md-24">lock</i>} />
				</div>
			</div>	
			<div className="main__grid-two">
				<div className="main__grid-group">
					<Label text={`<Input value=”text” />`} />   
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={'text'}
						 />
				</div>					
			</div>
			<div className="main__grid-two">
				<div className="main__grid-group">
					<Label text={`<Input size=”sm” />`} />  
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						size={'sm'} />
				</div>		
				<div className="main__grid-group">
					<Label text={`<Input size=”md” />`} />  
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						size={'md'} />
				</div>
			</div>
			<div className="main__grid-one">
				<div className="main__grid-group">
					<Label text={`<Input fullWidth />`} /> 
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'text'}
						placeholder={'Placeholder'}
						value={''}
						fullWidth={true}
					/>
				</div>					
			</div>
			<div className="main__grid-two">
				<div className="main__grid-group">
					<Label text={`<Input multiline rows=”4” />`} /> 
					<Input title={'Label'}
						labelFor={'username'}
						inputType={'textarea'}
						placeholder={'Placeholder'}
						value={''}
						multiline={true}
						rows={'4'}
					/>
				</div>					
			</div>			
			<div className="main__footer">
				Jyoti ADHIKARI @ DevChallenges.io
			</div>
		</div>
	)
}

export default Main;
