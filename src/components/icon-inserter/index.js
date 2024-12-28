/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { useRef, useState, useEffect, useMemo, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import getIcons from '../../icons';
import { classIconIndex } from '../../icons';
import { flattenIconsArray, getIconTypes } from '../../utils';
import ContentHeader from './content-header';
import IconGrid from './icon-grid';
import Sidebar from './sidebar';


function resizeScrollers() {

	const getEl = (theSelector) => {
		return window.document.querySelector(theSelector); 
	}
	
	var tmpModal = getEl('.components-modal__content');
	var tmpHeader = getEl('.components-modal__header');
	var tmpSB = getEl('.icon-inserter__sidebar__search');
	if( !tmpModal ){
		return;
	}

	var tmpBuffer = 4;

	var tmpMH = tmpModal.clientHeight;
	var tmpHH = tmpHeader.clientHeight;
	var tmpSH = tmpSB.clientHeight;
	
	var tmpCBH = tmpMH - tmpSH - tmpBuffer;

	var tmpCatBox = getEl('.icon-inserter__sidebar__category-type.components-menu-group');
	var tmpIconsBox = getEl('.wp-pressino-ui-icon-inserter-inserter__modal .icon-inserter__content');
	tmpCatBox.style.height = tmpCBH + 'px';
	tmpIconsBox.style.height = (tmpCBH + tmpSH ) + 'px';

}
export default function InserterModal(props) {
	const { onSelectedItem, isInserterOpen, setInserterOpen, attributes } =
		props;
	const iconsByType = classIconIndex; //getIcons();
	const iconTypes = iconsByType; //getIconTypes( iconsByType );

	// Get the default type, and if there is none, get the first type.
	const defaultType = iconTypes


	//--- Resize scrollable elements when dialog is openned
	useEffect(() => {
		if( isInserterOpen ){
			//--- Trigger looking for it
			resizeScrollers();
		}
	}, [isInserterOpen]);


	//--- Resize scrollable on window change
	useEffect(() => {
		//--- Handle window resize
		const handleResize = () => {
			resizeScrollers();
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		}
	}, []);



	const [searchInput, setSearchInput] = useState('');
	const [currentCategory, setCurrentCategory] = useState(
		'all__' + defaultType[0]?.type
	);
	const [iconSize, setIconSize] = useState(() => {
		const storedSettings = window.localStorage.getItem('icon_block');
		return storedSettings
			? JSON.parse(storedSettings)?.preview_size || 24
			: 24;
	});

	// useEffect( () => {
	// 	const settings = JSON.parse(
	// 		window.localStorage.getItem( 'icon_block' ) || '{}'
	// 	);
	// 	settings.preview_size = iconSize;
	// 	window.localStorage.setItem( 'icon_block', JSON.stringify( settings ) );
	// }, [ iconSize ] );

	// const iconsAll = useMemo(
	// 	() => flattenIconsArray( iconsByType ),
	// 	[ iconsByType ]
	// );
	const iconsAll = classIconIndex.icons;


	// Move the filtering logic to a separate function
	const getFilteredIcons = useCallback(() => {


		if (searchInput) {
			if (searchInput.length < 2) {
				return [];
			}
			return iconsAll.filter((icon) => {
				const input = searchInput.toLowerCase();
				const iconName = icon.title.toLowerCase();

				if (iconName.includes(input)) {
					return true;
				}

				return (
					icon?.keywords?.some((keyword) =>
						keyword.includes(input)
					) || false
				);
			});
		}


		const iconsRet = iconsAll.filter(
			(icon) => icon?.categories?.includes(currentCategory) || false
		);
		if (iconsRet.length == 0) {
			return iconsAll.slice(0, 500);
		}
		//--- Limit to 500
		return iconsRet;

	}, [searchInput, currentCategory, iconsAll, iconsByType]);

	if (!isInserterOpen) {
		return null;
	}

	

	function onClickCategory(category) {
		setSearchInput('');
		setCurrentCategory(category);
	}

	return (
		<Modal
			className="wp-pressino-ui-icon-inserter-inserter__modal"
			title={__('Icon Library', 'icon-block')}
			onRequestClose={() => {
				setInserterOpen(false);
			}}
			isFullScreen
		>
			<div
				className={classnames('icon-inserter', {
					'is-searching': searchInput,
				})}
			>
				<Sidebar
					iconsByType={iconsByType}
					currentCategory={currentCategory}
					onClickCategory={onClickCategory}
					searchInput={searchInput}
					setSearchInput={setSearchInput}
				/>
				<div className="icon-inserter__content">
					<ContentHeader
						searchInput={searchInput}
						shownIconsCount={getFilteredIcons().length}
						iconSize={iconSize}
						setIconSize={setIconSize}
					/>
					<IconGrid
						shownIcons={getFilteredIcons()}
						iconSize={iconSize}
						onSelectedItem={onSelectedItem}
					/>
				</div>
			</div>
		</Modal>
	);
}
