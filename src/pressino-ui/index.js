import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, Button, TextControl, ToggleControl } from '@wordpress/components';
import { URLInput } from '@wordpress/block-editor';

import { QuickInserterPopover, InserterModal } from './../components/';
// isInserterOpen, setInserterOpen, isQuickInserterOpen, setQuickInserterOpen
import { useEffect, useRef, useState } from '@wordpress/element';
import { getIconEl } from './../icons';

export const attNamesIcon = { iconname: 'iconname', icontype: 'icontype' };
export const attNamesMedia = { mediaID: 'mediaID', mediaURL: 'mediaURL' };
export const el = wp.element.createElement;

export const PRIMARY_NAMESPACE = 'pressino-ui-blocks';
export function istr(theString) {
	return __(theString, PRIMARY_NAMESPACE);
}



function refreshBlockEditor() {
	var tmpBlockClientId = '';
	var tmpThis = wp.data.select('core/block-editor').getSelectedBlock();
	if (tmpThis && tmpThis.clientId) {
		tmpBlockClientId = tmpThis.clientId;
	}
	wp.data.dispatch('core/block-editor').synchronizeTemplate();
	if (tmpBlockClientId) {
		wp.data.dispatch('core/block-editor').selectBlock(tmpBlockClientId)
	}

}

function getLinkFormattingOptions(props){
	const {attributes} = props;
	const {linkformatting,linkicon,linkcolored} = attributes;

	var tmpCN = '';
	var tmpDomAtts = false
	if(linkformatting){
		tmpDomAtts = {linkformat:"icon"}

		tmpCN += ' ' + linkformatting;
	}
	if( linkicon ){
		tmpCN += ' link-icon link-' + linkicon;
	}
	if( linkcolored ){
		tmpCN += ' link-colored';
	}


	return {
		className: tmpCN,
		domAtts: tmpDomAtts
	}
}
function addLinkFormattingAttributes(theAttsIndex){
	addAttributes('text', theAttsIndex, ['linkformatting', 'linkicon']);
	addAttributes('boolean', theAttsIndex, ['linkcolored']);
}

function getLinkFormattingSettings(props,options){
	var tmpOptions = options || {};

	return  <PanelBody title={istr('Link Formatting Options')}>
		{getStandardProperty(props, 'linkformatting', "Link Formatting", 'linkformatting')}
		{getStandardProperty(props, 'linkicon', "Link Icon", 'linkicons')}
		{tmpOptions.color !== false && getStandardProperty(props, 'linkcolored', "Use Parent Color for Link", 'checkbox')}
	</PanelBody>

}

function getParentAttributes(theBlockID) {
	var tmpParentAttributes = {};
	var tmpParentBlock = getParentBlock(theBlockID);
	if (tmpParentBlock && tmpParentBlock.attributes) {
		tmpParentAttributes = tmpParentBlock.attributes || {};
	}
	return tmpParentAttributes;
}

function getParentBlock(theBlockID) {
	var tmpParents = wp.data.select('core/block-editor').getBlockParents(theBlockID);

	if (tmpParents && tmpParents.length > 0) {
		//--- Get the direct parent ... 0 is top level
		var tmpParentID = tmpParents[tmpParents.length - 1];
		var tmpParentBlock = wp.data.select('core/block-editor').getBlocksByClientId(tmpParentID);
		if (tmpParentBlock && tmpParentBlock.length > 0) {
			return tmpParentBlock[0];
		}
	}
	return false;
}


function getRandomID() {
	return window.crypto.randomUUID();
}



function getSettingsForIcon(props) {

	const {
		label,
		attname,
		isInserterOpen,
		setInserterOpen,
		isQuickInserterOpen,
		setQuickInserterOpen,
		attributes,
		setAttributes,
		refreshChildren,
	} = props;

	// var tmpOnChangeFunc = (theURL, thePost) => {
	// 	var tmpToSet = {};
	// 	tmpToSet[attname] = theURL;

	// 	setAttributes(tmpToSet);
	// }

	function onSelectedItem(theItem){
		let tmpAttNames = attname || attNamesIcon;
		setInserterOpen(false);
		setQuickInserterOpen(false);
		var tmpAtts = {}
		
		tmpAtts[tmpAttNames.iconname] = theItem.className || 'icon users'
		tmpAtts[tmpAttNames.icontype] = theItem.type || 'default'
	
		setAttributes(tmpAtts)
		if( refreshChildren ){
			refreshBlockEditor();
		}
		
	}

	
	return <div className='marb10'>
		<Button
			variant="primary"
			onClick={() => setQuickInserterOpen(true)}
		>
			{istr(label || 'Select Icon')}
		</Button>
		<InserterModal
				onSelectedItem={ onSelectedItem }
				isInserterOpen={ isInserterOpen }
				setInserterOpen={ setInserterOpen }
			/>
		<QuickInserterPopover
			onSelectedItem={ onSelectedItem }
			setInserterOpen={ setInserterOpen }
			isQuickInserterOpen={ isQuickInserterOpen }
			setQuickInserterOpen={ setQuickInserterOpen }
		/>
	</div>


}

