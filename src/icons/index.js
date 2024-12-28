//import {dashIcons} from './dash.js';
import {faIcons} from './fa.js';
import {biIcons} from './bi.js';
import {categories} from './categories.js';


export function getIconEl({iconname, icontype, iconclass, weight}){
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
	return <span class={tmpClasses}></span>;
}

export const classIconIndex = {
	"icons":[
		...biIcons,
		// ...dashIcons,
		...faIcons
	],
	"categories": categories
}
