/**
 * WordPress dependencies
 */



/* eslint-disable jsdoc/no-undefined-types */
/**
 * Get the start and end boundaries of a given format from a rich text value.
 *
 *
 * @param {RichTextValue} value      the rich text value to interrogate.
 * @param {string}        format     the identifier for the target format (e.g. `core/link`, `core/bold`).
 * @param {number?}       startIndex optional startIndex to seek from.
 * @param {number?}       endIndex   optional endIndex to seek from.
 * @return {Object}	object containing start and end values for the given format.
 */
/* eslint-enable jsdoc/no-undefined-types */
export function getFormatBoundary(
	value,
	format,
	startIndex = value.start,
	endIndex = value.end
) {
	const EMPTY_BOUNDARIES = {
		start: null,
		end: null,
	};

	const { formats } = value;
	let targetFormat;
	let initialIndex;

	if ( ! formats?.length ) {
		return EMPTY_BOUNDARIES;
	}

	// Clone formats to avoid modifying source formats.
	const newFormats = formats.slice();

	const formatAtStart = newFormats[ startIndex ]?.find(
		( { type } ) => type === format.type
	);

	const formatAtEnd = newFormats[ endIndex ]?.find(
		( { type } ) => type === format.type
	);

	const formatAtEndMinusOne = newFormats[ endIndex - 1 ]?.find(
		( { type } ) => type === format.type
	);

	if ( !! formatAtStart ) {
		// Set values to conform to "start"
		targetFormat = formatAtStart;
		initialIndex = startIndex;
	} else if ( !! formatAtEnd ) {
		// Set values to conform to "end"
		targetFormat = formatAtEnd;
		initialIndex = endIndex;
	} else if ( !! formatAtEndMinusOne ) {
		// This is an edge case which will occur if you create a format, then place
		// the caret just before the format and hit the back ARROW key. The resulting
		// value object will have start and end +1 beyond the edge of the format boundary.
		targetFormat = formatAtEndMinusOne;
		initialIndex = endIndex - 1;
	} else {
		return EMPTY_BOUNDARIES;
	}

	const index = newFormats[ initialIndex ].indexOf( targetFormat );

	const walkingArgs = [ newFormats, initialIndex, targetFormat, index ];

	// Walk the startIndex "backwards" to the leading "edge" of the matching format.
	startIndex = walkToStart( ...walkingArgs );

	// Walk the endIndex "forwards" until the trailing "edge" of the matching format.
	endIndex = walkToEnd( ...walkingArgs );

	// Safe guard: start index cannot be less than 0.
	startIndex = startIndex < 0 ? 0 : startIndex;

	// // Return the indicies of the "edges" as the boundaries.
	return {
		start: startIndex,
		end: endIndex,
	};
}


/**
 * Walks forwards/backwards towards the boundary of a given format within an
 * array of format objects. Returns the index of the boundary.
 *
 * @param {Array}  formats         the formats to search for the given format type.
 * @param {number} initialIndex    the starting index from which to walk.
 * @param {Object} targetFormatRef a reference to the format type object being sought.
 * @param {number} formatIndex     the index at which we expect the target format object to be.
 * @param {string} direction       either 'forwards' or 'backwards' to indicate the direction.
 * @return {number} the index of the boundary of the given format.
 */
function walkToBoundary(
	formats,
	initialIndex,
	targetFormatRef,
	formatIndex,
	direction
) {
	let index = initialIndex;

	const directions = {
		forwards: 1,
		backwards: -1,
	};

	const directionIncrement = directions[ direction ] || 1; // invalid direction arg default to forwards
	const inverseDirectionIncrement = directionIncrement * -1;

	while (
		formats[ index ] &&
		formats[ index ][ formatIndex ] === targetFormatRef
	) {
		// Increment/decrement in the direction of operation.
		index = index + directionIncrement;
	}

	// Restore by one in inverse direction of operation
	// to avoid out of bounds.
	index = index + inverseDirectionIncrement;

	return index;
}

const partialRight =
	( fn, ...partialArgs ) =>
	( ...args ) =>
		fn( ...args, ...partialArgs );

const walkToStart = partialRight( walkToBoundary, 'backwards' );

const walkToEnd = partialRight( walkToBoundary, 'forwards' );
