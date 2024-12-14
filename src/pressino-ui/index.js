import { __ } from '@wordpress/i18n';
import { SelectControl, PanelBody, TextControl, ToggleControl } from '@wordpress/components';


export const attNamesDef = { mediaID: 'mediaID', mediaURL: 'mediaURL' };
export const el = wp.element.createElement;

export const PRIMARY_NAMESPACE = 'pressino-ui-blocks';
export function istr(theString) {
	return __(theString, PRIMARY_NAMESPACE);
}



function refreshBlockEditor(){
	var tmpBlockClientId = '';
	var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
	if( tmpThis && tmpThis.clientId){
		tmpBlockClientId = tmpThis.clientId;
	}
	wp.data.dispatch('core/block-editor').synchronizeTemplate();
	if( tmpBlockClientId ){
	   wp.data.dispatch( 'core/block-editor' ).selectBlock( tmpBlockClientId )
	}

}


function getParentAttributes(theBlockID){
	var tmpParentAttributes = {};
	var tmpParentBlock = getParentBlock(theBlockID);
	if( tmpParentBlock && tmpParentBlock.attributes ){
		tmpParentAttributes = tmpParentBlock.attributes || {};
	}
	return tmpParentAttributes;
}

function getParentBlock(theBlockID){
	var tmpParents = wp.data.select( 'core/block-editor' ).getBlockParents(theBlockID);

	if( tmpParents && tmpParents.length > 0 ){
		//--- Get the direct parent ... 0 is top level
		var tmpParentID = tmpParents[tmpParents.length-1];
		var tmpParentBlock = wp.data.select('core/block-editor').getBlocksByClientId(tmpParentID);
		if( tmpParentBlock && tmpParentBlock.length > 0 ){
			return tmpParentBlock[0];
		}
	}
	return false;
}


function getRandomID(){
	return window.crypto.randomUUID();
}

function getStandardProperty(theProps, theAttName, theLabel, theControlType, theOnChange, theSelectionList) {
	
	const { attributes, setAttributes } = theProps;
	var tmpContents = [];
	var tmpAtts = attributes;

	
	var tmpOnChange = theOnChange;
	var tmpVal = tmpAtts[theAttName];

	if (theControlType == 'checkbox') {
		var tmpDoRefresh = false;
		if( theOnChange === true ){
			tmpDoRefresh = true;
			theOnChange = undefined;
		}
		
		if (!tmpOnChange) {
			tmpOnChange = () => {
				var tmpAddedAtts = {};
				tmpAddedAtts[theAttName] = !tmpVal;
				setAttributes(tmpAddedAtts);
				if( tmpDoRefresh ){
					refreshBlockEditor();
				}
			}
		}

		tmpContents.push(<ToggleControl
			checked={!!tmpVal}
			label={istr(theLabel)}
			onChange={tmpOnChange}
		/>)
	} else if (theControlType == 'text' || theControlType == 'number') {
		tmpContents.push(getTextControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType));
	} else if (theControlType == 'image' ) {
		return getCustomImageSelection(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType)
	} else if (theControlType == 'url' ) {
		return getCustomURLControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType)
	} else if (listSources[theControlType]) {
		tmpContents.push(getSelectControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType));
	}
	// if( tmpDoRefresh ){
	// 	refreshBlockEditor();
	// }
	return tmpContents;
}

function getCustomURLControl(theProps, theAttName, theLabel, theVal, theOnChange, theControlType){
	var tmpDoRefresh = false;
	if( theOnChange === true ){
		tmpDoRefresh = true;
		theOnChange = undefined;
	}
	
	var tmpAtts = theProps.attributes;
	var tmpOnChangeFunc = function( theURL, thePost ) {
		var tmpToSet = {};
		tmpToSet[theAttName] = theURL;
		theProps.setAttributes(tmpToSet);
		if( tmpDoRefresh ){
			refreshBlockEditor();
		}
	}
	var tmpEl = el(wp.blockEditor.URLInput, {onChange: tmpOnChangeFunc, value: tmpAtts[theAttName] || ''},'Browse for Link');
	return(tmpEl);
}

