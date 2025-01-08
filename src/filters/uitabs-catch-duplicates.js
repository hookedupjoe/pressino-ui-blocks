import { createHigherOrderComponent } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';
import { select } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

const isBlockIdReserved = ( groupname, clientId ) => {
    const blocksClientIds = select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { groupname: _blockId, itemname } = select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return !itemname && clientId !== _clientId && groupname === _blockId;
    } );
};

const addBlockEditAttributes = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { attributes, setAttributes, clientId, name } = props;
		if( name != 'pressino/tabs'){
			return <BlockEdit { ...props } />;
		}

        const {
            groupname,
        } = attributes;

        const setFreshBlockId = () => {
            const freshBlockId = window.crypto.randomUUID();
            setAttributes( {
                'groupname': freshBlockId,
            } );
        };

        useEffect( () => {
			//console.log('groupname',groupname);
            if ( ! groupname ) {
                setFreshBlockId();
                return;
            }

            if ( isBlockIdReserved( groupname, clientId ) ) {
                // eslint-disable-next-line no-console
                console.log( `Block with id '${ groupname }' already exists. Regenerating...`, groupname );
                setFreshBlockId();
            } else {
				//console.log('not reserved ', groupname, clientId)
			}
        }, [ groupname ] );

        return <BlockEdit { ...props } />;
    };
}, 'addBlockEditAttributes' );



addFilter(
    'editor.BlockEdit',
    'pressino/tabs/catchduplicates',
    addBlockEditAttributes
);

