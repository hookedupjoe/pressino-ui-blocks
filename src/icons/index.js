
export function getIconEl({iconname, icontype, iconclass}){
    let tmpClasses = iconname || iconclass || '';

    if( icontype == 'fa' ){
        if( iconclass ){
            return <span class={'' + tmpClasses}></span>;
        } else {
            return <span class={'icon faicon ' + tmpClasses}></span>;
        }
    } else if( icontype == 'dash' ){
        return <span class={'icon dashicons ' + tmpClasses }></span>;
    } else {
        return <span class={'icon  ' + tmpClasses}></span>;
    }
}

export const classIconIndex = {
	"icons":[
    {
        "name": "sui-users",
        "title": "UI Users",
        "className": "users",
        "type": "sui",
        "categories": [
            "accessibility"
        ]
    },
    {
        "categories": [
            "menu",
            "admin"
        ],
        "name": "f333",
        "type": "dash",
        "className": "dashicons-menu",
        "title": "menu"
    },
    {
        "categories": [
            "menu",
            "alt",
            "admin"
        ],
        "name": "f228",
        "type": "dash",
        "className": "dashicons-menu-alt",
        "title": "menu (alt)"
    },
    {
        "categories": [
            "menu",
            "alt",
            "admin"
        ],
        "name": "f329",
        "type": "dash",
        "className": "dashicons-menu-alt2",
        "title": "menu (alt2)"
    },
    {
        "categories": [
            "menu",
            "alt",
            "admin"
        ],
        "name": "f349",
        "type": "dash",
        "className": "dashicons-menu-alt3",
        "title": "menu (alt3)"
    },
    {
        "categories": [
            "site",
            "admin"
        ],
        "name": "f319",
        "type": "dash",
        "className": "dashicons-admin-site",
        "title": "site"
    },
    {
        "categories": [
            "site",
            "alt",
            "admin"
        ],
        "name": "f11d",
        "type": "dash",
        "className": "dashicons-admin-site-alt",
        "title": "site (alt)"
    },
    {
        "categories": [
            "site",
            "alt",
            "admin"
        ],
        "name": "f11e",
        "type": "dash",
        "className": "dashicons-admin-site-alt2",
        "title": "site (alt2)"
    },
    {
        "categories": [
            "site",
            "alt",
            "admin"
        ],
        "name": "f11f",
        "type": "dash",
        "className": "dashicons-admin-site-alt3",
        "title": "site (alt3)"
    },
    {
        "categories": [
            "dashboard",
            "admin"
        ],
        "name": "f226",
        "type": "dash",
        "className": "dashicons-dashboard",
        "title": "dashboard"
    },
    {
        "categories": [
            "post",
            "admin"
        ],
        "name": "f109",
        "type": "dash",
        "className": "dashicons-admin-post",
        "title": "post"
    },
    {
        "categories": [
            "media",
            "admin"
        ],
        "name": "f104",
        "type": "dash",
        "className": "dashicons-admin-media",
        "title": "media"
    },
    {
        "categories": [
            "links",
            "admin"
        ],
        "name": "f103",
        "type": "dash",
        "className": "dashicons-admin-links",
        "title": "links"
    },
    {
        "categories": [
            "page",
            "admin"
        ],
        "name": "f105",
        "type": "dash",
        "className": "dashicons-admin-page",
        "title": "page"
    },
    {
        "categories": [
            "comments",
            "admin"
        ],
        "name": "f101",
        "type": "dash",
        "className": "dashicons-admin-comments",
        "title": "comments"
    },
    {
        "categories": [
            "appearance",
            "admin"
        ],
        "name": "f100",
        "type": "dash",
        "className": "dashicons-admin-appearance",
        "title": "appearance"
    },
    {
        "categories": [
            "plugins",
            "admin"
        ],
        "name": "f106",
        "type": "dash",
        "className": "dashicons-admin-plugins",
        "title": "plugins"
    },
    {
        "categories": [
            "plugins",
            "checked",
            "admin"
        ],
        "name": "f485",
        "type": "dash",
        "className": "dashicons-plugins-checked",
        "title": "plugins checked"
    },
    {
        "categories": [
            "users",
            "admin"
        ],
        "name": "f110",
        "type": "dash",
        "className": "dashicons-admin-users",
        "title": "users"
    },
    {
        "categories": [
            "tools",
            "admin"
        ],
        "name": "f107",
        "type": "dash",
        "className": "dashicons-admin-tools",
        "title": "tools"
    },
    {
        "categories": [
            "settings",
            "admin"
        ],
        "name": "f108",
        "type": "dash",
        "className": "dashicons-admin-settings",
        "title": "settings"
    },
    {
        "categories": [
            "network",
            "admin"
        ],
        "name": "f112",
        "type": "dash",
        "className": "dashicons-admin-network",
        "title": "network"
    },
    {
        "categories": [
            "home",
            "admin"
        ],
        "name": "f102",
        "type": "dash",
        "className": "dashicons-admin-home",
        "title": "home"
    },
    {
        "categories": [
            "generic",
            "admin"
        ],
        "name": "f111",
        "type": "dash",
        "className": "dashicons-admin-generic",
        "title": "generic"
    },
    {
        "categories": [
            "collapse",
            "admin"
        ],
        "name": "f148",
        "type": "dash",
        "className": "dashicons-admin-collapse",
        "title": "collapse"
    },
    {
        "categories": [
            "filter",
            "admin"
        ],
        "name": "f536",
        "type": "dash",
        "className": "dashicons-filter",
        "title": "filter"
    },
    {
        "categories": [
            "customizer",
            "admin"
        ],
        "name": "f540",
        "type": "dash",
        "className": "dashicons-admin-customizer",
        "title": "customizer"
    },
    {
        "categories": [
            "multisite",
            "admin"
        ],
        "name": "f541",
        "type": "dash",
        "className": "dashicons-admin-multisite",
        "title": "multisite"
    },
    {
        "categories": [
            "write",
            "blog",
            "welcome"
        ],
        "name": "f119",
        "type": "dash",
        "className": "dashicons-welcome-write-blog",
        "title": "write blog"
    },
    {
        "categories": [
            "add",
            "page",
            "welcome"
        ],
        "name": "f133",
        "type": "dash",
        "className": "dashicons-welcome-add-page",
        "title": "add page"
    },
    {
        "categories": [
            "view",
            "site",
            "welcome"
        ],
        "name": "f115",
        "type": "dash",
        "className": "dashicons-welcome-view-site",
        "title": "view site"
    },
    {
        "categories": [
            "widgets",
            "menus",
            "welcome"
        ],
        "name": "f116",
        "type": "dash",
        "className": "dashicons-welcome-widgets-menus",
        "title": "widgets menus"
    },
    {
        "categories": [
            "comments",
            "welcome"
        ],
        "name": "f117",
        "type": "dash",
        "className": "dashicons-welcome-comments",
        "title": "comments"
    },
    {
        "categories": [
            "learn",
            "more",
            "welcome"
        ],
        "name": "f118",
        "type": "dash",
        "className": "dashicons-welcome-learn-more",
        "title": "learn more"
    },
    {
        "categories": [
            "aside",
            "format"
        ],
        "name": "f123",
        "type": "dash",
        "className": "dashicons-format-aside",
        "title": "aside"
    },
    {
        "categories": [
            "image",
            "format"
        ],
        "name": "f128",
        "type": "dash",
        "className": "dashicons-format-image",
        "title": "image"
    },
    {
        "categories": [
            "gallery",
            "format"
        ],
        "name": "f161",
        "type": "dash",
        "className": "dashicons-format-gallery",
        "title": "gallery"
    },
    {
        "categories": [
            "video",
            "format"
        ],
        "name": "f126",
        "type": "dash",
        "className": "dashicons-format-video",
        "title": "video"
    },
    {
        "categories": [
            "status",
            "format"
        ],
        "name": "f130",
        "type": "dash",
        "className": "dashicons-format-status",
        "title": "status"
    },
    {
        "categories": [
            "quote",
            "format"
        ],
        "name": "f122",
        "type": "dash",
        "className": "dashicons-format-quote",
        "title": "quote"
    },
    {
        "categories": [
            "chat",
            "format"
        ],
        "name": "f125",
        "type": "dash",
        "className": "dashicons-format-chat",
        "title": "chat"
    },
    {
        "categories": [
            "audio",
            "format"
        ],
        "name": "f127",
        "type": "dash",
        "className": "dashicons-format-audio",
        "title": "audio"
    },
    {
        "categories": [
            "camera",
            "format"
        ],
        "name": "f306",
        "type": "dash",
        "className": "dashicons-camera",
        "title": "camera"
    },
    {
        "categories": [
            "camera",
            "alt",
            "format"
        ],
        "name": "f129",
        "type": "dash",
        "className": "dashicons-camera-alt",
        "title": "camera (alt)"
    },
    {
        "categories": [
            "images",
            "alt",
            "format"
        ],
        "name": "f232",
        "type": "dash",
        "className": "dashicons-images-alt",
        "title": "images (alt)"
    },
    {
        "categories": [
            "images",
            "alt",
            "format"
        ],
        "name": "f233",
        "type": "dash",
        "className": "dashicons-images-alt2",
        "title": "images (alt2)"
    },
    {
        "categories": [
            "video",
            "alt",
            "format"
        ],
        "name": "f234",
        "type": "dash",
        "className": "dashicons-video-alt",
        "title": "video (alt)"
    },
    {
        "categories": [
            "video",
            "alt",
            "format"
        ],
        "name": "f235",
        "type": "dash",
        "className": "dashicons-video-alt2",
        "title": "video (alt2)"
    },
    {
        "categories": [
            "video",
            "alt",
            "format"
        ],
        "name": "f236",
        "type": "dash",
        "className": "dashicons-video-alt3",
        "title": "video (alt3)"
    },
    {
        "categories": [
            "archive",
            "media"
        ],
        "name": "f501",
        "type": "dash",
        "className": "dashicons-media-archive",
        "title": "archive"
    },
    {
        "categories": [
            "audio",
            "media"
        ],
        "name": "f500",
        "type": "dash",
        "className": "dashicons-media-audio",
        "title": "audio"
    },
    {
        "categories": [
            "code",
            "media"
        ],
        "name": "f499",
        "type": "dash",
        "className": "dashicons-media-code",
        "title": "code"
    },
    {
        "categories": [
            "default",
            "media"
        ],
        "name": "f498",
        "type": "dash",
        "className": "dashicons-media-default",
        "title": "default"
    },
    {
        "categories": [
            "document",
            "media"
        ],
        "name": "f497",
        "type": "dash",
        "className": "dashicons-media-document",
        "title": "document"
    },
    {
        "categories": [
            "interactive",
            "media"
        ],
        "name": "f496",
        "type": "dash",
        "className": "dashicons-media-interactive",
        "title": "interactive"
    },
    {
        "categories": [
            "spreadsheet",
            "media"
        ],
        "name": "f495",
        "type": "dash",
        "className": "dashicons-media-spreadsheet",
        "title": "spreadsheet"
    },
    {
        "categories": [
            "text",
            "media"
        ],
        "name": "f491",
        "type": "dash",
        "className": "dashicons-media-text",
        "title": "text"
    },
    {
        "categories": [
            "video",
            "media"
        ],
        "name": "f490",
        "type": "dash",
        "className": "dashicons-media-video",
        "title": "video"
    },
    {
        "categories": [
            "audio",
            "playlist",
            "media"
        ],
        "name": "f492",
        "type": "dash",
        "className": "dashicons-playlist-audio",
        "title": "playlist audio"
    },
    {
        "categories": [
            "video",
            "playlist",
            "media"
        ],
        "name": "f493",
        "type": "dash",
        "className": "dashicons-playlist-video",
        "title": "playlist video"
    },
    {
        "categories": [
            "play",
            "player",
            "controls",
            "media"
        ],
        "name": "f522",
        "type": "dash",
        "className": "dashicons-controls-play",
        "title": "play"
    },
    {
        "categories": [
            "player",
            "pause",
            "controls",
            "media"
        ],
        "name": "f523",
        "type": "dash",
        "className": "dashicons-controls-pause",
        "title": "pause"
    },
    {
        "categories": [
            "player",
            "forward",
            "controls",
            "media"
        ],
        "name": "f519",
        "type": "dash",
        "className": "dashicons-controls-forward",
        "title": "forward"
    },
    {
        "categories": [
            "player",
            "skip",
            "forward",
            "controls",
            "media"
        ],
        "name": "f517",
        "type": "dash",
        "className": "dashicons-controls-skipforward",
        "title": "skip forward"
    },
    {
        "categories": [
            "player",
            "back",
            "controls",
            "media"
        ],
        "name": "f518",
        "type": "dash",
        "className": "dashicons-controls-back",
        "title": "back"
    },
    {
        "categories": [
            "player",
            "skip",
            "back",
            "controls",
            "media"
        ],
        "name": "f516",
        "type": "dash",
        "className": "dashicons-controls-skipback",
        "title": "skip back"
    },
    {
        "categories": [
            "player",
            "repeat",
            "controls",
            "media"
        ],
        "name": "f515",
        "type": "dash",
        "className": "dashicons-controls-repeat",
        "title": "repeat"
    },
    {
        "categories": [
            "player",
            "volume",
            "on",
            "controls",
            "media"
        ],
        "name": "f521",
        "type": "dash",
        "className": "dashicons-controls-volumeon",
        "title": "volume on"
    },
    {
        "categories": [
            "player",
            "volume",
            "off",
            "controls",
            "media"
        ],
        "name": "f520",
        "type": "dash",
        "className": "dashicons-controls-volumeoff",
        "title": "volume off"
    },
    {
        "categories": [
            "crop",
            "image"
        ],
        "name": "f165",
        "type": "dash",
        "className": "dashicons-image-crop",
        "title": "crop"
    },
    {
        "categories": [
            "rotate",
            "image"
        ],
        "name": "f531",
        "type": "dash",
        "className": "dashicons-image-rotate",
        "title": "rotate"
    },
    {
        "categories": [
            "rotate",
            "left",
            "image"
        ],
        "name": "f166",
        "type": "dash",
        "className": "dashicons-image-rotate-left",
        "title": "rotate left"
    },
    {
        "categories": [
            "rotate",
            "right",
            "image"
        ],
        "name": "f167",
        "type": "dash",
        "className": "dashicons-image-rotate-right",
        "title": "rotate right"
    },
    {
        "categories": [
            "flip",
            "vertical",
            "image"
        ],
        "name": "f168",
        "type": "dash",
        "className": "dashicons-image-flip-vertical",
        "title": "flip vertical"
    },
    {
        "categories": [
            "flip",
            "horizontal",
            "image"
        ],
        "name": "f169",
        "type": "dash",
        "className": "dashicons-image-flip-horizontal",
        "title": "flip horizontal"
    },
    {
        "categories": [
            "filter",
            "image"
        ],
        "name": "f533",
        "type": "dash",
        "className": "dashicons-image-filter",
        "title": "filter"
    },
    {
        "categories": [
            "undo",
            "image"
        ],
        "name": "f171",
        "type": "dash",
        "className": "dashicons-undo",
        "title": "undo"
    },
    {
        "categories": [
            "redo",
            "image"
        ],
        "name": "f172",
        "type": "dash",
        "className": "dashicons-redo",
        "title": "redo"
    },
    {
        "categories": [
            "database",
            "add"
        ],
        "name": "f170",
        "type": "dash",
        "className": "dashicons-database-add",
        "title": "database add"
    },
    {
        "categories": [
            "database"
        ],
        "name": "f17e",
        "type": "dash",
        "className": "dashicons-database",
        "title": "database"
    },
    {
        "categories": [
            "database",
            "export"
        ],
        "name": "f17a",
        "type": "dash",
        "className": "dashicons-database-export",
        "title": "database export"
    },
    {
        "categories": [
            "database",
            "import"
        ],
        "name": "f17b",
        "type": "dash",
        "className": "dashicons-database-import",
        "title": "database import"
    },
    {
        "categories": [
            "database",
            "remove"
        ],
        "name": "f17c",
        "type": "dash",
        "className": "dashicons-database-remove",
        "title": "database remove"
    },
    {
        "categories": [
            "database",
            "view"
        ],
        "name": "f17d",
        "type": "dash",
        "className": "dashicons-database-view",
        "title": "database view"
    },
    {
        "categories": [
            "align",
            "full",
            "width",
            "block"
        ],
        "name": "f114",
        "type": "dash",
        "className": "dashicons-align-full-width",
        "title": "align full width"
    },
    {
        "categories": [
            "align",
            "pull",
            "left",
            "block"
        ],
        "name": "f10a",
        "type": "dash",
        "className": "dashicons-align-pull-left",
        "title": "align pull left"
    },
    {
        "categories": [
            "align",
            "pull",
            "right",
            "block"
        ],
        "name": "f10b",
        "type": "dash",
        "className": "dashicons-align-pull-right",
        "title": "align pull right"
    },
    {
        "categories": [
            "align",
            "wide",
            "block"
        ],
        "name": "f11b",
        "type": "dash",
        "className": "dashicons-align-wide",
        "title": "align wide"
    },
    {
        "categories": [
            "block",
            "default"
        ],
        "name": "f12b",
        "type": "dash",
        "className": "dashicons-block-default",
        "title": "block default"
    },
    {
        "categories": [
            "button",
            "block"
        ],
        "name": "f11a",
        "type": "dash",
        "className": "dashicons-button",
        "title": "button"
    },
    {
        "categories": [
            "cloud",
            "saved",
            "block"
        ],
        "name": "f137",
        "type": "dash",
        "className": "dashicons-cloud-saved",
        "title": "cloud saved"
    },
    {
        "categories": [
            "cloud",
            "upload",
            "block"
        ],
        "name": "f13b",
        "type": "dash",
        "className": "dashicons-cloud-upload",
        "title": "cloud upload"
    },
    {
        "categories": [
            "columns",
            "block"
        ],
        "name": "f13c",
        "type": "dash",
        "className": "dashicons-columns",
        "title": "columns"
    },
    {
        "categories": [
            "cover",
            "image",
            "block"
        ],
        "name": "f13d",
        "type": "dash",
        "className": "dashicons-cover-image",
        "title": "cover image"
    },
    {
        "categories": [
            "ellipsis",
            "block"
        ],
        "name": "f11c",
        "type": "dash",
        "className": "dashicons-ellipsis",
        "title": "ellipsis"
    },
    {
        "categories": [
            "embed",
            "audio",
            "block"
        ],
        "name": "f13e",
        "type": "dash",
        "className": "dashicons-embed-audio",
        "title": "embed audio"
    },
    {
        "categories": [
            "embed",
            "generic",
            "block"
        ],
        "name": "f13f",
        "type": "dash",
        "className": "dashicons-embed-generic",
        "title": "embed generic"
    },
    {
        "categories": [
            "embed",
            "photo",
            "block"
        ],
        "name": "f144",
        "type": "dash",
        "className": "dashicons-embed-photo",
        "title": "embed photo"
    },
    {
        "categories": [
            "embed",
            "post",
            "block"
        ],
        "name": "f146",
        "type": "dash",
        "className": "dashicons-embed-post",
        "title": "embed post"
    },
    {
        "categories": [
            "embed",
            "video",
            "block"
        ],
        "name": "f149",
        "type": "dash",
        "className": "dashicons-embed-video",
        "title": "embed video"
    },
    {
        "categories": [
            "exit",
            "block"
        ],
        "name": "f14a",
        "type": "dash",
        "className": "dashicons-exit",
        "title": "exit"
    },
    {
        "categories": [
            "heading",
            "block"
        ],
        "name": "f10e",
        "type": "dash",
        "className": "dashicons-heading",
        "title": "heading"
    },
    {
        "categories": [
            "html",
            "block"
        ],
        "name": "f14b",
        "type": "dash",
        "className": "dashicons-html",
        "title": "HTML"
    },
    {
        "categories": [
            "info",
            "outline",
            "block"
        ],
        "name": "f14c",
        "type": "dash",
        "className": "dashicons-info-outline",
        "title": "info outline"
    },
    {
        "categories": [
            "insert",
            "block"
        ],
        "name": "f10f",
        "type": "dash",
        "className": "dashicons-insert",
        "title": "insert"
    },
    {
        "categories": [
            "insert",
            "after",
            "block"
        ],
        "name": "f14d",
        "type": "dash",
        "className": "dashicons-insert-after",
        "title": "insert after"
    },
    {
        "categories": [
            "insert",
            "before",
            "block"
        ],
        "name": "f14e",
        "type": "dash",
        "className": "dashicons-insert-before",
        "title": "insert before"
    },
    {
        "categories": [
            "remove",
            "block"
        ],
        "name": "f14f",
        "type": "dash",
        "className": "dashicons-remove",
        "title": "remove"
    },
    {
        "categories": [
            "saved",
            "block"
        ],
        "name": "f15e",
        "type": "dash",
        "className": "dashicons-saved",
        "title": "saved"
    },
    {
        "categories": [
            "shortcode",
            "block"
        ],
        "name": "f150",
        "type": "dash",
        "className": "dashicons-shortcode",
        "title": "shortcode"
    },
    {
        "categories": [
            "table",
            "col",
            "after",
            "block"
        ],
        "name": "f151",
        "type": "dash",
        "className": "dashicons-table-col-after",
        "title": "table col after"
    },
    {
        "categories": [
            "table",
            "col",
            "before",
            "block"
        ],
        "name": "f152",
        "type": "dash",
        "className": "dashicons-table-col-before",
        "title": "table col before"
    },
    {
        "categories": [
            "table",
            "col",
            "delete",
            "block"
        ],
        "name": "f15a",
        "type": "dash",
        "className": "dashicons-table-col-delete",
        "title": "table col delete"
    },
    {
        "categories": [
            "table",
            "row",
            "after",
            "block"
        ],
        "name": "f15b",
        "type": "dash",
        "className": "dashicons-table-row-after",
        "title": "table row after"
    },
    {
        "categories": [
            "table",
            "row",
            "before",
            "block"
        ],
        "name": "f15c",
        "type": "dash",
        "className": "dashicons-table-row-before",
        "title": "table row before"
    },
    {
        "categories": [
            "table",
            "row",
            "delete",
            "block"
        ],
        "name": "f15d",
        "type": "dash",
        "className": "dashicons-table-row-delete",
        "title": "table row delete"
    },
    {
        "categories": [
            "bold",
            "editor",
            "tinymce"
        ],
        "name": "f200",
        "type": "dash",
        "className": "dashicons-editor-bold",
        "title": "bold"
    },
    {
        "categories": [
            "italic",
            "editor",
            "tinymce"
        ],
        "name": "f201",
        "type": "dash",
        "className": "dashicons-editor-italic",
        "title": "italic"
    },
    {
        "categories": [
            "ul",
            "unordered",
            "list",
            "editor",
            "tinymce"
        ],
        "name": "f203",
        "type": "dash",
        "className": "dashicons-editor-ul",
        "title": "unordered list"
    },
    {
        "categories": [
            "ol",
            "ordered",
            "listeditor",
            "tinymce"
        ],
        "name": "f204",
        "type": "dash",
        "className": "dashicons-editor-ol",
        "title": "ordered list"
    },
    {
        "categories": [
            "ol",
            "ordered",
            "list",
            "rtl",
            "right",
            "left",
            "editor",
            "tinymce"
        ],
        "name": "f12c",
        "type": "dash",
        "className": "dashicons-editor-ol-rtl",
        "title": "ordered list RTL"
    },
    {
        "categories": [
            "quote",
            "editor",
            "tinymce"
        ],
        "name": "f205",
        "type": "dash",
        "className": "dashicons-editor-quote",
        "title": "quote"
    },
    {
        "categories": [
            "align",
            "left",
            "editor",
            "tinymce"
        ],
        "name": "f206",
        "type": "dash",
        "className": "dashicons-editor-alignleft",
        "title": "align left"
    },
    {
        "categories": [
            "align",
            "center",
            "editor",
            "tinymce"
        ],
        "name": "f207",
        "type": "dash",
        "className": "dashicons-editor-aligncenter",
        "title": "align center"
    },
    {
        "categories": [
            "align",
            "right",
            "editor",
            "tinymce"
        ],
        "name": "f208",
        "type": "dash",
        "className": "dashicons-editor-alignright",
        "title": "align right"
    },
    {
        "categories": [
            "insert",
            "more",
            "editor",
            "tinymce"
        ],
        "name": "f209",
        "type": "dash",
        "className": "dashicons-editor-insertmore",
        "title": "insert more"
    },
    {
        "categories": [
            "spellcheck",
            "editor",
            "tinymce"
        ],
        "name": "f210",
        "type": "dash",
        "className": "dashicons-editor-spellcheck",
        "title": "spellcheck"
    },
    {
        "categories": [
            "expand",
            "editor",
            "tinymce"
        ],
        "name": "f211",
        "type": "dash",
        "className": "dashicons-editor-expand",
        "title": "expand"
    },
    {
        "categories": [
            "contract",
            "editor",
            "tinymce"
        ],
        "name": "f506",
        "type": "dash",
        "className": "dashicons-editor-contract",
        "title": "contract"
    },
    {
        "categories": [
            "kitchen",
            "sink",
            "editor",
            "tinymce"
        ],
        "name": "f212",
        "type": "dash",
        "className": "dashicons-editor-kitchensink",
        "title": "kitchen sink"
    },
    {
        "categories": [
            "underline",
            "editor",
            "tinymce"
        ],
        "name": "f213",
        "type": "dash",
        "className": "dashicons-editor-underline",
        "title": "underline"
    },
    {
        "categories": [
            "justify",
            "editor",
            "tinymce"
        ],
        "name": "f214",
        "type": "dash",
        "className": "dashicons-editor-justify",
        "title": "justify"
    },
    {
        "categories": [
            "textcolor",
            "editor",
            "text",
            "color",
            "tinymce"
        ],
        "name": "f215",
        "type": "dash",
        "className": "dashicons-editor-textcolor",
        "title": "text color"
    },
    {
        "categories": [
            "paste",
            "editor",
            "word",
            "tinymce"
        ],
        "name": "f216",
        "type": "dash",
        "className": "dashicons-editor-paste-word",
        "title": "paste word"
    },
    {
        "categories": [
            "paste",
            "editor",
            "text",
            "tinymce"
        ],
        "name": "f217",
        "type": "dash",
        "className": "dashicons-editor-paste-text",
        "title": "paste text"
    },
    {
        "categories": [
            "remove",
            "formatting",
            "editor",
            "tinymce"
        ],
        "name": "f218",
        "type": "dash",
        "className": "dashicons-editor-removeformatting",
        "title": "remove formatting"
    },
    {
        "categories": [
            "video",
            "editor",
            "tinymce"
        ],
        "name": "f219",
        "type": "dash",
        "className": "dashicons-editor-video",
        "title": "video"
    },
    {
        "categories": [
            "custom",
            "character",
            "editor",
            "tinymce"
        ],
        "name": "f220",
        "type": "dash",
        "className": "dashicons-editor-customchar",
        "title": "custom character"
    },
    {
        "categories": [
            "outdent",
            "editor",
            "tinymce"
        ],
        "name": "f221",
        "type": "dash",
        "className": "dashicons-editor-outdent",
        "title": "outdent"
    },
    {
        "categories": [
            "indent",
            "editor",
            "tinymce"
        ],
        "name": "f222",
        "type": "dash",
        "className": "dashicons-editor-indent",
        "title": "indent"
    },
    {
        "categories": [
            "help",
            "editor",
            "tinymce"
        ],
        "name": "f223",
        "type": "dash",
        "className": "dashicons-editor-help",
        "title": "help"
    },
    {
        "categories": [
            "strikethrough",
            "editor",
            "tinymce"
        ],
        "name": "f224",
        "type": "dash",
        "className": "dashicons-editor-strikethrough",
        "title": "strikethrough"
    },
    {
        "categories": [
            "unlink",
            "editor",
            "tinymce"
        ],
        "name": "f225",
        "type": "dash",
        "className": "dashicons-editor-unlink",
        "title": "unlink"
    },
    {
        "categories": [
            "rtl",
            "right",
            "left",
            "editor",
            "tinymce"
        ],
        "name": "f320",
        "type": "dash",
        "className": "dashicons-editor-rtl",
        "title": "RTL"
    },
    {
        "categories": [
            "ltr",
            "left",
            "right",
            "editor",
            "tinymce"
        ],
        "name": "f10c",
        "type": "dash",
        "className": "dashicons-editor-ltr",
        "title": "LTR"
    },
    {
        "categories": [
            "break",
            "editor",
            "tinymce"
        ],
        "name": "f474",
        "type": "dash",
        "className": "dashicons-editor-break",
        "title": "break"
    },
    {
        "categories": [
            "code",
            "editor",
            "tinymce"
        ],
        "name": "f475",
        "type": "dash",
        "className": "dashicons-editor-code",
        "title": "code"
    },
    {
        "categories": [
            "paragraph",
            "editor",
            "tinymce"
        ],
        "name": "f476",
        "type": "dash",
        "className": "dashicons-editor-paragraph",
        "title": "paragraph"
    },
    {
        "categories": [
            "table",
            "editor",
            "tinymce"
        ],
        "name": "f535",
        "type": "dash",
        "className": "dashicons-editor-table",
        "title": "table"
    },
    {
        "categories": [
            "align",
            "left"
        ],
        "name": "f135",
        "type": "dash",
        "className": "dashicons-align-left",
        "title": "align left"
    },
    {
        "categories": [
            "align",
            "right"
        ],
        "name": "f136",
        "type": "dash",
        "className": "dashicons-align-right",
        "title": "align right"
    },
    {
        "categories": [
            "align",
            "center"
        ],
        "name": "f134",
        "type": "dash",
        "className": "dashicons-align-center",
        "title": "align center"
    },
    {
        "categories": [
            "align",
            "none"
        ],
        "name": "f138",
        "type": "dash",
        "className": "dashicons-align-none",
        "title": "align none"
    },
    {
        "categories": [
            "lock"
        ],
        "name": "f160",
        "type": "dash",
        "className": "dashicons-lock",
        "title": "lock"
    },
    {
        "categories": [
            "unlock"
        ],
        "name": "f528",
        "type": "dash",
        "className": "dashicons-unlock",
        "title": "unlock"
    },
    {
        "categories": [
            "calendar"
        ],
        "name": "f145",
        "type": "dash",
        "className": "dashicons-calendar",
        "title": "calendar"
    },
    {
        "categories": [
            "calendar",
            "alt"
        ],
        "name": "f508",
        "type": "dash",
        "className": "dashicons-calendar-alt",
        "title": "calendar (alt)"
    },
    {
        "categories": [
            "visibility"
        ],
        "name": "f177",
        "type": "dash",
        "className": "dashicons-visibility",
        "title": "visibility"
    },
    {
        "categories": [
            "hidden"
        ],
        "name": "f530",
        "type": "dash",
        "className": "dashicons-hidden",
        "title": "hidden"
    },
    {
        "categories": [
            "post",
            "status"
        ],
        "name": "f173",
        "type": "dash",
        "className": "dashicons-post-status",
        "title": "post status"
    },
    {
        "categories": [
            "edit",
            "pencil"
        ],
        "name": "f464",
        "type": "dash",
        "className": "dashicons-edit",
        "title": "edit"
    },
    {
        "categories": [
            "trash",
            "remove",
            "delete"
        ],
        "name": "f182",
        "type": "dash",
        "className": "dashicons-trash",
        "title": "trash"
    },
    {
        "categories": [
            "sticky"
        ],
        "name": "f537",
        "type": "dash",
        "className": "dashicons-sticky",
        "title": "sticky"
    },
    {
        "categories": [
            "external"
        ],
        "name": "f504",
        "type": "dash",
        "className": "dashicons-external",
        "title": "external"
    },
    {
        "categories": [
            "arrow",
            "up"
        ],
        "name": "f142",
        "type": "dash",
        "className": "dashicons-arrow-up",
        "title": "arrow up"
    },
    {
        "categories": [
            "arrow",
            "down"
        ],
        "name": "f140",
        "type": "dash",
        "className": "dashicons-arrow-down",
        "title": "arrow down"
    },
    {
        "categories": [
            "arrow",
            "right"
        ],
        "name": "f139",
        "type": "dash",
        "className": "dashicons-arrow-right",
        "title": "arrow right"
    },
    {
        "categories": [
            "arrow",
            "left"
        ],
        "name": "f141",
        "type": "dash",
        "className": "dashicons-arrow-left",
        "title": "arrow left"
    },
    {
        "categories": [
            "arrow",
            "up",
            "alt"
        ],
        "name": "f342",
        "type": "dash",
        "className": "dashicons-arrow-up-alt",
        "title": "arrow up (alt)"
    },
    {
        "categories": [
            "arrow",
            "down",
            "alt"
        ],
        "name": "f346",
        "type": "dash",
        "className": "dashicons-arrow-down-alt",
        "title": "arrow down (alt)"
    },
    {
        "categories": [
            "arrow",
            "right",
            "alt"
        ],
        "name": "f344",
        "type": "dash",
        "className": "dashicons-arrow-right-alt",
        "title": "arrow right (alt)"
    },
    {
        "categories": [
            "arrow",
            "left",
            "alt"
        ],
        "name": "f340",
        "type": "dash",
        "className": "dashicons-arrow-left-alt",
        "title": "arrow left (alt)"
    },
    {
        "categories": [
            "arrow",
            "up",
            "alt"
        ],
        "name": "f343",
        "type": "dash",
        "className": "dashicons-arrow-up-alt2",
        "title": "arrow up (alt2)"
    },
    {
        "categories": [
            "arrow",
            "down",
            "alt"
        ],
        "name": "f347",
        "type": "dash",
        "className": "dashicons-arrow-down-alt2",
        "title": "arrow down (alt2)"
    },
    {
        "categories": [
            "arrow",
            "right",
            "alt"
        ],
        "name": "f345",
        "type": "dash",
        "className": "dashicons-arrow-right-alt2",
        "title": "arrow right (alt2)"
    },
    {
        "categories": [
            "arrow",
            "left",
            "alt"
        ],
        "name": "f341",
        "type": "dash",
        "className": "dashicons-arrow-left-alt2",
        "title": "arrow left (alt2)"
    },
    {
        "categories": [
            "sort"
        ],
        "name": "f156",
        "type": "dash",
        "className": "dashicons-sort",
        "title": "sort"
    },
    {
        "categories": [
            "left",
            "right"
        ],
        "name": "f229",
        "type": "dash",
        "className": "dashicons-leftright",
        "title": "left right"
    },
    {
        "categories": [
            "randomize",
            "shuffle"
        ],
        "name": "f503",
        "type": "dash",
        "className": "dashicons-randomize",
        "title": "randomize"
    },
    {
        "categories": [
            "list",
            "view"
        ],
        "name": "f163",
        "type": "dash",
        "className": "dashicons-list-view",
        "title": "list view"
    },
    {
        "categories": [
            "excerpt",
            "view"
        ],
        "name": "f164",
        "type": "dash",
        "className": "dashicons-excerpt-view",
        "title": "excerpt view"
    },
    {
        "categories": [
            "grid",
            "view"
        ],
        "name": "f509",
        "type": "dash",
        "className": "dashicons-grid-view",
        "title": "grid view"
    },
    {
        "categories": [
            "move"
        ],
        "name": "f545",
        "type": "dash",
        "className": "dashicons-move",
        "title": "move"
    },
    {
        "categories": [
            "share",
            "social"
        ],
        "name": "f237",
        "type": "dash",
        "className": "dashicons-share",
        "title": "share"
    },
    {
        "categories": [
            "share",
            "alt",
            "social"
        ],
        "name": "f240",
        "type": "dash",
        "className": "dashicons-share-alt",
        "title": "share (alt)"
    },
    {
        "categories": [
            "share",
            "alt",
            "social"
        ],
        "name": "f242",
        "type": "dash",
        "className": "dashicons-share-alt2",
        "title": "share (alt2)"
    },
    {
        "categories": [
            "rss",
            "social"
        ],
        "name": "f303",
        "type": "dash",
        "className": "dashicons-rss",
        "title": "RSS"
    },
    {
        "categories": [
            "email",
            "social"
        ],
        "name": "f465",
        "type": "dash",
        "className": "dashicons-email",
        "title": "email"
    },
    {
        "categories": [
            "email",
            "alt",
            "social"
        ],
        "name": "f466",
        "type": "dash",
        "className": "dashicons-email-alt",
        "title": "email (alt)"
    },
    {
        "categories": [
            "email",
            "alt",
            "social"
        ],
        "name": "f467",
        "type": "dash",
        "className": "dashicons-email-alt2",
        "title": "email (alt2)"
    },
    {
        "categories": [
            "networking",
            "social"
        ],
        "name": "f325",
        "type": "dash",
        "className": "dashicons-networking",
        "title": "networking"
    },
    {
        "categories": [
            "amazon",
            "social"
        ],
        "name": "f162",
        "type": "dash",
        "className": "dashicons-amazon",
        "title": "Amazon"
    },
    {
        "categories": [
            "facebook",
            "social"
        ],
        "name": "f304",
        "type": "dash",
        "className": "dashicons-facebook",
        "title": "Facebook"
    },
    {
        "categories": [
            "facebook",
            "social",
            "alt"
        ],
        "name": "f305",
        "type": "dash",
        "className": "dashicons-facebook-alt",
        "title": "Facebook (alt)"
    },
    {
        "categories": [
            "google",
            "social"
        ],
        "name": "f18b",
        "type": "dash",
        "className": "dashicons-google",
        "title": "Google"
    },
    {
        "categories": [
            "instagram",
            "social"
        ],
        "name": "f12d",
        "type": "dash",
        "className": "dashicons-instagram",
        "title": "Instagram"
    },
    {
        "categories": [
            "linkedin",
            "social"
        ],
        "name": "f18d",
        "type": "dash",
        "className": "dashicons-linkedin",
        "title": "LinkedIn"
    },
    {
        "categories": [
            "pinterest",
            "social"
        ],
        "name": "f192",
        "type": "dash",
        "className": "dashicons-pinterest",
        "title": "Pinterest"
    },
    {
        "categories": [
            "podio",
            "social"
        ],
        "name": "f19c",
        "type": "dash",
        "className": "dashicons-podio",
        "title": "Podio"
    },
    {
        "categories": [
            "reddit",
            "social"
        ],
        "name": "f195",
        "type": "dash",
        "className": "dashicons-reddit",
        "title": "Reddit"
    },
    {
        "categories": [
            "spotify",
            "social"
        ],
        "name": "f196",
        "type": "dash",
        "className": "dashicons-spotify",
        "title": "Spotify"
    },
    {
        "categories": [
            "twitch",
            "social"
        ],
        "name": "f199",
        "type": "dash",
        "className": "dashicons-twitch",
        "title": "Twitch"
    },
    {
        "categories": [
            "twitter",
            "social"
        ],
        "name": "f301",
        "type": "dash",
        "className": "dashicons-twitter",
        "title": "Twitter"
    },
    {
        "categories": [
            "twitter",
            "social",
            "alt"
        ],
        "name": "f302",
        "type": "dash",
        "className": "dashicons-twitter-alt",
        "title": "Twitter (alt)"
    },
    {
        "categories": [
            "whatsapp",
            "social"
        ],
        "name": "f19a",
        "type": "dash",
        "className": "dashicons-whatsapp",
        "title": "WhatsApp"
    },
    {
        "categories": [
            "xing",
            "social"
        ],
        "name": "f19d",
        "type": "dash",
        "className": "dashicons-xing",
        "title": "Xing"
    },
    {
        "categories": [
            "youtube",
            "social"
        ],
        "name": "f19b",
        "type": "dash",
        "className": "dashicons-youtube",
        "title": "YouTube"
    },
    {
        "categories": [
            "hammer",
            "development"
        ],
        "name": "f308",
        "type": "dash",
        "className": "dashicons-hammer",
        "title": "hammer"
    },
    {
        "categories": [
            "art",
            "design"
        ],
        "name": "f309",
        "type": "dash",
        "className": "dashicons-art",
        "title": "art"
    },
    {
        "categories": [
            "migrate",
            "migration"
        ],
        "name": "f310",
        "type": "dash",
        "className": "dashicons-migrate",
        "title": "migrate"
    },
    {
        "categories": [
            "performance"
        ],
        "name": "f311",
        "type": "dash",
        "className": "dashicons-performance",
        "title": "performance"
    },
    {
        "categories": [
            "universal",
            "access",
            "accessibility"
        ],
        "name": "f483",
        "type": "dash",
        "className": "dashicons-universal-access",
        "title": "universal access"
    },
    {
        "categories": [
            "universal",
            "access",
            "accessibility",
            "alt"
        ],
        "name": "f507",
        "type": "dash",
        "className": "dashicons-universal-access-alt",
        "title": "universal access (alt)"
    },
    {
        "categories": [
            "tickets"
        ],
        "name": "f486",
        "type": "dash",
        "className": "dashicons-tickets",
        "title": "tickets"
    },
    {
        "categories": [
            "nametag"
        ],
        "name": "f484",
        "type": "dash",
        "className": "dashicons-nametag",
        "title": "nametag"
    },
    {
        "categories": [
            "clipboard"
        ],
        "name": "f481",
        "type": "dash",
        "className": "dashicons-clipboard",
        "title": "clipboard"
    },
    {
        "categories": [
            "heart"
        ],
        "name": "f487",
        "type": "dash",
        "className": "dashicons-heart",
        "title": "heart"
    },
    {
        "categories": [
            "megaphone"
        ],
        "name": "f488",
        "type": "dash",
        "className": "dashicons-megaphone",
        "title": "megaphone"
    },
    {
        "categories": [
            "schedule"
        ],
        "name": "f489",
        "type": "dash",
        "className": "dashicons-schedule",
        "title": "schedule"
    },
    {
        "categories": [
            "Tide"
        ],
        "name": "f10d",
        "type": "dash",
        "className": "dashicons-tide",
        "title": "Tide"
    },
    {
        "categories": [
            "REST",
            "API"
        ],
        "name": "f124",
        "type": "dash",
        "className": "dashicons-rest-api",
        "title": "REST API"
    },
    {
        "categories": [
            "code",
            "standards"
        ],
        "name": "f13a",
        "type": "dash",
        "className": "dashicons-code-standards",
        "title": "code standards"
    },
    {
        "categories": [
            "activity",
            "buddicons"
        ],
        "name": "f452",
        "type": "dash",
        "className": "dashicons-buddicons-activity",
        "title": "activity"
    },
    {
        "categories": [
            "bbPress",
            "buddicons"
        ],
        "name": "f477",
        "type": "dash",
        "className": "dashicons-buddicons-bbpress-logo",
        "title": "bbPress"
    },
    {
        "categories": [
            "BuddyPress",
            "buddicons"
        ],
        "name": "f448",
        "type": "dash",
        "className": "dashicons-buddicons-buddypress-logo",
        "title": "BuddyPress"
    },
    {
        "categories": [
            "community",
            "buddicons"
        ],
        "name": "f453",
        "type": "dash",
        "className": "dashicons-buddicons-community",
        "title": "community"
    },
    {
        "categories": [
            "forums",
            "buddicons"
        ],
        "name": "f449",
        "type": "dash",
        "className": "dashicons-buddicons-forums",
        "title": "forums"
    },
    {
        "categories": [
            "friends",
            "buddicons"
        ],
        "name": "f454",
        "type": "dash",
        "className": "dashicons-buddicons-friends",
        "title": "friends"
    },
    {
        "categories": [
            "groups",
            "buddicons"
        ],
        "name": "f456",
        "type": "dash",
        "className": "dashicons-buddicons-groups",
        "title": "groups"
    },
    {
        "categories": [
            "private",
            "message",
            "buddicons",
            "pm"
        ],
        "name": "f457",
        "type": "dash",
        "className": "dashicons-buddicons-pm",
        "title": "pm"
    },
    {
        "categories": [
            "replies",
            "buddicons"
        ],
        "name": "f451",
        "type": "dash",
        "className": "dashicons-buddicons-replies",
        "title": "replies"
    },
    {
        "categories": [
            "topics",
            "buddicons"
        ],
        "name": "f450",
        "type": "dash",
        "className": "dashicons-buddicons-topics",
        "title": "topics"
    },
    {
        "categories": [
            "tracking",
            "buddicons"
        ],
        "name": "f455",
        "type": "dash",
        "className": "dashicons-buddicons-tracking",
        "title": "tracking"
    },
    {
        "categories": [
            "WordPress"
        ],
        "name": "f120",
        "type": "dash",
        "className": "dashicons-wordpress",
        "title": "WordPress"
    },
    {
        "categories": [
            "WordPress",
            "alt"
        ],
        "name": "f324",
        "type": "dash",
        "className": "dashicons-wordpress-alt",
        "title": "WordPress (alt)"
    },
    {
        "categories": [
            "Pressthis"
        ],
        "name": "f157",
        "type": "dash",
        "className": "dashicons-pressthis",
        "title": "Pressthis"
    },
    {
        "categories": [
            "update"
        ],
        "name": "f463",
        "type": "dash",
        "className": "dashicons-update",
        "title": "update"
    },
    {
        "categories": [
            "update",
            "alt"
        ],
        "name": "f113",
        "type": "dash",
        "className": "dashicons-update-alt",
        "title": "update (alt)"
    },
    {
        "categories": [
            "screenoptions"
        ],
        "name": "f180",
        "type": "dash",
        "className": "dashicons-screenoptions",
        "title": "screen options"
    },
    {
        "categories": [
            "info"
        ],
        "name": "f348",
        "type": "dash",
        "className": "dashicons-info",
        "title": "info"
    },
    {
        "categories": [
            "cart",
            "shopping"
        ],
        "name": "f174",
        "type": "dash",
        "className": "dashicons-cart",
        "title": "cart"
    },
    {
        "categories": [
            "feedback",
            "form"
        ],
        "name": "f175",
        "type": "dash",
        "className": "dashicons-feedback",
        "title": "feedback"
    },
    {
        "categories": [
            "cloud"
        ],
        "name": "f176",
        "type": "dash",
        "className": "dashicons-cloud",
        "title": "cloud"
    },
    {
        "categories": [
            "translation",
            "language"
        ],
        "name": "f326",
        "type": "dash",
        "className": "dashicons-translation",
        "title": "translation"
    },
    {
        "categories": [
            "tag",
            "taxonomy"
        ],
        "name": "f323",
        "type": "dash",
        "className": "dashicons-tag",
        "title": "tag"
    },
    {
        "categories": [
            "category",
            "taxonomy"
        ],
        "name": "f318",
        "type": "dash",
        "className": "dashicons-category",
        "title": "category"
    },
    {
        "categories": [
            "archive",
            "widget"
        ],
        "name": "f480",
        "type": "dash",
        "className": "dashicons-archive",
        "title": "archive"
    },
    {
        "categories": [
            "tagcloud",
            "widget"
        ],
        "name": "f479",
        "type": "dash",
        "className": "dashicons-tagcloud",
        "title": "tagcloud"
    },
    {
        "categories": [
            "text",
            "widget"
        ],
        "name": "f478",
        "type": "dash",
        "className": "dashicons-text",
        "title": "text"
    },
    {
        "categories": [
            "bell",
            "notifications"
        ],
        "name": "f16d",
        "type": "dash",
        "className": "dashicons-bell",
        "title": "bell"
    },
    {
        "categories": [
            "yes",
            "check",
            "checkmark",
            "notifications"
        ],
        "name": "f147",
        "type": "dash",
        "className": "dashicons-yes",
        "title": "yes"
    },
    {
        "categories": [
            "yes",
            "check",
            "checkmark",
            "alt",
            "notifications"
        ],
        "name": "f12a",
        "type": "dash",
        "className": "dashicons-yes-alt",
        "title": "yes (alt)"
    },
    {
        "categories": [
            "no",
            "x",
            "notifications"
        ],
        "name": "f158",
        "type": "dash",
        "className": "dashicons-no",
        "title": "no"
    },
    {
        "categories": [
            "no",
            "x",
            "alt",
            "notifications"
        ],
        "name": "f335",
        "type": "dash",
        "className": "dashicons-no-alt",
        "title": "no (alt)"
    },
    {
        "categories": [
            "plus",
            "add",
            "increase",
            "notifications"
        ],
        "name": "f132",
        "type": "dash",
        "className": "dashicons-plus",
        "title": "plus"
    },
    {
        "categories": [
            "plus",
            "add",
            "increase",
            "alt",
            "notifications"
        ],
        "name": "f502",
        "type": "dash",
        "className": "dashicons-plus-alt",
        "title": "plus (alt)"
    },
    {
        "categories": [
            "plus",
            "add",
            "increase",
            "alt",
            "notifications"
        ],
        "name": "f543",
        "type": "dash",
        "className": "dashicons-plus-alt2",
        "title": "plus (alt2)"
    },
    {
        "categories": [
            "minus",
            "decrease",
            "notifications"
        ],
        "name": "f460",
        "type": "dash",
        "className": "dashicons-minus",
        "title": "minus"
    },
    {
        "categories": [
            "dismiss",
            "notifications"
        ],
        "name": "f153",
        "type": "dash",
        "className": "dashicons-dismiss",
        "title": "dismiss"
    },
    {
        "categories": [
            "marker",
            "notifications"
        ],
        "name": "f159",
        "type": "dash",
        "className": "dashicons-marker",
        "title": "marker"
    },
    {
        "categories": [
            "filled",
            "star",
            "notifications"
        ],
        "name": "f155",
        "type": "dash",
        "className": "dashicons-star-filled",
        "title": "star filled"
    },
    {
        "categories": [
            "half",
            "star",
            "notifications"
        ],
        "name": "f459",
        "type": "dash",
        "className": "dashicons-star-half",
        "title": "star half"
    },
    {
        "categories": [
            "empty",
            "star",
            "notifications"
        ],
        "name": "f154",
        "type": "dash",
        "className": "dashicons-star-empty",
        "title": "star empty"
    },
    {
        "categories": [
            "flag",
            "notifications"
        ],
        "name": "f227",
        "type": "dash",
        "className": "dashicons-flag",
        "title": "flag"
    },
    {
        "categories": [
            "warning",
            "notifications"
        ],
        "name": "f534",
        "type": "dash",
        "className": "dashicons-warning",
        "title": "warning"
    },
    {
        "categories": [
            "location",
            "pin"
        ],
        "name": "f230",
        "type": "dash",
        "className": "dashicons-location",
        "title": "location"
    },
    {
        "categories": [
            "location",
            "alt"
        ],
        "name": "f231",
        "type": "dash",
        "className": "dashicons-location-alt",
        "title": "location (alt)"
    },
    {
        "categories": [
            "vault",
            "safe"
        ],
        "name": "f178",
        "type": "dash",
        "className": "dashicons-vault",
        "title": "vault"
    },
    {
        "categories": [
            "shield"
        ],
        "name": "f332",
        "type": "dash",
        "className": "dashicons-shield",
        "title": "shield"
    },
    {
        "categories": [
            "shield",
            "alt"
        ],
        "name": "f334",
        "type": "dash",
        "className": "dashicons-shield-alt",
        "title": "shield (alt)"
    },
    {
        "categories": [
            "sos",
            "help"
        ],
        "name": "f468",
        "type": "dash",
        "className": "dashicons-sos",
        "title": "sos"
    },
    {
        "categories": [
            "search"
        ],
        "name": "f179",
        "type": "dash",
        "className": "dashicons-search",
        "title": "search"
    },
    {
        "categories": [
            "slides"
        ],
        "name": "f181",
        "type": "dash",
        "className": "dashicons-slides",
        "title": "slides"
    },
    {
        "categories": [
            "text",
            "page"
        ],
        "name": "f121",
        "type": "dash",
        "className": "dashicons-text-page",
        "title": "text page"
    },
    {
        "categories": [
            "analytics"
        ],
        "name": "f183",
        "type": "dash",
        "className": "dashicons-analytics",
        "title": "analytics"
    },
    {
        "categories": [
            "pie",
            "chart"
        ],
        "name": "f184",
        "type": "dash",
        "className": "dashicons-chart-pie",
        "title": "chart pie"
    },
    {
        "categories": [
            "bar",
            "chart"
        ],
        "name": "f185",
        "type": "dash",
        "className": "dashicons-chart-bar",
        "title": "chart bar"
    },
    {
        "categories": [
            "line",
            "chart"
        ],
        "name": "f238",
        "type": "dash",
        "className": "dashicons-chart-line",
        "title": "chart line"
    },
    {
        "categories": [
            "area",
            "chart"
        ],
        "name": "f239",
        "type": "dash",
        "className": "dashicons-chart-area",
        "title": "chart area"
    },
    {
        "categories": [
            "groups"
        ],
        "name": "f307",
        "type": "dash",
        "className": "dashicons-groups",
        "title": "groups"
    },
    {
        "categories": [
            "businessman"
        ],
        "name": "f338",
        "type": "dash",
        "className": "dashicons-businessman",
        "title": "businessman"
    },
    {
        "categories": [
            "businesswoman"
        ],
        "name": "f12f",
        "type": "dash",
        "className": "dashicons-businesswoman",
        "title": "businesswoman"
    },
    {
        "categories": [
            "businessperson"
        ],
        "name": "f12e",
        "type": "dash",
        "className": "dashicons-businessperson",
        "title": "businessperson"
    },
    {
        "categories": [
            "id"
        ],
        "name": "f336",
        "type": "dash",
        "className": "dashicons-id",
        "title": "id"
    },
    {
        "categories": [
            "id",
            "alt"
        ],
        "name": "f337",
        "type": "dash",
        "className": "dashicons-id-alt",
        "title": "id (alt)"
    },
    {
        "categories": [
            "products"
        ],
        "name": "f312",
        "type": "dash",
        "className": "dashicons-products",
        "title": "products"
    },
    {
        "categories": [
            "awards"
        ],
        "name": "f313",
        "type": "dash",
        "className": "dashicons-awards",
        "title": "awards"
    },
    {
        "categories": [
            "forms"
        ],
        "name": "f314",
        "type": "dash",
        "className": "dashicons-forms",
        "title": "forms"
    },
    {
        "categories": [
            "testimonial"
        ],
        "name": "f473",
        "type": "dash",
        "className": "dashicons-testimonial",
        "title": "testimonial"
    },
    {
        "categories": [
            "portfolio"
        ],
        "name": "f322",
        "type": "dash",
        "className": "dashicons-portfolio",
        "title": "portfolio"
    },
    {
        "categories": [
            "book"
        ],
        "name": "f330",
        "type": "dash",
        "className": "dashicons-book",
        "title": "book"
    },
    {
        "categories": [
            "book",
            "alt"
        ],
        "name": "f331",
        "type": "dash",
        "className": "dashicons-book-alt",
        "title": "book (alt)"
    },
    {
        "categories": [
            "download"
        ],
        "name": "f316",
        "type": "dash",
        "className": "dashicons-download",
        "title": "download"
    },
    {
        "categories": [
            "upload"
        ],
        "name": "f317",
        "type": "dash",
        "className": "dashicons-upload",
        "title": "upload"
    },
    {
        "categories": [
            "backup"
        ],
        "name": "f321",
        "type": "dash",
        "className": "dashicons-backup",
        "title": "backup"
    },
    {
        "categories": [
            "clock"
        ],
        "name": "f469",
        "type": "dash",
        "className": "dashicons-clock",
        "title": "clock"
    },
    {
        "categories": [
            "lightbulb"
        ],
        "name": "f339",
        "type": "dash",
        "className": "dashicons-lightbulb",
        "title": "lightbulb"
    },
    {
        "categories": [
            "microphone",
            "mic"
        ],
        "name": "f482",
        "type": "dash",
        "className": "dashicons-microphone",
        "title": "microphone"
    },
    {
        "categories": [
            "desktop",
            "monitor"
        ],
        "name": "f472",
        "type": "dash",
        "className": "dashicons-desktop",
        "title": "desktop"
    },
    {
        "categories": [
            "laptop"
        ],
        "name": "f547",
        "type": "dash",
        "className": "dashicons-laptop",
        "title": "laptop"
    },
    {
        "categories": [
            "tablet",
            "ipad"
        ],
        "name": "f471",
        "type": "dash",
        "className": "dashicons-tablet",
        "title": "tablet"
    },
    {
        "categories": [
            "smartphone",
            "iphone"
        ],
        "name": "f470",
        "type": "dash",
        "className": "dashicons-smartphone",
        "title": "smartphone"
    },
    {
        "categories": [
            "phone"
        ],
        "name": "f525",
        "type": "dash",
        "className": "dashicons-phone",
        "title": "phone"
    },
    {
        "categories": [
            "index",
            "card"
        ],
        "name": "f510",
        "type": "dash",
        "className": "dashicons-index-card",
        "title": "index card"
    },
    {
        "categories": [
            "carrot",
            "food",
            "vendor"
        ],
        "name": "f511",
        "type": "dash",
        "className": "dashicons-carrot",
        "title": "carrot"
    },
    {
        "categories": [
            "building"
        ],
        "name": "f512",
        "type": "dash",
        "className": "dashicons-building",
        "title": "building"
    },
    {
        "categories": [
            "store"
        ],
        "name": "f513",
        "type": "dash",
        "className": "dashicons-store",
        "title": "store"
    },
    {
        "categories": [
            "album"
        ],
        "name": "f514",
        "type": "dash",
        "className": "dashicons-album",
        "title": "album"
    },
    {
        "categories": [
            "palm",
            "tree"
        ],
        "name": "f527",
        "type": "dash",
        "className": "dashicons-palmtree",
        "title": "palm tree"
    },
    {
        "categories": [
            "tickets",
            "alt"
        ],
        "name": "f524",
        "type": "dash",
        "className": "dashicons-tickets-alt",
        "title": "tickets (alt)"
    },
    {
        "categories": [
            "money"
        ],
        "name": "f526",
        "type": "dash",
        "className": "dashicons-money",
        "title": "money"
    },
    {
        "categories": [
            "money",
            "alt"
        ],
        "name": "f18e",
        "type": "dash",
        "className": "dashicons-money-alt",
        "title": "money (alt)"
    },
    {
        "categories": [
            "smiley",
            "smile"
        ],
        "name": "f328",
        "type": "dash",
        "className": "dashicons-smiley",
        "title": "smiley"
    },
    {
        "categories": [
            "thumbs",
            "up"
        ],
        "name": "f529",
        "type": "dash",
        "className": "dashicons-thumbs-up",
        "title": "thumbs up"
    },
    {
        "categories": [
            "thumbs",
            "down"
        ],
        "name": "f542",
        "type": "dash",
        "className": "dashicons-thumbs-down",
        "title": "thumbs down"
    },
    {
        "categories": [
            "layout"
        ],
        "name": "f538",
        "type": "dash",
        "className": "dashicons-layout",
        "title": "layout"
    },
    {
        "categories": [
            "paperclip"
        ],
        "name": "f546",
        "type": "dash",
        "className": "dashicons-paperclip",
        "title": "paperclip"
    },
    {
        "categories": [
            "color",
            "picker"
        ],
        "name": "f131",
        "type": "dash",
        "className": "dashicons-color-picker",
        "title": "color picker"
    },
    {
        "categories": [
            "edit",
            "large"
        ],
        "name": "f327",
        "type": "dash",
        "className": "dashicons-edit-large",
        "title": "edit large"
    },
    {
        "categories": [
            "edit",
            "page"
        ],
        "name": "f186",
        "type": "dash",
        "className": "dashicons-edit-page",
        "title": "edit page"
    },
    {
        "categories": [
            "airplane"
        ],
        "name": "f15f",
        "type": "dash",
        "className": "dashicons-airplane",
        "title": "airplane"
    },
    {
        "categories": [
            "bank"
        ],
        "name": "f16a",
        "type": "dash",
        "className": "dashicons-bank",
        "title": "bank"
    },
    {
        "categories": [
            "beer"
        ],
        "name": "f16c",
        "type": "dash",
        "className": "dashicons-beer",
        "title": "beer"
    },
    {
        "categories": [
            "calculator"
        ],
        "name": "f16e",
        "type": "dash",
        "className": "dashicons-calculator",
        "title": "calculator"
    },
    {
        "categories": [
            "car"
        ],
        "name": "f16b",
        "type": "dash",
        "className": "dashicons-car",
        "title": "car"
    },
    {
        "categories": [
            "coffee"
        ],
        "name": "f16f",
        "type": "dash",
        "className": "dashicons-coffee",
        "title": "coffee"
    },
    {
        "categories": [
            "drumstick"
        ],
        "name": "f17f",
        "type": "dash",
        "className": "dashicons-drumstick",
        "title": "drumstick"
    },
    {
        "categories": [
            "food"
        ],
        "name": "f187",
        "type": "dash",
        "className": "dashicons-food",
        "title": "food"
    },
    {
        "categories": [
            "fullscreen",
            "alt"
        ],
        "name": "f188",
        "type": "dash",
        "className": "dashicons-fullscreen-alt",
        "title": "fullscreen (alt)"
    },
    {
        "categories": [
            "fullscreen",
            "exit",
            "alt"
        ],
        "name": "f189",
        "type": "dash",
        "className": "dashicons-fullscreen-exit-alt",
        "title": "fullscreen exit (alt)"
    },
    {
        "categories": [
            "games"
        ],
        "name": "f18a",
        "type": "dash",
        "className": "dashicons-games",
        "title": "games"
    },
    {
        "categories": [
            "hourglass"
        ],
        "name": "f18c",
        "type": "dash",
        "className": "dashicons-hourglass",
        "title": "hourglass"
    },
    {
        "categories": [
            "open",
            "folder"
        ],
        "name": "f18f",
        "type": "dash",
        "className": "dashicons-open-folder",
        "title": "open folder"
    },
    {
        "categories": [
            "pdf"
        ],
        "name": "f190",
        "type": "dash",
        "className": "dashicons-pdf",
        "title": "PDF"
    },
    {
        "categories": [
            "pets"
        ],
        "name": "f191",
        "type": "dash",
        "className": "dashicons-pets",
        "title": "pets"
    },
    {
        "categories": [
            "printer"
        ],
        "name": "f193",
        "type": "dash",
        "className": "dashicons-printer",
        "title": "printer"
    },
    {
        "categories": [
            "privacy"
        ],
        "name": "f194",
        "type": "dash",
        "className": "dashicons-privacy",
        "title": "privacy"
    },
    {
        "categories": [
            "superhero"
        ],
        "name": "f198",
        "type": "dash",
        "className": "dashicons-superhero",
        "title": "superhero"
    },
    {
        "categories": [
            "superhero",
            "alt"
        ],
        "name": "f197",
        "type": "dash",
        "className": "dashicons-superhero-alt",
        "title": "superhero (alt)"
    },
    {
        "name": "fa-AccessibilityAddressCard",
        "title": "Address Card",
        "className": "fa-solid fa-address-card",
        "type": "sui",
        "categories": [
            "accessibility",
            "alphabet",
            "communication",
            "users+people"
        ]
    },
    {
        "name": "fa-AccessibilityAudioDescription",
        "title": "Audio Description",
        "className": "fa-solid fa-audio-description",
        "type": "sui",
        "categories": [
            "accessibility",
            "film+video"
        ]
    },
    {
        "name": "fa-AccessibilityBraille",
        "title": "Braille",
        "className": "fa-solid fa-braille",
        "type": "sui",
        "categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityCircleInfo",
        "title": "Circle Info",
        "className": "fa-solid fa-circle-info",
        "type": "sui",
        "categories": [
            "accessibility",
            "maps"
        ]
    },
    {
        "name": "fa-AccessibilityCircleQuestion",
        "title": "Circle Question",
        "className": "fa-solid fa-circle-question",
        "type": "sui",
        "categories": [
            "accessibility",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-AccessibilityClosedCaptioning",
        "title": "Closed Captioning",
        "className": "fa-solid fa-closed-captioning",
        "type": "sui",
        "categories": [
            "accessibility",
            "film+video"
        ]
    },
    {
        "name": "fa-AccessibilityEarDeaf",
        "title": "Ear Deaf",
        "className": "fa-solid fa-ear-deaf",
        "type": "sui",
        "categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityEarListen",
        "title": "Ear Listen",
        "className": "fa-solid fa-ear-listen",
        "type": "sui",
        "categories": [
            "accessibility",
            "communication"
        ]
    },
    {
        "name": "fa-AccessibilityEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type": "sui",
        "categories": [
            "accessibility",
            "design",
            "maps",
            "medical+health",
            "photos+images",
            "security"
        ]
    },
    {
        "name": "fa-AccessibilityEyeLowVision",
        "title": "Eye Low Vision",
        "className": "fa-solid fa-eye-low-vision",
        "type": "sui",
        "categories": [
            "accessibility",
            "maps"
        ]
    },
    {
        "name": "fa-AccessibilityFingerprint",
        "title": "Fingerprint",
        "className": "fa-solid fa-fingerprint",
        "type": "sui",
        "categories": [
            "accessibility",
            "security"
        ]
    },
    {
        "name": "fa-AccessibilityHands",
        "title": "Hands",
        "className": "fa-solid fa-hands",
        "type": "sui",
        "categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityHandsAslInterpreting",
        "title": "Hands Asl Interpreting",
        "className": "fa-solid fa-hands-asl-interpreting",
        "type": "sui",
        "categories": [
            "accessibility",
            "communication"
        ]
    },
    {
        "name": "fa-AccessibilityHandshakeAngle",
        "title": "Handshake Angle",
        "className": "fa-solid fa-handshake-angle",
        "type": "sui",
        "categories": [
            "accessibility",
            "charity",
            "hands"
        ]
    },
    {
        "name": "fa-AccessibilityPersonCane",
        "title": "Person Cane",
        "className": "fa-solid fa-person-cane",
        "type": "sui",
        "categories": [
            "accessibility",
            "humanitarian",
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-AccessibilityPersonWalkingWithCane",
        "title": "Person Walking With Cane",
        "className": "fa-solid fa-person-walking-with-cane",
        "type": "sui",
        "categories": [
            "accessibility",
            "maps",
            "users+people"
        ]
    },
    {
        "name": "fa-AccessibilityPhoneVolume",
        "title": "Phone Volume",
        "className": "fa-solid fa-phone-volume",
        "type": "sui",
        "categories": [
            "accessibility",
            "communication",
            "maps",
            "media-playback"
        ]
    },
    {
        "name": "fa-AccessibilityQuestion",
        "title": "Question",
        "className": "fa-solid fa-question",
        "type": "sui",
        "categories": [
            "accessibility",
            "alert",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-AccessibilityTty",
        "title": "Tty",
        "className": "fa-solid fa-tty",
        "type": "sui",
        "categories": [
            "accessibility",
            "communication",
            "maps"
        ]
    },
    {
        "name": "fa-AccessibilityUniversalAccess",
        "title": "Universal Access",
        "className": "fa-solid fa-universal-access",
        "type": "sui",
        "categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type": "sui",
        "categories": [
            "accessibility",
            "maps",
            "medical+health",
            "transportation",
            "travel+hotel",
            "users+people"
        ]
    },
    {
        "name": "fa-AccessibilityWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type": "sui",
        "categories": [
            "accessibility",
            "humanitarian",
            "maps",
            "medical+health",
            "transportation",
            "travel+hotel",
            "users+people"
        ]
    },
    {
        "name": "fa-AlertBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type": "sui",
        "categories": [
            "alert",
            "education",
            "household",
            "maps",
            "shopping",
            "social",
            "time"
        ]
    },
    {
        "name": "fa-AlertBellSlash",
        "title": "Bell Slash",
        "className": "fa-solid fa-bell-slash",
        "type": "sui",
        "categories": [
            "alert",
            "education",
            "maps",
            "time"
        ]
    },
    {
        "name": "fa-AlertCircleExclamation",
        "title": "Circle Exclamation",
        "className": "fa-solid fa-circle-exclamation",
        "type": "sui",
        "categories": [
            "alert",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-AlertCircleRadiation",
        "title": "Circle Radiation",
        "className": "fa-solid fa-circle-radiation",
        "type": "sui",
        "categories": [
            "alert",
            "disaster+crisis",
            "energy",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-AlertExclamation",
        "title": "Exclamation",
        "className": "fa-solid fa-exclamation",
        "type": "sui",
        "categories": [
            "alert",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-AlertRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type": "sui",
        "categories": [
            "alert",
            "disaster+crisis",
            "energy",
            "humanitarian",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-AlertSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type": "sui",
        "categories": [
            "alert",
            "gaming",
            "halloween",
            "humanitarian",
            "medical+health",
            "science",
            "security"
        ]
    },
    {
        "name": "fa-AlertTriangleExclamation",
        "title": "Triangle Exclamation",
        "className": "fa-solid fa-triangle-exclamation",
        "type": "sui",
        "categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlphabetA",
        "title": "A",
        "className": "fa-solid fa-a",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetB",
        "title": "B",
        "className": "fa-solid fa-b",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetC",
        "title": "C",
        "className": "fa-solid fa-c",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetCircleH",
        "title": "Circle H",
        "className": "fa-solid fa-circle-h",
        "type": "sui",
        "categories": [
            "alphabet",
            "medical+health"
        ]
    },
    {
        "name": "fa-AlphabetD",
        "title": "D",
        "className": "fa-solid fa-d",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetE",
        "title": "E",
        "className": "fa-solid fa-e",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetF",
        "title": "F",
        "className": "fa-solid fa-f",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetG",
        "title": "G",
        "className": "fa-solid fa-g",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetH",
        "title": "H",
        "className": "fa-solid fa-h",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetI",
        "title": "I",
        "className": "fa-solid fa-i",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetJ",
        "title": "J",
        "className": "fa-solid fa-j",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetK",
        "title": "K",
        "className": "fa-solid fa-k",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetL",
        "title": "L",
        "className": "fa-solid fa-l",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetM",
        "title": "M",
        "className": "fa-solid fa-m",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetN",
        "title": "N",
        "className": "fa-solid fa-n",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetO",
        "title": "O",
        "className": "fa-solid fa-o",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetP",
        "title": "P",
        "className": "fa-solid fa-p",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetQ",
        "title": "Q",
        "className": "fa-solid fa-q",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetR",
        "title": "R",
        "className": "fa-solid fa-r",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetS",
        "title": "S",
        "className": "fa-solid fa-s",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetSquareH",
        "title": "Square H",
        "className": "fa-solid fa-square-h",
        "type": "sui",
        "categories": [
            "alphabet",
            "maps",
            "medical+health"
        ]
    },
    {
        "name": "fa-AlphabetT",
        "title": "T",
        "className": "fa-solid fa-t",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetU",
        "title": "U",
        "className": "fa-solid fa-u",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetV",
        "title": "V",
        "className": "fa-solid fa-v",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetW",
        "title": "W",
        "className": "fa-solid fa-w",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetX",
        "title": "X",
        "className": "fa-solid fa-x",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetY",
        "title": "Y",
        "className": "fa-solid fa-y",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetZ",
        "title": "Z",
        "className": "fa-solid fa-z",
        "type": "sui",
        "categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AnimalsBugs",
        "title": "Bugs",
        "className": "fa-solid fa-bugs",
        "type": "sui",
        "categories": [
            "animals",
            "disaster+crisis",
            "nature"
        ]
    },
    {
        "name": "fa-AnimalsCat",
        "title": "Cat",
        "className": "fa-solid fa-cat",
        "type": "sui",
        "categories": [
            "animals",
            "halloween"
        ]
    },
    {
        "name": "fa-AnimalsCow",
        "title": "Cow",
        "className": "fa-solid fa-cow",
        "type": "sui",
        "categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsCrow",
        "title": "Crow",
        "className": "fa-solid fa-crow",
        "type": "sui",
        "categories": [
            "animals",
            "halloween"
        ]
    },
    {
        "name": "fa-AnimalsDog",
        "title": "Dog",
        "className": "fa-solid fa-dog",
        "type": "sui",
        "categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsDove",
        "title": "Dove",
        "className": "fa-solid fa-dove",
        "type": "sui",
        "categories": [
            "animals",
            "charity",
            "political",
            "religion"
        ]
    },
    {
        "name": "fa-AnimalsDragon",
        "title": "Dragon",
        "className": "fa-solid fa-dragon",
        "type": "sui",
        "categories": [
            "animals",
            "gaming"
        ]
    },
    {
        "name": "fa-AnimalsFeather",
        "title": "Feather",
        "className": "fa-solid fa-feather",
        "type": "sui",
        "categories": [
            "animals",
            "nature"
        ]
    },
    {
        "name": "fa-AnimalsFeatherPointed",
        "title": "Feather Pointed",
        "className": "fa-solid fa-feather-pointed",
        "type": "sui",
        "categories": [
            "animals",
            "nature"
        ]
    },
    {
        "name": "fa-AnimalsFish",
        "title": "Fish",
        "className": "fa-solid fa-fish",
        "type": "sui",
        "categories": [
            "animals",
            "food+beverage",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-AnimalsFishFins",
        "title": "Fish Fins",
        "className": "fa-solid fa-fish-fins",
        "type": "sui",
        "categories": [
            "animals",
            "food+beverage",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-AnimalsFrog",
        "title": "Frog",
        "className": "fa-solid fa-frog",
        "type": "sui",
        "categories": [
            "animals",
            "camping",
            "nature",
            "science"
        ]
    },
    {
        "name": "fa-AnimalsHippo",
        "title": "Hippo",
        "className": "fa-solid fa-hippo",
        "type": "sui",
        "categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsHorse",
        "title": "Horse",
        "className": "fa-solid fa-horse",
        "type": "sui",
        "categories": [
            "animals",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AnimalsHorseHead",
        "title": "Horse Head",
        "className": "fa-solid fa-horse-head",
        "type": "sui",
        "categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsKiwiBird",
        "title": "Kiwi Bird",
        "className": "fa-solid fa-kiwi-bird",
        "type": "sui",
        "categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsLocust",
        "title": "Locust",
        "className": "fa-solid fa-locust",
        "type": "sui",
        "categories": [
            "animals",
            "disaster+crisis",
            "nature"
        ]
    },
    {
        "name": "fa-AnimalsMosquito",
        "title": "Mosquito",
        "className": "fa-solid fa-mosquito",
        "type": "sui",
        "categories": [
            "animals",
            "camping",
            "disaster+crisis",
            "nature"
        ]
    },
    {
        "name": "fa-AnimalsOtter",
        "title": "Otter",
        "className": "fa-solid fa-otter",
        "type": "sui",
        "categories": [
            "animals",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-AnimalsPaw",
        "title": "Paw",
        "className": "fa-solid fa-paw",
        "type": "sui",
        "categories": [
            "animals",
            "maps"
        ]
    },
    {
        "name": "fa-AnimalsShieldCat",
        "title": "Shield Cat",
        "className": "fa-solid fa-shield-cat",
        "type": "sui",
        "categories": [
            "animals",
            "humanitarian",
            "security"
        ]
    },
    {
        "name": "fa-AnimalsShieldDog",
        "title": "Shield Dog",
        "className": "fa-solid fa-shield-dog",
        "type": "sui",
        "categories": [
            "animals",
            "humanitarian",
            "security"
        ]
    },
    {
        "name": "fa-AnimalsShrimp",
        "title": "Shrimp",
        "className": "fa-solid fa-shrimp",
        "type": "sui",
        "categories": [
            "animals",
            "food+beverage",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-AnimalsSpider",
        "title": "Spider",
        "className": "fa-solid fa-spider",
        "type": "sui",
        "categories": [
            "animals",
            "halloween",
            "nature"
        ]
    },
    {
        "name": "fa-AnimalsWorm",
        "title": "Worm",
        "className": "fa-solid fa-worm",
        "type": "sui",
        "categories": [
            "animals",
            "disaster+crisis",
            "humanitarian",
            "nature"
        ]
    },
    {
        "name": "fa-ArrowsAngleDown",
        "title": "Angle Down",
        "className": "fa-solid fa-angle-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAngleLeft",
        "title": "Angle Left",
        "className": "fa-solid fa-angle-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAngleRight",
        "title": "Angle Right",
        "className": "fa-solid fa-angle-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesDown",
        "title": "Angles Down",
        "className": "fa-solid fa-angles-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesLeft",
        "title": "Angles Left",
        "className": "fa-solid fa-angles-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesRight",
        "title": "Angles Right",
        "className": "fa-solid fa-angles-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesUp",
        "title": "Angles Up",
        "className": "fa-solid fa-angles-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAngleUp",
        "title": "Angle Up",
        "className": "fa-solid fa-angle-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDown",
        "title": "Arrow Down",
        "className": "fa-solid fa-arrow-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDown19",
        "title": "Arrow Down19",
        "className": "fa-solid fa-arrow-down-1-9",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDown91",
        "title": "Arrow Down91",
        "className": "fa-solid fa-arrow-down-9-1",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownAZ",
        "title": "Arrow Down AZ",
        "className": "fa-solid fa-arrow-down-a-z",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownLong",
        "title": "Arrow Down Long",
        "className": "fa-solid fa-arrow-down-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownShortWide",
        "title": "Arrow Down Short Wide",
        "className": "fa-solid fa-arrow-down-short-wide",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownUpAcrossLine",
        "title": "Arrow Down Up Across Line",
        "className": "fa-solid fa-arrow-down-up-across-line",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownUpLock",
        "title": "Arrow Down Up Lock",
        "className": "fa-solid fa-arrow-down-up-lock",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownWideShort",
        "title": "Arrow Down Wide Short",
        "className": "fa-solid fa-arrow-down-wide-short",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownZA",
        "title": "Arrow Down ZA",
        "className": "fa-solid fa-arrow-down-z-a",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowLeft",
        "title": "Arrow Left",
        "className": "fa-solid fa-arrow-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowLeftLong",
        "title": "Arrow Left Long",
        "className": "fa-solid fa-arrow-left-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowPointer",
        "title": "Arrow Pointer",
        "className": "fa-solid fa-arrow-pointer",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRight",
        "title": "Arrow Right",
        "className": "fa-solid fa-arrow-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightArrowLeft",
        "title": "Arrow Right Arrow Left",
        "className": "fa-solid fa-arrow-right-arrow-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightFromBracket",
        "title": "Arrow Right From Bracket",
        "className": "fa-solid fa-arrow-right-from-bracket",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightLong",
        "title": "Arrow Right Long",
        "className": "fa-solid fa-arrow-right-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightToBracket",
        "title": "Arrow Right To Bracket",
        "className": "fa-solid fa-arrow-right-to-bracket",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRotateLeft",
        "title": "Arrow Rotate Left",
        "className": "fa-solid fa-arrow-rotate-left",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsArrowRotateRight",
        "title": "Arrow Rotate Right",
        "className": "fa-solid fa-arrow-rotate-right",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsArrowsDownToLine",
        "title": "Down To Line",
        "className": "fa-solid fa-arrows-down-to-line",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsLeftRight",
        "title": "Left Right",
        "className": "fa-solid fa-arrows-left-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsLeftRightToLine",
        "title": "Left Right To Line",
        "className": "fa-solid fa-arrows-left-right-to-line",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsRotate",
        "title": "Rotate",
        "className": "fa-solid fa-arrows-rotate",
        "type": "sui",
        "categories": [
            "arrows",
            "editing",
            "media-playback",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsArrowsSpin",
        "title": "Spin",
        "className": "fa-solid fa-arrows-spin",
        "type": "sui",
        "categories": [
            "arrows",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsArrowsSplitUpAndLeft",
        "title": "Split Up And Left",
        "className": "fa-solid fa-arrows-split-up-and-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsToCircle",
        "title": "To Circle",
        "className": "fa-solid fa-arrows-to-circle",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsToDot",
        "title": "To Dot",
        "className": "fa-solid fa-arrows-to-dot",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsToEye",
        "title": "To Eye",
        "className": "fa-solid fa-arrows-to-eye",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsTurnRight",
        "title": "Turn Right",
        "className": "fa-solid fa-arrows-turn-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsTurnToDots",
        "title": "Turn To Dots",
        "className": "fa-solid fa-arrows-turn-to-dots",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsUpDown",
        "title": "Up Down",
        "className": "fa-solid fa-arrows-up-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsUpDownLeftRight",
        "title": "Up Down Left Right",
        "className": "fa-solid fa-arrows-up-down-left-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsUpToLine",
        "title": "Up To Line",
        "className": "fa-solid fa-arrows-up-to-line",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTrendDown",
        "title": "Arrow Trend Down",
        "className": "fa-solid fa-arrow-trend-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTrendUp",
        "title": "Arrow Trend Up",
        "className": "fa-solid fa-arrow-trend-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTurnDown",
        "title": "Arrow Turn Down",
        "className": "fa-solid fa-arrow-turn-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTurnUp",
        "title": "Arrow Turn Up",
        "className": "fa-solid fa-arrow-turn-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUp",
        "title": "Arrow Up",
        "className": "fa-solid fa-arrow-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUp19",
        "title": "Arrow Up19",
        "className": "fa-solid fa-arrow-up-1-9",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUp91",
        "title": "Arrow Up91",
        "className": "fa-solid fa-arrow-up-9-1",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpAZ",
        "title": "Arrow Up AZ",
        "className": "fa-solid fa-arrow-up-a-z",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpFromBracket",
        "title": "Arrow Up From Bracket",
        "className": "fa-solid fa-arrow-up-from-bracket",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpLong",
        "title": "Arrow Up Long",
        "className": "fa-solid fa-arrow-up-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpRightDots",
        "title": "Arrow Up Right Dots",
        "className": "fa-solid fa-arrow-up-right-dots",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpRightFromSquare",
        "title": "Arrow Up Right From Square",
        "className": "fa-solid fa-arrow-up-right-from-square",
        "type": "sui",
        "categories": [
            "arrows",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpShortWide",
        "title": "Arrow Up Short Wide",
        "className": "fa-solid fa-arrow-up-short-wide",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpWideShort",
        "title": "Arrow Up Wide Short",
        "className": "fa-solid fa-arrow-up-wide-short",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpZA",
        "title": "Arrow Up ZA",
        "className": "fa-solid fa-arrow-up-z-a",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretDown",
        "title": "Caret Down",
        "className": "fa-solid fa-caret-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretLeft",
        "title": "Caret Left",
        "className": "fa-solid fa-caret-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretRight",
        "title": "Caret Right",
        "className": "fa-solid fa-caret-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretUp",
        "title": "Caret Up",
        "className": "fa-solid fa-caret-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronDown",
        "title": "Chevron Down",
        "className": "fa-solid fa-chevron-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronLeft",
        "title": "Chevron Left",
        "className": "fa-solid fa-chevron-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronRight",
        "title": "Chevron Right",
        "className": "fa-solid fa-chevron-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronUp",
        "title": "Chevron Up",
        "className": "fa-solid fa-chevron-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowDown",
        "title": "Circle Arrow Down",
        "className": "fa-solid fa-circle-arrow-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowLeft",
        "title": "Circle Arrow Left",
        "className": "fa-solid fa-circle-arrow-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowRight",
        "title": "Circle Arrow Right",
        "className": "fa-solid fa-circle-arrow-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowUp",
        "title": "Circle Arrow Up",
        "className": "fa-solid fa-circle-arrow-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronDown",
        "title": "Circle Chevron Down",
        "className": "fa-solid fa-circle-chevron-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronLeft",
        "title": "Circle Chevron Left",
        "className": "fa-solid fa-circle-chevron-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronRight",
        "title": "Circle Chevron Right",
        "className": "fa-solid fa-circle-chevron-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronUp",
        "title": "Circle Chevron Up",
        "className": "fa-solid fa-circle-chevron-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleDown",
        "title": "Circle Down",
        "className": "fa-solid fa-circle-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleLeft",
        "title": "Circle Left",
        "className": "fa-solid fa-circle-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleRight",
        "title": "Circle Right",
        "className": "fa-solid fa-circle-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleUp",
        "title": "Circle Up",
        "className": "fa-solid fa-circle-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsClockRotateLeft",
        "title": "Clock Rotate Left",
        "className": "fa-solid fa-clock-rotate-left",
        "type": "sui",
        "categories": [
            "arrows",
            "medical+health"
        ]
    },
    {
        "name": "fa-ArrowsCloudArrowDown",
        "title": "Cloud Arrow Down",
        "className": "fa-solid fa-cloud-arrow-down",
        "type": "sui",
        "categories": [
            "arrows",
            "connectivity"
        ]
    },
    {
        "name": "fa-ArrowsCloudArrowUp",
        "title": "Cloud Arrow Up",
        "className": "fa-solid fa-cloud-arrow-up",
        "type": "sui",
        "categories": [
            "arrows",
            "connectivity"
        ]
    },
    {
        "name": "fa-ArrowsDownLeftAndUpRightToCenter",
        "title": "Down Left And Up Right To Center",
        "className": "fa-solid fa-down-left-and-up-right-to-center",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback"
        ]
    },
    {
        "name": "fa-ArrowsDownload",
        "title": "Download",
        "className": "fa-solid fa-download",
        "type": "sui",
        "categories": [
            "arrows",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-ArrowsDownLong",
        "title": "Down Long",
        "className": "fa-solid fa-down-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsLeftLong",
        "title": "Left Long",
        "className": "fa-solid fa-left-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsLeftRight",
        "title": "Left Right",
        "className": "fa-solid fa-left-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsLocationArrow",
        "title": "Location Arrow",
        "className": "fa-solid fa-location-arrow",
        "type": "sui",
        "categories": [
            "arrows",
            "maps"
        ]
    },
    {
        "name": "fa-ArrowsMaximize",
        "title": "Maximize",
        "className": "fa-solid fa-maximize",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback"
        ]
    },
    {
        "name": "fa-ArrowsRecycle",
        "title": "Recycle",
        "className": "fa-solid fa-recycle",
        "type": "sui",
        "categories": [
            "arrows",
            "maps"
        ]
    },
    {
        "name": "fa-ArrowsRepeat",
        "title": "Repeat",
        "className": "fa-solid fa-repeat",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback"
        ]
    },
    {
        "name": "fa-ArrowsReply",
        "title": "Reply",
        "className": "fa-solid fa-reply",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsReplyAll",
        "title": "Reply All",
        "className": "fa-solid fa-reply-all",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRetweet",
        "title": "Retweet",
        "className": "fa-solid fa-retweet",
        "type": "sui",
        "categories": [
            "arrows",
            "social"
        ]
    },
    {
        "name": "fa-ArrowsRightFromBracket",
        "title": "Right From Bracket",
        "className": "fa-solid fa-right-from-bracket",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightLeft",
        "title": "Right Left",
        "className": "fa-solid fa-right-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightLong",
        "title": "Right Long",
        "className": "fa-solid fa-right-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightToBracket",
        "title": "Right To Bracket",
        "className": "fa-solid fa-right-to-bracket",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRotate",
        "title": "Rotate",
        "className": "fa-solid fa-rotate",
        "type": "sui",
        "categories": [
            "arrows",
            "editing",
            "media-playback",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsRotateLeft",
        "title": "Rotate Left",
        "className": "fa-solid fa-rotate-left",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsRotateRight",
        "title": "Rotate Right",
        "className": "fa-solid fa-rotate-right",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback",
            "spinners"
        ]
    },
    {
        "name": "fa-ArrowsShare",
        "title": "Share",
        "className": "fa-solid fa-share",
        "type": "sui",
        "categories": [
            "arrows",
            "social"
        ]
    },
    {
        "name": "fa-ArrowsShareFromSquare",
        "title": "Share From Square",
        "className": "fa-solid fa-share-from-square",
        "type": "sui",
        "categories": [
            "arrows",
            "social"
        ]
    },
    {
        "name": "fa-ArrowsShuffle",
        "title": "Shuffle",
        "className": "fa-solid fa-shuffle",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback"
        ]
    },
    {
        "name": "fa-ArrowsSort",
        "title": "Sort",
        "className": "fa-solid fa-sort",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSortDown",
        "title": "Sort Down",
        "className": "fa-solid fa-sort-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSortUp",
        "title": "Sort Up",
        "className": "fa-solid fa-sort-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareArrowUpRight",
        "title": "Square Arrow Up Right",
        "className": "fa-solid fa-square-arrow-up-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretDown",
        "title": "Square Caret Down",
        "className": "fa-solid fa-square-caret-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretLeft",
        "title": "Square Caret Left",
        "className": "fa-solid fa-square-caret-left",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretRight",
        "title": "Square Caret Right",
        "className": "fa-solid fa-square-caret-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretUp",
        "title": "Square Caret Up",
        "className": "fa-solid fa-square-caret-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareUpRight",
        "title": "Square Up Right",
        "className": "fa-solid fa-square-up-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsTurnDown",
        "title": "Turn Down",
        "className": "fa-solid fa-turn-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsTurnUp",
        "title": "Turn Up",
        "className": "fa-solid fa-turn-up",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpDown",
        "title": "Up Down",
        "className": "fa-solid fa-up-down",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpDownLeftRight",
        "title": "Up Down Left Right",
        "className": "fa-solid fa-up-down-left-right",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpload",
        "title": "Upload",
        "className": "fa-solid fa-upload",
        "type": "sui",
        "categories": [
            "arrows",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-ArrowsUpLong",
        "title": "Up Long",
        "className": "fa-solid fa-up-long",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpRightAndDownLeftFromCenter",
        "title": "Up Right And Down Left From Center",
        "className": "fa-solid fa-up-right-and-down-left-from-center",
        "type": "sui",
        "categories": [
            "arrows",
            "media-playback"
        ]
    },
    {
        "name": "fa-ArrowsUpRightFromSquare",
        "title": "Up Right From Square",
        "className": "fa-solid fa-up-right-from-square",
        "type": "sui",
        "categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-AstronomyBinoculars",
        "title": "Binoculars",
        "className": "fa-solid fa-binoculars",
        "type": "sui",
        "categories": [
            "astronomy",
            "camping",
            "maps",
            "nature"
        ]
    },
    {
        "name": "fa-AstronomyGlobe",
        "title": "Globe",
        "className": "fa-solid fa-globe",
        "type": "sui",
        "categories": [
            "astronomy",
            "charity",
            "connectivity",
            "maps"
        ]
    },
    {
        "name": "fa-AstronomyMeteor",
        "title": "Meteor",
        "className": "fa-solid fa-meteor",
        "type": "sui",
        "categories": [
            "astronomy",
            "weather"
        ]
    },
    {
        "name": "fa-AstronomyMoon",
        "title": "Moon",
        "className": "fa-solid fa-moon",
        "type": "sui",
        "categories": [
            "astronomy",
            "weather"
        ]
    },
    {
        "name": "fa-AstronomySatellite",
        "title": "Satellite",
        "className": "fa-solid fa-satellite",
        "type": "sui",
        "categories": [
            "astronomy",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-AstronomySatelliteDish",
        "title": "Satellite Dish",
        "className": "fa-solid fa-satellite-dish",
        "type": "sui",
        "categories": [
            "astronomy",
            "connectivity",
            "devices+hardware",
            "humanitarian"
        ]
    },
    {
        "name": "fa-AstronomyShuttleSpace",
        "title": "Shuttle Space",
        "className": "fa-solid fa-shuttle-space",
        "type": "sui",
        "categories": [
            "astronomy",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AstronomyUserAstronaut",
        "title": "User Astronaut",
        "className": "fa-solid fa-user-astronaut",
        "type": "sui",
        "categories": [
            "astronomy",
            "science-fiction",
            "users+people"
        ]
    },
    {
        "name": "fa-AutomotiveBus",
        "title": "Bus",
        "className": "fa-solid fa-bus",
        "type": "sui",
        "categories": [
            "automotive",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveBusSimple",
        "title": "Bus Simple",
        "className": "fa-solid fa-bus-simple",
        "type": "sui",
        "categories": [
            "automotive",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type": "sui",
        "categories": [
            "automotive",
            "humanitarian",
            "logistics",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveCaravan",
        "title": "Caravan",
        "className": "fa-solid fa-caravan",
        "type": "sui",
        "categories": [
            "automotive",
            "camping",
            "moving"
        ]
    },
    {
        "name": "fa-AutomotiveCarBattery",
        "title": "Car Battery",
        "className": "fa-solid fa-car-battery",
        "type": "sui",
        "categories": [
            "automotive",
            "devices+hardware",
            "energy"
        ]
    },
    {
        "name": "fa-AutomotiveCarBurst",
        "title": "Car Burst",
        "className": "fa-solid fa-car-burst",
        "type": "sui",
        "categories": [
            "automotive",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveCarOn",
        "title": "Car On",
        "className": "fa-solid fa-car-on",
        "type": "sui",
        "categories": [
            "automotive",
            "security"
        ]
    },
    {
        "name": "fa-AutomotiveCarRear",
        "title": "Car Rear",
        "className": "fa-solid fa-car-rear",
        "type": "sui",
        "categories": [
            "automotive",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveCarSide",
        "title": "Car Side",
        "className": "fa-solid fa-car-side",
        "type": "sui",
        "categories": [
            "automotive",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveCarTunnel",
        "title": "Car Tunnel",
        "className": "fa-solid fa-car-tunnel",
        "type": "sui",
        "categories": [
            "automotive",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveChargingStation",
        "title": "Charging Station",
        "className": "fa-solid fa-charging-station",
        "type": "sui",
        "categories": [
            "automotive",
            "energy"
        ]
    },
    {
        "name": "fa-AutomotiveGasPump",
        "title": "Gas Pump",
        "className": "fa-solid fa-gas-pump",
        "type": "sui",
        "categories": [
            "automotive",
            "energy",
            "logistics"
        ]
    },
    {
        "name": "fa-AutomotiveGauge",
        "title": "Gauge",
        "className": "fa-solid fa-gauge",
        "type": "sui",
        "categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGaugeHigh",
        "title": "Gauge High",
        "className": "fa-solid fa-gauge-high",
        "type": "sui",
        "categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGaugeSimple",
        "title": "Gauge Simple",
        "className": "fa-solid fa-gauge-simple",
        "type": "sui",
        "categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGaugeSimpleHigh",
        "title": "Gauge Simple High",
        "className": "fa-solid fa-gauge-simple-high",
        "type": "sui",
        "categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveMotorcycle",
        "title": "Motorcycle",
        "className": "fa-solid fa-motorcycle",
        "type": "sui",
        "categories": [
            "automotive",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveOilCan",
        "title": "Oil Can",
        "className": "fa-solid fa-oil-can",
        "type": "sui",
        "categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveSprayCanSparkles",
        "title": "Spray Can Sparkles",
        "className": "fa-solid fa-spray-can-sparkles",
        "type": "sui",
        "categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTaxi",
        "title": "Taxi",
        "className": "fa-solid fa-taxi",
        "type": "sui",
        "categories": [
            "automotive",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveTrailer",
        "title": "Trailer",
        "className": "fa-solid fa-trailer",
        "type": "sui",
        "categories": [
            "automotive",
            "camping",
            "moving"
        ]
    },
    {
        "name": "fa-AutomotiveTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type": "sui",
        "categories": [
            "automotive",
            "humanitarian",
            "logistics",
            "maps",
            "shopping",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveTruckField",
        "title": "Truck Field",
        "className": "fa-solid fa-truck-field",
        "type": "sui",
        "categories": [
            "automotive",
            "humanitarian",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveTruckFieldUn",
        "title": "Truck Field Un",
        "className": "fa-solid fa-truck-field-un",
        "type": "sui",
        "categories": [
            "automotive",
            "humanitarian",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type": "sui",
        "categories": [
            "automotive",
            "humanitarian",
            "maps",
            "medical+health",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveTruckMonster",
        "title": "Truck Monster",
        "className": "fa-solid fa-truck-monster",
        "type": "sui",
        "categories": [
            "automotive",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveTruckPickup",
        "title": "Truck Pickup",
        "className": "fa-solid fa-truck-pickup",
        "type": "sui",
        "categories": [
            "automotive",
            "construction",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-AutomotiveVanShuttle",
        "title": "Van Shuttle",
        "className": "fa-solid fa-van-shuttle",
        "type": "sui",
        "categories": [
            "automotive",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-BuildingsArchway",
        "title": "Archway",
        "className": "fa-solid fa-archway",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsArrowRightToCity",
        "title": "Arrow Right To City",
        "className": "fa-solid fa-arrow-right-to-city",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuilding",
        "title": "Building",
        "className": "fa-solid fa-building",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "maps"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleArrowRight",
        "title": "Building Circle Arrow Right",
        "className": "fa-solid fa-building-circle-arrow-right",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleCheck",
        "title": "Building Circle Check",
        "className": "fa-solid fa-building-circle-check",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleExclamation",
        "title": "Building Circle Exclamation",
        "className": "fa-solid fa-building-circle-exclamation",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleXmark",
        "title": "Building Circle Xmark",
        "className": "fa-solid fa-building-circle-xmark",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingColumns",
        "title": "Building Columns",
        "className": "fa-solid fa-building-columns",
        "type": "sui",
        "categories": [
            "buildings",
            "maps"
        ]
    },
    {
        "name": "fa-BuildingsBuildingFlag",
        "title": "Building Flag",
        "className": "fa-solid fa-building-flag",
        "type": "sui",
        "categories": [
            "buildings",
            "political"
        ]
    },
    {
        "name": "fa-BuildingsBuildingLock",
        "title": "Building Lock",
        "className": "fa-solid fa-building-lock",
        "type": "sui",
        "categories": [
            "buildings",
            "security"
        ]
    },
    {
        "name": "fa-BuildingsBuildingNgo",
        "title": "Building Ngo",
        "className": "fa-solid fa-building-ngo",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingShield",
        "title": "Building Shield",
        "className": "fa-solid fa-building-shield",
        "type": "sui",
        "categories": [
            "buildings",
            "security"
        ]
    },
    {
        "name": "fa-BuildingsBuildingUn",
        "title": "Building Un",
        "className": "fa-solid fa-building-un",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingUser",
        "title": "Building User",
        "className": "fa-solid fa-building-user",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingWheat",
        "title": "Building Wheat",
        "className": "fa-solid fa-building-wheat",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsCampground",
        "title": "Campground",
        "className": "fa-solid fa-campground",
        "type": "sui",
        "categories": [
            "buildings",
            "camping"
        ]
    },
    {
        "name": "fa-BuildingsChurch",
        "title": "Church",
        "className": "fa-solid fa-church",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsCity",
        "title": "City",
        "className": "fa-solid fa-city",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsDungeon",
        "title": "Dungeon",
        "className": "fa-solid fa-dungeon",
        "type": "sui",
        "categories": [
            "buildings",
            "gaming",
            "household",
            "security"
        ]
    },
    {
        "name": "fa-BuildingsGopuram",
        "title": "Gopuram",
        "className": "fa-solid fa-gopuram",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsHospital",
        "title": "Hospital",
        "className": "fa-solid fa-hospital",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "maps",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsHospitalUser",
        "title": "Hospital User",
        "className": "fa-solid fa-hospital-user",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-BuildingsHotel",
        "title": "Hotel",
        "className": "fa-solid fa-hotel",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsHouse",
        "title": "House",
        "className": "fa-solid fa-house",
        "type": "sui",
        "categories": [
            "buildings",
            "maps"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimney",
        "title": "House Chimney",
        "className": "fa-solid fa-house-chimney",
        "type": "sui",
        "categories": [
            "buildings",
            "moving"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimneyCrack",
        "title": "House Chimney Crack",
        "className": "fa-solid fa-house-chimney-crack",
        "type": "sui",
        "categories": [
            "buildings",
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimneyMedical",
        "title": "House Chimney Medical",
        "className": "fa-solid fa-house-chimney-medical",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimneyWindow",
        "title": "House Chimney Window",
        "className": "fa-solid fa-house-chimney-window",
        "type": "sui",
        "categories": [
            "buildings",
            "household"
        ]
    },
    {
        "name": "fa-BuildingsHouseCircleCheck",
        "title": "House Circle Check",
        "className": "fa-solid fa-house-circle-check",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCircleExclamation",
        "title": "House Circle Exclamation",
        "className": "fa-solid fa-house-circle-exclamation",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCircleXmark",
        "title": "House Circle Xmark",
        "className": "fa-solid fa-house-circle-xmark",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCrack",
        "title": "House Crack",
        "className": "fa-solid fa-house-crack",
        "type": "sui",
        "categories": [
            "buildings",
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-BuildingsHouseFire",
        "title": "House Fire",
        "className": "fa-solid fa-house-fire",
        "type": "sui",
        "categories": [
            "buildings",
            "disaster+crisis",
            "household",
            "security"
        ]
    },
    {
        "name": "fa-BuildingsHouseFlag",
        "title": "House Flag",
        "className": "fa-solid fa-house-flag",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseLock",
        "title": "House Lock",
        "className": "fa-solid fa-house-lock",
        "type": "sui",
        "categories": [
            "buildings",
            "household",
            "security"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedical",
        "title": "House Medical",
        "className": "fa-solid fa-house-medical",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalCircleCheck",
        "title": "House Medical Circle Check",
        "className": "fa-solid fa-house-medical-circle-check",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalCircleExclamation",
        "title": "House Medical Circle Exclamation",
        "className": "fa-solid fa-house-medical-circle-exclamation",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalCircleXmark",
        "title": "House Medical Circle Xmark",
        "className": "fa-solid fa-house-medical-circle-xmark",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalFlag",
        "title": "House Medical Flag",
        "className": "fa-solid fa-house-medical-flag",
        "type": "sui",
        "categories": [
            "buildings",
            "medical+health"
        ]
    },
    {
        "name": "fa-BuildingsIgloo",
        "title": "Igloo",
        "className": "fa-solid fa-igloo",
        "type": "sui",
        "categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsIndustry",
        "title": "Industry",
        "className": "fa-solid fa-industry",
        "type": "sui",
        "categories": [
            "buildings",
            "energy",
            "maps"
        ]
    },
    {
        "name": "fa-BuildingsKaaba",
        "title": "Kaaba",
        "className": "fa-solid fa-kaaba",
        "type": "sui",
        "categories": [
            "buildings",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsLandmark",
        "title": "Landmark",
        "className": "fa-solid fa-landmark",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "maps",
            "money"
        ]
    },
    {
        "name": "fa-BuildingsLandmarkDome",
        "title": "Landmark Dome",
        "className": "fa-solid fa-landmark-dome",
        "type": "sui",
        "categories": [
            "buildings",
            "political"
        ]
    },
    {
        "name": "fa-BuildingsLandmarkFlag",
        "title": "Landmark Flag",
        "className": "fa-solid fa-landmark-flag",
        "type": "sui",
        "categories": [
            "buildings",
            "maps",
            "political"
        ]
    },
    {
        "name": "fa-BuildingsMonument",
        "title": "Monument",
        "className": "fa-solid fa-monument",
        "type": "sui",
        "categories": [
            "buildings",
            "maps"
        ]
    },
    {
        "name": "fa-BuildingsMosque",
        "title": "Mosque",
        "className": "fa-solid fa-mosque",
        "type": "sui",
        "categories": [
            "buildings",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsMountainCity",
        "title": "Mountain City",
        "className": "fa-solid fa-mountain-city",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "nature"
        ]
    },
    {
        "name": "fa-BuildingsOilWell",
        "title": "Oil Well",
        "className": "fa-solid fa-oil-well",
        "type": "sui",
        "categories": [
            "buildings",
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsPlaceOfWorship",
        "title": "Place Of Worship",
        "className": "fa-solid fa-place-of-worship",
        "type": "sui",
        "categories": [
            "buildings",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsSchool",
        "title": "School",
        "className": "fa-solid fa-school",
        "type": "sui",
        "categories": [
            "buildings",
            "childhood",
            "education",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsSchoolCircleCheck",
        "title": "School Circle Check",
        "className": "fa-solid fa-school-circle-check",
        "type": "sui",
        "categories": [
            "buildings",
            "education",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsSchoolCircleExclamation",
        "title": "School Circle Exclamation",
        "className": "fa-solid fa-school-circle-exclamation",
        "type": "sui",
        "categories": [
            "buildings",
            "education",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsSchoolCircleXmark",
        "title": "School Circle Xmark",
        "className": "fa-solid fa-school-circle-xmark",
        "type": "sui",
        "categories": [
            "buildings",
            "education",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsSchoolFlag",
        "title": "School Flag",
        "className": "fa-solid fa-school-flag",
        "type": "sui",
        "categories": [
            "buildings",
            "education",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsSchoolLock",
        "title": "School Lock",
        "className": "fa-solid fa-school-lock",
        "type": "sui",
        "categories": [
            "buildings",
            "education",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsShop",
        "title": "Shop",
        "className": "fa-solid fa-shop",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "shopping"
        ]
    },
    {
        "name": "fa-BuildingsShopLock",
        "title": "Shop Lock",
        "className": "fa-solid fa-shop-lock",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "shopping"
        ]
    },
    {
        "name": "fa-BuildingsStore",
        "title": "Store",
        "className": "fa-solid fa-store",
        "type": "sui",
        "categories": [
            "buildings",
            "shopping"
        ]
    },
    {
        "name": "fa-BuildingsSynagogue",
        "title": "Synagogue",
        "className": "fa-solid fa-synagogue",
        "type": "sui",
        "categories": [
            "buildings",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsTent",
        "title": "Tent",
        "className": "fa-solid fa-tent",
        "type": "sui",
        "categories": [
            "buildings",
            "camping",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowDownToLine",
        "title": "Tent Arrow Down To Line",
        "className": "fa-solid fa-tent-arrow-down-to-line",
        "type": "sui",
        "categories": [
            "buildings",
            "camping",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowLeftRight",
        "title": "Tent Arrow Left Right",
        "className": "fa-solid fa-tent-arrow-left-right",
        "type": "sui",
        "categories": [
            "buildings",
            "camping",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowsDown",
        "title": "Tent Arrows Down",
        "className": "fa-solid fa-tent-arrows-down",
        "type": "sui",
        "categories": [
            "buildings",
            "camping",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowTurnLeft",
        "title": "Tent Arrow Turn Left",
        "className": "fa-solid fa-tent-arrow-turn-left",
        "type": "sui",
        "categories": [
            "buildings",
            "camping",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsTents",
        "title": "Tents",
        "className": "fa-solid fa-tents",
        "type": "sui",
        "categories": [
            "buildings",
            "camping",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsToiletPortable",
        "title": "Toilet Portable",
        "className": "fa-solid fa-toilet-portable",
        "type": "sui",
        "categories": [
            "buildings",
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsToiletsPortable",
        "title": "Toilets Portable",
        "className": "fa-solid fa-toilets-portable",
        "type": "sui",
        "categories": [
            "buildings",
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsToriiGate",
        "title": "Torii Gate",
        "className": "fa-solid fa-torii-gate",
        "type": "sui",
        "categories": [
            "buildings",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsTowerObservation",
        "title": "Tower Observation",
        "className": "fa-solid fa-tower-observation",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "security"
        ]
    },
    {
        "name": "fa-BuildingsTreeCity",
        "title": "Tree City",
        "className": "fa-solid fa-tree-city",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian"
        ]
    },
    {
        "name": "fa-BuildingsVihara",
        "title": "Vihara",
        "className": "fa-solid fa-vihara",
        "type": "sui",
        "categories": [
            "buildings",
            "humanitarian",
            "religion"
        ]
    },
    {
        "name": "fa-BuildingsWarehouse",
        "title": "Warehouse",
        "className": "fa-solid fa-warehouse",
        "type": "sui",
        "categories": [
            "buildings",
            "logistics"
        ]
    },
    {
        "name": "fa-CampingBottleWater",
        "title": "Bottle Water",
        "className": "fa-solid fa-bottle-water",
        "type": "sui",
        "categories": [
            "camping",
            "food+beverage"
        ]
    },
    {
        "name": "fa-CampingBucket",
        "title": "Bucket",
        "className": "fa-solid fa-bucket",
        "type": "sui",
        "categories": [
            "camping",
            "childhood",
            "construction"
        ]
    },
    {
        "name": "fa-CampingCompass",
        "title": "Compass",
        "className": "fa-solid fa-compass",
        "type": "sui",
        "categories": [
            "camping",
            "spinners"
        ]
    },
    {
        "name": "fa-CampingFaucet",
        "title": "Faucet",
        "className": "fa-solid fa-faucet",
        "type": "sui",
        "categories": [
            "camping",
            "household"
        ]
    },
    {
        "name": "fa-CampingFaucetDrip",
        "title": "Faucet Drip",
        "className": "fa-solid fa-faucet-drip",
        "type": "sui",
        "categories": [
            "camping",
            "household"
        ]
    },
    {
        "name": "fa-CampingFire",
        "title": "Fire",
        "className": "fa-solid fa-fire",
        "type": "sui",
        "categories": [
            "camping",
            "energy",
            "maps",
            "nature",
            "science"
        ]
    },
    {
        "name": "fa-CampingFireBurner",
        "title": "Fire Burner",
        "className": "fa-solid fa-fire-burner",
        "type": "sui",
        "categories": [
            "camping",
            "household"
        ]
    },
    {
        "name": "fa-CampingFireFlameCurved",
        "title": "Fire Flame Curved",
        "className": "fa-solid fa-fire-flame-curved",
        "type": "sui",
        "categories": [
            "camping",
            "energy",
            "maps",
            "science",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-CampingKitMedical",
        "title": "Kit Medical",
        "className": "fa-solid fa-kit-medical",
        "type": "sui",
        "categories": [
            "camping",
            "medical+health"
        ]
    },
    {
        "name": "fa-CampingMap",
        "title": "Map",
        "className": "fa-solid fa-map",
        "type": "sui",
        "categories": [
            "camping",
            "maps"
        ]
    },
    {
        "name": "fa-CampingMapLocation",
        "title": "Map Location",
        "className": "fa-solid fa-map-location",
        "type": "sui",
        "categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMapLocationDot",
        "title": "Map Location Dot",
        "className": "fa-solid fa-map-location-dot",
        "type": "sui",
        "categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMattressPillow",
        "title": "Mattress Pillow",
        "className": "fa-solid fa-mattress-pillow",
        "type": "sui",
        "categories": [
            "camping",
            "household"
        ]
    },
    {
        "name": "fa-CampingMosquitoNet",
        "title": "Mosquito Net",
        "className": "fa-solid fa-mosquito-net",
        "type": "sui",
        "categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMountain",
        "title": "Mountain",
        "className": "fa-solid fa-mountain",
        "type": "sui",
        "categories": [
            "camping",
            "nature"
        ]
    },
    {
        "name": "fa-CampingMountainSun",
        "title": "Mountain Sun",
        "className": "fa-solid fa-mountain-sun",
        "type": "sui",
        "categories": [
            "camping",
            "humanitarian",
            "maps",
            "nature"
        ]
    },
    {
        "name": "fa-CampingPeopleRoof",
        "title": "People Roof",
        "className": "fa-solid fa-people-roof",
        "type": "sui",
        "categories": [
            "camping",
            "household",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-CampingPersonHiking",
        "title": "Person Hiking",
        "className": "fa-solid fa-person-hiking",
        "type": "sui",
        "categories": [
            "camping",
            "nature",
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-CampingPersonShelter",
        "title": "Person Shelter",
        "className": "fa-solid fa-person-shelter",
        "type": "sui",
        "categories": [
            "camping",
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-CampingRoute",
        "title": "Route",
        "className": "fa-solid fa-route",
        "type": "sui",
        "categories": [
            "camping",
            "maps",
            "moving"
        ]
    },
    {
        "name": "fa-CampingSignsPost",
        "title": "Signs Post",
        "className": "fa-solid fa-signs-post",
        "type": "sui",
        "categories": [
            "camping",
            "maps",
            "nature"
        ]
    },
    {
        "name": "fa-CampingTarp",
        "title": "Tarp",
        "className": "fa-solid fa-tarp",
        "type": "sui",
        "categories": [
            "camping",
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-CampingTarpDroplet",
        "title": "Tarp Droplet",
        "className": "fa-solid fa-tarp-droplet",
        "type": "sui",
        "categories": [
            "camping",
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-CampingToiletPaper",
        "title": "Toilet Paper",
        "className": "fa-solid fa-toilet-paper",
        "type": "sui",
        "categories": [
            "camping",
            "halloween",
            "household"
        ]
    },
    {
        "name": "fa-CampingTree",
        "title": "Tree",
        "className": "fa-solid fa-tree",
        "type": "sui",
        "categories": [
            "camping",
            "maps",
            "nature"
        ]
    },
    {
        "name": "fa-CharityCircleDollarToSlot",
        "title": "Circle Dollar To Slot",
        "className": "fa-solid fa-circle-dollar-to-slot",
        "type": "sui",
        "categories": [
            "charity",
            "money",
            "political"
        ]
    },
    {
        "name": "fa-CharityDollarSign",
        "title": "Dollar Sign",
        "className": "fa-solid fa-dollar-sign",
        "type": "sui",
        "categories": [
            "charity",
            "maps",
            "money"
        ]
    },
    {
        "name": "fa-CharityGift",
        "title": "Gift",
        "className": "fa-solid fa-gift",
        "type": "sui",
        "categories": [
            "charity",
            "holidays",
            "maps",
            "shopping"
        ]
    },
    {
        "name": "fa-CharityHandHoldingDollar",
        "title": "Hand Holding Dollar",
        "className": "fa-solid fa-hand-holding-dollar",
        "type": "sui",
        "categories": [
            "charity",
            "hands",
            "money"
        ]
    },
    {
        "name": "fa-CharityHandHoldingDroplet",
        "title": "Hand Holding Droplet",
        "className": "fa-solid fa-hand-holding-droplet",
        "type": "sui",
        "categories": [
            "charity",
            "hands",
            "medical+health"
        ]
    },
    {
        "name": "fa-CharityHandHoldingHand",
        "title": "Hand Holding Hand",
        "className": "fa-solid fa-hand-holding-hand",
        "type": "sui",
        "categories": [
            "charity",
            "hands"
        ]
    },
    {
        "name": "fa-CharityHandHoldingHeart",
        "title": "Hand Holding Heart",
        "className": "fa-solid fa-hand-holding-heart",
        "type": "sui",
        "categories": [
            "charity",
            "hands"
        ]
    },
    {
        "name": "fa-CharityHandshake",
        "title": "Handshake",
        "className": "fa-solid fa-handshake",
        "type": "sui",
        "categories": [
            "charity",
            "hands",
            "political",
            "shopping"
        ]
    },
    {
        "name": "fa-CharityHandshakeSimple",
        "title": "Handshake Simple",
        "className": "fa-solid fa-handshake-simple",
        "type": "sui",
        "categories": [
            "charity",
            "hands"
        ]
    },
    {
        "name": "fa-CharityHandsHoldingChild",
        "title": "Hands Holding Child",
        "className": "fa-solid fa-hands-holding-child",
        "type": "sui",
        "categories": [
            "charity",
            "childhood",
            "hands",
            "security"
        ]
    },
    {
        "name": "fa-CharityHandsHoldingCircle",
        "title": "Hands Holding Circle",
        "className": "fa-solid fa-hands-holding-circle",
        "type": "sui",
        "categories": [
            "charity",
            "hands",
            "security"
        ]
    },
    {
        "name": "fa-CharityHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type": "sui",
        "categories": [
            "charity",
            "gaming",
            "holidays",
            "maps",
            "medical+health",
            "shapes",
            "shopping",
            "social",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-CharityLeaf",
        "title": "Leaf",
        "className": "fa-solid fa-leaf",
        "type": "sui",
        "categories": [
            "charity",
            "energy",
            "fruits+vegetables",
            "maps",
            "nature"
        ]
    },
    {
        "name": "fa-CharityParachuteBox",
        "title": "Parachute Box",
        "className": "fa-solid fa-parachute-box",
        "type": "sui",
        "categories": [
            "charity",
            "humanitarian"
        ]
    },
    {
        "name": "fa-CharityPiggyBank",
        "title": "Piggy Bank",
        "className": "fa-solid fa-piggy-bank",
        "type": "sui",
        "categories": [
            "charity",
            "money",
            "political"
        ]
    },
    {
        "name": "fa-CharityRibbon",
        "title": "Ribbon",
        "className": "fa-solid fa-ribbon",
        "type": "sui",
        "categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharitySeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type": "sui",
        "categories": [
            "charity",
            "energy",
            "food+beverage",
            "fruits+vegetables",
            "humanitarian",
            "nature",
            "science"
        ]
    },
    {
        "name": "fa-ChartsDiagramsBarsProgress",
        "title": "Bars Progress",
        "className": "fa-solid fa-bars-progress",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartArea",
        "title": "Chart Area",
        "className": "fa-solid fa-chart-area",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartBar",
        "title": "Chart Bar",
        "className": "fa-solid fa-chart-bar",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartColumn",
        "title": "Chart Column",
        "className": "fa-solid fa-chart-column",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartGantt",
        "title": "Chart Gantt",
        "className": "fa-solid fa-chart-gantt",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartLine",
        "title": "Chart Line",
        "className": "fa-solid fa-chart-line",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "money"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartPie",
        "title": "Chart Pie",
        "className": "fa-solid fa-chart-pie",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "money"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartSimple",
        "title": "Chart Simple",
        "className": "fa-solid fa-chart-simple",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "editing",
            "logistics"
        ]
    },
    {
        "name": "fa-ChartsDiagramsCircleHalfStroke",
        "title": "Circle Half Stroke",
        "className": "fa-solid fa-circle-half-stroke",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "design",
            "editing",
            "photos+images",
            "shapes"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramNext",
        "title": "Diagram Next",
        "className": "fa-solid fa-diagram-next",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramPredecessor",
        "title": "Diagram Predecessor",
        "className": "fa-solid fa-diagram-predecessor",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramProject",
        "title": "Diagram Project",
        "className": "fa-solid fa-diagram-project",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "coding"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramSuccessor",
        "title": "Diagram Successor",
        "className": "fa-solid fa-diagram-successor",
        "type": "sui",
        "categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsSquarePollHorizontal",
        "title": "Square Poll Horizontal",
        "className": "fa-solid fa-square-poll-horizontal",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "social"
        ]
    },
    {
        "name": "fa-ChartsDiagramsSquarePollVertical",
        "title": "Square Poll Vertical",
        "className": "fa-solid fa-square-poll-vertical",
        "type": "sui",
        "categories": [
            "charts+diagrams",
            "social"
        ]
    },
    {
        "name": "fa-ChildhoodAppleWhole",
        "title": "Apple Whole",
        "className": "fa-solid fa-apple-whole",
        "type": "sui",
        "categories": [
            "childhood",
            "education",
            "food+beverage",
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-ChildhoodBaby",
        "title": "Baby",
        "className": "fa-solid fa-baby",
        "type": "sui",
        "categories": [
            "childhood",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodBabyCarriage",
        "title": "Baby Carriage",
        "className": "fa-solid fa-baby-carriage",
        "type": "sui",
        "categories": [
            "childhood",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-ChildhoodBaseballBatBall",
        "title": "Baseball Bat Ball",
        "className": "fa-solid fa-baseball-bat-ball",
        "type": "sui",
        "categories": [
            "childhood",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-ChildhoodBath",
        "title": "Bath",
        "className": "fa-solid fa-bath",
        "type": "sui",
        "categories": [
            "childhood",
            "coding",
            "household",
            "maps"
        ]
    },
    {
        "name": "fa-ChildhoodCakeCandles",
        "title": "Cake Candles",
        "className": "fa-solid fa-cake-candles",
        "type": "sui",
        "categories": [
            "childhood",
            "food+beverage",
            "maps",
            "social"
        ]
    },
    {
        "name": "fa-ChildhoodChild",
        "title": "Child",
        "className": "fa-solid fa-child",
        "type": "sui",
        "categories": [
            "childhood",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodChildDress",
        "title": "Child Dress",
        "className": "fa-solid fa-child-dress",
        "type": "sui",
        "categories": [
            "childhood",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodChildReaching",
        "title": "Child Reaching",
        "className": "fa-solid fa-child-reaching",
        "type": "sui",
        "categories": [
            "childhood",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodChildren",
        "title": "Children",
        "className": "fa-solid fa-children",
        "type": "sui",
        "categories": [
            "childhood",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodCookie",
        "title": "Cookie",
        "className": "fa-solid fa-cookie",
        "type": "sui",
        "categories": [
            "childhood",
            "food+beverage"
        ]
    },
    {
        "name": "fa-ChildhoodCookieBite",
        "title": "Cookie Bite",
        "className": "fa-solid fa-cookie-bite",
        "type": "sui",
        "categories": [
            "childhood",
            "holidays"
        ]
    },
    {
        "name": "fa-ChildhoodCubesStacked",
        "title": "Cubes Stacked",
        "className": "fa-solid fa-cubes-stacked",
        "type": "sui",
        "categories": [
            "childhood",
            "food+beverage",
            "shapes"
        ]
    },
    {
        "name": "fa-ChildhoodGamepad",
        "title": "Gamepad",
        "className": "fa-solid fa-gamepad",
        "type": "sui",
        "categories": [
            "childhood",
            "devices+hardware",
            "gaming",
            "maps"
        ]
    },
    {
        "name": "fa-ChildhoodIceCream",
        "title": "Ice Cream",
        "className": "fa-solid fa-ice-cream",
        "type": "sui",
        "categories": [
            "childhood",
            "food+beverage"
        ]
    },
    {
        "name": "fa-ChildhoodMitten",
        "title": "Mitten",
        "className": "fa-solid fa-mitten",
        "type": "sui",
        "categories": [
            "childhood",
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ChildhoodPersonBiking",
        "title": "Person Biking",
        "className": "fa-solid fa-person-biking",
        "type": "sui",
        "categories": [
            "childhood",
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodPersonBreastfeeding",
        "title": "Person Breastfeeding",
        "className": "fa-solid fa-person-breastfeeding",
        "type": "sui",
        "categories": [
            "childhood",
            "humanitarian",
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-ChildhoodPuzzlePiece",
        "title": "Puzzle Piece",
        "className": "fa-solid fa-puzzle-piece",
        "type": "sui",
        "categories": [
            "childhood",
            "gaming"
        ]
    },
    {
        "name": "fa-ChildhoodRobot",
        "title": "Robot",
        "className": "fa-solid fa-robot",
        "type": "sui",
        "categories": [
            "childhood",
            "science-fiction"
        ]
    },
    {
        "name": "fa-ChildhoodShapes",
        "title": "Shapes",
        "className": "fa-solid fa-shapes",
        "type": "sui",
        "categories": [
            "childhood",
            "education",
            "shapes"
        ]
    },
    {
        "name": "fa-ChildhoodSnowman",
        "title": "Snowman",
        "className": "fa-solid fa-snowman",
        "type": "sui",
        "categories": [
            "childhood",
            "holidays"
        ]
    },
    {
        "name": "fa-ClothingFashionGlasses",
        "title": "Glasses",
        "className": "fa-solid fa-glasses",
        "type": "sui",
        "categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionGraduationCap",
        "title": "Graduation Cap",
        "className": "fa-solid fa-graduation-cap",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "education",
            "maps"
        ]
    },
    {
        "name": "fa-ClothingFashionHatCowboy",
        "title": "Hat Cowboy",
        "className": "fa-solid fa-hat-cowboy",
        "type": "sui",
        "categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionHatCowboySide",
        "title": "Hat Cowboy Side",
        "className": "fa-solid fa-hat-cowboy-side",
        "type": "sui",
        "categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionHatWizard",
        "title": "Hat Wizard",
        "className": "fa-solid fa-hat-wizard",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "gaming",
            "halloween"
        ]
    },
    {
        "name": "fa-ClothingFashionShirt",
        "title": "Shirt",
        "className": "fa-solid fa-shirt",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "humanitarian",
            "shopping"
        ]
    },
    {
        "name": "fa-ClothingFashionShoePrints",
        "title": "Shoe Prints",
        "className": "fa-solid fa-shoe-prints",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "maps",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-ClothingFashionSocks",
        "title": "Socks",
        "className": "fa-solid fa-socks",
        "type": "sui",
        "categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionUserTie",
        "title": "User Tie",
        "className": "fa-solid fa-user-tie",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "users+people"
        ]
    },
    {
        "name": "fa-ClothingFashionVest",
        "title": "Vest",
        "className": "fa-solid fa-vest",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "maps"
        ]
    },
    {
        "name": "fa-ClothingFashionVestPatches",
        "title": "Vest Patches",
        "className": "fa-solid fa-vest-patches",
        "type": "sui",
        "categories": [
            "clothing+fashion",
            "maps"
        ]
    },
    {
        "name": "fa-CodingBarcode",
        "title": "Barcode",
        "className": "fa-solid fa-barcode",
        "type": "sui",
        "categories": [
            "coding",
            "shopping"
        ]
    },
    {
        "name": "fa-CodingBars",
        "title": "Bars",
        "className": "fa-solid fa-bars",
        "type": "sui",
        "categories": [
            "coding",
            "editing"
        ]
    },
    {
        "name": "fa-CodingBarsStaggered",
        "title": "Bars Staggered",
        "className": "fa-solid fa-bars-staggered",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBoxArchive",
        "title": "Box Archive",
        "className": "fa-solid fa-box-archive",
        "type": "sui",
        "categories": [
            "coding",
            "files",
            "moving",
            "writing"
        ]
    },
    {
        "name": "fa-CodingBug",
        "title": "Bug",
        "className": "fa-solid fa-bug",
        "type": "sui",
        "categories": [
            "coding",
            "nature",
            "security"
        ]
    },
    {
        "name": "fa-CodingBugSlash",
        "title": "Bug Slash",
        "className": "fa-solid fa-bug-slash",
        "type": "sui",
        "categories": [
            "coding",
            "security"
        ]
    },
    {
        "name": "fa-CodingCircleNodes",
        "title": "Circle Nodes",
        "className": "fa-solid fa-circle-nodes",
        "type": "sui",
        "categories": [
            "coding",
            "connectivity",
            "design"
        ]
    },
    {
        "name": "fa-CodingCode",
        "title": "Code",
        "className": "fa-solid fa-code",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeBranch",
        "title": "Code Branch",
        "className": "fa-solid fa-code-branch",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeCommit",
        "title": "Code Commit",
        "className": "fa-solid fa-code-commit",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeCompare",
        "title": "Code Compare",
        "className": "fa-solid fa-code-compare",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeFork",
        "title": "Code Fork",
        "className": "fa-solid fa-code-fork",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeMerge",
        "title": "Code Merge",
        "className": "fa-solid fa-code-merge",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodePullRequest",
        "title": "Code Pull Request",
        "className": "fa-solid fa-code-pull-request",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCube",
        "title": "Cube",
        "className": "fa-solid fa-cube",
        "type": "sui",
        "categories": [
            "coding",
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-CodingCubes",
        "title": "Cubes",
        "className": "fa-solid fa-cubes",
        "type": "sui",
        "categories": [
            "coding",
            "design"
        ]
    },
    {
        "name": "fa-CodingFile",
        "title": "File",
        "className": "fa-solid fa-file",
        "type": "sui",
        "categories": [
            "coding",
            "files",
            "humanitarian",
            "shapes",
            "writing"
        ]
    },
    {
        "name": "fa-CodingFileCode",
        "title": "File Code",
        "className": "fa-solid fa-file-code",
        "type": "sui",
        "categories": [
            "coding",
            "files"
        ]
    },
    {
        "name": "fa-CodingFileLines",
        "title": "File Lines",
        "className": "fa-solid fa-file-lines",
        "type": "sui",
        "categories": [
            "coding",
            "files",
            "writing"
        ]
    },
    {
        "name": "fa-CodingFilter",
        "title": "Filter",
        "className": "fa-solid fa-filter",
        "type": "sui",
        "categories": [
            "coding",
            "science"
        ]
    },
    {
        "name": "fa-CodingFireExtinguisher",
        "title": "Fire Extinguisher",
        "className": "fa-solid fa-fire-extinguisher",
        "type": "sui",
        "categories": [
            "coding",
            "maps"
        ]
    },
    {
        "name": "fa-CodingFolder",
        "title": "Folder",
        "className": "fa-solid fa-folder",
        "type": "sui",
        "categories": [
            "coding",
            "files",
            "shapes",
            "writing"
        ]
    },
    {
        "name": "fa-CodingFolderOpen",
        "title": "Folder Open",
        "className": "fa-solid fa-folder-open",
        "type": "sui",
        "categories": [
            "coding",
            "files",
            "writing"
        ]
    },
    {
        "name": "fa-CodingFontAwesome",
        "title": "Font Awesome",
        "className": "fa-solid fa-font-awesome",
        "type": "sui",
        "categories": [
            "coding",
            "design"
        ]
    },
    {
        "name": "fa-CodingGear",
        "title": "Gear",
        "className": "fa-solid fa-gear",
        "type": "sui",
        "categories": [
            "coding",
            "editing",
            "spinners"
        ]
    },
    {
        "name": "fa-CodingGears",
        "title": "Gears",
        "className": "fa-solid fa-gears",
        "type": "sui",
        "categories": [
            "coding",
            "logistics"
        ]
    },
    {
        "name": "fa-CodingKeyboard",
        "title": "Keyboard",
        "className": "fa-solid fa-keyboard",
        "type": "sui",
        "categories": [
            "coding",
            "devices+hardware",
            "writing"
        ]
    },
    {
        "name": "fa-CodingLaptopCode",
        "title": "Laptop Code",
        "className": "fa-solid fa-laptop-code",
        "type": "sui",
        "categories": [
            "coding",
            "education"
        ]
    },
    {
        "name": "fa-CodingMicrochip",
        "title": "Microchip",
        "className": "fa-solid fa-microchip",
        "type": "sui",
        "categories": [
            "coding",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CodingMugSaucer",
        "title": "Mug Saucer",
        "className": "fa-solid fa-mug-saucer",
        "type": "sui",
        "categories": [
            "coding",
            "food+beverage",
            "household",
            "maps"
        ]
    },
    {
        "name": "fa-CodingNetworkWired",
        "title": "Network Wired",
        "className": "fa-solid fa-network-wired",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingNotdef",
        "title": "Notdef",
        "className": "fa-solid fa-notdef",
        "type": "sui",
        "categories": [
            "coding",
            "writing"
        ]
    },
    {
        "name": "fa-CodingQrcode",
        "title": "Qrcode",
        "className": "fa-solid fa-qrcode",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingRectangleXmark",
        "title": "Rectangle Xmark",
        "className": "fa-solid fa-rectangle-xmark",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingShield",
        "title": "Shield",
        "className": "fa-solid fa-shield",
        "type": "sui",
        "categories": [
            "coding",
            "security",
            "shapes"
        ]
    },
    {
        "name": "fa-CodingShieldHalved",
        "title": "Shield Halved",
        "className": "fa-solid fa-shield-halved",
        "type": "sui",
        "categories": [
            "coding",
            "gaming",
            "security"
        ]
    },
    {
        "name": "fa-CodingSitemap",
        "title": "Sitemap",
        "className": "fa-solid fa-sitemap",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingTerminal",
        "title": "Terminal",
        "className": "fa-solid fa-terminal",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingUserSecret",
        "title": "User Secret",
        "className": "fa-solid fa-user-secret",
        "type": "sui",
        "categories": [
            "coding",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-CodingWebAwesome",
        "title": "Web Awesome",
        "className": "fa-solid fa-web-awesome",
        "type": "sui",
        "categories": [
            "coding",
            "design"
        ]
    },
    {
        "name": "fa-CodingWindowMaximize",
        "title": "Window Maximize",
        "className": "fa-solid fa-window-maximize",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingWindowMinimize",
        "title": "Window Minimize",
        "className": "fa-solid fa-window-minimize",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingWindowRestore",
        "title": "Window Restore",
        "className": "fa-solid fa-window-restore",
        "type": "sui",
        "categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CommunicationAddressBook",
        "title": "Address Book",
        "className": "fa-solid fa-address-book",
        "type": "sui",
        "categories": [
            "communication",
            "users+people"
        ]
    },
    {
        "name": "fa-CommunicationAt",
        "title": "At",
        "className": "fa-solid fa-at",
        "type": "sui",
        "categories": [
            "communication",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-CommunicationBlenderPhone",
        "title": "Blender Phone",
        "className": "fa-solid fa-blender-phone",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationBluetoothB",
        "title": "Bluetooth B",
        "className": "fa-solid fa-bluetooth-b",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationBullhorn",
        "title": "Bullhorn",
        "className": "fa-solid fa-bullhorn",
        "type": "sui",
        "categories": [
            "communication",
            "political",
            "shopping"
        ]
    },
    {
        "name": "fa-CommunicationComment",
        "title": "Comment",
        "className": "fa-solid fa-comment",
        "type": "sui",
        "categories": [
            "communication",
            "shapes",
            "social"
        ]
    },
    {
        "name": "fa-CommunicationCommentDots",
        "title": "Comment Dots",
        "className": "fa-solid fa-comment-dots",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentMedical",
        "title": "Comment Medical",
        "className": "fa-solid fa-comment-medical",
        "type": "sui",
        "categories": [
            "communication",
            "medical+health"
        ]
    },
    {
        "name": "fa-CommunicationComments",
        "title": "Comments",
        "className": "fa-solid fa-comments",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentSlash",
        "title": "Comment Slash",
        "className": "fa-solid fa-comment-slash",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentSms",
        "title": "Comment Sms",
        "className": "fa-solid fa-comment-sms",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationEnvelope",
        "title": "Envelope",
        "className": "fa-solid fa-envelope",
        "type": "sui",
        "categories": [
            "communication",
            "humanitarian",
            "social",
            "writing"
        ]
    },
    {
        "name": "fa-CommunicationEnvelopeCircleCheck",
        "title": "Envelope Circle Check",
        "className": "fa-solid fa-envelope-circle-check",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationEnvelopeOpen",
        "title": "Envelope Open",
        "className": "fa-solid fa-envelope-open",
        "type": "sui",
        "categories": [
            "communication",
            "writing"
        ]
    },
    {
        "name": "fa-CommunicationFaceFrown",
        "title": "Face Frown",
        "className": "fa-solid fa-face-frown",
        "type": "sui",
        "categories": [
            "communication",
            "emoji",
            "users+people"
        ]
    },
    {
        "name": "fa-CommunicationFaceMeh",
        "title": "Face Meh",
        "className": "fa-solid fa-face-meh",
        "type": "sui",
        "categories": [
            "communication",
            "emoji",
            "users+people"
        ]
    },
    {
        "name": "fa-CommunicationFaceSmile",
        "title": "Face Smile",
        "className": "fa-solid fa-face-smile",
        "type": "sui",
        "categories": [
            "communication",
            "emoji",
            "users+people"
        ]
    },
    {
        "name": "fa-CommunicationFax",
        "title": "Fax",
        "className": "fa-solid fa-fax",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationIcons",
        "title": "Icons",
        "className": "fa-solid fa-icons",
        "type": "sui",
        "categories": [
            "communication",
            "design",
            "social",
            "text-formatting"
        ]
    },
    {
        "name": "fa-CommunicationInbox",
        "title": "Inbox",
        "className": "fa-solid fa-inbox",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationLanguage",
        "title": "Language",
        "className": "fa-solid fa-language",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMessage",
        "title": "Message",
        "className": "fa-solid fa-message",
        "type": "sui",
        "categories": [
            "communication",
            "social"
        ]
    },
    {
        "name": "fa-CommunicationMicrophone",
        "title": "Microphone",
        "className": "fa-solid fa-microphone",
        "type": "sui",
        "categories": [
            "communication",
            "film+video",
            "music+video",
            "toggle"
        ]
    },
    {
        "name": "fa-CommunicationMicrophoneLines",
        "title": "Microphone Lines",
        "className": "fa-solid fa-microphone-lines",
        "type": "sui",
        "categories": [
            "communication",
            "film+video",
            "music+video"
        ]
    },
    {
        "name": "fa-CommunicationMicrophoneLinesSlash",
        "title": "Microphone Lines Slash",
        "className": "fa-solid fa-microphone-lines-slash",
        "type": "sui",
        "categories": [
            "communication",
            "film+video",
            "music+video"
        ]
    },
    {
        "name": "fa-CommunicationMicrophoneSlash",
        "title": "Microphone Slash",
        "className": "fa-solid fa-microphone-slash",
        "type": "sui",
        "categories": [
            "communication",
            "film+video",
            "music+video",
            "toggle"
        ]
    },
    {
        "name": "fa-CommunicationMobile",
        "title": "Mobile",
        "className": "fa-solid fa-mobile",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationMobileButton",
        "title": "Mobile Button",
        "className": "fa-solid fa-mobile-button",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationMobileRetro",
        "title": "Mobile Retro",
        "className": "fa-solid fa-mobile-retro",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationMobileScreen",
        "title": "Mobile Screen",
        "className": "fa-solid fa-mobile-screen",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationMobileScreenButton",
        "title": "Mobile Screen Button",
        "className": "fa-solid fa-mobile-screen-button",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-CommunicationPaperPlane",
        "title": "Paper Plane",
        "className": "fa-solid fa-paper-plane",
        "type": "sui",
        "categories": [
            "communication",
            "transportation",
            "travel+hotel",
            "writing"
        ]
    },
    {
        "name": "fa-CommunicationPhone",
        "title": "Phone",
        "className": "fa-solid fa-phone",
        "type": "sui",
        "categories": [
            "communication",
            "maps"
        ]
    },
    {
        "name": "fa-CommunicationPhoneFlip",
        "title": "Phone Flip",
        "className": "fa-solid fa-phone-flip",
        "type": "sui",
        "categories": [
            "communication",
            "maps"
        ]
    },
    {
        "name": "fa-CommunicationPhoneSlash",
        "title": "Phone Slash",
        "className": "fa-solid fa-phone-slash",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPoo",
        "title": "Poo",
        "className": "fa-solid fa-poo",
        "type": "sui",
        "categories": [
            "communication",
            "users+people"
        ]
    },
    {
        "name": "fa-CommunicationQuoteLeft",
        "title": "Quote Left",
        "className": "fa-solid fa-quote-left",
        "type": "sui",
        "categories": [
            "communication",
            "punctuation+symbols",
            "writing"
        ]
    },
    {
        "name": "fa-CommunicationQuoteRight",
        "title": "Quote Right",
        "className": "fa-solid fa-quote-right",
        "type": "sui",
        "categories": [
            "communication",
            "punctuation+symbols",
            "writing"
        ]
    },
    {
        "name": "fa-CommunicationSquareEnvelope",
        "title": "Square Envelope",
        "className": "fa-solid fa-square-envelope",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationSquarePhone",
        "title": "Square Phone",
        "className": "fa-solid fa-square-phone",
        "type": "sui",
        "categories": [
            "communication",
            "maps"
        ]
    },
    {
        "name": "fa-CommunicationSquarePhoneFlip",
        "title": "Square Phone Flip",
        "className": "fa-solid fa-square-phone-flip",
        "type": "sui",
        "categories": [
            "communication",
            "maps"
        ]
    },
    {
        "name": "fa-CommunicationSquareRss",
        "title": "Square Rss",
        "className": "fa-solid fa-square-rss",
        "type": "sui",
        "categories": [
            "communication",
            "film+video"
        ]
    },
    {
        "name": "fa-CommunicationTowerCell",
        "title": "Tower Cell",
        "className": "fa-solid fa-tower-cell",
        "type": "sui",
        "categories": [
            "communication",
            "connectivity",
            "film+video",
            "humanitarian"
        ]
    },
    {
        "name": "fa-CommunicationVideo",
        "title": "Video",
        "className": "fa-solid fa-video",
        "type": "sui",
        "categories": [
            "communication",
            "film+video",
            "social"
        ]
    },
    {
        "name": "fa-CommunicationVideoSlash",
        "title": "Video Slash",
        "className": "fa-solid fa-video-slash",
        "type": "sui",
        "categories": [
            "communication",
            "film+video"
        ]
    },
    {
        "name": "fa-CommunicationVoicemail",
        "title": "Voicemail",
        "className": "fa-solid fa-voicemail",
        "type": "sui",
        "categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationWalkieTalkie",
        "title": "Walkie Talkie",
        "className": "fa-solid fa-walkie-talkie",
        "type": "sui",
        "categories": [
            "communication",
            "devices+hardware",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ConnectivityBluetooth",
        "title": "Bluetooth",
        "className": "fa-solid fa-bluetooth",
        "type": "sui",
        "categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityCloud",
        "title": "Cloud",
        "className": "fa-solid fa-cloud",
        "type": "sui",
        "categories": [
            "connectivity",
            "shapes",
            "weather"
        ]
    },
    {
        "name": "fa-ConnectivityEthernet",
        "title": "Ethernet",
        "className": "fa-solid fa-ethernet",
        "type": "sui",
        "categories": [
            "connectivity",
            "devices+hardware"
        ]
    },
    {
        "name": "fa-ConnectivityHouseSignal",
        "title": "House Signal",
        "className": "fa-solid fa-house-signal",
        "type": "sui",
        "categories": [
            "connectivity",
            "household"
        ]
    },
    {
        "name": "fa-ConnectivityRss",
        "title": "Rss",
        "className": "fa-solid fa-rss",
        "type": "sui",
        "categories": [
            "connectivity",
            "media-playback"
        ]
    },
    {
        "name": "fa-ConnectivitySignal",
        "title": "Signal",
        "className": "fa-solid fa-signal",
        "type": "sui",
        "categories": [
            "connectivity",
            "toggle"
        ]
    },
    {
        "name": "fa-ConnectivityTowerBroadcast",
        "title": "Tower Broadcast",
        "className": "fa-solid fa-tower-broadcast",
        "type": "sui",
        "categories": [
            "connectivity",
            "energy",
            "film+video",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ConnectivityWifi",
        "title": "Wifi",
        "className": "fa-solid fa-wifi",
        "type": "sui",
        "categories": [
            "connectivity",
            "humanitarian",
            "maps",
            "toggle"
        ]
    },
    {
        "name": "fa-ConstructionArrowUpFromGroundWater",
        "title": "Arrow Up From Ground Water",
        "className": "fa-solid fa-arrow-up-from-ground-water",
        "type": "sui",
        "categories": [
            "construction",
            "energy"
        ]
    },
    {
        "name": "fa-ConstructionBoreHole",
        "title": "Bore Hole",
        "className": "fa-solid fa-bore-hole",
        "type": "sui",
        "categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionBrush",
        "title": "Brush",
        "className": "fa-solid fa-brush",
        "type": "sui",
        "categories": [
            "construction",
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-ConstructionCompassDrafting",
        "title": "Compass Drafting",
        "className": "fa-solid fa-compass-drafting",
        "type": "sui",
        "categories": [
            "construction",
            "design"
        ]
    },
    {
        "name": "fa-ConstructionDumpster",
        "title": "Dumpster",
        "className": "fa-solid fa-dumpster",
        "type": "sui",
        "categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionDumpsterFire",
        "title": "Dumpster Fire",
        "className": "fa-solid fa-dumpster-fire",
        "type": "sui",
        "categories": [
            "construction",
            "political"
        ]
    },
    {
        "name": "fa-ConstructionHammer",
        "title": "Hammer",
        "className": "fa-solid fa-hammer",
        "type": "sui",
        "categories": [
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ConstructionHelmetSafety",
        "title": "Helmet Safety",
        "className": "fa-solid fa-helmet-safety",
        "type": "sui",
        "categories": [
            "construction",
            "logistics"
        ]
    },
    {
        "name": "fa-ConstructionMound",
        "title": "Mound",
        "className": "fa-solid fa-mound",
        "type": "sui",
        "categories": [
            "construction",
            "nature",
            "sports+fitness",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-ConstructionPaintRoller",
        "title": "Paint Roller",
        "className": "fa-solid fa-paint-roller",
        "type": "sui",
        "categories": [
            "construction",
            "design"
        ]
    },
    {
        "name": "fa-ConstructionPencil",
        "title": "Pencil",
        "className": "fa-solid fa-pencil",
        "type": "sui",
        "categories": [
            "construction",
            "design",
            "editing",
            "writing"
        ]
    },
    {
        "name": "fa-ConstructionPenRuler",
        "title": "Pen Ruler",
        "className": "fa-solid fa-pen-ruler",
        "type": "sui",
        "categories": [
            "construction",
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-ConstructionPersonDigging",
        "title": "Person Digging",
        "className": "fa-solid fa-person-digging",
        "type": "sui",
        "categories": [
            "construction",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-ConstructionRuler",
        "title": "Ruler",
        "className": "fa-solid fa-ruler",
        "type": "sui",
        "categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionRulerCombined",
        "title": "Ruler Combined",
        "className": "fa-solid fa-ruler-combined",
        "type": "sui",
        "categories": [
            "construction",
            "design"
        ]
    },
    {
        "name": "fa-ConstructionRulerHorizontal",
        "title": "Ruler Horizontal",
        "className": "fa-solid fa-ruler-horizontal",
        "type": "sui",
        "categories": [
            "construction",
            "design"
        ]
    },
    {
        "name": "fa-ConstructionRulerVertical",
        "title": "Ruler Vertical",
        "className": "fa-solid fa-ruler-vertical",
        "type": "sui",
        "categories": [
            "construction",
            "design"
        ]
    },
    {
        "name": "fa-ConstructionScrewdriver",
        "title": "Screwdriver",
        "className": "fa-solid fa-screwdriver",
        "type": "sui",
        "categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionScrewdriverWrench",
        "title": "Screwdriver Wrench",
        "className": "fa-solid fa-screwdriver-wrench",
        "type": "sui",
        "categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionSheetPlastic",
        "title": "Sheet Plastic",
        "className": "fa-solid fa-sheet-plastic",
        "type": "sui",
        "categories": [
            "construction",
            "household",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ConstructionToolbox",
        "title": "Toolbox",
        "className": "fa-solid fa-toolbox",
        "type": "sui",
        "categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionTrowel",
        "title": "Trowel",
        "className": "fa-solid fa-trowel",
        "type": "sui",
        "categories": [
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ConstructionTrowelBricks",
        "title": "Trowel Bricks",
        "className": "fa-solid fa-trowel-bricks",
        "type": "sui",
        "categories": [
            "construction",
            "humanitarian"
        ]
    },
    {
        "name": "fa-ConstructionWrench",
        "title": "Wrench",
        "className": "fa-solid fa-wrench",
        "type": "sui",
        "categories": [
            "construction",
            "maps"
        ]
    },
    {
        "name": "fa-DesignBezierCurve",
        "title": "Bezier Curve",
        "className": "fa-solid fa-bezier-curve",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignClone",
        "title": "Clone",
        "className": "fa-solid fa-clone",
        "type": "sui",
        "categories": [
            "design",
            "files",
            "photos+images"
        ]
    },
    {
        "name": "fa-DesignCopy",
        "title": "Copy",
        "className": "fa-solid fa-copy",
        "type": "sui",
        "categories": [
            "design",
            "files"
        ]
    },
    {
        "name": "fa-DesignCrop",
        "title": "Crop",
        "className": "fa-solid fa-crop",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DesignCropSimple",
        "title": "Crop Simple",
        "className": "fa-solid fa-crop-simple",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DesignCrosshairs",
        "title": "Crosshairs",
        "className": "fa-solid fa-crosshairs",
        "type": "sui",
        "categories": [
            "design",
            "maps",
            "spinners"
        ]
    },
    {
        "name": "fa-DesignDrawPolygon",
        "title": "Draw Polygon",
        "className": "fa-solid fa-draw-polygon",
        "type": "sui",
        "categories": [
            "design",
            "maps"
        ]
    },
    {
        "name": "fa-DesignDroplet",
        "title": "Droplet",
        "className": "fa-solid fa-droplet",
        "type": "sui",
        "categories": [
            "design",
            "humanitarian",
            "maps",
            "medical+health",
            "photos+images"
        ]
    },
    {
        "name": "fa-DesignDropletSlash",
        "title": "Droplet Slash",
        "className": "fa-solid fa-droplet-slash",
        "type": "sui",
        "categories": [
            "design",
            "medical+health"
        ]
    },
    {
        "name": "fa-DesignEraser",
        "title": "Eraser",
        "className": "fa-solid fa-eraser",
        "type": "sui",
        "categories": [
            "design",
            "writing"
        ]
    },
    {
        "name": "fa-DesignEyeDropper",
        "title": "Eye Dropper",
        "className": "fa-solid fa-eye-dropper",
        "type": "sui",
        "categories": [
            "design",
            "editing",
            "medical+health",
            "photos+images",
            "science"
        ]
    },
    {
        "name": "fa-DesignEyeSlash",
        "title": "Eye Slash",
        "className": "fa-solid fa-eye-slash",
        "type": "sui",
        "categories": [
            "design",
            "editing",
            "maps",
            "photos+images",
            "security"
        ]
    },
    {
        "name": "fa-DesignFill",
        "title": "Fill",
        "className": "fa-solid fa-fill",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignFillDrip",
        "title": "Fill Drip",
        "className": "fa-solid fa-fill-drip",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignFloppyDisk",
        "title": "Floppy Disk",
        "className": "fa-solid fa-floppy-disk",
        "type": "sui",
        "categories": [
            "design",
            "devices+hardware",
            "files"
        ]
    },
    {
        "name": "fa-DesignHighlighter",
        "title": "Highlighter",
        "className": "fa-solid fa-highlighter",
        "type": "sui",
        "categories": [
            "design",
            "text-formatting"
        ]
    },
    {
        "name": "fa-DesignLayerGroup",
        "title": "Layer Group",
        "className": "fa-solid fa-layer-group",
        "type": "sui",
        "categories": [
            "design",
            "maps"
        ]
    },
    {
        "name": "fa-DesignLinesLeaning",
        "title": "Lines Leaning",
        "className": "fa-solid fa-lines-leaning",
        "type": "sui",
        "categories": [
            "design",
            "shapes"
        ]
    },
    {
        "name": "fa-DesignMarker",
        "title": "Marker",
        "className": "fa-solid fa-marker",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignObjectGroup",
        "title": "Object Group",
        "className": "fa-solid fa-object-group",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignObjectUngroup",
        "title": "Object Ungroup",
        "className": "fa-solid fa-object-ungroup",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPaintbrush",
        "title": "Paintbrush",
        "className": "fa-solid fa-paintbrush",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DesignPalette",
        "title": "Palette",
        "className": "fa-solid fa-palette",
        "type": "sui",
        "categories": [
            "design",
            "spinners"
        ]
    },
    {
        "name": "fa-DesignPaste",
        "title": "Paste",
        "className": "fa-solid fa-paste",
        "type": "sui",
        "categories": [
            "design",
            "files"
        ]
    },
    {
        "name": "fa-DesignPen",
        "title": "Pen",
        "className": "fa-solid fa-pen",
        "type": "sui",
        "categories": [
            "design",
            "editing",
            "writing"
        ]
    },
    {
        "name": "fa-DesignPenClip",
        "title": "Pen Clip",
        "className": "fa-solid fa-pen-clip",
        "type": "sui",
        "categories": [
            "design",
            "editing",
            "writing"
        ]
    },
    {
        "name": "fa-DesignPenFancy",
        "title": "Pen Fancy",
        "className": "fa-solid fa-pen-fancy",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DesignPenNib",
        "title": "Pen Nib",
        "className": "fa-solid fa-pen-nib",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DesignPenToSquare",
        "title": "Pen To Square",
        "className": "fa-solid fa-pen-to-square",
        "type": "sui",
        "categories": [
            "design",
            "editing",
            "writing"
        ]
    },
    {
        "name": "fa-DesignScissors",
        "title": "Scissors",
        "className": "fa-solid fa-scissors",
        "type": "sui",
        "categories": [
            "design",
            "editing",
            "files"
        ]
    },
    {
        "name": "fa-DesignSplotch",
        "title": "Splotch",
        "className": "fa-solid fa-splotch",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignSprayCan",
        "title": "Spray Can",
        "className": "fa-solid fa-spray-can",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignStamp",
        "title": "Stamp",
        "className": "fa-solid fa-stamp",
        "type": "sui",
        "categories": [
            "design",
            "money"
        ]
    },
    {
        "name": "fa-DesignStapler",
        "title": "Stapler",
        "className": "fa-solid fa-stapler",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignSwatchbook",
        "title": "Swatchbook",
        "className": "fa-solid fa-swatchbook",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignVectorSquare",
        "title": "Vector Square",
        "className": "fa-solid fa-vector-square",
        "type": "sui",
        "categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignWandMagic",
        "title": "Wand Magic",
        "className": "fa-solid fa-wand-magic",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DesignWandMagicSparkles",
        "title": "Wand Magic Sparkles",
        "className": "fa-solid fa-wand-magic-sparkles",
        "type": "sui",
        "categories": [
            "design",
            "editing"
        ]
    },
    {
        "name": "fa-DevicesHardwareCamera",
        "title": "Camera",
        "className": "fa-solid fa-camera",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "photos+images",
            "shopping",
            "social"
        ]
    },
    {
        "name": "fa-DevicesHardwareCameraRetro",
        "title": "Camera Retro",
        "className": "fa-solid fa-camera-retro",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "photos+images",
            "shopping"
        ]
    },
    {
        "name": "fa-DevicesHardwareCompactDisc",
        "title": "Compact Disc",
        "className": "fa-solid fa-compact-disc",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "film+video",
            "music+video",
            "spinners"
        ]
    },
    {
        "name": "fa-DevicesHardwareComputer",
        "title": "Computer",
        "className": "fa-solid fa-computer",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "household"
        ]
    },
    {
        "name": "fa-DevicesHardwareComputerMouse",
        "title": "Computer Mouse",
        "className": "fa-solid fa-computer-mouse",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDatabase",
        "title": "Database",
        "className": "fa-solid fa-database",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDesktop",
        "title": "Desktop",
        "className": "fa-solid fa-desktop",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDisplay",
        "title": "Display",
        "className": "fa-solid fa-display",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareHardDrive",
        "title": "Hard Drive",
        "className": "fa-solid fa-hard-drive",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareHeadphones",
        "title": "Headphones",
        "className": "fa-solid fa-headphones",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "film+video",
            "music+video"
        ]
    },
    {
        "name": "fa-DevicesHardwareHouseLaptop",
        "title": "House Laptop",
        "className": "fa-solid fa-house-laptop",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "household"
        ]
    },
    {
        "name": "fa-DevicesHardwareLaptop",
        "title": "Laptop",
        "className": "fa-solid fa-laptop",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "humanitarian"
        ]
    },
    {
        "name": "fa-DevicesHardwareLaptopFile",
        "title": "Laptop File",
        "className": "fa-solid fa-laptop-file",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "education"
        ]
    },
    {
        "name": "fa-DevicesHardwareMemory",
        "title": "Memory",
        "className": "fa-solid fa-memory",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwarePlug",
        "title": "Plug",
        "className": "fa-solid fa-plug",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "energy",
            "household",
            "humanitarian",
            "maps"
        ]
    },
    {
        "name": "fa-DevicesHardwarePowerOff",
        "title": "Power Off",
        "className": "fa-solid fa-power-off",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "energy"
        ]
    },
    {
        "name": "fa-DevicesHardwarePrint",
        "title": "Print",
        "className": "fa-solid fa-print",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "maps"
        ]
    },
    {
        "name": "fa-DevicesHardwareSdCard",
        "title": "Sd Card",
        "className": "fa-solid fa-sd-card",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareServer",
        "title": "Server",
        "className": "fa-solid fa-server",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareSimCard",
        "title": "Sim Card",
        "className": "fa-solid fa-sim-card",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTablet",
        "title": "Tablet",
        "className": "fa-solid fa-tablet",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTabletButton",
        "title": "Tablet Button",
        "className": "fa-solid fa-tablet-button",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTabletScreenButton",
        "title": "Tablet Screen Button",
        "className": "fa-solid fa-tablet-screen-button",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTachographDigital",
        "title": "Tachograph Digital",
        "className": "fa-solid fa-tachograph-digital",
        "type": "sui",
        "categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTv",
        "title": "Tv",
        "className": "fa-solid fa-tv",
        "type": "sui",
        "categories": [
            "devices+hardware",
            "film+video",
            "household"
        ]
    },
    {
        "name": "fa-DisasterCrisisBiohazard",
        "title": "Biohazard",
        "className": "fa-solid fa-biohazard",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-DisasterCrisisBurst",
        "title": "Burst",
        "className": "fa-solid fa-burst",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "security",
            "shapes"
        ]
    },
    {
        "name": "fa-DisasterCrisisChildCombatant",
        "title": "Child Combatant",
        "className": "fa-solid fa-child-combatant",
        "type": "sui",
        "categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisCloudBolt",
        "title": "Cloud Bolt",
        "className": "fa-solid fa-cloud-bolt",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisCloudShowersHeavy",
        "title": "Cloud Showers Heavy",
        "className": "fa-solid fa-cloud-showers-heavy",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisCloudShowersWater",
        "title": "Cloud Showers Water",
        "className": "fa-solid fa-cloud-showers-water",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisHelmetUn",
        "title": "Helmet Un",
        "className": "fa-solid fa-helmet-un",
        "type": "sui",
        "categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHillAvalanche",
        "title": "Hill Avalanche",
        "className": "fa-solid fa-hill-avalanche",
        "type": "sui",
        "categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHillRockslide",
        "title": "Hill Rockslide",
        "className": "fa-solid fa-hill-rockslide",
        "type": "sui",
        "categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseFloodWater",
        "title": "House Flood Water",
        "className": "fa-solid fa-house-flood-water",
        "type": "sui",
        "categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseFloodWaterCircleArrowRight",
        "title": "House Flood Water Circle Arrow Right",
        "className": "fa-solid fa-house-flood-water-circle-arrow-right",
        "type": "sui",
        "categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseTsunami",
        "title": "House Tsunami",
        "className": "fa-solid fa-house-tsunami",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisHurricane",
        "title": "Hurricane",
        "className": "fa-solid fa-hurricane",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "spinners",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonDrowning",
        "title": "Person Drowning",
        "className": "fa-solid fa-person-drowning",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonRifle",
        "title": "Person Rifle",
        "className": "fa-solid fa-person-rifle",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonWalkingArrowLoopLeft",
        "title": "Person Walking Arrow Loop Left",
        "className": "fa-solid fa-person-walking-arrow-loop-left",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonWalkingArrowRight",
        "title": "Person Walking Arrow Right",
        "className": "fa-solid fa-person-walking-arrow-right",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonWalkingDashedLineArrowRight",
        "title": "Person Walking Dashed Line Arrow Right",
        "className": "fa-solid fa-person-walking-dashed-line-arrow-right",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-DisasterCrisisPlantWilt",
        "title": "Plant Wilt",
        "className": "fa-solid fa-plant-wilt",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "nature"
        ]
    },
    {
        "name": "fa-DisasterCrisisSnowflake",
        "title": "Snowflake",
        "className": "fa-solid fa-snowflake",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "household",
            "humanitarian",
            "spinners",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisSunPlantWilt",
        "title": "Sun Plant Wilt",
        "className": "fa-solid fa-sun-plant-wilt",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisTemperatureArrowDown",
        "title": "Temperature Arrow Down",
        "className": "fa-solid fa-temperature-arrow-down",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "household",
            "humanitarian",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisTemperatureArrowUp",
        "title": "Temperature Arrow Up",
        "className": "fa-solid fa-temperature-arrow-up",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "household",
            "humanitarian",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisTornado",
        "title": "Tornado",
        "className": "fa-solid fa-tornado",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisVolcano",
        "title": "Volcano",
        "className": "fa-solid fa-volcano",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "nature",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisWheatAwnCircleExclamation",
        "title": "Wheat Awn Circle Exclamation",
        "className": "fa-solid fa-wheat-awn-circle-exclamation",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "food+beverage",
            "humanitarian"
        ]
    },
    {
        "name": "fa-DisasterCrisisWind",
        "title": "Wind",
        "className": "fa-solid fa-wind",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "energy",
            "humanitarian",
            "nature",
            "weather"
        ]
    },
    {
        "name": "fa-DisasterCrisisXmarksLines",
        "title": "Xmarks Lines",
        "className": "fa-solid fa-xmarks-lines",
        "type": "sui",
        "categories": [
            "disaster+crisis",
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-EditingBandage",
        "title": "Bandage",
        "className": "fa-solid fa-bandage",
        "type": "sui",
        "categories": [
            "editing",
            "medical+health"
        ]
    },
    {
        "name": "fa-EditingCheck",
        "title": "Check",
        "className": "fa-solid fa-check",
        "type": "sui",
        "categories": [
            "editing",
            "punctuation+symbols",
            "text-formatting"
        ]
    },
    {
        "name": "fa-EditingCheckDouble",
        "title": "Check Double",
        "className": "fa-solid fa-check-double",
        "type": "sui",
        "categories": [
            "editing",
            "political",
            "punctuation+symbols",
            "text-formatting"
        ]
    },
    {
        "name": "fa-EditingCircleCheck",
        "title": "Circle Check",
        "className": "fa-solid fa-circle-check",
        "type": "sui",
        "categories": [
            "editing",
            "text-formatting",
            "toggle"
        ]
    },
    {
        "name": "fa-EditingDeleteLeft",
        "title": "Delete Left",
        "className": "fa-solid fa-delete-left",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingEllipsis",
        "title": "Ellipsis",
        "className": "fa-solid fa-ellipsis",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingEllipsisVertical",
        "title": "Ellipsis Vertical",
        "className": "fa-solid fa-ellipsis-vertical",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGrip",
        "title": "Grip",
        "className": "fa-solid fa-grip",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGripLines",
        "title": "Grip Lines",
        "className": "fa-solid fa-grip-lines",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGripLinesVertical",
        "title": "Grip Lines Vertical",
        "className": "fa-solid fa-grip-lines-vertical",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGripVertical",
        "title": "Grip Vertical",
        "className": "fa-solid fa-grip-vertical",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingLink",
        "title": "Link",
        "className": "fa-solid fa-link",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingLinkSlash",
        "title": "Link Slash",
        "className": "fa-solid fa-link-slash",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingMinus",
        "title": "Minus",
        "className": "fa-solid fa-minus",
        "type": "sui",
        "categories": [
            "editing",
            "mathematics",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-EditingPlus",
        "title": "Plus",
        "className": "fa-solid fa-plus",
        "type": "sui",
        "categories": [
            "editing",
            "maps",
            "mathematics",
            "medical+health",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-EditingSignature",
        "title": "Signature",
        "className": "fa-solid fa-signature",
        "type": "sui",
        "categories": [
            "editing",
            "writing"
        ]
    },
    {
        "name": "fa-EditingSliders",
        "title": "Sliders",
        "className": "fa-solid fa-sliders",
        "type": "sui",
        "categories": [
            "editing",
            "media-playback",
            "music+video",
            "photos+images"
        ]
    },
    {
        "name": "fa-EditingSquareCheck",
        "title": "Square Check",
        "className": "fa-solid fa-square-check",
        "type": "sui",
        "categories": [
            "editing",
            "text-formatting"
        ]
    },
    {
        "name": "fa-EditingSquarePen",
        "title": "Square Pen",
        "className": "fa-solid fa-square-pen",
        "type": "sui",
        "categories": [
            "editing",
            "writing"
        ]
    },
    {
        "name": "fa-EditingTrash",
        "title": "Trash",
        "className": "fa-solid fa-trash",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingTrashArrowUp",
        "title": "Trash Arrow Up",
        "className": "fa-solid fa-trash-arrow-up",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingTrashCan",
        "title": "Trash Can",
        "className": "fa-solid fa-trash-can",
        "type": "sui",
        "categories": [
            "editing",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EditingTrashCanArrowUp",
        "title": "Trash Can Arrow Up",
        "className": "fa-solid fa-trash-can-arrow-up",
        "type": "sui",
        "categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingXmark",
        "title": "Xmark",
        "className": "fa-solid fa-xmark",
        "type": "sui",
        "categories": [
            "editing",
            "mathematics"
        ]
    },
    {
        "name": "fa-EducationAtom",
        "title": "Atom",
        "className": "fa-solid fa-atom",
        "type": "sui",
        "categories": [
            "education",
            "energy",
            "religion",
            "science",
            "science-fiction",
            "spinners"
        ]
    },
    {
        "name": "fa-EducationAward",
        "title": "Award",
        "className": "fa-solid fa-award",
        "type": "sui",
        "categories": [
            "education",
            "political"
        ]
    },
    {
        "name": "fa-EducationBookOpen",
        "title": "Book Open",
        "className": "fa-solid fa-book-open",
        "type": "sui",
        "categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationBookOpenReader",
        "title": "Book Open Reader",
        "className": "fa-solid fa-book-open-reader",
        "type": "sui",
        "categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationChalkboard",
        "title": "Chalkboard",
        "className": "fa-solid fa-chalkboard",
        "type": "sui",
        "categories": [
            "education",
            "photos+images"
        ]
    },
    {
        "name": "fa-EducationChalkboardUser",
        "title": "Chalkboard User",
        "className": "fa-solid fa-chalkboard-user",
        "type": "sui",
        "categories": [
            "education",
            "users+people"
        ]
    },
    {
        "name": "fa-EducationMasksTheater",
        "title": "Masks Theater",
        "className": "fa-solid fa-masks-theater",
        "type": "sui",
        "categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationMicroscope",
        "title": "Microscope",
        "className": "fa-solid fa-microscope",
        "type": "sui",
        "categories": [
            "education",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-EducationMusic",
        "title": "Music",
        "className": "fa-solid fa-music",
        "type": "sui",
        "categories": [
            "education",
            "maps",
            "media-playback",
            "music+video"
        ]
    },
    {
        "name": "fa-EducationPersonChalkboard",
        "title": "Person Chalkboard",
        "className": "fa-solid fa-person-chalkboard",
        "type": "sui",
        "categories": [
            "education",
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-EducationUserGraduate",
        "title": "User Graduate",
        "className": "fa-solid fa-user-graduate",
        "type": "sui",
        "categories": [
            "education",
            "users+people"
        ]
    },
    {
        "name": "fa-EmojiFaceAngry",
        "title": "Face Angry",
        "className": "fa-solid fa-face-angry",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceDizzy",
        "title": "Face Dizzy",
        "className": "fa-solid fa-face-dizzy",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceFlushed",
        "title": "Face Flushed",
        "className": "fa-solid fa-face-flushed",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceFrownOpen",
        "title": "Face Frown Open",
        "className": "fa-solid fa-face-frown-open",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrimace",
        "title": "Face Grimace",
        "className": "fa-solid fa-face-grimace",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrin",
        "title": "Face Grin",
        "className": "fa-solid fa-face-grin",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinBeam",
        "title": "Face Grin Beam",
        "className": "fa-solid fa-face-grin-beam",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinBeamSweat",
        "title": "Face Grin Beam Sweat",
        "className": "fa-solid fa-face-grin-beam-sweat",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinHearts",
        "title": "Face Grin Hearts",
        "className": "fa-solid fa-face-grin-hearts",
        "type": "sui",
        "categories": [
            "emoji",
            "holidays"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinSquint",
        "title": "Face Grin Squint",
        "className": "fa-solid fa-face-grin-squint",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinSquintTears",
        "title": "Face Grin Squint Tears",
        "className": "fa-solid fa-face-grin-squint-tears",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinStars",
        "title": "Face Grin Stars",
        "className": "fa-solid fa-face-grin-stars",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTears",
        "title": "Face Grin Tears",
        "className": "fa-solid fa-face-grin-tears",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTongue",
        "title": "Face Grin Tongue",
        "className": "fa-solid fa-face-grin-tongue",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTongueSquint",
        "title": "Face Grin Tongue Squint",
        "className": "fa-solid fa-face-grin-tongue-squint",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTongueWink",
        "title": "Face Grin Tongue Wink",
        "className": "fa-solid fa-face-grin-tongue-wink",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinWide",
        "title": "Face Grin Wide",
        "className": "fa-solid fa-face-grin-wide",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinWink",
        "title": "Face Grin Wink",
        "className": "fa-solid fa-face-grin-wink",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceKiss",
        "title": "Face Kiss",
        "className": "fa-solid fa-face-kiss",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceKissBeam",
        "title": "Face Kiss Beam",
        "className": "fa-solid fa-face-kiss-beam",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceKissWinkHeart",
        "title": "Face Kiss Wink Heart",
        "className": "fa-solid fa-face-kiss-wink-heart",
        "type": "sui",
        "categories": [
            "emoji",
            "holidays"
        ]
    },
    {
        "name": "fa-EmojiFaceLaugh",
        "title": "Face Laugh",
        "className": "fa-solid fa-face-laugh",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaughBeam",
        "title": "Face Laugh Beam",
        "className": "fa-solid fa-face-laugh-beam",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaughSquint",
        "title": "Face Laugh Squint",
        "className": "fa-solid fa-face-laugh-squint",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaughWink",
        "title": "Face Laugh Wink",
        "className": "fa-solid fa-face-laugh-wink",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceMehBlank",
        "title": "Face Meh Blank",
        "className": "fa-solid fa-face-meh-blank",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceRollingEyes",
        "title": "Face Rolling Eyes",
        "className": "fa-solid fa-face-rolling-eyes",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSadCry",
        "title": "Face Sad Cry",
        "className": "fa-solid fa-face-sad-cry",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSadTear",
        "title": "Face Sad Tear",
        "className": "fa-solid fa-face-sad-tear",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSmileBeam",
        "title": "Face Smile Beam",
        "className": "fa-solid fa-face-smile-beam",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSmileWink",
        "title": "Face Smile Wink",
        "className": "fa-solid fa-face-smile-wink",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSurprise",
        "title": "Face Surprise",
        "className": "fa-solid fa-face-surprise",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceTired",
        "title": "Face Tired",
        "className": "fa-solid fa-face-tired",
        "type": "sui",
        "categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EnergyBatteryEmpty",
        "title": "Battery Empty",
        "className": "fa-solid fa-battery-empty",
        "type": "sui",
        "categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryFull",
        "title": "Battery Full",
        "className": "fa-solid fa-battery-full",
        "type": "sui",
        "categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryHalf",
        "title": "Battery Half",
        "className": "fa-solid fa-battery-half",
        "type": "sui",
        "categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryQuarter",
        "title": "Battery Quarter",
        "className": "fa-solid fa-battery-quarter",
        "type": "sui",
        "categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryThreeQuarters",
        "title": "Battery Three Quarters",
        "className": "fa-solid fa-battery-three-quarters",
        "type": "sui",
        "categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBolt",
        "title": "Bolt",
        "className": "fa-solid fa-bolt",
        "type": "sui",
        "categories": [
            "energy",
            "photos+images",
            "weather"
        ]
    },
    {
        "name": "fa-EnergyExplosion",
        "title": "Explosion",
        "className": "fa-solid fa-explosion",
        "type": "sui",
        "categories": [
            "energy",
            "science-fiction",
            "security"
        ]
    },
    {
        "name": "fa-EnergyFan",
        "title": "Fan",
        "className": "fa-solid fa-fan",
        "type": "sui",
        "categories": [
            "energy",
            "household",
            "spinners"
        ]
    },
    {
        "name": "fa-EnergyFireFlameSimple",
        "title": "Fire Flame Simple",
        "className": "fa-solid fa-fire-flame-simple",
        "type": "sui",
        "categories": [
            "energy",
            "medical+health",
            "science",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-EnergyLightbulb",
        "title": "Lightbulb",
        "className": "fa-solid fa-lightbulb",
        "type": "sui",
        "categories": [
            "energy",
            "household",
            "maps"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleBolt",
        "title": "Plug Circle Bolt",
        "className": "fa-solid fa-plug-circle-bolt",
        "type": "sui",
        "categories": [
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleCheck",
        "title": "Plug Circle Check",
        "className": "fa-solid fa-plug-circle-check",
        "type": "sui",
        "categories": [
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleExclamation",
        "title": "Plug Circle Exclamation",
        "className": "fa-solid fa-plug-circle-exclamation",
        "type": "sui",
        "categories": [
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleMinus",
        "title": "Plug Circle Minus",
        "className": "fa-solid fa-plug-circle-minus",
        "type": "sui",
        "categories": [
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EnergyPlugCirclePlus",
        "title": "Plug Circle Plus",
        "className": "fa-solid fa-plug-circle-plus",
        "type": "sui",
        "categories": [
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleXmark",
        "title": "Plug Circle Xmark",
        "className": "fa-solid fa-plug-circle-xmark",
        "type": "sui",
        "categories": [
            "energy",
            "humanitarian"
        ]
    },
    {
        "name": "fa-EnergyPoop",
        "title": "Poop",
        "className": "fa-solid fa-poop",
        "type": "sui",
        "categories": [
            "energy",
            "medical+health"
        ]
    },
    {
        "name": "fa-EnergySolarPanel",
        "title": "Solar Panel",
        "className": "fa-solid fa-solar-panel",
        "type": "sui",
        "categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergySun",
        "title": "Sun",
        "className": "fa-solid fa-sun",
        "type": "sui",
        "categories": [
            "energy",
            "spinners",
            "weather"
        ]
    },
    {
        "name": "fa-EnergyWater",
        "title": "Water",
        "className": "fa-solid fa-water",
        "type": "sui",
        "categories": [
            "energy",
            "maritime",
            "marketing",
            "nature",
            "weather"
        ]
    },
    {
        "name": "fa-FilesFileArrowDown",
        "title": "File Arrow Down",
        "className": "fa-solid fa-file-arrow-down",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileArrowUp",
        "title": "File Arrow Up",
        "className": "fa-solid fa-file-arrow-up",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileAudio",
        "title": "File Audio",
        "className": "fa-solid fa-file-audio",
        "type": "sui",
        "categories": [
            "files",
            "film+video",
            "music+video"
        ]
    },
    {
        "name": "fa-FilesFileCircleCheck",
        "title": "File Circle Check",
        "className": "fa-solid fa-file-circle-check",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleExclamation",
        "title": "File Circle Exclamation",
        "className": "fa-solid fa-file-circle-exclamation",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleMinus",
        "title": "File Circle Minus",
        "className": "fa-solid fa-file-circle-minus",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCirclePlus",
        "title": "File Circle Plus",
        "className": "fa-solid fa-file-circle-plus",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleQuestion",
        "title": "File Circle Question",
        "className": "fa-solid fa-file-circle-question",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleXmark",
        "title": "File Circle Xmark",
        "className": "fa-solid fa-file-circle-xmark",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCsv",
        "title": "File Csv",
        "className": "fa-solid fa-file-csv",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileExcel",
        "title": "File Excel",
        "className": "fa-solid fa-file-excel",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileExport",
        "title": "File Export",
        "className": "fa-solid fa-file-export",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileImage",
        "title": "File Image",
        "className": "fa-solid fa-file-image",
        "type": "sui",
        "categories": [
            "files",
            "photos+images"
        ]
    },
    {
        "name": "fa-FilesFileImport",
        "title": "File Import",
        "className": "fa-solid fa-file-import",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFilePdf",
        "title": "File Pdf",
        "className": "fa-solid fa-file-pdf",
        "type": "sui",
        "categories": [
            "files",
            "humanitarian"
        ]
    },
    {
        "name": "fa-FilesFilePen",
        "title": "File Pen",
        "className": "fa-solid fa-file-pen",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFilePowerpoint",
        "title": "File Powerpoint",
        "className": "fa-solid fa-file-powerpoint",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileShield",
        "title": "File Shield",
        "className": "fa-solid fa-file-shield",
        "type": "sui",
        "categories": [
            "files",
            "security"
        ]
    },
    {
        "name": "fa-FilesFileVideo",
        "title": "File Video",
        "className": "fa-solid fa-file-video",
        "type": "sui",
        "categories": [
            "files",
            "film+video"
        ]
    },
    {
        "name": "fa-FilesFileWord",
        "title": "File Word",
        "className": "fa-solid fa-file-word",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileZipper",
        "title": "File Zipper",
        "className": "fa-solid fa-file-zipper",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFolderClosed",
        "title": "Folder Closed",
        "className": "fa-solid fa-folder-closed",
        "type": "sui",
        "categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesNoteSticky",
        "title": "Note Sticky",
        "className": "fa-solid fa-note-sticky",
        "type": "sui",
        "categories": [
            "files",
            "writing"
        ]
    },
    {
        "name": "fa-FilesPhotoFilm",
        "title": "Photo Film",
        "className": "fa-solid fa-photo-film",
        "type": "sui",
        "categories": [
            "files",
            "film+video",
            "photos+images",
            "social"
        ]
    },
    {
        "name": "fa-FilmVideoCircle",
        "title": "Circle",
        "className": "fa-solid fa-circle",
        "type": "sui",
        "categories": [
            "film+video",
            "shapes",
            "toggle"
        ]
    },
    {
        "name": "fa-FilmVideoClapperboard",
        "title": "Clapperboard",
        "className": "fa-solid fa-clapperboard",
        "type": "sui",
        "categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoFilm",
        "title": "Film",
        "className": "fa-solid fa-film",
        "type": "sui",
        "categories": [
            "film+video",
            "photos+images"
        ]
    },
    {
        "name": "fa-FilmVideoPodcast",
        "title": "Podcast",
        "className": "fa-solid fa-podcast",
        "type": "sui",
        "categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoTicket",
        "title": "Ticket",
        "className": "fa-solid fa-ticket",
        "type": "sui",
        "categories": [
            "film+video",
            "maps"
        ]
    },
    {
        "name": "fa-FilmVideoYoutube",
        "title": "Youtube",
        "className": "youtube",
        "type": "sui",
        "categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FoodBeverageBacon",
        "title": "Bacon",
        "className": "fa-solid fa-bacon",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBeerMugEmpty",
        "title": "Beer Mug Empty",
        "className": "fa-solid fa-beer-mug-empty",
        "type": "sui",
        "categories": [
            "food+beverage",
            "maps"
        ]
    },
    {
        "name": "fa-FoodBeverageBlender",
        "title": "Blender",
        "className": "fa-solid fa-blender",
        "type": "sui",
        "categories": [
            "food+beverage",
            "household"
        ]
    },
    {
        "name": "fa-FoodBeverageBone",
        "title": "Bone",
        "className": "fa-solid fa-bone",
        "type": "sui",
        "categories": [
            "food+beverage",
            "medical+health"
        ]
    },
    {
        "name": "fa-FoodBeverageBottleDroplet",
        "title": "Bottle Droplet",
        "className": "fa-solid fa-bottle-droplet",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBowlFood",
        "title": "Bowl Food",
        "className": "fa-solid fa-bowl-food",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBowlRice",
        "title": "Bowl Rice",
        "className": "fa-solid fa-bowl-rice",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBreadSlice",
        "title": "Bread Slice",
        "className": "fa-solid fa-bread-slice",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBurger",
        "title": "Burger",
        "className": "fa-solid fa-burger",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCandyCane",
        "title": "Candy Cane",
        "className": "fa-solid fa-candy-cane",
        "type": "sui",
        "categories": [
            "food+beverage",
            "holidays"
        ]
    },
    {
        "name": "fa-FoodBeverageCarrot",
        "title": "Carrot",
        "className": "fa-solid fa-carrot",
        "type": "sui",
        "categories": [
            "food+beverage",
            "fruits+vegetables",
            "holidays"
        ]
    },
    {
        "name": "fa-FoodBeverageChampagneGlasses",
        "title": "Champagne Glasses",
        "className": "fa-solid fa-champagne-glasses",
        "type": "sui",
        "categories": [
            "food+beverage",
            "holidays"
        ]
    },
    {
        "name": "fa-FoodBeverageCheese",
        "title": "Cheese",
        "className": "fa-solid fa-cheese",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCloudMeatball",
        "title": "Cloud Meatball",
        "className": "fa-solid fa-cloud-meatball",
        "type": "sui",
        "categories": [
            "food+beverage",
            "weather"
        ]
    },
    {
        "name": "fa-FoodBeverageDrumstickBite",
        "title": "Drumstick Bite",
        "className": "fa-solid fa-drumstick-bite",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageEgg",
        "title": "Egg",
        "className": "fa-solid fa-egg",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageFlask",
        "title": "Flask",
        "className": "fa-solid fa-flask",
        "type": "sui",
        "categories": [
            "food+beverage",
            "maps",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-FoodBeverageGlassWater",
        "title": "Glass Water",
        "className": "fa-solid fa-glass-water",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageGlassWaterDroplet",
        "title": "Glass Water Droplet",
        "className": "fa-solid fa-glass-water-droplet",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageHotdog",
        "title": "Hotdog",
        "className": "fa-solid fa-hotdog",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageJar",
        "title": "Jar",
        "className": "fa-solid fa-jar",
        "type": "sui",
        "categories": [
            "food+beverage",
            "household"
        ]
    },
    {
        "name": "fa-FoodBeverageJarWheat",
        "title": "Jar Wheat",
        "className": "fa-solid fa-jar-wheat",
        "type": "sui",
        "categories": [
            "food+beverage",
            "household"
        ]
    },
    {
        "name": "fa-FoodBeverageLemon",
        "title": "Lemon",
        "className": "fa-solid fa-lemon",
        "type": "sui",
        "categories": [
            "food+beverage",
            "fruits+vegetables",
            "maps"
        ]
    },
    {
        "name": "fa-FoodBeverageMartiniGlass",
        "title": "Martini Glass",
        "className": "fa-solid fa-martini-glass",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMartiniGlassCitrus",
        "title": "Martini Glass Citrus",
        "className": "fa-solid fa-martini-glass-citrus",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMartiniGlassEmpty",
        "title": "Martini Glass Empty",
        "className": "fa-solid fa-martini-glass-empty",
        "type": "sui",
        "categories": [
            "food+beverage",
            "maps"
        ]
    },
    {
        "name": "fa-FoodBeverageMugHot",
        "title": "Mug Hot",
        "className": "fa-solid fa-mug-hot",
        "type": "sui",
        "categories": [
            "food+beverage",
            "holidays"
        ]
    },
    {
        "name": "fa-FoodBeveragePepperHot",
        "title": "Pepper Hot",
        "className": "fa-solid fa-pepper-hot",
        "type": "sui",
        "categories": [
            "food+beverage",
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-FoodBeveragePizzaSlice",
        "title": "Pizza Slice",
        "className": "fa-solid fa-pizza-slice",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeveragePlateWheat",
        "title": "Plate Wheat",
        "className": "fa-solid fa-plate-wheat",
        "type": "sui",
        "categories": [
            "food+beverage",
            "humanitarian"
        ]
    },
    {
        "name": "fa-FoodBeverageStroopwafel",
        "title": "Stroopwafel",
        "className": "fa-solid fa-stroopwafel",
        "type": "sui",
        "categories": [
            "food+beverage",
            "spinners"
        ]
    },
    {
        "name": "fa-FoodBeverageWheatAwn",
        "title": "Wheat Awn",
        "className": "fa-solid fa-wheat-awn",
        "type": "sui",
        "categories": [
            "food+beverage",
            "humanitarian"
        ]
    },
    {
        "name": "fa-FoodBeverageWhiskeyGlass",
        "title": "Whiskey Glass",
        "className": "fa-solid fa-whiskey-glass",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWineBottle",
        "title": "Wine Bottle",
        "className": "fa-solid fa-wine-bottle",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWineGlass",
        "title": "Wine Glass",
        "className": "fa-solid fa-wine-glass",
        "type": "sui",
        "categories": [
            "food+beverage",
            "maps",
            "moving"
        ]
    },
    {
        "name": "fa-FoodBeverageWineGlassEmpty",
        "title": "Wine Glass Empty",
        "className": "fa-solid fa-wine-glass-empty",
        "type": "sui",
        "categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-GamingBookSkull",
        "title": "Book Skull",
        "className": "fa-solid fa-book-skull",
        "type": "sui",
        "categories": [
            "gaming",
            "halloween"
        ]
    },
    {
        "name": "fa-GamingChess",
        "title": "Chess",
        "className": "fa-solid fa-chess",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessBishop",
        "title": "Chess Bishop",
        "className": "fa-solid fa-chess-bishop",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessBoard",
        "title": "Chess Board",
        "className": "fa-solid fa-chess-board",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessKing",
        "title": "Chess King",
        "className": "fa-solid fa-chess-king",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessKnight",
        "title": "Chess Knight",
        "className": "fa-solid fa-chess-knight",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessPawn",
        "title": "Chess Pawn",
        "className": "fa-solid fa-chess-pawn",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessQueen",
        "title": "Chess Queen",
        "className": "fa-solid fa-chess-queen",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessRook",
        "title": "Chess Rook",
        "className": "fa-solid fa-chess-rook",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    
    {
        "name": "fa-GamingDAndDBeyond",
        "title": "DAnd DBeyond",
        "className": "fa-solid fa-d-and-d-beyond",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiamond",
        "title": "Diamond",
        "className": "fa-solid fa-diamond",
        "type": "sui",
        "categories": [
            "gaming",
            "shapes"
        ]
    },
    {
        "name": "fa-GamingDice",
        "title": "Dice",
        "className": "fa-solid fa-dice",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceD20",
        "title": "Dice D20",
        "className": "fa-solid fa-dice-d20",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceD6",
        "title": "Dice D6",
        "className": "fa-solid fa-dice-d6",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceFive",
        "title": "Dice Five",
        "className": "fa-solid fa-dice-five",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceFour",
        "title": "Dice Four",
        "className": "fa-solid fa-dice-four",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceOne",
        "title": "Dice One",
        "className": "fa-solid fa-dice-one",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceSix",
        "title": "Dice Six",
        "className": "fa-solid fa-dice-six",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceThree",
        "title": "Dice Three",
        "className": "fa-solid fa-dice-three",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceTwo",
        "title": "Dice Two",
        "className": "fa-solid fa-dice-two",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    
    {
        "name": "fa-GamingGhost",
        "title": "Ghost",
        "className": "fa-solid fa-ghost",
        "type": "sui",
        "categories": [
            "gaming",
            "halloween"
        ]
    },
    {
        "name": "fa-GamingHandFist",
        "title": "Hand Fist",
        "className": "fa-solid fa-hand-fist",
        "type": "sui",
        "categories": [
            "gaming",
            "hands",
            "political"
        ]
    },
    {
        "name": "fa-GamingHeadset",
        "title": "Headset",
        "className": "fa-solid fa-headset",
        "type": "sui",
        "categories": [
            "gaming",
            "humanitarian"
        ]
    },
    
    {
        "name": "fa-GamingRing",
        "title": "Ring",
        "className": "fa-solid fa-ring",
        "type": "sui",
        "categories": [
            "gaming",
            "spinners"
        ]
    },
    {
        "name": "fa-GamingScroll",
        "title": "Scroll",
        "className": "fa-solid fa-scroll",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingSquareFull",
        "title": "Square Full",
        "className": "fa-solid fa-square-full",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
   
    {
        "name": "fa-GamingTwitch",
        "title": "Twitch",
        "className": "twitch",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingVrCardboard",
        "title": "Vr Cardboard",
        "className": "fa-solid fa-vr-cardboard",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingWandSparkles",
        "title": "Wand Sparkles",
        "className": "fa-solid fa-wand-sparkles",
        "type": "sui",
        "categories": [
            "gaming",
            "halloween"
        ]
    },
    
    {
        "name": "fa-GamingXbox",
        "title": "Xbox",
        "className": "xbox",
        "type": "sui",
        "categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GendersGenderless",
        "title": "Genderless",
        "className": "fa-solid fa-genderless",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMars",
        "title": "Mars",
        "className": "fa-solid fa-mars",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsAndVenus",
        "title": "Mars And Venus",
        "className": "fa-solid fa-mars-and-venus",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsDouble",
        "title": "Mars Double",
        "className": "fa-solid fa-mars-double",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsStroke",
        "title": "Mars Stroke",
        "className": "fa-solid fa-mars-stroke",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsStrokeRight",
        "title": "Mars Stroke Right",
        "className": "fa-solid fa-mars-stroke-right",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsStrokeUp",
        "title": "Mars Stroke Up",
        "className": "fa-solid fa-mars-stroke-up",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMercury",
        "title": "Mercury",
        "className": "fa-solid fa-mercury",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersNeuter",
        "title": "Neuter",
        "className": "fa-solid fa-neuter",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersPersonHalfDress",
        "title": "Person Half Dress",
        "className": "fa-solid fa-person-half-dress",
        "type": "sui",
        "categories": [
            "genders",
            "humanitarian",
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-GendersTransgender",
        "title": "Transgender",
        "className": "fa-solid fa-transgender",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersVenus",
        "title": "Venus",
        "className": "fa-solid fa-venus",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersVenusDouble",
        "title": "Venus Double",
        "className": "fa-solid fa-venus-double",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersVenusMars",
        "title": "Venus Mars",
        "className": "fa-solid fa-venus-mars",
        "type": "sui",
        "categories": [
            "genders"
        ]
    },
    {
        "name": "fa-HalloweenBroom",
        "title": "Broom",
        "className": "fa-solid fa-broom",
        "type": "sui",
        "categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenCloudMoon",
        "title": "Cloud Moon",
        "className": "fa-solid fa-cloud-moon",
        "type": "sui",
        "categories": [
            "halloween",
            "weather"
        ]
    },
    {
        "name": "fa-HalloweenMask",
        "title": "Mask",
        "className": "fa-solid fa-mask",
        "type": "sui",
        "categories": [
            "halloween",
            "security"
        ]
    },
    {
        "name": "fa-HalloweenSkull",
        "title": "Skull",
        "className": "fa-solid fa-skull",
        "type": "sui",
        "categories": [
            "halloween",
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-HandsHand",
        "title": "Hand",
        "className": "fa-solid fa-hand",
        "type": "sui",
        "categories": [
            "hands",
            "media-playback"
        ]
    },
    {
        "name": "fa-HandsHandBackFist",
        "title": "Hand Back Fist",
        "className": "fa-solid fa-hand-back-fist",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandDots",
        "title": "Hand Dots",
        "className": "fa-solid fa-hand-dots",
        "type": "sui",
        "categories": [
            "hands",
            "medical+health"
        ]
    },
    {
        "name": "fa-HandsHandHolding",
        "title": "Hand Holding",
        "className": "fa-solid fa-hand-holding",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHoldingMedical",
        "title": "Hand Holding Medical",
        "className": "fa-solid fa-hand-holding-medical",
        "type": "sui",
        "categories": [
            "hands",
            "medical+health"
        ]
    },
    {
        "name": "fa-HandsHandLizard",
        "title": "Hand Lizard",
        "className": "fa-solid fa-hand-lizard",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandMiddleFinger",
        "title": "Hand Middle Finger",
        "className": "fa-solid fa-hand-middle-finger",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPeace",
        "title": "Hand Peace",
        "className": "fa-solid fa-hand-peace",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointDown",
        "title": "Hand Point Down",
        "className": "fa-solid fa-hand-point-down",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointer",
        "title": "Hand Pointer",
        "className": "fa-solid fa-hand-pointer",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointLeft",
        "title": "Hand Point Left",
        "className": "fa-solid fa-hand-point-left",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointRight",
        "title": "Hand Point Right",
        "className": "fa-solid fa-hand-point-right",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointUp",
        "title": "Hand Point Up",
        "className": "fa-solid fa-hand-point-up",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsBound",
        "title": "Bound",
        "className": "fa-solid fa-hands-bound",
        "type": "sui",
        "categories": [
            "hands",
            "security"
        ]
    },
    {
        "name": "fa-HandsHandsBubbles",
        "title": "Bubbles",
        "className": "fa-solid fa-hands-bubbles",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandScissors",
        "title": "Hand Scissors",
        "className": "fa-solid fa-hand-scissors",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsClapping",
        "title": "Clapping",
        "className": "fa-solid fa-hands-clapping",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshakeSimpleSlash",
        "title": "hake Simple Slash",
        "className": "fa-solid fa-handshake-simple-slash",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshakeSlash",
        "title": "hake Slash",
        "className": "fa-solid fa-handshake-slash",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsHolding",
        "title": "Holding",
        "className": "fa-solid fa-hands-holding",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandSparkles",
        "title": "Hand Sparkles",
        "className": "fa-solid fa-hand-sparkles",
        "type": "sui",
        "categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandSpock",
        "title": "Hand Spock",
        "className": "fa-solid fa-hand-spock",
        "type": "sui",
        "categories": [
            "hands",
            "science-fiction"
        ]
    },
    {
        "name": "fa-HandsHandsPraying",
        "title": "Praying",
        "className": "fa-solid fa-hands-praying",
        "type": "sui",
        "categories": [
            "hands",
            "religion"
        ]
    },
    {
        "name": "fa-HandsThumbsDown",
        "title": "Thumbs Down",
        "className": "fa-solid fa-thumbs-down",
        "type": "sui",
        "categories": [
            "hands",
            "shopping",
            "social"
        ]
    },
    {
        "name": "fa-HandsThumbsUp",
        "title": "Thumbs Up",
        "className": "fa-solid fa-thumbs-up",
        "type": "sui",
        "categories": [
            "hands",
            "shopping",
            "social"
        ]
    },
    {
        "name": "fa-HolidaysGifts",
        "title": "Gifts",
        "className": "fa-solid fa-gifts",
        "type": "sui",
        "categories": [
            "holidays",
            "shopping"
        ]
    },
    {
        "name": "fa-HolidaysHollyBerry",
        "title": "Holly Berry",
        "className": "fa-solid fa-holly-berry",
        "type": "sui",
        "categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysMenorah",
        "title": "Menorah",
        "className": "fa-solid fa-menorah",
        "type": "sui",
        "categories": [
            "holidays",
            "religion"
        ]
    },
    {
        "name": "fa-HolidaysSleigh",
        "title": "Sleigh",
        "className": "fa-solid fa-sleigh",
        "type": "sui",
        "categories": [
            "holidays",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HouseholdArrowUpFromWaterPump",
        "title": "Arrow Up From Water Pump",
        "className": "fa-solid fa-arrow-up-from-water-pump",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdBed",
        "title": "Bed",
        "className": "fa-solid fa-bed",
        "type": "sui",
        "categories": [
            "household",
            "maps",
            "users+people"
        ]
    },
    {
        "name": "fa-HouseholdBoxTissue",
        "title": "Box Tissue",
        "className": "fa-solid fa-box-tissue",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdChair",
        "title": "Chair",
        "className": "fa-solid fa-chair",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdCouch",
        "title": "Couch",
        "className": "fa-solid fa-couch",
        "type": "sui",
        "categories": [
            "household",
            "moving"
        ]
    },
    {
        "name": "fa-HouseholdDoorClosed",
        "title": "Door Closed",
        "className": "fa-solid fa-door-closed",
        "type": "sui",
        "categories": [
            "household",
            "security"
        ]
    },
    {
        "name": "fa-HouseholdDoorOpen",
        "title": "Door Open",
        "className": "fa-solid fa-door-open",
        "type": "sui",
        "categories": [
            "household",
            "security"
        ]
    },
    {
        "name": "fa-HouseholdHouseChimneyUser",
        "title": "House Chimney User",
        "className": "fa-solid fa-house-chimney-user",
        "type": "sui",
        "categories": [
            "household",
            "users+people"
        ]
    },
    {
        "name": "fa-HouseholdHouseUser",
        "title": "House User",
        "className": "fa-solid fa-house-user",
        "type": "sui",
        "categories": [
            "household",
            "users+people"
        ]
    },
    {
        "name": "fa-HouseholdJugDetergent",
        "title": "Jug Detergent",
        "className": "fa-solid fa-jug-detergent",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdKitchenSet",
        "title": "Kitchen Set",
        "className": "fa-solid fa-kitchen-set",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdPumpSoap",
        "title": "Pump Soap",
        "className": "fa-solid fa-pump-soap",
        "type": "sui",
        "categories": [
            "household",
            "humanitarian"
        ]
    },
    {
        "name": "fa-HouseholdRug",
        "title": "Rug",
        "className": "fa-solid fa-rug",
        "type": "sui",
        "categories": [
            "household",
            "humanitarian"
        ]
    },
    {
        "name": "fa-HouseholdShower",
        "title": "Shower",
        "className": "fa-solid fa-shower",
        "type": "sui",
        "categories": [
            "household",
            "humanitarian",
            "maps"
        ]
    },
    {
        "name": "fa-HouseholdSink",
        "title": "Sink",
        "className": "fa-solid fa-sink",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdSoap",
        "title": "Soap",
        "className": "fa-solid fa-soap",
        "type": "sui",
        "categories": [
            "household",
            "humanitarian"
        ]
    },
    {
        "name": "fa-HouseholdSpoon",
        "title": "Spoon",
        "className": "fa-solid fa-spoon",
        "type": "sui",
        "categories": [
            "household",
            "maps"
        ]
    },
    {
        "name": "fa-HouseholdStairs",
        "title": "Stairs",
        "className": "fa-solid fa-stairs",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdToilet",
        "title": "Toilet",
        "className": "fa-solid fa-toilet",
        "type": "sui",
        "categories": [
            "household",
            "humanitarian"
        ]
    },
    {
        "name": "fa-HouseholdToiletPaperSlash",
        "title": "Toilet Paper Slash",
        "className": "fa-solid fa-toilet-paper-slash",
        "type": "sui",
        "categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdUtensils",
        "title": "Utensils",
        "className": "fa-solid fa-utensils",
        "type": "sui",
        "categories": [
            "household",
            "maps"
        ]
    },
    {
        "name": "fa-HumanitarianAnchor",
        "title": "Anchor",
        "className": "fa-solid fa-anchor",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "maps",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-HumanitarianFlag",
        "title": "Flag",
        "className": "fa-solid fa-flag",
        "type": "sui",
        "categories": [
            "humanitarian",
            "maps"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleArrows",
        "title": "People Arrows",
        "className": "fa-solid fa-people-arrows",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleGroup",
        "title": "People Group",
        "className": "fa-solid fa-people-group",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleLine",
        "title": "People Line",
        "className": "fa-solid fa-people-line",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPeoplePulling",
        "title": "People Pulling",
        "className": "fa-solid fa-people-pulling",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleRobbery",
        "title": "People Robbery",
        "className": "fa-solid fa-people-robbery",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPerson",
        "title": "Person",
        "className": "fa-solid fa-person",
        "type": "sui",
        "categories": [
            "humanitarian",
            "maps",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonArrowDownToLine",
        "title": "Person Arrow Down To Line",
        "className": "fa-solid fa-person-arrow-down-to-line",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonArrowUpFromLine",
        "title": "Person Arrow Up From Line",
        "className": "fa-solid fa-person-arrow-up-from-line",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonBurst",
        "title": "Person Burst",
        "className": "fa-solid fa-person-burst",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleCheck",
        "title": "Person Circle Check",
        "className": "fa-solid fa-person-circle-check",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleExclamation",
        "title": "Person Circle Exclamation",
        "className": "fa-solid fa-person-circle-exclamation",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleMinus",
        "title": "Person Circle Minus",
        "className": "fa-solid fa-person-circle-minus",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCirclePlus",
        "title": "Person Circle Plus",
        "className": "fa-solid fa-person-circle-plus",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleQuestion",
        "title": "Person Circle Question",
        "className": "fa-solid fa-person-circle-question",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleXmark",
        "title": "Person Circle Xmark",
        "className": "fa-solid fa-person-circle-xmark",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonDress",
        "title": "Person Dress",
        "className": "fa-solid fa-person-dress",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonDressBurst",
        "title": "Person Dress Burst",
        "className": "fa-solid fa-person-dress-burst",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonFalling",
        "title": "Person Falling",
        "className": "fa-solid fa-person-falling",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonFallingBurst",
        "title": "Person Falling Burst",
        "className": "fa-solid fa-person-falling-burst",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonHarassing",
        "title": "Person Harassing",
        "className": "fa-solid fa-person-harassing",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonMilitaryPointing",
        "title": "Person Military Pointing",
        "className": "fa-solid fa-person-military-pointing",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonMilitaryRifle",
        "title": "Person Military Rifle",
        "className": "fa-solid fa-person-military-rifle",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonMilitaryToPerson",
        "title": "Person Military To Person",
        "className": "fa-solid fa-person-military-to-person",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonPregnant",
        "title": "Person Pregnant",
        "className": "fa-solid fa-person-pregnant",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonRays",
        "title": "Person Rays",
        "className": "fa-solid fa-person-rays",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonThroughWindow",
        "title": "Person Through Window",
        "className": "fa-solid fa-person-through-window",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalking",
        "title": "Person Walking",
        "className": "fa-solid fa-person-walking",
        "type": "sui",
        "categories": [
            "humanitarian",
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalkingLuggage",
        "title": "Person Walking Luggage",
        "className": "fa-solid fa-person-walking-luggage",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianPills",
        "title": "Pills",
        "className": "fa-solid fa-pills",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneCircleCheck",
        "title": "Plane Circle Check",
        "className": "fa-solid fa-plane-circle-check",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneCircleExclamation",
        "title": "Plane Circle Exclamation",
        "className": "fa-solid fa-plane-circle-exclamation",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneCircleXmark",
        "title": "Plane Circle Xmark",
        "className": "fa-solid fa-plane-circle-xmark",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneLock",
        "title": "Plane Lock",
        "className": "fa-solid fa-plane-lock",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneUp",
        "title": "Plane Up",
        "className": "fa-solid fa-plane-up",
        "type": "sui",
        "categories": [
            "humanitarian",
            "toggle",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianRadio",
        "title": "Radio",
        "className": "fa-solid fa-radio",
        "type": "sui",
        "categories": [
            "humanitarian",
            "music+video"
        ]
    },
    {
        "name": "fa-HumanitarianRankingStar",
        "title": "Ranking Star",
        "className": "fa-solid fa-ranking-star",
        "type": "sui",
        "categories": [
            "humanitarian",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-HumanitarianRoad",
        "title": "Road",
        "className": "fa-solid fa-road",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianRoadBarrier",
        "title": "Road Barrier",
        "className": "fa-solid fa-road-barrier",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianRoadBridge",
        "title": "Road Bridge",
        "className": "fa-solid fa-road-bridge",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianRoadCircleCheck",
        "title": "Road Circle Check",
        "className": "fa-solid fa-road-circle-check",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianRoadCircleExclamation",
        "title": "Road Circle Exclamation",
        "className": "fa-solid fa-road-circle-exclamation",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianRoadCircleXmark",
        "title": "Road Circle Xmark",
        "className": "fa-solid fa-road-circle-xmark",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianRoadLock",
        "title": "Road Lock",
        "className": "fa-solid fa-road-lock",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianRoadSpikes",
        "title": "Road Spikes",
        "className": "fa-solid fa-road-spikes",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianSackDollar",
        "title": "Sack Dollar",
        "className": "fa-solid fa-sack-dollar",
        "type": "sui",
        "categories": [
            "humanitarian",
            "money"
        ]
    },
    {
        "name": "fa-HumanitarianSackXmark",
        "title": "Sack Xmark",
        "className": "fa-solid fa-sack-xmark",
        "type": "sui",
        "categories": [
            "humanitarian",
            "money"
        ]
    },
    {
        "name": "fa-HumanitarianSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "maritime",
            "marketing",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianScaleBalanced",
        "title": "Scale Balanced",
        "className": "fa-solid fa-scale-balanced",
        "type": "sui",
        "categories": [
            "humanitarian",
            "maps",
            "money",
            "political"
        ]
    },
    {
        "name": "fa-HumanitarianShieldHeart",
        "title": "Shield Heart",
        "className": "fa-solid fa-shield-heart",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security"
        ]
    },
    {
        "name": "fa-HumanitarianShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type": "sui",
        "categories": [
            "humanitarian",
            "maps",
            "maritime",
            "marketing",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianSquareNfi",
        "title": "Square Nfi",
        "className": "fa-solid fa-square-nfi",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics"
        ]
    },
    {
        "name": "fa-HumanitarianSquarePersonConfined",
        "title": "Square Person Confined",
        "className": "fa-solid fa-square-person-confined",
        "type": "sui",
        "categories": [
            "humanitarian",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianSquareVirus",
        "title": "Square Virus",
        "className": "fa-solid fa-square-virus",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-HumanitarianStaffSnake",
        "title": "Staff Snake",
        "className": "fa-solid fa-staff-snake",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health"
        ]
    },
    {
        "name": "fa-HumanitarianStethoscope",
        "title": "Stethoscope",
        "className": "fa-solid fa-stethoscope",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health"
        ]
    },
    {
        "name": "fa-HumanitarianSuitcaseMedical",
        "title": "Suitcase Medical",
        "className": "fa-solid fa-suitcase-medical",
        "type": "sui",
        "categories": [
            "humanitarian",
            "maps",
            "medical+health"
        ]
    },
    {
        "name": "fa-HumanitarianSyringe",
        "title": "Syringe",
        "className": "fa-solid fa-syringe",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-HumanitarianTrainSubway",
        "title": "Train Subway",
        "className": "fa-solid fa-train-subway",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianTruckArrowRight",
        "title": "Truck Arrow Right",
        "className": "fa-solid fa-truck-arrow-right",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianTruckDroplet",
        "title": "Truck Droplet",
        "className": "fa-solid fa-truck-droplet",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianTruckFront",
        "title": "Truck Front",
        "className": "fa-solid fa-truck-front",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianTruckPlane",
        "title": "Truck Plane",
        "className": "fa-solid fa-truck-plane",
        "type": "sui",
        "categories": [
            "humanitarian",
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-HumanitarianUserDoctor",
        "title": "User Doctor",
        "className": "fa-solid fa-user-doctor",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianUserInjured",
        "title": "User Injured",
        "className": "fa-solid fa-user-injured",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianUsersBetweenLines",
        "title": "Users Between Lines",
        "className": "fa-solid fa-users-between-lines",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianUsersLine",
        "title": "Users Line",
        "className": "fa-solid fa-users-line",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianUsersRays",
        "title": "Users Rays",
        "className": "fa-solid fa-users-rays",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianUsersRectangle",
        "title": "Users Rectangle",
        "className": "fa-solid fa-users-rectangle",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianUsersViewfinder",
        "title": "Users Viewfinder",
        "className": "fa-solid fa-users-viewfinder",
        "type": "sui",
        "categories": [
            "humanitarian",
            "users+people"
        ]
    },
    {
        "name": "fa-HumanitarianVialCircleCheck",
        "title": "Vial Circle Check",
        "className": "fa-solid fa-vial-circle-check",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-HumanitarianVialVirus",
        "title": "Vial Virus",
        "className": "fa-solid fa-vial-virus",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-HumanitarianVirus",
        "title": "Virus",
        "className": "fa-solid fa-virus",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health"
        ]
    },
    {
        "name": "fa-HumanitarianVirusCovid",
        "title": "Virus Covid",
        "className": "fa-solid fa-virus-covid",
        "type": "sui",
        "categories": [
            "humanitarian",
            "medical+health"
        ]
    },
    {
        "name": "fa-LogisticsAnchorCircleCheck",
        "title": "Anchor Circle Check",
        "className": "fa-solid fa-anchor-circle-check",
        "type": "sui",
        "categories": [
            "logistics",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-LogisticsAnchorCircleExclamation",
        "title": "Anchor Circle Exclamation",
        "className": "fa-solid fa-anchor-circle-exclamation",
        "type": "sui",
        "categories": [
            "logistics",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-LogisticsAnchorCircleXmark",
        "title": "Anchor Circle Xmark",
        "className": "fa-solid fa-anchor-circle-xmark",
        "type": "sui",
        "categories": [
            "logistics",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-LogisticsAnchorLock",
        "title": "Anchor Lock",
        "className": "fa-solid fa-anchor-lock",
        "type": "sui",
        "categories": [
            "logistics",
            "maritime",
            "marketing"
        ]
    },
    {
        "name": "fa-LogisticsBox",
        "title": "Box",
        "className": "fa-solid fa-box",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBoxesPacking",
        "title": "Boxes Packing",
        "className": "fa-solid fa-boxes-packing",
        "type": "sui",
        "categories": [
            "logistics",
            "moving"
        ]
    },
    {
        "name": "fa-LogisticsBoxesStacked",
        "title": "Boxes Stacked",
        "className": "fa-solid fa-boxes-stacked",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridge",
        "title": "Bridge",
        "className": "fa-solid fa-bridge",
        "type": "sui",
        "categories": [
            "logistics",
            "maps"
        ]
    },
    {
        "name": "fa-LogisticsBridgeCircleCheck",
        "title": "Bridge Circle Check",
        "className": "fa-solid fa-bridge-circle-check",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeCircleExclamation",
        "title": "Bridge Circle Exclamation",
        "className": "fa-solid fa-bridge-circle-exclamation",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeCircleXmark",
        "title": "Bridge Circle Xmark",
        "className": "fa-solid fa-bridge-circle-xmark",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeLock",
        "title": "Bridge Lock",
        "className": "fa-solid fa-bridge-lock",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeWater",
        "title": "Bridge Water",
        "className": "fa-solid fa-bridge-water",
        "type": "sui",
        "categories": [
            "logistics",
            "maps"
        ]
    },
    {
        "name": "fa-LogisticsCartFlatbed",
        "title": "Cart Flatbed",
        "className": "fa-solid fa-cart-flatbed",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsClipboardCheck",
        "title": "Clipboard Check",
        "className": "fa-solid fa-clipboard-check",
        "type": "sui",
        "categories": [
            "logistics",
            "science"
        ]
    },
    {
        "name": "fa-LogisticsClipboardList",
        "title": "Clipboard List",
        "className": "fa-solid fa-clipboard-list",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsClipboardQuestion",
        "title": "Clipboard Question",
        "className": "fa-solid fa-clipboard-question",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsDolly",
        "title": "Dolly",
        "className": "fa-solid fa-dolly",
        "type": "sui",
        "categories": [
            "logistics",
            "moving"
        ]
    },
    {
        "name": "fa-LogisticsFerry",
        "title": "Ferry",
        "className": "fa-solid fa-ferry",
        "type": "sui",
        "categories": [
            "logistics",
            "maritime",
            "marketing",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-LogisticsHelicopter",
        "title": "Helicopter",
        "className": "fa-solid fa-helicopter",
        "type": "sui",
        "categories": [
            "logistics",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-LogisticsHelicopterSymbol",
        "title": "Helicopter Symbol",
        "className": "fa-solid fa-helicopter-symbol",
        "type": "sui",
        "categories": [
            "logistics",
            "maps"
        ]
    },
    {
        "name": "fa-LogisticsJetFighterUp",
        "title": "Jet Fighter Up",
        "className": "fa-solid fa-jet-fighter-up",
        "type": "sui",
        "categories": [
            "logistics",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-LogisticsPallet",
        "title": "Pallet",
        "className": "fa-solid fa-pallet",
        "type": "sui",
        "categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTrain",
        "title": "Train",
        "className": "fa-solid fa-train",
        "type": "sui",
        "categories": [
            "logistics",
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-LogisticsTruckFast",
        "title": "Truck Fast",
        "className": "fa-solid fa-truck-fast",
        "type": "sui",
        "categories": [
            "logistics",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsBagShopping",
        "title": "Bag Shopping",
        "className": "fa-solid fa-bag-shopping",
        "type": "sui",
        "categories": [
            "maps",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsBasketShopping",
        "title": "Basket Shopping",
        "className": "fa-solid fa-basket-shopping",
        "type": "sui",
        "categories": [
            "maps",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsBicycle",
        "title": "Bicycle",
        "className": "fa-solid fa-bicycle",
        "type": "sui",
        "categories": [
            "maps",
            "sports+fitness",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsBomb",
        "title": "Bomb",
        "className": "fa-solid fa-bomb",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBook",
        "title": "Book",
        "className": "fa-solid fa-book",
        "type": "sui",
        "categories": [
            "maps",
            "writing"
        ]
    },
    {
        "name": "fa-MapsBookAtlas",
        "title": "Book Atlas",
        "className": "fa-solid fa-book-atlas",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBookmark",
        "title": "Bookmark",
        "className": "fa-solid fa-bookmark",
        "type": "sui",
        "categories": [
            "maps",
            "shapes",
            "shopping",
            "writing"
        ]
    },
    {
        "name": "fa-MapsBriefcase",
        "title": "Briefcase",
        "className": "fa-solid fa-briefcase",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsCartShopping",
        "title": "Cart Shopping",
        "className": "fa-solid fa-cart-shopping",
        "type": "sui",
        "categories": [
            "maps",
            "shopping",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsDiamondTurnRight",
        "title": "Diamond Turn Right",
        "className": "fa-solid fa-diamond-turn-right",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFlagCheckered",
        "title": "Flag Checkered",
        "className": "fa-solid fa-flag-checkered",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsGavel",
        "title": "Gavel",
        "className": "fa-solid fa-gavel",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHeartPulse",
        "title": "Heart Pulse",
        "className": "fa-solid fa-heart-pulse",
        "type": "sui",
        "categories": [
            "maps",
            "medical+health",
            "sports+fitness"
        ]
    },
    {
        "name": "fa-MapsImage",
        "title": "Image",
        "className": "fa-solid fa-image",
        "type": "sui",
        "categories": [
            "maps",
            "photos+images",
            "social"
        ]
    },
    {
        "name": "fa-MapsImages",
        "title": "Images",
        "className": "fa-solid fa-images",
        "type": "sui",
        "categories": [
            "maps",
            "photos+images",
            "social"
        ]
    },
    {
        "name": "fa-MapsInfo",
        "title": "Info",
        "className": "fa-solid fa-info",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsJetFighter",
        "title": "Jet Fighter",
        "className": "fa-solid fa-jet-fighter",
        "type": "sui",
        "categories": [
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsKey",
        "title": "Key",
        "className": "fa-solid fa-key",
        "type": "sui",
        "categories": [
            "maps",
            "security",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsLifeRing",
        "title": "Life Ring",
        "className": "fa-solid fa-life-ring",
        "type": "sui",
        "categories": [
            "maps",
            "spinners"
        ]
    },
    {
        "name": "fa-MapsLocationCrosshairs",
        "title": "Location Crosshairs",
        "className": "fa-solid fa-location-crosshairs",
        "type": "sui",
        "categories": [
            "maps",
            "toggle"
        ]
    },
    {
        "name": "fa-MapsLocationDot",
        "title": "Location Dot",
        "className": "fa-solid fa-location-dot",
        "type": "sui",
        "categories": [
            "maps",
            "social"
        ]
    },
    {
        "name": "fa-MapsLocationPin",
        "title": "Location Pin",
        "className": "fa-solid fa-location-pin",
        "type": "sui",
        "categories": [
            "maps",
            "shapes",
            "social"
        ]
    },
    {
        "name": "fa-MapsLocationPinLock",
        "title": "Location Pin Lock",
        "className": "fa-solid fa-location-pin-lock",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnet",
        "title": "Magnet",
        "className": "fa-solid fa-magnet",
        "type": "sui",
        "categories": [
            "maps",
            "science"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlass",
        "title": "Magnifying Glass",
        "className": "fa-solid fa-magnifying-glass",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlassLocation",
        "title": "Magnifying Glass Location",
        "className": "fa-solid fa-magnifying-glass-location",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlassMinus",
        "title": "Magnifying Glass Minus",
        "className": "fa-solid fa-magnifying-glass-minus",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlassPlus",
        "title": "Magnifying Glass Plus",
        "className": "fa-solid fa-magnifying-glass-plus",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMapPin",
        "title": "Map Pin",
        "className": "fa-solid fa-map-pin",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMoneyBill",
        "title": "Money Bill",
        "className": "fa-solid fa-money-bill",
        "type": "sui",
        "categories": [
            "maps",
            "money"
        ]
    },
    {
        "name": "fa-MapsMoneyBill1",
        "title": "Money Bill1",
        "className": "fa-solid fa-money-bill-1",
        "type": "sui",
        "categories": [
            "maps",
            "money"
        ]
    },
    {
        "name": "fa-MapsNewspaper",
        "title": "Newspaper",
        "className": "fa-solid fa-newspaper",
        "type": "sui",
        "categories": [
            "maps",
            "writing"
        ]
    },
    {
        "name": "fa-MapsPlane",
        "title": "Plane",
        "className": "fa-solid fa-plane",
        "type": "sui",
        "categories": [
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsRestroom",
        "title": "Restroom",
        "className": "fa-solid fa-restroom",
        "type": "sui",
        "categories": [
            "maps",
            "users+people"
        ]
    },
    {
        "name": "fa-MapsRocket",
        "title": "Rocket",
        "className": "fa-solid fa-rocket",
        "type": "sui",
        "categories": [
            "maps",
            "science-fiction",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsScaleUnbalanced",
        "title": "Scale Unbalanced",
        "className": "fa-solid fa-scale-unbalanced",
        "type": "sui",
        "categories": [
            "maps",
            "money",
            "political"
        ]
    },
    {
        "name": "fa-MapsScaleUnbalancedFlip",
        "title": "Scale Unbalanced Flip",
        "className": "fa-solid fa-scale-unbalanced-flip",
        "type": "sui",
        "categories": [
            "maps",
            "money",
            "political"
        ]
    },
    {
        "name": "fa-MapsSnowplow",
        "title": "Snowplow",
        "className": "fa-solid fa-snowplow",
        "type": "sui",
        "categories": [
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsSquareParking",
        "title": "Square Parking",
        "className": "fa-solid fa-square-parking",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSquarePlus",
        "title": "Square Plus",
        "className": "fa-solid fa-square-plus",
        "type": "sui",
        "categories": [
            "maps",
            "medical+health"
        ]
    },
    {
        "name": "fa-MapsStreetView",
        "title": "Street View",
        "className": "fa-solid fa-street-view",
        "type": "sui",
        "categories": [
            "maps",
            "users+people"
        ]
    },
    {
        "name": "fa-MapsSuitcase",
        "title": "Suitcase",
        "className": "fa-solid fa-suitcase",
        "type": "sui",
        "categories": [
            "maps",
            "moving"
        ]
    },
    {
        "name": "fa-MapsTag",
        "title": "Tag",
        "className": "fa-solid fa-tag",
        "type": "sui",
        "categories": [
            "maps",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsTags",
        "title": "Tags",
        "className": "fa-solid fa-tags",
        "type": "sui",
        "categories": [
            "maps",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsThumbtack",
        "title": "Thumbtack",
        "className": "fa-solid fa-thumbtack",
        "type": "sui",
        "categories": [
            "maps",
            "social",
            "writing"
        ]
    },
    {
        "name": "fa-MapsTicketSimple",
        "title": "Ticket Simple",
        "className": "fa-solid fa-ticket-simple",
        "type": "sui",
        "categories": [
            "maps",
            "shapes"
        ]
    },
    {
        "name": "fa-MapsTrafficLight",
        "title": "Traffic Light",
        "className": "fa-solid fa-traffic-light",
        "type": "sui",
        "categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTrainTram",
        "title": "Train Tram",
        "className": "fa-solid fa-train-tram",
        "type": "sui",
        "categories": [
            "maps",
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-MapsTrophy",
        "title": "Trophy",
        "className": "fa-solid fa-trophy",
        "type": "sui",
        "categories": [
            "maps",
            "shopping"
        ]
    },
    {
        "name": "fa-MapsUmbrella",
        "title": "Umbrella",
        "className": "fa-solid fa-umbrella",
        "type": "sui",
        "categories": [
            "maps",
            "weather"
        ]
    },
    {
        "name": "fa-MaritimePersonSwimming",
        "title": "Person Swimming",
        "className": "fa-solid fa-person-swimming",
        "type": "sui",
        "categories": [
            "maritime",
            "marketing",
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-MathematicsCalculator",
        "title": "Calculator",
        "className": "fa-solid fa-calculator",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsCircleMinus",
        "title": "Circle Minus",
        "className": "fa-solid fa-circle-minus",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsCirclePlus",
        "title": "Circle Plus",
        "className": "fa-solid fa-circle-plus",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsCircleXmark",
        "title": "Circle Xmark",
        "className": "fa-solid fa-circle-xmark",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsDivide",
        "title": "Divide",
        "className": "fa-solid fa-divide",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsEquals",
        "title": "Equals",
        "className": "fa-solid fa-equals",
        "type": "sui",
        "categories": [
            "mathematics",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-MathematicsGreaterThan",
        "title": "Greater Than",
        "className": "fa-solid fa-greater-than",
        "type": "sui",
        "categories": [
            "mathematics",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-MathematicsGreaterThanEqual",
        "title": "Greater Than Equal",
        "className": "fa-solid fa-greater-than-equal",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsInfinity",
        "title": "Infinity",
        "className": "fa-solid fa-infinity",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsLessThan",
        "title": "Less Than",
        "className": "fa-solid fa-less-than",
        "type": "sui",
        "categories": [
            "mathematics",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-MathematicsLessThanEqual",
        "title": "Less Than Equal",
        "className": "fa-solid fa-less-than-equal",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsNotEqual",
        "title": "Not Equal",
        "className": "fa-solid fa-not-equal",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsPercent",
        "title": "Percent",
        "className": "fa-solid fa-percent",
        "type": "sui",
        "categories": [
            "mathematics",
            "money",
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-MathematicsPlusMinus",
        "title": "Plus Minus",
        "className": "fa-solid fa-plus-minus",
        "type": "sui",
        "categories": [
            "mathematics",
            "media-playback"
        ]
    },
    {
        "name": "fa-MathematicsSquareMinus",
        "title": "Square Minus",
        "className": "fa-solid fa-square-minus",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSquareRootVariable",
        "title": "Square Root Variable",
        "className": "fa-solid fa-square-root-variable",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSquareXmark",
        "title": "Square Xmark",
        "className": "fa-solid fa-square-xmark",
        "type": "sui",
        "categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSubscript",
        "title": "Subscript",
        "className": "fa-solid fa-subscript",
        "type": "sui",
        "categories": [
            "mathematics",
            "text-formatting"
        ]
    },
    {
        "name": "fa-MathematicsSuperscript",
        "title": "Superscript",
        "className": "fa-solid fa-superscript",
        "type": "sui",
        "categories": [
            "mathematics",
            "text-formatting"
        ]
    },
    {
        "name": "fa-MathematicsWaveSquare",
        "title": "Wave Square",
        "className": "fa-solid fa-wave-square",
        "type": "sui",
        "categories": [
            "mathematics",
            "music+video"
        ]
    },
    {
        "name": "fa-MediaplaybackBackward",
        "title": "Mediaplayback Backward",
        "className": "fa-solid fa-backward",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackBackwardFast",
        "title": "Mediaplayback Backward Fast",
        "className": "fa-solid fa-backward-fast",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackBackwardStep",
        "title": "Mediaplayback Backward Step",
        "className": "fa-solid fa-backward-step",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCirclePause",
        "title": "Mediaplayback Circle Pause",
        "className": "fa-solid fa-circle-pause",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCirclePlay",
        "title": "Mediaplayback Circle Play",
        "className": "fa-solid fa-circle-play",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCircleStop",
        "title": "Mediaplayback Circle Stop",
        "className": "fa-solid fa-circle-stop",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCompress",
        "title": "Mediaplayback Compress",
        "className": "fa-solid fa-compress",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackEject",
        "title": "Mediaplayback Eject",
        "className": "fa-solid fa-eject",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackExpand",
        "title": "Mediaplayback Expand",
        "className": "fa-solid fa-expand",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackForward",
        "title": "Mediaplayback Forward",
        "className": "fa-solid fa-forward",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackForwardFast",
        "title": "Mediaplayback Forward Fast",
        "className": "fa-solid fa-forward-fast",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackForwardStep",
        "title": "Mediaplayback Forward Step",
        "className": "fa-solid fa-forward-step",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackMinimize",
        "title": "Mediaplayback Minimize",
        "className": "fa-solid fa-minimize",
        "type": "sui",
        "categories": [
            "media-playback",
            "photos+images"
        ]
    },
    {
        "name": "fa-MediaplaybackPause",
        "title": "Mediaplayback Pause",
        "className": "fa-solid fa-pause",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackPlay",
        "title": "Mediaplayback Play",
        "className": "fa-solid fa-play",
        "type": "sui",
        "categories": [
            "media-playback",
            "shapes"
        ]
    },
    {
        "name": "fa-MediaplaybackStop",
        "title": "Mediaplayback Stop",
        "className": "fa-solid fa-stop",
        "type": "sui",
        "categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeHigh",
        "title": "Mediaplayback Volume High",
        "className": "fa-solid fa-volume-high",
        "type": "sui",
        "categories": [
            "media-playback",
            "music+video"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeLow",
        "title": "Mediaplayback Volume Low",
        "className": "fa-solid fa-volume-low",
        "type": "sui",
        "categories": [
            "media-playback",
            "music+video"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeOff",
        "title": "Mediaplayback Volume Off",
        "className": "fa-solid fa-volume-off",
        "type": "sui",
        "categories": [
            "media-playback",
            "music+video"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeXmark",
        "title": "Mediaplayback Volume Xmark",
        "className": "fa-solid fa-volume-xmark",
        "type": "sui",
        "categories": [
            "media-playback",
            "music+video"
        ]
    },
    {
        "name": "fa-MedicalHealthBacteria",
        "title": "Bacteria",
        "className": "fa-solid fa-bacteria",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBacterium",
        "title": "Bacterium",
        "className": "fa-solid fa-bacterium",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBanSmoking",
        "title": "Ban Smoking",
        "className": "fa-solid fa-ban-smoking",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBedPulse",
        "title": "Bed Pulse",
        "className": "fa-solid fa-bed-pulse",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBong",
        "title": "Bong",
        "className": "fa-solid fa-bong",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBookMedical",
        "title": "Book Medical",
        "className": "fa-solid fa-book-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBrain",
        "title": "Brain",
        "className": "fa-solid fa-brain",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthBriefcaseMedical",
        "title": "Briefcase Medical",
        "className": "fa-solid fa-briefcase-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCannabis",
        "title": "Cannabis",
        "className": "fa-solid fa-cannabis",
        "type": "sui",
        "categories": [
            "medical+health",
            "nature"
        ]
    },
    {
        "name": "fa-MedicalHealthCapsules",
        "title": "Capsules",
        "className": "fa-solid fa-capsules",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthClipboardUser",
        "title": "Clipboard User",
        "className": "fa-solid fa-clipboard-user",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthCrutch",
        "title": "Crutch",
        "className": "fa-solid fa-crutch",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthDisease",
        "title": "Disease",
        "className": "fa-solid fa-disease",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthDna",
        "title": "Dna",
        "className": "fa-solid fa-dna",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthFileMedical",
        "title": "File Medical",
        "className": "fa-solid fa-file-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFilePrescription",
        "title": "File Prescription",
        "className": "fa-solid fa-file-prescription",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFileWaveform",
        "title": "File Waveform",
        "className": "fa-solid fa-file-waveform",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFlaskVial",
        "title": "Flask Vial",
        "className": "fa-solid fa-flask-vial",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideCough",
        "title": "Head Side Cough",
        "className": "fa-solid fa-head-side-cough",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideCoughSlash",
        "title": "Head Side Cough Slash",
        "className": "fa-solid fa-head-side-cough-slash",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideMask",
        "title": "Head Side Mask",
        "className": "fa-solid fa-head-side-mask",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideVirus",
        "title": "Head Side Virus",
        "className": "fa-solid fa-head-side-virus",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleBolt",
        "title": "Heart Circle Bolt",
        "className": "fa-solid fa-heart-circle-bolt",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleCheck",
        "title": "Heart Circle Check",
        "className": "fa-solid fa-heart-circle-check",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleExclamation",
        "title": "Heart Circle Exclamation",
        "className": "fa-solid fa-heart-circle-exclamation",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleMinus",
        "title": "Heart Circle Minus",
        "className": "fa-solid fa-heart-circle-minus",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCirclePlus",
        "title": "Heart Circle Plus",
        "className": "fa-solid fa-heart-circle-plus",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleXmark",
        "title": "Heart Circle Xmark",
        "className": "fa-solid fa-heart-circle-xmark",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthIdCardClip",
        "title": "Id Card Clip",
        "className": "fa-solid fa-id-card-clip",
        "type": "sui",
        "categories": [
            "medical+health",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthJoint",
        "title": "Joint",
        "className": "fa-solid fa-joint",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthLaptopMedical",
        "title": "Laptop Medical",
        "className": "fa-solid fa-laptop-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthLungs",
        "title": "Lungs",
        "className": "fa-solid fa-lungs",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthLungsVirus",
        "title": "Lungs Virus",
        "className": "fa-solid fa-lungs-virus",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMaskFace",
        "title": "Mask Face",
        "className": "fa-solid fa-mask-face",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMaskVentilator",
        "title": "Mask Ventilator",
        "className": "fa-solid fa-mask-ventilator",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMortarPestle",
        "title": "Mortar Pestle",
        "className": "fa-solid fa-mortar-pestle",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthNotesMedical",
        "title": "Notes Medical",
        "className": "fa-solid fa-notes-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPager",
        "title": "Pager",
        "className": "fa-solid fa-pager",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPersonDotsFromLine",
        "title": "Person Dots From Line",
        "className": "fa-solid fa-person-dots-from-line",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthPrescription",
        "title": "Prescription",
        "className": "fa-solid fa-prescription",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPrescriptionBottle",
        "title": "Prescription Bottle",
        "className": "fa-solid fa-prescription-bottle",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthPrescriptionBottleMedical",
        "title": "Prescription Bottle Medical",
        "className": "fa-solid fa-prescription-bottle-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPumpMedical",
        "title": "Pump Medical",
        "className": "fa-solid fa-pump-medical",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthReceipt",
        "title": "Receipt",
        "className": "fa-solid fa-receipt",
        "type": "sui",
        "categories": [
            "medical+health",
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MedicalHealthShieldVirus",
        "title": "Shield Virus",
        "className": "fa-solid fa-shield-virus",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSmoking",
        "title": "Smoking",
        "className": "fa-solid fa-smoking",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthStarOfLife",
        "title": "Star Of Life",
        "className": "fa-solid fa-star-of-life",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTablets",
        "title": "Tablets",
        "className": "fa-solid fa-tablets",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthTeeth",
        "title": "Teeth",
        "className": "fa-solid fa-teeth",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTeethOpen",
        "title": "Teeth Open",
        "className": "fa-solid fa-teeth-open",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthThermometer",
        "title": "Thermometer",
        "className": "fa-solid fa-thermometer",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTooth",
        "title": "Tooth",
        "className": "fa-solid fa-tooth",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthUserNurse",
        "title": "User Nurse",
        "className": "fa-solid fa-user-nurse",
        "type": "sui",
        "categories": [
            "medical+health",
            "users+people"
        ]
    },
    {
        "name": "fa-MedicalHealthVial",
        "title": "Vial",
        "className": "fa-solid fa-vial",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthVials",
        "title": "Vials",
        "className": "fa-solid fa-vials",
        "type": "sui",
        "categories": [
            "medical+health",
            "science"
        ]
    },
    {
        "name": "fa-MedicalHealthVirusCovidSlash",
        "title": "Virus Covid Slash",
        "className": "fa-solid fa-virus-covid-slash",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthViruses",
        "title": "Viruses",
        "className": "fa-solid fa-viruses",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVirusSlash",
        "title": "Virus Slash",
        "className": "fa-solid fa-virus-slash",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthWeightScale",
        "title": "Weight Scale",
        "className": "fa-solid fa-weight-scale",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthXRay",
        "title": "XRay",
        "className": "fa-solid fa-x-ray",
        "type": "sui",
        "categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MoneyAustralSign",
        "title": "Austral Sign",
        "className": "fa-solid fa-austral-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBahtSign",
        "title": "Baht Sign",
        "className": "fa-solid fa-baht-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBangladeshiTakaSign",
        "title": "Bangladeshi Taka Sign",
        "className": "fa-solid fa-bangladeshi-taka-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBitcoin",
        "title": "Bitcoin",
        "className": "fa-solid fa-bitcoin",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyBitcoinSign",
        "title": "Bitcoin Sign",
        "className": "fa-solid fa-bitcoin-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBrazilianRealSign",
        "title": "Brazilian Real Sign",
        "className": "fa-solid fa-brazilian-real-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBtc",
        "title": "Btc",
        "className": "btc",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyCashRegister",
        "title": "Cash Register",
        "className": "fa-solid fa-cash-register",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyCediSign",
        "title": "Cedi Sign",
        "className": "fa-solid fa-cedi-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCentSign",
        "title": "Cent Sign",
        "className": "fa-solid fa-cent-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCoins",
        "title": "Coins",
        "className": "fa-solid fa-coins",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyColonSign",
        "title": "Colon Sign",
        "className": "fa-solid fa-colon-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCommentDollar",
        "title": "Comment Dollar",
        "className": "fa-solid fa-comment-dollar",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCommentsDollar",
        "title": "Comments Dollar",
        "className": "fa-solid fa-comments-dollar",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCreditCard",
        "title": "Credit Card",
        "className": "fa-solid fa-credit-card",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyCruzeiroSign",
        "title": "Cruzeiro Sign",
        "className": "fa-solid fa-cruzeiro-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyDongSign",
        "title": "Dong Sign",
        "className": "fa-solid fa-dong-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyEthereum",
        "title": "Ethereum",
        "className": "ethereum",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyEuroSign",
        "title": "Euro Sign",
        "className": "fa-solid fa-euro-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFileInvoice",
        "title": "File Invoice",
        "className": "fa-solid fa-file-invoice",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFileInvoiceDollar",
        "title": "File Invoice Dollar",
        "className": "fa-solid fa-file-invoice-dollar",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFlorinSign",
        "title": "Florin Sign",
        "className": "fa-solid fa-florin-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFrancSign",
        "title": "Franc Sign",
        "className": "fa-solid fa-franc-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyGg",
        "title": "Gg",
        "className": "gg",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyGgCircle",
        "title": "Gg Circle",
        "className": "gg circle",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyGuaraniSign",
        "title": "Guarani Sign",
        "className": "fa-solid fa-guarani-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyHryvniaSign",
        "title": "Hryvnia Sign",
        "className": "fa-solid fa-hryvnia-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyIndianRupeeSign",
        "title": "Indian Rupee Sign",
        "className": "fa-solid fa-indian-rupee-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyKipSign",
        "title": "Kip Sign",
        "className": "fa-solid fa-kip-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLariSign",
        "title": "Lari Sign",
        "className": "fa-solid fa-lari-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLiraSign",
        "title": "Lira Sign",
        "className": "fa-solid fa-lira-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLitecoinSign",
        "title": "Litecoin Sign",
        "className": "fa-solid fa-litecoin-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyManatSign",
        "title": "Manat Sign",
        "className": "fa-solid fa-manat-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMillSign",
        "title": "Mill Sign",
        "className": "fa-solid fa-mill-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBill1Wave",
        "title": "Bill1Wave",
        "className": "fa-solid fa-money-bill-1-wave",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBills",
        "title": "Bills",
        "className": "fa-solid fa-money-bills",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillTransfer",
        "title": "Bill Transfer",
        "className": "fa-solid fa-money-bill-transfer",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillTrendUp",
        "title": "Bill Trend Up",
        "className": "fa-solid fa-money-bill-trend-up",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillWave",
        "title": "Bill Wave",
        "className": "fa-solid fa-money-bill-wave",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillWheat",
        "title": "Bill Wheat",
        "className": "fa-solid fa-money-bill-wheat",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyCheck",
        "title": "Check",
        "className": "fa-solid fa-money-check",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyMoneyCheckDollar",
        "title": "Check Dollar",
        "className": "fa-solid fa-money-check-dollar",
        "type": "sui",
        "categories": [
            "money",
            "shopping"
        ]
    },
    {
        "name": "fa-MoneyNairaSign",
        "title": "Naira Sign",
        "className": "fa-solid fa-naira-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyPesetaSign",
        "title": "Peseta Sign",
        "className": "fa-solid fa-peseta-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyPesoSign",
        "title": "Peso Sign",
        "className": "fa-solid fa-peso-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyRubleSign",
        "title": "Ruble Sign",
        "className": "fa-solid fa-ruble-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyRupeeSign",
        "title": "Rupee Sign",
        "className": "fa-solid fa-rupee-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyRupiahSign",
        "title": "Rupiah Sign",
        "className": "fa-solid fa-rupiah-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyShekelSign",
        "title": "Shekel Sign",
        "className": "fa-solid fa-shekel-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneySterlingSign",
        "title": "Sterling Sign",
        "className": "fa-solid fa-sterling-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyTengeSign",
        "title": "Tenge Sign",
        "className": "fa-solid fa-tenge-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyTurkishLiraSign",
        "title": "Turkish Lira Sign",
        "className": "fa-solid fa-turkish-lira-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyVault",
        "title": "Vault",
        "className": "fa-solid fa-vault",
        "type": "sui",
        "categories": [
            "money",
            "security"
        ]
    },
    {
        "name": "fa-MoneyWallet",
        "title": "Wallet",
        "className": "fa-solid fa-wallet",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyWonSign",
        "title": "Won Sign",
        "className": "fa-solid fa-won-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyYenSign",
        "title": "Yen Sign",
        "className": "fa-solid fa-yen-sign",
        "type": "sui",
        "categories": [
            "money"
        ]
    },
    {
        "name": "fa-MovingBoxOpen",
        "title": "Box Open",
        "className": "fa-solid fa-box-open",
        "type": "sui",
        "categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingPeopleCarryBox",
        "title": "People Carry Box",
        "className": "fa-solid fa-people-carry-box",
        "type": "sui",
        "categories": [
            "moving",
            "users+people"
        ]
    },
    {
        "name": "fa-MovingSignHanging",
        "title": "Sign Hanging",
        "className": "fa-solid fa-sign-hanging",
        "type": "sui",
        "categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTape",
        "title": "Tape",
        "className": "fa-solid fa-tape",
        "type": "sui",
        "categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTruckMoving",
        "title": "Truck",
        "className": "fa-solid fa-truck-moving",
        "type": "sui",
        "categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTruckRampBox",
        "title": "Truck Ramp Box",
        "className": "fa-solid fa-truck-ramp-box",
        "type": "sui",
        "categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MusicVideoDrum",
        "title": "Drum",
        "className": "fa-solid fa-drum",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoDrumSteelpan",
        "title": "Drum Steelpan",
        "className": "fa-solid fa-drum-steelpan",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoGuitar",
        "title": "Guitar",
        "className": "fa-solid fa-guitar",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoHeadphonesSimple",
        "title": "Headphones Simple",
        "className": "fa-solid fa-headphones-simple",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoNapster",
        "title": "Napster",
        "className": "fa-solid fa-napster",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoRecordVinyl",
        "title": "Record Vinyl",
        "className": "fa-solid fa-record-vinyl",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoSoundcloud",
        "title": "Soundcloud",
        "className": "soundcloud",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoSpotify",
        "title": "Spotify",
        "className": "spotify",
        "type": "sui",
        "categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-NatureCloudSun",
        "title": "Cloud Sun",
        "className": "fa-solid fa-cloud-sun",
        "type": "sui",
        "categories": [
            "nature",
            "weather"
        ]
    },
    {
        "name": "fa-NatureClover",
        "title": "Clover",
        "className": "fa-solid fa-clover",
        "type": "sui",
        "categories": [
            "nature",
            "shapes"
        ]
    },
    {
        "name": "fa-NatureIcicles",
        "title": "Icicles",
        "className": "fa-solid fa-icicles",
        "type": "sui",
        "categories": [
            "nature",
            "weather"
        ]
    },
    {
        "name": "fa-Numbers0",
        "title": "0",
        "className": "fa-solid fa-0",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers1",
        "title": "1",
        "className": "fa-solid fa-1",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers2",
        "title": "2",
        "className": "fa-solid fa-2",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers3",
        "title": "3",
        "className": "fa-solid fa-3",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers4",
        "title": "4",
        "className": "fa-solid fa-4",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers5",
        "title": "5",
        "className": "fa-solid fa-5",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers6",
        "title": "6",
        "className": "fa-solid fa-6",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers7",
        "title": "7",
        "className": "fa-solid fa-7",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers8",
        "title": "8",
        "className": "fa-solid fa-8",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers9",
        "title": "9",
        "className": "fa-solid fa-9",
        "type": "sui",
        "categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-PhotosImagesBoltLightning",
        "title": "Bolt Lightning",
        "className": "fa-solid fa-bolt-lightning",
        "type": "sui",
        "categories": [
            "photos+images",
            "weather"
        ]
    },
    {
        "name": "fa-PhotosImagesCameraRotate",
        "title": "Camera Rotate",
        "className": "fa-solid fa-camera-rotate",
        "type": "sui",
        "categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesIdBadge",
        "title": "Id Badge",
        "className": "fa-solid fa-id-badge",
        "type": "sui",
        "categories": [
            "photos+images",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-PhotosImagesIdCard",
        "title": "Id Card",
        "className": "fa-solid fa-id-card",
        "type": "sui",
        "categories": [
            "photos+images",
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-PhotosImagesImagePortrait",
        "title": "Image Portrait",
        "className": "fa-solid fa-image-portrait",
        "type": "sui",
        "categories": [
            "photos+images",
            "users+people"
        ]
    },
    {
        "name": "fa-PhotosImagesPanorama",
        "title": "Panorama",
        "className": "fa-solid fa-panorama",
        "type": "sui",
        "categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesUnsplash",
        "title": "Unsplash",
        "className": "fa-solid fa-unsplash",
        "type": "sui",
        "categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PoliticalCheckToSlot",
        "title": "Check To Slot",
        "className": "fa-solid fa-check-to-slot",
        "type": "sui",
        "categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalDemocrat",
        "title": "Democrat",
        "className": "fa-solid fa-democrat",
        "type": "sui",
        "categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalFlagUsa",
        "title": "Flag Usa",
        "className": "fa-solid fa-flag-usa",
        "type": "sui",
        "categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalPersonBooth",
        "title": "Person Booth",
        "className": "fa-solid fa-person-booth",
        "type": "sui",
        "categories": [
            "political",
            "shopping",
            "users+people"
        ]
    },
    {
        "name": "fa-PoliticalRepublican",
        "title": "Republican",
        "className": "fa-solid fa-republican",
        "type": "sui",
        "categories": [
            "political"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsAsterisk",
        "title": "Asterisk",
        "className": "fa-solid fa-asterisk",
        "type": "sui",
        "categories": [
            "punctuation+symbols",
            "spinners"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsHashtag",
        "title": "Hashtag",
        "className": "fa-solid fa-hashtag",
        "type": "sui",
        "categories": [
            "punctuation+symbols",
            "social"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsSection",
        "title": "Section",
        "className": "fa-solid fa-section",
        "type": "sui",
        "categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-ReligionAnkh",
        "title": "Ankh",
        "className": "fa-solid fa-ankh",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBahai",
        "title": "Bahai",
        "className": "fa-solid fa-bahai",
        "type": "sui",
        "categories": [
            "religion",
            "spinners"
        ]
    },
    {
        "name": "fa-ReligionBookBible",
        "title": "Book Bible",
        "className": "fa-solid fa-book-bible",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBookJournalWhills",
        "title": "Book Journal Whills",
        "className": "fa-solid fa-book-journal-whills",
        "type": "sui",
        "categories": [
            "religion",
            "science-fiction"
        ]
    },
    {
        "name": "fa-ReligionBookQuran",
        "title": "Book Quran",
        "className": "fa-solid fa-book-quran",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBookTanakh",
        "title": "Book Tanakh",
        "className": "fa-solid fa-book-tanakh",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionCross",
        "title": "Cross",
        "className": "fa-solid fa-cross",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionDharmachakra",
        "title": "Dharmachakra",
        "className": "fa-solid fa-dharmachakra",
        "type": "sui",
        "categories": [
            "religion",
            "spinners"
        ]
    },
    {
        "name": "fa-ReligionHamsa",
        "title": "Hamsa",
        "className": "fa-solid fa-hamsa",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionHanukiah",
        "title": "Hanukiah",
        "className": "fa-solid fa-hanukiah",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionJedi",
        "title": "Jedi",
        "className": "fa-solid fa-jedi",
        "type": "sui",
        "categories": [
            "religion",
            "science-fiction"
        ]
    },
    {
        "name": "fa-ReligionKhanda",
        "title": "Khanda",
        "className": "fa-solid fa-khanda",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionOm",
        "title": "Om",
        "className": "fa-solid fa-om",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionPeace",
        "title": "Peace",
        "className": "fa-solid fa-peace",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionPersonPraying",
        "title": "Person Praying",
        "className": "fa-solid fa-person-praying",
        "type": "sui",
        "categories": [
            "religion",
            "users+people"
        ]
    },
    {
        "name": "fa-ReligionScrollTorah",
        "title": "Scroll Torah",
        "className": "fa-solid fa-scroll-torah",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionSpaghettiMonsterFlying",
        "title": "Spaghetti Monster Flying",
        "className": "fa-solid fa-spaghetti-monster-flying",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionStarAndCrescent",
        "title": "Star And Crescent",
        "className": "fa-solid fa-star-and-crescent",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionStarOfDavid",
        "title": "Star Of David",
        "className": "fa-solid fa-star-of-david",
        "type": "sui",
        "categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionYinYang",
        "title": "Yin Yang",
        "className": "fa-solid fa-yin-yang",
        "type": "sui",
        "categories": [
            "religion",
            "spinners"
        ]
    },
    {
        "name": "fa-ScienceTemperatureHigh",
        "title": "Temperature High",
        "className": "fa-solid fa-temperature-high",
        "type": "sui",
        "categories": [
            "science",
            "weather"
        ]
    },
    {
        "name": "fa-ScienceTemperatureLow",
        "title": "Temperature Low",
        "className": "fa-solid fa-temperature-low",
        "type": "sui",
        "categories": [
            "science",
            "weather"
        ]
    },
    {
        "name": "fa-SecurityBan",
        "title": "Ban",
        "className": "fa-solid fa-ban",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityFileContract",
        "title": "File Contract",
        "className": "fa-solid fa-file-contract",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityFileSignature",
        "title": "File Signature",
        "className": "fa-solid fa-file-signature",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityGun",
        "title": "Gun",
        "className": "fa-solid fa-gun",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHandcuffs",
        "title": "Handcuffs",
        "className": "fa-solid fa-handcuffs",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityLandMineOn",
        "title": "Land Mine On",
        "className": "fa-solid fa-land-mine-on",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityLock",
        "title": "Lock",
        "className": "fa-solid fa-lock",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityLockOpen",
        "title": "Lock Open",
        "className": "fa-solid fa-lock-open",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityMarsAndVenusBurst",
        "title": "Mars And Venus Burst",
        "className": "fa-solid fa-mars-and-venus-burst",
        "type": "sui",
        "categories": [
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-SecurityPassport",
        "title": "Passport",
        "className": "fa-solid fa-passport",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUnlock",
        "title": "Unlock",
        "className": "fa-solid fa-unlock",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUnlockKeyhole",
        "title": "Unlock Keyhole",
        "className": "fa-solid fa-unlock-keyhole",
        "type": "sui",
        "categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUserLock",
        "title": "User Lock",
        "className": "fa-solid fa-user-lock",
        "type": "sui",
        "categories": [
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-SecurityUserShield",
        "title": "User Shield",
        "className": "fa-solid fa-user-shield",
        "type": "sui",
        "categories": [
            "security",
            "users+people"
        ]
    },
    {
        "name": "fa-ShapesCalendar",
        "title": "Calendar",
        "className": "fa-solid fa-calendar",
        "type": "sui",
        "categories": [
            "shapes",
            "time"
        ]
    },
    {
        "name": "fa-ShapesCertificate",
        "title": "Certificate",
        "className": "fa-solid fa-certificate",
        "type": "sui",
        "categories": [
            "shapes",
            "shopping",
            "spinners"
        ]
    },
    {
        "name": "fa-ShapesCrown",
        "title": "Crown",
        "className": "fa-solid fa-crown",
        "type": "sui",
        "categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesHeartCrack",
        "title": "Heart Crack",
        "className": "fa-solid fa-heart-crack",
        "type": "sui",
        "categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesSquare",
        "title": "Square",
        "className": "fa-solid fa-square",
        "type": "sui",
        "categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesStar",
        "title": "Star",
        "className": "fa-solid fa-star",
        "type": "sui",
        "categories": [
            "shapes",
            "shopping",
            "social",
            "toggle"
        ]
    },
    {
        "name": "fa-ShoppingAmazonPay",
        "title": "Amazon Pay",
        "className": "amazon pay",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingApplePay",
        "title": "Apple Pay",
        "className": "apple pay",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCartArrowDown",
        "title": "Cart Arrow Down",
        "className": "fa-solid fa-cart-arrow-down",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCartPlus",
        "title": "Cart Plus",
        "className": "cart plus",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcAmazonPay",
        "title": "Cc Amazon Pay",
        "className": "amazon pay",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcAmex",
        "title": "Cc Amex",
        "className": "cc amex",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcApplePay",
        "title": "Cc Apple Pay",
        "className": "cc apple pay",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcDinersClub",
        "title": "Cc Diners Club",
        "className": "cc diners club",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcDiscover",
        "title": "Cc Discover",
        "className": "cc discover",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcJcb",
        "title": "Cc Jcb",
        "className": "cc jcb",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcMastercard",
        "title": "Cc Mastercard",
        "className": "cc mastercard",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcPaypal",
        "title": "Cc Paypal",
        "className": "cc paypal",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcStripe",
        "title": "Cc Stripe",
        "className": "cc stripe",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcVisa",
        "title": "Cc Visa",
        "className": "cc visa",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGem",
        "title": "Gem",
        "className": "gem",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGooglePay",
        "title": "Google Pay",
        "className": "google pay",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGoogleWallet",
        "title": "Google Wallet",
        "className": "google wallet",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    
    {
        "name": "fa-ShoppingPaypal",
        "title": "Paypal",
        "className": "paypal",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingShopSlash",
        "title": "Shop Slash",
        "className": "shop slash",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },

    {
        "name": "fa-ShoppingStripe",
        "title": "Stripe",
        "className": "stripe",
        "type": "sui",
        "categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-SocialCircleUser",
        "title": "Circle User",
        "className": "fa-solid fa-circle-user",
        "type": "sui",
        "categories": [
            "social",
            "users+people"
        ]
    },
    {
        "name": "fa-SocialShareNodes",
        "title": "Share Nodes",
        "className": "fa-solid fa-share-nodes",
        "type": "sui",
        "categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialSquareShareNodes",
        "title": "Square Share Nodes",
        "className": "fa-solid fa-square-share-nodes",
        "type": "sui",
        "categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialUser",
        "title": "User",
        "className": "fa-solid fa-user",
        "type": "sui",
        "categories": [
            "social",
            "users+people"
        ]
    },
    {
        "name": "fa-SocialUserGroup",
        "title": "User Group",
        "className": "fa-solid fa-user-group",
        "type": "sui",
        "categories": [
            "social",
            "users+people"
        ]
    },
    {
        "name": "fa-SocialUserPlus",
        "title": "User Plus",
        "className": "fa-solid fa-user-plus",
        "type": "sui",
        "categories": [
            "social",
            "users+people"
        ]
    },
    {
        "name": "fa-SocialUsers",
        "title": "Users",
        "className": "fa-solid fa-users",
        "type": "sui",
        "categories": [
            "social",
            "users+people"
        ]
    },
    {
        "name": "fa-SpinnersCircleNotch",
        "title": "Circle Notch",
        "className": "fa-solid fa-circle-notch",
        "type": "sui",
        "categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersSlash",
        "title": "Slash",
        "className": "fa-solid fa-slash",
        "type": "sui",
        "categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersSpinner",
        "title": "Spinner",
        "className": "fa-solid fa-spinner",
        "type": "sui",
        "categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SportsFitnessBaseball",
        "title": "Baseball",
        "className": "fa-solid fa-baseball",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBasketball",
        "title": "Basketball",
        "className": "fa-solid fa-basketball",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBowlingBall",
        "title": "Bowling Ball",
        "className": "fa-solid fa-bowling-ball",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBroomBall",
        "title": "Broom Ball",
        "className": "fa-solid fa-broom-ball",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessDumbbell",
        "title": "Dumbbell",
        "className": "fa-solid fa-dumbbell",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessFootball",
        "title": "Football",
        "className": "fa-solid fa-football",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessFutbol",
        "title": "Futbol",
        "className": "fa-solid fa-futbol",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessGolfBallTee",
        "title": "Golf Ball Tee",
        "className": "fa-solid fa-golf-ball-tee",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessHockeyPuck",
        "title": "Hockey Puck",
        "className": "fa-solid fa-hockey-puck",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessMedal",
        "title": "Medal",
        "className": "fa-solid fa-medal",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonRunning",
        "title": "Person Running",
        "className": "fa-solid fa-person-running",
        "type": "sui",
        "categories": [
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSkating",
        "title": "Person Skating",
        "className": "fa-solid fa-person-skating",
        "type": "sui",
        "categories": [
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSkiing",
        "title": "Person Skiing",
        "className": "fa-solid fa-person-skiing",
        "type": "sui",
        "categories": [
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSkiingNordic",
        "title": "Person Skiing Nordic",
        "className": "fa-solid fa-person-skiing-nordic",
        "type": "sui",
        "categories": [
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSnowboarding",
        "title": "Person Snowboarding",
        "className": "fa-solid fa-person-snowboarding",
        "type": "sui",
        "categories": [
            "sports+fitness",
            "users+people"
        ]
    },
    {
        "name": "fa-SportsFitnessSpa",
        "title": "Spa",
        "className": "fa-solid fa-spa",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessStopwatch20",
        "title": "Stopwatch20",
        "className": "fa-solid fa-stopwatch-20",
        "type": "sui",
        "categories": [
            "sports+fitness",
            "time"
        ]
    },
    {
        "name": "fa-SportsFitnessTableTennisPaddleBall",
        "title": "Table Tennis Paddle Ball",
        "className": "fa-solid fa-table-tennis-paddle-ball",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessVolleyball",
        "title": "Volleyball",
        "className": "fa-solid fa-volleyball",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessWeightHanging",
        "title": "Weight Hanging",
        "className": "fa-solid fa-weight-hanging",
        "type": "sui",
        "categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-TextformattingAlignCenter",
        "title": "Textformatting Align Center",
        "className": "fa-solid fa-align-center",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingAlignJustify",
        "title": "Textformatting Align Justify",
        "className": "fa-solid fa-align-justify",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingAlignLeft",
        "title": "Textformatting Align Left",
        "className": "fa-solid fa-align-left",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingAlignRight",
        "title": "Textformatting Align Right",
        "className": "fa-solid fa-align-right",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBold",
        "title": "Textformatting Bold",
        "className": "fa-solid fa-bold",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBorderAll",
        "title": "Textformatting Border All",
        "className": "fa-solid fa-border-all",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBorderNone",
        "title": "Textformatting Border None",
        "className": "fa-solid fa-border-none",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBorderTopLeft",
        "title": "Textformatting Border Top Left",
        "className": "fa-solid fa-border-top-left",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingFilterCircleXmark",
        "title": "Textformatting Filter Circle Xmark",
        "className": "fa-solid fa-filter-circle-xmark",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingFont",
        "title": "Textformatting Font",
        "className": "fa-solid fa-font",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingHeading",
        "title": "Textformatting Heading",
        "className": "fa-solid fa-heading",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingICursor",
        "title": "Textformatting ICursor",
        "className": "fa-solid fa-i-cursor",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingIndent",
        "title": "Textformatting Indent",
        "className": "fa-solid fa-indent",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingItalic",
        "title": "Textformatting Italic",
        "className": "fa-solid fa-italic",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingList",
        "title": "Textformatting List",
        "className": "fa-solid fa-list",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingListCheck",
        "title": "Textformatting List Check",
        "className": "fa-solid fa-list-check",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingListOl",
        "title": "Textformatting List Ol",
        "className": "fa-solid fa-list-ol",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingListUl",
        "title": "Textformatting List Ul",
        "className": "fa-solid fa-list-ul",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingOutdent",
        "title": "Textformatting Outdent",
        "className": "fa-solid fa-outdent",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingParagraph",
        "title": "Textformatting Paragraph",
        "className": "fa-solid fa-paragraph",
        "type": "sui",
        "categories": [
            "text-formatting",
            "writing"
        ]
    },
    {
        "name": "fa-TextformattingRectangleList",
        "title": "Textformatting Rectangle List",
        "className": "fa-solid fa-rectangle-list",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingSpellCheck",
        "title": "Textformatting Spell Check",
        "className": "fa-solid fa-spell-check",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingStrikethrough",
        "title": "Textformatting Strikethrough",
        "className": "fa-solid fa-strikethrough",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTable",
        "title": "Textformatting Table",
        "className": "fa-solid fa-table",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCells",
        "title": "Textformatting Table Cells",
        "className": "fa-solid fa-table-cells",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCellsColumnLock",
        "title": "Textformatting Table Cells Column Lock",
        "className": "fa-solid fa-table-cells-column-lock",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCellsLarge",
        "title": "Textformatting Table Cells Large",
        "className": "fa-solid fa-table-cells-large",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCellsRowLock",
        "title": "Textformatting Table Cells Row Lock",
        "className": "fa-solid fa-table-cells-row-lock",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableColumns",
        "title": "Textformatting Table Columns",
        "className": "fa-solid fa-table-columns",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableList",
        "title": "Textformatting Table List",
        "className": "fa-solid fa-table-list",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTextHeight",
        "title": "Textformatting Text Height",
        "className": "fa-solid fa-text-height",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTextSlash",
        "title": "Textformatting Text Slash",
        "className": "fa-solid fa-text-slash",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTextWidth",
        "title": "Textformatting Text Width",
        "className": "fa-solid fa-text-width",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingUnderline",
        "title": "Textformatting Underline",
        "className": "fa-solid fa-underline",
        "type": "sui",
        "categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TimeCalendarCheck",
        "title": "Calendar Check",
        "className": "fa-solid fa-calendar-check",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarDay",
        "title": "Calendar Day",
        "className": "fa-solid fa-calendar-day",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarDays",
        "title": "Calendar Days",
        "className": "fa-solid fa-calendar-days",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarMinus",
        "title": "Calendar Minus",
        "className": "fa-solid fa-calendar-minus",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarPlus",
        "title": "Calendar Plus",
        "className": "fa-solid fa-calendar-plus",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarWeek",
        "title": "Calendar Week",
        "className": "fa-solid fa-calendar-week",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarXmark",
        "title": "Calendar Xmark",
        "className": "fa-solid fa-calendar-xmark",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeClock",
        "title": "Clock",
        "className": "fa-solid fa-clock",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglass",
        "title": "Hourglass",
        "className": "fa-solid fa-hourglass",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglassEnd",
        "title": "Hourglass End",
        "className": "fa-solid fa-hourglass-end",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglassHalf",
        "title": "Hourglass Half",
        "className": "fa-solid fa-hourglass-half",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglassStart",
        "title": "Hourglass Start",
        "className": "fa-solid fa-hourglass-start",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeStopwatch",
        "title": "Stopwatch",
        "className": "fa-solid fa-stopwatch",
        "type": "sui",
        "categories": [
            "time"
        ]
    },
    {
        "name": "fa-ToggleBullseye",
        "title": "Bullseye",
        "className": "fa-solid fa-bullseye",
        "type": "sui",
        "categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleCircleDot",
        "title": "Circle Dot",
        "className": "fa-solid fa-circle-dot",
        "type": "sui",
        "categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleStarHalf",
        "title": "Star Half",
        "className": "fa-solid fa-star-half",
        "type": "sui",
        "categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleStarHalfStroke",
        "title": "Star Half Stroke",
        "className": "fa-solid fa-star-half-stroke",
        "type": "sui",
        "categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleToggleOff",
        "title": "Off",
        "className": "fa-solid fa-toggle-off",
        "type": "sui",
        "categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleToggleOn",
        "title": "On",
        "className": "fa-solid fa-toggle-on",
        "type": "sui",
        "categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-TransportationCableCar",
        "title": "Cable Car",
        "className": "fa-solid fa-cable-car",
        "type": "sui",
        "categories": [
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TransportationPlaneSlash",
        "title": "Plane Slash",
        "className": "fa-solid fa-plane-slash",
        "type": "sui",
        "categories": [
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TransportationTractor",
        "title": "Tractor",
        "className": "fa-solid fa-tractor",
        "type": "sui",
        "categories": [
            "transportation",
            "travel+hotel"
        ]
    },
    {
        "name": "fa-UsersPeopleArrowsDownToPeople",
        "title": "Arrows Down To People",
        "className": "fa-solid fa-arrows-down-to-people",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleElevator",
        "title": "Elevator",
        "className": "fa-solid fa-elevator",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHotTubPerson",
        "title": "Hot Tub Person",
        "className": "fa-solid fa-hot-tub-person",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserCheck",
        "title": "User Check",
        "className": "fa-solid fa-user-check",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserClock",
        "title": "User Clock",
        "className": "fa-solid fa-user-clock",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserGear",
        "title": "User Gear",
        "className": "fa-solid fa-user-gear",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserLarge",
        "title": "User Large",
        "className": "fa-solid fa-user-large",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserLargeSlash",
        "title": "User Large Slash",
        "className": "fa-solid fa-user-large-slash",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserMinus",
        "title": "User Minus",
        "className": "fa-solid fa-user-minus",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserNinja",
        "title": "User Ninja",
        "className": "fa-solid fa-user-ninja",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserPen",
        "title": "User Pen",
        "className": "fa-solid fa-user-pen",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersGear",
        "title": "Users Gear",
        "className": "fa-solid fa-users-gear",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserSlash",
        "title": "User Slash",
        "className": "fa-solid fa-user-slash",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersSlash",
        "title": "Users Slash",
        "className": "fa-solid fa-users-slash",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserTag",
        "title": "User Tag",
        "className": "fa-solid fa-user-tag",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserXmark",
        "title": "User Xmark",
        "className": "fa-solid fa-user-xmark",
        "type": "sui",
        "categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-WeatherCloudMoonRain",
        "title": "Cloud Moon Rain",
        "className": "fa-solid fa-cloud-moon-rain",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudRain",
        "title": "Cloud Rain",
        "className": "fa-solid fa-cloud-rain",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudSunRain",
        "title": "Cloud Sun Rain",
        "className": "fa-solid fa-cloud-sun-rain",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherPooStorm",
        "title": "Poo Storm",
        "className": "fa-solid fa-poo-storm",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherRainbow",
        "title": "Rainbow",
        "className": "fa-solid fa-rainbow",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherSmog",
        "title": "Smog",
        "className": "fa-solid fa-smog",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureEmpty",
        "title": "Temperature Empty",
        "className": "fa-solid fa-temperature-empty",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureFull",
        "title": "Temperature Full",
        "className": "fa-solid fa-temperature-full",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureHalf",
        "title": "Temperature Half",
        "className": "fa-solid fa-temperature-half",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureQuarter",
        "title": "Temperature Quarter",
        "className": "fa-solid fa-temperature-quarter",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureThreeQuarters",
        "title": "Temperature Three Quarters",
        "className": "fa-solid fa-temperature-three-quarters",
        "type": "sui",
        "categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WritingBlog",
        "title": "Blog",
        "className": "fa-solid fa-blog",
        "type": "sui",
        "categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingBookBookmark",
        "title": "Book Bookmark",
        "className": "fa-solid fa-book-bookmark",
        "type": "sui",
        "categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPaperclip",
        "title": "Paperclip",
        "className": "fa-solid fa-paperclip",
        "type": "sui",
        "categories": [
            "writing"
        ]
    }
],
"categories": [
        {
            "name": "accessibility",
            "title": "Accessibility"
        },
        {
            "name": "alert",
            "title": "Alert"
        },
        {
            "name": "alphabet",
            "title": "Alphabet"
        },
        {
            "name": "animals",
            "title": "Animals"
        },
        {
            "name": "arrows",
            "title": "Arrows"
        },
        {
            "name": "astronomy",
            "title": "Astronomy"
        },
        {
            "name": "automotive",
            "title": "Automotive"
        },
        {
            "name": "buildings",
            "title": "Buildings"
        },
        {
            "name": "camping",
            "title": "Camping"
        },
        {
            "name": "charity",
            "title": "Charity"
        },
        {
            "name": "charts+diagrams",
            "title": "Charts Diagrams"
        },
        {
            "name": "childhood",
            "title": "Childhood"
        },
        {
            "name": "clothing+fashion",
            "title": "Clothing Fashion"
        },
        {
            "name": "coding",
            "title": "Coding"
        },
        {
            "name": "communication",
            "title": "Communication"
        },
        {
            "name": "connectivity",
            "title": "Connectivity"
        },
        {
            "name": "construction",
            "title": "Construction"
        },
        {
            "name": "design",
            "title": "Design"
        },
        {
            "name": "devices+hardware",
            "title": "Devices Hardware"
        },
        {
            "name": "disaster+crisis",
            "title": "Disaster Crisis"
        },
        {
            "name": "editing",
            "title": "Editing"
        },
        {
            "name": "education",
            "title": "Education"
        },
        {
            "name": "emoji",
            "title": "Emoji"
        },
        {
            "name": "energy",
            "title": "Energy"
        },
        {
            "name": "files",
            "title": "Files"
        },
        {
            "name": "film+video",
            "title": "Film Video"
        },
        {
            "name": "food+beverage",
            "title": "Food Beverage"
        },
        {
            "name": "fruits+vegetables",
            "title": "Fruits Vegetables"
        },
        {
            "name": "gaming",
            "title": "Gaming"
        },
        {
            "name": "genders",
            "title": "Genders"
        },
        {
            "name": "halloween",
            "title": "Halloween"
        },
        {
            "name": "hands",
            "title": "Hands"
        },
        {
            "name": "holidays",
            "title": "Holidays"
        },
        {
            "name": "household",
            "title": "Household"
        },
        {
            "name": "humanitarian",
            "title": "Humanitarian"
        },
        {
            "name": "logistics",
            "title": "Logistics"
        },
        {
            "name": "maps",
            "title": "Maps"
        },
        {
            "name": "maritime",
            "title": "Maritime"
        },
        {
            "name": "marketing",
            "title": "Marketing"
        },
        {
            "name": "mathematics",
            "title": "Mathematics"
        },
        {
            "name": "media-playback",
            "title": "Media Playback"
        },
        {
            "name": "medical+health",
            "title": "Medical Health"
        },
        {
            "name": "money",
            "title": "Money"
        },
        {
            "name": "moving",
            "title": "Moving"
        },
        {
            "name": "music+video",
            "title": "Music Video"
        },
        {
            "name": "nature",
            "title": "Nature"
        },
        {
            "name": "numbers",
            "title": "Numbers"
        },
        {
            "name": "photos+images",
            "title": "Photos Images"
        },
        {
            "name": "political",
            "title": "Political"
        },
        {
            "name": "punctuation+symbols",
            "title": "Punctuation Symbols"
        },
        {
            "name": "religion",
            "title": "Religion"
        },
        {
            "name": "science",
            "title": "Science"
        },
        {
            "name": "science-fiction",
            "title": "Science Fiction"
        },
        {
            "name": "security",
            "title": "Security"
        },
        {
            "name": "shapes",
            "title": "Shapes"
        },
        {
            "name": "shopping",
            "title": "Shopping"
        },
        {
            "name": "social",
            "title": "Social"
        },
        {
            "name": "spinners",
            "title": "Spinners"
        },
        {
            "name": "sports+fitness",
            "title": "Sports Fitness"
        },
        {
            "name": "text-formatting",
            "title": "Text Formatting"
        },
        {
            "name": "time",
            "title": "Time"
        },
        {
            "name": "toggle",
            "title": "Toggle"
        },
        {
            "name": "transportation",
            "title": "Transportation"
        },
        {
            "name": "travel+hotel",
            "title": "Travel Hotel"
        },
        {
            "name": "users+people",
            "title": "Users People"
        },
        {
            "name": "weather",
            "title": "Weather"
        },
        {
            "name": "writing",
            "title": "Writing"
        }
    ]
	
}

export function geClasstIcons(){
	return classIconIndex
}