function getCustomImageSelection(theProps, theAttName, theLabel, theVal, theOnChange, theControlType){
	if( theOnChange === true ){
		tmpDoRefresh = true;
		theOnChange = undefined;
	}
	//*** Not supporting refresh on image update .. shouldn't effect other items instantly */

	var tmpAtts = theProps.attributes;
	var onSelectImage = function( media ) {
		var tmpToSet = {};
		tmpToSet[theAttName['mediaURL']] = media.url;
		tmpToSet[theAttName['mediaID']] = media.id;
		return theProps.setAttributes(tmpToSet);
	};

	var onRemoveImage = function(){
		var tmpToSet = {};
		tmpToSet[theAttName['mediaURL']] = '';
		tmpToSet[theAttName['mediaID']] = '';
		return theProps.setAttributes(tmpToSet);
	}

	var tmpMediaURL = tmpAtts[theAttName['mediaURL']];

	//var tmpEl = el('div',{className:'ui label black fluid'},'Card Image');
  //ToDo: Remove hard coded mediaID and mediaURL references
	var tmpMediaEl = el( wp.blockEditor.MediaUpload, {
		onSelect: onSelectImage,
		type: 'image',
		value: theProps.attributes[theAttName['mediaID']],
		render: function( obj ) {
			
			if( !theProps.attributes.mediaID ){
				return el('div',{className:'pad2'},
					el('div', {className:'ui button blue basic', onClick: obj.open}, 'Select Image')
				)
			} else {
				return el('div',{className:'pad2'},
					el('div', {className:'ui button blue basic', onClick: obj.open}, 'Replace'),
					el('div', {className:'ui button blue basic', onClick: onRemoveImage}, 'Remove'),                                            
					el('div',{className:'pad5'}),
					el('img',{className:'ui image rounded fluid pad10', src:tmpMediaURL})
				)
			}
		}
	} )   
	return (tmpMediaEl);
}

// function getFunctionForType(theControlType) {
// 	var tmpCT = (theControlType || '').toLowerCase();
// 	if (tmpCT == 'text' || tmpCT == 'number') {
// 		return 'getTextControl';
// 	}
// 	if (tmpCT == 'color') {
// 		return 'getColorListControl';
// 	}
// 	if (tmpCT == 'sizeheader') {
// 		return 'getHeaderSizeListControl';
// 	}
// 	if (tmpCT == 'size') {
// 		return 'getSizeListControl';
// 	}
// 	if (tmpCT == 'attached') {
// 		return 'getAttachedListControl';
// 	}
// 	if (tmpCT == 'alignment') {
// 		return 'getAlignmentListControl';
// 	}
// 	if (tmpCT == 'alignmentleftright') {
// 		return 'getLeftRightAlignmentListControl';
// 	}
// 	if (tmpCT == 'alignmentvertical') {
// 		return 'getVerticalAlignmentListControl';
// 	}
// 	if (tmpCT == 'floatleftright') {
// 		return 'getLeftRighFloatListControl';
// 	}
// 	if (tmpCT == 'tofloat') {
// 		return 'getFloatControl';
// 	}
// 	if (tmpCT == 'columns') {
// 		return 'getColumnListControl';
// 	}
// 	if (tmpCT == 'margin') {
// 		return 'getMarginListControl';
// 	}
// 	if (tmpCT == 'topmargin') {
// 		return 'getTopMarginListControl';
// 	}
// 	if (tmpCT == 'bottommargin') {
// 		return 'getBottomMarginListControl';
// 	}
// 	if (tmpCT == 'padding') {
// 		return 'getPaddingListControl';
// 	}
// 	if (tmpCT == 'inverted') {
// 		return 'getInvertedListControl';
// 	}
// 	if (tmpCT == 'gridspacing') {
// 		return 'getGridSpacingListControl';
// 	}

// 	if (tmpCT == 'dropdown') {
// 		return 'getDropDownListControl';
// 	}
// 	return 'getTextControl';
// }

function getControlImage(){
	return el('img', {src: ActionAppCore.PressinoUIBlocksConfig.baseURL + '/images/pressino-icon-blocks.png', className:"actappeditor-icon left"})
}



