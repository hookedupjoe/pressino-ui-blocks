/**
 * Return universal display element used by edit and save functions
 */
import { PressinoUI, el } from '../../pressino-ui';

var classSpecs = {
    boolean: ['centered','flexgrowbox'],
    string: []
}


function getClass(attributes, isEditMode) {
    var tmpClasses = PressinoUI.getStandardClass('item', classSpecs, attributes, isEditMode);
	return tmpClasses
}

export default function display({ props, editMode }) {
    var { attributes } = props;
    const { mediaURL,parent_useicon, parent_size, parent_imagestyle, parent_borderstyle, parent_color,parent_imagebordered } = attributes;

    var tmpContent = [];
    var tmpClass = getClass(attributes, editMode);

    if( parent_borderstyle == 'segment' ){
        tmpClass += ' ui segment pad0';
    } else if( parent_borderstyle == 'bordered' ){
        tmpClass += ' ui segment bordered pad0';
    } else if( parent_borderstyle == 'inverted' ){
        tmpClass += ' ui segment inverted pad0';
    } else if( parent_borderstyle == 'message' ){
        tmpClass += ' ui message pad0';
    }
    if( parent_color ){
        tmpClass += ' ' + parent_color;
    }

    //bordered 

    //tmpClass += ' ui message pad0';

    var tmpIconEl = <div class="imgwrap">
        <img class="ui image bordered small" src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAhCAYAAABa+rIoAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpSoVQTuIOGRoneyiIo6likWwUNoKrTqYvPQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APiLjgpukiJ9yWFFjFeeLyP8+45vHcfIDSrTDV7YoCqWUY6ERdz+VUx8Aof+jGMCHwSM/VkZjELz/q6p26quyjP8u77swaVgskAn0gcY7phEW8Qz25aOud94hArSwrxOfGkQRckfuS67PIb55LDAs8MGdn0PHGIWCx1sdzFrGyoxDPEYUXVKF/Iuaxw3uKsVuusfU/+wmBBW8lwndY4ElhCEimIkFFHBVVYiNKukWIiTedxD/+Y40+RSyZXBYwcC6hBheT4wf/g92zN4vSUmxSMA70vtv0RAQK7QKth29/Htt06AfzPwJXW8deawNwn6Y2OFj4ChraBi+uOJu8BlzvA6JMuGZIj+WkJxSLwfkbflAdGboGBNXdu7XOcPgBZmtXyDXBwCEyUKHvd49193XP7t6c9vx9lTXKhkrIZXgAAAAZiS0dEAEUARQBFGbeWcgAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+kBChc1ODwY5uMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACXUlEQVRYw+2Yv0t6URiHH+8PyX5QDqVJEQQFRgkRRFs0hEQgIrg4tva3NLUEQYvIlbYGJ0FykRaJ6uImQpuWiJRGeq+nqS+RXy3LX0PPeA7n3ofL530P77UIIQRDisQQM9Ryyv8WS6US0WiUXC7X05dbLBa2t7fZ3d1FVdXm/c+ZK5fLnJ6eUigUsNlsWK3Wnsm9vLxQq9XY2trC7/cjSVL7L3d9fU2hUGBnZwev19t0oJs8Pz9zdnZGOp1mc3OTubm59pnL5/NIkoTb7e6pGMD4+DjLy8vU63Wenp6+VxCyLKMoSl9CPzIy0llBtOLx8ZH7+3tGR0dZXFzsaR47kkun05yfn/NePw6Hg4ODA+x2+2D7XKVS4fLyko+Fnc/nubm5GXwTNk2T19fXpvWHh4fBy9lsNmZnZ5vWl5aWBi+nqiqBQICFhYV/nd3r9bK2tjYcBTE5Ocnh4eHg79ZuUa1W0TSNRqOBz+fD4XAMh1y1WiUcDpPNZgE4OjpiZWWF/f19pqenByf3WeydTCZDJpNhdXWVvb29LyU7kqvVasiyjCzLHYt9RNd1dF3H4/EwNjb2OzkhBHd3d2iaxtTUFKFQiPn5+R+JfeT29vZ3rUQIQSqVIhKJYJomxWKR4+NjYrEY9Xr9x2K/zpxpmiQSCeLxeNNeMplE13WCwSBOp7PrYm3lDMPg4uKCq6urloeLxSInJycoioJhGP3pc4ZhoGkapVLpWw/phVjLzAkhvi32N7e+0+kV0w1UVWViYuJrufX1dWZmZvoqt7Gxgcvl+npuHeqh+u9fyZ9cj3kDYPIHJGV3YEMAAAAASUVORK5CYII=" alt="" />
    </div>;

    if (!parent_useicon && mediaURL) {
        var tmpMClassName = 'ui image';
        if( parent_imagestyle ){
            tmpMClassName += ' ' + parent_imagestyle;
        }
        if( parent_imagebordered ){
            tmpMClassName += ' bordered';
        }
        var tmpMediaAtts = { src: mediaURL, className: tmpMClassName };
        tmpIconEl = el('div', {className: 'imgwrap'}, el('img', tmpMediaAtts));
    }

    if (editMode) {
        var tmpViewContent = [];
        var tmpInnerContent = el(wp.blockEditor.InnerBlocks,{});

        tmpViewContent.push(<table className={"ui table nopad basic celled pui image-list " + parent_size || 'small' } cellpadding="0" cellspacing="0"  width="100%"><tr><td width="10">{tmpIconEl}</td><td>{tmpInnerContent}</td></tr></table>)
        tmpContent.push(tmpViewContent);

        return el('div', { }, tmpContent);
    } else {
        tmpContent.push(tmpIconEl);
        tmpContent.push(el('div', {className: 'content'}, el(wp.blockEditor.InnerBlocks.Content)));
        return el('div', { className: tmpClass }, tmpContent);
    }

    // var tmpExtraContent = [];
   
    // tmpContent.push(tmpExtraContent);
    // var tmpOutterEl = el('div', {className: tmpClass}, tmpContent );
   
    
}