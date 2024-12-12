import { __ } from '@wordpress/i18n';
import { SelectControl, PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export const PressinoUI = {
	getBlockIcon: getBlockIcon,
	addAttributes: addAttributes,
	getStandardClass: getStandardClass,
	getStandardProperty: getStandardProperty,
	istr: istr,
}

export const PRIMARY_NAMESPACE = 'pressino-ui-blocks';
export function istr(theString) {
	return __(theString, PRIMARY_NAMESPACE);
}


function getStandardProperty(theProps, theAttName, theLabel, theControlType, theOnChange, theSelectionList) {
	const { attributes, setAttributes } = theProps;
	var tmpContents = [];
	var tmpAtts = attributes;

	var tmpOnChange = theOnChange;
	var tmpVal = tmpAtts[theAttName];

	if (theControlType == 'checkbox') {
		if (!tmpOnChange) {
			tmpOnChange = () => {
				var tmpAddedAtts = {};
				tmpAddedAtts[theAttName] = !tmpVal;
				setAttributes(tmpAddedAtts)
			}
		}

		tmpContents.push(<ToggleControl
			checked={!!tmpVal}
			label={istr(theLabel)}
			onChange={tmpOnChange}
		/>)
	} else if (theControlType == 'text' || theControlType == 'number') {
		tmpContents.push(getTextControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType));
	} else if (theControlType == 'color') {
		tmpContents.push(getSelectControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType));

		// if (!tmpOnChange) {
		// 	tmpOnChange = (value) => {
		// 		var tmpAddedAtts = {};
		// 		tmpAddedAtts[theAttName] = value;
		// 		setAttributes(tmpAddedAtts)
		// 	}
		// }

		// tmpContents.push( <SelectControl
        //     label={theLabel}
        //     value={ tmpVal }
        //     options={ [
        //         { label: 'Default', value: '' },
        //         { label: 'Black', value: 'black' },
        //         { label: 'Blue', value: 'blue' },
        //     ] }
        //     onChange={tmpOnChange}
        //     __next40pxDefaultSize
        //     __nextHasNoMarginBottom
        // />)
	}

	return tmpContents;
}

function getFunctionForType(theControlType){
	var tmpCT = (theControlType||'').toLowerCase();
	if( tmpCT == 'text'  || tmpCT == 'number' ){
		return 'getTextControl';
	}
	if( tmpCT == 'color' ){
		return 'getColorListControl';
	}
	if( tmpCT == 'sizeheader' ){
		return 'getHeaderSizeListControl';
	}            
	if( tmpCT == 'size' ){
		return 'getSizeListControl';
	}            
	if( tmpCT == 'attached' ){
		return 'getAttachedListControl';
	}            
	if( tmpCT == 'alignment' ){
		return 'getAlignmentListControl';
	}            
	if( tmpCT == 'alignmentleftright' ){
		return 'getLeftRightAlignmentListControl';
	}            
	if( tmpCT == 'alignmentvertical' ){
		return 'getVerticalAlignmentListControl';
	}                        
	if( tmpCT == 'floatleftright' ){
		return 'getLeftRighFloatListControl';
	}            
	if( tmpCT == 'tofloat' ){
		return 'getFloatControl';
	}            
	if( tmpCT == 'columns' ){
		return 'getColumnListControl';
	}            
	if( tmpCT == 'margin' ){
		return 'getMarginListControl';
	}            
	if( tmpCT == 'topmargin' ){
		return 'getTopMarginListControl';
	}            
	if( tmpCT == 'bottommargin' ){
		return 'getBottomMarginListControl';
	}            
	if( tmpCT == 'padding' ){
		return 'getPaddingListControl';
	}            
	if( tmpCT == 'inverted' ){
		return 'getInvertedListControl';
	}            
	if( tmpCT == 'gridspacing' ){
		return 'getGridSpacingListControl';
	}            
	
	if( tmpCT == 'dropdown' ){
		return 'getDropDownListControl';
	}            
	return 'getTextControl';
}

// function standardOnChange() {
// 	//tmpOnChange = tmpOnChange || standardOnChange.bind({ props: theProps, controltype: theControlType });		
// 	let tmpOnChange = (value) => {
// 		var tmpNew = {};
// 		tmpNew[this.name] = value;
// 		this.props.setAttributes(tmpNew);
// 	};
// 	return tmpOnChange;
// }

function getOptionsForControlType(theProp, theCurrentValue, theOnChangeEvent){
	if( !(theProp)){
		console.error('no property passed to get list control');
		return <></>
	}
	let tmpList = ThisApp.controls.getSelListFor(theProp);
	for( var iPos in tmpList ){
		tmpList[iPos].label = tmpList[iPos].name || tmpList[iPos].value;
	}
	return tmpList;

}

function getSelectControl(theProps, theName, theLabel, theValue, theOnChange, theControlType) {
	var tmpOnChange = theOnChange;
	if (!tmpOnChange) {
		tmpOnChange = (value) => {
			var tmpAddedAtts = {};
			tmpAddedAtts[theName] = value;
			theProps.setAttributes(tmpAddedAtts)
		}
	}
	var tmpOptions = getOptionsForControlType(theControlType);
	return ( <SelectControl
		label={theLabel}
		value={ theValue }
		options={tmpOptions}
		onChange={tmpOnChange}
		__next40pxDefaultSize
		__nextHasNoMarginBottom
	/>)
}

