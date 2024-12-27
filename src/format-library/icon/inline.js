/**
 * WordPress dependencies
 */
import { useEffect, useState, useMemo, createInterpolateElement } from '@wordpress/element';
import { istr, PressinoUI, attNamesIcon } from '../../pressino-ui';
import { ColorPalette } from '@wordpress/components';

import { Toolbar, ToolbarButton } from '@wordpress/components';
import { formatBold, formatItalic, link } from '@wordpress/icons';

import { __, sprintf } from '@wordpress/i18n';
import { speak } from '@wordpress/a11y';
import {
	Path,
	SVG,
	Popover,
	Button,
	ExternalLink,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalNumberControl as NumberControl,
	TextareaControl,
} from '@wordpress/components';
import { prependHTTP } from '@wordpress/url';
import {
	create,
	insert,
	isCollapsed,
	applyFormat,
	removeFormat,
	slice,
	replace,
	split,
	concat,
	useAnchor,
} from '@wordpress/rich-text';
import {
	LinkControl,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { createLinkFormat, isValidHref, getFormatBoundary } from './utils';
import { icon as settings } from './index';

import { QuickInserterPopover, InserterModal } from '../../components/';

const LINK_SETTINGS = [
	// ...LinkControl.DEFAULT_LINK_SETTINGS,
	{
		id: 'nofollow',
		title: __( 'Mark as nofollow' ),
	},
];

function InlineLinkUI( {
	addingLink,
	controlname,
	isActive,
	setAddingLink,
	activeAttributes,
	value,
	onChange,
	onFocusOutside,
	stopAddingLink,
	contentRef,
	focusOnMount,
} ) {


	const [isQuickInserterOpen, setQuickInserterOpen] = useState(false);
	const [isInserterOpen, setInserterOpen] = useState(false);
	const [color, setColor] = useState();
	const [colorName, setColorName] = useState();
	const [currentIcon, setCurrentIcon] = useState();
	const [iconsize, setIconSize] = useState();

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
		stopAddingLink();
	}

	function onSelectedItem(theItem){
		//console.log('linkValue',linkValue);
		//addIconAndClose(theItem);
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
		
	const richLinkTextValue = getRichTextValueFromSelection( value, isActive, controlname );

	function checkCurrentIcon(){
		var tmpFormats = richLinkTextValue?.formats;
		var tmpIcons = [];
		tmpFormats.map((value) => {
			var tmpVal = value;
			
			if( tmpVal.length == 1 ){
				tmpVal = tmpVal[0]
			}
			
			if(tmpVal.type == controlname) tmpIcons.push(tmpVal)
		});

		//console.log('f tmpIcons',tmpFormats,tmpIcons)
		if( tmpIcons.length > 1 ){
			alert('Select only one icon to update', 'Too Many Icons Selected', 'e');
			setAddingLink(false);
			return false;
		}
		if( ! isCollapsed( value ) && tmpIcons.length == 0 ){
			alert('Select an icon to update', 'No Icons Selected', 'e');
			setAddingLink(false);
			return false;
		}

		var tmpIcon = tmpIcons[0];
		console.log('tmpIcon',tmpIcon);
		
		//var tmpCurrIcon = {color: tmpIcon.attributes.datacolor, size: tmpIcon.attributes.datasize, className: tmpIcon.attributes.dataicon, type: tmpIcon.attributes.dataicontype};
		setCurrentIcon({className: tmpIcon.attributes.dataicon, type: tmpIcon.attributes.dataicontype});
		console.log('tmpIcon.attributes.datacolor',tmpIcon.attributes.datacolor);
		setColorName(tmpIcon.attributes.datacolor);
		setColor(getColorForSlug(tmpIcon.attributes.datacolor))
		setIconSize(tmpIcon.attributes.datasize);
		
		return true;
	}
	// Get the text content minus any HTML tags.
	const richTextText = richLinkTextValue.text;

	const { selectionChange } = useDispatch( blockEditorStore );

	const { createPageEntity, userCanCreatePages, selectionStart } = useSelect(
		( select ) => {
			const { getSettings, getSelectionStart } =
				select( blockEditorStore );
			const _settings = getSettings();

			return {
				createPageEntity: _settings.__experimentalCreatePageEntity,
				userCanCreatePages: _settings.__experimentalUserCanCreatePages,
				selectionStart: getSelectionStart(),
			};
		},
		[]
	);

	useEffect( () => {
		if ( addingLink && !isActive ) {
			setQuickInserterOpen(true);
		} else {
			checkCurrentIcon();
			//--- Do se load here?
			console.log('did not load values yet',activeAttributes,value,richLinkTextValue)
		}
	}, [ addingLink ] );
	
	const linkValue = useMemo(
		() => ( {
			url: activeAttributes.url,
			type: activeAttributes.type,
			id: activeAttributes.id,
			opensInNewTab: activeAttributes.target === '_blank',
			nofollow: activeAttributes.rel?.includes( 'nofollow' ),
			title: richTextText,
		} ),
		[
			activeAttributes.id,
			activeAttributes.rel,
			activeAttributes.target,
			activeAttributes.type,
			activeAttributes.url,
			richTextText,
		]
	);

	function removeLink() {
		const newValue = removeFormat( value, 'core/link' );
		onChange( newValue );
		stopAddingLink();
		speak( __( 'Link removed.' ), 'assertive' );
	}

	function onChangeLink( nextValue ) {
		const hasLink = linkValue?.url;
		const isNewLink = ! hasLink;

		// Merge the next value with the current link value.
		nextValue = {
			...linkValue,
			...nextValue,
		};

		const newUrl = prependHTTP( nextValue.url );
		const linkFormat = createLinkFormat( {
			url: newUrl,
			type: nextValue.type,
			id:
				nextValue.id !== undefined && nextValue.id !== null
					? String( nextValue.id )
					: undefined,
			opensInNewWindow: nextValue.opensInNewTab,
			nofollow: nextValue.nofollow,
		} );

		const newText = nextValue.title || newUrl;

		// Scenario: we have any active text selection or an active format.
		let newValue;
		if ( isCollapsed( value ) && ! isActive ) {
			// Scenario: we don't have any actively selected text or formats.
			const inserted = insert( value, newText );

			newValue = applyFormat(
				inserted,
				linkFormat,
				value.start,
				value.start + newText.length
			);

			onChange( newValue );

			// Close the Link UI.
			stopAddingLink();

			// Move the selection to the end of the inserted link outside of the format boundary
			// so the user can continue typing after the link.
			selectionChange( {
				clientId: selectionStart.clientId,
				identifier: selectionStart.attributeKey,
				start: value.start + newText.length + 1,
			} );

			return;
		} else if ( newText === richTextText ) {
			newValue = applyFormat( value, linkFormat );
		} else {
			// Scenario: Editing an existing link.

			// Create new RichText value for the new text in order that we
			// can apply formats to it.
			newValue = create( { text: newText } );
			// Apply the new Link format to this new text value.
			newValue = applyFormat( newValue, linkFormat, 0, newText.length );

			// Get the boundaries of the active link format.
			const boundary = getFormatBoundary( value, {
				type: 'core/link',
			} );

			// Split the value at the start of the active link format.
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
			// 2. The new link format.
			// As "replace" will operate on the first match only, it is
			// run only against the second half of the value which was
			// split at the active format's boundary. This avoids a bug
			// with incorrectly targetted replacements.
			// See: https://github.com/WordPress/gutenberg/issues/41771.
			// Note original formats will be lost when applying this change.
			// That is expected behaviour.
			// See: https://github.com/WordPress/gutenberg/pull/33849#issuecomment-936134179.
			const newValAfter = replace( valAfter, richTextText, newValue );

			newValue = concat( valBefore, newValAfter );
		}

		onChange( newValue );

		// Focus should only be returned to the rich text on submit if this link is not
		// being created for the first time. If it is then focus should remain within the
		// Link UI because it should remain open for the user to modify the link they have
		// just created.
		if ( ! isNewLink ) {
			stopAddingLink();
		}

		if ( ! isValidHref( newUrl ) ) {
			speak(
				__(
					'Warning: the link has been inserted but may have errors. Please test it.'
				),
				'assertive'
			);
		} else if ( isActive ) {
			speak( __( 'Link edited.' ), 'assertive' );
		} else {
			speak( __( 'Link inserted.' ), 'assertive' );
		}
	}

	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings: {
			...settings,
			isActive,
		},
	} );

	async function handleCreate( pageTitle ) {
		const page = await createPageEntity( {
			title: pageTitle,
			status: 'draft',
		} );

		return {
			id: page.id,
			type: page.type,
			title: page.title.rendered,
			url: page.link,
			kind: 'post-type',
		};
	}

	function createButtonText( searchTerm ) {
		return createInterpolateElement(
			sprintf(
				/* translators: %s: search term. */
				__( 'Create page: <mark>%s</mark>' ),
				searchTerm
			),
			{ mark: <mark /> }
		);
	}


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
		{/* <div></div>
		<Button
			variant="tertiary"
			iconPosition="right"
			style={{marginLeft: "10px"}}
			onClick={() => setIconSize(undefined)}
		>
			{istr('Clear', controlname)}
		</Button> */}
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
		{istr((isActive ? 'Replace Icon' : 'Insert Icon'), controlname)}
	</Button></>
	
	}

	function iconPreview(){
		if( !(currentIcon && currentIcon?.className) ){
			return <></>
		}
		let tmpIconClass = 'bi bi-rocket-takeoff';
		if(currentIcon && currentIcon?.className){
			tmpIconClass = currentIcon?.className;
			if( currentIcon.type == 'fa' ){
				tmpIconClass = 'fa-solid ' + tmpIconClass;	
			}
		}
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
		//console.log('gpm',activeAttributes,value,richLinkTextValue)
		
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


	function addIcon({iconname, icontype,  size = '', color = ''}){
		console.log('addIcon',iconname, icontype,  size,color );

		let tmpClass = iconname;
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
			if( isActive ){
				console.log('is active, replace');
				let newValue;
				// Create new RichText value for the new text in order that we
				// can apply formats to it.
				newValue = create( { text: plainText } );
				// Apply the new Link format to this new text value.
				newValue = applyFormat( newValue, format, 0, plainText.length );

				// Get the boundaries of the active link format.
				const boundary = getFormatBoundary( value, {
					type: controlname,
				} );

				// Split the value at the start of the active link format.
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
				// 2. The new link format.
				// As "replace" will operate on the first match only, it is
				// run only against the second half of the value which was
				// split at the active format's boundary. This avoids a bug
				// with incorrectly targetted replacements.
				// See: https://github.com/WordPress/gutenberg/issues/41771.
				// Note original formats will be lost when applying this change.
				// That is expected behaviour.
				// See: https://github.com/WordPress/gutenberg/pull/33849#issuecomment-936134179.
				const newValAfter = replace( valAfter, richTextText, newValue );

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

			// onChange(
			// 	toggleFormat( value, {
			// 		type: 'pressino/inline-icon',
			// 		attributes: {
			// 			class: 'fa-hill-rockslide icon fa-solid'
			// 		}
			// 	} ) 
			// );
		}
	}


	return (
		<Popover
			className="format-library__pressino-std-popover"
			anchor={ popoverAnchor }
			animate={ false }
			onClose={ stopAddingLink }
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

function getRichTextValueFromSelection( value, isActive, controlname ) {
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

export default InlineLinkUI;