function getStandardProperty(theProps, theAttName, theLabel, theControlType, theOnChange, theSelectionList, theOptions) {

	const { attributes, setAttributes } = theProps;
	var tmpContents = [];
	var tmpAtts = attributes;


	var tmpOnChange = theOnChange;
	var tmpVal = tmpAtts[theAttName];

	if (theControlType == 'checkbox') {
		var tmpDoRefresh = false;
		if (theOnChange === true) {
			tmpDoRefresh = true;
			theOnChange = undefined;
		}

		if (!tmpOnChange) {
			tmpOnChange = () => {
				var tmpAddedAtts = {};
				tmpAddedAtts[theAttName] = !tmpVal;
				setAttributes(tmpAddedAtts);
				if (tmpDoRefresh) {
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
	} else if (theControlType == 'image') {
		return getCustomImageSelection(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType)
	// } else if (theControlType == 'icon') {
	// 	return getCustomIconSelection(theProps, theAttName, theLabel, theControlType, theOnChange, theSelectionList, theOptions)
	} else if (theControlType == 'url') {
		return getCustomURLControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType)
	} else if (listSources[theControlType]) {
		tmpContents.push(getSelectControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType));
	}
	// if( tmpDoRefresh ){
	// 	refreshBlockEditor();
	// }
	return tmpContents;
}

function getCustomURLControl(theProps, theAttName, theLabel, theVal, theOnChange, theControlType) {
	var tmpDoRefresh = false;
	if (theOnChange === true) {
		tmpDoRefresh = true;
		theOnChange = undefined;
	}
	var tmpLabel = theLabel || 'URL / Page to Open';

	var attributes = theProps.attributes;

	var tmpOnChangeFunc = (theURL, thePost) => {
		var tmpToSet = {};
		tmpToSet[theAttName] = theURL;

		theProps.setAttributes(tmpToSet);
		if (tmpDoRefresh) {
			refreshBlockEditor();
		}
	}
	return <div><URLInput
		label={tmpLabel}
		value={attributes[theAttName]}
		onChange={tmpOnChangeFunc}
	/>
	</div>
}


// function getCustomIconSelection(theProps, theAttName, theLabel, theControlType, theOnChange, theSelectionList, theOptions) {
// 	return <div>
// 		<Button
// 			variant="primary"
// 			onClick={() => setQuickInserterOpen(true)}
// 		>
// 			{istr('Select Icon')}
// 		</Button>
// 		<QuickInserterPopover
// 			setInserterOpen={setInserterOpen}
// 			isQuickInserterOpen={theOptions.isQuickInserterOpen}
// 			setQuickInserterOpen={theOptions.setQuickInserterOpen}
// 			setAttributes={theProps.setAttributes}
// 		/>
// 	</div>

// 	// let tmpRet = <button className="ui button black basic circular fluid east labeled icon" onClick={onSelectClick}>Select Icon <i className='icon chevron up'></i></button>
// 	// return tmpRet;
// }

function getCustomImageSelection(theProps, theAttName, theLabel, theVal, theOnChange, theControlType) {
	if (theOnChange === true) {
		tmpDoRefresh = true;
		theOnChange = undefined;
	}
	//*** Not supporting refresh on image update .. shouldn't effect other items instantly */

	var tmpAtts = theProps.attributes;
	var onSelectImage = function (media) {
		var tmpToSet = {};
		tmpToSet[theAttName['mediaURL']] = media.url;
		tmpToSet[theAttName['mediaID']] = media.id;
		return theProps.setAttributes(tmpToSet);
	};

	var onRemoveImage = function () {
		var tmpToSet = {};
		tmpToSet[theAttName['mediaURL']] = '';
		tmpToSet[theAttName['mediaID']] = '';
		return theProps.setAttributes(tmpToSet);
	}

	var tmpMediaURL = tmpAtts[theAttName['mediaURL']];

	//var tmpEl = el('div',{className:'ui label black fluid'},'Card Image');
	//ToDo: Remove hard coded mediaID and mediaURL references
	var tmpMediaEl = el(wp.blockEditor.MediaUpload, {
		onSelect: onSelectImage,
		type: 'image',
		value: theProps.attributes[theAttName['mediaID']],
		render: function (obj) {

			if (!theProps.attributes.mediaID) {
				return el('div', { className: 'pad2' },
					el('div', { className: 'ui button blue basic', onClick: obj.open }, 'Select Image')
				)
			} else {
				return el('div', { className: 'pad2' },
					el('div', { className: 'ui button blue basic', onClick: obj.open }, 'Replace'),
					el('div', { className: 'ui button blue basic', onClick: onRemoveImage }, 'Remove'),
					el('div', { className: 'pad5' }),
					el('img', { className: 'ui image rounded fluid pad10', src: tmpMediaURL })
				)
			}
		}
	})
	return (tmpMediaEl);
}

function getControlImage() {
	return el('img', { src: ActionAppCore.PressinoUIBlocksConfig.baseURL + '/images/pressino-icon-blocks.png', className: "actappeditor-icon left" })
}



function getSelectControl(theProps, theName, theLabel, theValue, theOnChange, theControlType) {
	var tmpDoRefresh = false;
	if (theOnChange === true) {
		tmpDoRefresh = true;
		theOnChange = undefined;
	}


	var tmpOnChange = theOnChange;
	if (!tmpOnChange) {
		tmpOnChange = (value) => {
			var tmpAddedAtts = {};
			tmpAddedAtts[theName] = value;
			theProps.setAttributes(tmpAddedAtts);
			if (tmpDoRefresh) {
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
	if (theOnChange === true) {
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
			if (tmpDoRefresh) {
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

const iconSVGs = {
	'pressino/splitcolumn': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<rect x="1.4359" y="1.6011" width="8.5278" height="18.054" fill="#fff" stroke="#000" stroke-width=".23896"/>
		<rect x="1.4924" y="1.8543" width="8.4145" height="17.546" fill="#ffedde" stroke-width=".52335"/>
		<rect x="11.176" y="1.6569" width="8.5278" height="18.054" fill="#fff" stroke="#000" stroke-width=".23896"/>
		<rect x="11.232" y="1.9102" width="8.4145" height="17.546" fill="#f9f9f9" stroke-width=".52335"/>
	   </svg>
	   ),
	'pressino/split': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<rect x="1.4359" y="1.6011" width="8.5278" height="18.054" fill="#fff" stroke="#000" stroke-width=".23896"/>
		<rect x="1.4924" y="1.8543" width="8.4145" height="17.546" fill="#ffedde" stroke-width=".52335"/>
		<rect x="11.176" y="1.6569" width="8.5278" height="18.054" fill="#fff" stroke="#000" stroke-width=".23896"/>
		<rect x="11.232" y="1.9102" width="8.4145" height="17.546" fill="#ffedde" stroke-width=".52335"/>
	   </svg>
	   ),
	'pressino/webpart': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g fill="#de7a2f" stroke="#000" stroke-linecap="round" stroke-width=".4344">
		 <path d="m9.1713 1.9786c0.29182 0 0.52838 0.84774 0.52838 1.8935v3.787c0 1.0457-0.23657 1.8935-0.52838 1.8935h-6.3405c-0.29181 0-0.52838-0.84778-0.52838-1.8935v-3.787c0-1.0458 0.23657-1.8935 0.52838-1.8935z"/>
		 <path d="m18.596 1.9786c0.29182 0 0.52838 0.84774 0.52838 1.8935v3.787c0 1.0457-0.23657 1.8935-0.52838 1.8935h-6.3406c-0.29181 0-0.52838-0.84778-0.52838-1.8935v-3.787c0-1.0458 0.23657-1.8935 0.52838-1.8935z"/>
		 <path d="m9.1713 11.654c0.29182 0 0.52838 0.84774 0.52838 1.8935v3.787c0 1.0457-0.23657 1.8935-0.52838 1.8935h-6.3405c-0.29181 0-0.52838-0.84778-0.52838-1.8935v-3.787c0-1.0458 0.23657-1.8935 0.52838-1.8935z"/>
		 <path d="m18.596 11.654c0.29182 0 0.52838 0.84774 0.52838 1.8935v3.787c0 1.0457-0.23657 1.8935-0.52838 1.8935h-6.3406c-0.29181 0-0.52838-0.84778-0.52838-1.8935v-3.787c0-1.0458 0.23657-1.8935 0.52838-1.8935z"/>
		</g>
	   </svg>),
	'pressino/bullets': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000">
		 <path d="m18.865 2.911c0.4495 0 0.8139 0.33814 0.8139 0.75525v1.5105c0 0.4171-0.36441 0.75525-0.8139 0.75525h-9.7668c-0.4495 0-0.8139-0.33815-0.8139-0.75525v-1.5105c0-0.41712 0.36441-0.75525 0.8139-0.75525z" fill="#de7a2f" stroke-linecap="round" stroke-width=".3405"/>
		 <ellipse cx="4.118" cy="4.4215" rx="2.1747" ry="2.0971" fill="#fff" opacity=".999" stroke-width=".8699"/>
		 <path d="m18.865 9.3156c0.4495 0 0.8139 0.33814 0.8139 0.75525v1.5105c0 0.4171-0.36441 0.75525-0.8139 0.75525h-9.7668c-0.4495 0-0.8139-0.33815-0.8139-0.75525v-1.5105c0-0.41712 0.36441-0.75525 0.8139-0.75525z" fill="#de7a2f" stroke-linecap="round" stroke-width=".3405"/>
		 <ellipse cx="4.118" cy="10.826" rx="2.1747" ry="2.0971" fill="#fff" opacity=".999" stroke-width=".8699"/>
		 <path d="m18.865 15.72c0.4495 0 0.8139 0.33814 0.8139 0.75525v1.5105c0 0.4171-0.36441 0.75525-0.8139 0.75525h-9.7668c-0.4495 0-0.8139-0.33815-0.8139-0.75525v-1.5105c0-0.41712 0.36441-0.75525 0.8139-0.75525z" fill="#de7a2f" stroke-linecap="round" stroke-width=".3405"/>
		 <ellipse cx="4.118" cy="17.231" rx="2.1747" ry="2.0971" fill="#fff" opacity=".999" stroke-width=".8699"/>
		</g>
	   </svg>),
	'addicon': (<svg class="bi bi-emoji-smile-fill" width="16" height="16" fill="currentColor" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
		<path d="m7.9415 15.22c3.8687 0 7.0049-3.1449 7.0049-7.0244 0-3.8795-3.1362-7.0244-7.0049-7.0244s-7.0049 3.1449-7.0049 7.0244c0 3.8795 3.1362 7.0244 7.0049 7.0244m-0.87561-9.3171c0 0.72702-0.39227 1.3171-0.87561 1.3171-0.48334 0-0.87561-0.59005-0.87561-1.3171 0-0.72702 0.39227-1.3171 0.87561-1.3171 0.48334 0 0.87561 0.59005 0.87561 1.3171m-2.3773 4.4491c0.20939-0.12123 0.47714-0.04928 0.59804 0.16068 0.54759 0.95109 1.5597 1.5369 2.6548 1.5366 1.0952 2.87e-4 2.1073-0.58549 2.6548-1.5366 0.29044-0.51225 1.0555-0.06932 0.75828 0.43902-0.704 1.2228-2.0051 1.9759-3.4131 1.9756-1.408 2.78e-4 -2.7091-0.75286-3.4131-1.9756-0.12089-0.20998-0.049152-0.47847 0.16024-0.59971m5.0041-3.132c-0.48334 0-0.87561-0.59005-0.87561-1.3171 0-0.72702 0.39227-1.3171 0.87561-1.3171 0.48334 0 0.87561 0.59005 0.87561 1.3171 0 0.72702-0.39227 1.3171-0.87561 1.3171" stroke-width=".87683"/>
	   </svg>),
	'addlistitem': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000" stroke-linecap="round" stroke-width=".52917">
		 <path d="m18.164 1.3442c0.70416 0 1.275 0.52132 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64309 0.57086-1.1644 1.275-1.1644z" fill="#de7a2f"/>
		 <path d="m18.164 8.3306c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z" fill="#fff"/>
		 <path d="m18.164 15.318c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z" fill="#fff"/>
		</g>
		<g stroke-width=".66147">
		 <ellipse cx="3.899" cy="3.667" rx="1.3229" ry="1.2757" fill="#fff" opacity=".999" stroke="#fff"/>
		 <ellipse cx="3.899" cy="10.66" rx="1.3229" ry="1.2757" fill="#de7a2f" opacity=".999" stroke="#de7a2f"/>
		 <ellipse cx="3.899" cy="17.7" rx="1.3229" ry="1.2757" fill="#de7a2f" opacity=".999" stroke="#de7a2f"/>
		</g>
		<g transform="translate(-2.4979 3.8408)" stroke="#000">
		 <rect x="9.8074" y="6.0501" width="8.8195" height="8.8195" fill="#fff" stroke-width=".44103"/>
		 <g fill="#de7a2f" stroke-width=".52918">
		  <rect x="13.946" y="7.4829" width=".54138" height="5.9539" rx="8.3057" ry=".037024" opacity=".999"/>
		  <rect x="11.016" y="10.192" width="6.401" height=".53518" rx="8.3057" ry=".037024" opacity=".999"/>
		 </g>
		</g>
	   </svg>),
	'pressino/listitemsection': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000" stroke-linecap="round" stroke-width=".52917">
		 <path d="m18.164 1.3442c0.70416 0 1.275 0.52132 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64309 0.57086-1.1644 1.275-1.1644z"/>
		 <path d="m18.164 8.3306c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z" fill="#fff"/>
		 <path d="m18.164 15.318c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z" fill="#fff"/>
		</g>
		<g stroke-width=".66147">
		 <ellipse cx="3.899" cy="3.667" rx="1.3229" ry="1.2757" fill="#fff" opacity=".999" stroke="#fff"/>
		 <ellipse cx="3.899" cy="10.66" rx="1.3229" ry="1.2757" fill="#de7a2f" opacity=".999" stroke="#de7a2f"/>
		 <ellipse cx="3.899" cy="17.7" rx="1.3229" ry="1.2757" fill="#de7a2f" opacity=".999" stroke="#de7a2f"/>
		</g>
	   </svg>
	   ),
	'pressino/listitem': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000" stroke-linecap="round" stroke-width=".52917">
		 <path d="m18.164 1.3442c0.70416 0 1.275 0.52132 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64309 0.57086-1.1644 1.275-1.1644z" fill="#de7a2f"/>
		 <path d="m18.164 8.3306c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z" fill="#fff"/>
		 <path d="m18.164 15.318c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z" fill="#fff"/>
		</g>
		<g stroke-width=".66147">
		 <ellipse cx="3.899" cy="3.667" rx="1.3229" ry="1.2757" fill="#fff" opacity=".999" stroke="#fff"/>
		 <ellipse cx="3.899" cy="10.66" rx="1.3229" ry="1.2757" fill="#de7a2f" opacity=".999" stroke="#de7a2f"/>
		 <ellipse cx="3.899" cy="17.7" rx="1.3229" ry="1.2757" fill="#de7a2f" opacity=".999" stroke="#de7a2f"/>
		</g>
	   </svg>),
	'pressino/list': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g fill="#de7a2f" stroke="#000" stroke-linecap="round" stroke-width=".52917">
		 <path d="m18.164 1.3442c0.70416 0 1.275 0.52132 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64309 0.57086-1.1644 1.275-1.1644z"/>
		 <path d="m18.164 8.3306c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z"/>
		 <path d="m18.164 15.318c0.70416 0 1.275 0.52134 1.275 1.1644v2.3288c0 0.64307-0.57086 1.1644-1.275 1.1644h-15.3c-0.70416 0-1.275-0.52134-1.275-1.1644v-2.3288c0-0.64307 0.57086-1.1644 1.275-1.1644z"/>
		</g>
		<g fill="#fff" stroke="#fff" stroke-width=".66147">
		 <ellipse cx="3.899" cy="3.667" rx="1.3229" ry="1.2757" opacity=".999"/>
		 <ellipse cx="3.899" cy="10.66" rx="1.3229" ry="1.2757" opacity=".999"/>
		 <ellipse cx="3.899" cy="17.7" rx="1.3229" ry="1.2757" opacity=".999"/>
		</g>
	   </svg>),
	'pressino/tabs': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000">
			<rect x=".73327" y="6.584" width="19.749" height="13.355" fill="#fff" stroke-width=".55471" />
			<rect x=".91353" y="1.494" width="7.7791" height="4.0946" fill="#de7a2f" stroke-width=".52917" />
			<rect x="9.6646" y="1.494" width="7.7791" height="4.0946" fill="#de7a2f" stroke-width=".52917" />
		</g>
	</svg>),
	'pressino/tab': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000">
			<rect x=".73327" y="6.584" width="19.749" height="13.355" fill="#fff" stroke-width=".55471" />
			<rect x=".91353" y="1.494" width="7.7791" height="4.0946" fill="#de7a2f" stroke-width=".52917" />
			<rect x="9.6646" y="1.494" width="7.7791" height="4.0946" fill="#fff" stroke-width=".52917" />
		</g>
	</svg>),
	'addtab': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000">
			<rect x=".73327" y="6.584" width="19.749" height="13.355" fill="#fff" stroke-width=".55471" />
			<rect x=".91353" y="1.494" width="7.7791" height="4.0946" fill="#de7a2f" stroke-width=".52917" />
			<rect x="9.6646" y="1.494" width="7.7791" height="4.0946" fill="#fff" stroke-width=".52917" />
		</g>
		<g transform="translate(-3.5301 2.7566)" fill="#de7a2f" stroke="#000" stroke-width=".52918">
			<rect x="13.946" y="7.4829" width=".54138" height="5.9539" rx="8.3057" ry=".037024" opacity=".999" />
			<rect x="11.016" y="10.192" width="6.401" height=".53518" rx="8.3057" ry=".037024" opacity=".999" />
		</g>
	</svg>),
	'pressino/cards': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<path d="m1.7256 3.2931c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<rect x="2.0839" y="2.1984" width="7.2653" height="3.1149" fill="#de7a2f" stroke="#404040" stroke-width=".10848" />
		<path d="m1.7256 3.2931c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="none" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<path d="m11.671 3.2829c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<rect x="12.029" y="2.1882" width="7.2653" height="3.1149" fill="#de7a2f" stroke="#404040" stroke-width=".10848" />
		<path d="m11.671 3.2829c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="none" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<path d="m1.8101 12.937c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<rect x="2.1684" y="11.842" width="7.2653" height="3.1149" fill="#de7a2f" stroke="#404040" stroke-width=".10848" />
		<path d="m1.8101 12.937c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="none" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<path d="m11.464 12.937c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
		<rect x="11.823" y="11.842" width="7.2653" height="3.1149" fill="#de7a2f" stroke="#404040" stroke-width=".10848" />
		<path d="m11.464 12.937c0-0.73291 0.5851-1.3271 1.3068-1.3271h5.2273c0.72173 0 1.3068 0.59416 1.3068 1.3271v5.3083c0 0.73291-0.5851 1.3271-1.3068 1.3271h-5.2273c-0.72173 0-1.3068-0.59416-1.3068-1.3271z" fill="none" stroke="#000" stroke-linecap="round" stroke-width=".79375" />
	</svg>),
	'pressino/card': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<path d="m2.1662 5.1787c0-1.5309 1.2475-2.7721 2.7861-2.7721h11.145c1.5388 0 2.7861 1.2411 2.7861 2.7721v11.088c0 1.5309-1.2475 2.7721-2.7861 2.7721h-11.145c-1.5388 0-2.7861-1.2411-2.7861-2.7721z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.6751" />
		<rect x="2.9301" y="2.8921" width="15.49" height="6.5064" fill="#de7a2f" stroke="#404040" stroke-width=".22893" />
		<path d="m2.1662 5.1787c0-1.5309 1.2475-2.7721 2.7861-2.7721h11.145c1.5388 0 2.7861 1.2411 2.7861 2.7721v11.088c0 1.5309-1.2475 2.7721-2.7861 2.7721h-11.145c-1.5388 0-2.7861-1.2411-2.7861-2.7721z" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.6751" />
	</svg>),
	'addcard': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<path d="m2.1662 5.1787c0-1.5309 1.2475-2.7721 2.7861-2.7721h11.145c1.5388 0 2.7861 1.2411 2.7861 2.7721v11.088c0 1.5309-1.2475 2.7721-2.7861 2.7721h-11.145c-1.5388 0-2.7861-1.2411-2.7861-2.7721z" fill="#fff" stroke="#000" stroke-linecap="round" stroke-width="1.6751" />
		<rect x="2.9301" y="2.8921" width="15.49" height="6.5064" fill="#de7a2f" stroke="#404040" stroke-width=".22893" />
		<path d="m1.8636 5.1787c0-1.5309 1.2475-2.7721 2.7861-2.7721h11.145c1.5388 0 2.7861 1.2411 2.7861 2.7721v11.088c0 1.5309-1.2475 2.7721-2.7861 2.7721h-11.145c-1.5388 0-2.7861-1.2411-2.7861-2.7721z" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.6751" />
		<g transform="translate(-3.9947 3.3761)" fill="#de7a2f" stroke="#000" stroke-width=".52918">
			<rect x="13.946" y="7.4829" width=".54138" height="5.9539" rx="8.3057" ry=".037024" opacity=".999" />
			<rect x="11.016" y="10.192" width="6.401" height=".53518" rx="8.3057" ry=".037024" opacity=".999" />
		</g>
	</svg>),
	'pressino/grid': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g fill="#de7a2f" stroke="#000" stroke-linecap="round" stroke-width=".52917">
			<path d="m1.3087 2.907c0-0.70416 0.52132-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64309 0-1.1644-0.57086-1.1644-1.275z" />
			<path d="m8.2951 2.907c0-0.70416 0.52134-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64307 0-1.1644-0.57086-1.1644-1.275z" />
			<path d="m15.282 2.907c0-0.70416 0.52134-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64307 0-1.1644-0.57086-1.1644-1.275z" />
		</g>
	</svg>),
	'pressino/gridcolumn': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000" stroke-linecap="round" stroke-width=".52917">
			<path d="m1.3087 2.907c0-0.70416 0.52132-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64309 0-1.1644-0.57086-1.1644-1.275z" fill="#de7a2f" />
			<path d="m8.2951 2.907c0-0.70416 0.52134-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64307 0-1.1644-0.57086-1.1644-1.275z" fill="#fff" />
			<path d="m15.282 2.907c0-0.70416 0.52134-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64307 0-1.1644-0.57086-1.1644-1.275z" fill="#fff" />
		</g>
	</svg>),
	'addgridcolumn': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g fill="#de7a2f" stroke="#000" stroke-linecap="round" stroke-width=".52917">
			<path d="m1.3087 2.907c0-0.70416 0.52132-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64309 0-1.1644-0.57086-1.1644-1.275z" />
			<path d="m8.2951 2.907c0-0.70416 0.52134-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64307 0-1.1644-0.57086-1.1644-1.275z" />
			<path d="m15.282 2.907c0-0.70416 0.52134-1.275 1.1644-1.275h2.3288c0.64307 0 1.1644 0.57086 1.1644 1.275v15.3c0 0.70416-0.52134 1.275-1.1644 1.275h-2.3288c-0.64307 0-1.1644-0.57086-1.1644-1.275z" />
		</g>
		<g transform="translate(.21433 -.5001)" stroke="#000">
			<rect x="9.5931" y="6.5502" width="8.8195" height="8.8195" fill="#fff" stroke-width=".44103" />
			<rect x="13.732" y="7.983" width=".54138" height="5.9539" rx="8.3057" ry=".037024" fill="#de7a2f" opacity=".999" stroke-width=".52918" />
			<rect x="10.802" y="10.692" width="6.401" height=".53518" rx="8.3057" ry=".037024" fill="#de7a2f" opacity=".999" stroke-width=".52918" />
		</g>
	</svg>),
	'pressino/cardsection': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<path d="m2.1662 5.1787c0-1.5309 1.2475-2.7721 2.7861-2.7721h11.145c1.5388 0 2.7861 1.2411 2.7861 2.7721v11.088c0 1.5309-1.2475 2.7721-2.7861 2.7721h-11.145c-1.5388 0-2.7861-1.2411-2.7861-2.7721z" fill="#de7a2f" stroke="#000" stroke-linecap="round" stroke-width="1.6751" />
		<rect x="2.3119" y="2.8934" width="16.107" height="6.4006" fill="#fff" stroke="#404040" stroke-width=".23153" />
		<path d="m1.8636 5.1787c0-1.5309 1.2475-2.7721 2.7861-2.7721h11.145c1.5388 0 2.7861 1.2411 2.7861 2.7721v11.088c0 1.5309-1.2475 2.7721-2.7861 2.7721h-11.145c-1.5388 0-2.7861-1.2411-2.7861-2.7721z" fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.6751" />
	</svg>),
	'pressino/segment': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<rect x=".73327" y="6.584" width="19.749" height="13.355" fill="#fff" stroke="#000" stroke-width=".55471" />
		<rect x="1.6558" y="7.589" width="17.855" height="11.358" fill="#fff" stroke="#000" stroke-width=".26459" />
	</svg>),
	'pressino/header': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<rect x=".74218" y="5.5604" width="19.834" height="9.5168" fill="#fff" stroke="#000" stroke-width=".26459" />
		<rect x="1.6236" y="6.9468" width="18.023" height="2.0686" fill="#de7a2f" stroke-width=".48642" />
	</svg>),
	'pressino/message': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<rect x=".74218" y="5.5604" width="19.834" height="9.5168" fill="#fff" stroke="#000" stroke-width=".26459"/>
		<rect x=".87337" y="5.6939" width="19.57" height="9.2489" fill="#ffedde" stroke-width=".57948"/>
	   </svg>),
	'pressino/image': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<g stroke="#000" stroke-linecap="round" stroke-linejoin="round">
			<path d="m2.0732 5.1991c0-1.0991 1.0392-1.9901 2.321-1.9901h12.379c1.2819 0 2.321 0.89101 2.321 1.9901v10.614c0 1.0991-1.0392 1.9901-2.321 1.9901h-12.379c-1.2819 0-2.321-0.89101-2.321-1.9901z" fill="#fff" stroke-width=".52918" />
			<path d="m4.3942 17.803h12.379c1.0917 0 2.0074-0.64629 2.255-1.517 0.02924-0.10282-0.01323-0.20936-0.1005-0.28419l-2.2678-1.9445c-0.15106-0.12952-0.396-0.12952-0.54706 0l-1.459 1.2511c-0.15574 0.13354-0.40989 0.12879-0.5587-0.01042l-5.5471-5.1887c-0.15334-0.14342-0.41701-0.14342-0.57031 0l-5.8025 5.4276c-0.065375 0.0612-0.10166 0.14117-0.10166 0.22415v0.05188c0 1.0991 1.0392 1.9901 2.321 1.9901z" fill="#008000" stroke-width=".3582" />
			<path d="m12.673 5.6966c0.62191-0.30787 1.3882-0.30787 2.0101 0 0.62191 0.30787 1.005 0.87685 1.005 1.4926s-0.38312 1.1847-1.005 1.4926c-0.62191 0.30787-1.3882 0.30787-2.0101 0-0.62191-0.30787-1.005-0.87685-1.005-1.4926s0.38308-1.1847 1.005-1.4926z" fill="#de7a2f" stroke-width=".26459" />
		</g>
	</svg>),
	'pressino/button': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<path d="m0.61231 13.968c-0.13953-0.16836-0.1567-0.58576-0.1567-3.8095 0-3.3761 0.011684-3.632 0.17315-3.7916 0.15877-0.1569 0.9871-0.17111 9.9743-0.17111 9.375 0 9.808 0.0082 9.9579 0.18908 0.13953 0.16836 0.1567 0.58576 0.1567 3.8095 0 3.3761-0.01169 3.632-0.17315 3.7916-0.15877 0.1569-0.9871 0.17111-9.9743 0.17111-9.375 0-9.808-0.0081-9.9579-0.18908zm5.7705-2.8885c0.0573-0.04178 0.1574-0.18623 0.22245-0.321 0.10054-0.20831 0.091186-0.2858-0.062404-0.51697-0.15376-0.23143-0.16313-0.30946-0.062877-0.52387 0.086843-0.18574 0.090802-0.30799 0.015065-0.46527-0.15792-0.32796-0.25903-0.36514-0.99754-0.36684l-0.68645-0.00153v2.2747l0.73379-0.0015c0.40358-8.59e-4 0.78067-0.03577 0.83797-0.07755zm-1.0983-0.59293c0-0.22302 0.042222-0.25827 0.30772-0.2569 0.38972 2e-3 0.58852 0.13737 0.51385 0.34986-0.040023 0.1139-0.17723 0.16552-0.43987 0.16552-0.34403 0-0.3817-0.02552-0.3817-0.25848zm0-0.93054c0-0.2247 0.041802-0.25848 0.3198-0.25848 0.37213 0 0.58953 0.20638 0.41648 0.39536-0.061251 0.06689-0.25197 0.12161-0.42382 0.12161-0.27016 0-0.31245-0.03499-0.31245-0.25848zm3.1245 1.3958c0.16131-0.17615 0.18937-0.34464 0.18937-1.1373 0-0.92365-0.00173-0.93054-0.23671-0.93054-0.23377 0-0.23671 0.0108-0.23671 0.87188 0 0.77548-0.020542 0.879-0.18579 0.93627-0.10218 0.03541-0.27261 0.01366-0.37873-0.04837-0.16934-0.09897-0.19294-0.21349-0.19294-0.93627 0-0.80948-0.00406-0.82351-0.23671-0.82351-0.23362 0-0.23671 0.011271-0.23671 0.8649 0 0.71844 0.033228 0.91103 0.19624 1.1373 0.16456 0.22846 0.27154 0.27243 0.66278 0.27243 0.3403 0 0.51778-0.05595 0.65591-0.20679zm1.5149-0.72376v-0.93054h0.33139c0.26827 0 0.33139-0.039385 0.33139-0.20679 0-0.19147-0.06313-0.20679-0.85214-0.20679-0.78902 0-0.85214 0.015321-0.85214 0.20679 0 0.16083 0.063124 0.20679 0.28405 0.20679h0.28405v0.93054c0 0.92365 0.0017 0.93054 0.23671 0.93054 0.23495 0 0.23671-7e-3 0.23671-0.93054zm1.799 0v-0.93054h0.28405c0.22093 0 0.28405-0.045953 0.28405-0.20679 0-0.19057-0.06313-0.20679-0.8048-0.20679-0.74168 0-0.8048 0.016216-0.8048 0.20679 0 0.16083 0.06312 0.20679 0.28405 0.20679h0.28405v0.93054c0 0.92365 0.0018 0.93054 0.2367 0.93054 0.23495 0 0.23671-7e-3 0.23671-0.93054zm2.1213 0.81282c0.25601-0.12737 0.52977-0.65427 0.52977-1.0196 0-0.36534-0.27376-0.89223-0.52977-1.0196-0.99412-0.49463-1.8774 0.50097-1.4062 1.5851 0.08085 0.18605 0.24063 0.38768 0.35506 0.44805 0.27943 0.14742 0.76146 0.1502 1.0512 6e-3zm-0.82845-0.48494c-0.19846-0.23947-0.2031-0.8828-0.0079-1.096 0.34821-0.38025 0.79804-0.068745 0.79804 0.55264 0 0.62838-0.4584 0.94359-0.79013 0.54332zm2.0402-0.04312 0.02819-0.64578 0.33538 0.61993c0.26135 0.48309 0.39197 0.62715 0.59177 0.65265l0.25639 0.03272v-2.2884h-0.23219c-0.21869 0-0.23383 0.037567-0.26038 0.64621l-0.02819 0.64621-0.32957-0.64621c-0.28074-0.55047-0.36842-0.64621-0.59176-0.64621h-0.26219v2.2747h0.23219c0.21867 0 0.23383-0.03759 0.26038-0.64578z" fill="#de7a2f" stroke-width=".098942" />
	</svg>),
	'pressino/container': (<svg width="80" height="80" version="1.1" viewBox="0 0 21.167 21.167" xmlns="http://www.w3.org/2000/svg">
		<rect x="1.7003" y="4.9533" width="17.855" height="11.358" fill="#fff" stroke="#000" stroke-width=".52918" />
		<g transform="translate(.25554 -2.4459)" fill="#de7a2f" stroke="#000" stroke-width=".20164">
			<rect x="5.184" y="9.4089" width="10.376" height="2.7626" />
			<rect x="5.184" y="13.985" width="10.376" height="2.7626" />
		</g>
	</svg>)

}