function getSelectControl(theProps, theName, theLabel, theValue, theOnChange, theControlType) {
	var tmpDoRefresh = false;
	if( theOnChange === true ){
		tmpDoRefresh = true;
		theOnChange = undefined;
	}
	

	var tmpOnChange = theOnChange;
	if (!tmpOnChange) {
		tmpOnChange = (value) => {
			var tmpAddedAtts = {};
			tmpAddedAtts[theName] = value;
			theProps.setAttributes(tmpAddedAtts);
			if(tmpDoRefresh){
				refreshBlockEditor();
		    }
		}
	}

	var tmpOptions = getSelectionListForAttribute(theControlType);
	return (<SelectControl
		label={theLabel}
		value={theValue}
		options={tmpOptions}
		onChange={tmpOnChange}
		__next40pxDefaultSize
		__nextHasNoMarginBottom
	/>)
}

function getTextControl(theProps, theName, theLabel, theValue, theOnChange, theControlType) {

	var tmpDoRefresh = false;
	if( theOnChange === true ){
		tmpDoRefresh = true;
		theOnChange = undefined;
	}
	
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
			if(tmpDoRefresh){
				 refreshBlockEditor();
			}
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
	var tmpCN = theTypeClass || '';
	var tmpSpecs = theSpecs;
	// if( tmpSpecs.boolean.length || tmpSpecs.string.length ){
	// 	return theTypeClass; 
	// }
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
	default: 'M 11.225397,23.294546 C 10.046332,23.206692 8.7493539,22.890693 7.5682057,22.403497 4.8839313,21.296297 2.596456,19.078121 1.4606226,16.480942 0.80990251,14.993017 0.51990767,13.6027 0.51681664,11.956074 0.51427293,10.583777 0.67353976,9.5653939 1.0815888,8.3455564 2.9847893,2.656041 8.8987229,-0.58990958 14.782703,0.82549644 18.59335,1.7421567 21.751391,4.6052317 22.974067,8.2517771 c 0.376217,1.12204 0.545051,2.0599079 0.58665,3.2588439 0.210737,6.073695 -4.391151,11.205147 -10.553901,11.768399 -0.48979,0.04476 -1.294834,0.05178 -1.781419,0.01553 z M 6.1207095,20.043801 C 6.2356358,20.00067 6.2446642,19.980146 6.2157124,19.82782 6.1981167,19.735243 6.0432583,19.297755 5.8715795,18.855625 4.8090573,16.119258 4.594475,15.122985 4.4794708,12.392264 4.4118516,10.786612 4.475699,10.019946 4.7949037,8.6034505 4.9681863,7.8345514 5.3027743,6.7151712 5.5796112,5.9781766 6.0668,4.6811802 6.2374224,4.1883131 6.2374224,4.077996 6.2374224,3.8611661 5.8809308,3.8014435 5.4505874,3.9461795 4.9757614,4.1058755 4.5765619,4.6410341 3.8640583,6.0730462 3.1536626,7.5008209 2.7697229,8.605273 2.6058669,9.6923916 2.3448196,11.424343 2.4009113,13.567547 2.7448961,15.004511 c 0.2115254,0.883631 0.7421459,2.288345 1.2152282,3.217085 0.483379,0.948954 0.9577674,1.586246 1.3223538,1.776447 0.1908073,0.09955 0.6308974,0.123566 0.8382314,0.04576 z m 12.5540825,-0.04168 c 0.412627,-0.207782 0.760598,-0.707264 1.391423,-1.997256 0.641447,-1.311715 0.988505,-2.229126 1.200553,-3.173524 0.197551,-0.879838 0.243509,-1.415709 0.240559,-2.80493 -0.003,-1.392213 -0.06053,-1.992529 -0.286996,-2.9923783 C 20.843409,7.3698988 19.674721,4.9117433 18.944657,4.2475015 18.642205,3.9723188 18.393193,3.8698648 18.023774,3.8686112 l -0.30355,-0.00104 0.02746,0.2461718 c 0.0151,0.135394 0.254817,0.8686336 0.532706,1.6294212 1.065967,2.9183295 1.242241,3.8997859 1.197822,6.6692278 -0.02664,1.660759 -0.0898,2.237556 -0.368528,3.365195 -0.211172,0.854344 -0.379073,1.368618 -0.930273,2.84941 -0.271365,0.729019 -0.493392,1.356757 -0.493392,1.394972 0,0.111977 0.757176,0.09677 0.988781,-0.01986 z m -8.066954,-2.698938 v -2.131821 l 0.224684,0.09506 c 0.123577,0.05228 0.428199,0.149094 0.676939,0.215131 0.611151,0.162249 1.89348,0.207046 2.532461,0.08847 1.18178,-0.219308 2.142115,-0.797324 2.847673,-1.713985 0.473656,-0.615373 0.882786,-1.606742 1.064431,-2.579236 0.116569,-0.624094 0.140374,-2.0668943 0.0447,-2.7092091 C 17.623037,6.0454065 16.178639,4.4549513 13.743136,3.8816864 13.318415,3.7817165 13.092658,3.7607088 12.222991,3.7402318 10.782229,3.7063099 9.3154929,3.8622787 7.8882042,4.2011832 L 7.2825211,4.3450005 v 7.5450015 7.545002 H 8.945179 10.607837 Z M 12.032974,12.86388 C 11.583531,12.82593 11.281175,12.751232 10.90438,12.58507 l -0.297263,-0.131092 0.01224,-2.9216711 0.01224,-2.9216708 0.237523,-0.031186 c 0.485388,-0.06374 1.60303,-0.045402 1.896312,0.031108 1.142972,0.298167 1.817381,1.3244679 1.910435,2.9072539 0.01823,0.3100656 0.0073,0.711298 -0.02749,1.005969 -0.202922,1.720387 -1.043859,2.472811 -2.615393,2.340106 z',
	aadefault: 'M 2.7947192,23.2569 C 1.9723743,22.975353 1.3765431,22.511197 0.92920694,21.803663 0.62881455,21.328544 0.62592867,21.235758 0.62592867,12.050123 c 0,-8.8410006 0.0128219,-9.2982582 0.27421251,-9.7965642 C 1.243921,1.5982422 2.0450475,0.93633387 2.8006461,0.68331842 3.3408908,0.50241578 3.9708197,0.48912818 12.006948,0.48912818 c 8.036128,0 8.666058,0.0132921 9.2063,0.19419024 0.755599,0.25301545 1.556724,0.91492378 1.900505,1.57024038 0.261416,0.498306 0.274214,0.9555636 0.274214,9.7965642 0,9.185635 -0.0028,9.278421 -0.303278,9.75354 -0.447334,0.707534 -1.043167,1.17169 -1.865515,1.453237 l -0.730831,0.250219 H 12.006948 3.5255523 Z m 5.0699091,-2.7933 c 0.1918926,-0.141069 0.227839,-0.502758 0.227839,-2.291818 0,-1.168367 0.04106,-2.124306 0.091202,-2.124306 0.050168,0 0.5557761,0.125927 1.1236023,0.27983 1.3623004,0.369246 3.4821674,0.458845 4.9319624,0.208454 3.52538,-0.608862 5.600702,-2.783309 5.594568,-5.86179 C 19.831258,9.3532967 19.559271,8.465286 18.856419,7.4818781 17.379605,5.4155972 14.527742,4.4304452 10.416723,4.5664644 8.166978,4.6408995 5.3386742,5.0046605 5.0840954,5.2523159 4.9431409,5.3894395 4.9028672,7.0804513 4.9028672,12.862351 c 0,6.615817 0.025058,7.452167 0.2278288,7.601249 0.1684549,0.123848 0.5246944,0.167506 1.3669636,0.167506 0.842271,0 1.1985112,-0.04366 1.3669636,-0.167506 z m 2.7961777,-5.693555 c -0.381557,-0.05045 -1.1155213,-0.236832 -1.6310366,-0.4142 L 8.0924597,14.033349 V 10.34684 c 0,-3.4107166 0.01908,-3.6922419 0.2537113,-3.7631122 0.1395375,-0.042132 1.2649594,-0.076602 2.500923,-0.076602 2.055853,0 2.304443,0.020941 2.919357,0.245874 1.078564,0.3945404 1.811687,0.9274646 2.319784,1.6862985 0.418695,0.6253189 0.473697,0.8179467 0.532338,1.8644027 0.07871,1.404807 -0.129717,2.233434 -0.754288,2.99835 -0.514905,0.630619 -1.44237,1.194049 -2.229966,1.354687 -0.805377,0.164259 -2.189204,0.216996 -2.973519,0.113306 z'
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


function getSelectionListForAttribute(thePropName){
	var tmpName = thePropName;
	if( listSources[tmpName] ){
		return getListAsObjects(listSources[tmpName]);
	}
	return {}
}

function getListAsArrays(theList) {
	var tmpList = theList;
	if( typeof(tmpList) == 'object' ){
		var tmpSource = false;
		if( listSources && listSources.hasOwnProperty(tmpList.source) ){
			tmpSource = listSources[tmpList.source];
			tmpList = tmpSource;
		}

		if( !(tmpSource) ){
			console.error("Passed invalid object for list type, no valid source provided.  Source: " + tmpList.source);
			tmpList = '';
		}
	}
	if (typeof(tmpList) == 'string') {
		tmpList = tmpList.split(",");
	}
	if (tmpList && tmpList.length > 0) {
		for (var index = 0; index < tmpList.length; index++) {
			var tmpEntry = tmpList[index] || '';
			if (tmpEntry) {
				if (typeof(tmpEntry) == 'string') {
					var tmpVals = tmpEntry.split("|");
					//--- If we have alias values, add them as an array
					//--    if not, leave the string value there as is
					if (tmpVals.length > 1) {
						tmpList[index] = tmpVals
					}
				}
			}
		}
	}
	return tmpList;

}


function getListAsObjects (theList) {
	var tmpList = getListAsArrays(theList);
	var tmpRet = []

	if (tmpList && tmpList.length > 0) {
		for (var index = 0; index < tmpList.length; index++) {
			var tmpEntry = tmpList[index] || '';
			if (tmpEntry) {
				var tmpText = tmpEntry;
				var tmpVal = tmpEntry;
				if ( (typeof(tmpEntry) != 'string') && tmpEntry.length == 2) {
					//--- This is an array, get values
					tmpText = tmpEntry[0]
					tmpVal = tmpEntry[1]
				}
				tmpRet.push(
					{
						name: tmpText,
						label: tmpText,
						value: tmpVal,
						text: tmpText
					}
				)

			}
		}
	}
	return tmpRet;

}

function getBlockInEditor(theObjectOrID){
	return wp.data.select('core/block-editor').getBlock(theObjectOrID.clientId || theObjectOrID);
}
function getCommonBlock(theElementName){
	return CommonBlocks.getBlock(theElementName);
}



export const CommonBlocks = {
	lookup: {
		"segment": {
			type: 'pressino/segment',
			name: "Segment",
			attr: {}
		},
		"coreparagraph": {
			type: 'core/paragraph', 
			name: "Paragraph",
			attr: {}
		},
		"corecolumns": {
			type: 'core/columns', 
			name: "Columns",
			attr: {}
		},            
		"button": {
			type: 'pressino/button', 
			name: "Button",
			attr: {}
		},
		"header": {
			type: 'pressino/header', 
			name: "Message",
			attr: {}
		},
		"image": {
			type: 'pressino/image', 
			name: "Image",
			attr: {}
		},
		"message": {
			type: 'pressino/message', 
			name: "Message",
			attr: {}
		},
		"grid": {
			type: 'pressino/grid', 
			name: "Grid",
			attr: {}
		},
		"gridcolumn": {
			type: 'pressino/gridcolumn', 
			name: "Grid Column",
			attr: {}
		},            
		"tabs": {
			type: 'pressino/tabs', 
			name: "Tabs",
			attr: {}
		},
		"tab": {
			type: 'pressino/tab', 
			name: "Tab",
			attr: {}
		},            
		"cards": {
			type: 'pressino/cards', 
			name: "Card",
			attr: {}
		},
		"card": {
			type: 'pressino/card', 
			name: "Card",
			attr: {}
		},            
		"cardsection": {
			type: 'pressino/cardsection', 
			name: "Card Section",
			attr: {}
		},
		"cardsectionbottom": {
			type: 'pressino/cardsectionbottom', 
			name: "Card Bottom Section",
			attr: {}
		},
		"cardbutton": {
			type: 'pressino/button', 
			name: "Button",
			attr: {attached:'bottom attached',color:'blue',circular:true,basic:true}
		},
		"bottomattachedbutton": {
			type: 'pressino/button', 
			name: "Button",
			attr: {attached:'bottom attached'}
		},
		"standard-header": {
			type: 'pressino/header', 
			name: "Standard Header",
			attr: {
				size: 'large',
				color: 'blue'
			}
		},
		"small-header": {
			type: 'pressino/header', 
			name: "Small Header",
			attr: {
				size: 'small',
				color: 'blue'
			}
		},
		"blue-message": {
			type: 'pressino/message', 
			name: "Blue Message",
			attr: {
				color: 'blue'
			}
		},
		"bottomattachedmessage": {
			type: 'pressino/message', 
			name: "Blue Message",
			attr: {
				attached: 'bottom attached'
			}
		},            
		"field": {
			type: 'actappdesign/field', 
			name: "Field",
			attr: {}
		},
		"fieldlist": {
			type: 'actappdesign/fieldlist', 
			name: "Field List",
			attr: {}
		},

	},
	getBlock: function(theName){
		var tmpItem = this.lookup[theName];
		if( !(tmpItem)){
			return false;
		}
		return wp.blocks.createBlock(tmpItem.type, tmpItem.attr);
	}
}


const clsLookup = {
	'editorbox': 'pressino editor-boxed',
	'selected': 'selected'
}

function getCommonClass(theName){
	return clsLookup[theName] || '';
}

function addToList(theItem, theText){
	var tmpRet = theItem || '';
	if( (tmpRet.trim()) ){
		tmpRet = tmpRet.trim() + ' ';
	}
	tmpRet += theText;
	return tmpRet;
}

function addClasses(theItem, theName){
	var tmpAdd = clsLookup[theName];
	if( tmpAdd ){
		return addToList(theItem,tmpAdd);
	}
}


export const listSources = {
    "colors": "Default|,Red|red,Orange|orange,Yellow|yellow,Olive|olive,Green|green,Teal|teal,Blue|blue,Violet|violet,Purple|purple,Pink|pink,Brown|brown,Black|black",
    "sizes": "Default|,Mini|mini,Tiny|tiny,Small|small,Medium|medium,Large|large,Big|big,Huge|huge,Massive|massive",
    "padding": "Default|,0px|pad0,1px|pad1,2px|pad2,3px|pad3,4px|pad4,5px|pad5,6px|pad6,7px|pad7,8px|pad8,9px|pad9,10px|pad10,11px|pad11,12px|pad12,13px|pad13,14px|pad14,15px|pad15,16px|pad16,17px|pad17,18px|pad18,19px|pad19,20px|pad20",
	"margin": "Default|,0px|mar0,1px|mar1,2px|mar2,3px|mar3,4px|mar4,5px|mar5,6px|mar6,7px|mar7,8px|mar8,9px|mar9,10px|mar10,11px|mar11,12px|mar12,13px|mar13,14px|mar14,15px|mar15,16px|mar16,17px|mar17,18px|mar18,19px|mar19,20px|mar20",
    "alignment": "Default|,Center|center aligned,Left|left aligned,Right|right aligned",
	"attached": "Default|,Top|top attached,Middle|attached,Bottom|bottom attached",
    "imagesizes": "Default|,Full Width|fluid,Mini|mini,Tiny|tiny,Small|small,Medium|medium,Large|large,Big|big,Huge|huge,Massive|massive",
    "lralignment": "Default|,Left|left aligned,Right|right aligned",
    "valignment": "Default|,Top|top aligned,Middle|middle aligned,Bottom|bottom aligned",
    "slimwidespacing": "Default|,Slim|slimspace,Wide|widespace",
    "inverted": "Default|,Light|light,Inverted|inverted",
	"topmargin": "Default|,0px|mart0,1px|mart1,2px|mart2,3px|mart3,4px|mart4,5px|mart5,6px|mart6,7px|mart7,8px|mart8,9px|mart9,10px|mart10",
	"bottommargin": "Default|,0px|marb0,1px|marb1,2px|marb2,3px|marb3,4px|marb4,5px|marb5,6px|marb6,7px|marb7,8px|marb8,9px|marb9,10px|marb10",


	"yesno": "Yes,No",
    "states": "Alabama|AL,Alaska|AK,Arizona|AZ,Arkansas|AR,California|CA,Colorado|CO,Connecticut|CT,Delaware|DE,District Of Columbia|DC,Florida|FL,Georgia|GA,Hawaii|HI,Idaho|ID,Illinois|IL,Indiana|IN,Iowa|IA,Kansas|KS,Kentucky|KY,Louisiana|LA,Maine|ME,Maryland|MD,Massachusetts|MA,Michigan|MI,Minnesota|MN,Mississippi|MS,Missouri|MO,Montana|MT,Nebraska|NE,Nevada|NV,New Hampshire|NH,New Jersey|NJ,New Mexico|NM,New York|NY,North Carolina|NC,North Dakota|ND,Ohio|OH,Oklahoma|OK,Oregon|OR,Pennsylvania|PA,Rhode Island|RI,South Carolina|SC,South Dakota|SD,Tennessee|TN,Texas|TX,Utah|UT,Vermont|VT,Virginia|VA,Washington|WA,West Virginia|WV,Wisconsin|WI,Wyoming|WY",
    "countries": "Afghanistan|AF,Åland Islands|AX,Albania|AL,Algeria|DZ,American Samoa|AS,Andorra|AD,Angola|AO,Anguilla|AI,Antarctica|AQ,Antigua and Barbuda|AG,Argentina|AR,Armenia|AM,Aruba|AW,Australia|AU,Austria|AT,Azerbaijan|AZ,Bahamas|BS,Bahrain|BH,Bangladesh|BD,Barbados|BB,Belarus|BY,Belgium|BE,Belize|BZ,Benin|BJ,Bermuda|BM,Bhutan|BT,Bolivia, Plurinational State of|BO,Bonaire, Sint Eustatius and Saba|BQ,Bosnia and Herzegovina|BA,Botswana|BW,Bouvet Island|BV,Brazil|BR,British Indian Ocean Territory|IO,Brunei Darussalam|BN,Bulgaria|BG,Burkina Faso|BF,Burundi|BI,Cambodia|KH,Cameroon|CM,Canada|CA,Cape Verde|CV,Cayman Islands|KY,Central African Republic|CF,Chad|TD,Chile|CL,China|CN,Christmas Island|CX,Cocos (Keeling) Islands|CC,Colombia|CO,Comoros|KM,Congo|CG,Congo, the Democratic Republic of the|CD,Cook Islands|CK,Costa Rica|CR,Côte d'Ivoire|CI,Croatia|HR,Cuba|CU,Curaçao|CW,Cyprus|CY,Czech Republic|CZ,Denmark|DK,Djibouti|DJ,Dominica|DM,Dominican Republic|DO,Ecuador|EC,Egypt|EG,El Salvador|SV,Equatorial Guinea|GQ,Eritrea|ER,Estonia|EE,Ethiopia|ET,Falkland Islands (Malvinas|FK,Faroe Islands|FO,Fiji|FJ,Finland|FI,France|FR,French Guiana|GF,French Polynesia|PF,French Southern Territories|TF,Gabon|GA,Gambia|GM,Georgia|GE,Germany|DE,Ghana|GH,Gibraltar|GI,Greece|GR,Greenland|GL,Grenada|GD,Guadeloupe|GP,Guam|GU,Guatemala|GT,Guernsey|GG,Guinea|GN,Guinea-Bissau|GW,Guyana|GY,Haiti|HT,Heard Island and McDonald Islands|HM,Holy See (Vatican City State|VA,Honduras|HN,Hong Kong|HK,Hungary|HU,Iceland|IS,India|IN,Indonesia|ID,Iran, Islamic Republic of|IR,Iraq|IQ,Ireland|IE,Isle of Man|IM,Israel|IL,Italy|IT,Jamaica|JM,Japan|JP,Jersey|JE,Jordan|JO,Kazakhstan|KZ,Kenya|KE,Kiribati|KI,Korea, Democratic People's Republic of|KP,Korea, Republic of|KR,Kuwait|KW,Kyrgyzstan|KG,Lao People's Democratic Republic|LA,Latvia|LV,Lebanon|LB,Lesotho|LS,Liberia|LR,Libya|LY,Liechtenstein|LI,Lithuania|LT,Luxembourg|LU,Macao|MO,Macedonia, the former Yugoslav Republic of|MK,Madagascar|MG,Malawi|MW,Malaysia|MY,Maldives|MV,Mali|ML,Malta|MT,Marshall Islands|MH,Martinique|MQ,Mauritania|MR,Mauritius|MU,Mayotte|YT,Mexico|MX,Micronesia, Federated States of|FM,Moldova, Republic of|MD,Monaco|MC,Mongolia|MN,Montenegro|ME,Montserrat|MS,Morocco|MA,Mozambique|MZ,Myanmar|MM,Namibia|NA,Nauru|NR,Nepal|NP,Netherlands|NL,New Caledonia|NC,New Zealand|NZ,Nicaragua|NI,Niger|NE,Nigeria|NG,Niue|NU,Norfolk Island|NF,Northern Mariana Islands|MP,Norway|NO,Oman|OM,Pakistan|PK,Palau|PW,Palestinian Territory, Occupied|PS,Panama|PA,Papua New Guinea|PG,Paraguay|PY,Peru|PE,Philippines|PH,Pitcairn|PN,Poland|PL,Portugal|PT,Puerto Rico|PR,Qatar|QA,Réunion|RE,Romania|RO,Russian Federation|RU,Rwanda|RW,Saint Barthélemy|BL,Saint Helena, Ascension and Tristan da Cunha|SH,Saint Kitts and Nevis|KN,Saint Lucia|LC,Saint Martin (French part|MF,Saint Pierre and Miquelon|PM,Saint Vincent and the Grenadines|VC,Samoa|WS,San Marino|SM,Sao Tome and Principe|ST,Saudi Arabia|SA,Senegal|SN,Serbia|RS,Seychelles|SC,Sierra Leone|SL,Singapore|SG,Sint Maarten (Dutch part|SX,Slovakia|SK,Slovenia|SI,Solomon Islands|SB,Somalia|SO,South Africa|ZA,South Georgia and the South Sandwich Islands|GS,South Sudan|SS,Spain|ES,Sri Lanka|LK,Sudan|SD,Suriname|SR,Svalbard and Jan Mayen|SJ,Swaziland|SZ,Sweden|SE,Switzerland|CH,Syrian Arab Republic|SY,Taiwan, Province of China|TW,Tajikistan|TJ,Tanzania, United Republic of|TZ,Thailand|TH,Timor-Leste|TL,Togo|TG,Tokelau|TK,Tonga|TO,Trinidad and Tobago|TT,Tunisia|TN,Turkey|TR,Turkmenistan|TM,Turks and Caicos Islands|TC,Tuvalu|TV,Uganda|UG,Ukraine|UA,United Arab Emirates|AE,United Kingdom|GB,United States|US,United States Minor Outlying Islands|UM,Uruguay|UY,Uzbekistan|UZ,Vanuatu|VU,Venezuela, Bolivarian Republic of|VE,Viet Nam|VN,Virgin Islands, British|VG,Virgin Islands, U.S|VI,Wallis and Futuna|WF,Western Sahara|EH,Yemen|YE,Zambia|ZM,Zimbabwe|ZW",
    "grid_sizes": "Default|,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16",
    "sizes_header": "Default|,Tiny|tiny,Small|small,Medium|medium,Large|large,Huge|huge",
    "float": "Default|,Floated Left|floated left,Floated Right|floated right",
    "tofloat": "Default|,Float Left|toleft,Float Right|toright"
}

//--- Code to assist in creating and using blocks in the editor
export const PressinoUI = {
	getBlockIcon: getBlockIcon,
	addAttributes: addAttributes,
	getStandardClass: getStandardClass,
	getStandardProperty: getStandardProperty,
	getBlockInEditor: getBlockInEditor,
	getRandomID: getRandomID,
	getParentAttributes: getParentAttributes,
	getParentBlock: getParentBlock,
	getCommonBlock: getCommonBlock,
	refreshBlockEditor: refreshBlockEditor,
	getControlImage: getControlImage,
	util: {
		addClasses: addClasses,
		addToList: addToList,
		getCommonClass: getCommonClass
	},
	istr: istr
}

//--- Global Exposure of Root Entrypoint
window.PressinoUI = PressinoUI;


