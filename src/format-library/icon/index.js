/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState, useLayoutEffect, useEffect } from '@wordpress/element';
import {
	RichTextToolbarButton
} from '@wordpress/block-editor';
import { starFilled as mainIcon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import InlineIconUI from './inline';

const name = 'pressinoformat/icon';
const title = __( 'Icon' );

function Edit( {
	isActive,
	activeAttributes,
	value,
	onChange,
	onFocus,
	contentRef,
} ) {
	const [ addingIcon, setAddingIcon ] = useState( false );

	// We only need to store the button element that opened the popover. We can ignore the other states, as they will be handled by the onFocus prop to return to the rich text field.
	const [ openedBy, setOpenedBy ] = useState( null );

	useEffect( () => {
		// When the icon becomes inactive (i.e. isActive is false), reset the editingIcon state
		// and the creatingIcon state. This means that if the Icon UI is displayed and the icon
		// becomes inactive (e.g. used arrow keys to move cursor outside of icon bounds), the UI will close.
		if ( ! isActive ) {
			setAddingIcon( false );
		}
	}, [ isActive ] );

	useLayoutEffect( () => {
		const editableContentElement = contentRef.current;
		if ( ! editableContentElement ) {
			return;
		}

		function handleClick( event ) {
			// There is a situation whereby there is an existing icon in the rich text
			// and the user clicks on the leftmost edge of that icon and fails to activate
			// the icon format, but the click event still fires on the `<a>` element.
			// This causes the `editingIcon` state to be set to `true` and the icon UI
			// to be rendered in "creating" mode. We need to check isActive to see if
			// we have an active icon format.
			const iconEl = event.target.closest( '[contenteditable] a' );
			if (
				! iconEl || // other formats (e.g. bold) may be nested within the icon.
				! isActive
			) {
				return;
			}

			setAddingIcon( true );
			setOpenedBy( {
				el: iconEl,
				action: 'click',
			} );
		}

		editableContentElement.addEventListener( 'click', handleClick );

		return () => {
			editableContentElement.removeEventListener( 'click', handleClick );
		};
	}, [ contentRef, isActive ] );

	function addIcon( target ) {
		setAddingIcon( true );
	}

	/**
	 * Runs when the popover is closed via escape keypress, unlinking the selected text,
	 * but _not_ on a click outside the popover. onFocusOutside handles that.
	 */
	function stopAddingIcon() {
		// Don't let the click handler on the toolbar button trigger again.

		// There are two places for us to return focus to on Escape keypress:
		// 1. The rich text field.
		// 2. The toolbar button.

		// The toolbar button is the only one we need to handle returning focus to.
		// Otherwise, we rely on the passed in onFocus to return focus to the rich text field.

		// Close the popover
		setAddingIcon( false );

		// Return focus to the toolbar button or the rich text field
		if ( openedBy?.el?.tagName === 'BUTTON' ) {
			openedBy.el.focus();
		} else {
			onFocus();
		}
		// Remove the openedBy state
		setOpenedBy( null );
	}

	// Test for this:
	// 1. Click on the icon button
	// 2. Click the Options button in the top right of header
	// 3. Focus should be in the dropdown of the Options button
	// 4. Press Escape
	// 5. Focus should be on the Options button
	function onFocusOutside() {
		setAddingIcon( false );
		setOpenedBy( null );
	}

	// Only autofocus if we have clicked a icon within the editor
	const shouldAutoFocus = ! (
		openedBy?.el?.tagName === 'A' && openedBy?.action === 'click'
	);

	return (
		<>

		
			<RichTextToolbarButton
				name="link"
				icon={ mainIcon }
				title={ isActive ? __( 'Icon' ) : title }
				onClick={ ( event ) => {
					addIcon( event.currentTarget );
				} }
				isActive={ isActive || addingIcon }
				aria-haspopup="true"
				aria-expanded={ addingIcon }
			/>
			{ addingIcon && (
				<InlineIconUI
					controlname={ name }
					addingIcon={ addingIcon }
					setAddingIcon={ setAddingIcon }
					stopAddingIcon={ stopAddingIcon }
					onFocusOutside={ onFocusOutside }
					isActive={ isActive }
					activeAttributes={ activeAttributes }
					value={ value }
					onChange={ onChange }
					contentRef={ contentRef }
					focusOnMount={ shouldAutoFocus ? 'firstElement' : false }
				/>
			) }
		</>
	);
}

export const icon = {
	name,
	title,
	tagName: 'span',
	className: 'icon',
	attributes: {
		iconid: 'iconid',
		datacolor: 'datacolor',
		datasize: 'datasize',
		dataicon: 'dataicon',
		dataicontype: 'dataicontype',
		style: 'style',
	},
	edit: Edit,
};
