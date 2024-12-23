
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
			"name": "0-square-fill",
			"title": "0-square-fill",
			"className": "bi bi-0-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "1-circle",
			"title": "1-circle",
			"className": "bi bi-1-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "1-circle-fill",
			"title": "1-circle-fill",
			"className": "bi bi-1-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "1-square",
			"title": "1-square",
			"className": "bi bi-1-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "1-square-fill",
			"title": "1-square-fill",
			"className": "bi bi-1-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "123",
			"title": "123",
			"className": "bi bi-123",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "2-circle",
			"title": "2-circle",
			"className": "bi bi-2-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "2-circle-fill",
			"title": "2-circle-fill",
			"className": "bi bi-2-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "2-square",
			"title": "2-square",
			"className": "bi bi-2-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "2-square-fill",
			"title": "2-square-fill",
			"className": "bi bi-2-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "3-circle",
			"title": "3-circle",
			"className": "bi bi-3-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "3-circle-fill",
			"title": "3-circle-fill",
			"className": "bi bi-3-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "3-square",
			"title": "3-square",
			"className": "bi bi-3-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "3-square-fill",
			"title": "3-square-fill",
			"className": "bi bi-3-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "4-circle",
			"title": "4-circle",
			"className": "bi bi-4-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "4-circle-fill",
			"title": "4-circle-fill",
			"className": "bi bi-4-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "4-square",
			"title": "4-square",
			"className": "bi bi-4-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "4-square-fill",
			"title": "4-square-fill",
			"className": "bi bi-4-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "5-circle",
			"title": "5-circle",
			"className": "bi bi-5-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "5-circle-fill",
			"title": "5-circle-fill",
			"className": "bi bi-5-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "5-square",
			"title": "5-square",
			"className": "bi bi-5-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "5-square-fill",
			"title": "5-square-fill",
			"className": "bi bi-5-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "6-circle",
			"title": "6-circle",
			"className": "bi bi-6-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "6-circle-fill",
			"title": "6-circle-fill",
			"className": "bi bi-6-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "6-square",
			"title": "6-square",
			"className": "bi bi-6-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "6-square-fill",
			"title": "6-square-fill",
			"className": "bi bi-6-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "7-circle",
			"title": "7-circle",
			"className": "bi bi-7-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "7-circle-fill",
			"title": "7-circle-fill",
			"className": "bi bi-7-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "7-square",
			"title": "7-square",
			"className": "bi bi-7-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "7-square-fill",
			"title": "7-square-fill",
			"className": "bi bi-7-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "8-circle",
			"title": "8-circle",
			"className": "bi bi-8-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "8-circle-fill",
			"title": "8-circle-fill",
			"className": "bi bi-8-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "8-square",
			"title": "8-square",
			"className": "bi bi-8-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "8-square-fill",
			"title": "8-square-fill",
			"className": "bi bi-8-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "9-circle",
			"title": "9-circle",
			"className": "bi bi-9-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "9-circle-fill",
			"title": "9-circle-fill",
			"className": "bi bi-9-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "9-square",
			"title": "9-square",
			"className": "bi bi-9-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "9-square-fill",
			"title": "9-square-fill",
			"className": "bi bi-9-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "activity",
			"title": "activity",
			"className": "bi bi-activity",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "airplane",
			"title": "airplane",
			"className": "bi bi-airplane",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "airplane-engines",
			"title": "airplane-engines",
			"className": "bi bi-airplane-engines",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "airplane-engines-fill",
			"title": "airplane-engines-fill",
			"className": "bi bi-airplane-engines-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "airplane-fill",
			"title": "airplane-fill",
			"className": "bi bi-airplane-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "alarm",
			"title": "alarm",
			"className": "bi bi-alarm",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "alarm-fill",
			"title": "alarm-fill",
			"className": "bi bi-alarm-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "alexa",
			"title": "alexa",
			"className": "bi bi-alexa",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "align-bottom",
			"title": "align-bottom",
			"className": "bi bi-align-bottom",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "align-center",
			"title": "align-center",
			"className": "bi bi-align-center",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "align-end",
			"title": "align-end",
			"className": "bi bi-align-end",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "align-middle",
			"title": "align-middle",
			"className": "bi bi-align-middle",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "align-start",
			"title": "align-start",
			"className": "bi bi-align-start",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "align-top",
			"title": "align-top",
			"className": "bi bi-align-top",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "alipay",
			"title": "alipay",
			"className": "bi bi-alipay",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "alphabet",
			"title": "alphabet",
			"className": "bi bi-alphabet",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "alphabet-uppercase",
			"title": "alphabet-uppercase",
			"className": "bi bi-alphabet-uppercase",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "alt",
			"title": "alt",
			"className": "bi bi-alt",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "amazon",
			"title": "amazon",
			"className": "bi bi-amazon",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "amd",
			"title": "amd",
			"className": "bi bi-amd",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "android",
			"title": "android",
			"className": "bi bi-android",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "android2",
			"title": "android2",
			"className": "bi bi-android2",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "app",
			"title": "app",
			"className": "bi bi-app",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "app-indicator",
			"title": "app-indicator",
			"className": "bi bi-app-indicator",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "apple",
			"title": "apple",
			"className": "bi bi-apple",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "archive",
			"title": "archive",
			"className": "bi bi-archive",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "archive-fill",
			"title": "archive-fill",
			"className": "bi bi-archive-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "arrow-90deg-down",
			"title": "arrow-90deg-down",
			"className": "bi bi-arrow-90deg-down",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-90deg-left",
			"title": "arrow-90deg-left",
			"className": "bi bi-arrow-90deg-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-90deg-right",
			"title": "arrow-90deg-right",
			"className": "bi bi-arrow-90deg-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-90deg-up",
			"title": "arrow-90deg-up",
			"className": "bi bi-arrow-90deg-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-bar-down",
			"title": "arrow-bar-down",
			"className": "bi bi-arrow-bar-down",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-bar-left",
			"title": "arrow-bar-left",
			"className": "bi bi-arrow-bar-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-bar-right",
			"title": "arrow-bar-right",
			"className": "bi bi-arrow-bar-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-bar-up",
			"title": "arrow-bar-up",
			"className": "bi bi-arrow-bar-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-clockwise",
			"title": "arrow-clockwise",
			"className": "bi bi-arrow-clockwise",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-counterclockwise",
			"title": "arrow-counterclockwise",
			"className": "bi bi-arrow-counterclockwise",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-down",
			"title": "arrow-down",
			"className": "bi bi-arrow-down",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-down-circle",
			"title": "arrow-down-circle",
			"className": "bi bi-arrow-down-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-circle-fill",
			"title": "arrow-down-circle-fill",
			"className": "bi bi-arrow-down-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-left-circle",
			"title": "arrow-down-left-circle",
			"className": "bi bi-arrow-down-left-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-left-circle-fill",
			"title": "arrow-down-left-circle-fill",
			"className": "bi bi-arrow-down-left-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-left-square",
			"title": "arrow-down-left-square",
			"className": "bi bi-arrow-down-left-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-left-square-fill",
			"title": "arrow-down-left-square-fill",
			"className": "bi bi-arrow-down-left-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-right-circle",
			"title": "arrow-down-right-circle",
			"className": "bi bi-arrow-down-right-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-right-circle-fill",
			"title": "arrow-down-right-circle-fill",
			"className": "bi bi-arrow-down-right-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-right-square",
			"title": "arrow-down-right-square",
			"className": "bi bi-arrow-down-right-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-right-square-fill",
			"title": "arrow-down-right-square-fill",
			"className": "bi bi-arrow-down-right-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-square",
			"title": "arrow-down-square",
			"className": "bi bi-arrow-down-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-square-fill",
			"title": "arrow-down-square-fill",
			"className": "bi bi-arrow-down-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-down-left",
			"title": "arrow-down-left",
			"className": "bi bi-arrow-down-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-down-right",
			"title": "arrow-down-right",
			"className": "bi bi-arrow-down-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-down-short",
			"title": "arrow-down-short",
			"className": "bi bi-arrow-down-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-down-up",
			"title": "arrow-down-up",
			"className": "bi bi-arrow-down-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-left",
			"title": "arrow-left",
			"className": "bi bi-arrow-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-left-circle",
			"title": "arrow-left-circle",
			"className": "bi bi-arrow-left-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-left-circle-fill",
			"title": "arrow-left-circle-fill",
			"className": "bi bi-arrow-left-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-left-square",
			"title": "arrow-left-square",
			"className": "bi bi-arrow-left-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-left-square-fill",
			"title": "arrow-left-square-fill",
			"className": "bi bi-arrow-left-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-left-right",
			"title": "arrow-left-right",
			"className": "bi bi-arrow-left-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-left-short",
			"title": "arrow-left-short",
			"className": "bi bi-arrow-left-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-repeat",
			"title": "arrow-repeat",
			"className": "bi bi-arrow-repeat",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-return-left",
			"title": "arrow-return-left",
			"className": "bi bi-arrow-return-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-return-right",
			"title": "arrow-return-right",
			"className": "bi bi-arrow-return-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-right",
			"title": "arrow-right",
			"className": "bi bi-arrow-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-right-circle",
			"title": "arrow-right-circle",
			"className": "bi bi-arrow-right-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-right-circle-fill",
			"title": "arrow-right-circle-fill",
			"className": "bi bi-arrow-right-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-right-square",
			"title": "arrow-right-square",
			"className": "bi bi-arrow-right-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-right-square-fill",
			"title": "arrow-right-square-fill",
			"className": "bi bi-arrow-right-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-right-short",
			"title": "arrow-right-short",
			"className": "bi bi-arrow-right-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-through-heart",
			"title": "arrow-through-heart",
			"className": "bi bi-arrow-through-heart",
			"type": "bi",
			"categories": [
				"arrows love"
			]
		},
		{
			"name": "arrow-through-heart-fill",
			"title": "arrow-through-heart-fill",
			"className": "bi bi-arrow-through-heart-fill",
			"type": "bi",
			"categories": [
				"arrows love"
			]
		},
		{
			"name": "arrow-up",
			"title": "arrow-up",
			"className": "bi bi-arrow-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-up-circle",
			"title": "arrow-up-circle",
			"className": "bi bi-arrow-up-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-circle-fill",
			"title": "arrow-up-circle-fill",
			"className": "bi bi-arrow-up-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-left-circle",
			"title": "arrow-up-left-circle",
			"className": "bi bi-arrow-up-left-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-left-circle-fill",
			"title": "arrow-up-left-circle-fill",
			"className": "bi bi-arrow-up-left-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-left-square",
			"title": "arrow-up-left-square",
			"className": "bi bi-arrow-up-left-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-left-square-fill",
			"title": "arrow-up-left-square-fill",
			"className": "bi bi-arrow-up-left-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-right-circle",
			"title": "arrow-up-right-circle",
			"className": "bi bi-arrow-up-right-circle",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-right-circle-fill",
			"title": "arrow-up-right-circle-fill",
			"className": "bi bi-arrow-up-right-circle-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-right-square",
			"title": "arrow-up-right-square",
			"className": "bi bi-arrow-up-right-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-right-square-fill",
			"title": "arrow-up-right-square-fill",
			"className": "bi bi-arrow-up-right-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-square",
			"title": "arrow-up-square",
			"className": "bi bi-arrow-up-square",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-square-fill",
			"title": "arrow-up-square-fill",
			"className": "bi bi-arrow-up-square-fill",
			"type": "bi",
			"categories": [
				"shape arrows"
			]
		},
		{
			"name": "arrow-up-left",
			"title": "arrow-up-left",
			"className": "bi bi-arrow-up-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-up-right",
			"title": "arrow-up-right",
			"className": "bi bi-arrow-up-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrow-up-short",
			"title": "arrow-up-short",
			"className": "bi bi-arrow-up-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows",
			"title": "arrows",
			"className": "bi bi-arrows",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-angle-contract",
			"title": "arrows-angle-contract",
			"className": "bi bi-arrows-angle-contract",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-angle-expand",
			"title": "arrows-angle-expand",
			"className": "bi bi-arrows-angle-expand",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-collapse",
			"title": "arrows-collapse",
			"className": "bi bi-arrows-collapse",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-collapse-vertical",
			"title": "arrows-collapse-vertical",
			"className": "bi bi-arrows-collapse-vertical",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-expand",
			"title": "arrows-expand",
			"className": "bi bi-arrows-expand",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-expand-vertical",
			"title": "arrows-expand-vertical",
			"className": "bi bi-arrows-expand-vertical",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-fullscreen",
			"title": "arrows-fullscreen",
			"className": "bi bi-arrows-fullscreen",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-move",
			"title": "arrows-move",
			"className": "bi bi-arrows-move",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "arrows-vertical",
			"title": "arrows-vertical",
			"className": "bi bi-arrows-vertical",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "aspect-ratio",
			"title": "aspect-ratio",
			"className": "bi bi-aspect-ratio",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "aspect-ratio-fill",
			"title": "aspect-ratio-fill",
			"className": "bi bi-aspect-ratio-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "asterisk",
			"title": "asterisk",
			"className": "bi bi-asterisk",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "at",
			"title": "at",
			"className": "bi bi-at",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "award",
			"title": "award",
			"className": "bi bi-award",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "award-fill",
			"title": "award-fill",
			"className": "bi bi-award-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "back",
			"title": "back",
			"className": "bi bi-back",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "backpack",
			"title": "backpack",
			"className": "bi bi-backpack",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack-fill",
			"title": "backpack-fill",
			"className": "bi bi-backpack-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack2",
			"title": "backpack2",
			"className": "bi bi-backpack2",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack2-fill",
			"title": "backpack2-fill",
			"className": "bi bi-backpack2-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack3",
			"title": "backpack3",
			"className": "bi bi-backpack3",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack3-fill",
			"title": "backpack3-fill",
			"className": "bi bi-backpack3-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack4",
			"title": "backpack4",
			"className": "bi bi-backpack4",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backpack4-fill",
			"title": "backpack4-fill",
			"className": "bi bi-backpack4-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "backspace",
			"title": "backspace",
			"className": "bi bi-backspace",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "backspace-fill",
			"title": "backspace-fill",
			"className": "bi bi-backspace-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "backspace-reverse",
			"title": "backspace-reverse",
			"className": "bi bi-backspace-reverse",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "backspace-reverse-fill",
			"title": "backspace-reverse-fill",
			"className": "bi bi-backspace-reverse-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "badge-3d",
			"title": "badge-3d",
			"className": "bi bi-badge-3d",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-3d-fill",
			"title": "badge-3d-fill",
			"className": "bi bi-badge-3d-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-4k",
			"title": "badge-4k",
			"className": "bi bi-badge-4k",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-4k-fill",
			"title": "badge-4k-fill",
			"className": "bi bi-badge-4k-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-8k",
			"title": "badge-8k",
			"className": "bi bi-badge-8k",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-8k-fill",
			"title": "badge-8k-fill",
			"className": "bi bi-badge-8k-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-ad",
			"title": "badge-ad",
			"className": "bi bi-badge-ad",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-ad-fill",
			"title": "badge-ad-fill",
			"className": "bi bi-badge-ad-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-ar",
			"title": "badge-ar",
			"className": "bi bi-badge-ar",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-ar-fill",
			"title": "badge-ar-fill",
			"className": "bi bi-badge-ar-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-cc",
			"title": "badge-cc",
			"className": "bi bi-badge-cc",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-cc-fill",
			"title": "badge-cc-fill",
			"className": "bi bi-badge-cc-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-hd",
			"title": "badge-hd",
			"className": "bi bi-badge-hd",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-hd-fill",
			"title": "badge-hd-fill",
			"className": "bi bi-badge-hd-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-sd",
			"title": "badge-sd",
			"className": "bi bi-badge-sd",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-sd-fill",
			"title": "badge-sd-fill",
			"className": "bi bi-badge-sd-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-tm",
			"title": "badge-tm",
			"className": "bi bi-badge-tm",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-tm-fill",
			"title": "badge-tm-fill",
			"className": "bi bi-badge-tm-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-vo",
			"title": "badge-vo",
			"className": "bi bi-badge-vo",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-vo-fill",
			"title": "badge-vo-fill",
			"className": "bi bi-badge-vo-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-vr",
			"title": "badge-vr",
			"className": "bi bi-badge-vr",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-vr-fill",
			"title": "badge-vr-fill",
			"className": "bi bi-badge-vr-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-wc",
			"title": "badge-wc",
			"className": "bi bi-badge-wc",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "badge-wc-fill",
			"title": "badge-wc-fill",
			"className": "bi bi-badge-wc-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bag",
			"title": "bag",
			"className": "bi bi-bag",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-check",
			"title": "bag-check",
			"className": "bi bi-bag-check",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-check-fill",
			"title": "bag-check-fill",
			"className": "bi bi-bag-check-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-dash",
			"title": "bag-dash",
			"className": "bi bi-bag-dash",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-dash-fill",
			"title": "bag-dash-fill",
			"className": "bi bi-bag-dash-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-fill",
			"title": "bag-fill",
			"className": "bi bi-bag-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-heart",
			"title": "bag-heart",
			"className": "bi bi-bag-heart",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-heart-fill",
			"title": "bag-heart-fill",
			"className": "bi bi-bag-heart-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-plus",
			"title": "bag-plus",
			"className": "bi bi-bag-plus",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-plus-fill",
			"title": "bag-plus-fill",
			"className": "bi bi-bag-plus-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-x",
			"title": "bag-x",
			"className": "bi bi-bag-x",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bag-x-fill",
			"title": "bag-x-fill",
			"className": "bi bi-bag-x-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "balloon",
			"title": "balloon",
			"className": "bi bi-balloon",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "balloon-fill",
			"title": "balloon-fill",
			"className": "bi bi-balloon-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "balloon-heart",
			"title": "balloon-heart",
			"className": "bi bi-balloon-heart",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "balloon-heart-fill",
			"title": "balloon-heart-fill",
			"className": "bi bi-balloon-heart-fill",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "ban",
			"title": "ban",
			"className": "bi bi-ban",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ban-fill",
			"title": "ban-fill",
			"className": "bi bi-ban-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bandaid",
			"title": "bandaid",
			"className": "bi bi-bandaid",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bandaid-fill",
			"title": "bandaid-fill",
			"className": "bi bi-bandaid-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bank",
			"title": "bank",
			"className": "bi bi-bank",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bank2",
			"title": "bank2",
			"className": "bi bi-bank2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bar-chart",
			"title": "bar-chart",
			"className": "bi bi-bar-chart",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "bar-chart-fill",
			"title": "bar-chart-fill",
			"className": "bi bi-bar-chart-fill",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "bar-chart-line",
			"title": "bar-chart-line",
			"className": "bi bi-bar-chart-line",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "bar-chart-line-fill",
			"title": "bar-chart-line-fill",
			"className": "bi bi-bar-chart-line-fill",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "bar-chart-steps",
			"title": "bar-chart-steps",
			"className": "bi bi-bar-chart-steps",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "basket",
			"title": "basket",
			"className": "bi bi-basket",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "basket-fill",
			"title": "basket-fill",
			"className": "bi bi-basket-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "basket2",
			"title": "basket2",
			"className": "bi bi-basket2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "basket2-fill",
			"title": "basket2-fill",
			"className": "bi bi-basket2-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "basket3",
			"title": "basket3",
			"className": "bi bi-basket3",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "basket3-fill",
			"title": "basket3-fill",
			"className": "bi bi-basket3-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "battery",
			"title": "battery",
			"className": "bi bi-battery",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "battery-charging",
			"title": "battery-charging",
			"className": "bi bi-battery-charging",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "battery-full",
			"title": "battery-full",
			"className": "bi bi-battery-full",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "battery-half",
			"title": "battery-half",
			"className": "bi bi-battery-half",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "behance",
			"title": "behance",
			"className": "bi bi-behance",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bell",
			"title": "bell",
			"className": "bi bi-bell",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bell-fill",
			"title": "bell-fill",
			"className": "bi bi-bell-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bell-slash",
			"title": "bell-slash",
			"className": "bi bi-bell-slash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bell-slash-fill",
			"title": "bell-slash-fill",
			"className": "bi bi-bell-slash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bezier",
			"title": "bezier",
			"className": "bi bi-bezier",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bezier2",
			"title": "bezier2",
			"className": "bi bi-bezier2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bicycle",
			"title": "bicycle",
			"className": "bi bi-bicycle",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bing",
			"title": "bing",
			"className": "bi bi-bing",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "binoculars",
			"title": "binoculars",
			"className": "bi bi-binoculars",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "binoculars-fill",
			"title": "binoculars-fill",
			"className": "bi bi-binoculars-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "blockquote-left",
			"title": "blockquote-left",
			"className": "bi bi-blockquote-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "blockquote-right",
			"title": "blockquote-right",
			"className": "bi bi-blockquote-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bluetooth",
			"title": "bluetooth",
			"className": "bi bi-bluetooth",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "body-text",
			"title": "body-text",
			"className": "bi bi-body-text",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "book",
			"title": "book",
			"className": "bi bi-book",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "book-fill",
			"title": "book-fill",
			"className": "bi bi-book-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "book-half",
			"title": "book-half",
			"className": "bi bi-book-half",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bookmark",
			"title": "bookmark",
			"className": "bi bi-bookmark",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-check",
			"title": "bookmark-check",
			"className": "bi bi-bookmark-check",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-check-fill",
			"title": "bookmark-check-fill",
			"className": "bi bi-bookmark-check-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-dash",
			"title": "bookmark-dash",
			"className": "bi bi-bookmark-dash",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-dash-fill",
			"title": "bookmark-dash-fill",
			"className": "bi bi-bookmark-dash-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-fill",
			"title": "bookmark-fill",
			"className": "bi bi-bookmark-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-heart",
			"title": "bookmark-heart",
			"className": "bi bi-bookmark-heart",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-heart-fill",
			"title": "bookmark-heart-fill",
			"className": "bi bi-bookmark-heart-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-plus",
			"title": "bookmark-plus",
			"className": "bi bi-bookmark-plus",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-plus-fill",
			"title": "bookmark-plus-fill",
			"className": "bi bi-bookmark-plus-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-star",
			"title": "bookmark-star",
			"className": "bi bi-bookmark-star",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-star-fill",
			"title": "bookmark-star-fill",
			"className": "bi bi-bookmark-star-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-x",
			"title": "bookmark-x",
			"className": "bi bi-bookmark-x",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmark-x-fill",
			"title": "bookmark-x-fill",
			"className": "bi bi-bookmark-x-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmarks",
			"title": "bookmarks",
			"className": "bi bi-bookmarks",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookmarks-fill",
			"title": "bookmarks-fill",
			"className": "bi bi-bookmarks-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bookshelf",
			"title": "bookshelf",
			"className": "bi bi-bookshelf",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "boombox",
			"title": "boombox",
			"className": "bi bi-boombox",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "boombox-fill",
			"title": "boombox-fill",
			"className": "bi bi-boombox-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bootstrap",
			"title": "bootstrap",
			"className": "bi bi-bootstrap",
			"type": "bi",
			"categories": [
				"bootstrap"
			]
		},
		{
			"name": "bootstrap-fill",
			"title": "bootstrap-fill",
			"className": "bi bi-bootstrap-fill",
			"type": "bi",
			"categories": [
				"bootstrap"
			]
		},
		{
			"name": "bootstrap-reboot",
			"title": "bootstrap-reboot",
			"className": "bi bi-bootstrap-reboot",
			"type": "bi",
			"categories": [
				"bootstrap"
			]
		},
		{
			"name": "border",
			"title": "border",
			"className": "bi bi-border",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-all",
			"title": "border-all",
			"className": "bi bi-border-all",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-bottom",
			"title": "border-bottom",
			"className": "bi bi-border-bottom",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-center",
			"title": "border-center",
			"className": "bi bi-border-center",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-inner",
			"title": "border-inner",
			"className": "bi bi-border-inner",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-left",
			"title": "border-left",
			"className": "bi bi-border-left",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-middle",
			"title": "border-middle",
			"className": "bi bi-border-middle",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-outer",
			"title": "border-outer",
			"className": "bi bi-border-outer",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-right",
			"title": "border-right",
			"className": "bi bi-border-right",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-style",
			"title": "border-style",
			"className": "bi bi-border-style",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "border-top",
			"title": "border-top",
			"className": "bi bi-border-top",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "border-width",
			"title": "border-width",
			"className": "bi bi-border-width",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bounding-box",
			"title": "bounding-box",
			"className": "bi bi-bounding-box",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bounding-box-circles",
			"title": "bounding-box-circles",
			"className": "bi bi-bounding-box-circles",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "box",
			"title": "box",
			"className": "bi bi-box",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "box-arrow-down-left",
			"title": "box-arrow-down-left",
			"className": "bi bi-box-arrow-down-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-down-right",
			"title": "box-arrow-down-right",
			"className": "bi bi-box-arrow-down-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-down",
			"title": "box-arrow-down",
			"className": "bi bi-box-arrow-down",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-down",
			"title": "box-arrow-in-down",
			"className": "bi bi-box-arrow-in-down",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-down-left",
			"title": "box-arrow-in-down-left",
			"className": "bi bi-box-arrow-in-down-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-down-right",
			"title": "box-arrow-in-down-right",
			"className": "bi bi-box-arrow-in-down-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-left",
			"title": "box-arrow-in-left",
			"className": "bi bi-box-arrow-in-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-right",
			"title": "box-arrow-in-right",
			"className": "bi bi-box-arrow-in-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-up",
			"title": "box-arrow-in-up",
			"className": "bi bi-box-arrow-in-up",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-up-left",
			"title": "box-arrow-in-up-left",
			"className": "bi bi-box-arrow-in-up-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-in-up-right",
			"title": "box-arrow-in-up-right",
			"className": "bi bi-box-arrow-in-up-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-left",
			"title": "box-arrow-left",
			"className": "bi bi-box-arrow-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-right",
			"title": "box-arrow-right",
			"className": "bi bi-box-arrow-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-up",
			"title": "box-arrow-up",
			"className": "bi bi-box-arrow-up",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-up-left",
			"title": "box-arrow-up-left",
			"className": "bi bi-box-arrow-up-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-arrow-up-right",
			"title": "box-arrow-up-right",
			"className": "bi bi-box-arrow-up-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "box-fill",
			"title": "box-fill",
			"className": "bi bi-box-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "box-seam",
			"title": "box-seam",
			"className": "bi bi-box-seam",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "box-seam-fill",
			"title": "box-seam-fill",
			"className": "bi bi-box-seam-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "box2",
			"title": "box2",
			"className": "bi bi-box2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "box2-fill",
			"title": "box2-fill",
			"className": "bi bi-box2-fill",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "box2-heart",
			"title": "box2-heart",
			"className": "bi bi-box2-heart",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "box2-heart-fill",
			"title": "box2-heart-fill",
			"className": "bi bi-box2-heart-fill",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "boxes",
			"title": "boxes",
			"className": "bi bi-boxes",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "braces",
			"title": "braces",
			"className": "bi bi-braces",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "braces-asterisk",
			"title": "braces-asterisk",
			"className": "bi bi-braces-asterisk",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bricks",
			"title": "bricks",
			"className": "bi bi-bricks",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "briefcase",
			"title": "briefcase",
			"className": "bi bi-briefcase",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "briefcase-fill",
			"title": "briefcase-fill",
			"className": "bi bi-briefcase-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "brightness-alt-high",
			"title": "brightness-alt-high",
			"className": "bi bi-brightness-alt-high",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-alt-high-fill",
			"title": "brightness-alt-high-fill",
			"className": "bi bi-brightness-alt-high-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-alt-low",
			"title": "brightness-alt-low",
			"className": "bi bi-brightness-alt-low",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-alt-low-fill",
			"title": "brightness-alt-low-fill",
			"className": "bi bi-brightness-alt-low-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-high",
			"title": "brightness-high",
			"className": "bi bi-brightness-high",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-high-fill",
			"title": "brightness-high-fill",
			"className": "bi bi-brightness-high-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-low",
			"title": "brightness-low",
			"className": "bi bi-brightness-low",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brightness-low-fill",
			"title": "brightness-low-fill",
			"className": "bi bi-brightness-low-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "brilliance",
			"title": "brilliance",
			"className": "bi bi-brilliance",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "broadcast",
			"title": "broadcast",
			"className": "bi bi-broadcast",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "broadcast-pin",
			"title": "broadcast-pin",
			"className": "bi bi-broadcast-pin",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "browser-chrome",
			"title": "browser-chrome",
			"className": "bi bi-browser-chrome",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "browser-edge",
			"title": "browser-edge",
			"className": "bi bi-browser-edge",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "browser-firefox",
			"title": "browser-firefox",
			"className": "bi bi-browser-firefox",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "browser-safari",
			"title": "browser-safari",
			"className": "bi bi-browser-safari",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "brush",
			"title": "brush",
			"className": "bi bi-brush",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "brush-fill",
			"title": "brush-fill",
			"className": "bi bi-brush-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bucket",
			"title": "bucket",
			"className": "bi bi-bucket",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bucket-fill",
			"title": "bucket-fill",
			"className": "bi bi-bucket-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bug",
			"title": "bug",
			"className": "bi bi-bug",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "bug-fill",
			"title": "bug-fill",
			"className": "bi bi-bug-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "building",
			"title": "building",
			"className": "bi bi-building",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-add",
			"title": "building-add",
			"className": "bi bi-building-add",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-check",
			"title": "building-check",
			"className": "bi bi-building-check",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-dash",
			"title": "building-dash",
			"className": "bi bi-building-dash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-down",
			"title": "building-down",
			"className": "bi bi-building-down",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-exclamation",
			"title": "building-exclamation",
			"className": "bi bi-building-exclamation",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill",
			"title": "building-fill",
			"className": "bi bi-building-fill",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-add",
			"title": "building-fill-add",
			"className": "bi bi-building-fill-add",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-check",
			"title": "building-fill-check",
			"className": "bi bi-building-fill-check",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-dash",
			"title": "building-fill-dash",
			"className": "bi bi-building-fill-dash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-down",
			"title": "building-fill-down",
			"className": "bi bi-building-fill-down",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-exclamation",
			"title": "building-fill-exclamation",
			"className": "bi bi-building-fill-exclamation",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-gear",
			"title": "building-fill-gear",
			"className": "bi bi-building-fill-gear",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-lock",
			"title": "building-fill-lock",
			"className": "bi bi-building-fill-lock",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-slash",
			"title": "building-fill-slash",
			"className": "bi bi-building-fill-slash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-up",
			"title": "building-fill-up",
			"className": "bi bi-building-fill-up",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-fill-x",
			"title": "building-fill-x",
			"className": "bi bi-building-fill-x",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-gear",
			"title": "building-gear",
			"className": "bi bi-building-gear",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-lock",
			"title": "building-lock",
			"className": "bi bi-building-lock",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-slash",
			"title": "building-slash",
			"className": "bi bi-building-slash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-up",
			"title": "building-up",
			"className": "bi bi-building-up",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "building-x",
			"title": "building-x",
			"className": "bi bi-building-x",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "buildings",
			"title": "buildings",
			"className": "bi bi-buildings",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "buildings-fill",
			"title": "buildings-fill",
			"className": "bi bi-buildings-fill",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bullseye",
			"title": "bullseye",
			"className": "bi bi-bullseye",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bus-front",
			"title": "bus-front",
			"className": "bi bi-bus-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bus-front-fill",
			"title": "bus-front-fill",
			"className": "bi bi-bus-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "c-circle",
			"title": "c-circle",
			"className": "bi bi-c-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "c-circle-fill",
			"title": "c-circle-fill",
			"className": "bi bi-c-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "c-square",
			"title": "c-square",
			"className": "bi bi-c-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "c-square-fill",
			"title": "c-square-fill",
			"className": "bi bi-c-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "cake",
			"title": "cake",
			"className": "bi bi-cake",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cake-fill",
			"title": "cake-fill",
			"className": "bi bi-cake-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cake2",
			"title": "cake2",
			"className": "bi bi-cake2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cake2-fill",
			"title": "cake2-fill",
			"className": "bi bi-cake2-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "calculator",
			"title": "calculator",
			"className": "bi bi-calculator",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "calculator-fill",
			"title": "calculator-fill",
			"className": "bi bi-calculator-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "calendar",
			"title": "calendar",
			"className": "bi bi-calendar",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-check",
			"title": "calendar-check",
			"className": "bi bi-calendar-check",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-check-fill",
			"title": "calendar-check-fill",
			"className": "bi bi-calendar-check-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-date",
			"title": "calendar-date",
			"className": "bi bi-calendar-date",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-date-fill",
			"title": "calendar-date-fill",
			"className": "bi bi-calendar-date-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-day",
			"title": "calendar-day",
			"className": "bi bi-calendar-day",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-day-fill",
			"title": "calendar-day-fill",
			"className": "bi bi-calendar-day-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-event",
			"title": "calendar-event",
			"className": "bi bi-calendar-event",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-event-fill",
			"title": "calendar-event-fill",
			"className": "bi bi-calendar-event-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-fill",
			"title": "calendar-fill",
			"className": "bi bi-calendar-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-heart",
			"title": "calendar-heart",
			"className": "bi bi-calendar-heart",
			"type": "bi",
			"categories": [
				"date and time love"
			]
		},
		{
			"name": "calendar-heart-fill",
			"title": "calendar-heart-fill",
			"className": "bi bi-calendar-heart-fill",
			"type": "bi",
			"categories": [
				"date and time love"
			]
		},
		{
			"name": "calendar-minus",
			"title": "calendar-minus",
			"className": "bi bi-calendar-minus",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-minus-fill",
			"title": "calendar-minus-fill",
			"className": "bi bi-calendar-minus-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-month",
			"title": "calendar-month",
			"className": "bi bi-calendar-month",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-month-fill",
			"title": "calendar-month-fill",
			"className": "bi bi-calendar-month-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-plus",
			"title": "calendar-plus",
			"className": "bi bi-calendar-plus",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-plus-fill",
			"title": "calendar-plus-fill",
			"className": "bi bi-calendar-plus-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-range",
			"title": "calendar-range",
			"className": "bi bi-calendar-range",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-range-fill",
			"title": "calendar-range-fill",
			"className": "bi bi-calendar-range-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-week",
			"title": "calendar-week",
			"className": "bi bi-calendar-week",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-week-fill",
			"title": "calendar-week-fill",
			"className": "bi bi-calendar-week-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-x",
			"title": "calendar-x",
			"className": "bi bi-calendar-x",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar-x-fill",
			"title": "calendar-x-fill",
			"className": "bi bi-calendar-x-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2",
			"title": "calendar2",
			"className": "bi bi-calendar2",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-check",
			"title": "calendar2-check",
			"className": "bi bi-calendar2-check",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-check-fill",
			"title": "calendar2-check-fill",
			"className": "bi bi-calendar2-check-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-date",
			"title": "calendar2-date",
			"className": "bi bi-calendar2-date",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-date-fill",
			"title": "calendar2-date-fill",
			"className": "bi bi-calendar2-date-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-day",
			"title": "calendar2-day",
			"className": "bi bi-calendar2-day",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-day-fill",
			"title": "calendar2-day-fill",
			"className": "bi bi-calendar2-day-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-event",
			"title": "calendar2-event",
			"className": "bi bi-calendar2-event",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-event-fill",
			"title": "calendar2-event-fill",
			"className": "bi bi-calendar2-event-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-fill",
			"title": "calendar2-fill",
			"className": "bi bi-calendar2-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-heart",
			"title": "calendar2-heart",
			"className": "bi bi-calendar2-heart",
			"type": "bi",
			"categories": [
				"date and time love"
			]
		},
		{
			"name": "calendar2-heart-fill",
			"title": "calendar2-heart-fill",
			"className": "bi bi-calendar2-heart-fill",
			"type": "bi",
			"categories": [
				"date and time love"
			]
		},
		{
			"name": "calendar2-minus",
			"title": "calendar2-minus",
			"className": "bi bi-calendar2-minus",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-minus-fill",
			"title": "calendar2-minus-fill",
			"className": "bi bi-calendar2-minus-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-month",
			"title": "calendar2-month",
			"className": "bi bi-calendar2-month",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-month-fill",
			"title": "calendar2-month-fill",
			"className": "bi bi-calendar2-month-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-plus",
			"title": "calendar2-plus",
			"className": "bi bi-calendar2-plus",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-plus-fill",
			"title": "calendar2-plus-fill",
			"className": "bi bi-calendar2-plus-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-range",
			"title": "calendar2-range",
			"className": "bi bi-calendar2-range",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-range-fill",
			"title": "calendar2-range-fill",
			"className": "bi bi-calendar2-range-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-week",
			"title": "calendar2-week",
			"className": "bi bi-calendar2-week",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-week-fill",
			"title": "calendar2-week-fill",
			"className": "bi bi-calendar2-week-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-x",
			"title": "calendar2-x",
			"className": "bi bi-calendar2-x",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar2-x-fill",
			"title": "calendar2-x-fill",
			"className": "bi bi-calendar2-x-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3",
			"title": "calendar3",
			"className": "bi bi-calendar3",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-event",
			"title": "calendar3-event",
			"className": "bi bi-calendar3-event",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-event-fill",
			"title": "calendar3-event-fill",
			"className": "bi bi-calendar3-event-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-fill",
			"title": "calendar3-fill",
			"className": "bi bi-calendar3-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-range",
			"title": "calendar3-range",
			"className": "bi bi-calendar3-range",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-range-fill",
			"title": "calendar3-range-fill",
			"className": "bi bi-calendar3-range-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-week",
			"title": "calendar3-week",
			"className": "bi bi-calendar3-week",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar3-week-fill",
			"title": "calendar3-week-fill",
			"className": "bi bi-calendar3-week-fill",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar4",
			"title": "calendar4",
			"className": "bi bi-calendar4",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar4-event",
			"title": "calendar4-event",
			"className": "bi bi-calendar4-event",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar4-range",
			"title": "calendar4-range",
			"className": "bi bi-calendar4-range",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "calendar4-week",
			"title": "calendar4-week",
			"className": "bi bi-calendar4-week",
			"type": "bi",
			"categories": [
				"date and time"
			]
		},
		{
			"name": "camera",
			"title": "camera",
			"className": "bi bi-camera",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera2",
			"title": "camera2",
			"className": "bi bi-camera2",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-fill",
			"title": "camera-fill",
			"className": "bi bi-camera-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-reels",
			"title": "camera-reels",
			"className": "bi bi-camera-reels",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-reels-fill",
			"title": "camera-reels-fill",
			"className": "bi bi-camera-reels-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-video",
			"title": "camera-video",
			"className": "bi bi-camera-video",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-video-fill",
			"title": "camera-video-fill",
			"className": "bi bi-camera-video-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-video-off",
			"title": "camera-video-off",
			"className": "bi bi-camera-video-off",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "camera-video-off-fill",
			"title": "camera-video-off-fill",
			"className": "bi bi-camera-video-off-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "capslock",
			"title": "capslock",
			"className": "bi bi-capslock",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "capslock-fill",
			"title": "capslock-fill",
			"className": "bi bi-capslock-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "capsule",
			"title": "capsule",
			"className": "bi bi-capsule",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "capsule-pill",
			"title": "capsule-pill",
			"className": "bi bi-capsule-pill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "car-front",
			"title": "car-front",
			"className": "bi bi-car-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "car-front-fill",
			"title": "car-front-fill",
			"className": "bi bi-car-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "card-checklist",
			"title": "card-checklist",
			"className": "bi bi-card-checklist",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "card-heading",
			"title": "card-heading",
			"className": "bi bi-card-heading",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "card-image",
			"title": "card-image",
			"className": "bi bi-card-image",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "card-list",
			"title": "card-list",
			"className": "bi bi-card-list",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "card-text",
			"title": "card-text",
			"className": "bi bi-card-text",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "caret-down",
			"title": "caret-down",
			"className": "bi bi-caret-down",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-down-fill",
			"title": "caret-down-fill",
			"className": "bi bi-caret-down-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-down-square",
			"title": "caret-down-square",
			"className": "bi bi-caret-down-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-down-square-fill",
			"title": "caret-down-square-fill",
			"className": "bi bi-caret-down-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-left",
			"title": "caret-left",
			"className": "bi bi-caret-left",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-left-fill",
			"title": "caret-left-fill",
			"className": "bi bi-caret-left-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-left-square",
			"title": "caret-left-square",
			"className": "bi bi-caret-left-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-left-square-fill",
			"title": "caret-left-square-fill",
			"className": "bi bi-caret-left-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-right",
			"title": "caret-right",
			"className": "bi bi-caret-right",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-right-fill",
			"title": "caret-right-fill",
			"className": "bi bi-caret-right-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-right-square",
			"title": "caret-right-square",
			"className": "bi bi-caret-right-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-right-square-fill",
			"title": "caret-right-square-fill",
			"className": "bi bi-caret-right-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-up",
			"title": "caret-up",
			"className": "bi bi-caret-up",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-up-fill",
			"title": "caret-up-fill",
			"className": "bi bi-caret-up-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-up-square",
			"title": "caret-up-square",
			"className": "bi bi-caret-up-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "caret-up-square-fill",
			"title": "caret-up-square-fill",
			"className": "bi bi-caret-up-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "cart",
			"title": "cart",
			"className": "bi bi-cart",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-check",
			"title": "cart-check",
			"className": "bi bi-cart-check",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-check-fill",
			"title": "cart-check-fill",
			"className": "bi bi-cart-check-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-dash",
			"title": "cart-dash",
			"className": "bi bi-cart-dash",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-dash-fill",
			"title": "cart-dash-fill",
			"className": "bi bi-cart-dash-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-fill",
			"title": "cart-fill",
			"className": "bi bi-cart-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-plus",
			"title": "cart-plus",
			"className": "bi bi-cart-plus",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-plus-fill",
			"title": "cart-plus-fill",
			"className": "bi bi-cart-plus-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-x",
			"title": "cart-x",
			"className": "bi bi-cart-x",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart-x-fill",
			"title": "cart-x-fill",
			"className": "bi bi-cart-x-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart2",
			"title": "cart2",
			"className": "bi bi-cart2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart3",
			"title": "cart3",
			"className": "bi bi-cart3",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cart4",
			"title": "cart4",
			"className": "bi bi-cart4",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cash",
			"title": "cash",
			"className": "bi bi-cash",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cash-coin",
			"title": "cash-coin",
			"className": "bi bi-cash-coin",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cash-stack",
			"title": "cash-stack",
			"className": "bi bi-cash-stack",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cassette",
			"title": "cassette",
			"className": "bi bi-cassette",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "cassette-fill",
			"title": "cassette-fill",
			"className": "bi bi-cassette-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "cast",
			"title": "cast",
			"className": "bi bi-cast",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "cc-circle",
			"title": "cc-circle",
			"className": "bi bi-cc-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "cc-circle-fill",
			"title": "cc-circle-fill",
			"className": "bi bi-cc-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "cc-square",
			"title": "cc-square",
			"className": "bi bi-cc-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "cc-square-fill",
			"title": "cc-square-fill",
			"className": "bi bi-cc-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "chat",
			"title": "chat",
			"className": "bi bi-chat",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-dots",
			"title": "chat-dots",
			"className": "bi bi-chat-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-dots-fill",
			"title": "chat-dots-fill",
			"className": "bi bi-chat-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-fill",
			"title": "chat-fill",
			"className": "bi bi-chat-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-heart",
			"title": "chat-heart",
			"className": "bi bi-chat-heart",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-heart-fill",
			"title": "chat-heart-fill",
			"className": "bi bi-chat-heart-fill",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-left",
			"title": "chat-left",
			"className": "bi bi-chat-left",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-dots",
			"title": "chat-left-dots",
			"className": "bi bi-chat-left-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-dots-fill",
			"title": "chat-left-dots-fill",
			"className": "bi bi-chat-left-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-fill",
			"title": "chat-left-fill",
			"className": "bi bi-chat-left-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-heart",
			"title": "chat-left-heart",
			"className": "bi bi-chat-left-heart",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-left-heart-fill",
			"title": "chat-left-heart-fill",
			"className": "bi bi-chat-left-heart-fill",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-left-quote",
			"title": "chat-left-quote",
			"className": "bi bi-chat-left-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-quote-fill",
			"title": "chat-left-quote-fill",
			"className": "bi bi-chat-left-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-text",
			"title": "chat-left-text",
			"className": "bi bi-chat-left-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-left-text-fill",
			"title": "chat-left-text-fill",
			"className": "bi bi-chat-left-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-quote",
			"title": "chat-quote",
			"className": "bi bi-chat-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-quote-fill",
			"title": "chat-quote-fill",
			"className": "bi bi-chat-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right",
			"title": "chat-right",
			"className": "bi bi-chat-right",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-dots",
			"title": "chat-right-dots",
			"className": "bi bi-chat-right-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-dots-fill",
			"title": "chat-right-dots-fill",
			"className": "bi bi-chat-right-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-fill",
			"title": "chat-right-fill",
			"className": "bi bi-chat-right-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-heart",
			"title": "chat-right-heart",
			"className": "bi bi-chat-right-heart",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-right-heart-fill",
			"title": "chat-right-heart-fill",
			"className": "bi bi-chat-right-heart-fill",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-right-quote",
			"title": "chat-right-quote",
			"className": "bi bi-chat-right-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-quote-fill",
			"title": "chat-right-quote-fill",
			"className": "bi bi-chat-right-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-text",
			"title": "chat-right-text",
			"className": "bi bi-chat-right-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-right-text-fill",
			"title": "chat-right-text-fill",
			"className": "bi bi-chat-right-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square",
			"title": "chat-square",
			"className": "bi bi-chat-square",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-dots",
			"title": "chat-square-dots",
			"className": "bi bi-chat-square-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-dots-fill",
			"title": "chat-square-dots-fill",
			"className": "bi bi-chat-square-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-fill",
			"title": "chat-square-fill",
			"className": "bi bi-chat-square-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-heart",
			"title": "chat-square-heart",
			"className": "bi bi-chat-square-heart",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-square-heart-fill",
			"title": "chat-square-heart-fill",
			"className": "bi bi-chat-square-heart-fill",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "chat-square-quote",
			"title": "chat-square-quote",
			"className": "bi bi-chat-square-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-quote-fill",
			"title": "chat-square-quote-fill",
			"className": "bi bi-chat-square-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-text",
			"title": "chat-square-text",
			"className": "bi bi-chat-square-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-square-text-fill",
			"title": "chat-square-text-fill",
			"className": "bi bi-chat-square-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-text",
			"title": "chat-text",
			"className": "bi bi-chat-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "chat-text-fill",
			"title": "chat-text-fill",
			"className": "bi bi-chat-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "check",
			"title": "check",
			"className": "bi bi-check",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "check-all",
			"title": "check-all",
			"className": "bi bi-check-all",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "check-circle",
			"title": "check-circle",
			"className": "bi bi-check-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "check-circle-fill",
			"title": "check-circle-fill",
			"className": "bi bi-check-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "check-lg",
			"title": "check-lg",
			"className": "bi bi-check-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "check-square",
			"title": "check-square",
			"className": "bi bi-check-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "check-square-fill",
			"title": "check-square-fill",
			"className": "bi bi-check-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "check2",
			"title": "check2",
			"className": "bi bi-check2",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "check2-all",
			"title": "check2-all",
			"className": "bi bi-check2-all",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "check2-circle",
			"title": "check2-circle",
			"className": "bi bi-check2-circle",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "check2-square",
			"title": "check2-square",
			"className": "bi bi-check2-square",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "chevron-bar-contract",
			"title": "chevron-bar-contract",
			"className": "bi bi-chevron-bar-contract",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-bar-down",
			"title": "chevron-bar-down",
			"className": "bi bi-chevron-bar-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-bar-expand",
			"title": "chevron-bar-expand",
			"className": "bi bi-chevron-bar-expand",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-bar-left",
			"title": "chevron-bar-left",
			"className": "bi bi-chevron-bar-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-bar-right",
			"title": "chevron-bar-right",
			"className": "bi bi-chevron-bar-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-bar-up",
			"title": "chevron-bar-up",
			"className": "bi bi-chevron-bar-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-compact-down",
			"title": "chevron-compact-down",
			"className": "bi bi-chevron-compact-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-compact-left",
			"title": "chevron-compact-left",
			"className": "bi bi-chevron-compact-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-compact-right",
			"title": "chevron-compact-right",
			"className": "bi bi-chevron-compact-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-compact-up",
			"title": "chevron-compact-up",
			"className": "bi bi-chevron-compact-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-contract",
			"title": "chevron-contract",
			"className": "bi bi-chevron-contract",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-double-down",
			"title": "chevron-double-down",
			"className": "bi bi-chevron-double-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-double-left",
			"title": "chevron-double-left",
			"className": "bi bi-chevron-double-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-double-right",
			"title": "chevron-double-right",
			"className": "bi bi-chevron-double-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-double-up",
			"title": "chevron-double-up",
			"className": "bi bi-chevron-double-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-down",
			"title": "chevron-down",
			"className": "bi bi-chevron-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-expand",
			"title": "chevron-expand",
			"className": "bi bi-chevron-expand",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-left",
			"title": "chevron-left",
			"className": "bi bi-chevron-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-right",
			"title": "chevron-right",
			"className": "bi bi-chevron-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "chevron-up",
			"title": "chevron-up",
			"className": "bi bi-chevron-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "circle",
			"title": "circle",
			"className": "bi bi-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "circle-fill",
			"title": "circle-fill",
			"className": "bi bi-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "circle-half",
			"title": "circle-half",
			"className": "bi bi-circle-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "slash-circle",
			"title": "slash-circle",
			"className": "bi bi-slash-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "circle-square",
			"title": "circle-square",
			"className": "bi bi-circle-square",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "clipboard",
			"title": "clipboard",
			"className": "bi bi-clipboard",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-check",
			"title": "clipboard-check",
			"className": "bi bi-clipboard-check",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-check-fill",
			"title": "clipboard-check-fill",
			"className": "bi bi-clipboard-check-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-data",
			"title": "clipboard-data",
			"className": "bi bi-clipboard-data",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-data-fill",
			"title": "clipboard-data-fill",
			"className": "bi bi-clipboard-data-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-fill",
			"title": "clipboard-fill",
			"className": "bi bi-clipboard-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-heart",
			"title": "clipboard-heart",
			"className": "bi bi-clipboard-heart",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-heart-fill",
			"title": "clipboard-heart-fill",
			"className": "bi bi-clipboard-heart-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-minus",
			"title": "clipboard-minus",
			"className": "bi bi-clipboard-minus",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-minus-fill",
			"title": "clipboard-minus-fill",
			"className": "bi bi-clipboard-minus-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-plus",
			"title": "clipboard-plus",
			"className": "bi bi-clipboard-plus",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-plus-fill",
			"title": "clipboard-plus-fill",
			"className": "bi bi-clipboard-plus-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-pulse",
			"title": "clipboard-pulse",
			"className": "bi bi-clipboard-pulse",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-x",
			"title": "clipboard-x",
			"className": "bi bi-clipboard-x",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard-x-fill",
			"title": "clipboard-x-fill",
			"className": "bi bi-clipboard-x-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2",
			"title": "clipboard2",
			"className": "bi bi-clipboard2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-check",
			"title": "clipboard2-check",
			"className": "bi bi-clipboard2-check",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-check-fill",
			"title": "clipboard2-check-fill",
			"className": "bi bi-clipboard2-check-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-data",
			"title": "clipboard2-data",
			"className": "bi bi-clipboard2-data",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-data-fill",
			"title": "clipboard2-data-fill",
			"className": "bi bi-clipboard2-data-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-fill",
			"title": "clipboard2-fill",
			"className": "bi bi-clipboard2-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-heart",
			"title": "clipboard2-heart",
			"className": "bi bi-clipboard2-heart",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-heart-fill",
			"title": "clipboard2-heart-fill",
			"className": "bi bi-clipboard2-heart-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-minus",
			"title": "clipboard2-minus",
			"className": "bi bi-clipboard2-minus",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-minus-fill",
			"title": "clipboard2-minus-fill",
			"className": "bi bi-clipboard2-minus-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-plus",
			"title": "clipboard2-plus",
			"className": "bi bi-clipboard2-plus",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-plus-fill",
			"title": "clipboard2-plus-fill",
			"className": "bi bi-clipboard2-plus-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-pulse",
			"title": "clipboard2-pulse",
			"className": "bi bi-clipboard2-pulse",
			"type": "bi",
			"categories": [
				"real world medical"
			]
		},
		{
			"name": "clipboard2-pulse-fill",
			"title": "clipboard2-pulse-fill",
			"className": "bi bi-clipboard2-pulse-fill",
			"type": "bi",
			"categories": [
				"real world medical"
			]
		},
		{
			"name": "clipboard2-x",
			"title": "clipboard2-x",
			"className": "bi bi-clipboard2-x",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clipboard2-x-fill",
			"title": "clipboard2-x-fill",
			"className": "bi bi-clipboard2-x-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "clock",
			"title": "clock",
			"className": "bi bi-clock",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "clock-fill",
			"title": "clock-fill",
			"className": "bi bi-clock-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "clock-history",
			"title": "clock-history",
			"className": "bi bi-clock-history",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "cloud",
			"title": "cloud",
			"className": "bi bi-cloud",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-arrow-down",
			"title": "cloud-arrow-down",
			"className": "bi bi-cloud-arrow-down",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-arrow-down-fill",
			"title": "cloud-arrow-down-fill",
			"className": "bi bi-cloud-arrow-down-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-arrow-up",
			"title": "cloud-arrow-up",
			"className": "bi bi-cloud-arrow-up",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-arrow-up-fill",
			"title": "cloud-arrow-up-fill",
			"className": "bi bi-cloud-arrow-up-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-check",
			"title": "cloud-check",
			"className": "bi bi-cloud-check",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-check-fill",
			"title": "cloud-check-fill",
			"className": "bi bi-cloud-check-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-download",
			"title": "cloud-download",
			"className": "bi bi-cloud-download",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-download-fill",
			"title": "cloud-download-fill",
			"className": "bi bi-cloud-download-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-drizzle",
			"title": "cloud-drizzle",
			"className": "bi bi-cloud-drizzle",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-drizzle-fill",
			"title": "cloud-drizzle-fill",
			"className": "bi bi-cloud-drizzle-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-fill",
			"title": "cloud-fill",
			"className": "bi bi-cloud-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-fog",
			"title": "cloud-fog",
			"className": "bi bi-cloud-fog",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-fog-fill",
			"title": "cloud-fog-fill",
			"className": "bi bi-cloud-fog-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-fog2",
			"title": "cloud-fog2",
			"className": "bi bi-cloud-fog2",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-fog2-fill",
			"title": "cloud-fog2-fill",
			"className": "bi bi-cloud-fog2-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-hail",
			"title": "cloud-hail",
			"className": "bi bi-cloud-hail",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-hail-fill",
			"title": "cloud-hail-fill",
			"className": "bi bi-cloud-hail-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-haze",
			"title": "cloud-haze",
			"className": "bi bi-cloud-haze",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-haze-fill",
			"title": "cloud-haze-fill",
			"className": "bi bi-cloud-haze-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-haze2",
			"title": "cloud-haze2",
			"className": "bi bi-cloud-haze2",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-haze2-fill",
			"title": "cloud-haze2-fill",
			"className": "bi bi-cloud-haze2-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-lightning",
			"title": "cloud-lightning",
			"className": "bi bi-cloud-lightning",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-lightning-fill",
			"title": "cloud-lightning-fill",
			"className": "bi bi-cloud-lightning-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-lightning-rain",
			"title": "cloud-lightning-rain",
			"className": "bi bi-cloud-lightning-rain",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-lightning-rain-fill",
			"title": "cloud-lightning-rain-fill",
			"className": "bi bi-cloud-lightning-rain-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-minus",
			"title": "cloud-minus",
			"className": "bi bi-cloud-minus",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-minus-fill",
			"title": "cloud-minus-fill",
			"className": "bi bi-cloud-minus-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-moon",
			"title": "cloud-moon",
			"className": "bi bi-cloud-moon",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-moon-fill",
			"title": "cloud-moon-fill",
			"className": "bi bi-cloud-moon-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-plus",
			"title": "cloud-plus",
			"className": "bi bi-cloud-plus",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-plus-fill",
			"title": "cloud-plus-fill",
			"className": "bi bi-cloud-plus-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-rain",
			"title": "cloud-rain",
			"className": "bi bi-cloud-rain",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-rain-fill",
			"title": "cloud-rain-fill",
			"className": "bi bi-cloud-rain-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-rain-heavy",
			"title": "cloud-rain-heavy",
			"className": "bi bi-cloud-rain-heavy",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-rain-heavy-fill",
			"title": "cloud-rain-heavy-fill",
			"className": "bi bi-cloud-rain-heavy-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-slash",
			"title": "cloud-slash",
			"className": "bi bi-cloud-slash",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-slash-fill",
			"title": "cloud-slash-fill",
			"className": "bi bi-cloud-slash-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-sleet",
			"title": "cloud-sleet",
			"className": "bi bi-cloud-sleet",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-sleet-fill",
			"title": "cloud-sleet-fill",
			"className": "bi bi-cloud-sleet-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-snow",
			"title": "cloud-snow",
			"className": "bi bi-cloud-snow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-snow-fill",
			"title": "cloud-snow-fill",
			"className": "bi bi-cloud-snow-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-sun",
			"title": "cloud-sun",
			"className": "bi bi-cloud-sun",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-sun-fill",
			"title": "cloud-sun-fill",
			"className": "bi bi-cloud-sun-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloud-upload",
			"title": "cloud-upload",
			"className": "bi bi-cloud-upload",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "cloud-upload-fill",
			"title": "cloud-upload-fill",
			"className": "bi bi-cloud-upload-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "clouds",
			"title": "clouds",
			"className": "bi bi-clouds",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "clouds-fill",
			"title": "clouds-fill",
			"className": "bi bi-clouds-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloudy",
			"title": "cloudy",
			"className": "bi bi-cloudy",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "cloudy-fill",
			"title": "cloudy-fill",
			"className": "bi bi-cloudy-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "code",
			"title": "code",
			"className": "bi bi-code",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "code-slash",
			"title": "code-slash",
			"className": "bi bi-code-slash",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "code-square",
			"title": "code-square",
			"className": "bi bi-code-square",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "coin",
			"title": "coin",
			"className": "bi bi-coin",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "collection",
			"title": "collection",
			"className": "bi bi-collection",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "collection-fill",
			"title": "collection-fill",
			"className": "bi bi-collection-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "collection-play",
			"title": "collection-play",
			"className": "bi bi-collection-play",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "collection-play-fill",
			"title": "collection-play-fill",
			"className": "bi bi-collection-play-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "columns",
			"title": "columns",
			"className": "bi bi-columns",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "columns-gap",
			"title": "columns-gap",
			"className": "bi bi-columns-gap",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "command",
			"title": "command",
			"className": "bi bi-command",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "compass",
			"title": "compass",
			"className": "bi bi-compass",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "compass-fill",
			"title": "compass-fill",
			"className": "bi bi-compass-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "cone",
			"title": "cone",
			"className": "bi bi-cone",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cone-striped",
			"title": "cone-striped",
			"className": "bi bi-cone-striped",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "controller",
			"title": "controller",
			"className": "bi bi-controller",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "cookie",
			"title": "cookie",
			"className": "bi bi-cookie",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "copy",
			"title": "copy",
			"className": "bi bi-copy",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "cpu",
			"title": "cpu",
			"className": "bi bi-cpu",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "cpu-fill",
			"title": "cpu-fill",
			"className": "bi bi-cpu-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "credit-card",
			"title": "credit-card",
			"className": "bi bi-credit-card",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "credit-card-2-back",
			"title": "credit-card-2-back",
			"className": "bi bi-credit-card-2-back",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "credit-card-2-back-fill",
			"title": "credit-card-2-back-fill",
			"className": "bi bi-credit-card-2-back-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "credit-card-2-front",
			"title": "credit-card-2-front",
			"className": "bi bi-credit-card-2-front",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "credit-card-2-front-fill",
			"title": "credit-card-2-front-fill",
			"className": "bi bi-credit-card-2-front-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "credit-card-fill",
			"title": "credit-card-fill",
			"className": "bi bi-credit-card-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "crop",
			"title": "crop",
			"className": "bi bi-crop",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "crosshair",
			"title": "crosshair",
			"className": "bi bi-crosshair",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "crosshair2",
			"title": "crosshair2",
			"className": "bi bi-crosshair2",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "cup",
			"title": "cup",
			"className": "bi bi-cup",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cup-fill",
			"title": "cup-fill",
			"className": "bi bi-cup-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cup-hot",
			"title": "cup-hot",
			"className": "bi bi-cup-hot",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cup-hot-fill",
			"title": "cup-hot-fill",
			"className": "bi bi-cup-hot-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "cup-straw",
			"title": "cup-straw",
			"className": "bi bi-cup-straw",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "currency-bitcoin",
			"title": "currency-bitcoin",
			"className": "bi bi-currency-bitcoin",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "currency-dollar",
			"title": "currency-dollar",
			"className": "bi bi-currency-dollar",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "currency-euro",
			"title": "currency-euro",
			"className": "bi bi-currency-euro",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "currency-exchange",
			"title": "currency-exchange",
			"className": "bi bi-currency-exchange",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "currency-pound",
			"title": "currency-pound",
			"className": "bi bi-currency-pound",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "currency-rupee",
			"title": "currency-rupee",
			"className": "bi bi-currency-rupee",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "currency-yen",
			"title": "currency-yen",
			"className": "bi bi-currency-yen",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "cursor",
			"title": "cursor",
			"className": "bi bi-cursor",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "cursor-fill",
			"title": "cursor-fill",
			"className": "bi bi-cursor-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "cursor-text",
			"title": "cursor-text",
			"className": "bi bi-cursor-text",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "dash",
			"title": "dash",
			"className": "bi bi-dash",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-circle",
			"title": "dash-circle",
			"className": "bi bi-dash-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-circle-dotted",
			"title": "dash-circle-dotted",
			"className": "bi bi-dash-circle-dotted",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-circle-fill",
			"title": "dash-circle-fill",
			"className": "bi bi-dash-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-lg",
			"title": "dash-lg",
			"className": "bi bi-dash-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-square",
			"title": "dash-square",
			"className": "bi bi-dash-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-square-dotted",
			"title": "dash-square-dotted",
			"className": "bi bi-dash-square-dotted",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "dash-square-fill",
			"title": "dash-square-fill",
			"className": "bi bi-dash-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "database",
			"title": "database",
			"className": "bi bi-database",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-add",
			"title": "database-add",
			"className": "bi bi-database-add",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-check",
			"title": "database-check",
			"className": "bi bi-database-check",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-dash",
			"title": "database-dash",
			"className": "bi bi-database-dash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-down",
			"title": "database-down",
			"className": "bi bi-database-down",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-exclamation",
			"title": "database-exclamation",
			"className": "bi bi-database-exclamation",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill",
			"title": "database-fill",
			"className": "bi bi-database-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-add",
			"title": "database-fill-add",
			"className": "bi bi-database-fill-add",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-check",
			"title": "database-fill-check",
			"className": "bi bi-database-fill-check",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-dash",
			"title": "database-fill-dash",
			"className": "bi bi-database-fill-dash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-down",
			"title": "database-fill-down",
			"className": "bi bi-database-fill-down",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-exclamation",
			"title": "database-fill-exclamation",
			"className": "bi bi-database-fill-exclamation",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-gear",
			"title": "database-fill-gear",
			"className": "bi bi-database-fill-gear",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-lock",
			"title": "database-fill-lock",
			"className": "bi bi-database-fill-lock",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-slash",
			"title": "database-fill-slash",
			"className": "bi bi-database-fill-slash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-up",
			"title": "database-fill-up",
			"className": "bi bi-database-fill-up",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-fill-x",
			"title": "database-fill-x",
			"className": "bi bi-database-fill-x",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-gear",
			"title": "database-gear",
			"className": "bi bi-database-gear",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-lock",
			"title": "database-lock",
			"className": "bi bi-database-lock",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-slash",
			"title": "database-slash",
			"className": "bi bi-database-slash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-up",
			"title": "database-up",
			"className": "bi bi-database-up",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "database-x",
			"title": "database-x",
			"className": "bi bi-database-x",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "device-hdd",
			"title": "device-hdd",
			"className": "bi bi-device-hdd",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "device-hdd-fill",
			"title": "device-hdd-fill",
			"className": "bi bi-device-hdd-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "device-ssd",
			"title": "device-ssd",
			"className": "bi bi-device-ssd",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "device-ssd-fill",
			"title": "device-ssd-fill",
			"className": "bi bi-device-ssd-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "diagram-2",
			"title": "diagram-2",
			"className": "bi bi-diagram-2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "diagram-2-fill",
			"title": "diagram-2-fill",
			"className": "bi bi-diagram-2-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "diagram-3",
			"title": "diagram-3",
			"className": "bi bi-diagram-3",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "diagram-3-fill",
			"title": "diagram-3-fill",
			"className": "bi bi-diagram-3-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "diamond",
			"title": "diamond",
			"className": "bi bi-diamond",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "diamond-fill",
			"title": "diamond-fill",
			"className": "bi bi-diamond-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "diamond-half",
			"title": "diamond-half",
			"className": "bi bi-diamond-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "dice-1",
			"title": "dice-1",
			"className": "bi bi-dice-1",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-1-fill",
			"title": "dice-1-fill",
			"className": "bi bi-dice-1-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-2",
			"title": "dice-2",
			"className": "bi bi-dice-2",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-2-fill",
			"title": "dice-2-fill",
			"className": "bi bi-dice-2-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-3",
			"title": "dice-3",
			"className": "bi bi-dice-3",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-3-fill",
			"title": "dice-3-fill",
			"className": "bi bi-dice-3-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-4",
			"title": "dice-4",
			"className": "bi bi-dice-4",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-4-fill",
			"title": "dice-4-fill",
			"className": "bi bi-dice-4-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-5",
			"title": "dice-5",
			"className": "bi bi-dice-5",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-5-fill",
			"title": "dice-5-fill",
			"className": "bi bi-dice-5-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-6",
			"title": "dice-6",
			"className": "bi bi-dice-6",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dice-6-fill",
			"title": "dice-6-fill",
			"className": "bi bi-dice-6-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "disc",
			"title": "disc",
			"className": "bi bi-disc",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "disc-fill",
			"title": "disc-fill",
			"className": "bi bi-disc-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "discord",
			"title": "discord",
			"className": "bi bi-discord",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "display",
			"title": "display",
			"className": "bi bi-display",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "display-fill",
			"title": "display-fill",
			"className": "bi bi-display-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "displayport",
			"title": "displayport",
			"className": "bi bi-displayport",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "displayport-fill",
			"title": "displayport-fill",
			"className": "bi bi-displayport-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "distribute-horizontal",
			"title": "distribute-horizontal",
			"className": "bi bi-distribute-horizontal",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "distribute-vertical",
			"title": "distribute-vertical",
			"className": "bi bi-distribute-vertical",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "door-closed",
			"title": "door-closed",
			"className": "bi bi-door-closed",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "door-closed-fill",
			"title": "door-closed-fill",
			"className": "bi bi-door-closed-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "door-open",
			"title": "door-open",
			"className": "bi bi-door-open",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "door-open-fill",
			"title": "door-open-fill",
			"className": "bi bi-door-open-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "dot",
			"title": "dot",
			"className": "bi bi-dot",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "download",
			"title": "download",
			"className": "bi bi-download",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "dpad",
			"title": "dpad",
			"className": "bi bi-dpad",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dpad-fill",
			"title": "dpad-fill",
			"className": "bi bi-dpad-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "dribbble",
			"title": "dribbble",
			"className": "bi bi-dribbble",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "dropbox",
			"title": "dropbox",
			"className": "bi bi-dropbox",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "droplet",
			"title": "droplet",
			"className": "bi bi-droplet",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "droplet-fill",
			"title": "droplet-fill",
			"className": "bi bi-droplet-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "droplet-half",
			"title": "droplet-half",
			"className": "bi bi-droplet-half",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "duffle",
			"title": "duffle",
			"className": "bi bi-duffle",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "duffle-fill",
			"title": "duffle-fill",
			"className": "bi bi-duffle-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "ear",
			"title": "ear",
			"className": "bi bi-ear",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ear-fill",
			"title": "ear-fill",
			"className": "bi bi-ear-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "earbuds",
			"title": "earbuds",
			"className": "bi bi-earbuds",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "easel",
			"title": "easel",
			"className": "bi bi-easel",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "easel-fill",
			"title": "easel-fill",
			"className": "bi bi-easel-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "easel2",
			"title": "easel2",
			"className": "bi bi-easel2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "easel2-fill",
			"title": "easel2-fill",
			"className": "bi bi-easel2-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "easel3",
			"title": "easel3",
			"className": "bi bi-easel3",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "easel3-fill",
			"title": "easel3-fill",
			"className": "bi bi-easel3-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "egg",
			"title": "egg",
			"className": "bi bi-egg",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "egg-fill",
			"title": "egg-fill",
			"className": "bi bi-egg-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "egg-fried",
			"title": "egg-fried",
			"className": "bi bi-egg-fried",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "eject",
			"title": "eject",
			"className": "bi bi-eject",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "eject-fill",
			"title": "eject-fill",
			"className": "bi bi-eject-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "emoji-angry",
			"title": "emoji-angry",
			"className": "bi bi-emoji-angry",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-angry-fill",
			"title": "emoji-angry-fill",
			"className": "bi bi-emoji-angry-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-astonished",
			"title": "emoji-astonished",
			"className": "bi bi-emoji-astonished",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-astonished-fill",
			"title": "emoji-astonished-fill",
			"className": "bi bi-emoji-astonished-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-dizzy",
			"title": "emoji-dizzy",
			"className": "bi bi-emoji-dizzy",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-dizzy-fill",
			"title": "emoji-dizzy-fill",
			"className": "bi bi-emoji-dizzy-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-expressionless",
			"title": "emoji-expressionless",
			"className": "bi bi-emoji-expressionless",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-expressionless-fill",
			"title": "emoji-expressionless-fill",
			"className": "bi bi-emoji-expressionless-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-frown",
			"title": "emoji-frown",
			"className": "bi bi-emoji-frown",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-frown-fill",
			"title": "emoji-frown-fill",
			"className": "bi bi-emoji-frown-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-grimace",
			"title": "emoji-grimace",
			"className": "bi bi-emoji-grimace",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-grimace-fill",
			"title": "emoji-grimace-fill",
			"className": "bi bi-emoji-grimace-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-grin",
			"title": "emoji-grin",
			"className": "bi bi-emoji-grin",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-grin-fill",
			"title": "emoji-grin-fill",
			"className": "bi bi-emoji-grin-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-heart-eyes",
			"title": "emoji-heart-eyes",
			"className": "bi bi-emoji-heart-eyes",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-heart-eyes-fill",
			"title": "emoji-heart-eyes-fill",
			"className": "bi bi-emoji-heart-eyes-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-kiss",
			"title": "emoji-kiss",
			"className": "bi bi-emoji-kiss",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-kiss-fill",
			"title": "emoji-kiss-fill",
			"className": "bi bi-emoji-kiss-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-laughing",
			"title": "emoji-laughing",
			"className": "bi bi-emoji-laughing",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-laughing-fill",
			"title": "emoji-laughing-fill",
			"className": "bi bi-emoji-laughing-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-neutral",
			"title": "emoji-neutral",
			"className": "bi bi-emoji-neutral",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-neutral-fill",
			"title": "emoji-neutral-fill",
			"className": "bi bi-emoji-neutral-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-smile",
			"title": "emoji-smile",
			"className": "bi bi-emoji-smile",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-smile-fill",
			"title": "emoji-smile-fill",
			"className": "bi bi-emoji-smile-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-smile-upside-down",
			"title": "emoji-smile-upside-down",
			"className": "bi bi-emoji-smile-upside-down",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-smile-upside-down-fill",
			"title": "emoji-smile-upside-down-fill",
			"className": "bi bi-emoji-smile-upside-down-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-sunglasses",
			"title": "emoji-sunglasses",
			"className": "bi bi-emoji-sunglasses",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-sunglasses-fill",
			"title": "emoji-sunglasses-fill",
			"className": "bi bi-emoji-sunglasses-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-surprise",
			"title": "emoji-surprise",
			"className": "bi bi-emoji-surprise",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-surprise-fill",
			"title": "emoji-surprise-fill",
			"className": "bi bi-emoji-surprise-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-tear",
			"title": "emoji-tear",
			"className": "bi bi-emoji-tear",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-tear-fill",
			"title": "emoji-tear-fill",
			"className": "bi bi-emoji-tear-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-wink",
			"title": "emoji-wink",
			"className": "bi bi-emoji-wink",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "emoji-wink-fill",
			"title": "emoji-wink-fill",
			"className": "bi bi-emoji-wink-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "envelope",
			"title": "envelope",
			"className": "bi bi-envelope",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-arrow-down",
			"title": "envelope-arrow-down",
			"className": "bi bi-envelope-arrow-down",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-arrow-down-fill",
			"title": "envelope-arrow-down-fill",
			"className": "bi bi-envelope-arrow-down-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-arrow-up",
			"title": "envelope-arrow-up",
			"className": "bi bi-envelope-arrow-up",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-arrow-up-fill",
			"title": "envelope-arrow-up-fill",
			"className": "bi bi-envelope-arrow-up-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-at",
			"title": "envelope-at",
			"className": "bi bi-envelope-at",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-at-fill",
			"title": "envelope-at-fill",
			"className": "bi bi-envelope-at-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-check",
			"title": "envelope-check",
			"className": "bi bi-envelope-check",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-check-fill",
			"title": "envelope-check-fill",
			"className": "bi bi-envelope-check-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-dash",
			"title": "envelope-dash",
			"className": "bi bi-envelope-dash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-dash-fill",
			"title": "envelope-dash-fill",
			"className": "bi bi-envelope-dash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-exclamation",
			"title": "envelope-exclamation",
			"className": "bi bi-envelope-exclamation",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-exclamation-fill",
			"title": "envelope-exclamation-fill",
			"className": "bi bi-envelope-exclamation-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-fill",
			"title": "envelope-fill",
			"className": "bi bi-envelope-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-heart",
			"title": "envelope-heart",
			"className": "bi bi-envelope-heart",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-heart-fill",
			"title": "envelope-heart-fill",
			"className": "bi bi-envelope-heart-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-open",
			"title": "envelope-open",
			"className": "bi bi-envelope-open",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-open-fill",
			"title": "envelope-open-fill",
			"className": "bi bi-envelope-open-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-open-heart",
			"title": "envelope-open-heart",
			"className": "bi bi-envelope-open-heart",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-open-heart-fill",
			"title": "envelope-open-heart-fill",
			"className": "bi bi-envelope-open-heart-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-paper",
			"title": "envelope-paper",
			"className": "bi bi-envelope-paper",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-paper-fill",
			"title": "envelope-paper-fill",
			"className": "bi bi-envelope-paper-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-paper-heart",
			"title": "envelope-paper-heart",
			"className": "bi bi-envelope-paper-heart",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-paper-heart-fill",
			"title": "envelope-paper-heart-fill",
			"className": "bi bi-envelope-paper-heart-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-plus",
			"title": "envelope-plus",
			"className": "bi bi-envelope-plus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-plus-fill",
			"title": "envelope-plus-fill",
			"className": "bi bi-envelope-plus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-slash",
			"title": "envelope-slash",
			"className": "bi bi-envelope-slash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-slash-fill",
			"title": "envelope-slash-fill",
			"className": "bi bi-envelope-slash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-x",
			"title": "envelope-x",
			"className": "bi bi-envelope-x",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "envelope-x-fill",
			"title": "envelope-x-fill",
			"className": "bi bi-envelope-x-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "eraser",
			"title": "eraser",
			"className": "bi bi-eraser",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "eraser-fill",
			"title": "eraser-fill",
			"className": "bi bi-eraser-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "escape",
			"title": "escape",
			"className": "bi bi-escape",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "ethernet",
			"title": "ethernet",
			"className": "bi bi-ethernet",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "ev-front",
			"title": "ev-front",
			"className": "bi bi-ev-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "ev-front-fill",
			"title": "ev-front-fill",
			"className": "bi bi-ev-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "ev-station",
			"title": "ev-station",
			"className": "bi bi-ev-station",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "ev-station-fill",
			"title": "ev-station-fill",
			"className": "bi bi-ev-station-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "exclamation",
			"title": "exclamation",
			"className": "bi bi-exclamation",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-circle",
			"title": "exclamation-circle",
			"className": "bi bi-exclamation-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-circle-fill",
			"title": "exclamation-circle-fill",
			"className": "bi bi-exclamation-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-diamond",
			"title": "exclamation-diamond",
			"className": "bi bi-exclamation-diamond",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-diamond-fill",
			"title": "exclamation-diamond-fill",
			"className": "bi bi-exclamation-diamond-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-lg",
			"title": "exclamation-lg",
			"className": "bi bi-exclamation-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-octagon",
			"title": "exclamation-octagon",
			"className": "bi bi-exclamation-octagon",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-octagon-fill",
			"title": "exclamation-octagon-fill",
			"className": "bi bi-exclamation-octagon-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-square",
			"title": "exclamation-square",
			"className": "bi bi-exclamation-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-square-fill",
			"title": "exclamation-square-fill",
			"className": "bi bi-exclamation-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-triangle",
			"title": "exclamation-triangle",
			"className": "bi bi-exclamation-triangle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclamation-triangle-fill",
			"title": "exclamation-triangle-fill",
			"className": "bi bi-exclamation-triangle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "exclude",
			"title": "exclude",
			"className": "bi bi-exclude",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "explicit",
			"title": "explicit",
			"className": "bi bi-explicit",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "explicit-fill",
			"title": "explicit-fill",
			"className": "bi bi-explicit-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "exposure",
			"title": "exposure",
			"className": "bi bi-exposure",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "eye",
			"title": "eye",
			"className": "bi bi-eye",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "eye-fill",
			"title": "eye-fill",
			"className": "bi bi-eye-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "eye-slash",
			"title": "eye-slash",
			"className": "bi bi-eye-slash",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "eye-slash-fill",
			"title": "eye-slash-fill",
			"className": "bi bi-eye-slash-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "eyedropper",
			"title": "eyedropper",
			"className": "bi bi-eyedropper",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "eyeglasses",
			"title": "eyeglasses",
			"className": "bi bi-eyeglasses",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "facebook",
			"title": "facebook",
			"className": "bi bi-facebook",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "fan",
			"title": "fan",
			"className": "bi bi-fan",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "fast-forward",
			"title": "fast-forward",
			"className": "bi bi-fast-forward",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "fast-forward-btn",
			"title": "fast-forward-btn",
			"className": "bi bi-fast-forward-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "fast-forward-btn-fill",
			"title": "fast-forward-btn-fill",
			"className": "bi bi-fast-forward-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "fast-forward-circle",
			"title": "fast-forward-circle",
			"className": "bi bi-fast-forward-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "fast-forward-circle-fill",
			"title": "fast-forward-circle-fill",
			"className": "bi bi-fast-forward-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "fast-forward-fill",
			"title": "fast-forward-fill",
			"className": "bi bi-fast-forward-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "feather",
			"title": "feather",
			"className": "bi bi-feather",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "feather2",
			"title": "feather2",
			"className": "bi bi-feather2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "file",
			"title": "file",
			"className": "bi bi-file",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-arrow-down",
			"title": "file-arrow-down",
			"className": "bi bi-file-arrow-down",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-arrow-down-fill",
			"title": "file-arrow-down-fill",
			"className": "bi bi-file-arrow-down-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-arrow-up",
			"title": "file-arrow-up",
			"className": "bi bi-file-arrow-up",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-arrow-up-fill",
			"title": "file-arrow-up-fill",
			"className": "bi bi-file-arrow-up-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-bar-graph",
			"title": "file-bar-graph",
			"className": "bi bi-file-bar-graph",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-bar-graph-fill",
			"title": "file-bar-graph-fill",
			"className": "bi bi-file-bar-graph-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-binary",
			"title": "file-binary",
			"className": "bi bi-file-binary",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-binary-fill",
			"title": "file-binary-fill",
			"className": "bi bi-file-binary-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-break",
			"title": "file-break",
			"className": "bi bi-file-break",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-break-fill",
			"title": "file-break-fill",
			"className": "bi bi-file-break-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-check",
			"title": "file-check",
			"className": "bi bi-file-check",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-check-fill",
			"title": "file-check-fill",
			"className": "bi bi-file-check-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-code",
			"title": "file-code",
			"className": "bi bi-file-code",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-code-fill",
			"title": "file-code-fill",
			"className": "bi bi-file-code-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-diff",
			"title": "file-diff",
			"className": "bi bi-file-diff",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-diff-fill",
			"title": "file-diff-fill",
			"className": "bi bi-file-diff-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark",
			"title": "file-earmark",
			"className": "bi bi-file-earmark",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-arrow-down",
			"title": "file-earmark-arrow-down",
			"className": "bi bi-file-earmark-arrow-down",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-arrow-down-fill",
			"title": "file-earmark-arrow-down-fill",
			"className": "bi bi-file-earmark-arrow-down-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-arrow-up",
			"title": "file-earmark-arrow-up",
			"className": "bi bi-file-earmark-arrow-up",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-arrow-up-fill",
			"title": "file-earmark-arrow-up-fill",
			"className": "bi bi-file-earmark-arrow-up-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-bar-graph",
			"title": "file-earmark-bar-graph",
			"className": "bi bi-file-earmark-bar-graph",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-bar-graph-fill",
			"title": "file-earmark-bar-graph-fill",
			"className": "bi bi-file-earmark-bar-graph-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-binary",
			"title": "file-earmark-binary",
			"className": "bi bi-file-earmark-binary",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-binary-fill",
			"title": "file-earmark-binary-fill",
			"className": "bi bi-file-earmark-binary-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-break",
			"title": "file-earmark-break",
			"className": "bi bi-file-earmark-break",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-break-fill",
			"title": "file-earmark-break-fill",
			"className": "bi bi-file-earmark-break-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-check",
			"title": "file-earmark-check",
			"className": "bi bi-file-earmark-check",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-check-fill",
			"title": "file-earmark-check-fill",
			"className": "bi bi-file-earmark-check-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-code",
			"title": "file-earmark-code",
			"className": "bi bi-file-earmark-code",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-code-fill",
			"title": "file-earmark-code-fill",
			"className": "bi bi-file-earmark-code-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-diff",
			"title": "file-earmark-diff",
			"className": "bi bi-file-earmark-diff",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-diff-fill",
			"title": "file-earmark-diff-fill",
			"className": "bi bi-file-earmark-diff-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-easel",
			"title": "file-earmark-easel",
			"className": "bi bi-file-earmark-easel",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-easel-fill",
			"title": "file-earmark-easel-fill",
			"className": "bi bi-file-earmark-easel-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-excel",
			"title": "file-earmark-excel",
			"className": "bi bi-file-earmark-excel",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-excel-fill",
			"title": "file-earmark-excel-fill",
			"className": "bi bi-file-earmark-excel-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-fill",
			"title": "file-earmark-fill",
			"className": "bi bi-file-earmark-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-font",
			"title": "file-earmark-font",
			"className": "bi bi-file-earmark-font",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-font-fill",
			"title": "file-earmark-font-fill",
			"className": "bi bi-file-earmark-font-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-image",
			"title": "file-earmark-image",
			"className": "bi bi-file-earmark-image",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-image-fill",
			"title": "file-earmark-image-fill",
			"className": "bi bi-file-earmark-image-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-lock",
			"title": "file-earmark-lock",
			"className": "bi bi-file-earmark-lock",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-lock-fill",
			"title": "file-earmark-lock-fill",
			"className": "bi bi-file-earmark-lock-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-lock2",
			"title": "file-earmark-lock2",
			"className": "bi bi-file-earmark-lock2",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-lock2-fill",
			"title": "file-earmark-lock2-fill",
			"className": "bi bi-file-earmark-lock2-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-medical",
			"title": "file-earmark-medical",
			"className": "bi bi-file-earmark-medical",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-medical-fill",
			"title": "file-earmark-medical-fill",
			"className": "bi bi-file-earmark-medical-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-minus",
			"title": "file-earmark-minus",
			"className": "bi bi-file-earmark-minus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-minus-fill",
			"title": "file-earmark-minus-fill",
			"className": "bi bi-file-earmark-minus-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-music",
			"title": "file-earmark-music",
			"className": "bi bi-file-earmark-music",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-music-fill",
			"title": "file-earmark-music-fill",
			"className": "bi bi-file-earmark-music-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-pdf",
			"title": "file-earmark-pdf",
			"className": "bi bi-file-earmark-pdf",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-pdf-fill",
			"title": "file-earmark-pdf-fill",
			"className": "bi bi-file-earmark-pdf-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-person",
			"title": "file-earmark-person",
			"className": "bi bi-file-earmark-person",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-person-fill",
			"title": "file-earmark-person-fill",
			"className": "bi bi-file-earmark-person-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-play",
			"title": "file-earmark-play",
			"className": "bi bi-file-earmark-play",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-play-fill",
			"title": "file-earmark-play-fill",
			"className": "bi bi-file-earmark-play-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-plus",
			"title": "file-earmark-plus",
			"className": "bi bi-file-earmark-plus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-plus-fill",
			"title": "file-earmark-plus-fill",
			"className": "bi bi-file-earmark-plus-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-post",
			"title": "file-earmark-post",
			"className": "bi bi-file-earmark-post",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-post-fill",
			"title": "file-earmark-post-fill",
			"className": "bi bi-file-earmark-post-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-ppt",
			"title": "file-earmark-ppt",
			"className": "bi bi-file-earmark-ppt",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-ppt-fill",
			"title": "file-earmark-ppt-fill",
			"className": "bi bi-file-earmark-ppt-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-richtext",
			"title": "file-earmark-richtext",
			"className": "bi bi-file-earmark-richtext",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-richtext-fill",
			"title": "file-earmark-richtext-fill",
			"className": "bi bi-file-earmark-richtext-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-ruled",
			"title": "file-earmark-ruled",
			"className": "bi bi-file-earmark-ruled",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-ruled-fill",
			"title": "file-earmark-ruled-fill",
			"className": "bi bi-file-earmark-ruled-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-slides",
			"title": "file-earmark-slides",
			"className": "bi bi-file-earmark-slides",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-slides-fill",
			"title": "file-earmark-slides-fill",
			"className": "bi bi-file-earmark-slides-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-spreadsheet",
			"title": "file-earmark-spreadsheet",
			"className": "bi bi-file-earmark-spreadsheet",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-spreadsheet-fill",
			"title": "file-earmark-spreadsheet-fill",
			"className": "bi bi-file-earmark-spreadsheet-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-text",
			"title": "file-earmark-text",
			"className": "bi bi-file-earmark-text",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-text-fill",
			"title": "file-earmark-text-fill",
			"className": "bi bi-file-earmark-text-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-word",
			"title": "file-earmark-word",
			"className": "bi bi-file-earmark-word",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-word-fill",
			"title": "file-earmark-word-fill",
			"className": "bi bi-file-earmark-word-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-x",
			"title": "file-earmark-x",
			"className": "bi bi-file-earmark-x",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-x-fill",
			"title": "file-earmark-x-fill",
			"className": "bi bi-file-earmark-x-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-zip",
			"title": "file-earmark-zip",
			"className": "bi bi-file-earmark-zip",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-earmark-zip-fill",
			"title": "file-earmark-zip-fill",
			"className": "bi bi-file-earmark-zip-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-easel",
			"title": "file-easel",
			"className": "bi bi-file-easel",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-easel-fill",
			"title": "file-easel-fill",
			"className": "bi bi-file-easel-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-excel",
			"title": "file-excel",
			"className": "bi bi-file-excel",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-excel-fill",
			"title": "file-excel-fill",
			"className": "bi bi-file-excel-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-fill",
			"title": "file-fill",
			"className": "bi bi-file-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-font",
			"title": "file-font",
			"className": "bi bi-file-font",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-font-fill",
			"title": "file-font-fill",
			"className": "bi bi-file-font-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-image",
			"title": "file-image",
			"className": "bi bi-file-image",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-image-fill",
			"title": "file-image-fill",
			"className": "bi bi-file-image-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-lock",
			"title": "file-lock",
			"className": "bi bi-file-lock",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-lock-fill",
			"title": "file-lock-fill",
			"className": "bi bi-file-lock-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-lock2",
			"title": "file-lock2",
			"className": "bi bi-file-lock2",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-lock2-fill",
			"title": "file-lock2-fill",
			"className": "bi bi-file-lock2-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-medical",
			"title": "file-medical",
			"className": "bi bi-file-medical",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-medical-fill",
			"title": "file-medical-fill",
			"className": "bi bi-file-medical-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-minus",
			"title": "file-minus",
			"className": "bi bi-file-minus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-minus-fill",
			"title": "file-minus-fill",
			"className": "bi bi-file-minus-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-music",
			"title": "file-music",
			"className": "bi bi-file-music",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-music-fill",
			"title": "file-music-fill",
			"className": "bi bi-file-music-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-pdf",
			"title": "file-pdf",
			"className": "bi bi-file-pdf",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-pdf-fill",
			"title": "file-pdf-fill",
			"className": "bi bi-file-pdf-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-person",
			"title": "file-person",
			"className": "bi bi-file-person",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-person-fill",
			"title": "file-person-fill",
			"className": "bi bi-file-person-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-play",
			"title": "file-play",
			"className": "bi bi-file-play",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-play-fill",
			"title": "file-play-fill",
			"className": "bi bi-file-play-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-plus",
			"title": "file-plus",
			"className": "bi bi-file-plus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-plus-fill",
			"title": "file-plus-fill",
			"className": "bi bi-file-plus-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-post",
			"title": "file-post",
			"className": "bi bi-file-post",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-post-fill",
			"title": "file-post-fill",
			"className": "bi bi-file-post-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-ppt",
			"title": "file-ppt",
			"className": "bi bi-file-ppt",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-ppt-fill",
			"title": "file-ppt-fill",
			"className": "bi bi-file-ppt-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-richtext",
			"title": "file-richtext",
			"className": "bi bi-file-richtext",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-richtext-fill",
			"title": "file-richtext-fill",
			"className": "bi bi-file-richtext-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-ruled",
			"title": "file-ruled",
			"className": "bi bi-file-ruled",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-ruled-fill",
			"title": "file-ruled-fill",
			"className": "bi bi-file-ruled-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-slides",
			"title": "file-slides",
			"className": "bi bi-file-slides",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-slides-fill",
			"title": "file-slides-fill",
			"className": "bi bi-file-slides-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-spreadsheet",
			"title": "file-spreadsheet",
			"className": "bi bi-file-spreadsheet",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-spreadsheet-fill",
			"title": "file-spreadsheet-fill",
			"className": "bi bi-file-spreadsheet-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-text",
			"title": "file-text",
			"className": "bi bi-file-text",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-text-fill",
			"title": "file-text-fill",
			"className": "bi bi-file-text-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-word",
			"title": "file-word",
			"className": "bi bi-file-word",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-word-fill",
			"title": "file-word-fill",
			"className": "bi bi-file-word-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-x",
			"title": "file-x",
			"className": "bi bi-file-x",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-x-fill",
			"title": "file-x-fill",
			"className": "bi bi-file-x-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-zip",
			"title": "file-zip",
			"className": "bi bi-file-zip",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "file-zip-fill",
			"title": "file-zip-fill",
			"className": "bi bi-file-zip-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "files",
			"title": "files",
			"className": "bi bi-files",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "files-alt",
			"title": "files-alt",
			"className": "bi bi-files-alt",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-aac",
			"title": "filetype-aac",
			"className": "bi bi-filetype-aac",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-ai",
			"title": "filetype-ai",
			"className": "bi bi-filetype-ai",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-bmp",
			"title": "filetype-bmp",
			"className": "bi bi-filetype-bmp",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-cs",
			"title": "filetype-cs",
			"className": "bi bi-filetype-cs",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-css",
			"title": "filetype-css",
			"className": "bi bi-filetype-css",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-csv",
			"title": "filetype-csv",
			"className": "bi bi-filetype-csv",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-doc",
			"title": "filetype-doc",
			"className": "bi bi-filetype-doc",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-docx",
			"title": "filetype-docx",
			"className": "bi bi-filetype-docx",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-exe",
			"title": "filetype-exe",
			"className": "bi bi-filetype-exe",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-gif",
			"title": "filetype-gif",
			"className": "bi bi-filetype-gif",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-heic",
			"title": "filetype-heic",
			"className": "bi bi-filetype-heic",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-html",
			"title": "filetype-html",
			"className": "bi bi-filetype-html",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-java",
			"title": "filetype-java",
			"className": "bi bi-filetype-java",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-jpg",
			"title": "filetype-jpg",
			"className": "bi bi-filetype-jpg",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-js",
			"title": "filetype-js",
			"className": "bi bi-filetype-js",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-json",
			"title": "filetype-json",
			"className": "bi bi-filetype-json",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-jsx",
			"title": "filetype-jsx",
			"className": "bi bi-filetype-jsx",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-key",
			"title": "filetype-key",
			"className": "bi bi-filetype-key",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-m4p",
			"title": "filetype-m4p",
			"className": "bi bi-filetype-m4p",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-md",
			"title": "filetype-md",
			"className": "bi bi-filetype-md",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-mdx",
			"title": "filetype-mdx",
			"className": "bi bi-filetype-mdx",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-mov",
			"title": "filetype-mov",
			"className": "bi bi-filetype-mov",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-mp3",
			"title": "filetype-mp3",
			"className": "bi bi-filetype-mp3",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-mp4",
			"title": "filetype-mp4",
			"className": "bi bi-filetype-mp4",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-otf",
			"title": "filetype-otf",
			"className": "bi bi-filetype-otf",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-pdf",
			"title": "filetype-pdf",
			"className": "bi bi-filetype-pdf",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-php",
			"title": "filetype-php",
			"className": "bi bi-filetype-php",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-png",
			"title": "filetype-png",
			"className": "bi bi-filetype-png",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-ppt",
			"title": "filetype-ppt",
			"className": "bi bi-filetype-ppt",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-pptx",
			"title": "filetype-pptx",
			"className": "bi bi-filetype-pptx",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-psd",
			"title": "filetype-psd",
			"className": "bi bi-filetype-psd",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-py",
			"title": "filetype-py",
			"className": "bi bi-filetype-py",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-raw",
			"title": "filetype-raw",
			"className": "bi bi-filetype-raw",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-rb",
			"title": "filetype-rb",
			"className": "bi bi-filetype-rb",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-sass",
			"title": "filetype-sass",
			"className": "bi bi-filetype-sass",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-scss",
			"title": "filetype-scss",
			"className": "bi bi-filetype-scss",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-sh",
			"title": "filetype-sh",
			"className": "bi bi-filetype-sh",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-sql",
			"title": "filetype-sql",
			"className": "bi bi-filetype-sql",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-svg",
			"title": "filetype-svg",
			"className": "bi bi-filetype-svg",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-tiff",
			"title": "filetype-tiff",
			"className": "bi bi-filetype-tiff",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-tsx",
			"title": "filetype-tsx",
			"className": "bi bi-filetype-tsx",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-ttf",
			"title": "filetype-ttf",
			"className": "bi bi-filetype-ttf",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-txt",
			"title": "filetype-txt",
			"className": "bi bi-filetype-txt",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-wav",
			"title": "filetype-wav",
			"className": "bi bi-filetype-wav",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-woff",
			"title": "filetype-woff",
			"className": "bi bi-filetype-woff",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-xls",
			"title": "filetype-xls",
			"className": "bi bi-filetype-xls",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-xlsx",
			"title": "filetype-xlsx",
			"className": "bi bi-filetype-xlsx",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-xml",
			"title": "filetype-xml",
			"className": "bi bi-filetype-xml",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "filetype-yml",
			"title": "filetype-yml",
			"className": "bi bi-filetype-yml",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "film",
			"title": "film",
			"className": "bi bi-film",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "filter",
			"title": "filter",
			"className": "bi bi-filter",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "filter-circle",
			"title": "filter-circle",
			"className": "bi bi-filter-circle",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "filter-circle-fill",
			"title": "filter-circle-fill",
			"className": "bi bi-filter-circle-fill",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "filter-left",
			"title": "filter-left",
			"className": "bi bi-filter-left",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "filter-right",
			"title": "filter-right",
			"className": "bi bi-filter-right",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "filter-square",
			"title": "filter-square",
			"className": "bi bi-filter-square",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "filter-square-fill",
			"title": "filter-square-fill",
			"className": "bi bi-filter-square-fill",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "fingerprint",
			"title": "fingerprint",
			"className": "bi bi-fingerprint",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "fire",
			"title": "fire",
			"className": "bi bi-fire",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "flag",
			"title": "flag",
			"className": "bi bi-flag",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "flag-fill",
			"title": "flag-fill",
			"className": "bi bi-flag-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "floppy",
			"title": "floppy",
			"className": "bi bi-floppy",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "floppy-fill",
			"title": "floppy-fill",
			"className": "bi bi-floppy-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "floppy2",
			"title": "floppy2",
			"className": "bi bi-floppy2",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "floppy2-fill",
			"title": "floppy2-fill",
			"className": "bi bi-floppy2-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "flower1",
			"title": "flower1",
			"className": "bi bi-flower1",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "flower2",
			"title": "flower2",
			"className": "bi bi-flower2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "flower3",
			"title": "flower3",
			"className": "bi bi-flower3",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "folder",
			"title": "folder",
			"className": "bi bi-folder",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-check",
			"title": "folder-check",
			"className": "bi bi-folder-check",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-fill",
			"title": "folder-fill",
			"className": "bi bi-folder-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-minus",
			"title": "folder-minus",
			"className": "bi bi-folder-minus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-plus",
			"title": "folder-plus",
			"className": "bi bi-folder-plus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-symlink",
			"title": "folder-symlink",
			"className": "bi bi-folder-symlink",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-symlink-fill",
			"title": "folder-symlink-fill",
			"className": "bi bi-folder-symlink-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder-x",
			"title": "folder-x",
			"className": "bi bi-folder-x",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder2",
			"title": "folder2",
			"className": "bi bi-folder2",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "folder2-open",
			"title": "folder2-open",
			"className": "bi bi-folder2-open",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "fonts",
			"title": "fonts",
			"className": "bi bi-fonts",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "forward",
			"title": "forward",
			"className": "bi bi-forward",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "forward-fill",
			"title": "forward-fill",
			"className": "bi bi-forward-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "front",
			"title": "front",
			"className": "bi bi-front",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "fuel-pump",
			"title": "fuel-pump",
			"className": "bi bi-fuel-pump",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fuel-pump-diesel",
			"title": "fuel-pump-diesel",
			"className": "bi bi-fuel-pump-diesel",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fuel-pump-diesel-fill",
			"title": "fuel-pump-diesel-fill",
			"className": "bi bi-fuel-pump-diesel-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fuel-pump-fill",
			"title": "fuel-pump-fill",
			"className": "bi bi-fuel-pump-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fullscreen",
			"title": "fullscreen",
			"className": "bi bi-fullscreen",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "fullscreen-exit",
			"title": "fullscreen-exit",
			"className": "bi bi-fullscreen-exit",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "funnel",
			"title": "funnel",
			"className": "bi bi-funnel",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "funnel-fill",
			"title": "funnel-fill",
			"className": "bi bi-funnel-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "gear",
			"title": "gear",
			"className": "bi bi-gear",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "gear-fill",
			"title": "gear-fill",
			"className": "bi bi-gear-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "gear-wide",
			"title": "gear-wide",
			"className": "bi bi-gear-wide",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "gear-wide-connected",
			"title": "gear-wide-connected",
			"className": "bi bi-gear-wide-connected",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "gem",
			"title": "gem",
			"className": "bi bi-gem",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "gender-ambiguous",
			"title": "gender-ambiguous",
			"className": "bi bi-gender-ambiguous",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "gender-female",
			"title": "gender-female",
			"className": "bi bi-gender-female",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "gender-male",
			"title": "gender-male",
			"className": "bi bi-gender-male",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "gender-neuter",
			"title": "gender-neuter",
			"className": "bi bi-gender-neuter",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "gender-trans",
			"title": "gender-trans",
			"className": "bi bi-gender-trans",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "geo",
			"title": "geo",
			"className": "bi bi-geo",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "geo-alt",
			"title": "geo-alt",
			"className": "bi bi-geo-alt",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "geo-alt-fill",
			"title": "geo-alt-fill",
			"className": "bi bi-geo-alt-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "geo-fill",
			"title": "geo-fill",
			"className": "bi bi-geo-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "gift",
			"title": "gift",
			"className": "bi bi-gift",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "gift-fill",
			"title": "gift-fill",
			"className": "bi bi-gift-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "git",
			"title": "git",
			"className": "bi bi-git",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "github",
			"title": "github",
			"className": "bi bi-github",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "gitlab",
			"title": "gitlab",
			"className": "bi bi-gitlab",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "globe",
			"title": "globe",
			"className": "bi bi-globe",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "globe-americas",
			"title": "globe-americas",
			"className": "bi bi-globe-americas",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "globe-asia-australia",
			"title": "globe-asia-australia",
			"className": "bi bi-globe-asia-australia",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "globe-central-south-asia",
			"title": "globe-central-south-asia",
			"className": "bi bi-globe-central-south-asia",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "globe-europe-africa",
			"title": "globe-europe-africa",
			"className": "bi bi-globe-europe-africa",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "globe2",
			"title": "globe2",
			"className": "bi bi-globe2",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "google",
			"title": "google",
			"className": "bi bi-google",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "google-play",
			"title": "google-play",
			"className": "bi bi-google-play",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "gpu-card",
			"title": "gpu-card",
			"className": "bi bi-gpu-card",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "graph-down",
			"title": "graph-down",
			"className": "bi bi-graph-down",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "graph-down-arrow",
			"title": "graph-down-arrow",
			"className": "bi bi-graph-down-arrow",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "graph-up",
			"title": "graph-up",
			"className": "bi bi-graph-up",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "graph-up-arrow",
			"title": "graph-up-arrow",
			"className": "bi bi-graph-up-arrow",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "grid",
			"title": "grid",
			"className": "bi bi-grid",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-1x2",
			"title": "grid-1x2",
			"className": "bi bi-grid-1x2",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-1x2-fill",
			"title": "grid-1x2-fill",
			"className": "bi bi-grid-1x2-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-3x2",
			"title": "grid-3x2",
			"className": "bi bi-grid-3x2",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-3x2-gap",
			"title": "grid-3x2-gap",
			"className": "bi bi-grid-3x2-gap",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-3x2-gap-fill",
			"title": "grid-3x2-gap-fill",
			"className": "bi bi-grid-3x2-gap-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-3x3",
			"title": "grid-3x3",
			"className": "bi bi-grid-3x3",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-3x3-gap",
			"title": "grid-3x3-gap",
			"className": "bi bi-grid-3x3-gap",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-3x3-gap-fill",
			"title": "grid-3x3-gap-fill",
			"className": "bi bi-grid-3x3-gap-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grid-fill",
			"title": "grid-fill",
			"className": "bi bi-grid-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "grip-horizontal",
			"title": "grip-horizontal",
			"className": "bi bi-grip-horizontal",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "grip-vertical",
			"title": "grip-vertical",
			"className": "bi bi-grip-vertical",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "h-circle",
			"title": "h-circle",
			"className": "bi bi-h-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "h-circle-fill",
			"title": "h-circle-fill",
			"className": "bi bi-h-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "h-square",
			"title": "h-square",
			"className": "bi bi-h-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "h-square-fill",
			"title": "h-square-fill",
			"className": "bi bi-h-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "hammer",
			"title": "hammer",
			"className": "bi bi-hammer",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "hand-index",
			"title": "hand-index",
			"className": "bi bi-hand-index",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-index-fill",
			"title": "hand-index-fill",
			"className": "bi bi-hand-index-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-index-thumb",
			"title": "hand-index-thumb",
			"className": "bi bi-hand-index-thumb",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-index-thumb-fill",
			"title": "hand-index-thumb-fill",
			"className": "bi bi-hand-index-thumb-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-thumbs-down",
			"title": "hand-thumbs-down",
			"className": "bi bi-hand-thumbs-down",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-thumbs-down-fill",
			"title": "hand-thumbs-down-fill",
			"className": "bi bi-hand-thumbs-down-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-thumbs-up",
			"title": "hand-thumbs-up",
			"className": "bi bi-hand-thumbs-up",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "hand-thumbs-up-fill",
			"title": "hand-thumbs-up-fill",
			"className": "bi bi-hand-thumbs-up-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "handbag",
			"title": "handbag",
			"className": "bi bi-handbag",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "handbag-fill",
			"title": "handbag-fill",
			"className": "bi bi-handbag-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "hash",
			"title": "hash",
			"className": "bi bi-hash",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "hdd",
			"title": "hdd",
			"className": "bi bi-hdd",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-fill",
			"title": "hdd-fill",
			"className": "bi bi-hdd-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-network",
			"title": "hdd-network",
			"className": "bi bi-hdd-network",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-network-fill",
			"title": "hdd-network-fill",
			"className": "bi bi-hdd-network-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-rack",
			"title": "hdd-rack",
			"className": "bi bi-hdd-rack",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-rack-fill",
			"title": "hdd-rack-fill",
			"className": "bi bi-hdd-rack-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-stack",
			"title": "hdd-stack",
			"className": "bi bi-hdd-stack",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdd-stack-fill",
			"title": "hdd-stack-fill",
			"className": "bi bi-hdd-stack-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdmi",
			"title": "hdmi",
			"className": "bi bi-hdmi",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "hdmi-fill",
			"title": "hdmi-fill",
			"className": "bi bi-hdmi-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "headphones",
			"title": "headphones",
			"className": "bi bi-headphones",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "headset",
			"title": "headset",
			"className": "bi bi-headset",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "headset-vr",
			"title": "headset-vr",
			"className": "bi bi-headset-vr",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "heart",
			"title": "heart",
			"className": "bi bi-heart",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "heart-arrow",
			"title": "heart-arrow",
			"className": "bi bi-heart-arrow",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "heart-fill",
			"title": "heart-fill",
			"className": "bi bi-heart-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "heart-half",
			"title": "heart-half",
			"className": "bi bi-heart-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "heart-pulse",
			"title": "heart-pulse",
			"className": "bi bi-heart-pulse",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "heart-pulse-fill",
			"title": "heart-pulse-fill",
			"className": "bi bi-heart-pulse-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "heartbreak",
			"title": "heartbreak",
			"className": "bi bi-heartbreak",
			"type": "bi",
			"categories": [
				"emoji love"
			]
		},
		{
			"name": "heartbreak-fill",
			"title": "heartbreak-fill",
			"className": "bi bi-heartbreak-fill",
			"type": "bi",
			"categories": [
				"emoji love"
			]
		},
		{
			"name": "hearts",
			"title": "hearts",
			"className": "bi bi-hearts",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "heptagon",
			"title": "heptagon",
			"className": "bi bi-heptagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "heptagon-fill",
			"title": "heptagon-fill",
			"className": "bi bi-heptagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "heptagon-half",
			"title": "heptagon-half",
			"className": "bi bi-heptagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "hexagon",
			"title": "hexagon",
			"className": "bi bi-hexagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "hexagon-fill",
			"title": "hexagon-fill",
			"className": "bi bi-hexagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "hexagon-half",
			"title": "hexagon-half",
			"className": "bi bi-hexagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "highlighter",
			"title": "highlighter",
			"className": "bi bi-highlighter",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "highlights",
			"title": "highlights",
			"className": "bi bi-highlights",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "hospital",
			"title": "hospital",
			"className": "bi bi-hospital",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "hospital-fill",
			"title": "hospital-fill",
			"className": "bi bi-hospital-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "hourglass",
			"title": "hourglass",
			"className": "bi bi-hourglass",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "hourglass-bottom",
			"title": "hourglass-bottom",
			"className": "bi bi-hourglass-bottom",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "hourglass-split",
			"title": "hourglass-split",
			"className": "bi bi-hourglass-split",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "hourglass-top",
			"title": "hourglass-top",
			"className": "bi bi-hourglass-top",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house",
			"title": "house",
			"className": "bi bi-house",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-add",
			"title": "house-add",
			"className": "bi bi-house-add",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-add-fill",
			"title": "house-add-fill",
			"className": "bi bi-house-add-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-check",
			"title": "house-check",
			"className": "bi bi-house-check",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-check-fill",
			"title": "house-check-fill",
			"className": "bi bi-house-check-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-dash",
			"title": "house-dash",
			"className": "bi bi-house-dash",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-dash-fill",
			"title": "house-dash-fill",
			"className": "bi bi-house-dash-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-door",
			"title": "house-door",
			"className": "bi bi-house-door",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-door-fill",
			"title": "house-door-fill",
			"className": "bi bi-house-door-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-down",
			"title": "house-down",
			"className": "bi bi-house-down",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-down-fill",
			"title": "house-down-fill",
			"className": "bi bi-house-down-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-exclamation",
			"title": "house-exclamation",
			"className": "bi bi-house-exclamation",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-exclamation-fill",
			"title": "house-exclamation-fill",
			"className": "bi bi-house-exclamation-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-fill",
			"title": "house-fill",
			"className": "bi bi-house-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-gear",
			"title": "house-gear",
			"className": "bi bi-house-gear",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-gear-fill",
			"title": "house-gear-fill",
			"className": "bi bi-house-gear-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-heart",
			"title": "house-heart",
			"className": "bi bi-house-heart",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-heart-fill",
			"title": "house-heart-fill",
			"className": "bi bi-house-heart-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-lock",
			"title": "house-lock",
			"className": "bi bi-house-lock",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-lock-fill",
			"title": "house-lock-fill",
			"className": "bi bi-house-lock-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-slash",
			"title": "house-slash",
			"className": "bi bi-house-slash",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-slash-fill",
			"title": "house-slash-fill",
			"className": "bi bi-house-slash-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-up",
			"title": "house-up",
			"className": "bi bi-house-up",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-up-fill",
			"title": "house-up-fill",
			"className": "bi bi-house-up-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-x",
			"title": "house-x",
			"className": "bi bi-house-x",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "house-x-fill",
			"title": "house-x-fill",
			"className": "bi bi-house-x-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "houses",
			"title": "houses",
			"className": "bi bi-houses",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "houses-fill",
			"title": "houses-fill",
			"className": "bi bi-houses-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "hr",
			"title": "hr",
			"className": "bi bi-hr",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "hurricane",
			"title": "hurricane",
			"className": "bi bi-hurricane",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "hypnotize",
			"title": "hypnotize",
			"className": "bi bi-hypnotize",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "image",
			"title": "image",
			"className": "bi bi-image",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "image-alt",
			"title": "image-alt",
			"className": "bi bi-image-alt",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "image-fill",
			"title": "image-fill",
			"className": "bi bi-image-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "images",
			"title": "images",
			"className": "bi bi-images",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "inbox",
			"title": "inbox",
			"className": "bi bi-inbox",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "inbox-fill",
			"title": "inbox-fill",
			"className": "bi bi-inbox-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "inboxes-fill",
			"title": "inboxes-fill",
			"className": "bi bi-inboxes-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "inboxes",
			"title": "inboxes",
			"className": "bi bi-inboxes",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "incognito",
			"title": "incognito",
			"className": "bi bi-incognito",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "indent",
			"title": "indent",
			"className": "bi bi-indent",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "infinity",
			"title": "infinity",
			"className": "bi bi-infinity",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "info",
			"title": "info",
			"className": "bi bi-info",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "info-circle",
			"title": "info-circle",
			"className": "bi bi-info-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "info-circle-fill",
			"title": "info-circle-fill",
			"className": "bi bi-info-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "info-lg",
			"title": "info-lg",
			"className": "bi bi-info-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "info-square",
			"title": "info-square",
			"className": "bi bi-info-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "info-square-fill",
			"title": "info-square-fill",
			"className": "bi bi-info-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "input-cursor",
			"title": "input-cursor",
			"className": "bi bi-input-cursor",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "input-cursor-text",
			"title": "input-cursor-text",
			"className": "bi bi-input-cursor-text",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "instagram",
			"title": "instagram",
			"className": "bi bi-instagram",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "intersect",
			"title": "intersect",
			"className": "bi bi-intersect",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "journal",
			"title": "journal",
			"className": "bi bi-journal",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-album",
			"title": "journal-album",
			"className": "bi bi-journal-album",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-arrow-down",
			"title": "journal-arrow-down",
			"className": "bi bi-journal-arrow-down",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-arrow-up",
			"title": "journal-arrow-up",
			"className": "bi bi-journal-arrow-up",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-bookmark",
			"title": "journal-bookmark",
			"className": "bi bi-journal-bookmark",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-bookmark-fill",
			"title": "journal-bookmark-fill",
			"className": "bi bi-journal-bookmark-fill",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-check",
			"title": "journal-check",
			"className": "bi bi-journal-check",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-code",
			"title": "journal-code",
			"className": "bi bi-journal-code",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-medical",
			"title": "journal-medical",
			"className": "bi bi-journal-medical",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-minus",
			"title": "journal-minus",
			"className": "bi bi-journal-minus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-plus",
			"title": "journal-plus",
			"className": "bi bi-journal-plus",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-richtext",
			"title": "journal-richtext",
			"className": "bi bi-journal-richtext",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-text",
			"title": "journal-text",
			"className": "bi bi-journal-text",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journal-x",
			"title": "journal-x",
			"className": "bi bi-journal-x",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "journals",
			"title": "journals",
			"className": "bi bi-journals",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "joystick",
			"title": "joystick",
			"className": "bi bi-joystick",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "justify",
			"title": "justify",
			"className": "bi bi-justify",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "justify-left",
			"title": "justify-left",
			"className": "bi bi-justify-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "justify-right",
			"title": "justify-right",
			"className": "bi bi-justify-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "kanban",
			"title": "kanban",
			"className": "bi bi-kanban",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "kanban-fill",
			"title": "kanban-fill",
			"className": "bi bi-kanban-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "key",
			"title": "key",
			"className": "bi bi-key",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "key-fill",
			"title": "key-fill",
			"className": "bi bi-key-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "keyboard",
			"title": "keyboard",
			"className": "bi bi-keyboard",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "keyboard-fill",
			"title": "keyboard-fill",
			"className": "bi bi-keyboard-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "ladder",
			"title": "ladder",
			"className": "bi bi-ladder",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lamp",
			"title": "lamp",
			"className": "bi bi-lamp",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lamp-fill",
			"title": "lamp-fill",
			"className": "bi bi-lamp-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "laptop",
			"title": "laptop",
			"className": "bi bi-laptop",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "laptop-fill",
			"title": "laptop-fill",
			"className": "bi bi-laptop-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "layer-backward",
			"title": "layer-backward",
			"className": "bi bi-layer-backward",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "layer-forward",
			"title": "layer-forward",
			"className": "bi bi-layer-forward",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "layers",
			"title": "layers",
			"className": "bi bi-layers",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "layers-fill",
			"title": "layers-fill",
			"className": "bi bi-layers-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "layers-half",
			"title": "layers-half",
			"className": "bi bi-layers-half",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "layout-sidebar",
			"title": "layout-sidebar",
			"className": "bi bi-layout-sidebar",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-sidebar-inset-reverse",
			"title": "layout-sidebar-inset-reverse",
			"className": "bi bi-layout-sidebar-inset-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-sidebar-inset",
			"title": "layout-sidebar-inset",
			"className": "bi bi-layout-sidebar-inset",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-sidebar-reverse",
			"title": "layout-sidebar-reverse",
			"className": "bi bi-layout-sidebar-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-split",
			"title": "layout-split",
			"className": "bi bi-layout-split",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-text-sidebar",
			"title": "layout-text-sidebar",
			"className": "bi bi-layout-text-sidebar",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-text-sidebar-reverse",
			"title": "layout-text-sidebar-reverse",
			"className": "bi bi-layout-text-sidebar-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-text-window",
			"title": "layout-text-window",
			"className": "bi bi-layout-text-window",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-text-window-reverse",
			"title": "layout-text-window-reverse",
			"className": "bi bi-layout-text-window-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-three-columns",
			"title": "layout-three-columns",
			"className": "bi bi-layout-three-columns",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "layout-wtf",
			"title": "layout-wtf",
			"className": "bi bi-layout-wtf",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "life-preserver",
			"title": "life-preserver",
			"className": "bi bi-life-preserver",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lightbulb",
			"title": "lightbulb",
			"className": "bi bi-lightbulb",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lightbulb-fill",
			"title": "lightbulb-fill",
			"className": "bi bi-lightbulb-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lightbulb-off",
			"title": "lightbulb-off",
			"className": "bi bi-lightbulb-off",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lightbulb-off-fill",
			"title": "lightbulb-off-fill",
			"className": "bi bi-lightbulb-off-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "lightning",
			"title": "lightning",
			"className": "bi bi-lightning",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "lightning-charge",
			"title": "lightning-charge",
			"className": "bi bi-lightning-charge",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "lightning-charge-fill",
			"title": "lightning-charge-fill",
			"className": "bi bi-lightning-charge-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "lightning-fill",
			"title": "lightning-fill",
			"className": "bi bi-lightning-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "line",
			"title": "line",
			"className": "bi bi-line",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "link",
			"title": "link",
			"className": "bi bi-link",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "link-45deg",
			"title": "link-45deg",
			"className": "bi bi-link-45deg",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "linkedin",
			"title": "linkedin",
			"className": "bi bi-linkedin",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "list",
			"title": "list",
			"className": "bi bi-list",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-check",
			"title": "list-check",
			"className": "bi bi-list-check",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-columns",
			"title": "list-columns",
			"className": "bi bi-list-columns",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-columns-reverse",
			"title": "list-columns-reverse",
			"className": "bi bi-list-columns-reverse",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-nested",
			"title": "list-nested",
			"className": "bi bi-list-nested",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-ol",
			"title": "list-ol",
			"className": "bi bi-list-ol",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-stars",
			"title": "list-stars",
			"className": "bi bi-list-stars",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-task",
			"title": "list-task",
			"className": "bi bi-list-task",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "list-ul",
			"title": "list-ul",
			"className": "bi bi-list-ul",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "lock",
			"title": "lock",
			"className": "bi bi-lock",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "lock-fill",
			"title": "lock-fill",
			"className": "bi bi-lock-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "luggage",
			"title": "luggage",
			"className": "bi bi-luggage",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "luggage-fill",
			"title": "luggage-fill",
			"className": "bi bi-luggage-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "lungs",
			"title": "lungs",
			"className": "bi bi-lungs",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "lungs-fill",
			"title": "lungs-fill",
			"className": "bi bi-lungs-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "magic",
			"title": "magic",
			"className": "bi bi-magic",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "magnet",
			"title": "magnet",
			"className": "bi bi-magnet",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "magnet-fill",
			"title": "magnet-fill",
			"className": "bi bi-magnet-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "mailbox",
			"title": "mailbox",
			"className": "bi bi-mailbox",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "mailbox-flag",
			"title": "mailbox-flag",
			"className": "bi bi-mailbox-flag",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "mailbox2",
			"title": "mailbox2",
			"className": "bi bi-mailbox2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "mailbox2-flag",
			"title": "mailbox2-flag",
			"className": "bi bi-mailbox2-flag",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "map",
			"title": "map",
			"className": "bi bi-map",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "map-fill",
			"title": "map-fill",
			"className": "bi bi-map-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "markdown",
			"title": "markdown",
			"className": "bi bi-markdown",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "markdown-fill",
			"title": "markdown-fill",
			"className": "bi bi-markdown-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "marker-tip",
			"title": "marker-tip",
			"className": "bi bi-marker-tip",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "mask",
			"title": "mask",
			"className": "bi bi-mask",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "mastodon",
			"title": "mastodon",
			"className": "bi bi-mastodon",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "medium",
			"title": "medium",
			"className": "bi bi-medium",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "megaphone",
			"title": "megaphone",
			"className": "bi bi-megaphone",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "megaphone-fill",
			"title": "megaphone-fill",
			"className": "bi bi-megaphone-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "memory",
			"title": "memory",
			"className": "bi bi-memory",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "menu-app",
			"title": "menu-app",
			"className": "bi bi-menu-app",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-app-fill",
			"title": "menu-app-fill",
			"className": "bi bi-menu-app-fill",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-button",
			"title": "menu-button",
			"className": "bi bi-menu-button",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-button-fill",
			"title": "menu-button-fill",
			"className": "bi bi-menu-button-fill",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-button-wide",
			"title": "menu-button-wide",
			"className": "bi bi-menu-button-wide",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-button-wide-fill",
			"title": "menu-button-wide-fill",
			"className": "bi bi-menu-button-wide-fill",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-down",
			"title": "menu-down",
			"className": "bi bi-menu-down",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "menu-up",
			"title": "menu-up",
			"className": "bi bi-menu-up",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "messenger",
			"title": "messenger",
			"className": "bi bi-messenger",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "meta",
			"title": "meta",
			"className": "bi bi-meta",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "mic",
			"title": "mic",
			"className": "bi bi-mic",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "mic-fill",
			"title": "mic-fill",
			"className": "bi bi-mic-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "mic-mute",
			"title": "mic-mute",
			"className": "bi bi-mic-mute",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "mic-mute-fill",
			"title": "mic-mute-fill",
			"className": "bi bi-mic-mute-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "microsoft",
			"title": "microsoft",
			"className": "bi bi-microsoft",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "microsoft-teams",
			"title": "microsoft-teams",
			"className": "bi bi-microsoft-teams",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "minecart",
			"title": "minecart",
			"className": "bi bi-minecart",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "minecart-loaded",
			"title": "minecart-loaded",
			"className": "bi bi-minecart-loaded",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "modem",
			"title": "modem",
			"className": "bi bi-modem",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "modem-fill",
			"title": "modem-fill",
			"className": "bi bi-modem-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "moisture",
			"title": "moisture",
			"className": "bi bi-moisture",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "moon",
			"title": "moon",
			"className": "bi bi-moon",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "moon-fill",
			"title": "moon-fill",
			"className": "bi bi-moon-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "moon-stars",
			"title": "moon-stars",
			"className": "bi bi-moon-stars",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "moon-stars-fill",
			"title": "moon-stars-fill",
			"className": "bi bi-moon-stars-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "mortarboard",
			"title": "mortarboard",
			"className": "bi bi-mortarboard",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "mortarboard-fill",
			"title": "mortarboard-fill",
			"className": "bi bi-mortarboard-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "motherboard",
			"title": "motherboard",
			"className": "bi bi-motherboard",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "motherboard-fill",
			"title": "motherboard-fill",
			"className": "bi bi-motherboard-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "mouse",
			"title": "mouse",
			"className": "bi bi-mouse",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "mouse-fill",
			"title": "mouse-fill",
			"className": "bi bi-mouse-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "mouse2",
			"title": "mouse2",
			"className": "bi bi-mouse2",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "mouse2-fill",
			"title": "mouse2-fill",
			"className": "bi bi-mouse2-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "mouse3",
			"title": "mouse3",
			"className": "bi bi-mouse3",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "mouse3-fill",
			"title": "mouse3-fill",
			"className": "bi bi-mouse3-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "music-note",
			"title": "music-note",
			"className": "bi bi-music-note",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "music-note-beamed",
			"title": "music-note-beamed",
			"className": "bi bi-music-note-beamed",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "music-note-list",
			"title": "music-note-list",
			"className": "bi bi-music-note-list",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "music-player",
			"title": "music-player",
			"className": "bi bi-music-player",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "music-player-fill",
			"title": "music-player-fill",
			"className": "bi bi-music-player-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "newspaper",
			"title": "newspaper",
			"className": "bi bi-newspaper",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "nintendo-switch",
			"title": "nintendo-switch",
			"className": "bi bi-nintendo-switch",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "node-minus",
			"title": "node-minus",
			"className": "bi bi-node-minus",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "node-minus-fill",
			"title": "node-minus-fill",
			"className": "bi bi-node-minus-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "node-plus",
			"title": "node-plus",
			"className": "bi bi-node-plus",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "node-plus-fill",
			"title": "node-plus-fill",
			"className": "bi bi-node-plus-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "noise-reduction",
			"title": "noise-reduction",
			"className": "bi bi-noise-reduction",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "nut",
			"title": "nut",
			"className": "bi bi-nut",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "nut-fill",
			"title": "nut-fill",
			"className": "bi bi-nut-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "nvidia",
			"title": "nvidia",
			"className": "bi bi-nvidia",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "nvme",
			"title": "nvme",
			"className": "bi bi-nvme",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "nvme-fill",
			"title": "nvme-fill",
			"className": "bi bi-nvme-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "octagon",
			"title": "octagon",
			"className": "bi bi-octagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "octagon-fill",
			"title": "octagon-fill",
			"className": "bi bi-octagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "octagon-half",
			"title": "octagon-half",
			"className": "bi bi-octagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "opencollective",
			"title": "opencollective",
			"className": "bi bi-opencollective",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "optical-audio",
			"title": "optical-audio",
			"className": "bi bi-optical-audio",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "optical-audio-fill",
			"title": "optical-audio-fill",
			"className": "bi bi-optical-audio-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "option",
			"title": "option",
			"className": "bi bi-option",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "outlet",
			"title": "outlet",
			"className": "bi bi-outlet",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "p-circle",
			"title": "p-circle",
			"className": "bi bi-p-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "p-circle-fill",
			"title": "p-circle-fill",
			"className": "bi bi-p-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "p-square",
			"title": "p-square",
			"className": "bi bi-p-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "p-square-fill",
			"title": "p-square-fill",
			"className": "bi bi-p-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "paint-bucket",
			"title": "paint-bucket",
			"className": "bi bi-paint-bucket",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "palette",
			"title": "palette",
			"className": "bi bi-palette",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "palette-fill",
			"title": "palette-fill",
			"className": "bi bi-palette-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "palette2",
			"title": "palette2",
			"className": "bi bi-palette2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "paperclip",
			"title": "paperclip",
			"className": "bi bi-paperclip",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "paragraph",
			"title": "paragraph",
			"className": "bi bi-paragraph",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "pass",
			"title": "pass",
			"className": "bi bi-pass",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "pass-fill",
			"title": "pass-fill",
			"className": "bi bi-pass-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "passport",
			"title": "passport",
			"className": "bi bi-passport",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "passport-fill",
			"title": "passport-fill",
			"className": "bi bi-passport-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "patch-check",
			"title": "patch-check",
			"className": "bi bi-patch-check",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-check-fill",
			"title": "patch-check-fill",
			"className": "bi bi-patch-check-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-exclamation",
			"title": "patch-exclamation",
			"className": "bi bi-patch-exclamation",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-exclamation-fill",
			"title": "patch-exclamation-fill",
			"className": "bi bi-patch-exclamation-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-minus",
			"title": "patch-minus",
			"className": "bi bi-patch-minus",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-minus-fill",
			"title": "patch-minus-fill",
			"className": "bi bi-patch-minus-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-plus",
			"title": "patch-plus",
			"className": "bi bi-patch-plus",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-plus-fill",
			"title": "patch-plus-fill",
			"className": "bi bi-patch-plus-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-question",
			"title": "patch-question",
			"className": "bi bi-patch-question",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "patch-question-fill",
			"title": "patch-question-fill",
			"className": "bi bi-patch-question-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "pause",
			"title": "pause",
			"className": "bi bi-pause",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "pause-btn",
			"title": "pause-btn",
			"className": "bi bi-pause-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "pause-btn-fill",
			"title": "pause-btn-fill",
			"className": "bi bi-pause-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "pause-circle",
			"title": "pause-circle",
			"className": "bi bi-pause-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "pause-circle-fill",
			"title": "pause-circle-fill",
			"className": "bi bi-pause-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "pause-fill",
			"title": "pause-fill",
			"className": "bi bi-pause-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "paypal",
			"title": "paypal",
			"className": "bi bi-paypal",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "pc",
			"title": "pc",
			"className": "bi bi-pc",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pc-display",
			"title": "pc-display",
			"className": "bi bi-pc-display",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pc-display-horizontal",
			"title": "pc-display-horizontal",
			"className": "bi bi-pc-display-horizontal",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pc-horizontal",
			"title": "pc-horizontal",
			"className": "bi bi-pc-horizontal",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pci-card",
			"title": "pci-card",
			"className": "bi bi-pci-card",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pci-card-network",
			"title": "pci-card-network",
			"className": "bi bi-pci-card-network",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pci-card-sound",
			"title": "pci-card-sound",
			"className": "bi bi-pci-card-sound",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "peace",
			"title": "peace",
			"className": "bi bi-peace",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "peace-fill",
			"title": "peace-fill",
			"className": "bi bi-peace-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "pen",
			"title": "pen",
			"className": "bi bi-pen",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "pen-fill",
			"title": "pen-fill",
			"className": "bi bi-pen-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "pencil",
			"title": "pencil",
			"className": "bi bi-pencil",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "pencil-fill",
			"title": "pencil-fill",
			"className": "bi bi-pencil-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "pencil-square",
			"title": "pencil-square",
			"className": "bi bi-pencil-square",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "pentagon",
			"title": "pentagon",
			"className": "bi bi-pentagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "pentagon-fill",
			"title": "pentagon-fill",
			"className": "bi bi-pentagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "pentagon-half",
			"title": "pentagon-half",
			"className": "bi bi-pentagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "people",
			"title": "people",
			"className": "bi bi-people",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-circle",
			"title": "person-circle",
			"className": "bi bi-person-circle",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "people-fill",
			"title": "people-fill",
			"className": "bi bi-people-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "percent",
			"title": "percent",
			"className": "bi bi-percent",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "person",
			"title": "person",
			"className": "bi bi-person",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-add",
			"title": "person-add",
			"className": "bi bi-person-add",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-arms-up",
			"title": "person-arms-up",
			"className": "bi bi-person-arms-up",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-badge",
			"title": "person-badge",
			"className": "bi bi-person-badge",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-badge-fill",
			"title": "person-badge-fill",
			"className": "bi bi-person-badge-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-bounding-box",
			"title": "person-bounding-box",
			"className": "bi bi-person-bounding-box",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-check",
			"title": "person-check",
			"className": "bi bi-person-check",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-check-fill",
			"title": "person-check-fill",
			"className": "bi bi-person-check-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-dash",
			"title": "person-dash",
			"className": "bi bi-person-dash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-dash-fill",
			"title": "person-dash-fill",
			"className": "bi bi-person-dash-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-down",
			"title": "person-down",
			"className": "bi bi-person-down",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-exclamation",
			"title": "person-exclamation",
			"className": "bi bi-person-exclamation",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill",
			"title": "person-fill",
			"className": "bi bi-person-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-add",
			"title": "person-fill-add",
			"className": "bi bi-person-fill-add",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-check",
			"title": "person-fill-check",
			"className": "bi bi-person-fill-check",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-dash",
			"title": "person-fill-dash",
			"className": "bi bi-person-fill-dash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-down",
			"title": "person-fill-down",
			"className": "bi bi-person-fill-down",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-exclamation",
			"title": "person-fill-exclamation",
			"className": "bi bi-person-fill-exclamation",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-gear",
			"title": "person-fill-gear",
			"className": "bi bi-person-fill-gear",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-lock",
			"title": "person-fill-lock",
			"className": "bi bi-person-fill-lock",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-slash",
			"title": "person-fill-slash",
			"className": "bi bi-person-fill-slash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-up",
			"title": "person-fill-up",
			"className": "bi bi-person-fill-up",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-fill-x",
			"title": "person-fill-x",
			"className": "bi bi-person-fill-x",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-gear",
			"title": "person-gear",
			"className": "bi bi-person-gear",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-heart",
			"title": "person-heart",
			"className": "bi bi-person-heart",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-hearts",
			"title": "person-hearts",
			"className": "bi bi-person-hearts",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-lines-fill",
			"title": "person-lines-fill",
			"className": "bi bi-person-lines-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-lock",
			"title": "person-lock",
			"className": "bi bi-person-lock",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-plus",
			"title": "person-plus",
			"className": "bi bi-person-plus",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-plus-fill",
			"title": "person-plus-fill",
			"className": "bi bi-person-plus-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-raised-hand",
			"title": "person-raised-hand",
			"className": "bi bi-person-raised-hand",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-rolodex",
			"title": "person-rolodex",
			"className": "bi bi-person-rolodex",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-slash",
			"title": "person-slash",
			"className": "bi bi-person-slash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-square",
			"title": "person-square",
			"className": "bi bi-person-square",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-standing",
			"title": "person-standing",
			"className": "bi bi-person-standing",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-standing-dress",
			"title": "person-standing-dress",
			"className": "bi bi-person-standing-dress",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-up",
			"title": "person-up",
			"className": "bi bi-person-up",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-vcard",
			"title": "person-vcard",
			"className": "bi bi-person-vcard",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-vcard-fill",
			"title": "person-vcard-fill",
			"className": "bi bi-person-vcard-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-video",
			"title": "person-video",
			"className": "bi bi-person-video",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-video2",
			"title": "person-video2",
			"className": "bi bi-person-video2",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-video3",
			"title": "person-video3",
			"className": "bi bi-person-video3",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-walking",
			"title": "person-walking",
			"className": "bi bi-person-walking",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-wheelchair",
			"title": "person-wheelchair",
			"className": "bi bi-person-wheelchair",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-workspace",
			"title": "person-workspace",
			"className": "bi bi-person-workspace",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-x",
			"title": "person-x",
			"className": "bi bi-person-x",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "person-x-fill",
			"title": "person-x-fill",
			"className": "bi bi-person-x-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "phone",
			"title": "phone",
			"className": "bi bi-phone",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "phone-fill",
			"title": "phone-fill",
			"className": "bi bi-phone-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "phone-flip",
			"title": "phone-flip",
			"className": "bi bi-phone-flip",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "phone-landscape",
			"title": "phone-landscape",
			"className": "bi bi-phone-landscape",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "phone-landscape-fill",
			"title": "phone-landscape-fill",
			"className": "bi bi-phone-landscape-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "phone-vibrate",
			"title": "phone-vibrate",
			"className": "bi bi-phone-vibrate",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "phone-vibrate-fill",
			"title": "phone-vibrate-fill",
			"className": "bi bi-phone-vibrate-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "pie-chart",
			"title": "pie-chart",
			"className": "bi bi-pie-chart",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "pie-chart-fill",
			"title": "pie-chart-fill",
			"className": "bi bi-pie-chart-fill",
			"type": "bi",
			"categories": [
				"data"
			]
		},
		{
			"name": "piggy-bank",
			"title": "piggy-bank",
			"className": "bi bi-piggy-bank",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "piggy-bank-fill",
			"title": "piggy-bank-fill",
			"className": "bi bi-piggy-bank-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "pin",
			"title": "pin",
			"className": "bi bi-pin",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "pin-angle",
			"title": "pin-angle",
			"className": "bi bi-pin-angle",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "pin-angle-fill",
			"title": "pin-angle-fill",
			"className": "bi bi-pin-angle-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "pin-fill",
			"title": "pin-fill",
			"className": "bi bi-pin-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "pin-map",
			"title": "pin-map",
			"className": "bi bi-pin-map",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "pin-map-fill",
			"title": "pin-map-fill",
			"className": "bi bi-pin-map-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "pinterest",
			"title": "pinterest",
			"className": "bi bi-pinterest",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "pip",
			"title": "pip",
			"className": "bi bi-pip",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "pip-fill",
			"title": "pip-fill",
			"className": "bi bi-pip-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "play",
			"title": "play",
			"className": "bi bi-play",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "play-btn",
			"title": "play-btn",
			"className": "bi bi-play-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "play-btn-fill",
			"title": "play-btn-fill",
			"className": "bi bi-play-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "play-circle",
			"title": "play-circle",
			"className": "bi bi-play-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "play-circle-fill",
			"title": "play-circle-fill",
			"className": "bi bi-play-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "play-fill",
			"title": "play-fill",
			"className": "bi bi-play-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "playstation",
			"title": "playstation",
			"className": "bi bi-playstation",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "plug",
			"title": "plug",
			"className": "bi bi-plug",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "plug-fill",
			"title": "plug-fill",
			"className": "bi bi-plug-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "plugin",
			"title": "plugin",
			"className": "bi bi-plugin",
			"type": "bi",
			"categories": [
				"ui"
			]
		},
		{
			"name": "plus",
			"title": "plus",
			"className": "bi bi-plus",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-circle",
			"title": "plus-circle",
			"className": "bi bi-plus-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-circle-dotted",
			"title": "plus-circle-dotted",
			"className": "bi bi-plus-circle-dotted",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-circle-fill",
			"title": "plus-circle-fill",
			"className": "bi bi-plus-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-lg",
			"title": "plus-lg",
			"className": "bi bi-plus-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-slash-minus",
			"title": "plus-slash-minus",
			"className": "bi bi-plus-slash-minus",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "plus-square",
			"title": "plus-square",
			"className": "bi bi-plus-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-square-dotted",
			"title": "plus-square-dotted",
			"className": "bi bi-plus-square-dotted",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "plus-square-fill",
			"title": "plus-square-fill",
			"className": "bi bi-plus-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "postage",
			"title": "postage",
			"className": "bi bi-postage",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "postage-fill",
			"title": "postage-fill",
			"className": "bi bi-postage-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "postage-heart",
			"title": "postage-heart",
			"className": "bi bi-postage-heart",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "postage-heart-fill",
			"title": "postage-heart-fill",
			"className": "bi bi-postage-heart-fill",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "postcard",
			"title": "postcard",
			"className": "bi bi-postcard",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "postcard-fill",
			"title": "postcard-fill",
			"className": "bi bi-postcard-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "postcard-heart",
			"title": "postcard-heart",
			"className": "bi bi-postcard-heart",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "postcard-heart-fill",
			"title": "postcard-heart-fill",
			"className": "bi bi-postcard-heart-fill",
			"type": "bi",
			"categories": [
				"real world love"
			]
		},
		{
			"name": "power",
			"title": "power",
			"className": "bi bi-power",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "prescription",
			"title": "prescription",
			"className": "bi bi-prescription",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "prescription2",
			"title": "prescription2",
			"className": "bi bi-prescription2",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "printer",
			"title": "printer",
			"className": "bi bi-printer",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "printer-fill",
			"title": "printer-fill",
			"className": "bi bi-printer-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "projector",
			"title": "projector",
			"className": "bi bi-projector",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "projector-fill",
			"title": "projector-fill",
			"className": "bi bi-projector-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "puzzle",
			"title": "puzzle",
			"className": "bi bi-puzzle",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "puzzle-fill",
			"title": "puzzle-fill",
			"className": "bi bi-puzzle-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "qr-code",
			"title": "qr-code",
			"className": "bi bi-qr-code",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "qr-code-scan",
			"title": "qr-code-scan",
			"className": "bi bi-qr-code-scan",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "question",
			"title": "question",
			"className": "bi bi-question",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-circle",
			"title": "question-circle",
			"className": "bi bi-question-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-diamond",
			"title": "question-diamond",
			"className": "bi bi-question-diamond",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-diamond-fill",
			"title": "question-diamond-fill",
			"className": "bi bi-question-diamond-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-circle-fill",
			"title": "question-circle-fill",
			"className": "bi bi-question-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-lg",
			"title": "question-lg",
			"className": "bi bi-question-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-octagon",
			"title": "question-octagon",
			"className": "bi bi-question-octagon",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-octagon-fill",
			"title": "question-octagon-fill",
			"className": "bi bi-question-octagon-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-square",
			"title": "question-square",
			"className": "bi bi-question-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "question-square-fill",
			"title": "question-square-fill",
			"className": "bi bi-question-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "quora",
			"title": "quora",
			"className": "bi bi-quora",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "quote",
			"title": "quote",
			"className": "bi bi-quote",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "r-circle",
			"title": "r-circle",
			"className": "bi bi-r-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "r-circle-fill",
			"title": "r-circle-fill",
			"className": "bi bi-r-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "r-square",
			"title": "r-square",
			"className": "bi bi-r-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "r-square-fill",
			"title": "r-square-fill",
			"className": "bi bi-r-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "radar",
			"title": "radar",
			"className": "bi bi-radar",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "radioactive",
			"title": "radioactive",
			"className": "bi bi-radioactive",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "rainbow",
			"title": "rainbow",
			"className": "bi bi-rainbow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "receipt",
			"title": "receipt",
			"className": "bi bi-receipt",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "receipt-cutoff",
			"title": "receipt-cutoff",
			"className": "bi bi-receipt-cutoff",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "reception-0",
			"title": "reception-0",
			"className": "bi bi-reception-0",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reception-1",
			"title": "reception-1",
			"className": "bi bi-reception-1",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reception-2",
			"title": "reception-2",
			"className": "bi bi-reception-2",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reception-3",
			"title": "reception-3",
			"className": "bi bi-reception-3",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reception-4",
			"title": "reception-4",
			"className": "bi bi-reception-4",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "record",
			"title": "record",
			"className": "bi bi-record",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record-btn",
			"title": "record-btn",
			"className": "bi bi-record-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record-btn-fill",
			"title": "record-btn-fill",
			"className": "bi bi-record-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record-circle",
			"title": "record-circle",
			"className": "bi bi-record-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record-circle-fill",
			"title": "record-circle-fill",
			"className": "bi bi-record-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record-fill",
			"title": "record-fill",
			"className": "bi bi-record-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record2",
			"title": "record2",
			"className": "bi bi-record2",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "record2-fill",
			"title": "record2-fill",
			"className": "bi bi-record2-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "recycle",
			"title": "recycle",
			"className": "bi bi-recycle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "reddit",
			"title": "reddit",
			"className": "bi bi-reddit",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "regex",
			"title": "regex",
			"className": "bi bi-regex",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "repeat",
			"title": "repeat",
			"className": "bi bi-repeat",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "repeat-1",
			"title": "repeat-1",
			"className": "bi bi-repeat-1",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "reply",
			"title": "reply",
			"className": "bi bi-reply",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reply-all",
			"title": "reply-all",
			"className": "bi bi-reply-all",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reply-all-fill",
			"title": "reply-all-fill",
			"className": "bi bi-reply-all-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "reply-fill",
			"title": "reply-fill",
			"className": "bi bi-reply-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "rewind",
			"title": "rewind",
			"className": "bi bi-rewind",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "rewind-btn",
			"title": "rewind-btn",
			"className": "bi bi-rewind-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "rewind-btn-fill",
			"title": "rewind-btn-fill",
			"className": "bi bi-rewind-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "rewind-circle",
			"title": "rewind-circle",
			"className": "bi bi-rewind-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "rewind-circle-fill",
			"title": "rewind-circle-fill",
			"className": "bi bi-rewind-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "rewind-fill",
			"title": "rewind-fill",
			"className": "bi bi-rewind-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "robot",
			"title": "robot",
			"className": "bi bi-robot",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "rocket",
			"title": "rocket",
			"className": "bi bi-rocket",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "rocket-fill",
			"title": "rocket-fill",
			"className": "bi bi-rocket-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "rocket-takeoff",
			"title": "rocket-takeoff",
			"className": "bi bi-rocket-takeoff",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "rocket-takeoff-fill",
			"title": "rocket-takeoff-fill",
			"className": "bi bi-rocket-takeoff-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "router",
			"title": "router",
			"className": "bi bi-router",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "router-fill",
			"title": "router-fill",
			"className": "bi bi-router-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "rss",
			"title": "rss",
			"className": "bi bi-rss",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "rss-fill",
			"title": "rss-fill",
			"className": "bi bi-rss-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "rulers",
			"title": "rulers",
			"className": "bi bi-rulers",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "safe",
			"title": "safe",
			"className": "bi bi-safe",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "safe-fill",
			"title": "safe-fill",
			"className": "bi bi-safe-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "safe2",
			"title": "safe2",
			"className": "bi bi-safe2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "safe2-fill",
			"title": "safe2-fill",
			"className": "bi bi-safe2-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "save",
			"title": "save",
			"className": "bi bi-save",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "save-fill",
			"title": "save-fill",
			"className": "bi bi-save-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "save2",
			"title": "save2",
			"className": "bi bi-save2",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "save2-fill",
			"title": "save2-fill",
			"className": "bi bi-save2-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "scissors",
			"title": "scissors",
			"className": "bi bi-scissors",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "scooter",
			"title": "scooter",
			"className": "bi bi-scooter",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "screwdriver",
			"title": "screwdriver",
			"className": "bi bi-screwdriver",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "sd-card",
			"title": "sd-card",
			"className": "bi bi-sd-card",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "sd-card-fill",
			"title": "sd-card-fill",
			"className": "bi bi-sd-card-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "search",
			"title": "search",
			"className": "bi bi-search",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "search-heart",
			"title": "search-heart",
			"className": "bi bi-search-heart",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "search-heart-fill",
			"title": "search-heart-fill",
			"className": "bi bi-search-heart-fill",
			"type": "bi",
			"categories": [
				"communications love"
			]
		},
		{
			"name": "segmented-nav",
			"title": "segmented-nav",
			"className": "bi bi-segmented-nav",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "send",
			"title": "send",
			"className": "bi bi-send",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-arrow-down",
			"title": "send-arrow-down",
			"className": "bi bi-send-arrow-down",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-arrow-down-fill",
			"title": "send-arrow-down-fill",
			"className": "bi bi-send-arrow-down-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-arrow-up",
			"title": "send-arrow-up",
			"className": "bi bi-send-arrow-up",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-arrow-up-fill",
			"title": "send-arrow-up-fill",
			"className": "bi bi-send-arrow-up-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-check",
			"title": "send-check",
			"className": "bi bi-send-check",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-check-fill",
			"title": "send-check-fill",
			"className": "bi bi-send-check-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-dash",
			"title": "send-dash",
			"className": "bi bi-send-dash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-dash-fill",
			"title": "send-dash-fill",
			"className": "bi bi-send-dash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-exclamation",
			"title": "send-exclamation",
			"className": "bi bi-send-exclamation",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-exclamation-fill",
			"title": "send-exclamation-fill",
			"className": "bi bi-send-exclamation-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-fill",
			"title": "send-fill",
			"className": "bi bi-send-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-plus",
			"title": "send-plus",
			"className": "bi bi-send-plus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-plus-fill",
			"title": "send-plus-fill",
			"className": "bi bi-send-plus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-slash",
			"title": "send-slash",
			"className": "bi bi-send-slash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-slash-fill",
			"title": "send-slash-fill",
			"className": "bi bi-send-slash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-x",
			"title": "send-x",
			"className": "bi bi-send-x",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "send-x-fill",
			"title": "send-x-fill",
			"className": "bi bi-send-x-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "server",
			"title": "server",
			"className": "bi bi-server",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "shadows",
			"title": "shadows",
			"className": "bi bi-shadows",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "share",
			"title": "share",
			"className": "bi bi-share",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "share-fill",
			"title": "share-fill",
			"className": "bi bi-share-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "shield",
			"title": "shield",
			"className": "bi bi-shield",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-check",
			"title": "shield-check",
			"className": "bi bi-shield-check",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-exclamation",
			"title": "shield-exclamation",
			"className": "bi bi-shield-exclamation",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-fill",
			"title": "shield-fill",
			"className": "bi bi-shield-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-fill-check",
			"title": "shield-fill-check",
			"className": "bi bi-shield-fill-check",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-fill-exclamation",
			"title": "shield-fill-exclamation",
			"className": "bi bi-shield-fill-exclamation",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-fill-minus",
			"title": "shield-fill-minus",
			"className": "bi bi-shield-fill-minus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-fill-plus",
			"title": "shield-fill-plus",
			"className": "bi bi-shield-fill-plus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-fill-x",
			"title": "shield-fill-x",
			"className": "bi bi-shield-fill-x",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-lock",
			"title": "shield-lock",
			"className": "bi bi-shield-lock",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-lock-fill",
			"title": "shield-lock-fill",
			"className": "bi bi-shield-lock-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-minus",
			"title": "shield-minus",
			"className": "bi bi-shield-minus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-plus",
			"title": "shield-plus",
			"className": "bi bi-shield-plus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-shaded",
			"title": "shield-shaded",
			"className": "bi bi-shield-shaded",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-slash",
			"title": "shield-slash",
			"className": "bi bi-shield-slash",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-slash-fill",
			"title": "shield-slash-fill",
			"className": "bi bi-shield-slash-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shield-x",
			"title": "shield-x",
			"className": "bi bi-shield-x",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "shift",
			"title": "shift",
			"className": "bi bi-shift",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "shift-fill",
			"title": "shift-fill",
			"className": "bi bi-shift-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "shop",
			"title": "shop",
			"className": "bi bi-shop",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "shop-window",
			"title": "shop-window",
			"className": "bi bi-shop-window",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "shuffle",
			"title": "shuffle",
			"className": "bi bi-shuffle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "sign-dead-end",
			"title": "sign-dead-end",
			"className": "bi bi-sign-dead-end",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-dead-end-fill",
			"title": "sign-dead-end-fill",
			"className": "bi bi-sign-dead-end-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-do-not-enter",
			"title": "sign-do-not-enter",
			"className": "bi bi-sign-do-not-enter",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-do-not-enter-fill",
			"title": "sign-do-not-enter-fill",
			"className": "bi bi-sign-do-not-enter-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection",
			"title": "sign-intersection",
			"className": "bi bi-sign-intersection",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-fill",
			"title": "sign-intersection-fill",
			"className": "bi bi-sign-intersection-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-side",
			"title": "sign-intersection-side",
			"className": "bi bi-sign-intersection-side",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-side-fill",
			"title": "sign-intersection-side-fill",
			"className": "bi bi-sign-intersection-side-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-t",
			"title": "sign-intersection-t",
			"className": "bi bi-sign-intersection-t",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-t-fill",
			"title": "sign-intersection-t-fill",
			"className": "bi bi-sign-intersection-t-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-y",
			"title": "sign-intersection-y",
			"className": "bi bi-sign-intersection-y",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-intersection-y-fill",
			"title": "sign-intersection-y-fill",
			"className": "bi bi-sign-intersection-y-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-merge-left",
			"title": "sign-merge-left",
			"className": "bi bi-sign-merge-left",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-merge-left-fill",
			"title": "sign-merge-left-fill",
			"className": "bi bi-sign-merge-left-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-merge-right",
			"title": "sign-merge-right",
			"className": "bi bi-sign-merge-right",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-merge-right-fill",
			"title": "sign-merge-right-fill",
			"className": "bi bi-sign-merge-right-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-no-left-turn",
			"title": "sign-no-left-turn",
			"className": "bi bi-sign-no-left-turn",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-no-left-turn-fill",
			"title": "sign-no-left-turn-fill",
			"className": "bi bi-sign-no-left-turn-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-no-parking",
			"title": "sign-no-parking",
			"className": "bi bi-sign-no-parking",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-no-parking-fill",
			"title": "sign-no-parking-fill",
			"className": "bi bi-sign-no-parking-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-no-right-turn",
			"title": "sign-no-right-turn",
			"className": "bi bi-sign-no-right-turn",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-no-right-turn-fill",
			"title": "sign-no-right-turn-fill",
			"className": "bi bi-sign-no-right-turn-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-railroad",
			"title": "sign-railroad",
			"className": "bi bi-sign-railroad",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-railroad-fill",
			"title": "sign-railroad-fill",
			"className": "bi bi-sign-railroad-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-stop",
			"title": "sign-stop",
			"className": "bi bi-sign-stop",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-stop-fill",
			"title": "sign-stop-fill",
			"className": "bi bi-sign-stop-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-stop-lights",
			"title": "sign-stop-lights",
			"className": "bi bi-sign-stop-lights",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-stop-lights-fill",
			"title": "sign-stop-lights-fill",
			"className": "bi bi-sign-stop-lights-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-left",
			"title": "sign-turn-left",
			"className": "bi bi-sign-turn-left",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-left-fill",
			"title": "sign-turn-left-fill",
			"className": "bi bi-sign-turn-left-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-right",
			"title": "sign-turn-right",
			"className": "bi bi-sign-turn-right",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-right-fill",
			"title": "sign-turn-right-fill",
			"className": "bi bi-sign-turn-right-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-slight-left",
			"title": "sign-turn-slight-left",
			"className": "bi bi-sign-turn-slight-left",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-slight-left-fill",
			"title": "sign-turn-slight-left-fill",
			"className": "bi bi-sign-turn-slight-left-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-slight-right",
			"title": "sign-turn-slight-right",
			"className": "bi bi-sign-turn-slight-right",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-turn-slight-right-fill",
			"title": "sign-turn-slight-right-fill",
			"className": "bi bi-sign-turn-slight-right-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-yield",
			"title": "sign-yield",
			"className": "bi bi-sign-yield",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "sign-yield-fill",
			"title": "sign-yield-fill",
			"className": "bi bi-sign-yield-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "signal",
			"title": "signal",
			"className": "bi bi-signal",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "signpost",
			"title": "signpost",
			"className": "bi bi-signpost",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "signpost-2",
			"title": "signpost-2",
			"className": "bi bi-signpost-2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "signpost-2-fill",
			"title": "signpost-2-fill",
			"className": "bi bi-signpost-2-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "signpost-fill",
			"title": "signpost-fill",
			"className": "bi bi-signpost-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "signpost-split",
			"title": "signpost-split",
			"className": "bi bi-signpost-split",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "signpost-split-fill",
			"title": "signpost-split-fill",
			"className": "bi bi-signpost-split-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "sim",
			"title": "sim",
			"className": "bi bi-sim",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "sim-fill",
			"title": "sim-fill",
			"className": "bi bi-sim-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "sim-slash",
			"title": "sim-slash",
			"className": "bi bi-sim-slash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "sim-slash-fill",
			"title": "sim-slash-fill",
			"className": "bi bi-sim-slash-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "sina-weibo",
			"title": "sina-weibo",
			"className": "bi bi-sina-weibo",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "skip-backward",
			"title": "skip-backward",
			"className": "bi bi-skip-backward",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-backward-btn",
			"title": "skip-backward-btn",
			"className": "bi bi-skip-backward-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-backward-btn-fill",
			"title": "skip-backward-btn-fill",
			"className": "bi bi-skip-backward-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-backward-circle",
			"title": "skip-backward-circle",
			"className": "bi bi-skip-backward-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-backward-circle-fill",
			"title": "skip-backward-circle-fill",
			"className": "bi bi-skip-backward-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-backward-fill",
			"title": "skip-backward-fill",
			"className": "bi bi-skip-backward-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-end",
			"title": "skip-end",
			"className": "bi bi-skip-end",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-end-btn",
			"title": "skip-end-btn",
			"className": "bi bi-skip-end-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-end-btn-fill",
			"title": "skip-end-btn-fill",
			"className": "bi bi-skip-end-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-end-circle",
			"title": "skip-end-circle",
			"className": "bi bi-skip-end-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-end-circle-fill",
			"title": "skip-end-circle-fill",
			"className": "bi bi-skip-end-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-end-fill",
			"title": "skip-end-fill",
			"className": "bi bi-skip-end-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-forward",
			"title": "skip-forward",
			"className": "bi bi-skip-forward",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-forward-btn",
			"title": "skip-forward-btn",
			"className": "bi bi-skip-forward-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-forward-btn-fill",
			"title": "skip-forward-btn-fill",
			"className": "bi bi-skip-forward-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-forward-circle",
			"title": "skip-forward-circle",
			"className": "bi bi-skip-forward-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-forward-circle-fill",
			"title": "skip-forward-circle-fill",
			"className": "bi bi-skip-forward-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-forward-fill",
			"title": "skip-forward-fill",
			"className": "bi bi-skip-forward-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-start",
			"title": "skip-start",
			"className": "bi bi-skip-start",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-start-btn",
			"title": "skip-start-btn",
			"className": "bi bi-skip-start-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-start-btn-fill",
			"title": "skip-start-btn-fill",
			"className": "bi bi-skip-start-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-start-circle",
			"title": "skip-start-circle",
			"className": "bi bi-skip-start-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-start-circle-fill",
			"title": "skip-start-circle-fill",
			"className": "bi bi-skip-start-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skip-start-fill",
			"title": "skip-start-fill",
			"className": "bi bi-skip-start-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "skype",
			"title": "skype",
			"className": "bi bi-skype",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "slack",
			"title": "slack",
			"className": "bi bi-slack",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "slash",
			"title": "slash",
			"className": "bi bi-slash",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "slash-circle-fill",
			"title": "slash-circle-fill",
			"className": "bi bi-slash-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "slash-lg",
			"title": "slash-lg",
			"className": "bi bi-slash-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "slash-square",
			"title": "slash-square",
			"className": "bi bi-slash-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "slash-square-fill",
			"title": "slash-square-fill",
			"className": "bi bi-slash-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "sliders",
			"title": "sliders",
			"className": "bi bi-sliders",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "sliders2",
			"title": "sliders2",
			"className": "bi bi-sliders2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "sliders2-vertical",
			"title": "sliders2-vertical",
			"className": "bi bi-sliders2-vertical",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "smartwatch",
			"title": "smartwatch",
			"className": "bi bi-smartwatch",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "snapchat",
			"title": "snapchat",
			"className": "bi bi-snapchat",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "snow",
			"title": "snow",
			"className": "bi bi-snow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "snow2",
			"title": "snow2",
			"className": "bi bi-snow2",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "snow3",
			"title": "snow3",
			"className": "bi bi-snow3",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "sort-alpha-down",
			"title": "sort-alpha-down",
			"className": "bi bi-sort-alpha-down",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-alpha-down-alt",
			"title": "sort-alpha-down-alt",
			"className": "bi bi-sort-alpha-down-alt",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-alpha-up",
			"title": "sort-alpha-up",
			"className": "bi bi-sort-alpha-up",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-alpha-up-alt",
			"title": "sort-alpha-up-alt",
			"className": "bi bi-sort-alpha-up-alt",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-down",
			"title": "sort-down",
			"className": "bi bi-sort-down",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-down-alt",
			"title": "sort-down-alt",
			"className": "bi bi-sort-down-alt",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-numeric-down",
			"title": "sort-numeric-down",
			"className": "bi bi-sort-numeric-down",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-numeric-down-alt",
			"title": "sort-numeric-down-alt",
			"className": "bi bi-sort-numeric-down-alt",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-numeric-up",
			"title": "sort-numeric-up",
			"className": "bi bi-sort-numeric-up",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-numeric-up-alt",
			"title": "sort-numeric-up-alt",
			"className": "bi bi-sort-numeric-up-alt",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-up",
			"title": "sort-up",
			"className": "bi bi-sort-up",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "sort-up-alt",
			"title": "sort-up-alt",
			"className": "bi bi-sort-up-alt",
			"type": "bi",
			"categories": [
				"sort and filter"
			]
		},
		{
			"name": "soundwave",
			"title": "soundwave",
			"className": "bi bi-soundwave",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "sourceforge",
			"title": "sourceforge",
			"className": "bi bi-sourceforge",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "speaker",
			"title": "speaker",
			"className": "bi bi-speaker",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "speaker-fill",
			"title": "speaker-fill",
			"className": "bi bi-speaker-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "speedometer",
			"title": "speedometer",
			"className": "bi bi-speedometer",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "speedometer2",
			"title": "speedometer2",
			"className": "bi bi-speedometer2",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "spellcheck",
			"title": "spellcheck",
			"className": "bi bi-spellcheck",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "spotify",
			"title": "spotify",
			"className": "bi bi-spotify",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "square",
			"title": "square",
			"className": "bi bi-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "square-fill",
			"title": "square-fill",
			"className": "bi bi-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "square-half",
			"title": "square-half",
			"className": "bi bi-square-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "stack",
			"title": "stack",
			"className": "bi bi-stack",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "stack-overflow",
			"title": "stack-overflow",
			"className": "bi bi-stack-overflow",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "star",
			"title": "star",
			"className": "bi bi-star",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "star-fill",
			"title": "star-fill",
			"className": "bi bi-star-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "star-half",
			"title": "star-half",
			"className": "bi bi-star-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "stars",
			"title": "stars",
			"className": "bi bi-stars",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "steam",
			"title": "steam",
			"className": "bi bi-steam",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "stickies",
			"title": "stickies",
			"className": "bi bi-stickies",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "stickies-fill",
			"title": "stickies-fill",
			"className": "bi bi-stickies-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "sticky",
			"title": "sticky",
			"className": "bi bi-sticky",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "sticky-fill",
			"title": "sticky-fill",
			"className": "bi bi-sticky-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "stop",
			"title": "stop",
			"className": "bi bi-stop",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "stop-btn",
			"title": "stop-btn",
			"className": "bi bi-stop-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "stop-btn-fill",
			"title": "stop-btn-fill",
			"className": "bi bi-stop-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "stop-circle",
			"title": "stop-circle",
			"className": "bi bi-stop-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "stop-circle-fill",
			"title": "stop-circle-fill",
			"className": "bi bi-stop-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "stop-fill",
			"title": "stop-fill",
			"className": "bi bi-stop-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "stoplights",
			"title": "stoplights",
			"className": "bi bi-stoplights",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "stoplights-fill",
			"title": "stoplights-fill",
			"className": "bi bi-stoplights-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "stopwatch",
			"title": "stopwatch",
			"className": "bi bi-stopwatch",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "stopwatch-fill",
			"title": "stopwatch-fill",
			"className": "bi bi-stopwatch-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "strava",
			"title": "strava",
			"className": "bi bi-strava",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "stripe",
			"title": "stripe",
			"className": "bi bi-stripe",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "subscript",
			"title": "subscript",
			"className": "bi bi-subscript",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "substack",
			"title": "substack",
			"className": "bi bi-substack",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "subtract",
			"title": "subtract",
			"className": "bi bi-subtract",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "suit-club",
			"title": "suit-club",
			"className": "bi bi-suit-club",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-club-fill",
			"title": "suit-club-fill",
			"className": "bi bi-suit-club-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-diamond",
			"title": "suit-diamond",
			"className": "bi bi-suit-diamond",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-diamond-fill",
			"title": "suit-diamond-fill",
			"className": "bi bi-suit-diamond-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-heart",
			"title": "suit-heart",
			"className": "bi bi-suit-heart",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-heart-fill",
			"title": "suit-heart-fill",
			"className": "bi bi-suit-heart-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-spade",
			"title": "suit-spade",
			"className": "bi bi-suit-spade",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suit-spade-fill",
			"title": "suit-spade-fill",
			"className": "bi bi-suit-spade-fill",
			"type": "bi",
			"categories": [
				"entertainment"
			]
		},
		{
			"name": "suitcase",
			"title": "suitcase",
			"className": "bi bi-suitcase",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "suitcase-fill",
			"title": "suitcase-fill",
			"className": "bi bi-suitcase-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "suitcase-lg",
			"title": "suitcase-lg",
			"className": "bi bi-suitcase-lg",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "suitcase-lg-fill",
			"title": "suitcase-lg-fill",
			"className": "bi bi-suitcase-lg-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "suitcase2",
			"title": "suitcase2",
			"className": "bi bi-suitcase2",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "suitcase2-fill",
			"title": "suitcase2-fill",
			"className": "bi bi-suitcase2-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "sun",
			"title": "sun",
			"className": "bi bi-sun",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "sun-fill",
			"title": "sun-fill",
			"className": "bi bi-sun-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "sunglasses",
			"title": "sunglasses",
			"className": "bi bi-sunglasses",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "sunrise",
			"title": "sunrise",
			"className": "bi bi-sunrise",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "sunrise-fill",
			"title": "sunrise-fill",
			"className": "bi bi-sunrise-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "sunset",
			"title": "sunset",
			"className": "bi bi-sunset",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "sunset-fill",
			"title": "sunset-fill",
			"className": "bi bi-sunset-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "superscript",
			"title": "superscript",
			"className": "bi bi-superscript",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "symmetry-horizontal",
			"title": "symmetry-horizontal",
			"className": "bi bi-symmetry-horizontal",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "symmetry-vertical",
			"title": "symmetry-vertical",
			"className": "bi bi-symmetry-vertical",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "table",
			"title": "table",
			"className": "bi bi-table",
			"type": "bi",
			"categories": [
				"files and folders"
			]
		},
		{
			"name": "tablet",
			"title": "tablet",
			"className": "bi bi-tablet",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "tablet-fill",
			"title": "tablet-fill",
			"className": "bi bi-tablet-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "tablet-landscape",
			"title": "tablet-landscape",
			"className": "bi bi-tablet-landscape",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "tablet-landscape-fill",
			"title": "tablet-landscape-fill",
			"className": "bi bi-tablet-landscape-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "tag",
			"title": "tag",
			"className": "bi bi-tag",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "tag-fill",
			"title": "tag-fill",
			"className": "bi bi-tag-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "tags",
			"title": "tags",
			"className": "bi bi-tags",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "tags-fill",
			"title": "tags-fill",
			"className": "bi bi-tags-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "taxi-front",
			"title": "taxi-front",
			"className": "bi bi-taxi-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "taxi-front-fill",
			"title": "taxi-front-fill",
			"className": "bi bi-taxi-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "telegram",
			"title": "telegram",
			"className": "bi bi-telegram",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "telephone",
			"title": "telephone",
			"className": "bi bi-telephone",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-fill",
			"title": "telephone-fill",
			"className": "bi bi-telephone-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-forward",
			"title": "telephone-forward",
			"className": "bi bi-telephone-forward",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-forward-fill",
			"title": "telephone-forward-fill",
			"className": "bi bi-telephone-forward-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-inbound",
			"title": "telephone-inbound",
			"className": "bi bi-telephone-inbound",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-inbound-fill",
			"title": "telephone-inbound-fill",
			"className": "bi bi-telephone-inbound-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-minus",
			"title": "telephone-minus",
			"className": "bi bi-telephone-minus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-minus-fill",
			"title": "telephone-minus-fill",
			"className": "bi bi-telephone-minus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-outbound",
			"title": "telephone-outbound",
			"className": "bi bi-telephone-outbound",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-outbound-fill",
			"title": "telephone-outbound-fill",
			"className": "bi bi-telephone-outbound-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-plus",
			"title": "telephone-plus",
			"className": "bi bi-telephone-plus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-plus-fill",
			"title": "telephone-plus-fill",
			"className": "bi bi-telephone-plus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-x",
			"title": "telephone-x",
			"className": "bi bi-telephone-x",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "telephone-x-fill",
			"title": "telephone-x-fill",
			"className": "bi bi-telephone-x-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "tencent-qq",
			"title": "tencent-qq",
			"className": "bi bi-tencent-qq",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "terminal",
			"title": "terminal",
			"className": "bi bi-terminal",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "terminal-dash",
			"title": "terminal-dash",
			"className": "bi bi-terminal-dash",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "terminal-fill",
			"title": "terminal-fill",
			"className": "bi bi-terminal-fill",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "terminal-plus",
			"title": "terminal-plus",
			"className": "bi bi-terminal-plus",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "terminal-split",
			"title": "terminal-split",
			"className": "bi bi-terminal-split",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "terminal-x",
			"title": "terminal-x",
			"className": "bi bi-terminal-x",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "text-center",
			"title": "text-center",
			"className": "bi bi-text-center",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "text-indent-left",
			"title": "text-indent-left",
			"className": "bi bi-text-indent-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "text-indent-right",
			"title": "text-indent-right",
			"className": "bi bi-text-indent-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "text-left",
			"title": "text-left",
			"className": "bi bi-text-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "text-paragraph",
			"title": "text-paragraph",
			"className": "bi bi-text-paragraph",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "text-right",
			"title": "text-right",
			"className": "bi bi-text-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "text-wrap",
			"title": "text-wrap",
			"className": "bi bi-text-wrap",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "textarea",
			"title": "textarea",
			"className": "bi bi-textarea",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "textarea-resize",
			"title": "textarea-resize",
			"className": "bi bi-textarea-resize",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "textarea-t",
			"title": "textarea-t",
			"className": "bi bi-textarea-t",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "thermometer",
			"title": "thermometer",
			"className": "bi bi-thermometer",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "thermometer-half",
			"title": "thermometer-half",
			"className": "bi bi-thermometer-half",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "thermometer-high",
			"title": "thermometer-high",
			"className": "bi bi-thermometer-high",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "thermometer-low",
			"title": "thermometer-low",
			"className": "bi bi-thermometer-low",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "thermometer-snow",
			"title": "thermometer-snow",
			"className": "bi bi-thermometer-snow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "thermometer-sun",
			"title": "thermometer-sun",
			"className": "bi bi-thermometer-sun",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "threads",
			"title": "threads",
			"className": "bi bi-threads",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "threads-fill",
			"title": "threads-fill",
			"className": "bi bi-threads-fill",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "three-dots",
			"title": "three-dots",
			"className": "bi bi-three-dots",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "three-dots-vertical",
			"title": "three-dots-vertical",
			"className": "bi bi-three-dots-vertical",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "thunderbolt",
			"title": "thunderbolt",
			"className": "bi bi-thunderbolt",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "thunderbolt-fill",
			"title": "thunderbolt-fill",
			"className": "bi bi-thunderbolt-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "ticket",
			"title": "ticket",
			"className": "bi bi-ticket",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ticket-detailed",
			"title": "ticket-detailed",
			"className": "bi bi-ticket-detailed",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ticket-detailed-fill",
			"title": "ticket-detailed-fill",
			"className": "bi bi-ticket-detailed-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ticket-fill",
			"title": "ticket-fill",
			"className": "bi bi-ticket-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ticket-perforated",
			"title": "ticket-perforated",
			"className": "bi bi-ticket-perforated",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "ticket-perforated-fill",
			"title": "ticket-perforated-fill",
			"className": "bi bi-ticket-perforated-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "tiktok",
			"title": "tiktok",
			"className": "bi bi-tiktok",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "toggle-off",
			"title": "toggle-off",
			"className": "bi bi-toggle-off",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "toggle-on",
			"title": "toggle-on",
			"className": "bi bi-toggle-on",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "toggle2-off",
			"title": "toggle2-off",
			"className": "bi bi-toggle2-off",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "toggle2-on",
			"title": "toggle2-on",
			"className": "bi bi-toggle2-on",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "toggles",
			"title": "toggles",
			"className": "bi bi-toggles",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "toggles2",
			"title": "toggles2",
			"className": "bi bi-toggles2",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "tools",
			"title": "tools",
			"className": "bi bi-tools",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "tornado",
			"title": "tornado",
			"className": "bi bi-tornado",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "train-freight-front",
			"title": "train-freight-front",
			"className": "bi bi-train-freight-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "train-freight-front-fill",
			"title": "train-freight-front-fill",
			"className": "bi bi-train-freight-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "train-front",
			"title": "train-front",
			"className": "bi bi-train-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "train-front-fill",
			"title": "train-front-fill",
			"className": "bi bi-train-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "train-lightrail-front",
			"title": "train-lightrail-front",
			"className": "bi bi-train-lightrail-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "train-lightrail-front-fill",
			"title": "train-lightrail-front-fill",
			"className": "bi bi-train-lightrail-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "translate",
			"title": "translate",
			"className": "bi bi-translate",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "transparency",
			"title": "transparency",
			"className": "bi bi-transparency",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "trash",
			"title": "trash",
			"className": "bi bi-trash",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "trash-fill",
			"title": "trash-fill",
			"className": "bi bi-trash-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "trash2",
			"title": "trash2",
			"className": "bi bi-trash2",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "trash2-fill",
			"title": "trash2-fill",
			"className": "bi bi-trash2-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "trash3",
			"title": "trash3",
			"className": "bi bi-trash3",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "trash3-fill",
			"title": "trash3-fill",
			"className": "bi bi-trash3-fill",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "tree",
			"title": "tree",
			"className": "bi bi-tree",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "tree-fill",
			"title": "tree-fill",
			"className": "bi bi-tree-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "trello",
			"title": "trello",
			"className": "bi bi-trello",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "triangle",
			"title": "triangle",
			"className": "bi bi-triangle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "triangle-fill",
			"title": "triangle-fill",
			"className": "bi bi-triangle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "triangle-half",
			"title": "triangle-half",
			"className": "bi bi-triangle-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "trophy",
			"title": "trophy",
			"className": "bi bi-trophy",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "trophy-fill",
			"title": "trophy-fill",
			"className": "bi bi-trophy-fill",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "tropical-storm",
			"title": "tropical-storm",
			"className": "bi bi-tropical-storm",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "truck",
			"title": "truck",
			"className": "bi bi-truck",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "truck-flatbed",
			"title": "truck-flatbed",
			"className": "bi bi-truck-flatbed",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "truck-front",
			"title": "truck-front",
			"className": "bi bi-truck-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "truck-front-fill",
			"title": "truck-front-fill",
			"className": "bi bi-truck-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "tsunami",
			"title": "tsunami",
			"className": "bi bi-tsunami",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "tv",
			"title": "tv",
			"className": "bi bi-tv",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "tv-fill",
			"title": "tv-fill",
			"className": "bi bi-tv-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "twitch",
			"title": "twitch",
			"className": "bi bi-twitch",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "twitter",
			"title": "twitter",
			"className": "bi bi-twitter",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "twitter-x",
			"title": "twitter-x",
			"className": "bi bi-twitter-x",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "type",
			"title": "type",
			"className": "bi bi-type",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-bold",
			"title": "type-bold",
			"className": "bi bi-type-bold",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-h1",
			"title": "type-h1",
			"className": "bi bi-type-h1",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-h2",
			"title": "type-h2",
			"className": "bi bi-type-h2",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-h3",
			"title": "type-h3",
			"className": "bi bi-type-h3",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-h4",
			"title": "type-h4",
			"className": "bi bi-type-h4",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-h5",
			"title": "type-h5",
			"className": "bi bi-type-h5",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-h6",
			"title": "type-h6",
			"className": "bi bi-type-h6",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-italic",
			"title": "type-italic",
			"className": "bi bi-type-italic",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-strikethrough",
			"title": "type-strikethrough",
			"className": "bi bi-type-strikethrough",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "type-underline",
			"title": "type-underline",
			"className": "bi bi-type-underline",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "ubuntu",
			"title": "ubuntu",
			"className": "bi bi-ubuntu",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "ui-checks",
			"title": "ui-checks",
			"className": "bi bi-ui-checks",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "ui-checks-grid",
			"title": "ui-checks-grid",
			"className": "bi bi-ui-checks-grid",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "ui-radios",
			"title": "ui-radios",
			"className": "bi bi-ui-radios",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "ui-radios-grid",
			"title": "ui-radios-grid",
			"className": "bi bi-ui-radios-grid",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "umbrella",
			"title": "umbrella",
			"className": "bi bi-umbrella",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "umbrella-fill",
			"title": "umbrella-fill",
			"className": "bi bi-umbrella-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "unindent",
			"title": "unindent",
			"className": "bi bi-unindent",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "union",
			"title": "union",
			"className": "bi bi-union",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "unity",
			"title": "unity",
			"className": "bi bi-unity",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "universal-access",
			"title": "universal-access",
			"className": "bi bi-universal-access",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "universal-access-circle",
			"title": "universal-access-circle",
			"className": "bi bi-universal-access-circle",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "unlock",
			"title": "unlock",
			"className": "bi bi-unlock",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "unlock-fill",
			"title": "unlock-fill",
			"className": "bi bi-unlock-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "upc",
			"title": "upc",
			"className": "bi bi-upc",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "upc-scan",
			"title": "upc-scan",
			"className": "bi bi-upc-scan",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "upload",
			"title": "upload",
			"className": "bi bi-upload",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "usb",
			"title": "usb",
			"className": "bi bi-usb",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-c",
			"title": "usb-c",
			"className": "bi bi-usb-c",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-c-fill",
			"title": "usb-c-fill",
			"className": "bi bi-usb-c-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-drive",
			"title": "usb-drive",
			"className": "bi bi-usb-drive",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-drive-fill",
			"title": "usb-drive-fill",
			"className": "bi bi-usb-drive-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-fill",
			"title": "usb-fill",
			"className": "bi bi-usb-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-micro",
			"title": "usb-micro",
			"className": "bi bi-usb-micro",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-micro-fill",
			"title": "usb-micro-fill",
			"className": "bi bi-usb-micro-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-mini",
			"title": "usb-mini",
			"className": "bi bi-usb-mini",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-mini-fill",
			"title": "usb-mini-fill",
			"className": "bi bi-usb-mini-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-plug",
			"title": "usb-plug",
			"className": "bi bi-usb-plug",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-plug-fill",
			"title": "usb-plug-fill",
			"className": "bi bi-usb-plug-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "usb-symbol",
			"title": "usb-symbol",
			"className": "bi bi-usb-symbol",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "valentine",
			"title": "valentine",
			"className": "bi bi-valentine",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "valentine2",
			"title": "valentine2",
			"className": "bi bi-valentine2",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "vector-pen",
			"title": "vector-pen",
			"className": "bi bi-vector-pen",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "view-list",
			"title": "view-list",
			"className": "bi bi-view-list",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "view-stacked",
			"title": "view-stacked",
			"className": "bi bi-view-stacked",
			"type": "bi",
			"categories": [
				"ui and keyboard"
			]
		},
		{
			"name": "vignette",
			"title": "vignette",
			"className": "bi bi-vignette",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "vimeo",
			"title": "vimeo",
			"className": "bi bi-vimeo",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "vinyl",
			"title": "vinyl",
			"className": "bi bi-vinyl",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "vinyl-fill",
			"title": "vinyl-fill",
			"className": "bi bi-vinyl-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "virus",
			"title": "virus",
			"className": "bi bi-virus",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "virus2",
			"title": "virus2",
			"className": "bi bi-virus2",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "voicemail",
			"title": "voicemail",
			"className": "bi bi-voicemail",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "volume-down",
			"title": "volume-down",
			"className": "bi bi-volume-down",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-down-fill",
			"title": "volume-down-fill",
			"className": "bi bi-volume-down-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-mute",
			"title": "volume-mute",
			"className": "bi bi-volume-mute",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-mute-fill",
			"title": "volume-mute-fill",
			"className": "bi bi-volume-mute-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-off",
			"title": "volume-off",
			"className": "bi bi-volume-off",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-off-fill",
			"title": "volume-off-fill",
			"className": "bi bi-volume-off-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-up",
			"title": "volume-up",
			"className": "bi bi-volume-up",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "volume-up-fill",
			"title": "volume-up-fill",
			"className": "bi bi-volume-up-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "vr",
			"title": "vr",
			"className": "bi bi-vr",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "wallet",
			"title": "wallet",
			"className": "bi bi-wallet",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "wallet-fill",
			"title": "wallet-fill",
			"className": "bi bi-wallet-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "wallet2",
			"title": "wallet2",
			"className": "bi bi-wallet2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "watch",
			"title": "watch",
			"className": "bi bi-watch",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "water",
			"title": "water",
			"className": "bi bi-water",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "webcam",
			"title": "webcam",
			"className": "bi bi-webcam",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "webcam-fill",
			"title": "webcam-fill",
			"className": "bi bi-webcam-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "wechat",
			"title": "wechat",
			"className": "bi bi-wechat",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "whatsapp",
			"title": "whatsapp",
			"className": "bi bi-whatsapp",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "wifi",
			"title": "wifi",
			"className": "bi bi-wifi",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "wifi-1",
			"title": "wifi-1",
			"className": "bi bi-wifi-1",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "wifi-2",
			"title": "wifi-2",
			"className": "bi bi-wifi-2",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "wifi-off",
			"title": "wifi-off",
			"className": "bi bi-wifi-off",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "wikipedia",
			"title": "wikipedia",
			"className": "bi bi-wikipedia",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "wind",
			"title": "wind",
			"className": "bi bi-wind",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "window",
			"title": "window",
			"className": "bi bi-window",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "window-dash",
			"title": "window-dash",
			"className": "bi bi-window-dash",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-desktop",
			"title": "window-desktop",
			"className": "bi bi-window-desktop",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-dock",
			"title": "window-dock",
			"className": "bi bi-window-dock",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-fullscreen",
			"title": "window-fullscreen",
			"className": "bi bi-window-fullscreen",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-plus",
			"title": "window-plus",
			"className": "bi bi-window-plus",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-sidebar",
			"title": "window-sidebar",
			"className": "bi bi-window-sidebar",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-split",
			"title": "window-split",
			"className": "bi bi-window-split",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-stack",
			"title": "window-stack",
			"className": "bi bi-window-stack",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "window-x",
			"title": "window-x",
			"className": "bi bi-window-x",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "windows",
			"title": "windows",
			"className": "bi bi-windows",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "wordpress",
			"title": "wordpress",
			"className": "bi bi-wordpress",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "wrench",
			"title": "wrench",
			"className": "bi bi-wrench",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "wrench-adjustable",
			"title": "wrench-adjustable",
			"className": "bi bi-wrench-adjustable",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "wrench-adjustable-circle",
			"title": "wrench-adjustable-circle",
			"className": "bi bi-wrench-adjustable-circle",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "wrench-adjustable-circle-fill",
			"title": "wrench-adjustable-circle-fill",
			"className": "bi bi-wrench-adjustable-circle-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "x",
			"title": "x",
			"className": "bi bi-x",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-circle",
			"title": "x-circle",
			"className": "bi bi-x-circle",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-circle-fill",
			"title": "x-circle-fill",
			"className": "bi bi-x-circle-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-diamond",
			"title": "x-diamond",
			"className": "bi bi-x-diamond",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-diamond-fill",
			"title": "x-diamond-fill",
			"className": "bi bi-x-diamond-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-lg",
			"title": "x-lg",
			"className": "bi bi-x-lg",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-octagon",
			"title": "x-octagon",
			"className": "bi bi-x-octagon",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-octagon-fill",
			"title": "x-octagon-fill",
			"className": "bi bi-x-octagon-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-square",
			"title": "x-square",
			"className": "bi bi-x-square",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "x-square-fill",
			"title": "x-square-fill",
			"className": "bi bi-x-square-fill",
			"type": "bi",
			"categories": [
				"alerts, warnings, and signs"
			]
		},
		{
			"name": "xbox",
			"title": "xbox",
			"className": "bi bi-xbox",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "yelp",
			"title": "yelp",
			"className": "bi bi-yelp",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "yin-yang",
			"title": "yin-yang",
			"className": "bi bi-yin-yang",
			"type": "bi",
			"categories": [
				"real world"
			]
		},
		{
			"name": "youtube",
			"title": "youtube",
			"className": "bi bi-youtube",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "zoom-in",
			"title": "zoom-in",
			"className": "bi bi-zoom-in",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "zoom-out",
			"title": "zoom-out",
			"className": "bi bi-zoom-out",
			"type": "bi",
			"categories": [
				"graphics"
			]
		}
	,{
            "name": "bi-0-square-fill",
            "title": "0 Square Fill",
            "className": "bi bi-0-square-fill",
            "type": "bi",
            "categories": [
                "numbers"
            ]
        },
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
