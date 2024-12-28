//import {dashIcons} from './dash.js';
import {faIcons} from './fa.js';
import {biIcons} from './bi.js';
import {categories} from './categories.js';


export function getIconClass({iconname, icontype, iconclass, weight, isForSubItem = false}){
	let tmpClasses = iconname || iconclass || '';
	tmpClasses += ' icon';
	let tmpPrefix = isForSubItem ? 's' : '';

	var tmpOtherClasses = '';
    if( icontype == 'fa' ){
		tmpOtherClasses  = tmpPrefix +'fa-' + (weight ? weight : 'solid') ;
    } else if( isForSubItem && icontype == 'dash' ){
		tmpOtherClasses  = 'dashicons';
	}
	if( tmpOtherClasses ){
		tmpClasses += ' ' + tmpOtherClasses;
	}
	if( isForSubItem ){
		tmpClasses = tmpPrefix + tmpClasses + ' ' + tmpPrefix + icontype;
	}
	return tmpClasses;
}

export function getIconEl(props){
	const {iconname, icontype, iconclass, weight} = props;
	let tmpClasses = iconname || iconclass || '';
	tmpClasses += ' icon';
	var tmpOtherClasses = '';
    if( icontype == 'fa' ){
		tmpOtherClasses  = 'fa-' + (weight ? weight : 'solid') ;
    } else if( icontype == 'dash' ){
		tmpOtherClasses  = 'dashicons';
	}
	if( tmpOtherClasses ){
		tmpClasses += ' ' + tmpOtherClasses;
	}
	return <span class={getIconClass(props)}></span>;
}

export const classIconIndex = {
	"icons":[
		...biIcons,
		// ...dashIcons,
		...faIcons
	],
	"categories": categories
}
