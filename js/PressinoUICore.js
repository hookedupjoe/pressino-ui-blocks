/**
 * PressinoUICore.js
 * 
 * Copyright (c)2024 Joseph Francis / hookedup, inc. 
 *
 * This code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This header and all notices must be kept intact.
 *
 * @author Joseph Francis
 * @package actionappwp
 * @since actionappwp 1.0.0
 */

//import { PressinoUI } from "../src/pressino-ui";

( function ( wp,  ActionAppCore) {
    var PressinoUICore = {};
    ActionAppCore.PressinoUICore = PressinoUICore;

    PressinoUICore.runTest = function(){
        console.log('PressinoUICore Test Complete');
    }


    function initPressinoUICore(){
        

        // var tmpBaseURL = ActionAppCore.DesignerConfig.catalogURL;
        // //--- Load stuff we need on startup, can load dynamically as needed, 
        // //      so only use this for suff needed on startup
        // var tmpRequired = {
        //     // panels: {
        //     //     baseURL: tmpBaseURL + '/panels/',
        //     //     map: {'nested':'nested'}
        //     // },
        //     // templates: {
        //     //     baseURL: tmpBaseURL + '/templates/',
        //     //     map: {"demo1":"demo1"}
        //     // }
        // };

        // ActionAppCore.config = ActionAppCore.config || {};
        // ActionAppCore.config.required = ActionAppCore.config.required || {};
        
		// ActionAppCore.config.required = tmpRequired;
        // $.extend(ActionAppCore.config.required, tmpRequired);

        // //--- Create entry point from Action App entrypoint
        // ActionAppCore.common.designer.Dashboard = PressinoUICore;
        // window.ActAppPressinoUICore = PressinoUICore;

    }


    function setupActions(){
        //--- Deprecated - Backward compatibility
        ThisApp.actions.pressinoAddElement = function(theParams, theTarget){
            var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['elementname']);
           

            var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
            var tmpPos = 0;
            if( tmpThis.innerBlocks && tmpThis.innerBlocks.length ){
                tmpPos = tmpThis.innerBlocks.length;
            }
            var tmpItemToAdd = tmpParams.elementname;
            if( !(tmpItemToAdd) ){
                console.error("No elementname attribute found")
                return;
            }
            var tmpToAddElement = PressinoUI.getCommonBlock(tmpItemToAdd);
            console.log('pressinoAddElement', tmpToAddElement);
            wp.data.dispatch('core/block-editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
        }
        
    }

    ActionAppCore.subscribe('app-loaded', function(){
        ThisApp.delay(100).then(function(){
            setupActions();
        });
    })

    //--- Initialize common block functionality for the editor
    initPressinoUICore();

} )( window.wp, window.ActionAppCore );



