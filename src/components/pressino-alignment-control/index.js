/**
 * Internal dependencies
 */
import AlignmentUI from './ui';

const PressinoAlignmentControl = ( props ) => {
	return <AlignmentUI { ...props } isToolbar={ false } />;
};

const PressinoAlignmentToolbar = ( props ) => {
	return <AlignmentUI { ...props } isToolbar />;
};

/**
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/block-editor/src/components/alignment-control/README.md
 */
export { PressinoAlignmentControl, PressinoAlignmentToolbar };
