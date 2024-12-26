/**
 * Underline control that uses the u tag only
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { toggleFormat } from '@wordpress/rich-text';
import {
	RichTextShortcut,
	RichTextToolbarButton,
	__unstableRichTextInputEvent,
} from '@wordpress/block-editor';

const name = 'pressino/underline';
const title = __( 'Underline' );

export const underline = {
	name,
	title,
	tagName: 'u',
	className: null,
	attributes: {
	},
	edit( { isObjectActive, value, onChange } ) {
		const onToggle = () => {
			onChange(
				toggleFormat( value, {
					type: name,
					title,
				} )
			);
		};

		return (
			<>
				<RichTextShortcut
					type="primary"
					character="u"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
								icon="editor-underline"
								title="Underline"
								isActive={isObjectActive}
								onClick={onToggle}
								shortcutType="primary"
								shortcutCharacter="u"
							></RichTextToolbarButton>
				<__unstableRichTextInputEvent
					inputType="formatUnderline"
					onInput={ onToggle }
				/>
			</>
		);
	},
};
