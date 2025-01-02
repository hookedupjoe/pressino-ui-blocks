//import {dashIcons} from './dash.js';
import {faIcons} from './fa.js';
import {biIcons} from './bi.js';
import {categories} from './categories.js';


export function getIconClass(attributes){
	const {iconcolor, iconsize, iconname, icontype, iconclass, weight, isForSubItem = false} = attributes;
	let tmpClasses = iconname || iconclass || '';
	tmpClasses += ' icon';
	let tmpPrefix = isForSubItem ? 's' : '';

	if( iconcolor ){
		tmpClasses += ' ' + iconcolor;
	}
	if( iconsize ){
		tmpClasses += ' ' + iconsize;
	}

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

export function getIconEl(attributes){
	const {iconname, icontype, iconclass, weight} = attributes;
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
	return <span class={getIconClass(attributes)}></span>;
}

export const classIconIndex = {
	"icons":[
		...biIcons,
		// ...dashIcons,
		...faIcons
	],
	"categories": categories
}
