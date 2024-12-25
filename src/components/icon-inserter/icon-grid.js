/**
 * External dependencies
 */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, blockDefault } from '@wordpress/icons';
import { Button } from '@wordpress/components';


import { getIconEl } from '../../icons';
/**
 * Internal dependencies
 */
import { parseIcon } from '../../utils';

export default function IconGrid( props ) {
	const { onSelectedItem, shownIcons  } = props;

	const noResults = (
		<div className="block-editor-inserter__no-results">
			<Icon
				icon={ blockDefault }
				className="block-editor-inserter__no-results-icon"
			/>
			<p>{ __( 'No results found.', 'block-icon' ) }</p>
		</div>
	);
	
	const searchResults = (
		
		<div className="icons-list">
			{ shownIcons.map( ( icon ) => {
				
				return (
					<Button
						key={ `icon-${ icon.name }` }
						className={ classnames(
							'icons-list__item',
							'block-editor-block-types-list__item',
							{
								'is-active': false,
								'has-no-icon-fill': icon?.hasNoIconFill,
							}
						) }
						onClick={ () =>
							onSelectedItem(
								icon
							)
							//updateIconAtts( icon.name, icon?.hasNoIconFill )
						}
					>
						<span className="icons-list__item-icon">
							{getIconEl({iconclass: icon.className, icontype: icon.type})}
						{/* <i className={'' + (icon.className || '')}></i> */}
						</span>
						<span className="icons-list__item-title">
							{ icon?.title ?? icon.name }
						</span>
					</Button>
				);
			} ) }
		</div>
	);

	return (
		<div className="icon-inserter__content-grid">
			{ isEmpty( shownIcons ) ? noResults : searchResults }
		</div>
	);
}
