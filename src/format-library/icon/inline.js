/**
 * WordPress dependencies
 */
import { useRef, useEffect, useState } from '@wordpress/element';
import { istr } from '../../pressino-ui';
import { ColorPalette } from '@wordpress/components';

import { Toolbar, ToolbarButton } from '@wordpress/components';
import {
	Popover,
	Button,
} from '@wordpress/components';
import {
	create,
	insert,
	isCollapsed,
	applyFormat,
	slice,
	replace,
	split,
	concat,
	useAnchor,
} from '@wordpress/rich-text';
import {
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getFormatBoundary } from './utils';
import { icon as settings } from './index';

import { QuickInserterPopover, InserterModal } from '../../components/';

function InlineIconUI( {
	addingIcon,
	controlname,
	isActive,
	setAddingIcon,
	value,
	onChange,
	onFocusOutside,
	stopAddingIcon,
	contentRef,
	focusOnMount,
} ) {

	const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
	const [isInserterOpen, setInserterOpen] = useState(false);
	const [color, setColor] = useState();
	const [colorName, setColorName] = useState();
	const [currentIcon, setCurrentIcon] = useState();
	const [iconsize, setIconSize] = useState();

	let noEditState = useRef({});

	const colors = [
		{
			"color": "#FFFFFF",
			"name": "Black",
			"slug": "black"
		},
		{
			"color": "#111111",
			"name": "White",
			"slug": "white"
		},
		{
			"color": "#DB2828",
			"name": "Red",
			"slug": "red"
		},
		{
			"color": "#F2711C",
			"name": "Orange",
			"slug": "orange"
		},
		{
			"color": "#FBBD08",
			"name": "Yellow",
			"slug": "yellow"
		},
		{
			"color": "#B5CC18",
			"name": "Olive",
			"slug": "olive"
		},
		{
			"color": "#21BA45",
			"name": "Green",
			"slug": "green"
		},
		{
			"color": "#00B5AD",
			"name": "Teal",
			"slug": "teal"
		},
		{
			"color": "#2185D0",
			"name": "Blue",
			"slug": "blue"
		},
		{
			"color": "#6435C9",
			"name": "Violet",
			"slug": "violet"
		},
		{
			"color": "#A333C8",
			"name": "Purple",
			"slug": "purple"
		},
		{
			"color": "#E03997",
			"name": "Pink",
			"slug": "pink"
		},
		{
			"color": "#A5673F",
			"name": "Brown",
			"slug": "brown"
		},
		{
			"color": "#767676",
			"name": "Grey",
			"slug": "grey"
		}
    ];


	function addIconAndClose(theItem){
		var tmpIcon = theItem || currentIcon
		setInserterOpen(false);
		setQuickInserterOpen(false);
		var tmpAtts = {}
		
		tmpAtts.iconname = tmpIcon.className || 'icon users'
		tmpAtts.icontype = tmpIcon.type || 'default'
		tmpAtts.color = colorName;
		tmpAtts.size = iconsize;
		addIcon(tmpAtts);
		stopAddingIcon();
	}

	function onSelectedItem(theItem){
		setInserterOpen(false);
		setQuickInserterOpen(false);
		setCurrentIcon(theItem);
	}

	function getColorForSlug(theSlug){
		var tmpRet = '';
		colors.map((theColor) => {
			if(theColor.slug == theSlug) tmpRet = theColor.color
		} )
		return tmpRet;
	}
		
	let richIconTextValue = getRichTextValueFromSelection( value, isActive, controlname, noEditState.selectActive );
	function checkCurrentIcon(){
		var tmpFormats = richIconTextValue?.formats;
		var tmpIcons = [];
		noEditState.atIndex = 0;
		tmpFormats.map((value,index) => {
			var tmpVal = value;
			
			if( tmpVal.length == 1 ){
				tmpVal = tmpVal[0]
			}
			
			if(tmpVal.type == controlname){
				noEditState.atIndex = index;
				tmpIcons.push(tmpVal);
			}
		});
		noEditState.selectActive = false;
		if( tmpIcons.length > 1 ){
			alert('Select only one icon to update', 'Too Many Icons Selected', 'e');
			setAddingIcon(false);
			return false;
		}
		if( ! isCollapsed( value ) && tmpIcons.length == 0 ){
			alert('Select an icon to update', 'No Icons Selected', 'e');
			setAddingIcon(false);
			return false;
		}

		var tmpIcon = tmpIcons[0];
		
		if( ! tmpIcon ){
			return false;
		}
		noEditState.selectActive = true;

		setCurrentIcon({className: tmpIcon.attributes.dataicon, type: tmpIcon.attributes.dataicontype});
		setColorName(tmpIcon.attributes.datacolor);
		setColor(getColorForSlug(tmpIcon.attributes.datacolor))
		setIconSize(tmpIcon.attributes.datasize);
		
		
		return true;
	}
	// Get the text content minus any HTML tags.
	const richTextText = richIconTextValue.text;
	

	const { selectionChange } = useDispatch( blockEditorStore );

	const { selectionStart } = useSelect(
		( select ) => {
			const { getSettings, getSelectionStart } =
				select( blockEditorStore );
			const _settings = getSettings();
			//--- These settings have color and other theme options in case needed

			return {
				selectionStart: getSelectionStart(),
			};
		},
		[]
	);

	useEffect( () => {
		checkCurrentIcon();
		if ( addingIcon && !isActive && !(noEditState.selectActive)) {
			setQuickInserterOpen(true);
		}
		if(!addingIcon){
			noEditState.selectActive = false;
		}
	}, [ addingIcon ] );
	
	
	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings: {
			...settings,
			isActive,
		},
	} );

	

	function sizeControls(){
		if( !(currentIcon && currentIcon?.className) ){
			return <></>
		}
		if( isInserterOpen || isQuickInserterOpen ){
			return <></>
		}
		return <>
		<hr style={{clear: "both"}}/>
		<Toolbar label="Options">
			<ToolbarButton onClick={() => setIconSize('tiny')} text="Tiny" label="Tiny" />
			<ToolbarButton onClick={() => setIconSize('small')} text="Small" label="Small" />
            <ToolbarButton onClick={() => setIconSize('medium')} text="Medium" label="Medium"  />
            <ToolbarButton onClick={() => setIconSize('large')} text="Large" label="Large"  />
            <ToolbarButton onClick={() => setIconSize('huge')} text="Huge" label="Huge"  />
        </Toolbar>
		
		</>
	}

	function selectIconButton(){
		if( isInserterOpen || isQuickInserterOpen ){
			return <div class="ui message compact toleft marb0 padb0">Select an icon from the list</div>
		}
		return <Button
					variant={(currentIcon && currentIcon?.className) ? 'tertiary' : 'primary'}
					onClick={() => {
						setQuickInserterOpen(true);
					}}
					>
						
					{istr('Select Icon', controlname)}
				</Button>
	}
	function insertButtion(){
		if( !(currentIcon && currentIcon?.className) ){
			return <></>
		}
		if( isInserterOpen || isQuickInserterOpen ){
			return <></>
		}
		return <>
		&nbsp;
		<Button
		variant="primary"
		disabled={ ! currentIcon && currentIcon?.className}
		onClick={() => {
			addIconAndClose();
		}}
	>
		{istr((isActive || noEditState.selectActive ? 'Replace Icon' : 'Insert Icon'), controlname)}
	</Button></>
	
	}

	function getIconClass(theIcon){
		var tmpIconClass = theIcon?.className  || theIcon?.iconname || '';
		var tmpType = theIcon?.type || theIcon?.icontype || '';

		if( tmpType == 'fa' ){
			tmpIconClass = 'fa-solid ' + tmpIconClass;	
		} else if( tmpType == 'dash' ){
			tmpIconClass = 'dashicons ' + tmpIconClass;	
		}
		return tmpIconClass;
	}

	function iconPreview(){
		if( !(currentIcon && currentIcon?.className) ){
			return <></>
		}
		console.log('currentIcon',currentIcon);
		let tmpIconClass = getIconClass(currentIcon)
		
		return <div style={{border: "solid 1px #333333", margin: "0px", minWidth:"50px", padding: "7px", float: "right", rightMargin: "20px"}}><span class={`icon ${tmpIconClass} ${iconsize || ''} ${colorName}`} > </span></div>
	}
		
	function colorPallet(){
		if( isInserterOpen || isQuickInserterOpen ){
			return <></>
		}
		if( !(currentIcon && currentIcon?.className) ){
			return <></>
		}
		return <>
		<hr style={{clear: "both"}}/>
		<ColorPalette
			colors={ colors }
			value={ color }
			disableCustomColors={ true }
			onChange={ ( color, index ) => {
				
				if(index != undefined){
					const tmpColorName = colors[index].slug;
					setColorName(tmpColorName)
				} else {
					setColorName('');
				}
				setColor( color );
			} }
		/>
		</>
		
	}

	function getPopoverMenu(){

		return <div tabIndex={ -1 }>

			{selectIconButton()}

			{insertButtion()}
			{iconPreview()}
			{sizeControls()}
			{colorPallet()}
			
			<InserterModal
					onSelectedItem={onSelectedItem}
					isInserterOpen={ isInserterOpen }
					setInserterOpen={ setInserterOpen }
				/>
			<QuickInserterPopover
				onSelectedItem={onSelectedItem}
				setInserterOpen={setInserterOpen}
				isQuickInserterOpen={isQuickInserterOpen}
				setQuickInserterOpen={setQuickInserterOpen}
			/>

		</div>

	}

	//--- TEMP TO SEE IF ID HELPS
	//--- ToDo: Change this to find open id to use from all
	let tmpIconIDs = 0;
	function getNextIconID(){
		//--- Get all formats of this type and find the latest one and add one?
		//--- Use counter inside paragraph?
		return 'i' + tmpIconIDs++
	}
	function addIcon(theIcon){
		const {iconname, icontype,  size = '', color = ''} = theIcon;
		let tmpClass = getIconClass(theIcon);
		if( size != '' ){
			tmpClass += ' ' + size;
		}
		if( color != '' ){
			tmpClass += ' ' + color;
		}
		if( icontype == 'fa' ){
			tmpClass += ' fa-solid';
		}
		const plainText = ' ';
		const format = {
			type: 'pressinoformat/icon',
			attributes: {
				datacolor: color || '',
				datasize: size || '',
				dataicon: iconname || '',
				dataicontype: icontype || '',
				iconid: getNextIconID(),			
				style: 'margin-left:2px;margin-right:2px;',
				class: tmpClass
			},
		};
		
		
		

		if ( !isActive && isCollapsed( value ) ) {
			onChange(
				insert(
					value,
					applyFormat(
						create( { 
							text: plainText, 
					}),
						format,
						0,
						plainText.length
					)
				)
			)
			


		} else {
			if( isActive || noEditState.selectActive ){
				let newValue;
				// Create new RichText value for the new text in order that we
				// can apply formats to it.
				newValue = create( { text: plainText } );
				// Apply the new icon format to this new text value.
				newValue = applyFormat( newValue, format, 0, plainText.length );

				// Get the boundaries of the active icon format.
				const boundary = getFormatBoundary( value, {
					type: controlname,
					
				});

				// Split the value at the start of the active icon format.
				// Passing "start" as the 3rd parameter is required to ensure
				// the second half of the split value is split at the format's
				// start boundary and avoids relying on the value's "end" property
				// which may not correspond correctly.
				const [ valBefore, valAfter ] = split(
					value,
					boundary.start,
					boundary.start
				);

				// Update the original (full) RichTextValue replacing the
				// target text with the *new* RichTextValue containing:
				// 1. The new text content.
				// 2. The new icon format.
				// As "replace" will operate on the first match only, it is
				// run only against the second half of the value which was
				// split at the active format's boundary. This avoids a bug
				// with incorrectly targetted replacements.
				// See: https://github.com/WordPress/gutenberg/issues/41771.
				// Note original formats will be lost when applying this change.
				// That is expected behaviour.
				// See: https://github.com/WordPress/gutenberg/pull/33849#issuecomment-936134179.

				//--- Adjusting to allow for selecting more than just the object and then replacing it
				//--- without this, it also replaces the other selected text.
				let tmpAdjustedRT = richTextText;

				var tmpBeforeText = '';
				var tmpEndText = '';
				if( noEditState.atIndex){
					tmpBeforeText = richTextText.substring(0,noEditState.atIndex);
					tmpEndText = richTextText.substring(noEditState.atIndex + 1);
				}
				var tmpBeforeEl = create({text: tmpBeforeText})
				var tmpEndEl = create({text: tmpEndText})
				newValue = concat(tmpBeforeEl,newValue,tmpEndEl)
				const newValAfter = replace( valAfter,  tmpAdjustedRT, newValue );

				newValue = concat( valBefore, newValAfter );
				onChange(newValue);

			} else {
				//Shouldn't happen with other checks, but in case - tell the developer
				alert('Do not select anything when inserting an icon', "Try Again", 'e');
			}

			//Move past the end so we don't add into / replace when adding next item
			selectionChange( {
				clientId: selectionStart.clientId,
				identifier: selectionStart.attributeKey,
				start: value.start + plainText.length + 1,
			} );

		
		}
	}


	return (
		<Popover
			className="format-library__pressino-std-popover"
			anchor={ popoverAnchor }
			animate={ false }
			onClose={ stopAddingIcon }
			onFocusOutside={ onFocusOutside }
			placement="bottom"
			offset={ 8 }
			shift
			focusOnMount={ focusOnMount }
			constrainTabbing
		>
			{getPopoverMenu()}
			
		</Popover>
	);
}

function getRichTextValueFromSelection( value, isActive, controlname, isSelectActive = false ) {
	// Default to the selection ranges on the RichTextValue object.
	let textStart = value.start;
	let textEnd = value.end;

	// If the format is currently active then the rich text value
	// should always be taken from the bounds of the active format
	// and not the selected text.
	if ( isActive ) {
		const boundary = getFormatBoundary( value, {
			type: controlname,
		} );

		textStart = boundary.start;

		// Text *selection* always extends +1 beyond the edge of the format.
		// We account for that here.
		textEnd = boundary.end + 1;
	}

	// Get a RichTextValue containing the selected text content.
	return slice( value, textStart, textEnd );
}

export default InlineIconUI;