function getBlockIcon(theName) {
	var tmpName = theName || 'default';

	if (iconSVGs[theName]) {
		return iconSVGs[theName];
	}
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


function getSelectionListForAttribute(thePropName) {
	var tmpName = thePropName;
	if (listSources[tmpName]) {
		return getListAsObjects(listSources[tmpName]);
	}
	return {}
}

function getListAsArrays(theList) {
	var tmpList = theList;
	if (typeof (tmpList) == 'object') {
		var tmpSource = false;
		if (listSources && listSources.hasOwnProperty(tmpList.source)) {
			tmpSource = listSources[tmpList.source];
			tmpList = tmpSource;
		}

		if (!(tmpSource)) {
			console.error("Passed invalid object for list type, no valid source provided.  Source: " + tmpList.source);
			tmpList = '';
		}
	}
	if (typeof (tmpList) == 'string') {
		tmpList = tmpList.split(",");
	}
	if (tmpList && tmpList.length > 0) {
		for (var index = 0; index < tmpList.length; index++) {
			var tmpEntry = tmpList[index] || '';
			if (tmpEntry) {
				if (typeof (tmpEntry) == 'string') {
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


function getListAsObjects(theList) {
	var tmpList = getListAsArrays(theList);
	var tmpRet = []

	if (tmpList && tmpList.length > 0) {
		for (var index = 0; index < tmpList.length; index++) {
			var tmpEntry = tmpList[index] || '';
			if (tmpEntry) {
				var tmpText = tmpEntry;
				var tmpVal = tmpEntry;
				if ((typeof (tmpEntry) != 'string') && tmpEntry.length == 2) {
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

function getBlockInEditor(theObjectOrID) {
	return wp.data.select('core/block-editor').getBlock(theObjectOrID.clientId || theObjectOrID);
}
function getCommonBlock(theElementName, theBlockOptions) {
	return CommonBlocks.getBlock(theElementName,theBlockOptions);
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
			attr: { attached: 'bottom attached', color: 'blue', circular: true, basic: true }
		},
		"bottomattachedbutton": {
			type: 'pressino/button',
			name: "Button",
			attr: { attached: 'bottom attached' }
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
	getBlock: function (theName, theBlockOptions) {
		var tmpItem = this.lookup[theName];
		if (!(tmpItem)) {
			return wp.blocks.createBlock(theName, theBlockOptions || {});
		}
		var tmpAttr = tmpItem.attr || {};
		if( (theBlockOptions) ){
			tmpAttr = {...tmpAttr,...theBlockOptions};
		}
		return wp.blocks.createBlock(tmpItem.type, tmpAttr);
	}
}


const clsLookup = {
	'editorbox': 'pressino editor-boxed',
	'selected': 'selected'
}

function getCommonClass(theName) {
	return clsLookup[theName] || '';
}

function addToList(theItem, theText) {
	var tmpRet = theItem || '';
	if ((tmpRet.trim())) {
		tmpRet = tmpRet.trim() + ' ';
	}
	tmpRet += theText;
	return tmpRet;
}

function addClasses(theItem, theName) {
	var tmpAdd = clsLookup[theName];
	if (tmpAdd) {
		return addToList(theItem, tmpAdd);
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
	"valignbasic": "Default|,Top|top,Middle|middle,Bottom|bottom",
	"slimwidespacing": "Default|,Slim|slimspace,Wide|widespace",
	"inverted": "Default|,Light|light,Inverted|inverted",
	"topmargin": "Default|,0px|mart0,1px|mart1,2px|mart2,3px|mart3,4px|mart4,5px|mart5,6px|mart6,7px|mart7,8px|mart8,9px|mart9,10px|mart10",
	"bottommargin": "Default|,0px|marb0,1px|marb1,2px|marb2,3px|marb3,4px|marb4,5px|marb5,6px|marb6,7px|marb7,8px|marb8,9px|marb9,10px|marb10",
	"bullettypes": "Default|,Use Icon|icon,None|none,Outlined|outline",
	"bulletnames": "Default|,Use Icon|icon,None|none,Arrows|arrow,Balloon|balloon,Basket|basket,Book|book,Bookmark|bookmark,Chevron|chevron,Caret|caret,Diamond|diamond,Egg|egg,Exclamation|exclamation,Floppy|floppy,Heart|heart,Layers|layers,Light|light,Pentagon|pentagon,Pin|pin,Square|square,Star|star,Triangle|triangle,Sun|sun,Basic|basic",
	"basicsizes": "Default|,Small|small,Medium|medium,Large|large,Big|big,Huge|huge",
	"bulletspacing": "Default|,Relxed|relaxed,Tight|tight",
	"linkformatting": "Default|,Basic|link-basic,Circular|link-circular,Squared|link-squared",
	"linkicons": "Default|,Caret Outline|caret,Caret Solid|caret-fill,Caret Up Outline|caret-up,Caret Up Solid|caret-up-fill,Caret Down Outline|caret-down,Caret Down Solid|caret-down-fill,Caret Back Outline|caret-back,Caret Back Solid|caret-back-fill,Chevron Outline|chevron,Chevron Double Outline|chevron-double,Chevron Up Outline|chevron-up,Chevron Up Double Outline|chevron-up-double,Chevron Down Outline|chevron-down,Chevron Double Down Outline|chevron-down-double,Chevron Back Outline|chevron-back,Chevron Double Back Outline|chevron-back-double,Arrow Outline|arrow-forward,Arrow Solid|arrow-forward-fill,Arrow Thin|arrow-thin,Arrow Short|arrow-short,Arrow Back Thin|arrow-back-thin,Arrow Back Short|arrow-back-short",
	"splitlevels": "10%-90%|1,20%-80%|2,30%-70%|3,40%-60%|4,50%-50%|5,60%-40%|6,70%-30%|7,80%-20%|8,90%-10%|9",
	"splitlevels20": "10%-90%|2,15%-85%|3,20%-80%|4,25%-75%|5,30%-70%|6,40%-60%|8,50%-50%|10,60%-40%|12,65%-35%|13,70%-30%|14,75%-25%|15,80%-20%|16,85%-15%|17,90%-10%|18",
	
	"locationlr": "Default|,On the Left|left,On the Right|right",
	"locationtb": "Default|,On the Top|top,On the Bottom|bottom",
	"slimwidenospacing": "Default|,None|nospace,Slim|slimspace,Wide|widespace,Extra Wide|xwidespace",
	
	"yesno": "Yes,No",
	"states": "Alabama|AL,Alaska|AK,Arizona|AZ,Arkansas|AR,California|CA,Colorado|CO,Connecticut|CT,Delaware|DE,District Of Columbia|DC,Florida|FL,Georgia|GA,Hawaii|HI,Idaho|ID,Illinois|IL,Indiana|IN,Iowa|IA,Kansas|KS,Kentucky|KY,Louisiana|LA,Maine|ME,Maryland|MD,Massachusetts|MA,Michigan|MI,Minnesota|MN,Mississippi|MS,Missouri|MO,Montana|MT,Nebraska|NE,Nevada|NV,New Hampshire|NH,New Jersey|NJ,New Mexico|NM,New York|NY,North Carolina|NC,North Dakota|ND,Ohio|OH,Oklahoma|OK,Oregon|OR,Pennsylvania|PA,Rhode Island|RI,South Carolina|SC,South Dakota|SD,Tennessee|TN,Texas|TX,Utah|UT,Vermont|VT,Virginia|VA,Washington|WA,West Virginia|WV,Wisconsin|WI,Wyoming|WY",
	"countries": "Afghanistan|AF,Åland Islands|AX,Albania|AL,Algeria|DZ,American Samoa|AS,Andorra|AD,Angola|AO,Anguilla|AI,Antarctica|AQ,Antigua and Barbuda|AG,Argentina|AR,Armenia|AM,Aruba|AW,Australia|AU,Austria|AT,Azerbaijan|AZ,Bahamas|BS,Bahrain|BH,Bangladesh|BD,Barbados|BB,Belarus|BY,Belgium|BE,Belize|BZ,Benin|BJ,Bermuda|BM,Bhutan|BT,Bolivia, Plurinational State of|BO,Bonaire, Sint Eustatius and Saba|BQ,Bosnia and Herzegovina|BA,Botswana|BW,Bouvet Island|BV,Brazil|BR,British Indian Ocean Territory|IO,Brunei Darussalam|BN,Bulgaria|BG,Burkina Faso|BF,Burundi|BI,Cambodia|KH,Cameroon|CM,Canada|CA,Cape Verde|CV,Cayman Islands|KY,Central African Republic|CF,Chad|TD,Chile|CL,China|CN,Christmas Island|CX,Cocos (Keeling) Islands|CC,Colombia|CO,Comoros|KM,Congo|CG,Congo, the Democratic Republic of the|CD,Cook Islands|CK,Costa Rica|CR,Côte d'Ivoire|CI,Croatia|HR,Cuba|CU,Curaçao|CW,Cyprus|CY,Czech Republic|CZ,Denmark|DK,Djibouti|DJ,Dominica|DM,Dominican Republic|DO,Ecuador|EC,Egypt|EG,El Salvador|SV,Equatorial Guinea|GQ,Eritrea|ER,Estonia|EE,Ethiopia|ET,Falkland Islands (Malvinas|FK,Faroe Islands|FO,Fiji|FJ,Finland|FI,France|FR,French Guiana|GF,French Polynesia|PF,French Southern Territories|TF,Gabon|GA,Gambia|GM,Georgia|GE,Germany|DE,Ghana|GH,Gibraltar|GI,Greece|GR,Greenland|GL,Grenada|GD,Guadeloupe|GP,Guam|GU,Guatemala|GT,Guernsey|GG,Guinea|GN,Guinea-Bissau|GW,Guyana|GY,Haiti|HT,Heard Island and McDonald Islands|HM,Holy See (Vatican City State|VA,Honduras|HN,Hong Kong|HK,Hungary|HU,Iceland|IS,India|IN,Indonesia|ID,Iran, Islamic Republic of|IR,Iraq|IQ,Ireland|IE,Isle of Man|IM,Israel|IL,Italy|IT,Jamaica|JM,Japan|JP,Jersey|JE,Jordan|JO,Kazakhstan|KZ,Kenya|KE,Kiribati|KI,Korea, Democratic People's Republic of|KP,Korea, Republic of|KR,Kuwait|KW,Kyrgyzstan|KG,Lao People's Democratic Republic|LA,Latvia|LV,Lebanon|LB,Lesotho|LS,Liberia|LR,Libya|LY,Liechtenstein|LI,Lithuania|LT,Luxembourg|LU,Macao|MO,Macedonia, the former Yugoslav Republic of|MK,Madagascar|MG,Malawi|MW,Malaysia|MY,Maldives|MV,Mali|ML,Malta|MT,Marshall Islands|MH,Martinique|MQ,Mauritania|MR,Mauritius|MU,Mayotte|YT,Mexico|MX,Micronesia, Federated States of|FM,Moldova, Republic of|MD,Monaco|MC,Mongolia|MN,Montenegro|ME,Montserrat|MS,Morocco|MA,Mozambique|MZ,Myanmar|MM,Namibia|NA,Nauru|NR,Nepal|NP,Netherlands|NL,New Caledonia|NC,New Zealand|NZ,Nicaragua|NI,Niger|NE,Nigeria|NG,Niue|NU,Norfolk Island|NF,Northern Mariana Islands|MP,Norway|NO,Oman|OM,Pakistan|PK,Palau|PW,Palestinian Territory, Occupied|PS,Panama|PA,Papua New Guinea|PG,Paraguay|PY,Peru|PE,Philippines|PH,Pitcairn|PN,Poland|PL,Portugal|PT,Puerto Rico|PR,Qatar|QA,Réunion|RE,Romania|RO,Russian Federation|RU,Rwanda|RW,Saint Barthélemy|BL,Saint Helena, Ascension and Tristan da Cunha|SH,Saint Kitts and Nevis|KN,Saint Lucia|LC,Saint Martin (French part|MF,Saint Pierre and Miquelon|PM,Saint Vincent and the Grenadines|VC,Samoa|WS,San Marino|SM,Sao Tome and Principe|ST,Saudi Arabia|SA,Senegal|SN,Serbia|RS,Seychelles|SC,Sierra Leone|SL,Singapore|SG,Sint Maarten (Dutch part|SX,Slovakia|SK,Slovenia|SI,Solomon Islands|SB,Somalia|SO,South Africa|ZA,South Georgia and the South Sandwich Islands|GS,South Sudan|SS,Spain|ES,Sri Lanka|LK,Sudan|SD,Suriname|SR,Svalbard and Jan Mayen|SJ,Swaziland|SZ,Sweden|SE,Switzerland|CH,Syrian Arab Republic|SY,Taiwan, Province of China|TW,Tajikistan|TJ,Tanzania, United Republic of|TZ,Thailand|TH,Timor-Leste|TL,Togo|TG,Tokelau|TK,Tonga|TO,Trinidad and Tobago|TT,Tunisia|TN,Turkey|TR,Turkmenistan|TM,Turks and Caicos Islands|TC,Tuvalu|TV,Uganda|UG,Ukraine|UA,United Arab Emirates|AE,United Kingdom|GB,United States|US,United States Minor Outlying Islands|UM,Uruguay|UY,Uzbekistan|UZ,Vanuatu|VU,Venezuela, Bolivarian Republic of|VE,Viet Nam|VN,Virgin Islands, British|VG,Virgin Islands, U.S|VI,Wallis and Futuna|WF,Western Sahara|EH,Yemen|YE,Zambia|ZM,Zimbabwe|ZW",
	"grid_sizes": "Default|,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16",
	"sizes_header": "Default|,Tiny|tiny,Small|small,Medium|medium,Large|large,Huge|huge",
	"float": "Default|,Floated Left|floated left,Floated Right|floated right",
	"tofloat": "Default|,Float Left|toleft,Float Right|toright"
}


const addBlock = ({ blockName, blockOptions }) => {
	var tmpThis = wp.data.select('core/block-editor').getSelectedBlock();
	var tmpPos = 0;
	if (tmpThis.innerBlocks && tmpThis.innerBlocks.length) {
		tmpPos = tmpThis.innerBlocks.length;
	}
	var tmpItemToAdd = blockName;
	if (!(tmpItemToAdd)) {
		console.error("No elementname attribute found")
		return;
	}
	var tmpToAddElement = getCommonBlock(tmpItemToAdd,blockOptions);
	if (!(tmpToAddElement)) {

	}
	console.log('tmpToAddElement',tmpToAddElement);
	wp.data.dispatch('core/block-editor').insertBlocks(tmpToAddElement, tmpPos, tmpThis.clientId)
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
	getSettingsForIcon: getSettingsForIcon,
	addBlock: addBlock,
	getIconEl: getIconEl,
	util: {
		addClasses: addClasses,
		addToList: addToList,
		getCommonClass: getCommonClass
	},
	istr: istr
}

export const LinkFormat = {
	getSettings: getLinkFormattingSettings,
	addAttributes: addLinkFormattingAttributes,
	getDisplayInfo: getLinkFormattingOptions
}

//--- Global Exposure of Root Entrypoint
window.PressinoUI = PressinoUI;


