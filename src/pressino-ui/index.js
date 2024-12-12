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
	} else if (listSources[theControlType]) {
		tmpContents.push(getSelectControl(theProps, theAttName, theLabel, tmpVal, tmpOnChange, theControlType));
	}

	return tmpContents;
}

function getFunctionForType(theControlType) {
	var tmpCT = (theControlType || '').toLowerCase();
	if (tmpCT == 'text' || tmpCT == 'number') {
		return 'getTextControl';
	}
	if (tmpCT == 'color') {
		return 'getColorListControl';
	}
	if (tmpCT == 'sizeheader') {
		return 'getHeaderSizeListControl';
	}
	if (tmpCT == 'size') {
		return 'getSizeListControl';
	}
	if (tmpCT == 'attached') {
		return 'getAttachedListControl';
	}
	if (tmpCT == 'alignment') {
		return 'getAlignmentListControl';
	}
	if (tmpCT == 'alignmentleftright') {
		return 'getLeftRightAlignmentListControl';
	}
	if (tmpCT == 'alignmentvertical') {
		return 'getVerticalAlignmentListControl';
	}
	if (tmpCT == 'floatleftright') {
		return 'getLeftRighFloatListControl';
	}
	if (tmpCT == 'tofloat') {
		return 'getFloatControl';
	}
	if (tmpCT == 'columns') {
		return 'getColumnListControl';
	}
	if (tmpCT == 'margin') {
		return 'getMarginListControl';
	}
	if (tmpCT == 'topmargin') {
		return 'getTopMarginListControl';
	}
	if (tmpCT == 'bottommargin') {
		return 'getBottomMarginListControl';
	}
	if (tmpCT == 'padding') {
		return 'getPaddingListControl';
	}
	if (tmpCT == 'inverted') {
		return 'getInvertedListControl';
	}
	if (tmpCT == 'gridspacing') {
		return 'getGridSpacingListControl';
	}

	if (tmpCT == 'dropdown') {
		return 'getDropDownListControl';
	}
	return 'getTextControl';
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


export const listSources = {
    "colors": "Default|,Red|red,Orange|orange,Yellow|yellow,Olive|olive,Green|green,Teal|teal,Blue|blue,Violet|violet,Purple|purple,Pink|pink,Brown|brown,Black|black",
    "sizes": "Default|,Mini|mini,Tiny|tiny,Small|small,Medium|medium,Large|large,Big|big,Huge|huge,Massive|massive",
    "padding": "Default|,0px|pad0,1px|pad1,2px|pad2,3px|pad3,4px|pad4,5px|pad5,6px|pad6,7px|pad7,8px|pad8,9px|pad9,10px|pad10,11px|pad11,12px|pad12,13px|pad13,14px|pad14,15px|pad15,16px|pad16,17px|pad17,18px|pad18,19px|pad19,20px|pad20",
	"margin": "Default|,0px|mar0,1px|mar1,2px|mar2,3px|mar3,4px|mar4,5px|mar5,6px|mar6,7px|mar7,8px|mar8,9px|mar9,10px|mar10,11px|mar11,12px|mar12,13px|mar13,14px|mar14,15px|mar15,16px|mar16,17px|mar17,18px|mar18,19px|mar19,20px|mar20",
    "alignment": "Default|,Center|center aligned,Left|left aligned,Right|right aligned",
	"attached": "Default|,Top|top attached,Middle|attached,Bottom|bottom attached",
	
	

	"yesno": "Yes,No",
    "states": "Alabama|AL,Alaska|AK,Arizona|AZ,Arkansas|AR,California|CA,Colorado|CO,Connecticut|CT,Delaware|DE,District Of Columbia|DC,Florida|FL,Georgia|GA,Hawaii|HI,Idaho|ID,Illinois|IL,Indiana|IN,Iowa|IA,Kansas|KS,Kentucky|KY,Louisiana|LA,Maine|ME,Maryland|MD,Massachusetts|MA,Michigan|MI,Minnesota|MN,Mississippi|MS,Missouri|MO,Montana|MT,Nebraska|NE,Nevada|NV,New Hampshire|NH,New Jersey|NJ,New Mexico|NM,New York|NY,North Carolina|NC,North Dakota|ND,Ohio|OH,Oklahoma|OK,Oregon|OR,Pennsylvania|PA,Rhode Island|RI,South Carolina|SC,South Dakota|SD,Tennessee|TN,Texas|TX,Utah|UT,Vermont|VT,Virginia|VA,Washington|WA,West Virginia|WV,Wisconsin|WI,Wyoming|WY",
    "countries": "Afghanistan|AF,Åland Islands|AX,Albania|AL,Algeria|DZ,American Samoa|AS,Andorra|AD,Angola|AO,Anguilla|AI,Antarctica|AQ,Antigua and Barbuda|AG,Argentina|AR,Armenia|AM,Aruba|AW,Australia|AU,Austria|AT,Azerbaijan|AZ,Bahamas|BS,Bahrain|BH,Bangladesh|BD,Barbados|BB,Belarus|BY,Belgium|BE,Belize|BZ,Benin|BJ,Bermuda|BM,Bhutan|BT,Bolivia, Plurinational State of|BO,Bonaire, Sint Eustatius and Saba|BQ,Bosnia and Herzegovina|BA,Botswana|BW,Bouvet Island|BV,Brazil|BR,British Indian Ocean Territory|IO,Brunei Darussalam|BN,Bulgaria|BG,Burkina Faso|BF,Burundi|BI,Cambodia|KH,Cameroon|CM,Canada|CA,Cape Verde|CV,Cayman Islands|KY,Central African Republic|CF,Chad|TD,Chile|CL,China|CN,Christmas Island|CX,Cocos (Keeling) Islands|CC,Colombia|CO,Comoros|KM,Congo|CG,Congo, the Democratic Republic of the|CD,Cook Islands|CK,Costa Rica|CR,Côte d'Ivoire|CI,Croatia|HR,Cuba|CU,Curaçao|CW,Cyprus|CY,Czech Republic|CZ,Denmark|DK,Djibouti|DJ,Dominica|DM,Dominican Republic|DO,Ecuador|EC,Egypt|EG,El Salvador|SV,Equatorial Guinea|GQ,Eritrea|ER,Estonia|EE,Ethiopia|ET,Falkland Islands (Malvinas|FK,Faroe Islands|FO,Fiji|FJ,Finland|FI,France|FR,French Guiana|GF,French Polynesia|PF,French Southern Territories|TF,Gabon|GA,Gambia|GM,Georgia|GE,Germany|DE,Ghana|GH,Gibraltar|GI,Greece|GR,Greenland|GL,Grenada|GD,Guadeloupe|GP,Guam|GU,Guatemala|GT,Guernsey|GG,Guinea|GN,Guinea-Bissau|GW,Guyana|GY,Haiti|HT,Heard Island and McDonald Islands|HM,Holy See (Vatican City State|VA,Honduras|HN,Hong Kong|HK,Hungary|HU,Iceland|IS,India|IN,Indonesia|ID,Iran, Islamic Republic of|IR,Iraq|IQ,Ireland|IE,Isle of Man|IM,Israel|IL,Italy|IT,Jamaica|JM,Japan|JP,Jersey|JE,Jordan|JO,Kazakhstan|KZ,Kenya|KE,Kiribati|KI,Korea, Democratic People's Republic of|KP,Korea, Republic of|KR,Kuwait|KW,Kyrgyzstan|KG,Lao People's Democratic Republic|LA,Latvia|LV,Lebanon|LB,Lesotho|LS,Liberia|LR,Libya|LY,Liechtenstein|LI,Lithuania|LT,Luxembourg|LU,Macao|MO,Macedonia, the former Yugoslav Republic of|MK,Madagascar|MG,Malawi|MW,Malaysia|MY,Maldives|MV,Mali|ML,Malta|MT,Marshall Islands|MH,Martinique|MQ,Mauritania|MR,Mauritius|MU,Mayotte|YT,Mexico|MX,Micronesia, Federated States of|FM,Moldova, Republic of|MD,Monaco|MC,Mongolia|MN,Montenegro|ME,Montserrat|MS,Morocco|MA,Mozambique|MZ,Myanmar|MM,Namibia|NA,Nauru|NR,Nepal|NP,Netherlands|NL,New Caledonia|NC,New Zealand|NZ,Nicaragua|NI,Niger|NE,Nigeria|NG,Niue|NU,Norfolk Island|NF,Northern Mariana Islands|MP,Norway|NO,Oman|OM,Pakistan|PK,Palau|PW,Palestinian Territory, Occupied|PS,Panama|PA,Papua New Guinea|PG,Paraguay|PY,Peru|PE,Philippines|PH,Pitcairn|PN,Poland|PL,Portugal|PT,Puerto Rico|PR,Qatar|QA,Réunion|RE,Romania|RO,Russian Federation|RU,Rwanda|RW,Saint Barthélemy|BL,Saint Helena, Ascension and Tristan da Cunha|SH,Saint Kitts and Nevis|KN,Saint Lucia|LC,Saint Martin (French part|MF,Saint Pierre and Miquelon|PM,Saint Vincent and the Grenadines|VC,Samoa|WS,San Marino|SM,Sao Tome and Principe|ST,Saudi Arabia|SA,Senegal|SN,Serbia|RS,Seychelles|SC,Sierra Leone|SL,Singapore|SG,Sint Maarten (Dutch part|SX,Slovakia|SK,Slovenia|SI,Solomon Islands|SB,Somalia|SO,South Africa|ZA,South Georgia and the South Sandwich Islands|GS,South Sudan|SS,Spain|ES,Sri Lanka|LK,Sudan|SD,Suriname|SR,Svalbard and Jan Mayen|SJ,Swaziland|SZ,Sweden|SE,Switzerland|CH,Syrian Arab Republic|SY,Taiwan, Province of China|TW,Tajikistan|TJ,Tanzania, United Republic of|TZ,Thailand|TH,Timor-Leste|TL,Togo|TG,Tokelau|TK,Tonga|TO,Trinidad and Tobago|TT,Tunisia|TN,Turkey|TR,Turkmenistan|TM,Turks and Caicos Islands|TC,Tuvalu|TV,Uganda|UG,Ukraine|UA,United Arab Emirates|AE,United Kingdom|GB,United States|US,United States Minor Outlying Islands|UM,Uruguay|UY,Uzbekistan|UZ,Vanuatu|VU,Venezuela, Bolivarian Republic of|VE,Viet Nam|VN,Virgin Islands, British|VG,Virgin Islands, U.S|VI,Wallis and Futuna|WF,Western Sahara|EH,Yemen|YE,Zambia|ZM,Zimbabwe|ZW",
    "grid_sizes": "Default|,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16",
    "sizes_header": "Default|,Tiny|tiny,Small|small,Medium|medium,Large|large,Huge|huge",
    "lralignment": "Default|,Left|left aligned,Right|right aligned",
    "valignment": "Default|,Top|top aligned,Middle|middle aligned,Bottom|bottom aligned",
    "float": "Default|,Floated Left|floated left,Floated Right|floated right",
    "tofloat": "Default|,Float Left|toleft,Float Right|toright"
}
