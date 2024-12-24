/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
	applyFormat,
	removeFormat,
	getActiveFormat,
	useAnchor,
} from '@wordpress/rich-text';
import {
	ColorPalette,
	getColorClassName,
	getColorObjectByColorValue,
	getColorObjectByAttributeValues,
	store as blockEditorStore,
} from '@wordpress/block-editor';



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

/**
 * Internal dependencies
 */
import { uiIcon as settings, transparentValue } from './index';
// import { unlock } from '../lock-unlock';

// const { Tabs } = unlock( componentsPrivateApis );

// const TABS = [
// 	{ name: 'color', title: __( 'Text' ) },
// 	{ name: 'backgroundColor', title: __( 'Background' ) },
// ];

function parseCSS( css = '' ) {
	return css.split( ';' ).reduce( ( accumulator, rule ) => {
		if ( rule ) {
			const [ property, value ] = rule.split( ':' );
			if ( property === 'color' ) {
				accumulator.color = value;
			}
			if (
				property === 'background-color' &&
				value !== transparentValue
			) {
				accumulator.backgroundColor = value;
			}
		}
		return accumulator;
	}, {} );
}

export function parseClassName( className = '', colorSettings ) {
	return className.split( ' ' ).reduce( ( accumulator, name ) => {
		// `colorSlug` could contain dashes, so simply match the start and end.
		if ( name.startsWith( 'has-' ) && name.endsWith( '-color' ) ) {
			const colorSlug = name
				.replace( /^has-/, '' )
				.replace( /-color$/, '' );
			const colorObject = getColorObjectByAttributeValues(
				colorSettings,
				colorSlug
			);
			accumulator.color = colorObject.color;
		}
		return accumulator;
	}, {} );
}

export function getActiveColors( value, name, colorSettings ) {
	const activeColorFormat = getActiveFormat( value, name );

	if ( ! activeColorFormat ) {
		return {};
	}

	return {
		...parseCSS( activeColorFormat.attributes.style ),
		...parseClassName( activeColorFormat.attributes.class, colorSettings ),
	};
}

function setColors( value, name, colorSettings, colors ) {
	const { color, backgroundColor } = {
		...getActiveColors( value, name, colorSettings ),
		...colors,
	};

	if ( ! color && ! backgroundColor ) {
		return removeFormat( value, name );
	}

	const styles = [];
	const classNames = [];
	const attributes = {};

	if ( backgroundColor ) {
		styles.push( [ 'background-color', backgroundColor ].join( ':' ) );
	} else {
		// Override default browser color for mark element.
		styles.push( [ 'background-color', transparentValue ].join( ':' ) );
	}

	if ( color ) {
		const colorObject = getColorObjectByColorValue( colorSettings, color );

		if ( colorObject ) {
			classNames.push( getColorClassName( 'color', colorObject.slug ) );
		} else {
			styles.push( [ 'color', color ].join( ':' ) );
		}
	}

	if ( styles.length ) {
		attributes.style = styles.join( ';' );
	}
	if ( classNames.length ) {
		attributes.class = classNames.join( ' ' );
	}

	return applyFormat( value, { type: name, attributes } );
}

function ColorPicker( { name, property, value, onChange } ) {
	const colors = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		return getSettings().colors ?? [];
	}, [] );
	const activeColors = useMemo(
		() => getActiveColors( value, name, colors ),
		[ name, value, colors ]
	);

	return (
		<ColorPalette
			value={ activeColors[ property ] }
			onChange={ ( color ) => {
				onChange(
					setColors( value, name, colors, { [ property ]: color } )
				);
			} }
		/>
	);
}

export default function InlineColorUI( {
	name,
	value,
	onChange,
	onClose,
	contentRef,
	isActive,
} ) {
	const popoverAnchor = useAnchor( {
		editableContentElement: contentRef.current,
		settings: { ...settings, isActive },
	} );

	return (
		<Popover
			onClose={ onClose }
			className="format-library__pressino-std-popover"
			anchor={ popoverAnchor }
		>

			<form
							className="block-editor-format-toolbar__ui-icon-container-content"
							onSubmit={ ( event ) => {
								// const newReplacements = value.replacements.slice();
			
								// newReplacements[ value.start ] = {
								// 	type: name,
								// 	attributes: {
								// 		...activeObjectAttributes,
								// 		style: width ? `width: ${ editedWidth }px;` : '',
								// 		alt: editedAlt,
								// 	},
								// };
			
								// onChange( {
								// 	...value,
								// 	replacements: newReplacements,
								// } );
			
								alert('NO!')
								event.preventDefault();
							} }
						>
							<VStack spacing={ 4 }>
								<NumberControl
									__next40pxDefaultSize
									label={ __( 'Image Width' ) }
									// value={ editedWidth }
									min={ 1 }
									onChange={ ( newWidth ) => {
										//setEditedWidth( newWidth );
									} }
								/>
								<TextareaControl
									label={ __( 'Alternative text' ) }
									__nextHasNoMarginBottom
									// value={ editedAlt }
									onChange={ ( newAlt ) => {
										//setEditedAlt( newAlt );
									} }
									
								/>
								<HStack justify="right">
									<Button
										// disabled={ ! hasChanged }
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
