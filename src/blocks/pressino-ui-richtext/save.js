/**
 * HTML To Save
 */
import { useBlockProps } from '@wordpress/block-editor';
import display from './display';
import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
    const blockProps = useBlockProps.save();
    const {attributes} = props;
    return <RichText.Content className={'ui header large ' + attributes.color || ''} tagName="h2" value={attributes.text} />;

    // var tmpDisplay = display({props, attributes: props.attributes, editMode: false});
    // return tmpDisplay;
    // return (
    //     <div { ...blockProps }>
    //        {tmpDisplay}
    //     </div>
    // );
}