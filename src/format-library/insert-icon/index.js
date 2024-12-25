/**
 * WordPress dependencies
 */
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
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	getTextContent,
	applyFormat,
	removeFormat,
	slice,
	isCollapsed,
	insert,
	create,
	insertObject,
	useAnchor,
	unregisterFormatType, 
	registerFormatType, 
	toggleFormat
} from '@wordpress/rich-text';

import {
	MediaUpload,
	RichTextToolbarButton,
	MediaUploadCheck,
} from '@wordpress/block-editor';


const ALLOWED_MEDIA_TYPES = [ 'image' ];

const name = 'pressino/insert-icon';
const title = __( 'Insert icon' );

export const insertIcon = {
	name,
	title,
	keywords: [ __( 'icon' ), __( 'media' ) ],
	object: true,
	tagName: 'span',
	className: 'has-pressino-insert-icon',
	attributes: {
		className: 'class',
		style: 'style',
		url: 'src',
		alt: 'alt',
	},
	edit: Edit,
};

function InlineUI( { value, onChange, activeObjectAttributes, contentRef } ) {
	const { style, alt } = activeObjectAttributes;
	const width = style?.replace( /\D/g, '' );
	const [ editedWidth, setEditedWidth ] = useState( width );
	const [ editedAlt, setEditedAlt ] = useState( alt );
	const hasChanged = editedWidth !== width || editedAlt !== alt;
	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings: insertIcon,
	} );

	return (
		<Popover
			placement="bottom-start"
			focusOnMount={ false }
			anchor={ popoverAnchor }
			className="block-editor-format-toolbar__image-popover"
		>
			<form
				className="block-editor-format-toolbar__image-container-content"
				onSubmit={ ( event ) => {
					const newReplacements = value.replacements.slice();

					newReplacements[ value.start ] = {
						type: name,
						attributes: {
							...activeObjectAttributes,
							style: width ? `width: ${ editedWidth }px;` : '',
							alt: editedAlt,
						},
					};

					onChange( {
						...value,
						replacements: newReplacements,
					} );

					event.preventDefault();
				} }
			>
				<VStack spacing={ 4 }>
					<NumberControl
						__next40pxDefaultSize
						label={ __( 'Image Width' ) }
						value={ editedWidth }
						min={ 1 }
						onChange={ ( newWidth ) => {
							setEditedWidth( newWidth );
						} }
					/>
					<TextareaControl
						label={ __( 'Alternative text' ) }
						__nextHasNoMarginBottom
						value={ editedAlt }
						onChange={ ( newAlt ) => {
							setEditedAlt( newAlt );
						} }
						
					/>
					<HStack justify="right">
						<Button
							disabled={ ! hasChanged }
							accessibleWhenDisabled
							variant="primary"
							type="submit"
							size="compact"
						>
							{ __( 'Apply' ) }
						</Button>
					</HStack>
				</VStack>
			</form>
		</Popover>
	);
}

function Edit( {
	value,
	onChange,
	onFocus,
	isObjectActive,
	activeObjectAttributes,
	contentRef,
} ) {
	return (
		<MediaUploadCheck>
			<MediaUpload
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				onSelect={ ( { id, url, alt, width: imgWidth } ) => {

					// const plainText = ' ';
					// 	const format = {
					// 		type: name,
					// 		attributes: {
					// 			class: `wp-icon-${ id } fa-users icon fa-solid`
					// 		},
					// 	};
					


					console.log('Creating Icon');
				const htmlText = '&nbsp;<span></span>&nbsp;';
				const plainText = ' ';
				const format = {
					type: name,
					attributes: {
						class: 'bi bi-1-circle'
					},
				};
				// insert(
				// 			value,
				// 			applyFormat(
				// 				create( { 
				// 					text: plainText, 
				// 			 }),
				// 				format,
				// 				0,
				// 				plainText.length
				// 			)
				// 		)

					// insert(
					// 						value,
					// 						applyFormat(
					// 							create( { 
					// 								text: plainText, 
					// 						 }),
					// 							format,
					// 							0,
					// 							plainText.length
					// 						)
					// 					)
					
						

						// insertObject( value, format )



					
					
					onChange(insertObject( value, {
						type: name,
						attributes: {
							className: `wp-icon-${ id } fa-users icon fa-solid blue`,
							style: `width:50px;`
						// 	url,
						// 	alt,
						},
					}));
					onFocus();
				} }
				render={ ( { open } ) => (
					<RichTextToolbarButton
						icon={
							<SVG
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<Path d="M4 18.5h16V17H4v1.5zM16 13v1.5h4V13h-4zM5.1 15h7.8c.6 0 1.1-.5 1.1-1.1V6.1c0-.6-.5-1.1-1.1-1.1H5.1C4.5 5 4 5.5 4 6.1v7.8c0 .6.5 1.1 1.1 1.1zm.4-8.5h7V10l-1-1c-.3-.3-.8-.3-1 0l-1.6 1.5-1.2-.7c-.3-.2-.6-.2-.9 0l-1.3 1V6.5zm0 6.1l1.8-1.3 1.3.8c.3.2.7.2.9-.1l1.5-1.4 1.5 1.4v1.5h-7v-.9z" />
							</SVG>
						}
						title={ title }
						onClick={ open }
						isActive={ isObjectActive }
					/>
				) }
			/>
			{ isObjectActive && (
				<InlineUI
					value={ value }
					onChange={ onChange }
					activeObjectAttributes={ activeObjectAttributes }
					contentRef={ contentRef }
				/>
			) }
		</MediaUploadCheck>
	);
}
