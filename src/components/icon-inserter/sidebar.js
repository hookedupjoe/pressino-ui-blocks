/**
 * External dependencies
 */
import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { MenuGroup, MenuItem, SearchControl } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { simplifyCategories } from '../../utils';

const ALL_CATEGORY_PREFIX = 'all__';

export default function Sidebar( props ) {
	const {
		iconsByType,
		currentCategory,
		onClickCategory,
		searchInput,
		setSearchInput,
	} = props;

	const preparedTypes = useMemo( () => {
		
		var tmpCats = iconsByType.categories;
		const categoriesFull = tmpCats || [];
		const categories = simplifyCategories( tmpCats );
		const allCategory = `${ ALL_CATEGORY_PREFIX }${ 'FontAwesome' }`;
		const iconsOfType = [];

		// Sort alphabetically and then add the "all" category.
		if ( ! categories.includes( allCategory ) ) {
			categories.sort().unshift( allCategory );
			categoriesFull.unshift( {
				name: allCategory,
				title: __( 'All', 'icon-block' ),
			} );
		}
		let tmpRet = {
			type: 'AllFonts',
			title: 'Icon Categories',
			categoriesFull,
			categories,
			count: iconsOfType.length,
		}

		return [tmpRet];

	}, [ iconsByType ] );

	function renderIconTypeCategories( type ) {
		return (
			<MenuGroup
				key={ `type-${ type.type }` }
				className="icon-inserter__sidebar__category-type"
				label={ type.title }
			>
				{ type.categories.map( ( category ) => {
					const isActive = currentCategory
						? category === currentCategory
						: category === `${ ALL_CATEGORY_PREFIX }${ type.type }`;

					const categoryIcons =
						iconsByType.icons
							.find( ( t ) => t.type === type.type )
							?.icons.filter( ( icon ) => {
								const iconCats = icon?.categories ?? [];
								return iconCats.includes( category );
							} ) ?? [];

					const categoryTitle =
						type.categoriesFull.find( ( c ) => c.name === category )
							?.title ?? category;

					return (
						<MenuItem
							key={ `category-${ category }` }
							className={ classnames( {
								'is-active': isActive,
							} ) }
							onClick={ () => onClickCategory( category ) }
							isPressed={ isActive }
						>
							{ categoryTitle }
							
						</MenuItem>
					);
				} ) }
			</MenuGroup>
		);
	}

	return (
		<div className="icon-inserter__sidebar">
			<div className="icon-inserter__sidebar__search">
				<SearchControl
					value={ searchInput }
					onChange={ setSearchInput }
					__nextHasNoMarginBottom
				/>
			</div>
			{ preparedTypes.map( ( type ) =>
				renderIconTypeCategories( type )
			) }
		</div>
	);
}

