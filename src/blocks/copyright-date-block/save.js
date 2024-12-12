import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { fallbackCurrentYear, showStartingYear, startingYear } = attributes;
    if ( ! fallbackCurrentYear ) {
        return null;
    }

    const currentYear = new Date().getFullYear().toString();
    let displayDate;

    if ( showStartingYear && startingYear ) {
        displayDate = startingYear + '–' + currentYear;
    } else {
        displayDate = currentYear;
    }

    return (
        <p { ...useBlockProps.save() }>© { displayDate }</p>
    );
}