function getTextControl(theProps, theName, theLabel, theValue, theOnChange, theControlType) {

	var tmpOnChange = theOnChange;
	if (!tmpOnChange) {
		tmpOnChange = (value) => {
			var tmpVal = value;
			if (theControlType == 'number') {
				tmpVal = parseInt(tmpVal);
				if (!(tmpVal)) {
					tmpVal = 0;
				}
			}
			var tmpNew = {};
			tmpNew[theName] = tmpVal;
			theProps.setAttributes(tmpNew);
		};
	}



	return <TextControl
		__nextHasNoMarginBottom
		__next40pxDefaultSize
		label={istr(theLabel)}
		value={theValue || ''}
		type={theControlType}

		onChange={tmpOnChange}
	/>
}

function addAttributes(theType, theAtts, theList) {
	theList.map((item, i) => {
		theAtts[item] = {
			"type": theType
		}
	});
	return true;
}

function getStandardClass(theTypeClass, theSpecs, theAtts, theIsEditMode) {
	var tmpAtts = theAtts;
	var tmpCN = theTypeClass;
	var tmpSpecs = theSpecs;

	for (var iPos = 0; iPos < tmpSpecs.boolean.length; iPos++) {
		var tmpName = tmpSpecs.boolean[iPos];
		if (tmpAtts[tmpName]) {
			tmpCN += ' ' + tmpName;
		}
	}

	for (var iPos = 0; iPos < tmpSpecs.string.length; iPos++) {
		var tmpName = tmpSpecs.string[iPos];
		if (tmpAtts[tmpName]) {
			tmpCN += ' ' + tmpAtts[tmpName];
		}
	}

	return tmpCN;
}

const iconPaths = {
	default: 'M 2.7947192,23.2569 C 1.9723743,22.975353 1.3765431,22.511197 0.92920694,21.803663 0.62881455,21.328544 0.62592867,21.235758 0.62592867,12.050123 c 0,-8.8410006 0.0128219,-9.2982582 0.27421251,-9.7965642 C 1.243921,1.5982422 2.0450475,0.93633387 2.8006461,0.68331842 3.3408908,0.50241578 3.9708197,0.48912818 12.006948,0.48912818 c 8.036128,0 8.666058,0.0132921 9.2063,0.19419024 0.755599,0.25301545 1.556724,0.91492378 1.900505,1.57024038 0.261416,0.498306 0.274214,0.9555636 0.274214,9.7965642 0,9.185635 -0.0028,9.278421 -0.303278,9.75354 -0.447334,0.707534 -1.043167,1.17169 -1.865515,1.453237 l -0.730831,0.250219 H 12.006948 3.5255523 Z m 5.0699091,-2.7933 c 0.1918926,-0.141069 0.227839,-0.502758 0.227839,-2.291818 0,-1.168367 0.04106,-2.124306 0.091202,-2.124306 0.050168,0 0.5557761,0.125927 1.1236023,0.27983 1.3623004,0.369246 3.4821674,0.458845 4.9319624,0.208454 3.52538,-0.608862 5.600702,-2.783309 5.594568,-5.86179 C 19.831258,9.3532967 19.559271,8.465286 18.856419,7.4818781 17.379605,5.4155972 14.527742,4.4304452 10.416723,4.5664644 8.166978,4.6408995 5.3386742,5.0046605 5.0840954,5.2523159 4.9431409,5.3894395 4.9028672,7.0804513 4.9028672,12.862351 c 0,6.615817 0.025058,7.452167 0.2278288,7.601249 0.1684549,0.123848 0.5246944,0.167506 1.3669636,0.167506 0.842271,0 1.1985112,-0.04366 1.3669636,-0.167506 z m 2.7961777,-5.693555 c -0.381557,-0.05045 -1.1155213,-0.236832 -1.6310366,-0.4142 L 8.0924597,14.033349 V 10.34684 c 0,-3.4107166 0.01908,-3.6922419 0.2537113,-3.7631122 0.1395375,-0.042132 1.2649594,-0.076602 2.500923,-0.076602 2.055853,0 2.304443,0.020941 2.919357,0.245874 1.078564,0.3945404 1.811687,0.9274646 2.319784,1.6862985 0.418695,0.6253189 0.473697,0.8179467 0.532338,1.8644027 0.07871,1.404807 -0.129717,2.233434 -0.754288,2.99835 -0.514905,0.630619 -1.44237,1.194049 -2.229966,1.354687 -0.805377,0.164259 -2.189204,0.216996 -2.973519,0.113306 z'
};

function getBlockIcon(theName) {
	var tmpName = theName || 'default';
	var tmpPath = iconPaths[tmpName];
	if (!(tmpPath)) {
		tmpPath = iconPaths.default;
	}

	return <svg
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
		focusable="false"
	>
		<path
			d={tmpPath}
		></path>
	</svg>

}


export const PressinUICore = {
	iconPaths: iconPaths,
	getBlockIcon: getBlockIcon
}

