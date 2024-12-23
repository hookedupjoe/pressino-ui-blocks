
export function getIconEl({iconname, icontype, iconclass}){
    let tmpClasses = iconname || iconclass || '';

    if( icontype == 'fa' ){
        if( iconclass ){
            return <span class={'fa-solid ' + tmpClasses}></span>;
        } else {
            return <span class={'icon faicon fa-solid ' + tmpClasses}></span>;
        }
    } else if( icontype == 'dash' ){
        return <span class={'icon dashicons ' + tmpClasses }></span>;
    } else if( icontype == 'bi' ){
        return <span class={'icon ' + tmpClasses }></span>;
    } else {
        return <i class={'icon  ' + tmpClasses}></i>;
    }
}

export const classIconIndex = {
	"icons":[
		{
			"name": "bi1",
			"title": "0-square-fill",
			"className": "bi bi-0-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi2",
			"title": "1-circle",
			"className": "bi bi-1-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi3",
			"title": "1-circle-fill",
			"className": "bi bi-1-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi4",
			"title": "1-square",
			"className": "bi bi-1-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi5",
			"title": "1-square-fill",
			"className": "bi bi-1-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi6",
			"title": "123",
			"className": "bi bi-123",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi7",
			"title": "2-circle",
			"className": "bi bi-2-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi8",
			"title": "2-circle-fill",
			"className": "bi bi-2-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi9",
			"title": "2-square",
			"className": "bi bi-2-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi10",
			"title": "2-square-fill",
			"className": "bi bi-2-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi11",
			"title": "3-circle",
			"className": "bi bi-3-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi12",
			"title": "3-circle-fill",
			"className": "bi bi-3-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi13",
			"title": "3-square",
			"className": "bi bi-3-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi14",
			"title": "3-square-fill",
			"className": "bi bi-3-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi15",
			"title": "4-circle",
			"className": "bi bi-4-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi16",
			"title": "4-circle-fill",
			"className": "bi bi-4-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi17",
			"title": "4-square",
			"className": "bi bi-4-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi18",
			"title": "4-square-fill",
			"className": "bi bi-4-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi19",
			"title": "5-circle",
			"className": "bi bi-5-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi20",
			"title": "5-circle-fill",
			"className": "bi bi-5-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi21",
			"title": "5-square",
			"className": "bi bi-5-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi22",
			"title": "5-square-fill",
			"className": "bi bi-5-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi23",
			"title": "6-circle",
			"className": "bi bi-6-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi24",
			"title": "6-circle-fill",
			"className": "bi bi-6-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi25",
			"title": "6-square",
			"className": "bi bi-6-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi26",
			"title": "6-square-fill",
			"className": "bi bi-6-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi27",
			"title": "7-circle",
			"className": "bi bi-7-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi28",
			"title": "7-circle-fill",
			"className": "bi bi-7-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi29",
			"title": "7-square",
			"className": "bi bi-7-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi30",
			"title": "7-square-fill",
			"className": "bi bi-7-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi31",
			"title": "8-circle",
			"className": "bi bi-8-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi32",
			"title": "8-circle-fill",
			"className": "bi bi-8-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi33",
			"title": "8-square",
			"className": "bi bi-8-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi34",
			"title": "8-square-fill",
			"className": "bi bi-8-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi35",
			"title": "9-circle",
			"className": "bi bi-9-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi36",
			"title": "9-circle-fill",
			"className": "bi bi-9-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi37",
			"title": "9-square",
			"className": "bi bi-9-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi38",
			"title": "9-square-fill",
			"className": "bi bi-9-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi39",
			"title": "activity",
			"className": "bi bi-activity",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi40",
			"title": "airplane",
			"className": "bi bi-airplane",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi41",
			"title": "airplane-engines",
			"className": "bi bi-airplane-engines",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi42",
			"title": "airplane-engines-fill",
			"className": "bi bi-airplane-engines-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi43",
			"title": "airplane-fill",
			"className": "bi bi-airplane-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi44",
			"title": "alarm",
			"className": "bi bi-alarm",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi45",
			"title": "alarm-fill",
			"className": "bi bi-alarm-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi46",
			"title": "alexa",
			"className": "bi bi-alexa",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi47",
			"title": "align-bottom",
			"className": "bi bi-align-bottom",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi48",
			"title": "align-center",
			"className": "bi bi-align-center",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi49",
			"title": "align-end",
			"className": "bi bi-align-end",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi50",
			"title": "align-middle",
			"className": "bi bi-align-middle",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi51",
			"title": "align-start",
			"className": "bi bi-align-start",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi52",
			"title": "align-top",
			"className": "bi bi-align-top",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi53",
			"title": "alipay",
			"className": "bi bi-alipay",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi54",
			"title": "alphabet",
			"className": "bi bi-alphabet",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi55",
			"title": "alphabet-uppercase",
			"className": "bi bi-alphabet-uppercase",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi56",
			"title": "alt",
			"className": "bi bi-alt",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi57",
			"title": "amazon",
			"className": "bi bi-amazon",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi58",
			"title": "amd",
			"className": "bi bi-amd",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi59",
			"title": "android",
			"className": "bi bi-android",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi60",
			"title": "android2",
			"className": "bi bi-android2",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi61",
			"title": "app",
			"className": "bi bi-app",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi62",
			"title": "app-indicator",
			"className": "bi bi-app-indicator",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi63",
			"title": "apple",
			"className": "bi bi-apple",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi64",
			"title": "archive",
			"className": "bi bi-archive",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi65",
			"title": "archive-fill",
			"className": "bi bi-archive-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi66",
			"title": "arrow-90deg-down",
			"className": "bi bi-arrow-90deg-down",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi67",
			"title": "arrow-90deg-left",
			"className": "bi bi-arrow-90deg-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi68",
			"title": "arrow-90deg-right",
			"className": "bi bi-arrow-90deg-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi69",
			"title": "arrow-90deg-up",
			"className": "bi bi-arrow-90deg-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi70",
			"title": "arrow-bar-down",
			"className": "bi bi-arrow-bar-down",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi71",
			"title": "arrow-bar-left",
			"className": "bi bi-arrow-bar-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi72",
			"title": "arrow-bar-right",
			"className": "bi bi-arrow-bar-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi73",
			"title": "arrow-bar-up",
			"className": "bi bi-arrow-bar-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi74",
			"title": "arrow-clockwise",
			"className": "bi bi-arrow-clockwise",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi75",
			"title": "arrow-counterclockwise",
			"className": "bi bi-arrow-counterclockwise",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi76",
			"title": "arrow-down",
			"className": "bi bi-arrow-down",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi77",
			"title": "arrow-down-circle",
			"className": "bi bi-arrow-down-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi78",
			"title": "arrow-down-circle-fill",
			"className": "bi bi-arrow-down-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi79",
			"title": "arrow-down-left-circle",
			"className": "bi bi-arrow-down-left-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi80",
			"title": "arrow-down-left-circle-fill",
			"className": "bi bi-arrow-down-left-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi81",
			"title": "arrow-down-left-square",
			"className": "bi bi-arrow-down-left-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi82",
			"title": "arrow-down-left-square-fill",
			"className": "bi bi-arrow-down-left-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi83",
			"title": "arrow-down-right-circle",
			"className": "bi bi-arrow-down-right-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi84",
			"title": "arrow-down-right-circle-fill",
			"className": "bi bi-arrow-down-right-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi85",
			"title": "arrow-down-right-square",
			"className": "bi bi-arrow-down-right-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi86",
			"title": "arrow-down-right-square-fill",
			"className": "bi bi-arrow-down-right-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi87",
			"title": "arrow-down-square",
			"className": "bi bi-arrow-down-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi88",
			"title": "arrow-down-square-fill",
			"className": "bi bi-arrow-down-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi89",
			"title": "arrow-down-left",
			"className": "bi bi-arrow-down-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi90",
			"title": "arrow-down-right",
			"className": "bi bi-arrow-down-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi91",
			"title": "arrow-down-short",
			"className": "bi bi-arrow-down-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi92",
			"title": "arrow-down-up",
			"className": "bi bi-arrow-down-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi93",
			"title": "arrow-left",
			"className": "bi bi-arrow-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi94",
			"title": "arrow-left-circle",
			"className": "bi bi-arrow-left-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi95",
			"title": "arrow-left-circle-fill",
			"className": "bi bi-arrow-left-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi96",
			"title": "arrow-left-square",
			"className": "bi bi-arrow-left-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi97",
			"title": "arrow-left-square-fill",
			"className": "bi bi-arrow-left-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi98",
			"title": "arrow-left-right",
			"className": "bi bi-arrow-left-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi99",
			"title": "arrow-left-short",
			"className": "bi bi-arrow-left-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi100",
			"title": "arrow-repeat",
			"className": "bi bi-arrow-repeat",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi101",
			"title": "arrow-return-left",
			"className": "bi bi-arrow-return-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi102",
			"title": "arrow-return-right",
			"className": "bi bi-arrow-return-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi103",
			"title": "arrow-right",
			"className": "bi bi-arrow-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi104",
			"title": "arrow-right-circle",
			"className": "bi bi-arrow-right-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi105",
			"title": "arrow-right-circle-fill",
			"className": "bi bi-arrow-right-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi106",
			"title": "arrow-right-square",
			"className": "bi bi-arrow-right-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi107",
			"title": "arrow-right-square-fill",
			"className": "bi bi-arrow-right-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi108",
			"title": "arrow-right-short",
			"className": "bi bi-arrow-right-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi109",
			"title": "arrow-through-heart",
			"className": "bi bi-arrow-through-heart",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi110",
			"title": "arrow-through-heart-fill",
			"className": "bi bi-arrow-through-heart-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi111",
			"title": "arrow-up",
			"className": "bi bi-arrow-up",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi112",
			"title": "arrow-up-circle",
			"className": "bi bi-arrow-up-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi113",
			"title": "arrow-up-circle-fill",
			"className": "bi bi-arrow-up-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi114",
			"title": "arrow-up-left-circle",
			"className": "bi bi-arrow-up-left-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi115",
			"title": "arrow-up-left-circle-fill",
			"className": "bi bi-arrow-up-left-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi116",
			"title": "arrow-up-left-square",
			"className": "bi bi-arrow-up-left-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi117",
			"title": "arrow-up-left-square-fill",
			"className": "bi bi-arrow-up-left-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi118",
			"title": "arrow-up-right-circle",
			"className": "bi bi-arrow-up-right-circle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi119",
			"title": "arrow-up-right-circle-fill",
			"className": "bi bi-arrow-up-right-circle-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi120",
			"title": "arrow-up-right-square",
			"className": "bi bi-arrow-up-right-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi121",
			"title": "arrow-up-right-square-fill",
			"className": "bi bi-arrow-up-right-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi122",
			"title": "arrow-up-square",
			"className": "bi bi-arrow-up-square",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi123",
			"title": "arrow-up-square-fill",
			"className": "bi bi-arrow-up-square-fill",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi124",
			"title": "arrow-up-left",
			"className": "bi bi-arrow-up-left",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi125",
			"title": "arrow-up-right",
			"className": "bi bi-arrow-up-right",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi126",
			"title": "arrow-up-short",
			"className": "bi bi-arrow-up-short",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi127",
			"title": "arrows",
			"className": "bi bi-arrows",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi128",
			"title": "arrows-angle-contract",
			"className": "bi bi-arrows-angle-contract",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi129",
			"title": "arrows-angle-expand",
			"className": "bi bi-arrows-angle-expand",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi130",
			"title": "arrows-collapse",
			"className": "bi bi-arrows-collapse",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi131",
			"title": "arrows-collapse-vertical",
			"className": "bi bi-arrows-collapse-vertical",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi132",
			"title": "arrows-expand",
			"className": "bi bi-arrows-expand",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi133",
			"title": "arrows-expand-vertical",
			"className": "bi bi-arrows-expand-vertical",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi134",
			"title": "arrows-fullscreen",
			"className": "bi bi-arrows-fullscreen",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi135",
			"title": "arrows-move",
			"className": "bi bi-arrows-move",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi136",
			"title": "arrows-vertical",
			"className": "bi bi-arrows-vertical",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi137",
			"title": "aspect-ratio",
			"className": "bi bi-aspect-ratio",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi138",
			"title": "aspect-ratio-fill",
			"className": "bi bi-aspect-ratio-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi139",
			"title": "asterisk",
			"className": "bi bi-asterisk",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi140",
			"title": "at",
			"className": "bi bi-at",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi141",
			"title": "award",
			"className": "bi bi-award",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi142",
			"title": "award-fill",
			"className": "bi bi-award-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi143",
			"title": "back",
			"className": "bi bi-back",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi144",
			"title": "backpack",
			"className": "bi bi-backpack",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi145",
			"title": "backpack-fill",
			"className": "bi bi-backpack-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi146",
			"title": "backpack2",
			"className": "bi bi-backpack2",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi147",
			"title": "backpack2-fill",
			"className": "bi bi-backpack2-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi148",
			"title": "backpack3",
			"className": "bi bi-backpack3",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi149",
			"title": "backpack3-fill",
			"className": "bi bi-backpack3-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi150",
			"title": "backpack4",
			"className": "bi bi-backpack4",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi151",
			"title": "backpack4-fill",
			"className": "bi bi-backpack4-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi152",
			"title": "backspace",
			"className": "bi bi-backspace",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi153",
			"title": "backspace-fill",
			"className": "bi bi-backspace-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi154",
			"title": "backspace-reverse",
			"className": "bi bi-backspace-reverse",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi155",
			"title": "backspace-reverse-fill",
			"className": "bi bi-backspace-reverse-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi156",
			"title": "badge-3d",
			"className": "bi bi-badge-3d",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi157",
			"title": "badge-3d-fill",
			"className": "bi bi-badge-3d-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi158",
			"title": "badge-4k",
			"className": "bi bi-badge-4k",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi159",
			"title": "badge-4k-fill",
			"className": "bi bi-badge-4k-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi160",
			"title": "badge-8k",
			"className": "bi bi-badge-8k",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi161",
			"title": "badge-8k-fill",
			"className": "bi bi-badge-8k-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi162",
			"title": "badge-ad",
			"className": "bi bi-badge-ad",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi163",
			"title": "badge-ad-fill",
			"className": "bi bi-badge-ad-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi164",
			"title": "badge-ar",
			"className": "bi bi-badge-ar",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi165",
			"title": "badge-ar-fill",
			"className": "bi bi-badge-ar-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi166",
			"title": "badge-cc",
			"className": "bi bi-badge-cc",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi167",
			"title": "badge-cc-fill",
			"className": "bi bi-badge-cc-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi168",
			"title": "badge-hd",
			"className": "bi bi-badge-hd",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi169",
			"title": "badge-hd-fill",
			"className": "bi bi-badge-hd-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi170",
			"title": "badge-sd",
			"className": "bi bi-badge-sd",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi171",
			"title": "badge-sd-fill",
			"className": "bi bi-badge-sd-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi172",
			"title": "badge-tm",
			"className": "bi bi-badge-tm",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi173",
			"title": "badge-tm-fill",
			"className": "bi bi-badge-tm-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi174",
			"title": "badge-vo",
			"className": "bi bi-badge-vo",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi175",
			"title": "badge-vo-fill",
			"className": "bi bi-badge-vo-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi176",
			"title": "badge-vr",
			"className": "bi bi-badge-vr",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi177",
			"title": "badge-vr-fill",
			"className": "bi bi-badge-vr-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi178",
			"title": "badge-wc",
			"className": "bi bi-badge-wc",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi179",
			"title": "badge-wc-fill",
			"className": "bi bi-badge-wc-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi180",
			"title": "bag",
			"className": "bi bi-bag",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi181",
			"title": "bag-check",
			"className": "bi bi-bag-check",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi182",
			"title": "bag-check-fill",
			"className": "bi bi-bag-check-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi183",
			"title": "bag-dash",
			"className": "bi bi-bag-dash",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi184",
			"title": "bag-dash-fill",
			"className": "bi bi-bag-dash-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi185",
			"title": "bag-fill",
			"className": "bi bi-bag-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi186",
			"title": "bag-heart",
			"className": "bi bi-bag-heart",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi187",
			"title": "bag-heart-fill",
			"className": "bi bi-bag-heart-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi188",
			"title": "bag-plus",
			"className": "bi bi-bag-plus",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi189",
			"title": "bag-plus-fill",
			"className": "bi bi-bag-plus-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi190",
			"title": "bag-x",
			"className": "bi bi-bag-x",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi191",
			"title": "bag-x-fill",
			"className": "bi bi-bag-x-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi192",
			"title": "balloon",
			"className": "bi bi-balloon",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi193",
			"title": "balloon-fill",
			"className": "bi bi-balloon-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi194",
			"title": "balloon-heart",
			"className": "bi bi-balloon-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi195",
			"title": "balloon-heart-fill",
			"className": "bi bi-balloon-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi196",
			"title": "ban",
			"className": "bi bi-ban",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi197",
			"title": "ban-fill",
			"className": "bi bi-ban-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi198",
			"title": "bandaid",
			"className": "bi bi-bandaid",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi199",
			"title": "bandaid-fill",
			"className": "bi bi-bandaid-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi200",
			"title": "bank",
			"className": "bi bi-bank",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi201",
			"title": "bank2",
			"className": "bi bi-bank2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi202",
			"title": "bar-chart",
			"className": "bi bi-bar-chart",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi203",
			"title": "bar-chart-fill",
			"className": "bi bi-bar-chart-fill",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi204",
			"title": "bar-chart-line",
			"className": "bi bi-bar-chart-line",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi205",
			"title": "bar-chart-line-fill",
			"className": "bi bi-bar-chart-line-fill",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi206",
			"title": "bar-chart-steps",
			"className": "bi bi-bar-chart-steps",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi207",
			"title": "basket",
			"className": "bi bi-basket",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi208",
			"title": "basket-fill",
			"className": "bi bi-basket-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi209",
			"title": "basket2",
			"className": "bi bi-basket2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi210",
			"title": "basket2-fill",
			"className": "bi bi-basket2-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi211",
			"title": "basket3",
			"className": "bi bi-basket3",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi212",
			"title": "basket3-fill",
			"className": "bi bi-basket3-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi213",
			"title": "battery",
			"className": "bi bi-battery",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi214",
			"title": "battery-charging",
			"className": "bi bi-battery-charging",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi215",
			"title": "battery-full",
			"className": "bi bi-battery-full",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi216",
			"title": "battery-half",
			"className": "bi bi-battery-half",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi217",
			"title": "behance",
			"className": "bi bi-behance",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi218",
			"title": "bell",
			"className": "bi bi-bell",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi219",
			"title": "bell-fill",
			"className": "bi bi-bell-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi220",
			"title": "bell-slash",
			"className": "bi bi-bell-slash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi221",
			"title": "bell-slash-fill",
			"className": "bi bi-bell-slash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi222",
			"title": "bezier",
			"className": "bi bi-bezier",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi223",
			"title": "bezier2",
			"className": "bi bi-bezier2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi224",
			"title": "bicycle",
			"className": "bi bi-bicycle",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi225",
			"title": "bing",
			"className": "bi bi-bing",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi226",
			"title": "binoculars",
			"className": "bi bi-binoculars",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi227",
			"title": "binoculars-fill",
			"className": "bi bi-binoculars-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi228",
			"title": "blockquote-left",
			"className": "bi bi-blockquote-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi229",
			"title": "blockquote-right",
			"className": "bi bi-blockquote-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi230",
			"title": "bluetooth",
			"className": "bi bi-bluetooth",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi231",
			"title": "body-text",
			"className": "bi bi-body-text",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi232",
			"title": "book",
			"className": "bi bi-book",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi233",
			"title": "book-fill",
			"className": "bi bi-book-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi234",
			"title": "book-half",
			"className": "bi bi-book-half",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi235",
			"title": "bookmark",
			"className": "bi bi-bookmark",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi236",
			"title": "bookmark-check",
			"className": "bi bi-bookmark-check",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi237",
			"title": "bookmark-check-fill",
			"className": "bi bi-bookmark-check-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi238",
			"title": "bookmark-dash",
			"className": "bi bi-bookmark-dash",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi239",
			"title": "bookmark-dash-fill",
			"className": "bi bi-bookmark-dash-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi240",
			"title": "bookmark-fill",
			"className": "bi bi-bookmark-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi241",
			"title": "bookmark-heart",
			"className": "bi bi-bookmark-heart",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi242",
			"title": "bookmark-heart-fill",
			"className": "bi bi-bookmark-heart-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi243",
			"title": "bookmark-plus",
			"className": "bi bi-bookmark-plus",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi244",
			"title": "bookmark-plus-fill",
			"className": "bi bi-bookmark-plus-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi245",
			"title": "bookmark-star",
			"className": "bi bi-bookmark-star",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi246",
			"title": "bookmark-star-fill",
			"className": "bi bi-bookmark-star-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi247",
			"title": "bookmark-x",
			"className": "bi bi-bookmark-x",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi248",
			"title": "bookmark-x-fill",
			"className": "bi bi-bookmark-x-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi249",
			"title": "bookmarks",
			"className": "bi bi-bookmarks",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi250",
			"title": "bookmarks-fill",
			"className": "bi bi-bookmarks-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi251",
			"title": "bookshelf",
			"className": "bi bi-bookshelf",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi252",
			"title": "boombox",
			"className": "bi bi-boombox",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi253",
			"title": "boombox-fill",
			"className": "bi bi-boombox-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi254",
			"title": "bootstrap",
			"className": "bi bi-bootstrap",
			"type": "bi",
			"categories": [
				"bootstrap"
			]
		},
		{
			"name": "bi255",
			"title": "bootstrap-fill",
			"className": "bi bi-bootstrap-fill",
			"type": "bi",
			"categories": [
				"bootstrap"
			]
		},
		{
			"name": "bi256",
			"title": "bootstrap-reboot",
			"className": "bi bi-bootstrap-reboot",
			"type": "bi",
			"categories": [
				"bootstrap"
			]
		},
		{
			"name": "bi257",
			"title": "border",
			"className": "bi bi-border",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi258",
			"title": "border-all",
			"className": "bi bi-border-all",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi259",
			"title": "border-bottom",
			"className": "bi bi-border-bottom",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi260",
			"title": "border-center",
			"className": "bi bi-border-center",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi261",
			"title": "border-inner",
			"className": "bi bi-border-inner",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi262",
			"title": "border-left",
			"className": "bi bi-border-left",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi263",
			"title": "border-middle",
			"className": "bi bi-border-middle",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi264",
			"title": "border-outer",
			"className": "bi bi-border-outer",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi265",
			"title": "border-right",
			"className": "bi bi-border-right",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi266",
			"title": "border-style",
			"className": "bi bi-border-style",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi267",
			"title": "border-top",
			"className": "bi bi-border-top",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi268",
			"title": "border-width",
			"className": "bi bi-border-width",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi269",
			"title": "bounding-box",
			"className": "bi bi-bounding-box",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi270",
			"title": "bounding-box-circles",
			"className": "bi bi-bounding-box-circles",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi271",
			"title": "box",
			"className": "bi bi-box",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi272",
			"title": "box-arrow-down-left",
			"className": "bi bi-box-arrow-down-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi273",
			"title": "box-arrow-down-right",
			"className": "bi bi-box-arrow-down-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi274",
			"title": "box-arrow-down",
			"className": "bi bi-box-arrow-down",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi275",
			"title": "box-arrow-in-down",
			"className": "bi bi-box-arrow-in-down",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi276",
			"title": "box-arrow-in-down-left",
			"className": "bi bi-box-arrow-in-down-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi277",
			"title": "box-arrow-in-down-right",
			"className": "bi bi-box-arrow-in-down-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi278",
			"title": "box-arrow-in-left",
			"className": "bi bi-box-arrow-in-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi279",
			"title": "box-arrow-in-right",
			"className": "bi bi-box-arrow-in-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi280",
			"title": "box-arrow-in-up",
			"className": "bi bi-box-arrow-in-up",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi281",
			"title": "box-arrow-in-up-left",
			"className": "bi bi-box-arrow-in-up-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi282",
			"title": "box-arrow-in-up-right",
			"className": "bi bi-box-arrow-in-up-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi283",
			"title": "box-arrow-left",
			"className": "bi bi-box-arrow-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi284",
			"title": "box-arrow-right",
			"className": "bi bi-box-arrow-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi285",
			"title": "box-arrow-up",
			"className": "bi bi-box-arrow-up",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi286",
			"title": "box-arrow-up-left",
			"className": "bi bi-box-arrow-up-left",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi287",
			"title": "box-arrow-up-right",
			"className": "bi bi-box-arrow-up-right",
			"type": "bi",
			"categories": [
				"box arrows"
			]
		},
		{
			"name": "bi288",
			"title": "box-fill",
			"className": "bi bi-box-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi289",
			"title": "box-seam",
			"className": "bi bi-box-seam",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi290",
			"title": "box-seam-fill",
			"className": "bi bi-box-seam-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi291",
			"title": "box2",
			"className": "bi bi-box2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi292",
			"title": "box2-fill",
			"className": "bi bi-box2-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi293",
			"title": "box2-heart",
			"className": "bi bi-box2-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi294",
			"title": "box2-heart-fill",
			"className": "bi bi-box2-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi295",
			"title": "boxes",
			"className": "bi bi-boxes",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi296",
			"title": "braces",
			"className": "bi bi-braces",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi297",
			"title": "braces-asterisk",
			"className": "bi bi-braces-asterisk",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi298",
			"title": "bricks",
			"className": "bi bi-bricks",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi299",
			"title": "briefcase",
			"className": "bi bi-briefcase",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi300",
			"title": "briefcase-fill",
			"className": "bi bi-briefcase-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi301",
			"title": "brightness-alt-high",
			"className": "bi bi-brightness-alt-high",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi302",
			"title": "brightness-alt-high-fill",
			"className": "bi bi-brightness-alt-high-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi303",
			"title": "brightness-alt-low",
			"className": "bi bi-brightness-alt-low",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi304",
			"title": "brightness-alt-low-fill",
			"className": "bi bi-brightness-alt-low-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi305",
			"title": "brightness-high",
			"className": "bi bi-brightness-high",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi306",
			"title": "brightness-high-fill",
			"className": "bi bi-brightness-high-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi307",
			"title": "brightness-low",
			"className": "bi bi-brightness-low",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi308",
			"title": "brightness-low-fill",
			"className": "bi bi-brightness-low-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi309",
			"title": "brilliance",
			"className": "bi bi-brilliance",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi310",
			"title": "broadcast",
			"className": "bi bi-broadcast",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi311",
			"title": "broadcast-pin",
			"className": "bi bi-broadcast-pin",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi312",
			"title": "browser-chrome",
			"className": "bi bi-browser-chrome",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi313",
			"title": "browser-edge",
			"className": "bi bi-browser-edge",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi314",
			"title": "browser-firefox",
			"className": "bi bi-browser-firefox",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi315",
			"title": "browser-safari",
			"className": "bi bi-browser-safari",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi316",
			"title": "brush",
			"className": "bi bi-brush",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi317",
			"title": "brush-fill",
			"className": "bi bi-brush-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi318",
			"title": "bucket",
			"className": "bi bi-bucket",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi319",
			"title": "bucket-fill",
			"className": "bi bi-bucket-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi320",
			"title": "bug",
			"className": "bi bi-bug",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi321",
			"title": "bug-fill",
			"className": "bi bi-bug-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi322",
			"title": "building",
			"className": "bi bi-building",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi323",
			"title": "building-add",
			"className": "bi bi-building-add",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi324",
			"title": "building-check",
			"className": "bi bi-building-check",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi325",
			"title": "building-dash",
			"className": "bi bi-building-dash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi326",
			"title": "building-down",
			"className": "bi bi-building-down",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi327",
			"title": "building-exclamation",
			"className": "bi bi-building-exclamation",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi328",
			"title": "building-fill",
			"className": "bi bi-building-fill",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi329",
			"title": "building-fill-add",
			"className": "bi bi-building-fill-add",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi330",
			"title": "building-fill-check",
			"className": "bi bi-building-fill-check",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi331",
			"title": "building-fill-dash",
			"className": "bi bi-building-fill-dash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi332",
			"title": "building-fill-down",
			"className": "bi bi-building-fill-down",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi333",
			"title": "building-fill-exclamation",
			"className": "bi bi-building-fill-exclamation",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi334",
			"title": "building-fill-gear",
			"className": "bi bi-building-fill-gear",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi335",
			"title": "building-fill-lock",
			"className": "bi bi-building-fill-lock",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi336",
			"title": "building-fill-slash",
			"className": "bi bi-building-fill-slash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi337",
			"title": "building-fill-up",
			"className": "bi bi-building-fill-up",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi338",
			"title": "building-fill-x",
			"className": "bi bi-building-fill-x",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi339",
			"title": "building-gear",
			"className": "bi bi-building-gear",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi340",
			"title": "building-lock",
			"className": "bi bi-building-lock",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi341",
			"title": "building-slash",
			"className": "bi bi-building-slash",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi342",
			"title": "building-up",
			"className": "bi bi-building-up",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi343",
			"title": "building-x",
			"className": "bi bi-building-x",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi344",
			"title": "buildings",
			"className": "bi bi-buildings",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi345",
			"title": "buildings-fill",
			"className": "bi bi-buildings-fill",
			"type": "bi",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "bi346",
			"title": "bullseye",
			"className": "bi bi-bullseye",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi347",
			"title": "bus-front",
			"className": "bi bi-bus-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi348",
			"title": "bus-front-fill",
			"className": "bi bi-bus-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi349",
			"title": "c-circle",
			"className": "bi bi-c-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi350",
			"title": "c-circle-fill",
			"className": "bi bi-c-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi351",
			"title": "c-square",
			"className": "bi bi-c-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi352",
			"title": "c-square-fill",
			"className": "bi bi-c-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi353",
			"title": "cake",
			"className": "bi bi-cake",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi354",
			"title": "cake-fill",
			"className": "bi bi-cake-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi355",
			"title": "cake2",
			"className": "bi bi-cake2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi356",
			"title": "cake2-fill",
			"className": "bi bi-cake2-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi357",
			"title": "calculator",
			"className": "bi bi-calculator",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi358",
			"title": "calculator-fill",
			"className": "bi bi-calculator-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi359",
			"title": "calendar",
			"className": "bi bi-calendar",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi360",
			"title": "calendar-check",
			"className": "bi bi-calendar-check",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi361",
			"title": "calendar-check-fill",
			"className": "bi bi-calendar-check-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi362",
			"title": "calendar-date",
			"className": "bi bi-calendar-date",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi363",
			"title": "calendar-date-fill",
			"className": "bi bi-calendar-date-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi364",
			"title": "calendar-day",
			"className": "bi bi-calendar-day",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi365",
			"title": "calendar-day-fill",
			"className": "bi bi-calendar-day-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi366",
			"title": "calendar-event",
			"className": "bi bi-calendar-event",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi367",
			"title": "calendar-event-fill",
			"className": "bi bi-calendar-event-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi368",
			"title": "calendar-fill",
			"className": "bi bi-calendar-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi369",
			"title": "calendar-heart",
			"className": "bi bi-calendar-heart",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi370",
			"title": "calendar-heart-fill",
			"className": "bi bi-calendar-heart-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi371",
			"title": "calendar-minus",
			"className": "bi bi-calendar-minus",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi372",
			"title": "calendar-minus-fill",
			"className": "bi bi-calendar-minus-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi373",
			"title": "calendar-month",
			"className": "bi bi-calendar-month",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi374",
			"title": "calendar-month-fill",
			"className": "bi bi-calendar-month-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi375",
			"title": "calendar-plus",
			"className": "bi bi-calendar-plus",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi376",
			"title": "calendar-plus-fill",
			"className": "bi bi-calendar-plus-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi377",
			"title": "calendar-range",
			"className": "bi bi-calendar-range",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi378",
			"title": "calendar-range-fill",
			"className": "bi bi-calendar-range-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi379",
			"title": "calendar-week",
			"className": "bi bi-calendar-week",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi380",
			"title": "calendar-week-fill",
			"className": "bi bi-calendar-week-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi381",
			"title": "calendar-x",
			"className": "bi bi-calendar-x",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi382",
			"title": "calendar-x-fill",
			"className": "bi bi-calendar-x-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi383",
			"title": "calendar2",
			"className": "bi bi-calendar2",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi384",
			"title": "calendar2-check",
			"className": "bi bi-calendar2-check",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi385",
			"title": "calendar2-check-fill",
			"className": "bi bi-calendar2-check-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi386",
			"title": "calendar2-date",
			"className": "bi bi-calendar2-date",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi387",
			"title": "calendar2-date-fill",
			"className": "bi bi-calendar2-date-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi388",
			"title": "calendar2-day",
			"className": "bi bi-calendar2-day",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi389",
			"title": "calendar2-day-fill",
			"className": "bi bi-calendar2-day-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi390",
			"title": "calendar2-event",
			"className": "bi bi-calendar2-event",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi391",
			"title": "calendar2-event-fill",
			"className": "bi bi-calendar2-event-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi392",
			"title": "calendar2-fill",
			"className": "bi bi-calendar2-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi393",
			"title": "calendar2-heart",
			"className": "bi bi-calendar2-heart",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi394",
			"title": "calendar2-heart-fill",
			"className": "bi bi-calendar2-heart-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi395",
			"title": "calendar2-minus",
			"className": "bi bi-calendar2-minus",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi396",
			"title": "calendar2-minus-fill",
			"className": "bi bi-calendar2-minus-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi397",
			"title": "calendar2-month",
			"className": "bi bi-calendar2-month",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi398",
			"title": "calendar2-month-fill",
			"className": "bi bi-calendar2-month-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi399",
			"title": "calendar2-plus",
			"className": "bi bi-calendar2-plus",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi400",
			"title": "calendar2-plus-fill",
			"className": "bi bi-calendar2-plus-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi401",
			"title": "calendar2-range",
			"className": "bi bi-calendar2-range",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi402",
			"title": "calendar2-range-fill",
			"className": "bi bi-calendar2-range-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi403",
			"title": "calendar2-week",
			"className": "bi bi-calendar2-week",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi404",
			"title": "calendar2-week-fill",
			"className": "bi bi-calendar2-week-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi405",
			"title": "calendar2-x",
			"className": "bi bi-calendar2-x",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi406",
			"title": "calendar2-x-fill",
			"className": "bi bi-calendar2-x-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi407",
			"title": "calendar3",
			"className": "bi bi-calendar3",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi408",
			"title": "calendar3-event",
			"className": "bi bi-calendar3-event",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi409",
			"title": "calendar3-event-fill",
			"className": "bi bi-calendar3-event-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi410",
			"title": "calendar3-fill",
			"className": "bi bi-calendar3-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi411",
			"title": "calendar3-range",
			"className": "bi bi-calendar3-range",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi412",
			"title": "calendar3-range-fill",
			"className": "bi bi-calendar3-range-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi413",
			"title": "calendar3-week",
			"className": "bi bi-calendar3-week",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi414",
			"title": "calendar3-week-fill",
			"className": "bi bi-calendar3-week-fill",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi415",
			"title": "calendar4",
			"className": "bi bi-calendar4",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi416",
			"title": "calendar4-event",
			"className": "bi bi-calendar4-event",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi417",
			"title": "calendar4-range",
			"className": "bi bi-calendar4-range",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi418",
			"title": "calendar4-week",
			"className": "bi bi-calendar4-week",
			"type": "bi",
			"categories": [
				"time"
			]
		},
		{
			"name": "bi419",
			"title": "camera",
			"className": "bi bi-camera",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi420",
			"title": "camera2",
			"className": "bi bi-camera2",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi421",
			"title": "camera-fill",
			"className": "bi bi-camera-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi422",
			"title": "camera-reels",
			"className": "bi bi-camera-reels",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi423",
			"title": "camera-reels-fill",
			"className": "bi bi-camera-reels-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi424",
			"title": "camera-video",
			"className": "bi bi-camera-video",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi425",
			"title": "camera-video-fill",
			"className": "bi bi-camera-video-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi426",
			"title": "camera-video-off",
			"className": "bi bi-camera-video-off",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi427",
			"title": "camera-video-off-fill",
			"className": "bi bi-camera-video-off-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi428",
			"title": "capslock",
			"className": "bi bi-capslock",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi429",
			"title": "capslock-fill",
			"className": "bi bi-capslock-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi430",
			"title": "capsule",
			"className": "bi bi-capsule",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi431",
			"title": "capsule-pill",
			"className": "bi bi-capsule-pill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi432",
			"title": "car-front",
			"className": "bi bi-car-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi433",
			"title": "car-front-fill",
			"className": "bi bi-car-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi434",
			"title": "card-checklist",
			"className": "bi bi-card-checklist",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi435",
			"title": "card-heading",
			"className": "bi bi-card-heading",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi436",
			"title": "card-image",
			"className": "bi bi-card-image",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi437",
			"title": "card-list",
			"className": "bi bi-card-list",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi438",
			"title": "card-text",
			"className": "bi bi-card-text",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi439",
			"title": "caret-down",
			"className": "bi bi-caret-down",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi440",
			"title": "caret-down-fill",
			"className": "bi bi-caret-down-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi441",
			"title": "caret-down-square",
			"className": "bi bi-caret-down-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi442",
			"title": "caret-down-square-fill",
			"className": "bi bi-caret-down-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi443",
			"title": "caret-left",
			"className": "bi bi-caret-left",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi444",
			"title": "caret-left-fill",
			"className": "bi bi-caret-left-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi445",
			"title": "caret-left-square",
			"className": "bi bi-caret-left-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi446",
			"title": "caret-left-square-fill",
			"className": "bi bi-caret-left-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi447",
			"title": "caret-right",
			"className": "bi bi-caret-right",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi448",
			"title": "caret-right-fill",
			"className": "bi bi-caret-right-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi449",
			"title": "caret-right-square",
			"className": "bi bi-caret-right-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi450",
			"title": "caret-right-square-fill",
			"className": "bi bi-caret-right-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi451",
			"title": "caret-up",
			"className": "bi bi-caret-up",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi452",
			"title": "caret-up-fill",
			"className": "bi bi-caret-up-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi453",
			"title": "caret-up-square",
			"className": "bi bi-caret-up-square",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi454",
			"title": "caret-up-square-fill",
			"className": "bi bi-caret-up-square-fill",
			"type": "bi",
			"categories": [
				"carets"
			]
		},
		{
			"name": "bi455",
			"title": "cart",
			"className": "bi bi-cart",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi456",
			"title": "cart-check",
			"className": "bi bi-cart-check",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi457",
			"title": "cart-check-fill",
			"className": "bi bi-cart-check-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi458",
			"title": "cart-dash",
			"className": "bi bi-cart-dash",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi459",
			"title": "cart-dash-fill",
			"className": "bi bi-cart-dash-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi460",
			"title": "cart-fill",
			"className": "bi bi-cart-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi461",
			"title": "cart-plus",
			"className": "bi bi-cart-plus",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi462",
			"title": "cart-plus-fill",
			"className": "bi bi-cart-plus-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi463",
			"title": "cart-x",
			"className": "bi bi-cart-x",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi464",
			"title": "cart-x-fill",
			"className": "bi bi-cart-x-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi465",
			"title": "cart2",
			"className": "bi bi-cart2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi466",
			"title": "cart3",
			"className": "bi bi-cart3",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi467",
			"title": "cart4",
			"className": "bi bi-cart4",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi468",
			"title": "cash",
			"className": "bi bi-cash",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi469",
			"title": "cash-coin",
			"className": "bi bi-cash-coin",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi470",
			"title": "cash-stack",
			"className": "bi bi-cash-stack",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi471",
			"title": "cassette",
			"className": "bi bi-cassette",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi472",
			"title": "cassette-fill",
			"className": "bi bi-cassette-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi473",
			"title": "cast",
			"className": "bi bi-cast",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi474",
			"title": "cc-circle",
			"className": "bi bi-cc-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi475",
			"title": "cc-circle-fill",
			"className": "bi bi-cc-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi476",
			"title": "cc-square",
			"className": "bi bi-cc-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi477",
			"title": "cc-square-fill",
			"className": "bi bi-cc-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi478",
			"title": "chat",
			"className": "bi bi-chat",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi479",
			"title": "chat-dots",
			"className": "bi bi-chat-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi480",
			"title": "chat-dots-fill",
			"className": "bi bi-chat-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi481",
			"title": "chat-fill",
			"className": "bi bi-chat-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi482",
			"title": "chat-heart",
			"className": "bi bi-chat-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi483",
			"title": "chat-heart-fill",
			"className": "bi bi-chat-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi484",
			"title": "chat-left",
			"className": "bi bi-chat-left",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi485",
			"title": "chat-left-dots",
			"className": "bi bi-chat-left-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi486",
			"title": "chat-left-dots-fill",
			"className": "bi bi-chat-left-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi487",
			"title": "chat-left-fill",
			"className": "bi bi-chat-left-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi488",
			"title": "chat-left-heart",
			"className": "bi bi-chat-left-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi489",
			"title": "chat-left-heart-fill",
			"className": "bi bi-chat-left-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi490",
			"title": "chat-left-quote",
			"className": "bi bi-chat-left-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi491",
			"title": "chat-left-quote-fill",
			"className": "bi bi-chat-left-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi492",
			"title": "chat-left-text",
			"className": "bi bi-chat-left-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi493",
			"title": "chat-left-text-fill",
			"className": "bi bi-chat-left-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi494",
			"title": "chat-quote",
			"className": "bi bi-chat-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi495",
			"title": "chat-quote-fill",
			"className": "bi bi-chat-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi496",
			"title": "chat-right",
			"className": "bi bi-chat-right",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi497",
			"title": "chat-right-dots",
			"className": "bi bi-chat-right-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi498",
			"title": "chat-right-dots-fill",
			"className": "bi bi-chat-right-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi499",
			"title": "chat-right-fill",
			"className": "bi bi-chat-right-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi500",
			"title": "chat-right-heart",
			"className": "bi bi-chat-right-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi501",
			"title": "chat-right-heart-fill",
			"className": "bi bi-chat-right-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi502",
			"title": "chat-right-quote",
			"className": "bi bi-chat-right-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi503",
			"title": "chat-right-quote-fill",
			"className": "bi bi-chat-right-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi504",
			"title": "chat-right-text",
			"className": "bi bi-chat-right-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi505",
			"title": "chat-right-text-fill",
			"className": "bi bi-chat-right-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi506",
			"title": "chat-square",
			"className": "bi bi-chat-square",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi507",
			"title": "chat-square-dots",
			"className": "bi bi-chat-square-dots",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi508",
			"title": "chat-square-dots-fill",
			"className": "bi bi-chat-square-dots-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi509",
			"title": "chat-square-fill",
			"className": "bi bi-chat-square-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi510",
			"title": "chat-square-heart",
			"className": "bi bi-chat-square-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi511",
			"title": "chat-square-heart-fill",
			"className": "bi bi-chat-square-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi512",
			"title": "chat-square-quote",
			"className": "bi bi-chat-square-quote",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi513",
			"title": "chat-square-quote-fill",
			"className": "bi bi-chat-square-quote-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi514",
			"title": "chat-square-text",
			"className": "bi bi-chat-square-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi515",
			"title": "chat-square-text-fill",
			"className": "bi bi-chat-square-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi516",
			"title": "chat-text",
			"className": "bi bi-chat-text",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi517",
			"title": "chat-text-fill",
			"className": "bi bi-chat-text-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi518",
			"title": "check",
			"className": "bi bi-check",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi519",
			"title": "check-all",
			"className": "bi bi-check-all",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi520",
			"title": "check-circle",
			"className": "bi bi-check-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi521",
			"title": "check-circle-fill",
			"className": "bi bi-check-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi522",
			"title": "check-lg",
			"className": "bi bi-check-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi523",
			"title": "check-square",
			"className": "bi bi-check-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi524",
			"title": "check-square-fill",
			"className": "bi bi-check-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi525",
			"title": "check2",
			"className": "bi bi-check2",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi526",
			"title": "check2-all",
			"className": "bi bi-check2-all",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi527",
			"title": "check2-circle",
			"className": "bi bi-check2-circle",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi528",
			"title": "check2-square",
			"className": "bi bi-check2-square",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi529",
			"title": "chevron-bar-contract",
			"className": "bi bi-chevron-bar-contract",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi530",
			"title": "chevron-bar-down",
			"className": "bi bi-chevron-bar-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi531",
			"title": "chevron-bar-expand",
			"className": "bi bi-chevron-bar-expand",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi532",
			"title": "chevron-bar-left",
			"className": "bi bi-chevron-bar-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi533",
			"title": "chevron-bar-right",
			"className": "bi bi-chevron-bar-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi534",
			"title": "chevron-bar-up",
			"className": "bi bi-chevron-bar-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi535",
			"title": "chevron-compact-down",
			"className": "bi bi-chevron-compact-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi536",
			"title": "chevron-compact-left",
			"className": "bi bi-chevron-compact-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi537",
			"title": "chevron-compact-right",
			"className": "bi bi-chevron-compact-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi538",
			"title": "chevron-compact-up",
			"className": "bi bi-chevron-compact-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi539",
			"title": "chevron-contract",
			"className": "bi bi-chevron-contract",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi540",
			"title": "chevron-double-down",
			"className": "bi bi-chevron-double-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi541",
			"title": "chevron-double-left",
			"className": "bi bi-chevron-double-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi542",
			"title": "chevron-double-right",
			"className": "bi bi-chevron-double-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi543",
			"title": "chevron-double-up",
			"className": "bi bi-chevron-double-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi544",
			"title": "chevron-down",
			"className": "bi bi-chevron-down",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi545",
			"title": "chevron-expand",
			"className": "bi bi-chevron-expand",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi546",
			"title": "chevron-left",
			"className": "bi bi-chevron-left",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi547",
			"title": "chevron-right",
			"className": "bi bi-chevron-right",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi548",
			"title": "chevron-up",
			"className": "bi bi-chevron-up",
			"type": "bi",
			"categories": [
				"chevrons"
			]
		},
		{
			"name": "bi549",
			"title": "circle",
			"className": "bi bi-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi550",
			"title": "circle-fill",
			"className": "bi bi-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi551",
			"title": "circle-half",
			"className": "bi bi-circle-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi552",
			"title": "slash-circle",
			"className": "bi bi-slash-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi553",
			"title": "circle-square",
			"className": "bi bi-circle-square",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi554",
			"title": "clipboard",
			"className": "bi bi-clipboard",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi555",
			"title": "clipboard-check",
			"className": "bi bi-clipboard-check",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi556",
			"title": "clipboard-check-fill",
			"className": "bi bi-clipboard-check-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi557",
			"title": "clipboard-data",
			"className": "bi bi-clipboard-data",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi558",
			"title": "clipboard-data-fill",
			"className": "bi bi-clipboard-data-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi559",
			"title": "clipboard-fill",
			"className": "bi bi-clipboard-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi560",
			"title": "clipboard-heart",
			"className": "bi bi-clipboard-heart",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi561",
			"title": "clipboard-heart-fill",
			"className": "bi bi-clipboard-heart-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi562",
			"title": "clipboard-minus",
			"className": "bi bi-clipboard-minus",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi563",
			"title": "clipboard-minus-fill",
			"className": "bi bi-clipboard-minus-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi564",
			"title": "clipboard-plus",
			"className": "bi bi-clipboard-plus",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi565",
			"title": "clipboard-plus-fill",
			"className": "bi bi-clipboard-plus-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi566",
			"title": "clipboard-pulse",
			"className": "bi bi-clipboard-pulse",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi567",
			"title": "clipboard-x",
			"className": "bi bi-clipboard-x",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi568",
			"title": "clipboard-x-fill",
			"className": "bi bi-clipboard-x-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi569",
			"title": "clipboard2",
			"className": "bi bi-clipboard2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi570",
			"title": "clipboard2-check",
			"className": "bi bi-clipboard2-check",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi571",
			"title": "clipboard2-check-fill",
			"className": "bi bi-clipboard2-check-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi572",
			"title": "clipboard2-data",
			"className": "bi bi-clipboard2-data",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi573",
			"title": "clipboard2-data-fill",
			"className": "bi bi-clipboard2-data-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi574",
			"title": "clipboard2-fill",
			"className": "bi bi-clipboard2-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi575",
			"title": "clipboard2-heart",
			"className": "bi bi-clipboard2-heart",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi576",
			"title": "clipboard2-heart-fill",
			"className": "bi bi-clipboard2-heart-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi577",
			"title": "clipboard2-minus",
			"className": "bi bi-clipboard2-minus",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi578",
			"title": "clipboard2-minus-fill",
			"className": "bi bi-clipboard2-minus-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi579",
			"title": "clipboard2-plus",
			"className": "bi bi-clipboard2-plus",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi580",
			"title": "clipboard2-plus-fill",
			"className": "bi bi-clipboard2-plus-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi581",
			"title": "clipboard2-pulse",
			"className": "bi bi-clipboard2-pulse",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi582",
			"title": "clipboard2-pulse-fill",
			"className": "bi bi-clipboard2-pulse-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi583",
			"title": "clipboard2-x",
			"className": "bi bi-clipboard2-x",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi584",
			"title": "clipboard2-x-fill",
			"className": "bi bi-clipboard2-x-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi585",
			"title": "clock",
			"className": "bi bi-clock",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi586",
			"title": "clock-fill",
			"className": "bi bi-clock-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi587",
			"title": "clock-history",
			"className": "bi bi-clock-history",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi588",
			"title": "cloud",
			"className": "bi bi-cloud",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi589",
			"title": "cloud-arrow-down",
			"className": "bi bi-cloud-arrow-down",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi590",
			"title": "cloud-arrow-down-fill",
			"className": "bi bi-cloud-arrow-down-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi591",
			"title": "cloud-arrow-up",
			"className": "bi bi-cloud-arrow-up",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi592",
			"title": "cloud-arrow-up-fill",
			"className": "bi bi-cloud-arrow-up-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi593",
			"title": "cloud-check",
			"className": "bi bi-cloud-check",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi594",
			"title": "cloud-check-fill",
			"className": "bi bi-cloud-check-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi595",
			"title": "cloud-download",
			"className": "bi bi-cloud-download",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi596",
			"title": "cloud-download-fill",
			"className": "bi bi-cloud-download-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi597",
			"title": "cloud-drizzle",
			"className": "bi bi-cloud-drizzle",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi598",
			"title": "cloud-drizzle-fill",
			"className": "bi bi-cloud-drizzle-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi599",
			"title": "cloud-fill",
			"className": "bi bi-cloud-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi600",
			"title": "cloud-fog",
			"className": "bi bi-cloud-fog",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi601",
			"title": "cloud-fog-fill",
			"className": "bi bi-cloud-fog-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi602",
			"title": "cloud-fog2",
			"className": "bi bi-cloud-fog2",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi603",
			"title": "cloud-fog2-fill",
			"className": "bi bi-cloud-fog2-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi604",
			"title": "cloud-hail",
			"className": "bi bi-cloud-hail",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi605",
			"title": "cloud-hail-fill",
			"className": "bi bi-cloud-hail-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi606",
			"title": "cloud-haze",
			"className": "bi bi-cloud-haze",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi607",
			"title": "cloud-haze-fill",
			"className": "bi bi-cloud-haze-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi608",
			"title": "cloud-haze2",
			"className": "bi bi-cloud-haze2",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi609",
			"title": "cloud-haze2-fill",
			"className": "bi bi-cloud-haze2-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi610",
			"title": "cloud-lightning",
			"className": "bi bi-cloud-lightning",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi611",
			"title": "cloud-lightning-fill",
			"className": "bi bi-cloud-lightning-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi612",
			"title": "cloud-lightning-rain",
			"className": "bi bi-cloud-lightning-rain",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi613",
			"title": "cloud-lightning-rain-fill",
			"className": "bi bi-cloud-lightning-rain-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi614",
			"title": "cloud-minus",
			"className": "bi bi-cloud-minus",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi615",
			"title": "cloud-minus-fill",
			"className": "bi bi-cloud-minus-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi616",
			"title": "cloud-moon",
			"className": "bi bi-cloud-moon",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi617",
			"title": "cloud-moon-fill",
			"className": "bi bi-cloud-moon-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi618",
			"title": "cloud-plus",
			"className": "bi bi-cloud-plus",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi619",
			"title": "cloud-plus-fill",
			"className": "bi bi-cloud-plus-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi620",
			"title": "cloud-rain",
			"className": "bi bi-cloud-rain",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi621",
			"title": "cloud-rain-fill",
			"className": "bi bi-cloud-rain-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi622",
			"title": "cloud-rain-heavy",
			"className": "bi bi-cloud-rain-heavy",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi623",
			"title": "cloud-rain-heavy-fill",
			"className": "bi bi-cloud-rain-heavy-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi624",
			"title": "cloud-slash",
			"className": "bi bi-cloud-slash",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi625",
			"title": "cloud-slash-fill",
			"className": "bi bi-cloud-slash-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi626",
			"title": "cloud-sleet",
			"className": "bi bi-cloud-sleet",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi627",
			"title": "cloud-sleet-fill",
			"className": "bi bi-cloud-sleet-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi628",
			"title": "cloud-snow",
			"className": "bi bi-cloud-snow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi629",
			"title": "cloud-snow-fill",
			"className": "bi bi-cloud-snow-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi630",
			"title": "cloud-sun",
			"className": "bi bi-cloud-sun",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi631",
			"title": "cloud-sun-fill",
			"className": "bi bi-cloud-sun-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi632",
			"title": "cloud-upload",
			"className": "bi bi-cloud-upload",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi633",
			"title": "cloud-upload-fill",
			"className": "bi bi-cloud-upload-fill",
			"type": "bi",
			"categories": [
				"clouds"
			]
		},
		{
			"name": "bi634",
			"title": "clouds",
			"className": "bi bi-clouds",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi635",
			"title": "clouds-fill",
			"className": "bi bi-clouds-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi636",
			"title": "cloudy",
			"className": "bi bi-cloudy",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi637",
			"title": "cloudy-fill",
			"className": "bi bi-cloudy-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi638",
			"title": "code",
			"className": "bi bi-code",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi639",
			"title": "code-slash",
			"className": "bi bi-code-slash",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi640",
			"title": "code-square",
			"className": "bi bi-code-square",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi641",
			"title": "coin",
			"className": "bi bi-coin",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi642",
			"title": "collection",
			"className": "bi bi-collection",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi643",
			"title": "collection-fill",
			"className": "bi bi-collection-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi644",
			"title": "collection-play",
			"className": "bi bi-collection-play",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi645",
			"title": "collection-play-fill",
			"className": "bi bi-collection-play-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi646",
			"title": "columns",
			"className": "bi bi-columns",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi647",
			"title": "columns-gap",
			"className": "bi bi-columns-gap",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi648",
			"title": "command",
			"className": "bi bi-command",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi649",
			"title": "compass",
			"className": "bi bi-compass",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi650",
			"title": "compass-fill",
			"className": "bi bi-compass-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi651",
			"title": "cone",
			"className": "bi bi-cone",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi652",
			"title": "cone-striped",
			"className": "bi bi-cone-striped",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi653",
			"title": "controller",
			"className": "bi bi-controller",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi654",
			"title": "cookie",
			"className": "bi bi-cookie",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi655",
			"title": "copy",
			"className": "bi bi-copy",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi656",
			"title": "cpu",
			"className": "bi bi-cpu",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi657",
			"title": "cpu-fill",
			"className": "bi bi-cpu-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi658",
			"title": "credit-card",
			"className": "bi bi-credit-card",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi659",
			"title": "credit-card-2-back",
			"className": "bi bi-credit-card-2-back",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi660",
			"title": "credit-card-2-back-fill",
			"className": "bi bi-credit-card-2-back-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi661",
			"title": "credit-card-2-front",
			"className": "bi bi-credit-card-2-front",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi662",
			"title": "credit-card-2-front-fill",
			"className": "bi bi-credit-card-2-front-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi663",
			"title": "credit-card-fill",
			"className": "bi bi-credit-card-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi664",
			"title": "crop",
			"className": "bi bi-crop",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi665",
			"title": "crosshair",
			"className": "bi bi-crosshair",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi666",
			"title": "crosshair2",
			"className": "bi bi-crosshair2",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi667",
			"title": "cup",
			"className": "bi bi-cup",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi668",
			"title": "cup-fill",
			"className": "bi bi-cup-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi669",
			"title": "cup-hot",
			"className": "bi bi-cup-hot",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi670",
			"title": "cup-hot-fill",
			"className": "bi bi-cup-hot-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi671",
			"title": "cup-straw",
			"className": "bi bi-cup-straw",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi672",
			"title": "currency-bitcoin",
			"className": "bi bi-currency-bitcoin",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi673",
			"title": "currency-dollar",
			"className": "bi bi-currency-dollar",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi674",
			"title": "currency-euro",
			"className": "bi bi-currency-euro",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi675",
			"title": "currency-exchange",
			"className": "bi bi-currency-exchange",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi676",
			"title": "currency-pound",
			"className": "bi bi-currency-pound",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi677",
			"title": "currency-rupee",
			"className": "bi bi-currency-rupee",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi678",
			"title": "currency-yen",
			"className": "bi bi-currency-yen",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi679",
			"title": "cursor",
			"className": "bi bi-cursor",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi680",
			"title": "cursor-fill",
			"className": "bi bi-cursor-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi681",
			"title": "cursor-text",
			"className": "bi bi-cursor-text",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi682",
			"title": "dash",
			"className": "bi bi-dash",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi683",
			"title": "dash-circle",
			"className": "bi bi-dash-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi684",
			"title": "dash-circle-dotted",
			"className": "bi bi-dash-circle-dotted",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi685",
			"title": "dash-circle-fill",
			"className": "bi bi-dash-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi686",
			"title": "dash-lg",
			"className": "bi bi-dash-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi687",
			"title": "dash-square",
			"className": "bi bi-dash-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi688",
			"title": "dash-square-dotted",
			"className": "bi bi-dash-square-dotted",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi689",
			"title": "dash-square-fill",
			"className": "bi bi-dash-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi690",
			"title": "database",
			"className": "bi bi-database",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi691",
			"title": "database-add",
			"className": "bi bi-database-add",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi692",
			"title": "database-check",
			"className": "bi bi-database-check",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi693",
			"title": "database-dash",
			"className": "bi bi-database-dash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi694",
			"title": "database-down",
			"className": "bi bi-database-down",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi695",
			"title": "database-exclamation",
			"className": "bi bi-database-exclamation",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi696",
			"title": "database-fill",
			"className": "bi bi-database-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi697",
			"title": "database-fill-add",
			"className": "bi bi-database-fill-add",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi698",
			"title": "database-fill-check",
			"className": "bi bi-database-fill-check",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi699",
			"title": "database-fill-dash",
			"className": "bi bi-database-fill-dash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi700",
			"title": "database-fill-down",
			"className": "bi bi-database-fill-down",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi701",
			"title": "database-fill-exclamation",
			"className": "bi bi-database-fill-exclamation",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi702",
			"title": "database-fill-gear",
			"className": "bi bi-database-fill-gear",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi703",
			"title": "database-fill-lock",
			"className": "bi bi-database-fill-lock",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi704",
			"title": "database-fill-slash",
			"className": "bi bi-database-fill-slash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi705",
			"title": "database-fill-up",
			"className": "bi bi-database-fill-up",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi706",
			"title": "database-fill-x",
			"className": "bi bi-database-fill-x",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi707",
			"title": "database-gear",
			"className": "bi bi-database-gear",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi708",
			"title": "database-lock",
			"className": "bi bi-database-lock",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi709",
			"title": "database-slash",
			"className": "bi bi-database-slash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi710",
			"title": "database-up",
			"className": "bi bi-database-up",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi711",
			"title": "database-x",
			"className": "bi bi-database-x",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi712",
			"title": "device-hdd",
			"className": "bi bi-device-hdd",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi713",
			"title": "device-hdd-fill",
			"className": "bi bi-device-hdd-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi714",
			"title": "device-ssd",
			"className": "bi bi-device-ssd",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi715",
			"title": "device-ssd-fill",
			"className": "bi bi-device-ssd-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi716",
			"title": "diagram-2",
			"className": "bi bi-diagram-2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi717",
			"title": "diagram-2-fill",
			"className": "bi bi-diagram-2-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi718",
			"title": "diagram-3",
			"className": "bi bi-diagram-3",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi719",
			"title": "diagram-3-fill",
			"className": "bi bi-diagram-3-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi720",
			"title": "diamond",
			"className": "bi bi-diamond",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi721",
			"title": "diamond-fill",
			"className": "bi bi-diamond-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi722",
			"title": "diamond-half",
			"className": "bi bi-diamond-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi723",
			"title": "dice-1",
			"className": "bi bi-dice-1",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi724",
			"title": "dice-1-fill",
			"className": "bi bi-dice-1-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi725",
			"title": "dice-2",
			"className": "bi bi-dice-2",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi726",
			"title": "dice-2-fill",
			"className": "bi bi-dice-2-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi727",
			"title": "dice-3",
			"className": "bi bi-dice-3",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi728",
			"title": "dice-3-fill",
			"className": "bi bi-dice-3-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi729",
			"title": "dice-4",
			"className": "bi bi-dice-4",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi730",
			"title": "dice-4-fill",
			"className": "bi bi-dice-4-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi731",
			"title": "dice-5",
			"className": "bi bi-dice-5",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi732",
			"title": "dice-5-fill",
			"className": "bi bi-dice-5-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi733",
			"title": "dice-6",
			"className": "bi bi-dice-6",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi734",
			"title": "dice-6-fill",
			"className": "bi bi-dice-6-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi735",
			"title": "disc",
			"className": "bi bi-disc",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi736",
			"title": "disc-fill",
			"className": "bi bi-disc-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi737",
			"title": "discord",
			"className": "bi bi-discord",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi738",
			"title": "display",
			"className": "bi bi-display",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi739",
			"title": "display-fill",
			"className": "bi bi-display-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi740",
			"title": "displayport",
			"className": "bi bi-displayport",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi741",
			"title": "displayport-fill",
			"className": "bi bi-displayport-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi742",
			"title": "distribute-horizontal",
			"className": "bi bi-distribute-horizontal",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi743",
			"title": "distribute-vertical",
			"className": "bi bi-distribute-vertical",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi744",
			"title": "door-closed",
			"className": "bi bi-door-closed",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi745",
			"title": "door-closed-fill",
			"className": "bi bi-door-closed-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi746",
			"title": "door-open",
			"className": "bi bi-door-open",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi747",
			"title": "door-open-fill",
			"className": "bi bi-door-open-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi748",
			"title": "dot",
			"className": "bi bi-dot",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi749",
			"title": "download",
			"className": "bi bi-download",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi750",
			"title": "dpad",
			"className": "bi bi-dpad",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi751",
			"title": "dpad-fill",
			"className": "bi bi-dpad-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi752",
			"title": "dribbble",
			"className": "bi bi-dribbble",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi753",
			"title": "dropbox",
			"className": "bi bi-dropbox",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi754",
			"title": "droplet",
			"className": "bi bi-droplet",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi755",
			"title": "droplet-fill",
			"className": "bi bi-droplet-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi756",
			"title": "droplet-half",
			"className": "bi bi-droplet-half",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi757",
			"title": "duffle",
			"className": "bi bi-duffle",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi758",
			"title": "duffle-fill",
			"className": "bi bi-duffle-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi759",
			"title": "ear",
			"className": "bi bi-ear",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi760",
			"title": "ear-fill",
			"className": "bi bi-ear-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi761",
			"title": "earbuds",
			"className": "bi bi-earbuds",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi762",
			"title": "easel",
			"className": "bi bi-easel",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi763",
			"title": "easel-fill",
			"className": "bi bi-easel-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi764",
			"title": "easel2",
			"className": "bi bi-easel2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi765",
			"title": "easel2-fill",
			"className": "bi bi-easel2-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi766",
			"title": "easel3",
			"className": "bi bi-easel3",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi767",
			"title": "easel3-fill",
			"className": "bi bi-easel3-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi768",
			"title": "egg",
			"className": "bi bi-egg",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi769",
			"title": "egg-fill",
			"className": "bi bi-egg-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi770",
			"title": "egg-fried",
			"className": "bi bi-egg-fried",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi771",
			"title": "eject",
			"className": "bi bi-eject",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi772",
			"title": "eject-fill",
			"className": "bi bi-eject-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi773",
			"title": "emoji-angry",
			"className": "bi bi-emoji-angry",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi774",
			"title": "emoji-angry-fill",
			"className": "bi bi-emoji-angry-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi775",
			"title": "emoji-astonished",
			"className": "bi bi-emoji-astonished",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi776",
			"title": "emoji-astonished-fill",
			"className": "bi bi-emoji-astonished-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi777",
			"title": "emoji-dizzy",
			"className": "bi bi-emoji-dizzy",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi778",
			"title": "emoji-dizzy-fill",
			"className": "bi bi-emoji-dizzy-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi779",
			"title": "emoji-expressionless",
			"className": "bi bi-emoji-expressionless",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi780",
			"title": "emoji-expressionless-fill",
			"className": "bi bi-emoji-expressionless-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi781",
			"title": "emoji-frown",
			"className": "bi bi-emoji-frown",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi782",
			"title": "emoji-frown-fill",
			"className": "bi bi-emoji-frown-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi783",
			"title": "emoji-grimace",
			"className": "bi bi-emoji-grimace",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi784",
			"title": "emoji-grimace-fill",
			"className": "bi bi-emoji-grimace-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi785",
			"title": "emoji-grin",
			"className": "bi bi-emoji-grin",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi786",
			"title": "emoji-grin-fill",
			"className": "bi bi-emoji-grin-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi787",
			"title": "emoji-heart-eyes",
			"className": "bi bi-emoji-heart-eyes",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi788",
			"title": "emoji-heart-eyes-fill",
			"className": "bi bi-emoji-heart-eyes-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi789",
			"title": "emoji-kiss",
			"className": "bi bi-emoji-kiss",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi790",
			"title": "emoji-kiss-fill",
			"className": "bi bi-emoji-kiss-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi791",
			"title": "emoji-laughing",
			"className": "bi bi-emoji-laughing",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi792",
			"title": "emoji-laughing-fill",
			"className": "bi bi-emoji-laughing-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi793",
			"title": "emoji-neutral",
			"className": "bi bi-emoji-neutral",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi794",
			"title": "emoji-neutral-fill",
			"className": "bi bi-emoji-neutral-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi795",
			"title": "emoji-smile",
			"className": "bi bi-emoji-smile",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi796",
			"title": "emoji-smile-fill",
			"className": "bi bi-emoji-smile-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi797",
			"title": "emoji-smile-upside-down",
			"className": "bi bi-emoji-smile-upside-down",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi798",
			"title": "emoji-smile-upside-down-fill",
			"className": "bi bi-emoji-smile-upside-down-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi799",
			"title": "emoji-sunglasses",
			"className": "bi bi-emoji-sunglasses",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi800",
			"title": "emoji-sunglasses-fill",
			"className": "bi bi-emoji-sunglasses-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi801",
			"title": "emoji-surprise",
			"className": "bi bi-emoji-surprise",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi802",
			"title": "emoji-surprise-fill",
			"className": "bi bi-emoji-surprise-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi803",
			"title": "emoji-tear",
			"className": "bi bi-emoji-tear",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi804",
			"title": "emoji-tear-fill",
			"className": "bi bi-emoji-tear-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi805",
			"title": "emoji-wink",
			"className": "bi bi-emoji-wink",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi806",
			"title": "emoji-wink-fill",
			"className": "bi bi-emoji-wink-fill",
			"type": "bi",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "bi807",
			"title": "envelope",
			"className": "bi bi-envelope",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi808",
			"title": "envelope-arrow-down",
			"className": "bi bi-envelope-arrow-down",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi809",
			"title": "envelope-arrow-down-fill",
			"className": "bi bi-envelope-arrow-down-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi810",
			"title": "envelope-arrow-up",
			"className": "bi bi-envelope-arrow-up",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi811",
			"title": "envelope-arrow-up-fill",
			"className": "bi bi-envelope-arrow-up-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi812",
			"title": "envelope-at",
			"className": "bi bi-envelope-at",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi813",
			"title": "envelope-at-fill",
			"className": "bi bi-envelope-at-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi814",
			"title": "envelope-check",
			"className": "bi bi-envelope-check",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi815",
			"title": "envelope-check-fill",
			"className": "bi bi-envelope-check-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi816",
			"title": "envelope-dash",
			"className": "bi bi-envelope-dash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi817",
			"title": "envelope-dash-fill",
			"className": "bi bi-envelope-dash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi818",
			"title": "envelope-exclamation",
			"className": "bi bi-envelope-exclamation",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi819",
			"title": "envelope-exclamation-fill",
			"className": "bi bi-envelope-exclamation-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi820",
			"title": "envelope-fill",
			"className": "bi bi-envelope-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi821",
			"title": "envelope-heart",
			"className": "bi bi-envelope-heart",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi822",
			"title": "envelope-heart-fill",
			"className": "bi bi-envelope-heart-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi823",
			"title": "envelope-open",
			"className": "bi bi-envelope-open",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi824",
			"title": "envelope-open-fill",
			"className": "bi bi-envelope-open-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi825",
			"title": "envelope-open-heart",
			"className": "bi bi-envelope-open-heart",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi826",
			"title": "envelope-open-heart-fill",
			"className": "bi bi-envelope-open-heart-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi827",
			"title": "envelope-paper",
			"className": "bi bi-envelope-paper",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi828",
			"title": "envelope-paper-fill",
			"className": "bi bi-envelope-paper-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi829",
			"title": "envelope-paper-heart",
			"className": "bi bi-envelope-paper-heart",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi830",
			"title": "envelope-paper-heart-fill",
			"className": "bi bi-envelope-paper-heart-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi831",
			"title": "envelope-plus",
			"className": "bi bi-envelope-plus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi832",
			"title": "envelope-plus-fill",
			"className": "bi bi-envelope-plus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi833",
			"title": "envelope-slash",
			"className": "bi bi-envelope-slash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi834",
			"title": "envelope-slash-fill",
			"className": "bi bi-envelope-slash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi835",
			"title": "envelope-x",
			"className": "bi bi-envelope-x",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi836",
			"title": "envelope-x-fill",
			"className": "bi bi-envelope-x-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi837",
			"title": "eraser",
			"className": "bi bi-eraser",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi838",
			"title": "eraser-fill",
			"className": "bi bi-eraser-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi839",
			"title": "escape",
			"className": "bi bi-escape",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi840",
			"title": "ethernet",
			"className": "bi bi-ethernet",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi841",
			"title": "ev-front",
			"className": "bi bi-ev-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi842",
			"title": "ev-front-fill",
			"className": "bi bi-ev-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi843",
			"title": "ev-station",
			"className": "bi bi-ev-station",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi844",
			"title": "ev-station-fill",
			"className": "bi bi-ev-station-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi845",
			"title": "exclamation",
			"className": "bi bi-exclamation",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi846",
			"title": "exclamation-circle",
			"className": "bi bi-exclamation-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi847",
			"title": "exclamation-circle-fill",
			"className": "bi bi-exclamation-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi848",
			"title": "exclamation-diamond",
			"className": "bi bi-exclamation-diamond",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi849",
			"title": "exclamation-diamond-fill",
			"className": "bi bi-exclamation-diamond-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi850",
			"title": "exclamation-lg",
			"className": "bi bi-exclamation-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi851",
			"title": "exclamation-octagon",
			"className": "bi bi-exclamation-octagon",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi852",
			"title": "exclamation-octagon-fill",
			"className": "bi bi-exclamation-octagon-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi853",
			"title": "exclamation-square",
			"className": "bi bi-exclamation-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi854",
			"title": "exclamation-square-fill",
			"className": "bi bi-exclamation-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi855",
			"title": "exclamation-triangle",
			"className": "bi bi-exclamation-triangle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi856",
			"title": "exclamation-triangle-fill",
			"className": "bi bi-exclamation-triangle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi857",
			"title": "exclude",
			"className": "bi bi-exclude",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi858",
			"title": "explicit",
			"className": "bi bi-explicit",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi859",
			"title": "explicit-fill",
			"className": "bi bi-explicit-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi860",
			"title": "exposure",
			"className": "bi bi-exposure",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi861",
			"title": "eye",
			"className": "bi bi-eye",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi862",
			"title": "eye-fill",
			"className": "bi bi-eye-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi863",
			"title": "eye-slash",
			"className": "bi bi-eye-slash",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi864",
			"title": "eye-slash-fill",
			"className": "bi bi-eye-slash-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi865",
			"title": "eyedropper",
			"className": "bi bi-eyedropper",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi866",
			"title": "eyeglasses",
			"className": "bi bi-eyeglasses",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi867",
			"title": "facebook",
			"className": "bi bi-facebook",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi868",
			"title": "fan",
			"className": "bi bi-fan",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi869",
			"title": "fast-forward",
			"className": "bi bi-fast-forward",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi870",
			"title": "fast-forward-btn",
			"className": "bi bi-fast-forward-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi871",
			"title": "fast-forward-btn-fill",
			"className": "bi bi-fast-forward-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi872",
			"title": "fast-forward-circle",
			"className": "bi bi-fast-forward-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi873",
			"title": "fast-forward-circle-fill",
			"className": "bi bi-fast-forward-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi874",
			"title": "fast-forward-fill",
			"className": "bi bi-fast-forward-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi875",
			"title": "feather",
			"className": "bi bi-feather",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi876",
			"title": "feather2",
			"className": "bi bi-feather2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi877",
			"title": "file",
			"className": "bi bi-file",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi878",
			"title": "file-arrow-down",
			"className": "bi bi-file-arrow-down",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi879",
			"title": "file-arrow-down-fill",
			"className": "bi bi-file-arrow-down-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi880",
			"title": "file-arrow-up",
			"className": "bi bi-file-arrow-up",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi881",
			"title": "file-arrow-up-fill",
			"className": "bi bi-file-arrow-up-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi882",
			"title": "file-bar-graph",
			"className": "bi bi-file-bar-graph",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi883",
			"title": "file-bar-graph-fill",
			"className": "bi bi-file-bar-graph-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi884",
			"title": "file-binary",
			"className": "bi bi-file-binary",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi885",
			"title": "file-binary-fill",
			"className": "bi bi-file-binary-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi886",
			"title": "file-break",
			"className": "bi bi-file-break",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi887",
			"title": "file-break-fill",
			"className": "bi bi-file-break-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi888",
			"title": "file-check",
			"className": "bi bi-file-check",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi889",
			"title": "file-check-fill",
			"className": "bi bi-file-check-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi890",
			"title": "file-code",
			"className": "bi bi-file-code",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi891",
			"title": "file-code-fill",
			"className": "bi bi-file-code-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi892",
			"title": "file-diff",
			"className": "bi bi-file-diff",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi893",
			"title": "file-diff-fill",
			"className": "bi bi-file-diff-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi894",
			"title": "file-earmark",
			"className": "bi bi-file-earmark",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi895",
			"title": "file-earmark-arrow-down",
			"className": "bi bi-file-earmark-arrow-down",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi896",
			"title": "file-earmark-arrow-down-fill",
			"className": "bi bi-file-earmark-arrow-down-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi897",
			"title": "file-earmark-arrow-up",
			"className": "bi bi-file-earmark-arrow-up",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi898",
			"title": "file-earmark-arrow-up-fill",
			"className": "bi bi-file-earmark-arrow-up-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi899",
			"title": "file-earmark-bar-graph",
			"className": "bi bi-file-earmark-bar-graph",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi900",
			"title": "file-earmark-bar-graph-fill",
			"className": "bi bi-file-earmark-bar-graph-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi901",
			"title": "file-earmark-binary",
			"className": "bi bi-file-earmark-binary",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi902",
			"title": "file-earmark-binary-fill",
			"className": "bi bi-file-earmark-binary-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi903",
			"title": "file-earmark-break",
			"className": "bi bi-file-earmark-break",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi904",
			"title": "file-earmark-break-fill",
			"className": "bi bi-file-earmark-break-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi905",
			"title": "file-earmark-check",
			"className": "bi bi-file-earmark-check",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi906",
			"title": "file-earmark-check-fill",
			"className": "bi bi-file-earmark-check-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi907",
			"title": "file-earmark-code",
			"className": "bi bi-file-earmark-code",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi908",
			"title": "file-earmark-code-fill",
			"className": "bi bi-file-earmark-code-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi909",
			"title": "file-earmark-diff",
			"className": "bi bi-file-earmark-diff",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi910",
			"title": "file-earmark-diff-fill",
			"className": "bi bi-file-earmark-diff-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi911",
			"title": "file-earmark-easel",
			"className": "bi bi-file-earmark-easel",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi912",
			"title": "file-earmark-easel-fill",
			"className": "bi bi-file-earmark-easel-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi913",
			"title": "file-earmark-excel",
			"className": "bi bi-file-earmark-excel",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi914",
			"title": "file-earmark-excel-fill",
			"className": "bi bi-file-earmark-excel-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi915",
			"title": "file-earmark-fill",
			"className": "bi bi-file-earmark-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi916",
			"title": "file-earmark-font",
			"className": "bi bi-file-earmark-font",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi917",
			"title": "file-earmark-font-fill",
			"className": "bi bi-file-earmark-font-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi918",
			"title": "file-earmark-image",
			"className": "bi bi-file-earmark-image",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi919",
			"title": "file-earmark-image-fill",
			"className": "bi bi-file-earmark-image-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi920",
			"title": "file-earmark-lock",
			"className": "bi bi-file-earmark-lock",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi921",
			"title": "file-earmark-lock-fill",
			"className": "bi bi-file-earmark-lock-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi922",
			"title": "file-earmark-lock2",
			"className": "bi bi-file-earmark-lock2",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi923",
			"title": "file-earmark-lock2-fill",
			"className": "bi bi-file-earmark-lock2-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi924",
			"title": "file-earmark-medical",
			"className": "bi bi-file-earmark-medical",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi925",
			"title": "file-earmark-medical-fill",
			"className": "bi bi-file-earmark-medical-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi926",
			"title": "file-earmark-minus",
			"className": "bi bi-file-earmark-minus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi927",
			"title": "file-earmark-minus-fill",
			"className": "bi bi-file-earmark-minus-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi928",
			"title": "file-earmark-music",
			"className": "bi bi-file-earmark-music",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi929",
			"title": "file-earmark-music-fill",
			"className": "bi bi-file-earmark-music-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi930",
			"title": "file-earmark-pdf",
			"className": "bi bi-file-earmark-pdf",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi931",
			"title": "file-earmark-pdf-fill",
			"className": "bi bi-file-earmark-pdf-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi932",
			"title": "file-earmark-person",
			"className": "bi bi-file-earmark-person",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi933",
			"title": "file-earmark-person-fill",
			"className": "bi bi-file-earmark-person-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi934",
			"title": "file-earmark-play",
			"className": "bi bi-file-earmark-play",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi935",
			"title": "file-earmark-play-fill",
			"className": "bi bi-file-earmark-play-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi936",
			"title": "file-earmark-plus",
			"className": "bi bi-file-earmark-plus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi937",
			"title": "file-earmark-plus-fill",
			"className": "bi bi-file-earmark-plus-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi938",
			"title": "file-earmark-post",
			"className": "bi bi-file-earmark-post",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi939",
			"title": "file-earmark-post-fill",
			"className": "bi bi-file-earmark-post-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi940",
			"title": "file-earmark-ppt",
			"className": "bi bi-file-earmark-ppt",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi941",
			"title": "file-earmark-ppt-fill",
			"className": "bi bi-file-earmark-ppt-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi942",
			"title": "file-earmark-richtext",
			"className": "bi bi-file-earmark-richtext",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi943",
			"title": "file-earmark-richtext-fill",
			"className": "bi bi-file-earmark-richtext-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi944",
			"title": "file-earmark-ruled",
			"className": "bi bi-file-earmark-ruled",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi945",
			"title": "file-earmark-ruled-fill",
			"className": "bi bi-file-earmark-ruled-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi946",
			"title": "file-earmark-slides",
			"className": "bi bi-file-earmark-slides",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi947",
			"title": "file-earmark-slides-fill",
			"className": "bi bi-file-earmark-slides-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi948",
			"title": "file-earmark-spreadsheet",
			"className": "bi bi-file-earmark-spreadsheet",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi949",
			"title": "file-earmark-spreadsheet-fill",
			"className": "bi bi-file-earmark-spreadsheet-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi950",
			"title": "file-earmark-text",
			"className": "bi bi-file-earmark-text",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi951",
			"title": "file-earmark-text-fill",
			"className": "bi bi-file-earmark-text-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi952",
			"title": "file-earmark-word",
			"className": "bi bi-file-earmark-word",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi953",
			"title": "file-earmark-word-fill",
			"className": "bi bi-file-earmark-word-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi954",
			"title": "file-earmark-x",
			"className": "bi bi-file-earmark-x",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi955",
			"title": "file-earmark-x-fill",
			"className": "bi bi-file-earmark-x-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi956",
			"title": "file-earmark-zip",
			"className": "bi bi-file-earmark-zip",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi957",
			"title": "file-earmark-zip-fill",
			"className": "bi bi-file-earmark-zip-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi958",
			"title": "file-easel",
			"className": "bi bi-file-easel",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi959",
			"title": "file-easel-fill",
			"className": "bi bi-file-easel-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi960",
			"title": "file-excel",
			"className": "bi bi-file-excel",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi961",
			"title": "file-excel-fill",
			"className": "bi bi-file-excel-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi962",
			"title": "file-fill",
			"className": "bi bi-file-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi963",
			"title": "file-font",
			"className": "bi bi-file-font",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi964",
			"title": "file-font-fill",
			"className": "bi bi-file-font-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi965",
			"title": "file-image",
			"className": "bi bi-file-image",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi966",
			"title": "file-image-fill",
			"className": "bi bi-file-image-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi967",
			"title": "file-lock",
			"className": "bi bi-file-lock",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi968",
			"title": "file-lock-fill",
			"className": "bi bi-file-lock-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi969",
			"title": "file-lock2",
			"className": "bi bi-file-lock2",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi970",
			"title": "file-lock2-fill",
			"className": "bi bi-file-lock2-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi971",
			"title": "file-medical",
			"className": "bi bi-file-medical",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi972",
			"title": "file-medical-fill",
			"className": "bi bi-file-medical-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi973",
			"title": "file-minus",
			"className": "bi bi-file-minus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi974",
			"title": "file-minus-fill",
			"className": "bi bi-file-minus-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi975",
			"title": "file-music",
			"className": "bi bi-file-music",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi976",
			"title": "file-music-fill",
			"className": "bi bi-file-music-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi977",
			"title": "file-pdf",
			"className": "bi bi-file-pdf",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi978",
			"title": "file-pdf-fill",
			"className": "bi bi-file-pdf-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi979",
			"title": "file-person",
			"className": "bi bi-file-person",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi980",
			"title": "file-person-fill",
			"className": "bi bi-file-person-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi981",
			"title": "file-play",
			"className": "bi bi-file-play",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi982",
			"title": "file-play-fill",
			"className": "bi bi-file-play-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi983",
			"title": "file-plus",
			"className": "bi bi-file-plus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi984",
			"title": "file-plus-fill",
			"className": "bi bi-file-plus-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi985",
			"title": "file-post",
			"className": "bi bi-file-post",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi986",
			"title": "file-post-fill",
			"className": "bi bi-file-post-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi987",
			"title": "file-ppt",
			"className": "bi bi-file-ppt",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi988",
			"title": "file-ppt-fill",
			"className": "bi bi-file-ppt-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi989",
			"title": "file-richtext",
			"className": "bi bi-file-richtext",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi990",
			"title": "file-richtext-fill",
			"className": "bi bi-file-richtext-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi991",
			"title": "file-ruled",
			"className": "bi bi-file-ruled",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi992",
			"title": "file-ruled-fill",
			"className": "bi bi-file-ruled-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi993",
			"title": "file-slides",
			"className": "bi bi-file-slides",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi994",
			"title": "file-slides-fill",
			"className": "bi bi-file-slides-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi995",
			"title": "file-spreadsheet",
			"className": "bi bi-file-spreadsheet",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi996",
			"title": "file-spreadsheet-fill",
			"className": "bi bi-file-spreadsheet-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi997",
			"title": "file-text",
			"className": "bi bi-file-text",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi998",
			"title": "file-text-fill",
			"className": "bi bi-file-text-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi999",
			"title": "file-word",
			"className": "bi bi-file-word",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1000",
			"title": "file-word-fill",
			"className": "bi bi-file-word-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1001",
			"title": "file-x",
			"className": "bi bi-file-x",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1002",
			"title": "file-x-fill",
			"className": "bi bi-file-x-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1003",
			"title": "file-zip",
			"className": "bi bi-file-zip",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1004",
			"title": "file-zip-fill",
			"className": "bi bi-file-zip-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1005",
			"title": "files",
			"className": "bi bi-files",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1006",
			"title": "files-alt",
			"className": "bi bi-files-alt",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1007",
			"title": "filetype-aac",
			"className": "bi bi-filetype-aac",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1008",
			"title": "filetype-ai",
			"className": "bi bi-filetype-ai",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1009",
			"title": "filetype-bmp",
			"className": "bi bi-filetype-bmp",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1010",
			"title": "filetype-cs",
			"className": "bi bi-filetype-cs",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1011",
			"title": "filetype-css",
			"className": "bi bi-filetype-css",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1012",
			"title": "filetype-csv",
			"className": "bi bi-filetype-csv",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1013",
			"title": "filetype-doc",
			"className": "bi bi-filetype-doc",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1014",
			"title": "filetype-docx",
			"className": "bi bi-filetype-docx",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1015",
			"title": "filetype-exe",
			"className": "bi bi-filetype-exe",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1016",
			"title": "filetype-gif",
			"className": "bi bi-filetype-gif",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1017",
			"title": "filetype-heic",
			"className": "bi bi-filetype-heic",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1018",
			"title": "filetype-html",
			"className": "bi bi-filetype-html",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1019",
			"title": "filetype-java",
			"className": "bi bi-filetype-java",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1020",
			"title": "filetype-jpg",
			"className": "bi bi-filetype-jpg",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1021",
			"title": "filetype-js",
			"className": "bi bi-filetype-js",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1022",
			"title": "filetype-json",
			"className": "bi bi-filetype-json",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1023",
			"title": "filetype-jsx",
			"className": "bi bi-filetype-jsx",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1024",
			"title": "filetype-key",
			"className": "bi bi-filetype-key",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1025",
			"title": "filetype-m4p",
			"className": "bi bi-filetype-m4p",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1026",
			"title": "filetype-md",
			"className": "bi bi-filetype-md",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1027",
			"title": "filetype-mdx",
			"className": "bi bi-filetype-mdx",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1028",
			"title": "filetype-mov",
			"className": "bi bi-filetype-mov",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1029",
			"title": "filetype-mp3",
			"className": "bi bi-filetype-mp3",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1030",
			"title": "filetype-mp4",
			"className": "bi bi-filetype-mp4",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1031",
			"title": "filetype-otf",
			"className": "bi bi-filetype-otf",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1032",
			"title": "filetype-pdf",
			"className": "bi bi-filetype-pdf",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1033",
			"title": "filetype-php",
			"className": "bi bi-filetype-php",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1034",
			"title": "filetype-png",
			"className": "bi bi-filetype-png",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1035",
			"title": "filetype-ppt",
			"className": "bi bi-filetype-ppt",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1036",
			"title": "filetype-pptx",
			"className": "bi bi-filetype-pptx",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1037",
			"title": "filetype-psd",
			"className": "bi bi-filetype-psd",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1038",
			"title": "filetype-py",
			"className": "bi bi-filetype-py",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1039",
			"title": "filetype-raw",
			"className": "bi bi-filetype-raw",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1040",
			"title": "filetype-rb",
			"className": "bi bi-filetype-rb",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1041",
			"title": "filetype-sass",
			"className": "bi bi-filetype-sass",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1042",
			"title": "filetype-scss",
			"className": "bi bi-filetype-scss",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1043",
			"title": "filetype-sh",
			"className": "bi bi-filetype-sh",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1044",
			"title": "filetype-sql",
			"className": "bi bi-filetype-sql",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1045",
			"title": "filetype-svg",
			"className": "bi bi-filetype-svg",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1046",
			"title": "filetype-tiff",
			"className": "bi bi-filetype-tiff",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1047",
			"title": "filetype-tsx",
			"className": "bi bi-filetype-tsx",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1048",
			"title": "filetype-ttf",
			"className": "bi bi-filetype-ttf",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1049",
			"title": "filetype-txt",
			"className": "bi bi-filetype-txt",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1050",
			"title": "filetype-wav",
			"className": "bi bi-filetype-wav",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1051",
			"title": "filetype-woff",
			"className": "bi bi-filetype-woff",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1052",
			"title": "filetype-xls",
			"className": "bi bi-filetype-xls",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1053",
			"title": "filetype-xlsx",
			"className": "bi bi-filetype-xlsx",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1054",
			"title": "filetype-xml",
			"className": "bi bi-filetype-xml",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1055",
			"title": "filetype-yml",
			"className": "bi bi-filetype-yml",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1056",
			"title": "film",
			"className": "bi bi-film",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1057",
			"title": "filter",
			"className": "bi bi-filter",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1058",
			"title": "filter-circle",
			"className": "bi bi-filter-circle",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1059",
			"title": "filter-circle-fill",
			"className": "bi bi-filter-circle-fill",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1060",
			"title": "filter-left",
			"className": "bi bi-filter-left",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1061",
			"title": "filter-right",
			"className": "bi bi-filter-right",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1062",
			"title": "filter-square",
			"className": "bi bi-filter-square",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1063",
			"title": "filter-square-fill",
			"className": "bi bi-filter-square-fill",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1064",
			"title": "fingerprint",
			"className": "bi bi-fingerprint",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1065",
			"title": "fire",
			"className": "bi bi-fire",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1066",
			"title": "flag",
			"className": "bi bi-flag",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1067",
			"title": "flag-fill",
			"className": "bi bi-flag-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1068",
			"title": "floppy",
			"className": "bi bi-floppy",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1069",
			"title": "floppy-fill",
			"className": "bi bi-floppy-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1070",
			"title": "floppy2",
			"className": "bi bi-floppy2",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1071",
			"title": "floppy2-fill",
			"className": "bi bi-floppy2-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1072",
			"title": "flower1",
			"className": "bi bi-flower1",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1073",
			"title": "flower2",
			"className": "bi bi-flower2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1074",
			"title": "flower3",
			"className": "bi bi-flower3",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1075",
			"title": "folder",
			"className": "bi bi-folder",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1076",
			"title": "folder-check",
			"className": "bi bi-folder-check",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1077",
			"title": "folder-fill",
			"className": "bi bi-folder-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1078",
			"title": "folder-minus",
			"className": "bi bi-folder-minus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1079",
			"title": "folder-plus",
			"className": "bi bi-folder-plus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1080",
			"title": "folder-symlink",
			"className": "bi bi-folder-symlink",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1081",
			"title": "folder-symlink-fill",
			"className": "bi bi-folder-symlink-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1082",
			"title": "folder-x",
			"className": "bi bi-folder-x",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1083",
			"title": "folder2",
			"className": "bi bi-folder2",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1084",
			"title": "folder2-open",
			"className": "bi bi-folder2-open",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1085",
			"title": "fonts",
			"className": "bi bi-fonts",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1086",
			"title": "forward",
			"className": "bi bi-forward",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1087",
			"title": "forward-fill",
			"className": "bi bi-forward-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1088",
			"title": "front",
			"className": "bi bi-front",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1089",
			"title": "fuel-pump",
			"className": "bi bi-fuel-pump",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1090",
			"title": "fuel-pump-diesel",
			"className": "bi bi-fuel-pump-diesel",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1091",
			"title": "fuel-pump-diesel-fill",
			"className": "bi bi-fuel-pump-diesel-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1092",
			"title": "fuel-pump-fill",
			"className": "bi bi-fuel-pump-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1093",
			"title": "fullscreen",
			"className": "bi bi-fullscreen",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1094",
			"title": "fullscreen-exit",
			"className": "bi bi-fullscreen-exit",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1095",
			"title": "funnel",
			"className": "bi bi-funnel",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1096",
			"title": "funnel-fill",
			"className": "bi bi-funnel-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1097",
			"title": "gear",
			"className": "bi bi-gear",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1098",
			"title": "gear-fill",
			"className": "bi bi-gear-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1099",
			"title": "gear-wide",
			"className": "bi bi-gear-wide",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1100",
			"title": "gear-wide-connected",
			"className": "bi bi-gear-wide-connected",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1101",
			"title": "gem",
			"className": "bi bi-gem",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1102",
			"title": "gender-ambiguous",
			"className": "bi bi-gender-ambiguous",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1103",
			"title": "gender-female",
			"className": "bi bi-gender-female",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1104",
			"title": "gender-male",
			"className": "bi bi-gender-male",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1105",
			"title": "gender-neuter",
			"className": "bi bi-gender-neuter",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1106",
			"title": "gender-trans",
			"className": "bi bi-gender-trans",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1107",
			"title": "geo",
			"className": "bi bi-geo",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1108",
			"title": "geo-alt",
			"className": "bi bi-geo-alt",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1109",
			"title": "geo-alt-fill",
			"className": "bi bi-geo-alt-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1110",
			"title": "geo-fill",
			"className": "bi bi-geo-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1111",
			"title": "gift",
			"className": "bi bi-gift",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1112",
			"title": "gift-fill",
			"className": "bi bi-gift-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1113",
			"title": "git",
			"className": "bi bi-git",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1114",
			"title": "github",
			"className": "bi bi-github",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1115",
			"title": "gitlab",
			"className": "bi bi-gitlab",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1116",
			"title": "globe",
			"className": "bi bi-globe",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1117",
			"title": "globe-americas",
			"className": "bi bi-globe-americas",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1118",
			"title": "globe-asia-australia",
			"className": "bi bi-globe-asia-australia",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1119",
			"title": "globe-central-south-asia",
			"className": "bi bi-globe-central-south-asia",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1120",
			"title": "globe-europe-africa",
			"className": "bi bi-globe-europe-africa",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1121",
			"title": "globe2",
			"className": "bi bi-globe2",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1122",
			"title": "google",
			"className": "bi bi-google",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1123",
			"title": "google-play",
			"className": "bi bi-google-play",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1124",
			"title": "gpu-card",
			"className": "bi bi-gpu-card",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1125",
			"title": "graph-down",
			"className": "bi bi-graph-down",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi1126",
			"title": "graph-down-arrow",
			"className": "bi bi-graph-down-arrow",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi1127",
			"title": "graph-up",
			"className": "bi bi-graph-up",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi1128",
			"title": "graph-up-arrow",
			"className": "bi bi-graph-up-arrow",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi1129",
			"title": "grid",
			"className": "bi bi-grid",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1130",
			"title": "grid-1x2",
			"className": "bi bi-grid-1x2",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1131",
			"title": "grid-1x2-fill",
			"className": "bi bi-grid-1x2-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1132",
			"title": "grid-3x2",
			"className": "bi bi-grid-3x2",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1133",
			"title": "grid-3x2-gap",
			"className": "bi bi-grid-3x2-gap",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1134",
			"title": "grid-3x2-gap-fill",
			"className": "bi bi-grid-3x2-gap-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1135",
			"title": "grid-3x3",
			"className": "bi bi-grid-3x3",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1136",
			"title": "grid-3x3-gap",
			"className": "bi bi-grid-3x3-gap",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1137",
			"title": "grid-3x3-gap-fill",
			"className": "bi bi-grid-3x3-gap-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1138",
			"title": "grid-fill",
			"className": "bi bi-grid-fill",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1139",
			"title": "grip-horizontal",
			"className": "bi bi-grip-horizontal",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1140",
			"title": "grip-vertical",
			"className": "bi bi-grip-vertical",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1141",
			"title": "h-circle",
			"className": "bi bi-h-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1142",
			"title": "h-circle-fill",
			"className": "bi bi-h-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1143",
			"title": "h-square",
			"className": "bi bi-h-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1144",
			"title": "h-square-fill",
			"className": "bi bi-h-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1145",
			"title": "hammer",
			"className": "bi bi-hammer",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1146",
			"title": "hand-index",
			"className": "bi bi-hand-index",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1147",
			"title": "hand-index-fill",
			"className": "bi bi-hand-index-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1148",
			"title": "hand-index-thumb",
			"className": "bi bi-hand-index-thumb",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1149",
			"title": "hand-index-thumb-fill",
			"className": "bi bi-hand-index-thumb-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1150",
			"title": "hand-thumbs-down",
			"className": "bi bi-hand-thumbs-down",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1151",
			"title": "hand-thumbs-down-fill",
			"className": "bi bi-hand-thumbs-down-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1152",
			"title": "hand-thumbs-up",
			"className": "bi bi-hand-thumbs-up",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1153",
			"title": "hand-thumbs-up-fill",
			"className": "bi bi-hand-thumbs-up-fill",
			"type": "bi",
			"categories": [
				"hands"
			]
		},
		{
			"name": "bi1154",
			"title": "handbag",
			"className": "bi bi-handbag",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1155",
			"title": "handbag-fill",
			"className": "bi bi-handbag-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1156",
			"title": "hash",
			"className": "bi bi-hash",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1157",
			"title": "hdd",
			"className": "bi bi-hdd",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1158",
			"title": "hdd-fill",
			"className": "bi bi-hdd-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1159",
			"title": "hdd-network",
			"className": "bi bi-hdd-network",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1160",
			"title": "hdd-network-fill",
			"className": "bi bi-hdd-network-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1161",
			"title": "hdd-rack",
			"className": "bi bi-hdd-rack",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1162",
			"title": "hdd-rack-fill",
			"className": "bi bi-hdd-rack-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1163",
			"title": "hdd-stack",
			"className": "bi bi-hdd-stack",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1164",
			"title": "hdd-stack-fill",
			"className": "bi bi-hdd-stack-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1165",
			"title": "hdmi",
			"className": "bi bi-hdmi",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1166",
			"title": "hdmi-fill",
			"className": "bi bi-hdmi-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1167",
			"title": "headphones",
			"className": "bi bi-headphones",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1168",
			"title": "headset",
			"className": "bi bi-headset",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1169",
			"title": "headset-vr",
			"className": "bi bi-headset-vr",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1170",
			"title": "heart",
			"className": "bi bi-heart",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1171",
			"title": "heart-arrow",
			"className": "bi bi-heart-arrow",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1172",
			"title": "heart-fill",
			"className": "bi bi-heart-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1173",
			"title": "heart-half",
			"className": "bi bi-heart-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1174",
			"title": "heart-pulse",
			"className": "bi bi-heart-pulse",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1175",
			"title": "heart-pulse-fill",
			"className": "bi bi-heart-pulse-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1176",
			"title": "heartbreak",
			"className": "bi bi-heartbreak",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1177",
			"title": "heartbreak-fill",
			"className": "bi bi-heartbreak-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1178",
			"title": "hearts",
			"className": "bi bi-hearts",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1179",
			"title": "heptagon",
			"className": "bi bi-heptagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1180",
			"title": "heptagon-fill",
			"className": "bi bi-heptagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1181",
			"title": "heptagon-half",
			"className": "bi bi-heptagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1182",
			"title": "hexagon",
			"className": "bi bi-hexagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1183",
			"title": "hexagon-fill",
			"className": "bi bi-hexagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1184",
			"title": "hexagon-half",
			"className": "bi bi-hexagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1185",
			"title": "highlighter",
			"className": "bi bi-highlighter",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1186",
			"title": "highlights",
			"className": "bi bi-highlights",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1187",
			"title": "hospital",
			"className": "bi bi-hospital",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1188",
			"title": "hospital-fill",
			"className": "bi bi-hospital-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1189",
			"title": "hourglass",
			"className": "bi bi-hourglass",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1190",
			"title": "hourglass-bottom",
			"className": "bi bi-hourglass-bottom",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1191",
			"title": "hourglass-split",
			"className": "bi bi-hourglass-split",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1192",
			"title": "hourglass-top",
			"className": "bi bi-hourglass-top",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1193",
			"title": "house",
			"className": "bi bi-house",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1194",
			"title": "house-add",
			"className": "bi bi-house-add",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1195",
			"title": "house-add-fill",
			"className": "bi bi-house-add-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1196",
			"title": "house-check",
			"className": "bi bi-house-check",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1197",
			"title": "house-check-fill",
			"className": "bi bi-house-check-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1198",
			"title": "house-dash",
			"className": "bi bi-house-dash",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1199",
			"title": "house-dash-fill",
			"className": "bi bi-house-dash-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1200",
			"title": "house-door",
			"className": "bi bi-house-door",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1201",
			"title": "house-door-fill",
			"className": "bi bi-house-door-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1202",
			"title": "house-down",
			"className": "bi bi-house-down",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1203",
			"title": "house-down-fill",
			"className": "bi bi-house-down-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1204",
			"title": "house-exclamation",
			"className": "bi bi-house-exclamation",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1205",
			"title": "house-exclamation-fill",
			"className": "bi bi-house-exclamation-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1206",
			"title": "house-fill",
			"className": "bi bi-house-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1207",
			"title": "house-gear",
			"className": "bi bi-house-gear",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1208",
			"title": "house-gear-fill",
			"className": "bi bi-house-gear-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1209",
			"title": "house-heart",
			"className": "bi bi-house-heart",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1210",
			"title": "house-heart-fill",
			"className": "bi bi-house-heart-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1211",
			"title": "house-lock",
			"className": "bi bi-house-lock",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1212",
			"title": "house-lock-fill",
			"className": "bi bi-house-lock-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1213",
			"title": "house-slash",
			"className": "bi bi-house-slash",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1214",
			"title": "house-slash-fill",
			"className": "bi bi-house-slash-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1215",
			"title": "house-up",
			"className": "bi bi-house-up",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1216",
			"title": "house-up-fill",
			"className": "bi bi-house-up-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1217",
			"title": "house-x",
			"className": "bi bi-house-x",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1218",
			"title": "house-x-fill",
			"className": "bi bi-house-x-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1219",
			"title": "houses",
			"className": "bi bi-houses",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1220",
			"title": "houses-fill",
			"className": "bi bi-houses-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1221",
			"title": "hr",
			"className": "bi bi-hr",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1222",
			"title": "hurricane",
			"className": "bi bi-hurricane",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1223",
			"title": "hypnotize",
			"className": "bi bi-hypnotize",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1224",
			"title": "image",
			"className": "bi bi-image",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1225",
			"title": "image-alt",
			"className": "bi bi-image-alt",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1226",
			"title": "image-fill",
			"className": "bi bi-image-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1227",
			"title": "images",
			"className": "bi bi-images",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1228",
			"title": "inbox",
			"className": "bi bi-inbox",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1229",
			"title": "inbox-fill",
			"className": "bi bi-inbox-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1230",
			"title": "inboxes-fill",
			"className": "bi bi-inboxes-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1231",
			"title": "inboxes",
			"className": "bi bi-inboxes",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1232",
			"title": "incognito",
			"className": "bi bi-incognito",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1233",
			"title": "indent",
			"className": "bi bi-indent",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1234",
			"title": "infinity",
			"className": "bi bi-infinity",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1235",
			"title": "info",
			"className": "bi bi-info",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1236",
			"title": "info-circle",
			"className": "bi bi-info-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1237",
			"title": "info-circle-fill",
			"className": "bi bi-info-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1238",
			"title": "info-lg",
			"className": "bi bi-info-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1239",
			"title": "info-square",
			"className": "bi bi-info-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1240",
			"title": "info-square-fill",
			"className": "bi bi-info-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1241",
			"title": "input-cursor",
			"className": "bi bi-input-cursor",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1242",
			"title": "input-cursor-text",
			"className": "bi bi-input-cursor-text",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1243",
			"title": "instagram",
			"className": "bi bi-instagram",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1244",
			"title": "intersect",
			"className": "bi bi-intersect",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1245",
			"title": "journal",
			"className": "bi bi-journal",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1246",
			"title": "journal-album",
			"className": "bi bi-journal-album",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1247",
			"title": "journal-arrow-down",
			"className": "bi bi-journal-arrow-down",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1248",
			"title": "journal-arrow-up",
			"className": "bi bi-journal-arrow-up",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1249",
			"title": "journal-bookmark",
			"className": "bi bi-journal-bookmark",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1250",
			"title": "journal-bookmark-fill",
			"className": "bi bi-journal-bookmark-fill",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1251",
			"title": "journal-check",
			"className": "bi bi-journal-check",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1252",
			"title": "journal-code",
			"className": "bi bi-journal-code",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1253",
			"title": "journal-medical",
			"className": "bi bi-journal-medical",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1254",
			"title": "journal-minus",
			"className": "bi bi-journal-minus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1255",
			"title": "journal-plus",
			"className": "bi bi-journal-plus",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1256",
			"title": "journal-richtext",
			"className": "bi bi-journal-richtext",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1257",
			"title": "journal-text",
			"className": "bi bi-journal-text",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1258",
			"title": "journal-x",
			"className": "bi bi-journal-x",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1259",
			"title": "journals",
			"className": "bi bi-journals",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1260",
			"title": "joystick",
			"className": "bi bi-joystick",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1261",
			"title": "justify",
			"className": "bi bi-justify",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1262",
			"title": "justify-left",
			"className": "bi bi-justify-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1263",
			"title": "justify-right",
			"className": "bi bi-justify-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1264",
			"title": "kanban",
			"className": "bi bi-kanban",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1265",
			"title": "kanban-fill",
			"className": "bi bi-kanban-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1266",
			"title": "key",
			"className": "bi bi-key",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1267",
			"title": "key-fill",
			"className": "bi bi-key-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1268",
			"title": "keyboard",
			"className": "bi bi-keyboard",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1269",
			"title": "keyboard-fill",
			"className": "bi bi-keyboard-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1270",
			"title": "ladder",
			"className": "bi bi-ladder",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1271",
			"title": "lamp",
			"className": "bi bi-lamp",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1272",
			"title": "lamp-fill",
			"className": "bi bi-lamp-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1273",
			"title": "laptop",
			"className": "bi bi-laptop",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1274",
			"title": "laptop-fill",
			"className": "bi bi-laptop-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1275",
			"title": "layer-backward",
			"className": "bi bi-layer-backward",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1276",
			"title": "layer-forward",
			"className": "bi bi-layer-forward",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1277",
			"title": "layers",
			"className": "bi bi-layers",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1278",
			"title": "layers-fill",
			"className": "bi bi-layers-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1279",
			"title": "layers-half",
			"className": "bi bi-layers-half",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1280",
			"title": "layout-sidebar",
			"className": "bi bi-layout-sidebar",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1281",
			"title": "layout-sidebar-inset-reverse",
			"className": "bi bi-layout-sidebar-inset-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1282",
			"title": "layout-sidebar-inset",
			"className": "bi bi-layout-sidebar-inset",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1283",
			"title": "layout-sidebar-reverse",
			"className": "bi bi-layout-sidebar-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1284",
			"title": "layout-split",
			"className": "bi bi-layout-split",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1285",
			"title": "layout-text-sidebar",
			"className": "bi bi-layout-text-sidebar",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1286",
			"title": "layout-text-sidebar-reverse",
			"className": "bi bi-layout-text-sidebar-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1287",
			"title": "layout-text-window",
			"className": "bi bi-layout-text-window",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1288",
			"title": "layout-text-window-reverse",
			"className": "bi bi-layout-text-window-reverse",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1289",
			"title": "layout-three-columns",
			"className": "bi bi-layout-three-columns",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1290",
			"title": "layout-wtf",
			"className": "bi bi-layout-wtf",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi1291",
			"title": "life-preserver",
			"className": "bi bi-life-preserver",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1292",
			"title": "lightbulb",
			"className": "bi bi-lightbulb",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1293",
			"title": "lightbulb-fill",
			"className": "bi bi-lightbulb-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1294",
			"title": "lightbulb-off",
			"className": "bi bi-lightbulb-off",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1295",
			"title": "lightbulb-off-fill",
			"className": "bi bi-lightbulb-off-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1296",
			"title": "lightning",
			"className": "bi bi-lightning",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1297",
			"title": "lightning-charge",
			"className": "bi bi-lightning-charge",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1298",
			"title": "lightning-charge-fill",
			"className": "bi bi-lightning-charge-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1299",
			"title": "lightning-fill",
			"className": "bi bi-lightning-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1300",
			"title": "line",
			"className": "bi bi-line",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1301",
			"title": "link",
			"className": "bi bi-link",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1302",
			"title": "link-45deg",
			"className": "bi bi-link-45deg",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1303",
			"title": "linkedin",
			"className": "bi bi-linkedin",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1304",
			"title": "list",
			"className": "bi bi-list",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1305",
			"title": "list-check",
			"className": "bi bi-list-check",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1306",
			"title": "list-columns",
			"className": "bi bi-list-columns",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1307",
			"title": "list-columns-reverse",
			"className": "bi bi-list-columns-reverse",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1308",
			"title": "list-nested",
			"className": "bi bi-list-nested",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1309",
			"title": "list-ol",
			"className": "bi bi-list-ol",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1310",
			"title": "list-stars",
			"className": "bi bi-list-stars",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1311",
			"title": "list-task",
			"className": "bi bi-list-task",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1312",
			"title": "list-ul",
			"className": "bi bi-list-ul",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1313",
			"title": "lock",
			"className": "bi bi-lock",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1314",
			"title": "lock-fill",
			"className": "bi bi-lock-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1315",
			"title": "luggage",
			"className": "bi bi-luggage",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1316",
			"title": "luggage-fill",
			"className": "bi bi-luggage-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1317",
			"title": "lungs",
			"className": "bi bi-lungs",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1318",
			"title": "lungs-fill",
			"className": "bi bi-lungs-fill",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1319",
			"title": "magic",
			"className": "bi bi-magic",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1320",
			"title": "magnet",
			"className": "bi bi-magnet",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1321",
			"title": "magnet-fill",
			"className": "bi bi-magnet-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1322",
			"title": "mailbox",
			"className": "bi bi-mailbox",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1323",
			"title": "mailbox-flag",
			"className": "bi bi-mailbox-flag",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1324",
			"title": "mailbox2",
			"className": "bi bi-mailbox2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1325",
			"title": "mailbox2-flag",
			"className": "bi bi-mailbox2-flag",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1326",
			"title": "map",
			"className": "bi bi-map",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1327",
			"title": "map-fill",
			"className": "bi bi-map-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1328",
			"title": "markdown",
			"className": "bi bi-markdown",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1329",
			"title": "markdown-fill",
			"className": "bi bi-markdown-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1330",
			"title": "marker-tip",
			"className": "bi bi-marker-tip",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1331",
			"title": "mask",
			"className": "bi bi-mask",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1332",
			"title": "mastodon",
			"className": "bi bi-mastodon",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1333",
			"title": "medium",
			"className": "bi bi-medium",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1334",
			"title": "megaphone",
			"className": "bi bi-megaphone",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1335",
			"title": "megaphone-fill",
			"className": "bi bi-megaphone-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1336",
			"title": "memory",
			"className": "bi bi-memory",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1337",
			"title": "menu-app",
			"className": "bi bi-menu-app",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1338",
			"title": "menu-app-fill",
			"className": "bi bi-menu-app-fill",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1339",
			"title": "menu-button",
			"className": "bi bi-menu-button",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1340",
			"title": "menu-button-fill",
			"className": "bi bi-menu-button-fill",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1341",
			"title": "menu-button-wide",
			"className": "bi bi-menu-button-wide",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1342",
			"title": "menu-button-wide-fill",
			"className": "bi bi-menu-button-wide-fill",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1343",
			"title": "menu-down",
			"className": "bi bi-menu-down",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1344",
			"title": "menu-up",
			"className": "bi bi-menu-up",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1345",
			"title": "messenger",
			"className": "bi bi-messenger",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1346",
			"title": "meta",
			"className": "bi bi-meta",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1347",
			"title": "mic",
			"className": "bi bi-mic",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1348",
			"title": "mic-fill",
			"className": "bi bi-mic-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1349",
			"title": "mic-mute",
			"className": "bi bi-mic-mute",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1350",
			"title": "mic-mute-fill",
			"className": "bi bi-mic-mute-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1351",
			"title": "microsoft",
			"className": "bi bi-microsoft",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1352",
			"title": "microsoft-teams",
			"className": "bi bi-microsoft-teams",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1353",
			"title": "minecart",
			"className": "bi bi-minecart",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1354",
			"title": "minecart-loaded",
			"className": "bi bi-minecart-loaded",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1355",
			"title": "modem",
			"className": "bi bi-modem",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1356",
			"title": "modem-fill",
			"className": "bi bi-modem-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1357",
			"title": "moisture",
			"className": "bi bi-moisture",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1358",
			"title": "moon",
			"className": "bi bi-moon",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1359",
			"title": "moon-fill",
			"className": "bi bi-moon-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1360",
			"title": "moon-stars",
			"className": "bi bi-moon-stars",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1361",
			"title": "moon-stars-fill",
			"className": "bi bi-moon-stars-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1362",
			"title": "mortarboard",
			"className": "bi bi-mortarboard",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1363",
			"title": "mortarboard-fill",
			"className": "bi bi-mortarboard-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1364",
			"title": "motherboard",
			"className": "bi bi-motherboard",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1365",
			"title": "motherboard-fill",
			"className": "bi bi-motherboard-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1366",
			"title": "mouse",
			"className": "bi bi-mouse",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1367",
			"title": "mouse-fill",
			"className": "bi bi-mouse-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1368",
			"title": "mouse2",
			"className": "bi bi-mouse2",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1369",
			"title": "mouse2-fill",
			"className": "bi bi-mouse2-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1370",
			"title": "mouse3",
			"className": "bi bi-mouse3",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1371",
			"title": "mouse3-fill",
			"className": "bi bi-mouse3-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1372",
			"title": "music-note",
			"className": "bi bi-music-note",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1373",
			"title": "music-note-beamed",
			"className": "bi bi-music-note-beamed",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1374",
			"title": "music-note-list",
			"className": "bi bi-music-note-list",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1375",
			"title": "music-player",
			"className": "bi bi-music-player",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1376",
			"title": "music-player-fill",
			"className": "bi bi-music-player-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1377",
			"title": "newspaper",
			"className": "bi bi-newspaper",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1378",
			"title": "nintendo-switch",
			"className": "bi bi-nintendo-switch",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1379",
			"title": "node-minus",
			"className": "bi bi-node-minus",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1380",
			"title": "node-minus-fill",
			"className": "bi bi-node-minus-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1381",
			"title": "node-plus",
			"className": "bi bi-node-plus",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1382",
			"title": "node-plus-fill",
			"className": "bi bi-node-plus-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1383",
			"title": "noise-reduction",
			"className": "bi bi-noise-reduction",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1384",
			"title": "nut",
			"className": "bi bi-nut",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1385",
			"title": "nut-fill",
			"className": "bi bi-nut-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1386",
			"title": "nvidia",
			"className": "bi bi-nvidia",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1387",
			"title": "nvme",
			"className": "bi bi-nvme",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1388",
			"title": "nvme-fill",
			"className": "bi bi-nvme-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1389",
			"title": "octagon",
			"className": "bi bi-octagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1390",
			"title": "octagon-fill",
			"className": "bi bi-octagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1391",
			"title": "octagon-half",
			"className": "bi bi-octagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1392",
			"title": "opencollective",
			"className": "bi bi-opencollective",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1393",
			"title": "optical-audio",
			"className": "bi bi-optical-audio",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1394",
			"title": "optical-audio-fill",
			"className": "bi bi-optical-audio-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1395",
			"title": "option",
			"className": "bi bi-option",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1396",
			"title": "outlet",
			"className": "bi bi-outlet",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1397",
			"title": "p-circle",
			"className": "bi bi-p-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1398",
			"title": "p-circle-fill",
			"className": "bi bi-p-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1399",
			"title": "p-square",
			"className": "bi bi-p-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1400",
			"title": "p-square-fill",
			"className": "bi bi-p-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1401",
			"title": "paint-bucket",
			"className": "bi bi-paint-bucket",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1402",
			"title": "palette",
			"className": "bi bi-palette",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1403",
			"title": "palette-fill",
			"className": "bi bi-palette-fill",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1404",
			"title": "palette2",
			"className": "bi bi-palette2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1405",
			"title": "paperclip",
			"className": "bi bi-paperclip",
			"type": "bi",
			"categories": [
				"office"
			]
		},
		{
			"name": "bi1406",
			"title": "paragraph",
			"className": "bi bi-paragraph",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1407",
			"title": "pass",
			"className": "bi bi-pass",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1408",
			"title": "pass-fill",
			"className": "bi bi-pass-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1409",
			"title": "passport",
			"className": "bi bi-passport",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1410",
			"title": "passport-fill",
			"className": "bi bi-passport-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1411",
			"title": "patch-check",
			"className": "bi bi-patch-check",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1412",
			"title": "patch-check-fill",
			"className": "bi bi-patch-check-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1413",
			"title": "patch-exclamation",
			"className": "bi bi-patch-exclamation",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1414",
			"title": "patch-exclamation-fill",
			"className": "bi bi-patch-exclamation-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1415",
			"title": "patch-minus",
			"className": "bi bi-patch-minus",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1416",
			"title": "patch-minus-fill",
			"className": "bi bi-patch-minus-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1417",
			"title": "patch-plus",
			"className": "bi bi-patch-plus",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1418",
			"title": "patch-plus-fill",
			"className": "bi bi-patch-plus-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1419",
			"title": "patch-question",
			"className": "bi bi-patch-question",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1420",
			"title": "patch-question-fill",
			"className": "bi bi-patch-question-fill",
			"type": "bi",
			"categories": [
				"badges"
			]
		},
		{
			"name": "bi1421",
			"title": "pause",
			"className": "bi bi-pause",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1422",
			"title": "pause-btn",
			"className": "bi bi-pause-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1423",
			"title": "pause-btn-fill",
			"className": "bi bi-pause-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1424",
			"title": "pause-circle",
			"className": "bi bi-pause-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1425",
			"title": "pause-circle-fill",
			"className": "bi bi-pause-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1426",
			"title": "pause-fill",
			"className": "bi bi-pause-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1427",
			"title": "paypal",
			"className": "bi bi-paypal",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1428",
			"title": "pc",
			"className": "bi bi-pc",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1429",
			"title": "pc-display",
			"className": "bi bi-pc-display",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1430",
			"title": "pc-display-horizontal",
			"className": "bi bi-pc-display-horizontal",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1431",
			"title": "pc-horizontal",
			"className": "bi bi-pc-horizontal",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1432",
			"title": "pci-card",
			"className": "bi bi-pci-card",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1433",
			"title": "pci-card-network",
			"className": "bi bi-pci-card-network",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1434",
			"title": "pci-card-sound",
			"className": "bi bi-pci-card-sound",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1435",
			"title": "peace",
			"className": "bi bi-peace",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1436",
			"title": "peace-fill",
			"className": "bi bi-peace-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1437",
			"title": "pen",
			"className": "bi bi-pen",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1438",
			"title": "pen-fill",
			"className": "bi bi-pen-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1439",
			"title": "pencil",
			"className": "bi bi-pencil",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1440",
			"title": "pencil-fill",
			"className": "bi bi-pencil-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1441",
			"title": "pencil-square",
			"className": "bi bi-pencil-square",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1442",
			"title": "pentagon",
			"className": "bi bi-pentagon",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1443",
			"title": "pentagon-fill",
			"className": "bi bi-pentagon-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1444",
			"title": "pentagon-half",
			"className": "bi bi-pentagon-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1445",
			"title": "people",
			"className": "bi bi-people",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1446",
			"title": "person-circle",
			"className": "bi bi-person-circle",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1447",
			"title": "people-fill",
			"className": "bi bi-people-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1448",
			"title": "percent",
			"className": "bi bi-percent",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1449",
			"title": "person",
			"className": "bi bi-person",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1450",
			"title": "person-add",
			"className": "bi bi-person-add",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1451",
			"title": "person-arms-up",
			"className": "bi bi-person-arms-up",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1452",
			"title": "person-badge",
			"className": "bi bi-person-badge",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1453",
			"title": "person-badge-fill",
			"className": "bi bi-person-badge-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1454",
			"title": "person-bounding-box",
			"className": "bi bi-person-bounding-box",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1455",
			"title": "person-check",
			"className": "bi bi-person-check",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1456",
			"title": "person-check-fill",
			"className": "bi bi-person-check-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1457",
			"title": "person-dash",
			"className": "bi bi-person-dash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1458",
			"title": "person-dash-fill",
			"className": "bi bi-person-dash-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1459",
			"title": "person-down",
			"className": "bi bi-person-down",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1460",
			"title": "person-exclamation",
			"className": "bi bi-person-exclamation",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1461",
			"title": "person-fill",
			"className": "bi bi-person-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1462",
			"title": "person-fill-add",
			"className": "bi bi-person-fill-add",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1463",
			"title": "person-fill-check",
			"className": "bi bi-person-fill-check",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1464",
			"title": "person-fill-dash",
			"className": "bi bi-person-fill-dash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1465",
			"title": "person-fill-down",
			"className": "bi bi-person-fill-down",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1466",
			"title": "person-fill-exclamation",
			"className": "bi bi-person-fill-exclamation",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1467",
			"title": "person-fill-gear",
			"className": "bi bi-person-fill-gear",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1468",
			"title": "person-fill-lock",
			"className": "bi bi-person-fill-lock",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1469",
			"title": "person-fill-slash",
			"className": "bi bi-person-fill-slash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1470",
			"title": "person-fill-up",
			"className": "bi bi-person-fill-up",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1471",
			"title": "person-fill-x",
			"className": "bi bi-person-fill-x",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1472",
			"title": "person-gear",
			"className": "bi bi-person-gear",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1473",
			"title": "person-heart",
			"className": "bi bi-person-heart",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1474",
			"title": "person-hearts",
			"className": "bi bi-person-hearts",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1475",
			"title": "person-lines-fill",
			"className": "bi bi-person-lines-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1476",
			"title": "person-lock",
			"className": "bi bi-person-lock",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1477",
			"title": "person-plus",
			"className": "bi bi-person-plus",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1478",
			"title": "person-plus-fill",
			"className": "bi bi-person-plus-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1479",
			"title": "person-raised-hand",
			"className": "bi bi-person-raised-hand",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1480",
			"title": "person-rolodex",
			"className": "bi bi-person-rolodex",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1481",
			"title": "person-slash",
			"className": "bi bi-person-slash",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1482",
			"title": "person-square",
			"className": "bi bi-person-square",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1483",
			"title": "person-standing",
			"className": "bi bi-person-standing",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1484",
			"title": "person-standing-dress",
			"className": "bi bi-person-standing-dress",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1485",
			"title": "person-up",
			"className": "bi bi-person-up",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1486",
			"title": "person-vcard",
			"className": "bi bi-person-vcard",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1487",
			"title": "person-vcard-fill",
			"className": "bi bi-person-vcard-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1488",
			"title": "person-video",
			"className": "bi bi-person-video",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1489",
			"title": "person-video2",
			"className": "bi bi-person-video2",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1490",
			"title": "person-video3",
			"className": "bi bi-person-video3",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1491",
			"title": "person-walking",
			"className": "bi bi-person-walking",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1492",
			"title": "person-wheelchair",
			"className": "bi bi-person-wheelchair",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1493",
			"title": "person-workspace",
			"className": "bi bi-person-workspace",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1494",
			"title": "person-x",
			"className": "bi bi-person-x",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1495",
			"title": "person-x-fill",
			"className": "bi bi-person-x-fill",
			"type": "bi",
			"categories": [
				"people"
			]
		},
		{
			"name": "bi1496",
			"title": "phone",
			"className": "bi bi-phone",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1497",
			"title": "phone-fill",
			"className": "bi bi-phone-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1498",
			"title": "phone-flip",
			"className": "bi bi-phone-flip",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1499",
			"title": "phone-landscape",
			"className": "bi bi-phone-landscape",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1500",
			"title": "phone-landscape-fill",
			"className": "bi bi-phone-landscape-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1501",
			"title": "phone-vibrate",
			"className": "bi bi-phone-vibrate",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1502",
			"title": "phone-vibrate-fill",
			"className": "bi bi-phone-vibrate-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1503",
			"title": "pie-chart",
			"className": "bi bi-pie-chart",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi1504",
			"title": "pie-chart-fill",
			"className": "bi bi-pie-chart-fill",
			"type": "bi",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "bi1505",
			"title": "piggy-bank",
			"className": "bi bi-piggy-bank",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1506",
			"title": "piggy-bank-fill",
			"className": "bi bi-piggy-bank-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1507",
			"title": "pin",
			"className": "bi bi-pin",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1508",
			"title": "pin-angle",
			"className": "bi bi-pin-angle",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1509",
			"title": "pin-angle-fill",
			"className": "bi bi-pin-angle-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1510",
			"title": "pin-fill",
			"className": "bi bi-pin-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1511",
			"title": "pin-map",
			"className": "bi bi-pin-map",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1512",
			"title": "pin-map-fill",
			"className": "bi bi-pin-map-fill",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1513",
			"title": "pinterest",
			"className": "bi bi-pinterest",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1514",
			"title": "pip",
			"className": "bi bi-pip",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1515",
			"title": "pip-fill",
			"className": "bi bi-pip-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1516",
			"title": "play",
			"className": "bi bi-play",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1517",
			"title": "play-btn",
			"className": "bi bi-play-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1518",
			"title": "play-btn-fill",
			"className": "bi bi-play-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1519",
			"title": "play-circle",
			"className": "bi bi-play-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1520",
			"title": "play-circle-fill",
			"className": "bi bi-play-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1521",
			"title": "play-fill",
			"className": "bi bi-play-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1522",
			"title": "playstation",
			"className": "bi bi-playstation",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1523",
			"title": "plug",
			"className": "bi bi-plug",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1524",
			"title": "plug-fill",
			"className": "bi bi-plug-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1525",
			"title": "plugin",
			"className": "bi bi-plugin",
			"type": "bi",
			"categories": [
				"techy"
			]
		},
		{
			"name": "bi1526",
			"title": "plus",
			"className": "bi bi-plus",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1527",
			"title": "plus-circle",
			"className": "bi bi-plus-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1528",
			"title": "plus-circle-dotted",
			"className": "bi bi-plus-circle-dotted",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1529",
			"title": "plus-circle-fill",
			"className": "bi bi-plus-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1530",
			"title": "plus-lg",
			"className": "bi bi-plus-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1531",
			"title": "plus-slash-minus",
			"className": "bi bi-plus-slash-minus",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1532",
			"title": "plus-square",
			"className": "bi bi-plus-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1533",
			"title": "plus-square-dotted",
			"className": "bi bi-plus-square-dotted",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1534",
			"title": "plus-square-fill",
			"className": "bi bi-plus-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1535",
			"title": "postage",
			"className": "bi bi-postage",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1536",
			"title": "postage-fill",
			"className": "bi bi-postage-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1537",
			"title": "postage-heart",
			"className": "bi bi-postage-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1538",
			"title": "postage-heart-fill",
			"className": "bi bi-postage-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1539",
			"title": "postcard",
			"className": "bi bi-postcard",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1540",
			"title": "postcard-fill",
			"className": "bi bi-postcard-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1541",
			"title": "postcard-heart",
			"className": "bi bi-postcard-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1542",
			"title": "postcard-heart-fill",
			"className": "bi bi-postcard-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1543",
			"title": "power",
			"className": "bi bi-power",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1544",
			"title": "prescription",
			"className": "bi bi-prescription",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1545",
			"title": "prescription2",
			"className": "bi bi-prescription2",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1546",
			"title": "printer",
			"className": "bi bi-printer",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1547",
			"title": "printer-fill",
			"className": "bi bi-printer-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1548",
			"title": "projector",
			"className": "bi bi-projector",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1549",
			"title": "projector-fill",
			"className": "bi bi-projector-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1550",
			"title": "puzzle",
			"className": "bi bi-puzzle",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1551",
			"title": "puzzle-fill",
			"className": "bi bi-puzzle-fill",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1552",
			"title": "qr-code",
			"className": "bi bi-qr-code",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1553",
			"title": "qr-code-scan",
			"className": "bi bi-qr-code-scan",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1554",
			"title": "question",
			"className": "bi bi-question",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1555",
			"title": "question-circle",
			"className": "bi bi-question-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1556",
			"title": "question-diamond",
			"className": "bi bi-question-diamond",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1557",
			"title": "question-diamond-fill",
			"className": "bi bi-question-diamond-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1558",
			"title": "question-circle-fill",
			"className": "bi bi-question-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1559",
			"title": "question-lg",
			"className": "bi bi-question-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1560",
			"title": "question-octagon",
			"className": "bi bi-question-octagon",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1561",
			"title": "question-octagon-fill",
			"className": "bi bi-question-octagon-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1562",
			"title": "question-square",
			"className": "bi bi-question-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1563",
			"title": "question-square-fill",
			"className": "bi bi-question-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1564",
			"title": "quora",
			"className": "bi bi-quora",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1565",
			"title": "quote",
			"className": "bi bi-quote",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1566",
			"title": "r-circle",
			"className": "bi bi-r-circle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1567",
			"title": "r-circle-fill",
			"className": "bi bi-r-circle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1568",
			"title": "r-square",
			"className": "bi bi-r-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1569",
			"title": "r-square-fill",
			"className": "bi bi-r-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1570",
			"title": "radar",
			"className": "bi bi-radar",
			"type": "bi",
			"categories": [
				"geo"
			]
		},
		{
			"name": "bi1571",
			"title": "radioactive",
			"className": "bi bi-radioactive",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1572",
			"title": "rainbow",
			"className": "bi bi-rainbow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1573",
			"title": "receipt",
			"className": "bi bi-receipt",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1574",
			"title": "receipt-cutoff",
			"className": "bi bi-receipt-cutoff",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1575",
			"title": "reception-0",
			"className": "bi bi-reception-0",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1576",
			"title": "reception-1",
			"className": "bi bi-reception-1",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1577",
			"title": "reception-2",
			"className": "bi bi-reception-2",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1578",
			"title": "reception-3",
			"className": "bi bi-reception-3",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1579",
			"title": "reception-4",
			"className": "bi bi-reception-4",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1580",
			"title": "record",
			"className": "bi bi-record",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1581",
			"title": "record-btn",
			"className": "bi bi-record-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1582",
			"title": "record-btn-fill",
			"className": "bi bi-record-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1583",
			"title": "record-circle",
			"className": "bi bi-record-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1584",
			"title": "record-circle-fill",
			"className": "bi bi-record-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1585",
			"title": "record-fill",
			"className": "bi bi-record-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1586",
			"title": "record2",
			"className": "bi bi-record2",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1587",
			"title": "record2-fill",
			"className": "bi bi-record2-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1588",
			"title": "recycle",
			"className": "bi bi-recycle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi1589",
			"title": "reddit",
			"className": "bi bi-reddit",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1590",
			"title": "regex",
			"className": "bi bi-regex",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1591",
			"title": "repeat",
			"className": "bi bi-repeat",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1592",
			"title": "repeat-1",
			"className": "bi bi-repeat-1",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1593",
			"title": "reply",
			"className": "bi bi-reply",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1594",
			"title": "reply-all",
			"className": "bi bi-reply-all",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1595",
			"title": "reply-all-fill",
			"className": "bi bi-reply-all-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1596",
			"title": "reply-fill",
			"className": "bi bi-reply-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1597",
			"title": "rewind",
			"className": "bi bi-rewind",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1598",
			"title": "rewind-btn",
			"className": "bi bi-rewind-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1599",
			"title": "rewind-btn-fill",
			"className": "bi bi-rewind-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1600",
			"title": "rewind-circle",
			"className": "bi bi-rewind-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1601",
			"title": "rewind-circle-fill",
			"className": "bi bi-rewind-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1602",
			"title": "rewind-fill",
			"className": "bi bi-rewind-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1603",
			"title": "robot",
			"className": "bi bi-robot",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1604",
			"title": "rocket",
			"className": "bi bi-rocket",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1605",
			"title": "rocket-fill",
			"className": "bi bi-rocket-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1606",
			"title": "rocket-takeoff",
			"className": "bi bi-rocket-takeoff",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1607",
			"title": "rocket-takeoff-fill",
			"className": "bi bi-rocket-takeoff-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1608",
			"title": "router",
			"className": "bi bi-router",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1609",
			"title": "router-fill",
			"className": "bi bi-router-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1610",
			"title": "rss",
			"className": "bi bi-rss",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1611",
			"title": "rss-fill",
			"className": "bi bi-rss-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1612",
			"title": "rulers",
			"className": "bi bi-rulers",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1613",
			"title": "safe",
			"className": "bi bi-safe",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1614",
			"title": "safe-fill",
			"className": "bi bi-safe-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1615",
			"title": "safe2",
			"className": "bi bi-safe2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1616",
			"title": "safe2-fill",
			"className": "bi bi-safe2-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1617",
			"title": "save",
			"className": "bi bi-save",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1618",
			"title": "save-fill",
			"className": "bi bi-save-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1619",
			"title": "save2",
			"className": "bi bi-save2",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1620",
			"title": "save2-fill",
			"className": "bi bi-save2-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1621",
			"title": "scissors",
			"className": "bi bi-scissors",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1622",
			"title": "scooter",
			"className": "bi bi-scooter",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1623",
			"title": "screwdriver",
			"className": "bi bi-screwdriver",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1624",
			"title": "sd-card",
			"className": "bi bi-sd-card",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1625",
			"title": "sd-card-fill",
			"className": "bi bi-sd-card-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1626",
			"title": "search",
			"className": "bi bi-search",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1627",
			"title": "search-heart",
			"className": "bi bi-search-heart",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1628",
			"title": "search-heart-fill",
			"className": "bi bi-search-heart-fill",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1629",
			"title": "segmented-nav",
			"className": "bi bi-segmented-nav",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1630",
			"title": "send",
			"className": "bi bi-send",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1631",
			"title": "send-arrow-down",
			"className": "bi bi-send-arrow-down",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1632",
			"title": "send-arrow-down-fill",
			"className": "bi bi-send-arrow-down-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1633",
			"title": "send-arrow-up",
			"className": "bi bi-send-arrow-up",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1634",
			"title": "send-arrow-up-fill",
			"className": "bi bi-send-arrow-up-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1635",
			"title": "send-check",
			"className": "bi bi-send-check",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1636",
			"title": "send-check-fill",
			"className": "bi bi-send-check-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1637",
			"title": "send-dash",
			"className": "bi bi-send-dash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1638",
			"title": "send-dash-fill",
			"className": "bi bi-send-dash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1639",
			"title": "send-exclamation",
			"className": "bi bi-send-exclamation",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1640",
			"title": "send-exclamation-fill",
			"className": "bi bi-send-exclamation-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1641",
			"title": "send-fill",
			"className": "bi bi-send-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1642",
			"title": "send-plus",
			"className": "bi bi-send-plus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1643",
			"title": "send-plus-fill",
			"className": "bi bi-send-plus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1644",
			"title": "send-slash",
			"className": "bi bi-send-slash",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1645",
			"title": "send-slash-fill",
			"className": "bi bi-send-slash-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1646",
			"title": "send-x",
			"className": "bi bi-send-x",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1647",
			"title": "send-x-fill",
			"className": "bi bi-send-x-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1648",
			"title": "server",
			"className": "bi bi-server",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1649",
			"title": "shadows",
			"className": "bi bi-shadows",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1650",
			"title": "share",
			"className": "bi bi-share",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1651",
			"title": "share-fill",
			"className": "bi bi-share-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1652",
			"title": "shield",
			"className": "bi bi-shield",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1653",
			"title": "shield-check",
			"className": "bi bi-shield-check",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1654",
			"title": "shield-exclamation",
			"className": "bi bi-shield-exclamation",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1655",
			"title": "shield-fill",
			"className": "bi bi-shield-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1656",
			"title": "shield-fill-check",
			"className": "bi bi-shield-fill-check",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1657",
			"title": "shield-fill-exclamation",
			"className": "bi bi-shield-fill-exclamation",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1658",
			"title": "shield-fill-minus",
			"className": "bi bi-shield-fill-minus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1659",
			"title": "shield-fill-plus",
			"className": "bi bi-shield-fill-plus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1660",
			"title": "shield-fill-x",
			"className": "bi bi-shield-fill-x",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1661",
			"title": "shield-lock",
			"className": "bi bi-shield-lock",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1662",
			"title": "shield-lock-fill",
			"className": "bi bi-shield-lock-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1663",
			"title": "shield-minus",
			"className": "bi bi-shield-minus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1664",
			"title": "shield-plus",
			"className": "bi bi-shield-plus",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1665",
			"title": "shield-shaded",
			"className": "bi bi-shield-shaded",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1666",
			"title": "shield-slash",
			"className": "bi bi-shield-slash",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1667",
			"title": "shield-slash-fill",
			"className": "bi bi-shield-slash-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1668",
			"title": "shield-x",
			"className": "bi bi-shield-x",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1669",
			"title": "shift",
			"className": "bi bi-shift",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1670",
			"title": "shift-fill",
			"className": "bi bi-shift-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1671",
			"title": "shop",
			"className": "bi bi-shop",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1672",
			"title": "shop-window",
			"className": "bi bi-shop-window",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1673",
			"title": "shuffle",
			"className": "bi bi-shuffle",
			"type": "bi",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "bi1674",
			"title": "sign-dead-end",
			"className": "bi bi-sign-dead-end",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1675",
			"title": "sign-dead-end-fill",
			"className": "bi bi-sign-dead-end-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1676",
			"title": "sign-do-not-enter",
			"className": "bi bi-sign-do-not-enter",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1677",
			"title": "sign-do-not-enter-fill",
			"className": "bi bi-sign-do-not-enter-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1678",
			"title": "sign-intersection",
			"className": "bi bi-sign-intersection",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1679",
			"title": "sign-intersection-fill",
			"className": "bi bi-sign-intersection-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1680",
			"title": "sign-intersection-side",
			"className": "bi bi-sign-intersection-side",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1681",
			"title": "sign-intersection-side-fill",
			"className": "bi bi-sign-intersection-side-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1682",
			"title": "sign-intersection-t",
			"className": "bi bi-sign-intersection-t",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1683",
			"title": "sign-intersection-t-fill",
			"className": "bi bi-sign-intersection-t-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1684",
			"title": "sign-intersection-y",
			"className": "bi bi-sign-intersection-y",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1685",
			"title": "sign-intersection-y-fill",
			"className": "bi bi-sign-intersection-y-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1686",
			"title": "sign-merge-left",
			"className": "bi bi-sign-merge-left",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1687",
			"title": "sign-merge-left-fill",
			"className": "bi bi-sign-merge-left-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1688",
			"title": "sign-merge-right",
			"className": "bi bi-sign-merge-right",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1689",
			"title": "sign-merge-right-fill",
			"className": "bi bi-sign-merge-right-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1690",
			"title": "sign-no-left-turn",
			"className": "bi bi-sign-no-left-turn",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1691",
			"title": "sign-no-left-turn-fill",
			"className": "bi bi-sign-no-left-turn-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1692",
			"title": "sign-no-parking",
			"className": "bi bi-sign-no-parking",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1693",
			"title": "sign-no-parking-fill",
			"className": "bi bi-sign-no-parking-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1694",
			"title": "sign-no-right-turn",
			"className": "bi bi-sign-no-right-turn",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1695",
			"title": "sign-no-right-turn-fill",
			"className": "bi bi-sign-no-right-turn-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1696",
			"title": "sign-railroad",
			"className": "bi bi-sign-railroad",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1697",
			"title": "sign-railroad-fill",
			"className": "bi bi-sign-railroad-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1698",
			"title": "sign-stop",
			"className": "bi bi-sign-stop",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1699",
			"title": "sign-stop-fill",
			"className": "bi bi-sign-stop-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1700",
			"title": "sign-stop-lights",
			"className": "bi bi-sign-stop-lights",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1701",
			"title": "sign-stop-lights-fill",
			"className": "bi bi-sign-stop-lights-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1702",
			"title": "sign-turn-left",
			"className": "bi bi-sign-turn-left",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1703",
			"title": "sign-turn-left-fill",
			"className": "bi bi-sign-turn-left-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1704",
			"title": "sign-turn-right",
			"className": "bi bi-sign-turn-right",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1705",
			"title": "sign-turn-right-fill",
			"className": "bi bi-sign-turn-right-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1706",
			"title": "sign-turn-slight-left",
			"className": "bi bi-sign-turn-slight-left",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1707",
			"title": "sign-turn-slight-left-fill",
			"className": "bi bi-sign-turn-slight-left-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1708",
			"title": "sign-turn-slight-right",
			"className": "bi bi-sign-turn-slight-right",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1709",
			"title": "sign-turn-slight-right-fill",
			"className": "bi bi-sign-turn-slight-right-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1710",
			"title": "sign-yield",
			"className": "bi bi-sign-yield",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1711",
			"title": "sign-yield-fill",
			"className": "bi bi-sign-yield-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1712",
			"title": "signal",
			"className": "bi bi-signal",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1713",
			"title": "signpost",
			"className": "bi bi-signpost",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1714",
			"title": "signpost-2",
			"className": "bi bi-signpost-2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1715",
			"title": "signpost-2-fill",
			"className": "bi bi-signpost-2-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1716",
			"title": "signpost-fill",
			"className": "bi bi-signpost-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1717",
			"title": "signpost-split",
			"className": "bi bi-signpost-split",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1718",
			"title": "signpost-split-fill",
			"className": "bi bi-signpost-split-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1719",
			"title": "sim",
			"className": "bi bi-sim",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1720",
			"title": "sim-fill",
			"className": "bi bi-sim-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1721",
			"title": "sim-slash",
			"className": "bi bi-sim-slash",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1722",
			"title": "sim-slash-fill",
			"className": "bi bi-sim-slash-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1723",
			"title": "sina-weibo",
			"className": "bi bi-sina-weibo",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1724",
			"title": "skip-backward",
			"className": "bi bi-skip-backward",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1725",
			"title": "skip-backward-btn",
			"className": "bi bi-skip-backward-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1726",
			"title": "skip-backward-btn-fill",
			"className": "bi bi-skip-backward-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1727",
			"title": "skip-backward-circle",
			"className": "bi bi-skip-backward-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1728",
			"title": "skip-backward-circle-fill",
			"className": "bi bi-skip-backward-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1729",
			"title": "skip-backward-fill",
			"className": "bi bi-skip-backward-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1730",
			"title": "skip-end",
			"className": "bi bi-skip-end",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1731",
			"title": "skip-end-btn",
			"className": "bi bi-skip-end-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1732",
			"title": "skip-end-btn-fill",
			"className": "bi bi-skip-end-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1733",
			"title": "skip-end-circle",
			"className": "bi bi-skip-end-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1734",
			"title": "skip-end-circle-fill",
			"className": "bi bi-skip-end-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1735",
			"title": "skip-end-fill",
			"className": "bi bi-skip-end-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1736",
			"title": "skip-forward",
			"className": "bi bi-skip-forward",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1737",
			"title": "skip-forward-btn",
			"className": "bi bi-skip-forward-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1738",
			"title": "skip-forward-btn-fill",
			"className": "bi bi-skip-forward-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1739",
			"title": "skip-forward-circle",
			"className": "bi bi-skip-forward-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1740",
			"title": "skip-forward-circle-fill",
			"className": "bi bi-skip-forward-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1741",
			"title": "skip-forward-fill",
			"className": "bi bi-skip-forward-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1742",
			"title": "skip-start",
			"className": "bi bi-skip-start",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1743",
			"title": "skip-start-btn",
			"className": "bi bi-skip-start-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1744",
			"title": "skip-start-btn-fill",
			"className": "bi bi-skip-start-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1745",
			"title": "skip-start-circle",
			"className": "bi bi-skip-start-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1746",
			"title": "skip-start-circle-fill",
			"className": "bi bi-skip-start-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1747",
			"title": "skip-start-fill",
			"className": "bi bi-skip-start-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1748",
			"title": "skype",
			"className": "bi bi-skype",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1749",
			"title": "slack",
			"className": "bi bi-slack",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1750",
			"title": "slash",
			"className": "bi bi-slash",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1751",
			"title": "slash-circle-fill",
			"className": "bi bi-slash-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1752",
			"title": "slash-lg",
			"className": "bi bi-slash-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1753",
			"title": "slash-square",
			"className": "bi bi-slash-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1754",
			"title": "slash-square-fill",
			"className": "bi bi-slash-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi1755",
			"title": "sliders",
			"className": "bi bi-sliders",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1756",
			"title": "sliders2",
			"className": "bi bi-sliders2",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1757",
			"title": "sliders2-vertical",
			"className": "bi bi-sliders2-vertical",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1758",
			"title": "smartwatch",
			"className": "bi bi-smartwatch",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1759",
			"title": "snapchat",
			"className": "bi bi-snapchat",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1760",
			"title": "snow",
			"className": "bi bi-snow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1761",
			"title": "snow2",
			"className": "bi bi-snow2",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1762",
			"title": "snow3",
			"className": "bi bi-snow3",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1763",
			"title": "sort-alpha-down",
			"className": "bi bi-sort-alpha-down",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1764",
			"title": "sort-alpha-down-alt",
			"className": "bi bi-sort-alpha-down-alt",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1765",
			"title": "sort-alpha-up",
			"className": "bi bi-sort-alpha-up",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1766",
			"title": "sort-alpha-up-alt",
			"className": "bi bi-sort-alpha-up-alt",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1767",
			"title": "sort-down",
			"className": "bi bi-sort-down",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1768",
			"title": "sort-down-alt",
			"className": "bi bi-sort-down-alt",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1769",
			"title": "sort-numeric-down",
			"className": "bi bi-sort-numeric-down",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1770",
			"title": "sort-numeric-down-alt",
			"className": "bi bi-sort-numeric-down-alt",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1771",
			"title": "sort-numeric-up",
			"className": "bi bi-sort-numeric-up",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1772",
			"title": "sort-numeric-up-alt",
			"className": "bi bi-sort-numeric-up-alt",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1773",
			"title": "sort-up",
			"className": "bi bi-sort-up",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1774",
			"title": "sort-up-alt",
			"className": "bi bi-sort-up-alt",
			"type": "bi",
			"categories": [
				"sort+filter"
			]
		},
		{
			"name": "bi1775",
			"title": "soundwave",
			"className": "bi bi-soundwave",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1776",
			"title": "sourceforge",
			"className": "bi bi-sourceforge",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1777",
			"title": "speaker",
			"className": "bi bi-speaker",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1778",
			"title": "speaker-fill",
			"className": "bi bi-speaker-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1779",
			"title": "speedometer",
			"className": "bi bi-speedometer",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1780",
			"title": "speedometer2",
			"className": "bi bi-speedometer2",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1781",
			"title": "spellcheck",
			"className": "bi bi-spellcheck",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1782",
			"title": "spotify",
			"className": "bi bi-spotify",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1783",
			"title": "square",
			"className": "bi bi-square",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1784",
			"title": "square-fill",
			"className": "bi bi-square-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1785",
			"title": "square-half",
			"className": "bi bi-square-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1786",
			"title": "stack",
			"className": "bi bi-stack",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1787",
			"title": "stack-overflow",
			"className": "bi bi-stack-overflow",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1788",
			"title": "star",
			"className": "bi bi-star",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1789",
			"title": "star-fill",
			"className": "bi bi-star-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1790",
			"title": "star-half",
			"className": "bi bi-star-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1791",
			"title": "stars",
			"className": "bi bi-stars",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1792",
			"title": "steam",
			"className": "bi bi-steam",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1793",
			"title": "stickies",
			"className": "bi bi-stickies",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1794",
			"title": "stickies-fill",
			"className": "bi bi-stickies-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1795",
			"title": "sticky",
			"className": "bi bi-sticky",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1796",
			"title": "sticky-fill",
			"className": "bi bi-sticky-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1797",
			"title": "stop",
			"className": "bi bi-stop",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1798",
			"title": "stop-btn",
			"className": "bi bi-stop-btn",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1799",
			"title": "stop-btn-fill",
			"className": "bi bi-stop-btn-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1800",
			"title": "stop-circle",
			"className": "bi bi-stop-circle",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1801",
			"title": "stop-circle-fill",
			"className": "bi bi-stop-circle-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1802",
			"title": "stop-fill",
			"className": "bi bi-stop-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1803",
			"title": "stoplights",
			"className": "bi bi-stoplights",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1804",
			"title": "stoplights-fill",
			"className": "bi bi-stoplights-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1805",
			"title": "stopwatch",
			"className": "bi bi-stopwatch",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1806",
			"title": "stopwatch-fill",
			"className": "bi bi-stopwatch-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1807",
			"title": "strava",
			"className": "bi bi-strava",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1808",
			"title": "stripe",
			"className": "bi bi-stripe",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1809",
			"title": "subscript",
			"className": "bi bi-subscript",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1810",
			"title": "substack",
			"className": "bi bi-substack",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1811",
			"title": "subtract",
			"className": "bi bi-subtract",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1812",
			"title": "suit-club",
			"className": "bi bi-suit-club",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1813",
			"title": "suit-club-fill",
			"className": "bi bi-suit-club-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1814",
			"title": "suit-diamond",
			"className": "bi bi-suit-diamond",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1815",
			"title": "suit-diamond-fill",
			"className": "bi bi-suit-diamond-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1816",
			"title": "suit-heart",
			"className": "bi bi-suit-heart",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1817",
			"title": "suit-heart-fill",
			"className": "bi bi-suit-heart-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1818",
			"title": "suit-spade",
			"className": "bi bi-suit-spade",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1819",
			"title": "suit-spade-fill",
			"className": "bi bi-suit-spade-fill",
			"type": "bi",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "bi1820",
			"title": "suitcase",
			"className": "bi bi-suitcase",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1821",
			"title": "suitcase-fill",
			"className": "bi bi-suitcase-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1822",
			"title": "suitcase-lg",
			"className": "bi bi-suitcase-lg",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1823",
			"title": "suitcase-lg-fill",
			"className": "bi bi-suitcase-lg-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1824",
			"title": "suitcase2",
			"className": "bi bi-suitcase2",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1825",
			"title": "suitcase2-fill",
			"className": "bi bi-suitcase2-fill",
			"type": "bi",
			"categories": [
				"travel"
			]
		},
		{
			"name": "bi1826",
			"title": "sun",
			"className": "bi bi-sun",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1827",
			"title": "sun-fill",
			"className": "bi bi-sun-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1828",
			"title": "sunglasses",
			"className": "bi bi-sunglasses",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1829",
			"title": "sunrise",
			"className": "bi bi-sunrise",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1830",
			"title": "sunrise-fill",
			"className": "bi bi-sunrise-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1831",
			"title": "sunset",
			"className": "bi bi-sunset",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1832",
			"title": "sunset-fill",
			"className": "bi bi-sunset-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1833",
			"title": "superscript",
			"className": "bi bi-superscript",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1834",
			"title": "symmetry-horizontal",
			"className": "bi bi-symmetry-horizontal",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1835",
			"title": "symmetry-vertical",
			"className": "bi bi-symmetry-vertical",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1836",
			"title": "table",
			"className": "bi bi-table",
			"type": "bi",
			"categories": [
				"files"
			]
		},
		{
			"name": "bi1837",
			"title": "tablet",
			"className": "bi bi-tablet",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1838",
			"title": "tablet-fill",
			"className": "bi bi-tablet-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1839",
			"title": "tablet-landscape",
			"className": "bi bi-tablet-landscape",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1840",
			"title": "tablet-landscape-fill",
			"className": "bi bi-tablet-landscape-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1841",
			"title": "tag",
			"className": "bi bi-tag",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1842",
			"title": "tag-fill",
			"className": "bi bi-tag-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1843",
			"title": "tags",
			"className": "bi bi-tags",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1844",
			"title": "tags-fill",
			"className": "bi bi-tags-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1845",
			"title": "taxi-front",
			"className": "bi bi-taxi-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1846",
			"title": "taxi-front-fill",
			"className": "bi bi-taxi-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1847",
			"title": "telegram",
			"className": "bi bi-telegram",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1848",
			"title": "telephone",
			"className": "bi bi-telephone",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1849",
			"title": "telephone-fill",
			"className": "bi bi-telephone-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1850",
			"title": "telephone-forward",
			"className": "bi bi-telephone-forward",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1851",
			"title": "telephone-forward-fill",
			"className": "bi bi-telephone-forward-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1852",
			"title": "telephone-inbound",
			"className": "bi bi-telephone-inbound",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1853",
			"title": "telephone-inbound-fill",
			"className": "bi bi-telephone-inbound-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1854",
			"title": "telephone-minus",
			"className": "bi bi-telephone-minus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1855",
			"title": "telephone-minus-fill",
			"className": "bi bi-telephone-minus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1856",
			"title": "telephone-outbound",
			"className": "bi bi-telephone-outbound",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1857",
			"title": "telephone-outbound-fill",
			"className": "bi bi-telephone-outbound-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1858",
			"title": "telephone-plus",
			"className": "bi bi-telephone-plus",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1859",
			"title": "telephone-plus-fill",
			"className": "bi bi-telephone-plus-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1860",
			"title": "telephone-x",
			"className": "bi bi-telephone-x",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1861",
			"title": "telephone-x-fill",
			"className": "bi bi-telephone-x-fill",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1862",
			"title": "tencent-qq",
			"className": "bi bi-tencent-qq",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1863",
			"title": "terminal",
			"className": "bi bi-terminal",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi1864",
			"title": "terminal-dash",
			"className": "bi bi-terminal-dash",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi1865",
			"title": "terminal-fill",
			"className": "bi bi-terminal-fill",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi1866",
			"title": "terminal-plus",
			"className": "bi bi-terminal-plus",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi1867",
			"title": "terminal-split",
			"className": "bi bi-terminal-split",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi1868",
			"title": "terminal-x",
			"className": "bi bi-terminal-x",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi1869",
			"title": "text-center",
			"className": "bi bi-text-center",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1870",
			"title": "text-indent-left",
			"className": "bi bi-text-indent-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1871",
			"title": "text-indent-right",
			"className": "bi bi-text-indent-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1872",
			"title": "text-left",
			"className": "bi bi-text-left",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1873",
			"title": "text-paragraph",
			"className": "bi bi-text-paragraph",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1874",
			"title": "text-right",
			"className": "bi bi-text-right",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1875",
			"title": "text-wrap",
			"className": "bi bi-text-wrap",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1876",
			"title": "textarea",
			"className": "bi bi-textarea",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1877",
			"title": "textarea-resize",
			"className": "bi bi-textarea-resize",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1878",
			"title": "textarea-t",
			"className": "bi bi-textarea-t",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1879",
			"title": "thermometer",
			"className": "bi bi-thermometer",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1880",
			"title": "thermometer-half",
			"className": "bi bi-thermometer-half",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1881",
			"title": "thermometer-high",
			"className": "bi bi-thermometer-high",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1882",
			"title": "thermometer-low",
			"className": "bi bi-thermometer-low",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1883",
			"title": "thermometer-snow",
			"className": "bi bi-thermometer-snow",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1884",
			"title": "thermometer-sun",
			"className": "bi bi-thermometer-sun",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1885",
			"title": "threads",
			"className": "bi bi-threads",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1886",
			"title": "threads-fill",
			"className": "bi bi-threads-fill",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1887",
			"title": "three-dots",
			"className": "bi bi-three-dots",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1888",
			"title": "three-dots-vertical",
			"className": "bi bi-three-dots-vertical",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1889",
			"title": "thunderbolt",
			"className": "bi bi-thunderbolt",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1890",
			"title": "thunderbolt-fill",
			"className": "bi bi-thunderbolt-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1891",
			"title": "ticket",
			"className": "bi bi-ticket",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1892",
			"title": "ticket-detailed",
			"className": "bi bi-ticket-detailed",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1893",
			"title": "ticket-detailed-fill",
			"className": "bi bi-ticket-detailed-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1894",
			"title": "ticket-fill",
			"className": "bi bi-ticket-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1895",
			"title": "ticket-perforated",
			"className": "bi bi-ticket-perforated",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1896",
			"title": "ticket-perforated-fill",
			"className": "bi bi-ticket-perforated-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1897",
			"title": "tiktok",
			"className": "bi bi-tiktok",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1898",
			"title": "toggle-off",
			"className": "bi bi-toggle-off",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1899",
			"title": "toggle-on",
			"className": "bi bi-toggle-on",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1900",
			"title": "toggle2-off",
			"className": "bi bi-toggle2-off",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1901",
			"title": "toggle2-on",
			"className": "bi bi-toggle2-on",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1902",
			"title": "toggles",
			"className": "bi bi-toggles",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1903",
			"title": "toggles2",
			"className": "bi bi-toggles2",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1904",
			"title": "tools",
			"className": "bi bi-tools",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi1905",
			"title": "tornado",
			"className": "bi bi-tornado",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1906",
			"title": "train-freight-front",
			"className": "bi bi-train-freight-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1907",
			"title": "train-freight-front-fill",
			"className": "bi bi-train-freight-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1908",
			"title": "train-front",
			"className": "bi bi-train-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1909",
			"title": "train-front-fill",
			"className": "bi bi-train-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1910",
			"title": "train-lightrail-front",
			"className": "bi bi-train-lightrail-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1911",
			"title": "train-lightrail-front-fill",
			"className": "bi bi-train-lightrail-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1912",
			"title": "translate",
			"className": "bi bi-translate",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1913",
			"title": "transparency",
			"className": "bi bi-transparency",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1914",
			"title": "trash",
			"className": "bi bi-trash",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1915",
			"title": "trash-fill",
			"className": "bi bi-trash-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1916",
			"title": "trash2",
			"className": "bi bi-trash2",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1917",
			"title": "trash2-fill",
			"className": "bi bi-trash2-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1918",
			"title": "trash3",
			"className": "bi bi-trash3",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1919",
			"title": "trash3-fill",
			"className": "bi bi-trash3-fill",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1920",
			"title": "tree",
			"className": "bi bi-tree",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1921",
			"title": "tree-fill",
			"className": "bi bi-tree-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1922",
			"title": "trello",
			"className": "bi bi-trello",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1923",
			"title": "triangle",
			"className": "bi bi-triangle",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1924",
			"title": "triangle-fill",
			"className": "bi bi-triangle-fill",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1925",
			"title": "triangle-half",
			"className": "bi bi-triangle-half",
			"type": "bi",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "bi1926",
			"title": "trophy",
			"className": "bi bi-trophy",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1927",
			"title": "trophy-fill",
			"className": "bi bi-trophy-fill",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi1928",
			"title": "tropical-storm",
			"className": "bi bi-tropical-storm",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1929",
			"title": "truck",
			"className": "bi bi-truck",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1930",
			"title": "truck-flatbed",
			"className": "bi bi-truck-flatbed",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1931",
			"title": "truck-front",
			"className": "bi bi-truck-front",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1932",
			"title": "truck-front-fill",
			"className": "bi bi-truck-front-fill",
			"type": "bi",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "bi1933",
			"title": "tsunami",
			"className": "bi bi-tsunami",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1934",
			"title": "tv",
			"className": "bi bi-tv",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1935",
			"title": "tv-fill",
			"className": "bi bi-tv-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1936",
			"title": "twitch",
			"className": "bi bi-twitch",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1937",
			"title": "twitter",
			"className": "bi bi-twitter",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1938",
			"title": "twitter-x",
			"className": "bi bi-twitter-x",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1939",
			"title": "type",
			"className": "bi bi-type",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1940",
			"title": "type-bold",
			"className": "bi bi-type-bold",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1941",
			"title": "type-h1",
			"className": "bi bi-type-h1",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1942",
			"title": "type-h2",
			"className": "bi bi-type-h2",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1943",
			"title": "type-h3",
			"className": "bi bi-type-h3",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1944",
			"title": "type-h4",
			"className": "bi bi-type-h4",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1945",
			"title": "type-h5",
			"className": "bi bi-type-h5",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1946",
			"title": "type-h6",
			"className": "bi bi-type-h6",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1947",
			"title": "type-italic",
			"className": "bi bi-type-italic",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1948",
			"title": "type-strikethrough",
			"className": "bi bi-type-strikethrough",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1949",
			"title": "type-underline",
			"className": "bi bi-type-underline",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi1950",
			"title": "ubuntu",
			"className": "bi bi-ubuntu",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1951",
			"title": "ui-checks",
			"className": "bi bi-ui-checks",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1952",
			"title": "ui-checks-grid",
			"className": "bi bi-ui-checks-grid",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1953",
			"title": "ui-radios",
			"className": "bi bi-ui-radios",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1954",
			"title": "ui-radios-grid",
			"className": "bi bi-ui-radios-grid",
			"type": "bi",
			"categories": [
				"controls"
			]
		},
		{
			"name": "bi1955",
			"title": "umbrella",
			"className": "bi bi-umbrella",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1956",
			"title": "umbrella-fill",
			"className": "bi bi-umbrella-fill",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi1957",
			"title": "unindent",
			"className": "bi bi-unindent",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1958",
			"title": "union",
			"className": "bi bi-union",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1959",
			"title": "unity",
			"className": "bi bi-unity",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1960",
			"title": "universal-access",
			"className": "bi bi-universal-access",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1961",
			"title": "universal-access-circle",
			"className": "bi bi-universal-access-circle",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1962",
			"title": "unlock",
			"className": "bi bi-unlock",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1963",
			"title": "unlock-fill",
			"className": "bi bi-unlock-fill",
			"type": "bi",
			"categories": [
				"security"
			]
		},
		{
			"name": "bi1964",
			"title": "upc",
			"className": "bi bi-upc",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1965",
			"title": "upc-scan",
			"className": "bi bi-upc-scan",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi1966",
			"title": "upload",
			"className": "bi bi-upload",
			"type": "bi",
			"categories": [
				"miscellaneous"
			]
		},
		{
			"name": "bi1967",
			"title": "usb",
			"className": "bi bi-usb",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1968",
			"title": "usb-c",
			"className": "bi bi-usb-c",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1969",
			"title": "usb-c-fill",
			"className": "bi bi-usb-c-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1970",
			"title": "usb-drive",
			"className": "bi bi-usb-drive",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1971",
			"title": "usb-drive-fill",
			"className": "bi bi-usb-drive-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1972",
			"title": "usb-fill",
			"className": "bi bi-usb-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1973",
			"title": "usb-micro",
			"className": "bi bi-usb-micro",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1974",
			"title": "usb-micro-fill",
			"className": "bi bi-usb-micro-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1975",
			"title": "usb-mini",
			"className": "bi bi-usb-mini",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1976",
			"title": "usb-mini-fill",
			"className": "bi bi-usb-mini-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1977",
			"title": "usb-plug",
			"className": "bi bi-usb-plug",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1978",
			"title": "usb-plug-fill",
			"className": "bi bi-usb-plug-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1979",
			"title": "usb-symbol",
			"className": "bi bi-usb-symbol",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi1980",
			"title": "valentine",
			"className": "bi bi-valentine",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1981",
			"title": "valentine2",
			"className": "bi bi-valentine2",
			"type": "bi",
			"categories": [
				"love"
			]
		},
		{
			"name": "bi1982",
			"title": "vector-pen",
			"className": "bi bi-vector-pen",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1983",
			"title": "view-list",
			"className": "bi bi-view-list",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1984",
			"title": "view-stacked",
			"className": "bi bi-view-stacked",
			"type": "bi",
			"categories": [
				"user+interface"
			]
		},
		{
			"name": "bi1985",
			"title": "vignette",
			"className": "bi bi-vignette",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi1986",
			"title": "vimeo",
			"className": "bi bi-vimeo",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi1987",
			"title": "vinyl",
			"className": "bi bi-vinyl",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1988",
			"title": "vinyl-fill",
			"className": "bi bi-vinyl-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1989",
			"title": "virus",
			"className": "bi bi-virus",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1990",
			"title": "virus2",
			"className": "bi bi-virus2",
			"type": "bi",
			"categories": [
				"medical"
			]
		},
		{
			"name": "bi1991",
			"title": "voicemail",
			"className": "bi bi-voicemail",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi1992",
			"title": "volume-down",
			"className": "bi bi-volume-down",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1993",
			"title": "volume-down-fill",
			"className": "bi bi-volume-down-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1994",
			"title": "volume-mute",
			"className": "bi bi-volume-mute",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1995",
			"title": "volume-mute-fill",
			"className": "bi bi-volume-mute-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1996",
			"title": "volume-off",
			"className": "bi bi-volume-off",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1997",
			"title": "volume-off-fill",
			"className": "bi bi-volume-off-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1998",
			"title": "volume-up",
			"className": "bi bi-volume-up",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi1999",
			"title": "volume-up-fill",
			"className": "bi bi-volume-up-fill",
			"type": "bi",
			"categories": [
				"media"
			]
		},
		{
			"name": "bi2000",
			"title": "vr",
			"className": "bi bi-vr",
			"type": "bi",
			"categories": [
				"typography"
			]
		},
		{
			"name": "bi2001",
			"title": "wallet",
			"className": "bi bi-wallet",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi2002",
			"title": "wallet-fill",
			"className": "bi bi-wallet-fill",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi2003",
			"title": "wallet2",
			"className": "bi bi-wallet2",
			"type": "bi",
			"categories": [
				"commerce"
			]
		},
		{
			"name": "bi2004",
			"title": "watch",
			"className": "bi bi-watch",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi2005",
			"title": "water",
			"className": "bi bi-water",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi2006",
			"title": "webcam",
			"className": "bi bi-webcam",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi2007",
			"title": "webcam-fill",
			"className": "bi bi-webcam-fill",
			"type": "bi",
			"categories": [
				"devices"
			]
		},
		{
			"name": "bi2008",
			"title": "wechat",
			"className": "bi bi-wechat",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2009",
			"title": "whatsapp",
			"className": "bi bi-whatsapp",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2010",
			"title": "wifi",
			"className": "bi bi-wifi",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi2011",
			"title": "wifi-1",
			"className": "bi bi-wifi-1",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi2012",
			"title": "wifi-2",
			"className": "bi bi-wifi-2",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi2013",
			"title": "wifi-off",
			"className": "bi bi-wifi-off",
			"type": "bi",
			"categories": [
				"communications"
			]
		},
		{
			"name": "bi2014",
			"title": "wikipedia",
			"className": "bi bi-wikipedia",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2015",
			"title": "wind",
			"className": "bi bi-wind",
			"type": "bi",
			"categories": [
				"weather"
			]
		},
		{
			"name": "bi2016",
			"title": "window",
			"className": "bi bi-window",
			"type": "bi",
			"categories": [
				"layout"
			]
		},
		{
			"name": "bi2017",
			"title": "window-dash",
			"className": "bi bi-window-dash",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2018",
			"title": "window-desktop",
			"className": "bi bi-window-desktop",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2019",
			"title": "window-dock",
			"className": "bi bi-window-dock",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2020",
			"title": "window-fullscreen",
			"className": "bi bi-window-fullscreen",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2021",
			"title": "window-plus",
			"className": "bi bi-window-plus",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2022",
			"title": "window-sidebar",
			"className": "bi bi-window-sidebar",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2023",
			"title": "window-split",
			"className": "bi bi-window-split",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2024",
			"title": "window-stack",
			"className": "bi bi-window-stack",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2025",
			"title": "window-x",
			"className": "bi bi-window-x",
			"type": "bi",
			"categories": [
				"apps"
			]
		},
		{
			"name": "bi2026",
			"title": "windows",
			"className": "bi bi-windows",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2027",
			"title": "wordpress",
			"className": "bi bi-wordpress",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2028",
			"title": "wrench",
			"className": "bi bi-wrench",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi2029",
			"title": "wrench-adjustable",
			"className": "bi bi-wrench-adjustable",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi2030",
			"title": "wrench-adjustable-circle",
			"className": "bi bi-wrench-adjustable-circle",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi2031",
			"title": "wrench-adjustable-circle-fill",
			"className": "bi bi-wrench-adjustable-circle-fill",
			"type": "bi",
			"categories": [
				"tools"
			]
		},
		{
			"name": "bi2032",
			"title": "x",
			"className": "bi bi-x",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2033",
			"title": "x-circle",
			"className": "bi bi-x-circle",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2034",
			"title": "x-circle-fill",
			"className": "bi bi-x-circle-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2035",
			"title": "x-diamond",
			"className": "bi bi-x-diamond",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2036",
			"title": "x-diamond-fill",
			"className": "bi bi-x-diamond-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2037",
			"title": "x-lg",
			"className": "bi bi-x-lg",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2038",
			"title": "x-octagon",
			"className": "bi bi-x-octagon",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2039",
			"title": "x-octagon-fill",
			"className": "bi bi-x-octagon-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2040",
			"title": "x-square",
			"className": "bi bi-x-square",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2041",
			"title": "x-square-fill",
			"className": "bi bi-x-square-fill",
			"type": "bi",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "bi2042",
			"title": "xbox",
			"className": "bi bi-xbox",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2043",
			"title": "yelp",
			"className": "bi bi-yelp",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2044",
			"title": "yin-yang",
			"className": "bi bi-yin-yang",
			"type": "bi",
			"categories": [
				"real+world"
			]
		},
		{
			"name": "bi2045",
			"title": "youtube",
			"className": "bi bi-youtube",
			"type": "bi",
			"categories": [
				"brand"
			]
		},
		{
			"name": "bi2046",
			"title": "zoom-in",
			"className": "bi bi-zoom-in",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"name": "bi2047",
			"title": "zoom-out",
			"className": "bi bi-zoom-out",
			"type": "bi",
			"categories": [
				"graphics"
			]
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash1",
			"type": "dash",
			"className": "dashicons-menu",
			"title": "menu"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash2",
			"type": "dash",
			"className": "dashicons-menu-alt",
			"title": "menu (alt)"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash3",
			"type": "dash",
			"className": "dashicons-menu-alt2",
			"title": "menu (alt2)"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash4",
			"type": "dash",
			"className": "dashicons-menu-alt3",
			"title": "menu (alt3)"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash5",
			"type": "dash",
			"className": "dashicons-admin-site",
			"title": "site"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash6",
			"type": "dash",
			"className": "dashicons-admin-site-alt",
			"title": "site (alt)"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash7",
			"type": "dash",
			"className": "dashicons-admin-site-alt2",
			"title": "site (alt2)"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash8",
			"type": "dash",
			"className": "dashicons-admin-site-alt3",
			"title": "site (alt3)"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash9",
			"type": "dash",
			"className": "dashicons-dashboard",
			"title": "dashboard"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash10",
			"type": "dash",
			"className": "dashicons-admin-post",
			"title": "post"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash11",
			"type": "dash",
			"className": "dashicons-admin-media",
			"title": "media"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash12",
			"type": "dash",
			"className": "dashicons-admin-links",
			"title": "links"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash13",
			"type": "dash",
			"className": "dashicons-admin-page",
			"title": "page"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash14",
			"type": "dash",
			"className": "dashicons-admin-comments",
			"title": "comments"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash15",
			"type": "dash",
			"className": "dashicons-admin-appearance",
			"title": "appearance"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash16",
			"type": "dash",
			"className": "dashicons-admin-plugins",
			"title": "plugins"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash17",
			"type": "dash",
			"className": "dashicons-plugins-checked",
			"title": "plugins checked"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash18",
			"type": "dash",
			"className": "dashicons-admin-users",
			"title": "users"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash19",
			"type": "dash",
			"className": "dashicons-admin-tools",
			"title": "tools"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash20",
			"type": "dash",
			"className": "dashicons-admin-settings",
			"title": "settings"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash21",
			"type": "dash",
			"className": "dashicons-admin-network",
			"title": "network"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash22",
			"type": "dash",
			"className": "dashicons-admin-home",
			"title": "home"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash23",
			"type": "dash",
			"className": "dashicons-admin-generic",
			"title": "generic"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash24",
			"type": "dash",
			"className": "dashicons-admin-collapse",
			"title": "collapse"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash25",
			"type": "dash",
			"className": "dashicons-filter",
			"title": "filter"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash26",
			"type": "dash",
			"className": "dashicons-admin-customizer",
			"title": "customizer"
		},
		{
			"categories": [
				"admin"
			],
			"name": "dash27",
			"type": "dash",
			"className": "dashicons-admin-multisite",
			"title": "multisite"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash28",
			"type": "dash",
			"className": "dashicons-welcome-write-blog",
			"title": "write blog"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash29",
			"type": "dash",
			"className": "dashicons-welcome-add-page",
			"title": "add page"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash30",
			"type": "dash",
			"className": "dashicons-welcome-view-site",
			"title": "view site"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash31",
			"type": "dash",
			"className": "dashicons-welcome-widgets-menus",
			"title": "widgets menus"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash32",
			"type": "dash",
			"className": "dashicons-welcome-comments",
			"title": "comments"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash33",
			"type": "dash",
			"className": "dashicons-welcome-learn-more",
			"title": "learn more"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash34",
			"type": "dash",
			"className": "dashicons-format-aside",
			"title": "aside"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash35",
			"type": "dash",
			"className": "dashicons-format-image",
			"title": "image"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash36",
			"type": "dash",
			"className": "dashicons-format-gallery",
			"title": "gallery"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash37",
			"type": "dash",
			"className": "dashicons-format-video",
			"title": "video"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash38",
			"type": "dash",
			"className": "dashicons-format-status",
			"title": "status"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash39",
			"type": "dash",
			"className": "dashicons-format-quote",
			"title": "quote"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash40",
			"type": "dash",
			"className": "dashicons-format-chat",
			"title": "chat"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash41",
			"type": "dash",
			"className": "dashicons-format-audio",
			"title": "audio"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash42",
			"type": "dash",
			"className": "dashicons-camera",
			"title": "camera"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash43",
			"type": "dash",
			"className": "dashicons-camera-alt",
			"title": "camera (alt)"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash44",
			"type": "dash",
			"className": "dashicons-images-alt",
			"title": "images (alt)"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash45",
			"type": "dash",
			"className": "dashicons-images-alt2",
			"title": "images (alt2)"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash46",
			"type": "dash",
			"className": "dashicons-video-alt",
			"title": "video (alt)"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash47",
			"type": "dash",
			"className": "dashicons-video-alt2",
			"title": "video (alt2)"
		},
		{
			"categories": [
				"format"
			],
			"name": "dash48",
			"type": "dash",
			"className": "dashicons-video-alt3",
			"title": "video (alt3)"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash49",
			"type": "dash",
			"className": "dashicons-media-archive",
			"title": "archive"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash50",
			"type": "dash",
			"className": "dashicons-media-audio",
			"title": "audio"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash51",
			"type": "dash",
			"className": "dashicons-media-code",
			"title": "code"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash52",
			"type": "dash",
			"className": "dashicons-media-default",
			"title": "default"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash53",
			"type": "dash",
			"className": "dashicons-media-document",
			"title": "document"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash54",
			"type": "dash",
			"className": "dashicons-media-interactive",
			"title": "interactive"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash55",
			"type": "dash",
			"className": "dashicons-media-spreadsheet",
			"title": "spreadsheet"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash56",
			"type": "dash",
			"className": "dashicons-media-text",
			"title": "text"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash57",
			"type": "dash",
			"className": "dashicons-media-video",
			"title": "video"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash58",
			"type": "dash",
			"className": "dashicons-playlist-audio",
			"title": "playlist audio"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash59",
			"type": "dash",
			"className": "dashicons-playlist-video",
			"title": "playlist video"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash60",
			"type": "dash",
			"className": "dashicons-controls-play",
			"title": "play"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash61",
			"type": "dash",
			"className": "dashicons-controls-pause",
			"title": "pause"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash62",
			"type": "dash",
			"className": "dashicons-controls-forward",
			"title": "forward"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash63",
			"type": "dash",
			"className": "dashicons-controls-skipforward",
			"title": "skip forward"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash64",
			"type": "dash",
			"className": "dashicons-controls-back",
			"title": "back"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash65",
			"type": "dash",
			"className": "dashicons-controls-skipback",
			"title": "skip back"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash66",
			"type": "dash",
			"className": "dashicons-controls-repeat",
			"title": "repeat"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash67",
			"type": "dash",
			"className": "dashicons-controls-volumeon",
			"title": "volume on"
		},
		{
			"categories": [
				"media"
			],
			"name": "dash68",
			"type": "dash",
			"className": "dashicons-controls-volumeoff",
			"title": "volume off"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash69",
			"type": "dash",
			"className": "dashicons-image-crop",
			"title": "crop"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash70",
			"type": "dash",
			"className": "dashicons-image-rotate",
			"title": "rotate"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash71",
			"type": "dash",
			"className": "dashicons-image-rotate-left",
			"title": "rotate left"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash72",
			"type": "dash",
			"className": "dashicons-image-rotate-right",
			"title": "rotate right"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash73",
			"type": "dash",
			"className": "dashicons-image-flip-vertical",
			"title": "flip vertical"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash74",
			"type": "dash",
			"className": "dashicons-image-flip-horizontal",
			"title": "flip horizontal"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash75",
			"type": "dash",
			"className": "dashicons-image-filter",
			"title": "filter"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash76",
			"type": "dash",
			"className": "dashicons-undo",
			"title": "undo"
		},
		{
			"categories": [
				"image"
			],
			"name": "dash77",
			"type": "dash",
			"className": "dashicons-redo",
			"title": "redo"
		},
		{
			"categories": [
				"database"
			],
			"name": "dash78",
			"type": "dash",
			"className": "dashicons-database-add",
			"title": "database add"
		},
		{
			"categories": [
				"database"
			],
			"name": "dash79",
			"type": "dash",
			"className": "dashicons-database",
			"title": "database"
		},
		{
			"categories": [
				"database"
			],
			"name": "dash80",
			"type": "dash",
			"className": "dashicons-database-export",
			"title": "database export"
		},
		{
			"categories": [
				"database"
			],
			"name": "dash81",
			"type": "dash",
			"className": "dashicons-database-import",
			"title": "database import"
		},
		{
			"categories": [
				"database"
			],
			"name": "dash82",
			"type": "dash",
			"className": "dashicons-database-remove",
			"title": "database remove"
		},
		{
			"categories": [
				"database"
			],
			"name": "dash83",
			"type": "dash",
			"className": "dashicons-database-view",
			"title": "database view"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash84",
			"type": "dash",
			"className": "dashicons-align-full-width",
			"title": "align full width"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash85",
			"type": "dash",
			"className": "dashicons-align-pull-left",
			"title": "align pull left"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash86",
			"type": "dash",
			"className": "dashicons-align-pull-right",
			"title": "align pull right"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash87",
			"type": "dash",
			"className": "dashicons-align-wide",
			"title": "align wide"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash88",
			"type": "dash",
			"className": "dashicons-block-default",
			"title": "block default"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash89",
			"type": "dash",
			"className": "dashicons-button",
			"title": "button"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash90",
			"type": "dash",
			"className": "dashicons-cloud-saved",
			"title": "cloud saved"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash91",
			"type": "dash",
			"className": "dashicons-cloud-upload",
			"title": "cloud upload"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash92",
			"type": "dash",
			"className": "dashicons-columns",
			"title": "columns"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash93",
			"type": "dash",
			"className": "dashicons-cover-image",
			"title": "cover image"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash94",
			"type": "dash",
			"className": "dashicons-ellipsis",
			"title": "ellipsis"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash95",
			"type": "dash",
			"className": "dashicons-embed-audio",
			"title": "embed audio"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash96",
			"type": "dash",
			"className": "dashicons-embed-generic",
			"title": "embed generic"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash97",
			"type": "dash",
			"className": "dashicons-embed-photo",
			"title": "embed photo"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash98",
			"type": "dash",
			"className": "dashicons-embed-post",
			"title": "embed post"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash99",
			"type": "dash",
			"className": "dashicons-embed-video",
			"title": "embed video"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash100",
			"type": "dash",
			"className": "dashicons-exit",
			"title": "exit"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash101",
			"type": "dash",
			"className": "dashicons-heading",
			"title": "heading"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash102",
			"type": "dash",
			"className": "dashicons-html",
			"title": "HTML"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash103",
			"type": "dash",
			"className": "dashicons-info-outline",
			"title": "info outline"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash104",
			"type": "dash",
			"className": "dashicons-insert",
			"title": "insert"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash105",
			"type": "dash",
			"className": "dashicons-insert-after",
			"title": "insert after"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash106",
			"type": "dash",
			"className": "dashicons-insert-before",
			"title": "insert before"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash107",
			"type": "dash",
			"className": "dashicons-remove",
			"title": "remove"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash108",
			"type": "dash",
			"className": "dashicons-saved",
			"title": "saved"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash109",
			"type": "dash",
			"className": "dashicons-shortcode",
			"title": "shortcode"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash110",
			"type": "dash",
			"className": "dashicons-table-col-after",
			"title": "table col after"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash111",
			"type": "dash",
			"className": "dashicons-table-col-before",
			"title": "table col before"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash112",
			"type": "dash",
			"className": "dashicons-table-col-delete",
			"title": "table col delete"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash113",
			"type": "dash",
			"className": "dashicons-table-row-after",
			"title": "table row after"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash114",
			"type": "dash",
			"className": "dashicons-table-row-before",
			"title": "table row before"
		},
		{
			"categories": [
				"block"
			],
			"name": "dash115",
			"type": "dash",
			"className": "dashicons-table-row-delete",
			"title": "table row delete"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash116",
			"type": "dash",
			"className": "dashicons-editor-bold",
			"title": "bold"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash117",
			"type": "dash",
			"className": "dashicons-editor-italic",
			"title": "italic"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash118",
			"type": "dash",
			"className": "dashicons-editor-ul",
			"title": "unordered list"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash119",
			"type": "dash",
			"className": "dashicons-editor-ol",
			"title": "ordered list"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash120",
			"type": "dash",
			"className": "dashicons-editor-ol-rtl",
			"title": "ordered list RTL"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash121",
			"type": "dash",
			"className": "dashicons-editor-quote",
			"title": "quote"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash122",
			"type": "dash",
			"className": "dashicons-editor-alignleft",
			"title": "align left"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash123",
			"type": "dash",
			"className": "dashicons-editor-aligncenter",
			"title": "align center"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash124",
			"type": "dash",
			"className": "dashicons-editor-alignright",
			"title": "align right"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash125",
			"type": "dash",
			"className": "dashicons-editor-insertmore",
			"title": "insert more"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash126",
			"type": "dash",
			"className": "dashicons-editor-spellcheck",
			"title": "spellcheck"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash127",
			"type": "dash",
			"className": "dashicons-editor-expand",
			"title": "expand"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash128",
			"type": "dash",
			"className": "dashicons-editor-contract",
			"title": "contract"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash129",
			"type": "dash",
			"className": "dashicons-editor-kitchensink",
			"title": "kitchen sink"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash130",
			"type": "dash",
			"className": "dashicons-editor-underline",
			"title": "underline"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash131",
			"type": "dash",
			"className": "dashicons-editor-justify",
			"title": "justify"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash132",
			"type": "dash",
			"className": "dashicons-editor-textcolor",
			"title": "text color"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash133",
			"type": "dash",
			"className": "dashicons-editor-paste-word",
			"title": "paste word"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash134",
			"type": "dash",
			"className": "dashicons-editor-paste-text",
			"title": "paste text"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash135",
			"type": "dash",
			"className": "dashicons-editor-removeformatting",
			"title": "remove formatting"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash136",
			"type": "dash",
			"className": "dashicons-editor-video",
			"title": "video"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash137",
			"type": "dash",
			"className": "dashicons-editor-customchar",
			"title": "custom character"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash138",
			"type": "dash",
			"className": "dashicons-editor-outdent",
			"title": "outdent"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash139",
			"type": "dash",
			"className": "dashicons-editor-indent",
			"title": "indent"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash140",
			"type": "dash",
			"className": "dashicons-editor-help",
			"title": "help"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash141",
			"type": "dash",
			"className": "dashicons-editor-strikethrough",
			"title": "strikethrough"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash142",
			"type": "dash",
			"className": "dashicons-editor-unlink",
			"title": "unlink"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash143",
			"type": "dash",
			"className": "dashicons-editor-rtl",
			"title": "RTL"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash144",
			"type": "dash",
			"className": "dashicons-editor-ltr",
			"title": "LTR"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash145",
			"type": "dash",
			"className": "dashicons-editor-break",
			"title": "break"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash146",
			"type": "dash",
			"className": "dashicons-editor-code",
			"title": "code"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash147",
			"type": "dash",
			"className": "dashicons-editor-paragraph",
			"title": "paragraph"
		},
		{
			"categories": [
				"tinymce"
			],
			"name": "dash148",
			"type": "dash",
			"className": "dashicons-editor-table",
			"title": "table"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash149",
			"type": "dash",
			"className": "dashicons-align-left",
			"title": "align left"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash150",
			"type": "dash",
			"className": "dashicons-align-right",
			"title": "align right"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash151",
			"type": "dash",
			"className": "dashicons-align-center",
			"title": "align center"
		},
		{
			"categories": [
				"align"
			],
			"name": "dash152",
			"type": "dash",
			"className": "dashicons-align-none",
			"title": "align none"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash153",
			"type": "dash",
			"className": "dashicons-lock",
			"title": "lock"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash154",
			"type": "dash",
			"className": "dashicons-unlock",
			"title": "unlock"
		},
		{
			"categories": [
				"time"
			],
			"name": "dash155",
			"type": "dash",
			"className": "dashicons-calendar",
			"title": "calendar"
		},
		{
			"categories": [
				"time"
			],
			"name": "dash156",
			"type": "dash",
			"className": "dashicons-calendar-alt",
			"title": "calendar (alt)"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash157",
			"type": "dash",
			"className": "dashicons-visibility",
			"title": "visibility"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash158",
			"type": "dash",
			"className": "dashicons-hidden",
			"title": "hidden"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash159",
			"type": "dash",
			"className": "dashicons-post-status",
			"title": "post status"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash160",
			"type": "dash",
			"className": "dashicons-edit",
			"title": "edit"
		},
		{
			"categories": [
				"remove"
			],
			"name": "dash161",
			"type": "dash",
			"className": "dashicons-trash",
			"title": "trash"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash162",
			"type": "dash",
			"className": "dashicons-sticky",
			"title": "sticky"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash163",
			"type": "dash",
			"className": "dashicons-external",
			"title": "external"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash164",
			"type": "dash",
			"className": "dashicons-arrow-up",
			"title": "arrow up"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash165",
			"type": "dash",
			"className": "dashicons-arrow-down",
			"title": "arrow down"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash166",
			"type": "dash",
			"className": "dashicons-arrow-right",
			"title": "arrow right"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash167",
			"type": "dash",
			"className": "dashicons-arrow-left",
			"title": "arrow left"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash168",
			"type": "dash",
			"className": "dashicons-arrow-up-alt",
			"title": "arrow up (alt)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash169",
			"type": "dash",
			"className": "dashicons-arrow-down-alt",
			"title": "arrow down (alt)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash170",
			"type": "dash",
			"className": "dashicons-arrow-right-alt",
			"title": "arrow right (alt)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash171",
			"type": "dash",
			"className": "dashicons-arrow-left-alt",
			"title": "arrow left (alt)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash172",
			"type": "dash",
			"className": "dashicons-arrow-up-alt2",
			"title": "arrow up (alt2)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash173",
			"type": "dash",
			"className": "dashicons-arrow-down-alt2",
			"title": "arrow down (alt2)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash174",
			"type": "dash",
			"className": "dashicons-arrow-right-alt2",
			"title": "arrow right (alt2)"
		},
		{
			"categories": [
				"arrows"
			],
			"name": "dash175",
			"type": "dash",
			"className": "dashicons-arrow-left-alt2",
			"title": "arrow left (alt2)"
		},
		{
			"categories": [
				"sort+filter"
			],
			"name": "dash176",
			"type": "dash",
			"className": "dashicons-sort",
			"title": "Sort"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash177",
			"type": "dash",
			"className": "dashicons-leftright",
			"title": "left right"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash178",
			"type": "dash",
			"className": "dashicons-randomize",
			"title": "randomize"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash179",
			"type": "dash",
			"className": "dashicons-list-view",
			"title": "list view"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash180",
			"type": "dash",
			"className": "dashicons-excerpt-view",
			"title": "excerpt view"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash181",
			"type": "dash",
			"className": "dashicons-grid-view",
			"title": "grid view"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash182",
			"type": "dash",
			"className": "dashicons-move",
			"title": "move"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash183",
			"type": "dash",
			"className": "dashicons-share",
			"title": "share"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash184",
			"type": "dash",
			"className": "dashicons-share-alt",
			"title": "share (alt)"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash185",
			"type": "dash",
			"className": "dashicons-share-alt2",
			"title": "share (alt2)"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash186",
			"type": "dash",
			"className": "dashicons-rss",
			"title": "RSS"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash187",
			"type": "dash",
			"className": "dashicons-email",
			"title": "email"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash188",
			"type": "dash",
			"className": "dashicons-email-alt",
			"title": "email (alt)"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash189",
			"type": "dash",
			"className": "dashicons-email-alt2",
			"title": "email (alt2)"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash190",
			"type": "dash",
			"className": "dashicons-networking",
			"title": "networking"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash191",
			"type": "dash",
			"className": "dashicons-amazon",
			"title": "Amazon"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash192",
			"type": "dash",
			"className": "dashicons-facebook",
			"title": "Facebook"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash193",
			"type": "dash",
			"className": "dashicons-facebook-alt",
			"title": "Facebook (alt)"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash194",
			"type": "dash",
			"className": "dashicons-google",
			"title": "Google"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash195",
			"type": "dash",
			"className": "dashicons-instagram",
			"title": "Instagram"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash196",
			"type": "dash",
			"className": "dashicons-linkedin",
			"title": "LinkedIn"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash197",
			"type": "dash",
			"className": "dashicons-pinterest",
			"title": "Pinterest"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash198",
			"type": "dash",
			"className": "dashicons-podio",
			"title": "Podio"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash199",
			"type": "dash",
			"className": "dashicons-reddit",
			"title": "Reddit"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash200",
			"type": "dash",
			"className": "dashicons-spotify",
			"title": "Spotify"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash201",
			"type": "dash",
			"className": "dashicons-twitch",
			"title": "Twitch"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash202",
			"type": "dash",
			"className": "dashicons-twitter",
			"title": "Twitter"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash203",
			"type": "dash",
			"className": "dashicons-twitter-alt",
			"title": "Twitter (alt)"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash204",
			"type": "dash",
			"className": "dashicons-whatsapp",
			"title": "WhatsApp"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash205",
			"type": "dash",
			"className": "dashicons-xing",
			"title": "Xing"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash206",
			"type": "dash",
			"className": "dashicons-youtube",
			"title": "YouTube"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash207",
			"type": "dash",
			"className": "dashicons-hammer",
			"title": "hammer"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash208",
			"type": "dash",
			"className": "dashicons-art",
			"title": "art"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash209",
			"type": "dash",
			"className": "dashicons-migrate",
			"title": "migrate"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash210",
			"type": "dash",
			"className": "dashicons-performance",
			"title": "performance"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash211",
			"type": "dash",
			"className": "dashicons-universal-access",
			"title": "universal access"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash212",
			"type": "dash",
			"className": "dashicons-universal-access-alt",
			"title": "universal access (alt)"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash213",
			"type": "dash",
			"className": "dashicons-tickets",
			"title": "tickets"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash214",
			"type": "dash",
			"className": "dashicons-nametag",
			"title": "nametag"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash215",
			"type": "dash",
			"className": "dashicons-clipboard",
			"title": "clipboard"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash216",
			"type": "dash",
			"className": "dashicons-heart",
			"title": "heart"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash217",
			"type": "dash",
			"className": "dashicons-megaphone",
			"title": "megaphone"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash218",
			"type": "dash",
			"className": "dashicons-schedule",
			"title": "schedule"
		},
		{
			"categories": [
				"social"
			],
			"name": "dash219",
			"type": "dash",
			"className": "dashicons-tide",
			"title": "Tide"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash220",
			"type": "dash",
			"className": "dashicons-rest-api",
			"title": "REST API"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash221",
			"type": "dash",
			"className": "dashicons-code-standards",
			"title": "code standards"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash222",
			"type": "dash",
			"className": "dashicons-buddicons-activity",
			"title": "activity"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash223",
			"type": "dash",
			"className": "dashicons-buddicons-bbpress-logo",
			"title": "bbPress"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash224",
			"type": "dash",
			"className": "dashicons-buddicons-buddypress-logo",
			"title": "BuddyPress"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash225",
			"type": "dash",
			"className": "dashicons-buddicons-community",
			"title": "community"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash226",
			"type": "dash",
			"className": "dashicons-buddicons-forums",
			"title": "forums"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash227",
			"type": "dash",
			"className": "dashicons-buddicons-friends",
			"title": "friends"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash228",
			"type": "dash",
			"className": "dashicons-buddicons-groups",
			"title": "groups"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash229",
			"type": "dash",
			"className": "dashicons-buddicons-pm",
			"title": "pm"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash230",
			"type": "dash",
			"className": "dashicons-buddicons-replies",
			"title": "replies"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash231",
			"type": "dash",
			"className": "dashicons-buddicons-topics",
			"title": "topics"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash232",
			"type": "dash",
			"className": "dashicons-buddicons-tracking",
			"title": "tracking"
		},
		{
			"categories": [
				"buddicons"
			],
			"name": "dash233",
			"type": "dash",
			"className": "dashicons-wordpress",
			"title": "WordPress"
		},
		{
			"categories": [
				"brand"
			],
			"name": "dash234",
			"type": "dash",
			"className": "dashicons-wordpress-alt",
			"title": "WordPress (alt)"
		},
		{
			"categories": [
				"brand"
			],
			"name": "dash235",
			"type": "dash",
			"className": "dashicons-pressthis",
			"title": "Pressthis"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash236",
			"type": "dash",
			"className": "dashicons-update",
			"title": "update"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash237",
			"type": "dash",
			"className": "dashicons-update-alt",
			"title": "update (alt)"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash238",
			"type": "dash",
			"className": "dashicons-screenoptions",
			"title": "screen options"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash239",
			"type": "dash",
			"className": "dashicons-info",
			"title": "info"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash240",
			"type": "dash",
			"className": "dashicons-cart",
			"title": "cart"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash241",
			"type": "dash",
			"className": "dashicons-feedback",
			"title": "feedback"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash242",
			"type": "dash",
			"className": "dashicons-cloud",
			"title": "cloud"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash243",
			"type": "dash",
			"className": "dashicons-translation",
			"title": "translation"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash244",
			"type": "dash",
			"className": "dashicons-tag",
			"title": "tag"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash245",
			"type": "dash",
			"className": "dashicons-category",
			"title": "category"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash246",
			"type": "dash",
			"className": "dashicons-archive",
			"title": "archive"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash247",
			"type": "dash",
			"className": "dashicons-tagcloud",
			"title": "tagcloud"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash248",
			"type": "dash",
			"className": "dashicons-text",
			"title": "text"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash249",
			"type": "dash",
			"className": "dashicons-bell",
			"title": "bell"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash250",
			"type": "dash",
			"className": "dashicons-yes",
			"title": "yes"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash251",
			"type": "dash",
			"className": "dashicons-yes-alt",
			"title": "yes (alt)"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash252",
			"type": "dash",
			"className": "dashicons-no",
			"title": "no"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash253",
			"type": "dash",
			"className": "dashicons-no-alt",
			"title": "no (alt)"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash254",
			"type": "dash",
			"className": "dashicons-plus",
			"title": "plus"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash255",
			"type": "dash",
			"className": "dashicons-plus-alt",
			"title": "plus (alt)"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash256",
			"type": "dash",
			"className": "dashicons-plus-alt2",
			"title": "plus (alt2)"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash257",
			"type": "dash",
			"className": "dashicons-minus",
			"title": "minus"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash258",
			"type": "dash",
			"className": "dashicons-dismiss",
			"title": "dismiss"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash259",
			"type": "dash",
			"className": "dashicons-marker",
			"title": "marker"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash260",
			"type": "dash",
			"className": "dashicons-star-filled",
			"title": "star filled"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash261",
			"type": "dash",
			"className": "dashicons-star-half",
			"title": "star half"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash262",
			"type": "dash",
			"className": "dashicons-star-empty",
			"title": "star empty"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash263",
			"type": "dash",
			"className": "dashicons-flag",
			"title": "flag"
		},
		{
			"categories": [
				"notifications"
			],
			"name": "dash264",
			"type": "dash",
			"className": "dashicons-warning",
			"title": "warning"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash265",
			"type": "dash",
			"className": "dashicons-location",
			"title": "location"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash266",
			"type": "dash",
			"className": "dashicons-location-alt",
			"title": "location (alt)"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash267",
			"type": "dash",
			"className": "dashicons-vault",
			"title": "vault"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash268",
			"type": "dash",
			"className": "dashicons-shield",
			"title": "shield"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash269",
			"type": "dash",
			"className": "dashicons-shield-alt",
			"title": "shield (alt)"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash270",
			"type": "dash",
			"className": "dashicons-sos",
			"title": "sos"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash271",
			"type": "dash",
			"className": "dashicons-search",
			"title": "search"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash272",
			"type": "dash",
			"className": "dashicons-slides",
			"title": "slides"
		},
		{
			"categories": [
				"text-formatting"
			],
			"name": "dash273",
			"type": "dash",
			"className": "dashicons-text-page",
			"title": "text page"
		},
		{
			"categories": [
				"graphs"
			],
			"name": "dash274",
			"type": "dash",
			"className": "dashicons-analytics",
			"title": "analytics"
		},
		{
			"categories": [
				"graphs"
			],
			"name": "dash275",
			"type": "dash",
			"className": "dashicons-chart-pie",
			"title": "chart pie"
		},
		{
			"categories": [
				"graphs"
			],
			"name": "dash276",
			"type": "dash",
			"className": "dashicons-chart-bar",
			"title": "chart bar"
		},
		{
			"categories": [
				"graphs"
			],
			"name": "dash277",
			"type": "dash",
			"className": "dashicons-chart-line",
			"title": "chart line"
		},
		{
			"categories": [
				"graphs"
			],
			"name": "dash278",
			"type": "dash",
			"className": "dashicons-chart-area",
			"title": "chart area"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash279",
			"type": "dash",
			"className": "dashicons-groups",
			"title": "groups"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash280",
			"type": "dash",
			"className": "dashicons-businessman",
			"title": "businessman"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash281",
			"type": "dash",
			"className": "dashicons-businesswoman",
			"title": "businesswoman"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash282",
			"type": "dash",
			"className": "dashicons-businessperson",
			"title": "businessperson"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash283",
			"type": "dash",
			"className": "dashicons-id",
			"title": "id"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash284",
			"type": "dash",
			"className": "dashicons-id-alt",
			"title": "id (alt)"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash285",
			"type": "dash",
			"className": "dashicons-products",
			"title": "products"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash286",
			"type": "dash",
			"className": "dashicons-awards",
			"title": "awards"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash287",
			"type": "dash",
			"className": "dashicons-forms",
			"title": "forms"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash288",
			"type": "dash",
			"className": "dashicons-testimonial",
			"title": "testimonial"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash289",
			"type": "dash",
			"className": "dashicons-portfolio",
			"title": "portfolio"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash290",
			"type": "dash",
			"className": "dashicons-book",
			"title": "book"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash291",
			"type": "dash",
			"className": "dashicons-book-alt",
			"title": "book (alt)"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash292",
			"type": "dash",
			"className": "dashicons-download",
			"title": "download"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash293",
			"type": "dash",
			"className": "dashicons-upload",
			"title": "upload"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash294",
			"type": "dash",
			"className": "dashicons-backup",
			"title": "backup"
		},
		{
			"categories": [
				"time"
			],
			"name": "dash295",
			"type": "dash",
			"className": "dashicons-clock",
			"title": "clock"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash296",
			"type": "dash",
			"className": "dashicons-lightbulb",
			"title": "lightbulb"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash297",
			"type": "dash",
			"className": "dashicons-microphone",
			"title": "microphone"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash298",
			"type": "dash",
			"className": "dashicons-desktop",
			"title": "desktop"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash299",
			"type": "dash",
			"className": "dashicons-laptop",
			"title": "laptop"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash300",
			"type": "dash",
			"className": "dashicons-tablet",
			"title": "tablet"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash301",
			"type": "dash",
			"className": "dashicons-smartphone",
			"title": "smartphone"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash302",
			"type": "dash",
			"className": "dashicons-phone",
			"title": "phone"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash303",
			"type": "dash",
			"className": "dashicons-index-card",
			"title": "index card"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash304",
			"type": "dash",
			"className": "dashicons-carrot",
			"title": "carrot"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash305",
			"type": "dash",
			"className": "dashicons-building",
			"title": "building"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash306",
			"type": "dash",
			"className": "dashicons-store",
			"title": "store"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash307",
			"type": "dash",
			"className": "dashicons-album",
			"title": "album"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash308",
			"type": "dash",
			"className": "dashicons-palmtree",
			"title": "palm tree"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash309",
			"type": "dash",
			"className": "dashicons-tickets-alt",
			"title": "tickets (alt)"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash310",
			"type": "dash",
			"className": "dashicons-money",
			"title": "money"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash311",
			"type": "dash",
			"className": "dashicons-money-alt",
			"title": "money (alt)"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash312",
			"type": "dash",
			"className": "dashicons-smiley",
			"title": "smiley"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash313",
			"type": "dash",
			"className": "dashicons-thumbs-up",
			"title": "thumbs up"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash314",
			"type": "dash",
			"className": "dashicons-thumbs-down",
			"title": "thumbs down"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash315",
			"type": "dash",
			"className": "dashicons-layout",
			"title": "layout"
		},
		{
			"categories": [
				"office"
			],
			"name": "dash316",
			"type": "dash",
			"className": "dashicons-paperclip",
			"title": "paperclip"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash317",
			"type": "dash",
			"className": "dashicons-color-picker",
			"title": "color picker"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash318",
			"type": "dash",
			"className": "dashicons-edit-large",
			"title": "edit large"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash319",
			"type": "dash",
			"className": "dashicons-edit-page",
			"title": "edit page"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash320",
			"type": "dash",
			"className": "dashicons-airplane",
			"title": "airplane"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash321",
			"type": "dash",
			"className": "dashicons-bank",
			"title": "bank"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash322",
			"type": "dash",
			"className": "dashicons-beer",
			"title": "beer"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash323",
			"type": "dash",
			"className": "dashicons-calculator",
			"title": "calculator"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash324",
			"type": "dash",
			"className": "dashicons-car",
			"title": "car"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash325",
			"type": "dash",
			"className": "dashicons-coffee",
			"title": "coffee"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash326",
			"type": "dash",
			"className": "dashicons-drumstick",
			"title": "drumstick"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash327",
			"type": "dash",
			"className": "dashicons-food",
			"title": "food"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash328",
			"type": "dash",
			"className": "dashicons-fullscreen-alt",
			"title": "fullscreen (alt)"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash329",
			"type": "dash",
			"className": "dashicons-fullscreen-exit-alt",
			"title": "fullscreen exit (alt)"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash330",
			"type": "dash",
			"className": "dashicons-games",
			"title": "games"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash331",
			"type": "dash",
			"className": "dashicons-hourglass",
			"title": "hourglass"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash332",
			"type": "dash",
			"className": "dashicons-open-folder",
			"title": "open folder"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash333",
			"type": "dash",
			"className": "dashicons-pdf",
			"title": "PDF"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash334",
			"type": "dash",
			"className": "dashicons-pets",
			"title": "pets"
		},
		{
			"categories": [
				"devices"
			],
			"name": "dash335",
			"type": "dash",
			"className": "dashicons-printer",
			"title": "printer"
		},
		{
			"categories": [
				"techy"
			],
			"name": "dash336",
			"type": "dash",
			"className": "dashicons-privacy",
			"title": "privacy"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash337",
			"type": "dash",
			"className": "dashicons-superhero",
			"title": "superhero"
		},
		{
			"categories": [
				"general"
			],
			"name": "dash338",
			"type": "dash",
			"className": "dashicons-superhero-alt",
			"title": "superhero (alt)"
		},
		{
			"name": "fa1",
			"title": "Address Card",
			"className": "fa-address-card",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa2",
			"title": "Audio Description",
			"className": "fa-audio-description",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa3",
			"title": "Braille",
			"className": "fa-braille",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa4",
			"title": "Circle Info",
			"className": "fa-circle-info",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa5",
			"title": "Circle Question",
			"className": "fa-circle-question",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa6",
			"title": "Closed Captioning",
			"className": "fa-closed-captioning",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa7",
			"title": "Ear Deaf",
			"className": "fa-ear-deaf",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa8",
			"title": "Ear Listen",
			"className": "fa-ear-listen",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa9",
			"title": "Eye",
			"className": "fa-eye",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa10",
			"title": "Eye Low Vision",
			"className": "fa-eye-low-vision",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa11",
			"title": "Fingerprint",
			"className": "fa-fingerprint",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa12",
			"title": "Hands",
			"className": "fa-hands",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa13",
			"title": "Hands Asl Interpreting",
			"className": "fa-hands-asl-interpreting",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa14",
			"title": "Handshake Angle",
			"className": "fa-handshake-angle",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa15",
			"title": "Person Cane",
			"className": "fa-person-cane",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa16",
			"title": "Person Walking With Cane",
			"className": "fa-person-walking-with-cane",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa17",
			"title": "Phone Volume",
			"className": "fa-phone-volume",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa18",
			"title": "Question",
			"className": "fa-question",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa19",
			"title": "Tty",
			"className": "fa-tty",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa20",
			"title": "Universal Access",
			"className": "fa-universal-access",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa21",
			"title": "Wheelchair",
			"className": "fa-wheelchair",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa22",
			"title": "Wheelchair Move",
			"className": "fa-wheelchair-move",
			"type": "fa",
			"categories": [
				"accessibility"
			]
		},
		{
			"name": "fa23",
			"title": "Bell",
			"className": "fa-bell",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa24",
			"title": "Bell Slash",
			"className": "fa-bell-slash",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa25",
			"title": "Circle Exclamation",
			"className": "fa-circle-exclamation",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa26",
			"title": "Circle Radiation",
			"className": "fa-circle-radiation",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa27",
			"title": "Exclamation",
			"className": "fa-exclamation",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa28",
			"title": "Radiation",
			"className": "fa-radiation",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa29",
			"title": "Skull Crossbones",
			"className": "fa-skull-crossbones",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa30",
			"title": "Triangle Exclamation",
			"className": "fa-triangle-exclamation",
			"type": "fa",
			"categories": [
				"alerts"
			]
		},
		{
			"name": "fa31",
			"title": "A",
			"className": "fa-a",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa32",
			"title": "B",
			"className": "fa-b",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa33",
			"title": "C",
			"className": "fa-c",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa34",
			"title": "Circle H",
			"className": "fa-circle-h",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa35",
			"title": "D",
			"className": "fa-d",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa36",
			"title": "E",
			"className": "fa-e",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa37",
			"title": "F",
			"className": "fa-f",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa38",
			"title": "G",
			"className": "fa-g",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa39",
			"title": "H",
			"className": "fa-h",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa40",
			"title": "I",
			"className": "fa-i",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa41",
			"title": "J",
			"className": "fa-j",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa42",
			"title": "K",
			"className": "fa-k",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa43",
			"title": "L",
			"className": "fa-l",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa44",
			"title": "M",
			"className": "fa-m",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa45",
			"title": "N",
			"className": "fa-n",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa46",
			"title": "O",
			"className": "fa-o",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa47",
			"title": "P",
			"className": "fa-p",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa48",
			"title": "Q",
			"className": "fa-q",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa49",
			"title": "R",
			"className": "fa-r",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa50",
			"title": "S",
			"className": "fa-s",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa51",
			"title": "Square H",
			"className": "fa-square-h",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa52",
			"title": "T",
			"className": "fa-t",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa53",
			"title": "U",
			"className": "fa-u",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa54",
			"title": "V",
			"className": "fa-v",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa55",
			"title": "W",
			"className": "fa-w",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa56",
			"title": "X",
			"className": "fa-x",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa57",
			"title": "Y",
			"className": "fa-y",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa58",
			"title": "Z",
			"className": "fa-z",
			"type": "fa",
			"categories": [
				"alphabet"
			]
		},
		{
			"name": "fa59",
			"title": "Bugs",
			"className": "fa-bugs",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa60",
			"title": "Cat",
			"className": "fa-cat",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa61",
			"title": "Cow",
			"className": "fa-cow",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa62",
			"title": "Crow",
			"className": "fa-crow",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa63",
			"title": "Dog",
			"className": "fa-dog",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa64",
			"title": "Dove",
			"className": "fa-dove",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa65",
			"title": "Dragon",
			"className": "fa-dragon",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa66",
			"title": "Feather",
			"className": "fa-feather",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa67",
			"title": "Feather Pointed",
			"className": "fa-feather-pointed",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa68",
			"title": "Fish",
			"className": "fa-fish",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa69",
			"title": "Fish Fins",
			"className": "fa-fish-fins",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa70",
			"title": "Frog",
			"className": "fa-frog",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa71",
			"title": "Hippo",
			"className": "fa-hippo",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa72",
			"title": "Horse",
			"className": "fa-horse",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa73",
			"title": "Horse Head",
			"className": "fa-horse-head",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa74",
			"title": "Kiwi Bird",
			"className": "fa-kiwi-bird",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa75",
			"title": "Locust",
			"className": "fa-locust",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa76",
			"title": "Mosquito",
			"className": "fa-mosquito",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa77",
			"title": "Otter",
			"className": "fa-otter",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa78",
			"title": "Paw",
			"className": "fa-paw",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa79",
			"title": "Shield Cat",
			"className": "fa-shield-cat",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa80",
			"title": "Shield Dog",
			"className": "fa-shield-dog",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa81",
			"title": "Shrimp",
			"className": "fa-shrimp",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa82",
			"title": "Spider",
			"className": "fa-spider",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa83",
			"title": "Worm",
			"className": "fa-worm",
			"type": "fa",
			"categories": [
				"animals"
			]
		},
		{
			"name": "fa84",
			"title": "Angle Down",
			"className": "fa-angle-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa85",
			"title": "Angle Left",
			"className": "fa-angle-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa86",
			"title": "Angle Right",
			"className": "fa-angle-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa87",
			"title": "Angles Down",
			"className": "fa-angles-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa88",
			"title": "Angles Left",
			"className": "fa-angles-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa89",
			"title": "Angles Right",
			"className": "fa-angles-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa90",
			"title": "Angles Up",
			"className": "fa-angles-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa91",
			"title": "Angle Up",
			"className": "fa-angle-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa92",
			"title": "Arrow Down",
			"className": "fa-arrow-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa93",
			"title": "Arrow Down19",
			"className": "fa-arrow-down-1-9",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa94",
			"title": "Arrow Down91",
			"className": "fa-arrow-down-9-1",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa95",
			"title": "Arrow Down AZ",
			"className": "fa-arrow-down-a-z",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa96",
			"title": "Arrow Down Long",
			"className": "fa-arrow-down-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa97",
			"title": "Arrow Down Short Wide",
			"className": "fa-arrow-down-short-wide",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa98",
			"title": "Arrow Down Up Across Line",
			"className": "fa-arrow-down-up-across-line",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa99",
			"title": "Arrow Down Up Lock",
			"className": "fa-arrow-down-up-lock",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa100",
			"title": "Arrow Down Wide Short",
			"className": "fa-arrow-down-wide-short",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa101",
			"title": "Arrow Down ZA",
			"className": "fa-arrow-down-z-a",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa102",
			"title": "Arrow Left",
			"className": "fa-arrow-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa103",
			"title": "Arrow Left Long",
			"className": "fa-arrow-left-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa104",
			"title": "Arrow Pointer",
			"className": "fa-arrow-pointer",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa105",
			"title": "Arrow Right",
			"className": "fa-arrow-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa106",
			"title": "Arrow Right Arrow Left",
			"className": "fa-arrow-right-arrow-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa107",
			"title": "Arrow Right From Bracket",
			"className": "fa-arrow-right-from-bracket",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa108",
			"title": "Arrow Right Long",
			"className": "fa-arrow-right-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa109",
			"title": "Arrow Right To Bracket",
			"className": "fa-arrow-right-to-bracket",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa110",
			"title": "Arrow Rotate Left",
			"className": "fa-arrow-rotate-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa111",
			"title": "Arrow Rotate Right",
			"className": "fa-arrow-rotate-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa112",
			"title": "Down To Line",
			"className": "fa-arrows-down-to-line",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa113",
			"title": "Left Right",
			"className": "fa-arrows-left-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa114",
			"title": "Left Right To Line",
			"className": "fa-arrows-left-right-to-line",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa115",
			"title": "Rotate",
			"className": "fa-arrows-rotate",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa116",
			"title": "Spin",
			"className": "fa-arrows-spin",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa117",
			"title": "Split Up And Left",
			"className": "fa-arrows-split-up-and-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa118",
			"title": "To Circle",
			"className": "fa-arrows-to-circle",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa119",
			"title": "To Dot",
			"className": "fa-arrows-to-dot",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa120",
			"title": "To Eye",
			"className": "fa-arrows-to-eye",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa121",
			"title": "Turn Right",
			"className": "fa-arrows-turn-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa122",
			"title": "Turn To Dots",
			"className": "fa-arrows-turn-to-dots",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa123",
			"title": "Up Down",
			"className": "fa-arrows-up-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa124",
			"title": "Up Down Left Right",
			"className": "fa-arrows-up-down-left-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa125",
			"title": "Up To Line",
			"className": "fa-arrows-up-to-line",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa126",
			"title": "Arrow Trend Down",
			"className": "fa-arrow-trend-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa127",
			"title": "Arrow Trend Up",
			"className": "fa-arrow-trend-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa128",
			"title": "Arrow Turn Down",
			"className": "fa-arrow-turn-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa129",
			"title": "Arrow Turn Up",
			"className": "fa-arrow-turn-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa130",
			"title": "Arrow Up",
			"className": "fa-arrow-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa131",
			"title": "Arrow Up19",
			"className": "fa-arrow-up-1-9",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa132",
			"title": "Arrow Up91",
			"className": "fa-arrow-up-9-1",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa133",
			"title": "Arrow Up AZ",
			"className": "fa-arrow-up-a-z",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa134",
			"title": "Arrow Up From Bracket",
			"className": "fa-arrow-up-from-bracket",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa135",
			"title": "Arrow Up Long",
			"className": "fa-arrow-up-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa136",
			"title": "Arrow Up Right Dots",
			"className": "fa-arrow-up-right-dots",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa137",
			"title": "Arrow Up Right From Square",
			"className": "fa-arrow-up-right-from-square",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa138",
			"title": "Arrow Up Short Wide",
			"className": "fa-arrow-up-short-wide",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa139",
			"title": "Arrow Up Wide Short",
			"className": "fa-arrow-up-wide-short",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa140",
			"title": "Arrow Up ZA",
			"className": "fa-arrow-up-z-a",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa141",
			"title": "Caret Down",
			"className": "fa-caret-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa142",
			"title": "Caret Left",
			"className": "fa-caret-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa143",
			"title": "Caret Right",
			"className": "fa-caret-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa144",
			"title": "Caret Up",
			"className": "fa-caret-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa145",
			"title": "Chevron Down",
			"className": "fa-chevron-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa146",
			"title": "Chevron Left",
			"className": "fa-chevron-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa147",
			"title": "Chevron Right",
			"className": "fa-chevron-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa148",
			"title": "Chevron Up",
			"className": "fa-chevron-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa149",
			"title": "Circle Arrow Down",
			"className": "fa-circle-arrow-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa150",
			"title": "Circle Arrow Left",
			"className": "fa-circle-arrow-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa151",
			"title": "Circle Arrow Right",
			"className": "fa-circle-arrow-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa152",
			"title": "Circle Arrow Up",
			"className": "fa-circle-arrow-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa153",
			"title": "Circle Chevron Down",
			"className": "fa-circle-chevron-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa154",
			"title": "Circle Chevron Left",
			"className": "fa-circle-chevron-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa155",
			"title": "Circle Chevron Right",
			"className": "fa-circle-chevron-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa156",
			"title": "Circle Chevron Up",
			"className": "fa-circle-chevron-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa157",
			"title": "Circle Down",
			"className": "fa-circle-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa158",
			"title": "Circle Left",
			"className": "fa-circle-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa159",
			"title": "Circle Right",
			"className": "fa-circle-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa160",
			"title": "Circle Up",
			"className": "fa-circle-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa161",
			"title": "Clock Rotate Left",
			"className": "fa-clock-rotate-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa162",
			"title": "Cloud Arrow Down",
			"className": "fa-cloud-arrow-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa163",
			"title": "Cloud Arrow Up",
			"className": "fa-cloud-arrow-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa164",
			"title": "Down Left And Up Right To Center",
			"className": "fa-down-left-and-up-right-to-center",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa165",
			"title": "Download",
			"className": "fa-download",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa166",
			"title": "Down Long",
			"className": "fa-down-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa167",
			"title": "Left Long",
			"className": "fa-left-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa168",
			"title": "Left Right",
			"className": "fa-left-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa169",
			"title": "Location Arrow",
			"className": "fa-location-arrow",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa170",
			"title": "Maximize",
			"className": "fa-maximize",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa171",
			"title": "Recycle",
			"className": "fa-recycle",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa172",
			"title": "Repeat",
			"className": "fa-repeat",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa173",
			"title": "Reply",
			"className": "fa-reply",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa174",
			"title": "Reply All",
			"className": "fa-reply-all",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa175",
			"title": "Retweet",
			"className": "fa-retweet",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa176",
			"title": "Right From Bracket",
			"className": "fa-right-from-bracket",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa177",
			"title": "Right Left",
			"className": "fa-right-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa178",
			"title": "Right Long",
			"className": "fa-right-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa179",
			"title": "Right To Bracket",
			"className": "fa-right-to-bracket",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa180",
			"title": "Rotate",
			"className": "fa-rotate",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa181",
			"title": "Rotate Left",
			"className": "fa-rotate-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa182",
			"title": "Rotate Right",
			"className": "fa-rotate-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa183",
			"title": "Share",
			"className": "fa-share",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa184",
			"title": "Share From Square",
			"className": "fa-share-from-square",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa185",
			"title": "Shuffle",
			"className": "fa-shuffle",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa186",
			"title": "Sort",
			"className": "fa-sort",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa187",
			"title": "Sort Down",
			"className": "fa-sort-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa188",
			"title": "Sort Up",
			"className": "fa-sort-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa189",
			"title": "Square Arrow Up Right",
			"className": "fa-square-arrow-up-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa190",
			"title": "Square Caret Down",
			"className": "fa-square-caret-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa191",
			"title": "Square Caret Left",
			"className": "fa-square-caret-left",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa192",
			"title": "Square Caret Right",
			"className": "fa-square-caret-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa193",
			"title": "Square Caret Up",
			"className": "fa-square-caret-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa194",
			"title": "Square Up Right",
			"className": "fa-square-up-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa195",
			"title": "Turn Down",
			"className": "fa-turn-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa196",
			"title": "Turn Up",
			"className": "fa-turn-up",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa197",
			"title": "Up Down",
			"className": "fa-up-down",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa198",
			"title": "Up Down Left Right",
			"className": "fa-up-down-left-right",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa199",
			"title": "Upload",
			"className": "fa-upload",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa200",
			"title": "Up Long",
			"className": "fa-up-long",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa201",
			"title": "Up Right And Down Left From Center",
			"className": "fa-up-right-and-down-left-from-center",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa202",
			"title": "Up Right From Square",
			"className": "fa-up-right-from-square",
			"type": "fa",
			"categories": [
				"arrows"
			]
		},
		{
			"name": "fa203",
			"title": "Binoculars",
			"className": "fa-binoculars",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa204",
			"title": "Globe",
			"className": "fa-globe",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa205",
			"title": "Meteor",
			"className": "fa-meteor",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa206",
			"title": "Moon",
			"className": "fa-moon",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa207",
			"title": "Satellite",
			"className": "fa-satellite",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa208",
			"title": "Satellite Dish",
			"className": "fa-satellite-dish",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa209",
			"title": "Shuttle Space",
			"className": "fa-shuttle-space",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa210",
			"title": "User Astronaut",
			"className": "fa-user-astronaut",
			"type": "fa",
			"categories": [
				"astronomy"
			]
		},
		{
			"name": "fa211",
			"title": "Bus",
			"className": "fa-bus",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa212",
			"title": "Bus Simple",
			"className": "fa-bus-simple",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa213",
			"title": "Car",
			"className": "fa-car",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa214",
			"title": "Caravan",
			"className": "fa-caravan",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa215",
			"title": "Car Battery",
			"className": "fa-car-battery",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa216",
			"title": "Car Burst",
			"className": "fa-car-burst",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa217",
			"title": "Car On",
			"className": "fa-car-on",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa218",
			"title": "Car Rear",
			"className": "fa-car-rear",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa219",
			"title": "Car Side",
			"className": "fa-car-side",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa220",
			"title": "Car Tunnel",
			"className": "fa-car-tunnel",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa221",
			"title": "Charging Station",
			"className": "fa-charging-station",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa222",
			"title": "Gas Pump",
			"className": "fa-gas-pump",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa223",
			"title": "Gauge",
			"className": "fa-gauge",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa224",
			"title": "Gauge High",
			"className": "fa-gauge-high",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa225",
			"title": "Gauge Simple",
			"className": "fa-gauge-simple",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa226",
			"title": "Gauge Simple High",
			"className": "fa-gauge-simple-high",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa227",
			"title": "Motorcycle",
			"className": "fa-motorcycle",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa228",
			"title": "Oil Can",
			"className": "fa-oil-can",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa229",
			"title": "Spray Can Sparkles",
			"className": "fa-spray-can-sparkles",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa230",
			"title": "Taxi",
			"className": "fa-taxi",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa231",
			"title": "Trailer",
			"className": "fa-trailer",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa232",
			"title": "Truck",
			"className": "fa-truck",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa233",
			"title": "Truck Field",
			"className": "fa-truck-field",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa234",
			"title": "Truck Field Un",
			"className": "fa-truck-field-un",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa235",
			"title": "Truck Medical",
			"className": "fa-truck-medical",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa236",
			"title": "Truck Monster",
			"className": "fa-truck-monster",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa237",
			"title": "Truck Pickup",
			"className": "fa-truck-pickup",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa238",
			"title": "Van Shuttle",
			"className": "fa-van-shuttle",
			"type": "fa",
			"categories": [
				"automotive"
			]
		},
		{
			"name": "fa239",
			"title": "Archway",
			"className": "fa-archway",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa240",
			"title": "Arrow Right To City",
			"className": "fa-arrow-right-to-city",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa241",
			"title": "Building",
			"className": "fa-building",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa242",
			"title": "Building Circle Arrow Right",
			"className": "fa-building-circle-arrow-right",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa243",
			"title": "Building Circle Check",
			"className": "fa-building-circle-check",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa244",
			"title": "Building Circle Exclamation",
			"className": "fa-building-circle-exclamation",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa245",
			"title": "Building Circle Xmark",
			"className": "fa-building-circle-xmark",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa246",
			"title": "Building Columns",
			"className": "fa-building-columns",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa247",
			"title": "Building Flag",
			"className": "fa-building-flag",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa248",
			"title": "Building Lock",
			"className": "fa-building-lock",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa249",
			"title": "Building Ngo",
			"className": "fa-building-ngo",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa250",
			"title": "Building Shield",
			"className": "fa-building-shield",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa251",
			"title": "Building Un",
			"className": "fa-building-un",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa252",
			"title": "Building User",
			"className": "fa-building-user",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa253",
			"title": "Building Wheat",
			"className": "fa-building-wheat",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa254",
			"title": "Campground",
			"className": "fa-campground",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa255",
			"title": "Church",
			"className": "fa-church",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa256",
			"title": "City",
			"className": "fa-city",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa257",
			"title": "Dungeon",
			"className": "fa-dungeon",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa258",
			"title": "Gopuram",
			"className": "fa-gopuram",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa259",
			"title": "Hospital",
			"className": "fa-hospital",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa260",
			"title": "Hospital User",
			"className": "fa-hospital-user",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa261",
			"title": "Hotel",
			"className": "fa-hotel",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa262",
			"title": "House",
			"className": "fa-house",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa263",
			"title": "House Chimney",
			"className": "fa-house-chimney",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa264",
			"title": "House Chimney Crack",
			"className": "fa-house-chimney-crack",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa265",
			"title": "House Chimney Medical",
			"className": "fa-house-chimney-medical",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa266",
			"title": "House Chimney Window",
			"className": "fa-house-chimney-window",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa267",
			"title": "House Circle Check",
			"className": "fa-house-circle-check",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa268",
			"title": "House Circle Exclamation",
			"className": "fa-house-circle-exclamation",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa269",
			"title": "House Circle Xmark",
			"className": "fa-house-circle-xmark",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa270",
			"title": "House Crack",
			"className": "fa-house-crack",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa271",
			"title": "House Fire",
			"className": "fa-house-fire",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa272",
			"title": "House Flag",
			"className": "fa-house-flag",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa273",
			"title": "House Lock",
			"className": "fa-house-lock",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa274",
			"title": "House Medical",
			"className": "fa-house-medical",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa275",
			"title": "House Medical Circle Check",
			"className": "fa-house-medical-circle-check",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa276",
			"title": "House Medical Circle Exclamation",
			"className": "fa-house-medical-circle-exclamation",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa277",
			"title": "House Medical Circle Xmark",
			"className": "fa-house-medical-circle-xmark",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa278",
			"title": "House Medical Flag",
			"className": "fa-house-medical-flag",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa279",
			"title": "Igloo",
			"className": "fa-igloo",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa280",
			"title": "Industry",
			"className": "fa-industry",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa281",
			"title": "Kaaba",
			"className": "fa-kaaba",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa282",
			"title": "Landmark",
			"className": "fa-landmark",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa283",
			"title": "Landmark Dome",
			"className": "fa-landmark-dome",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa284",
			"title": "Landmark Flag",
			"className": "fa-landmark-flag",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa285",
			"title": "Monument",
			"className": "fa-monument",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa286",
			"title": "Mosque",
			"className": "fa-mosque",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa287",
			"title": "Mountain City",
			"className": "fa-mountain-city",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa288",
			"title": "Oil Well",
			"className": "fa-oil-well",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa289",
			"title": "Place Of Worship",
			"className": "fa-place-of-worship",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa290",
			"title": "School",
			"className": "fa-school",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa291",
			"title": "School Circle Check",
			"className": "fa-school-circle-check",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa292",
			"title": "School Circle Exclamation",
			"className": "fa-school-circle-exclamation",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa293",
			"title": "School Circle Xmark",
			"className": "fa-school-circle-xmark",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa294",
			"title": "School Flag",
			"className": "fa-school-flag",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa295",
			"title": "School Lock",
			"className": "fa-school-lock",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa296",
			"title": "Shop",
			"className": "fa-shop",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa297",
			"title": "Shop Lock",
			"className": "fa-shop-lock",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa298",
			"title": "Store",
			"className": "fa-store",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa299",
			"title": "Synagogue",
			"className": "fa-synagogue",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa300",
			"title": "Tent",
			"className": "fa-tent",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa301",
			"title": "Tent Arrow Down To Line",
			"className": "fa-tent-arrow-down-to-line",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa302",
			"title": "Tent Arrow Left Right",
			"className": "fa-tent-arrow-left-right",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa303",
			"title": "Tent Arrows Down",
			"className": "fa-tent-arrows-down",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa304",
			"title": "Tent Arrow Turn Left",
			"className": "fa-tent-arrow-turn-left",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa305",
			"title": "Tents",
			"className": "fa-tents",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa306",
			"title": "Toilet Portable",
			"className": "fa-toilet-portable",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa307",
			"title": "Toilets Portable",
			"className": "fa-toilets-portable",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa308",
			"title": "Torii Gate",
			"className": "fa-torii-gate",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa309",
			"title": "Tower Observation",
			"className": "fa-tower-observation",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa310",
			"title": "Tree City",
			"className": "fa-tree-city",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa311",
			"title": "Vihara",
			"className": "fa-vihara",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa312",
			"title": "Warehouse",
			"className": "fa-warehouse",
			"type": "fa",
			"categories": [
				"buildings"
			]
		},
		{
			"name": "fa313",
			"title": "Bottle Water",
			"className": "fa-bottle-water",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa314",
			"title": "Bucket",
			"className": "fa-bucket",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa315",
			"title": "Compass",
			"className": "fa-compass",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa316",
			"title": "Faucet",
			"className": "fa-faucet",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa317",
			"title": "Faucet Drip",
			"className": "fa-faucet-drip",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa318",
			"title": "Fire",
			"className": "fa-fire",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa319",
			"title": "Fire Burner",
			"className": "fa-fire-burner",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa320",
			"title": "Fire Flame Curved",
			"className": "fa-fire-flame-curved",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa321",
			"title": "Kit Medical",
			"className": "fa-kit-medical",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa322",
			"title": "Map",
			"className": "fa-map",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa323",
			"title": "Map Location",
			"className": "fa-map-location",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa324",
			"title": "Map Location Dot",
			"className": "fa-map-location-dot",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa325",
			"title": "Mattress Pillow",
			"className": "fa-mattress-pillow",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa326",
			"title": "Mosquito Net",
			"className": "fa-mosquito-net",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa327",
			"title": "Mountain",
			"className": "fa-mountain",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa328",
			"title": "Mountain Sun",
			"className": "fa-mountain-sun",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa329",
			"title": "People Roof",
			"className": "fa-people-roof",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa330",
			"title": "Person Hiking",
			"className": "fa-person-hiking",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa331",
			"title": "Person Shelter",
			"className": "fa-person-shelter",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa332",
			"title": "Route",
			"className": "fa-route",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa333",
			"title": "Signs Post",
			"className": "fa-signs-post",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa334",
			"title": "Tarp",
			"className": "fa-tarp",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa335",
			"title": "Tarp Droplet",
			"className": "fa-tarp-droplet",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa336",
			"title": "Toilet Paper",
			"className": "fa-toilet-paper",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa337",
			"title": "Tree",
			"className": "fa-tree",
			"type": "fa",
			"categories": [
				"camping"
			]
		},
		{
			"name": "fa338",
			"title": "Circle Dollar To Slot",
			"className": "fa-circle-dollar-to-slot",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa339",
			"title": "Dollar Sign",
			"className": "fa-dollar-sign",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa340",
			"title": "Gift",
			"className": "fa-gift",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa341",
			"title": "Hand Holding Dollar",
			"className": "fa-hand-holding-dollar",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa342",
			"title": "Hand Holding Droplet",
			"className": "fa-hand-holding-droplet",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa343",
			"title": "Hand Holding Hand",
			"className": "fa-hand-holding-hand",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa344",
			"title": "Hand Holding Heart",
			"className": "fa-hand-holding-heart",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa345",
			"title": "Handshake",
			"className": "fa-handshake",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa346",
			"title": "Handshake Simple",
			"className": "fa-handshake-simple",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa347",
			"title": "Hands Holding Child",
			"className": "fa-hands-holding-child",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa348",
			"title": "Hands Holding Circle",
			"className": "fa-hands-holding-circle",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa349",
			"title": "Heart",
			"className": "fa-heart",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa350",
			"title": "Leaf",
			"className": "fa-leaf",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa351",
			"title": "Parachute Box",
			"className": "fa-parachute-box",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa352",
			"title": "Piggy Bank",
			"className": "fa-piggy-bank",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa353",
			"title": "Ribbon",
			"className": "fa-ribbon",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa354",
			"title": "Seedling",
			"className": "fa-seedling",
			"type": "fa",
			"categories": [
				"charity"
			]
		},
		{
			"name": "fa355",
			"title": "Bars Progress",
			"className": "fa-bars-progress",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa356",
			"title": "Chart Area",
			"className": "fa-chart-area",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa357",
			"title": "Chart Bar",
			"className": "fa-chart-bar",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa358",
			"title": "Chart Column",
			"className": "fa-chart-column",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa359",
			"title": "Chart Gantt",
			"className": "fa-chart-gantt",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa360",
			"title": "Chart Line",
			"className": "fa-chart-line",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa361",
			"title": "Chart Pie",
			"className": "fa-chart-pie",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa362",
			"title": "Chart Simple",
			"className": "fa-chart-simple",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa363",
			"title": "Circle Half Stroke",
			"className": "fa-circle-half-stroke",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa364",
			"title": "Diagram Next",
			"className": "fa-diagram-next",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa365",
			"title": "Diagram Predecessor",
			"className": "fa-diagram-predecessor",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa366",
			"title": "Diagram Project",
			"className": "fa-diagram-project",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa367",
			"title": "Diagram Successor",
			"className": "fa-diagram-successor",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa368",
			"title": "Square Poll Horizontal",
			"className": "fa-square-poll-horizontal",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa369",
			"title": "Square Poll Vertical",
			"className": "fa-square-poll-vertical",
			"type": "fa",
			"categories": [
				"graphs"
			]
		},
		{
			"name": "fa370",
			"title": "Apple Whole",
			"className": "fa-apple-whole",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa371",
			"title": "Baby",
			"className": "fa-baby",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa372",
			"title": "Baby Carriage",
			"className": "fa-baby-carriage",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa373",
			"title": "Baseball Bat Ball",
			"className": "fa-baseball-bat-ball",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa374",
			"title": "Bath",
			"className": "fa-bath",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa375",
			"title": "Cake Candles",
			"className": "fa-cake-candles",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa376",
			"title": "Child",
			"className": "fa-child",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa377",
			"title": "Child Dress",
			"className": "fa-child-dress",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa378",
			"title": "Child Reaching",
			"className": "fa-child-reaching",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa379",
			"title": "Children",
			"className": "fa-children",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa380",
			"title": "Cookie",
			"className": "fa-cookie",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa381",
			"title": "Cookie Bite",
			"className": "fa-cookie-bite",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa382",
			"title": "Cubes Stacked",
			"className": "fa-cubes-stacked",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa383",
			"title": "Gamepad",
			"className": "fa-gamepad",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa384",
			"title": "Ice Cream",
			"className": "fa-ice-cream",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa385",
			"title": "Mitten",
			"className": "fa-mitten",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa386",
			"title": "Person Biking",
			"className": "fa-person-biking",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa387",
			"title": "Person Breastfeeding",
			"className": "fa-person-breastfeeding",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa388",
			"title": "Puzzle Piece",
			"className": "fa-puzzle-piece",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa389",
			"title": "Robot",
			"className": "fa-robot",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa390",
			"title": "Shapes",
			"className": "fa-shapes",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa391",
			"title": "Snowman",
			"className": "fa-snowman",
			"type": "fa",
			"categories": [
				"childhood"
			]
		},
		{
			"name": "fa392",
			"title": "Glasses",
			"className": "fa-glasses",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa393",
			"title": "Graduation Cap",
			"className": "fa-graduation-cap",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa394",
			"title": "Hat Cowboy",
			"className": "fa-hat-cowboy",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa395",
			"title": "Hat Cowboy Side",
			"className": "fa-hat-cowboy-side",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa396",
			"title": "Hat Wizard",
			"className": "fa-hat-wizard",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa397",
			"title": "Shirt",
			"className": "fa-shirt",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa398",
			"title": "Shoe Prints",
			"className": "fa-shoe-prints",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa399",
			"title": "Socks",
			"className": "fa-socks",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa400",
			"title": "User Tie",
			"className": "fa-user-tie",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa401",
			"title": "Vest",
			"className": "fa-vest",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa402",
			"title": "Vest Patches",
			"className": "fa-vest-patches",
			"type": "fa",
			"categories": [
				"clothing+fashion"
			]
		},
		{
			"name": "fa403",
			"title": "Barcode",
			"className": "fa-barcode",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa404",
			"title": "Bars",
			"className": "fa-bars",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa405",
			"title": "Bars Staggered",
			"className": "fa-bars-staggered",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa406",
			"title": "Box Archive",
			"className": "fa-box-archive",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa407",
			"title": "Bug",
			"className": "fa-bug",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa408",
			"title": "Bug Slash",
			"className": "fa-bug-slash",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa409",
			"title": "Circle Nodes",
			"className": "fa-circle-nodes",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa410",
			"title": "Code",
			"className": "fa-code",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa411",
			"title": "Code Branch",
			"className": "fa-code-branch",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa412",
			"title": "Code Commit",
			"className": "fa-code-commit",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa413",
			"title": "Code Compare",
			"className": "fa-code-compare",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa414",
			"title": "Code Fork",
			"className": "fa-code-fork",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa415",
			"title": "Code Merge",
			"className": "fa-code-merge",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa416",
			"title": "Code Pull Request",
			"className": "fa-code-pull-request",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa417",
			"title": "Cube",
			"className": "fa-cube",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa418",
			"title": "Cubes",
			"className": "fa-cubes",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa419",
			"title": "File",
			"className": "fa-file",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa420",
			"title": "File Code",
			"className": "fa-file-code",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa421",
			"title": "File Lines",
			"className": "fa-file-lines",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa422",
			"title": "Filter",
			"className": "fa-filter",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa423",
			"title": "Fire Extinguisher",
			"className": "fa-fire-extinguisher",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa424",
			"title": "Folder",
			"className": "fa-folder",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa425",
			"title": "Folder Open",
			"className": "fa-folder-open",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa426",
			"title": "Font Awesome",
			"className": "fa-font-awesome",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa427",
			"title": "Gear",
			"className": "fa-gear",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa428",
			"title": "Gears",
			"className": "fa-gears",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa429",
			"title": "Keyboard",
			"className": "fa-keyboard",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa430",
			"title": "Laptop Code",
			"className": "fa-laptop-code",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa431",
			"title": "Microchip",
			"className": "fa-microchip",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa432",
			"title": "Mug Saucer",
			"className": "fa-mug-saucer",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa433",
			"title": "Network Wired",
			"className": "fa-network-wired",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa434",
			"title": "Notdef",
			"className": "fa-notdef",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa435",
			"title": "Qrcode",
			"className": "fa-qrcode",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa436",
			"title": "Rectangle Xmark",
			"className": "fa-rectangle-xmark",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa437",
			"title": "Shield",
			"className": "fa-shield",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa438",
			"title": "Shield Halved",
			"className": "fa-shield-halved",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa439",
			"title": "Sitemap",
			"className": "fa-sitemap",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa440",
			"title": "Terminal",
			"className": "fa-terminal",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa441",
			"title": "User Secret",
			"className": "fa-user-secret",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa442",
			"title": "Web Awesome",
			"className": "fa-web-awesome",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa443",
			"title": "Window Maximize",
			"className": "fa-window-maximize",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa444",
			"title": "Window Minimize",
			"className": "fa-window-minimize",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa445",
			"title": "Window Restore",
			"className": "fa-window-restore",
			"type": "fa",
			"categories": [
				"coding"
			]
		},
		{
			"name": "fa446",
			"title": "Address Book",
			"className": "fa-address-book",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa447",
			"title": "At",
			"className": "fa-at",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa448",
			"title": "Blender Phone",
			"className": "fa-blender-phone",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa449",
			"title": "Bluetooth B",
			"className": "fa-bluetooth-b",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa450",
			"title": "Bullhorn",
			"className": "fa-bullhorn",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa451",
			"title": "Comment",
			"className": "fa-comment",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa452",
			"title": "Comment Dots",
			"className": "fa-comment-dots",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa453",
			"title": "Comment Medical",
			"className": "fa-comment-medical",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa454",
			"title": "Comments",
			"className": "fa-comments",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa455",
			"title": "Comment Slash",
			"className": "fa-comment-slash",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa456",
			"title": "Comment Sms",
			"className": "fa-comment-sms",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa457",
			"title": "Envelope",
			"className": "fa-envelope",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa458",
			"title": "Envelope Circle Check",
			"className": "fa-envelope-circle-check",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa459",
			"title": "Envelope Open",
			"className": "fa-envelope-open",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa460",
			"title": "Face Frown",
			"className": "fa-face-frown",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa461",
			"title": "Face Meh",
			"className": "fa-face-meh",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa462",
			"title": "Face Smile",
			"className": "fa-face-smile",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa463",
			"title": "Fax",
			"className": "fa-fax",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa464",
			"title": "Icons",
			"className": "fa-icons",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa465",
			"title": "Inbox",
			"className": "fa-inbox",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa466",
			"title": "Language",
			"className": "fa-language",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa467",
			"title": "Message",
			"className": "fa-message",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa468",
			"title": "Microphone",
			"className": "fa-microphone",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa469",
			"title": "Microphone Lines",
			"className": "fa-microphone-lines",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa470",
			"title": "Microphone Lines Slash",
			"className": "fa-microphone-lines-slash",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa471",
			"title": "Microphone Slash",
			"className": "fa-microphone-slash",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa472",
			"title": "Mobile",
			"className": "fa-mobile",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa473",
			"title": "Mobile Button",
			"className": "fa-mobile-button",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa474",
			"title": "Mobile Retro",
			"className": "fa-mobile-retro",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa475",
			"title": "Mobile Screen",
			"className": "fa-mobile-screen",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa476",
			"title": "Mobile Screen Button",
			"className": "fa-mobile-screen-button",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa477",
			"title": "Paper Plane",
			"className": "fa-paper-plane",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa478",
			"title": "Phone",
			"className": "fa-phone",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa479",
			"title": "Phone Flip",
			"className": "fa-phone-flip",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa480",
			"title": "Phone Slash",
			"className": "fa-phone-slash",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa481",
			"title": "Poo",
			"className": "fa-poo",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa482",
			"title": "Quote Left",
			"className": "fa-quote-left",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa483",
			"title": "Quote Right",
			"className": "fa-quote-right",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa484",
			"title": "Square Envelope",
			"className": "fa-square-envelope",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa485",
			"title": "Square Phone",
			"className": "fa-square-phone",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa486",
			"title": "Square Phone Flip",
			"className": "fa-square-phone-flip",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa487",
			"title": "Square Rss",
			"className": "fa-square-rss",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa488",
			"title": "Tower Cell",
			"className": "fa-tower-cell",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa489",
			"title": "Video",
			"className": "fa-video",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa490",
			"title": "Video Slash",
			"className": "fa-video-slash",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa491",
			"title": "Voicemail",
			"className": "fa-voicemail",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa492",
			"title": "Walkie Talkie",
			"className": "fa-walkie-talkie",
			"type": "fa",
			"categories": [
				"communication"
			]
		},
		{
			"name": "fa493",
			"title": "Bluetooth",
			"className": "fa-bluetooth",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa494",
			"title": "Cloud",
			"className": "fa-cloud",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa495",
			"title": "Ethernet",
			"className": "fa-ethernet",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa496",
			"title": "House Signal",
			"className": "fa-house-signal",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa497",
			"title": "Rss",
			"className": "fa-rss",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa498",
			"title": "Signal",
			"className": "fa-signal",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa499",
			"title": "Tower Broadcast",
			"className": "fa-tower-broadcast",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa500",
			"title": "Wifi",
			"className": "fa-wifi",
			"type": "fa",
			"categories": [
				"connectivity"
			]
		},
		{
			"name": "fa501",
			"title": "Arrow Up From Ground Water",
			"className": "fa-arrow-up-from-ground-water",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa502",
			"title": "Bore Hole",
			"className": "fa-bore-hole",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa503",
			"title": "Brush",
			"className": "fa-brush",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa504",
			"title": "Compass Drafting",
			"className": "fa-compass-drafting",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa505",
			"title": "Dumpster",
			"className": "fa-dumpster",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa506",
			"title": "Dumpster Fire",
			"className": "fa-dumpster-fire",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa507",
			"title": "Hammer",
			"className": "fa-hammer",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa508",
			"title": "Helmet Safety",
			"className": "fa-helmet-safety",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa509",
			"title": "Mound",
			"className": "fa-mound",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa510",
			"title": "Paint Roller",
			"className": "fa-paint-roller",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa511",
			"title": "Pencil",
			"className": "fa-pencil",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa512",
			"title": "Pen Ruler",
			"className": "fa-pen-ruler",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa513",
			"title": "Person Digging",
			"className": "fa-person-digging",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa514",
			"title": "Ruler",
			"className": "fa-ruler",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa515",
			"title": "Ruler Combined",
			"className": "fa-ruler-combined",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa516",
			"title": "Ruler Horizontal",
			"className": "fa-ruler-horizontal",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa517",
			"title": "Ruler Vertical",
			"className": "fa-ruler-vertical",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa518",
			"title": "Screwdriver",
			"className": "fa-screwdriver",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa519",
			"title": "Screwdriver Wrench",
			"className": "fa-screwdriver-wrench",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa520",
			"title": "Sheet Plastic",
			"className": "fa-sheet-plastic",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa521",
			"title": "Toolbox",
			"className": "fa-toolbox",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa522",
			"title": "Trowel",
			"className": "fa-trowel",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa523",
			"title": "Trowel Bricks",
			"className": "fa-trowel-bricks",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa524",
			"title": "Wrench",
			"className": "fa-wrench",
			"type": "fa",
			"categories": [
				"construction"
			]
		},
		{
			"name": "fa525",
			"title": "Bezier Curve",
			"className": "fa-bezier-curve",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa526",
			"title": "Clone",
			"className": "fa-clone",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa527",
			"title": "Copy",
			"className": "fa-copy",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa528",
			"title": "Crop",
			"className": "fa-crop",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa529",
			"title": "Crop Simple",
			"className": "fa-crop-simple",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa530",
			"title": "Crosshairs",
			"className": "fa-crosshairs",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa531",
			"title": "Draw Polygon",
			"className": "fa-draw-polygon",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa532",
			"title": "Droplet",
			"className": "fa-droplet",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa533",
			"title": "Droplet Slash",
			"className": "fa-droplet-slash",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa534",
			"title": "Eraser",
			"className": "fa-eraser",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa535",
			"title": "Eye Dropper",
			"className": "fa-eye-dropper",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa536",
			"title": "Eye Slash",
			"className": "fa-eye-slash",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa537",
			"title": "Fill",
			"className": "fa-fill",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa538",
			"title": "Fill Drip",
			"className": "fa-fill-drip",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa539",
			"title": "Floppy Disk",
			"className": "fa-floppy-disk",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa540",
			"title": "Highlighter",
			"className": "fa-highlighter",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa541",
			"title": "Layer Group",
			"className": "fa-layer-group",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa542",
			"title": "Lines Leaning",
			"className": "fa-lines-leaning",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa543",
			"title": "Marker",
			"className": "fa-marker",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa544",
			"title": "Object Group",
			"className": "fa-object-group",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa545",
			"title": "Object Ungroup",
			"className": "fa-object-ungroup",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa546",
			"title": "Paintbrush",
			"className": "fa-paintbrush",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa547",
			"title": "Palette",
			"className": "fa-palette",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa548",
			"title": "Paste",
			"className": "fa-paste",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa549",
			"title": "Pen",
			"className": "fa-pen",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa550",
			"title": "Pen Clip",
			"className": "fa-pen-clip",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa551",
			"title": "Pen Fancy",
			"className": "fa-pen-fancy",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa552",
			"title": "Pen Nib",
			"className": "fa-pen-nib",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa553",
			"title": "Pen To Square",
			"className": "fa-pen-to-square",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa554",
			"title": "Scissors",
			"className": "fa-scissors",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa555",
			"title": "Splotch",
			"className": "fa-splotch",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa556",
			"title": "Spray Can",
			"className": "fa-spray-can",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa557",
			"title": "Stamp",
			"className": "fa-stamp",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa558",
			"title": "Stapler",
			"className": "fa-stapler",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa559",
			"title": "Swatchbook",
			"className": "fa-swatchbook",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa560",
			"title": "Vector Square",
			"className": "fa-vector-square",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa561",
			"title": "Wand Magic",
			"className": "fa-wand-magic",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa562",
			"title": "Wand Magic Sparkles",
			"className": "fa-wand-magic-sparkles",
			"type": "fa",
			"categories": [
				"design"
			]
		},
		{
			"name": "fa563",
			"title": "Camera",
			"className": "fa-camera",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa564",
			"title": "Camera Retro",
			"className": "fa-camera-retro",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa565",
			"title": "Compact Disc",
			"className": "fa-compact-disc",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa566",
			"title": "Computer",
			"className": "fa-computer",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa567",
			"title": "Computer Mouse",
			"className": "fa-computer-mouse",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa568",
			"title": "Database",
			"className": "fa-database",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa569",
			"title": "Desktop",
			"className": "fa-desktop",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa570",
			"title": "Display",
			"className": "fa-display",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa571",
			"title": "Hard Drive",
			"className": "fa-hard-drive",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa572",
			"title": "Headphones",
			"className": "fa-headphones",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa573",
			"title": "House Laptop",
			"className": "fa-house-laptop",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa574",
			"title": "Laptop",
			"className": "fa-laptop",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa575",
			"title": "Laptop File",
			"className": "fa-laptop-file",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa576",
			"title": "Memory",
			"className": "fa-memory",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa577",
			"title": "Plug",
			"className": "fa-plug",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa578",
			"title": "Power Off",
			"className": "fa-power-off",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa579",
			"title": "Print",
			"className": "fa-print",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa580",
			"title": "Sd Card",
			"className": "fa-sd-card",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa581",
			"title": "Server",
			"className": "fa-server",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa582",
			"title": "Sim Card",
			"className": "fa-sim-card",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa583",
			"title": "Tablet",
			"className": "fa-tablet",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa584",
			"title": "Tablet Button",
			"className": "fa-tablet-button",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa585",
			"title": "Tablet Screen Button",
			"className": "fa-tablet-screen-button",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa586",
			"title": "Tachograph Digital",
			"className": "fa-tachograph-digital",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa587",
			"title": "Tv",
			"className": "fa-tv",
			"type": "fa",
			"categories": [
				"devices"
			]
		},
		{
			"name": "fa588",
			"title": "Biohazard",
			"className": "fa-biohazard",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa589",
			"title": "Burst",
			"className": "fa-burst",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa590",
			"title": "Child Combatant",
			"className": "fa-child-combatant",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa591",
			"title": "Cloud Bolt",
			"className": "fa-cloud-bolt",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa592",
			"title": "Cloud Showers Heavy",
			"className": "fa-cloud-showers-heavy",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa593",
			"title": "Cloud Showers Water",
			"className": "fa-cloud-showers-water",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa594",
			"title": "Helmet Un",
			"className": "fa-helmet-un",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa595",
			"title": "Hill Avalanche",
			"className": "fa-hill-avalanche",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa596",
			"title": "Hill Rockslide",
			"className": "fa-hill-rockslide",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa597",
			"title": "House Flood Water",
			"className": "fa-house-flood-water",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa598",
			"title": "House Flood Water Circle Arrow Right",
			"className": "fa-house-flood-water-circle-arrow-right",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa599",
			"title": "House Tsunami",
			"className": "fa-house-tsunami",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa600",
			"title": "Hurricane",
			"className": "fa-hurricane",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa601",
			"title": "Person Drowning",
			"className": "fa-person-drowning",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa602",
			"title": "Person Rifle",
			"className": "fa-person-rifle",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa603",
			"title": "Person Walking Arrow Loop Left",
			"className": "fa-person-walking-arrow-loop-left",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa604",
			"title": "Person Walking Arrow Right",
			"className": "fa-person-walking-arrow-right",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa605",
			"title": "Person Walking Dashed Line Arrow Right",
			"className": "fa-person-walking-dashed-line-arrow-right",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa606",
			"title": "Plant Wilt",
			"className": "fa-plant-wilt",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa607",
			"title": "Snowflake",
			"className": "fa-snowflake",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa608",
			"title": "Sun Plant Wilt",
			"className": "fa-sun-plant-wilt",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa609",
			"title": "Temperature Arrow Down",
			"className": "fa-temperature-arrow-down",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa610",
			"title": "Temperature Arrow Up",
			"className": "fa-temperature-arrow-up",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa611",
			"title": "Tornado",
			"className": "fa-tornado",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa612",
			"title": "Volcano",
			"className": "fa-volcano",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa613",
			"title": "Wheat Awn Circle Exclamation",
			"className": "fa-wheat-awn-circle-exclamation",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa614",
			"title": "Wind",
			"className": "fa-wind",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa615",
			"title": "Xmarks Lines",
			"className": "fa-xmarks-lines",
			"type": "fa",
			"categories": [
				"disaster+crisis"
			]
		},
		{
			"name": "fa616",
			"title": "Bandage",
			"className": "fa-bandage",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa617",
			"title": "Check",
			"className": "fa-check",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa618",
			"title": "Check Double",
			"className": "fa-check-double",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa619",
			"title": "Circle Check",
			"className": "fa-circle-check",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa620",
			"title": "Delete Left",
			"className": "fa-delete-left",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa621",
			"title": "Ellipsis",
			"className": "fa-ellipsis",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa622",
			"title": "Ellipsis Vertical",
			"className": "fa-ellipsis-vertical",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa623",
			"title": "Grip",
			"className": "fa-grip",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa624",
			"title": "Grip Lines",
			"className": "fa-grip-lines",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa625",
			"title": "Grip Lines Vertical",
			"className": "fa-grip-lines-vertical",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa626",
			"title": "Grip Vertical",
			"className": "fa-grip-vertical",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa627",
			"title": "Link",
			"className": "fa-link",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa628",
			"title": "Link Slash",
			"className": "fa-link-slash",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa629",
			"title": "Minus",
			"className": "fa-minus",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa630",
			"title": "Plus",
			"className": "fa-plus",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa631",
			"title": "Signature",
			"className": "fa-signature",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa632",
			"title": "Sliders",
			"className": "fa-sliders",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa633",
			"title": "Square Check",
			"className": "fa-square-check",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa634",
			"title": "Square Pen",
			"className": "fa-square-pen",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa635",
			"title": "Trash",
			"className": "fa-trash",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa636",
			"title": "Trash Arrow Up",
			"className": "fa-trash-arrow-up",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa637",
			"title": "Trash Can",
			"className": "fa-trash-can",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa638",
			"title": "Trash Can Arrow Up",
			"className": "fa-trash-can-arrow-up",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa639",
			"title": "Xmark",
			"className": "fa-xmark",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa640",
			"title": "Atom",
			"className": "fa-atom",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa641",
			"title": "Award",
			"className": "fa-award",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa642",
			"title": "Book Open",
			"className": "fa-book-open",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa643",
			"title": "Book Open Reader",
			"className": "fa-book-open-reader",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa644",
			"title": "Chalkboard",
			"className": "fa-chalkboard",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa645",
			"title": "Chalkboard User",
			"className": "fa-chalkboard-user",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa646",
			"title": "Masks Theater",
			"className": "fa-masks-theater",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa647",
			"title": "Microscope",
			"className": "fa-microscope",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa648",
			"title": "Music",
			"className": "fa-music",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa649",
			"title": "Person Chalkboard",
			"className": "fa-person-chalkboard",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa650",
			"title": "User Graduate",
			"className": "fa-user-graduate",
			"type": "fa",
			"categories": [
				"education"
			]
		},
		{
			"name": "fa651",
			"title": "Face Angry",
			"className": "fa-face-angry",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa652",
			"title": "Face Dizzy",
			"className": "fa-face-dizzy",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa653",
			"title": "Face Flushed",
			"className": "fa-face-flushed",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa654",
			"title": "Face Frown Open",
			"className": "fa-face-frown-open",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa655",
			"title": "Face Grimace",
			"className": "fa-face-grimace",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa656",
			"title": "Face Grin",
			"className": "fa-face-grin",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa657",
			"title": "Face Grin Beam",
			"className": "fa-face-grin-beam",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa658",
			"title": "Face Grin Beam Sweat",
			"className": "fa-face-grin-beam-sweat",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa659",
			"title": "Face Grin Hearts",
			"className": "fa-face-grin-hearts",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa660",
			"title": "Face Grin Squint",
			"className": "fa-face-grin-squint",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa661",
			"title": "Face Grin Squint Tears",
			"className": "fa-face-grin-squint-tears",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa662",
			"title": "Face Grin Stars",
			"className": "fa-face-grin-stars",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa663",
			"title": "Face Grin Tears",
			"className": "fa-face-grin-tears",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa664",
			"title": "Face Grin Tongue",
			"className": "fa-face-grin-tongue",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa665",
			"title": "Face Grin Tongue Squint",
			"className": "fa-face-grin-tongue-squint",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa666",
			"title": "Face Grin Tongue Wink",
			"className": "fa-face-grin-tongue-wink",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa667",
			"title": "Face Grin Wide",
			"className": "fa-face-grin-wide",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa668",
			"title": "Face Grin Wink",
			"className": "fa-face-grin-wink",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa669",
			"title": "Face Kiss",
			"className": "fa-face-kiss",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa670",
			"title": "Face Kiss Beam",
			"className": "fa-face-kiss-beam",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa671",
			"title": "Face Kiss Wink Heart",
			"className": "fa-face-kiss-wink-heart",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa672",
			"title": "Face Laugh",
			"className": "fa-face-laugh",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa673",
			"title": "Face Laugh Beam",
			"className": "fa-face-laugh-beam",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa674",
			"title": "Face Laugh Squint",
			"className": "fa-face-laugh-squint",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa675",
			"title": "Face Laugh Wink",
			"className": "fa-face-laugh-wink",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa676",
			"title": "Face Meh Blank",
			"className": "fa-face-meh-blank",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa677",
			"title": "Face Rolling Eyes",
			"className": "fa-face-rolling-eyes",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa678",
			"title": "Face Sad Cry",
			"className": "fa-face-sad-cry",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa679",
			"title": "Face Sad Tear",
			"className": "fa-face-sad-tear",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa680",
			"title": "Face Smile Beam",
			"className": "fa-face-smile-beam",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa681",
			"title": "Face Smile Wink",
			"className": "fa-face-smile-wink",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa682",
			"title": "Face Surprise",
			"className": "fa-face-surprise",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa683",
			"title": "Face Tired",
			"className": "fa-face-tired",
			"type": "fa",
			"categories": [
				"emoji"
			]
		},
		{
			"name": "fa684",
			"title": "Battery Empty",
			"className": "fa-battery-empty",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa685",
			"title": "Battery Full",
			"className": "fa-battery-full",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa686",
			"title": "Battery Half",
			"className": "fa-battery-half",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa687",
			"title": "Battery Quarter",
			"className": "fa-battery-quarter",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa688",
			"title": "Battery Three Quarters",
			"className": "fa-battery-three-quarters",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa689",
			"title": "Bolt",
			"className": "fa-bolt",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa690",
			"title": "Explosion",
			"className": "fa-explosion",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa691",
			"title": "Fan",
			"className": "fa-fan",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa692",
			"title": "Fire Flame Simple",
			"className": "fa-fire-flame-simple",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa693",
			"title": "Lightbulb",
			"className": "fa-lightbulb",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa694",
			"title": "Plug Circle Bolt",
			"className": "fa-plug-circle-bolt",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa695",
			"title": "Plug Circle Check",
			"className": "fa-plug-circle-check",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa696",
			"title": "Plug Circle Exclamation",
			"className": "fa-plug-circle-exclamation",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa697",
			"title": "Plug Circle Minus",
			"className": "fa-plug-circle-minus",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa698",
			"title": "Plug Circle Plus",
			"className": "fa-plug-circle-plus",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa699",
			"title": "Plug Circle Xmark",
			"className": "fa-plug-circle-xmark",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa700",
			"title": "Poop",
			"className": "fa-poop",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa701",
			"title": "Solar Panel",
			"className": "fa-solar-panel",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa702",
			"title": "Sun",
			"className": "fa-sun",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa703",
			"title": "Water",
			"className": "fa-water",
			"type": "fa",
			"categories": [
				"energy"
			]
		},
		{
			"name": "fa704",
			"title": "File Arrow Down",
			"className": "fa-file-arrow-down",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa705",
			"title": "File Arrow Up",
			"className": "fa-file-arrow-up",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa706",
			"title": "File Audio",
			"className": "fa-file-audio",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa707",
			"title": "File Circle Check",
			"className": "fa-file-circle-check",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa708",
			"title": "File Circle Exclamation",
			"className": "fa-file-circle-exclamation",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa709",
			"title": "File Circle Minus",
			"className": "fa-file-circle-minus",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa710",
			"title": "File Circle Plus",
			"className": "fa-file-circle-plus",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa711",
			"title": "File Circle Question",
			"className": "fa-file-circle-question",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa712",
			"title": "File Circle Xmark",
			"className": "fa-file-circle-xmark",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa713",
			"title": "File Csv",
			"className": "fa-file-csv",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa714",
			"title": "File Excel",
			"className": "fa-file-excel",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa715",
			"title": "File Export",
			"className": "fa-file-export",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa716",
			"title": "File Image",
			"className": "fa-file-image",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa717",
			"title": "File Import",
			"className": "fa-file-import",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa718",
			"title": "File Pdf",
			"className": "fa-file-pdf",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa719",
			"title": "File Pen",
			"className": "fa-file-pen",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa720",
			"title": "File Powerpoint",
			"className": "fa-file-powerpoint",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa721",
			"title": "File Shield",
			"className": "fa-file-shield",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa722",
			"title": "File Video",
			"className": "fa-file-video",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa723",
			"title": "File Word",
			"className": "fa-file-word",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa724",
			"title": "File Zipper",
			"className": "fa-file-zipper",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa725",
			"title": "Folder Closed",
			"className": "fa-folder-closed",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa726",
			"title": "Note Sticky",
			"className": "fa-note-sticky",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa727",
			"title": "Photo Film",
			"className": "fa-photo-film",
			"type": "fa",
			"categories": [
				"files"
			]
		},
		{
			"name": "fa728",
			"title": "Circle",
			"className": "fa-circle",
			"type": "fa",
			"categories": [
				"editing"
			]
		},
		{
			"name": "fa729",
			"title": "Clapperboard",
			"className": "fa-clapperboard",
			"type": "fa",
			"categories": [
				"media"
			]
		},
		{
			"name": "fa730",
			"title": "Film",
			"className": "fa-film",
			"type": "fa",
			"categories": [
				"media"
			]
		},
		{
			"name": "fa731",
			"title": "Podcast",
			"className": "fa-podcast",
			"type": "fa",
			"categories": [
				"media"
			]
		},
		{
			"name": "fa732",
			"title": "Ticket",
			"className": "fa-ticket",
			"type": "fa",
			"categories": [
				"media"
			]
		},
		{
			"name": "fa733",
			"title": "Youtube",
			"className": "youtube",
        "type": "sui",
			"categories": [
				"media"
			]
		},
		{
			"name": "fa734",
			"title": "Bacon",
			"className": "fa-bacon",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa735",
			"title": "Beer Mug Empty",
			"className": "fa-beer-mug-empty",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa736",
			"title": "Blender",
			"className": "fa-blender",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa737",
			"title": "Bone",
			"className": "fa-bone",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa738",
			"title": "Bottle Droplet",
			"className": "fa-bottle-droplet",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa739",
			"title": "Bowl Food",
			"className": "fa-bowl-food",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa740",
			"title": "Bowl Rice",
			"className": "fa-bowl-rice",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa741",
			"title": "Bread Slice",
			"className": "fa-bread-slice",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa742",
			"title": "Burger",
			"className": "fa-burger",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa743",
			"title": "Candy Cane",
			"className": "fa-candy-cane",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa744",
			"title": "Carrot",
			"className": "fa-carrot",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa745",
			"title": "Champagne Glasses",
			"className": "fa-champagne-glasses",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa746",
			"title": "Cheese",
			"className": "fa-cheese",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa747",
			"title": "Cloud Meatball",
			"className": "fa-cloud-meatball",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa748",
			"title": "Drumstick Bite",
			"className": "fa-drumstick-bite",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa749",
			"title": "Egg",
			"className": "fa-egg",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa750",
			"title": "Flask",
			"className": "fa-flask",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa751",
			"title": "Glass Water",
			"className": "fa-glass-water",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa752",
			"title": "Glass Water Droplet",
			"className": "fa-glass-water-droplet",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa753",
			"title": "Hotdog",
			"className": "fa-hotdog",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa754",
			"title": "Jar",
			"className": "fa-jar",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa755",
			"title": "Jar Wheat",
			"className": "fa-jar-wheat",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa756",
			"title": "Lemon",
			"className": "fa-lemon",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa757",
			"title": "Martini Glass",
			"className": "fa-martini-glass",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa758",
			"title": "Martini Glass Citrus",
			"className": "fa-martini-glass-citrus",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa759",
			"title": "Martini Glass Empty",
			"className": "fa-martini-glass-empty",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa760",
			"title": "Mug Hot",
			"className": "fa-mug-hot",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa761",
			"title": "Pepper Hot",
			"className": "fa-pepper-hot",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa762",
			"title": "Pizza Slice",
			"className": "fa-pizza-slice",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa763",
			"title": "Plate Wheat",
			"className": "fa-plate-wheat",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa764",
			"title": "Stroopwafel",
			"className": "fa-stroopwafel",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa765",
			"title": "Wheat Awn",
			"className": "fa-wheat-awn",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa766",
			"title": "Whiskey Glass",
			"className": "fa-whiskey-glass",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa767",
			"title": "Wine Bottle",
			"className": "fa-wine-bottle",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa768",
			"title": "Wine Glass",
			"className": "fa-wine-glass",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa769",
			"title": "Wine Glass Empty",
			"className": "fa-wine-glass-empty",
			"type": "fa",
			"categories": [
				"food+beverage"
			]
		},
		{
			"name": "fa770",
			"title": "Book Skull",
			"className": "fa-book-skull",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa771",
			"title": "Chess",
			"className": "fa-chess",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa772",
			"title": "Chess Bishop",
			"className": "fa-chess-bishop",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa773",
			"title": "Chess Board",
			"className": "fa-chess-board",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa774",
			"title": "Chess King",
			"className": "fa-chess-king",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa775",
			"title": "Chess Knight",
			"className": "fa-chess-knight",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa776",
			"title": "Chess Pawn",
			"className": "fa-chess-pawn",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa777",
			"title": "Chess Queen",
			"className": "fa-chess-queen",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa778",
			"title": "Chess Rook",
			"className": "fa-chess-rook",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa782",
			"title": "Diamond",
			"className": "fa-diamond",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa783",
			"title": "Dice",
			"className": "fa-dice",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa784",
			"title": "Dice D20",
			"className": "fa-dice-d20",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa785",
			"title": "Dice D6",
			"className": "fa-dice-d6",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa786",
			"title": "Dice Five",
			"className": "fa-dice-five",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa787",
			"title": "Dice Four",
			"className": "fa-dice-four",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa788",
			"title": "Dice One",
			"className": "fa-dice-one",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa789",
			"title": "Dice Six",
			"className": "fa-dice-six",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa790",
			"title": "Dice Three",
			"className": "fa-dice-three",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa791",
			"title": "Dice Two",
			"className": "fa-dice-two",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa793",
			"title": "Ghost",
			"className": "fa-ghost",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa794",
			"title": "Hand Fist",
			"className": "fa-hand-fist",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa795",
			"title": "Headset",
			"className": "fa-headset",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa796",
			"title": "Playstation",
			"className": "playstation",
			"type": "sui",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa797",
			"title": "Ring",
			"className": "fa-ring",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa798",
			"title": "Scroll",
			"className": "fa-scroll",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa799",
			"title": "Square Full",
			"className": "fa-square-full",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa800",
			"title": "Square Steam",
			"className": "square steam",
			"type": "sui",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa801",
			"title": "Steam",
			"className": "steam",
			"type": "sui",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa802",
			"title": "Steam Symbol",
			"className": "steam symbol",
			"type": "sui",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa803",
			"title": "Twitch",
			"className": "twitch",
        "type": "sui",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa804",
			"title": "Vr Cardboard",
			"className": "fa-vr-cardboard",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa805",
			"title": "Wand Sparkles",
			"className": "fa-wand-sparkles",
			"type": "fa",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa807",
			"title": "Xbox",
			"className": "xbox",
        "type": "sui",
			"categories": [
				"gaming"
			]
		},
		{
			"name": "fa808",
			"title": "Genderless",
			"className": "fa-genderless",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa809",
			"title": "Mars",
			"className": "fa-mars",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa810",
			"title": "Mars And Venus",
			"className": "fa-mars-and-venus",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa811",
			"title": "Mars Double",
			"className": "fa-mars-double",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa812",
			"title": "Mars Stroke",
			"className": "fa-mars-stroke",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa813",
			"title": "Mars Stroke Right",
			"className": "fa-mars-stroke-right",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa814",
			"title": "Mars Stroke Up",
			"className": "fa-mars-stroke-up",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa815",
			"title": "Mercury",
			"className": "fa-mercury",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa816",
			"title": "Neuter",
			"className": "fa-neuter",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa817",
			"title": "Person Half Dress",
			"className": "fa-person-half-dress",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa818",
			"title": "Transgender",
			"className": "fa-transgender",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa819",
			"title": "Venus",
			"className": "fa-venus",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa820",
			"title": "Venus Double",
			"className": "fa-venus-double",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa821",
			"title": "Venus Mars",
			"className": "fa-venus-mars",
			"type": "fa",
			"categories": [
				"genders"
			]
		},
		{
			"name": "fa822",
			"title": "Broom",
			"className": "fa-broom",
			"type": "fa",
			"categories": [
				"halloween"
			]
		},
		{
			"name": "fa823",
			"title": "Cloud Moon",
			"className": "fa-cloud-moon",
			"type": "fa",
			"categories": [
				"halloween"
			]
		},
		{
			"name": "fa824",
			"title": "Mask",
			"className": "fa-mask",
			"type": "fa",
			"categories": [
				"halloween"
			]
		},
		{
			"name": "fa825",
			"title": "Skull",
			"className": "fa-skull",
			"type": "fa",
			"categories": [
				"halloween"
			]
		},
		{
			"name": "fa826",
			"title": "Hand",
			"className": "fa-hand",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa827",
			"title": "Hand Back Fist",
			"className": "fa-hand-back-fist",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa828",
			"title": "Hand Dots",
			"className": "fa-hand-dots",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa829",
			"title": "Hand Holding",
			"className": "fa-hand-holding",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa830",
			"title": "Hand Holding Medical",
			"className": "fa-hand-holding-medical",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa831",
			"title": "Hand Lizard",
			"className": "fa-hand-lizard",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa832",
			"title": "Hand Middle Finger",
			"className": "fa-hand-middle-finger",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa833",
			"title": "Hand Peace",
			"className": "fa-hand-peace",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa834",
			"title": "Hand Point Down",
			"className": "fa-hand-point-down",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa835",
			"title": "Hand Pointer",
			"className": "fa-hand-pointer",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa836",
			"title": "Hand Point Left",
			"className": "fa-hand-point-left",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa837",
			"title": "Hand Point Right",
			"className": "fa-hand-point-right",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa838",
			"title": "Hand Point Up",
			"className": "fa-hand-point-up",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa839",
			"title": "Bound",
			"className": "fa-hands-bound",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa840",
			"title": "Bubbles",
			"className": "fa-hands-bubbles",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa841",
			"title": "Hand Scissors",
			"className": "fa-hand-scissors",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa842",
			"title": "Clapping",
			"className": "fa-hands-clapping",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa843",
			"title": "hake Simple Slash",
			"className": "fa-handshake-simple-slash",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa844",
			"title": "hake Slash",
			"className": "fa-handshake-slash",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa845",
			"title": "Holding",
			"className": "fa-hands-holding",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa846",
			"title": "Hand Sparkles",
			"className": "fa-hand-sparkles",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa847",
			"title": "Hand Spock",
			"className": "fa-hand-spock",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa848",
			"title": "Praying",
			"className": "fa-hands-praying",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa849",
			"title": "Thumbs Down",
			"className": "fa-thumbs-down",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa850",
			"title": "Thumbs Up",
			"className": "fa-thumbs-up",
			"type": "fa",
			"categories": [
				"hands"
			]
		},
		{
			"name": "fa851",
			"title": "Gifts",
			"className": "fa-gifts",
			"type": "fa",
			"categories": [
				"holidays"
			]
		},
		{
			"name": "fa852",
			"title": "Holly Berry",
			"className": "fa-holly-berry",
			"type": "fa",
			"categories": [
				"holidays"
			]
		},
		{
			"name": "fa853",
			"title": "Menorah",
			"className": "fa-menorah",
			"type": "fa",
			"categories": [
				"holidays"
			]
		},
		{
			"name": "fa854",
			"title": "Sleigh",
			"className": "fa-sleigh",
			"type": "fa",
			"categories": [
				"holidays"
			]
		},
		{
			"name": "fa855",
			"title": "Arrow Up From Water Pump",
			"className": "fa-arrow-up-from-water-pump",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa856",
			"title": "Bed",
			"className": "fa-bed",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa857",
			"title": "Box Tissue",
			"className": "fa-box-tissue",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa858",
			"title": "Chair",
			"className": "fa-chair",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa859",
			"title": "Couch",
			"className": "fa-couch",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa860",
			"title": "Door Closed",
			"className": "fa-door-closed",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa861",
			"title": "Door Open",
			"className": "fa-door-open",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa862",
			"title": "House Chimney User",
			"className": "fa-house-chimney-user",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa863",
			"title": "House User",
			"className": "fa-house-user",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa864",
			"title": "Jug Detergent",
			"className": "fa-jug-detergent",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa865",
			"title": "Kitchen Set",
			"className": "fa-kitchen-set",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa866",
			"title": "Pump Soap",
			"className": "fa-pump-soap",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa867",
			"title": "Rug",
			"className": "fa-rug",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa868",
			"title": "Shower",
			"className": "fa-shower",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa869",
			"title": "Sink",
			"className": "fa-sink",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa870",
			"title": "Soap",
			"className": "fa-soap",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa871",
			"title": "Spoon",
			"className": "fa-spoon",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa872",
			"title": "Stairs",
			"className": "fa-stairs",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa873",
			"title": "Toilet",
			"className": "fa-toilet",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa874",
			"title": "Toilet Paper Slash",
			"className": "fa-toilet-paper-slash",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa875",
			"title": "Utensils",
			"className": "fa-utensils",
			"type": "fa",
			"categories": [
				"household"
			]
		},
		{
			"name": "fa876",
			"title": "Anchor",
			"className": "fa-anchor",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa877",
			"title": "Flag",
			"className": "fa-flag",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa878",
			"title": "People Arrows",
			"className": "fa-people-arrows",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa879",
			"title": "People Group",
			"className": "fa-people-group",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa880",
			"title": "People Line",
			"className": "fa-people-line",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa881",
			"title": "People Pulling",
			"className": "fa-people-pulling",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa882",
			"title": "People Robbery",
			"className": "fa-people-robbery",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa883",
			"title": "Person",
			"className": "fa-person",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa884",
			"title": "Person Arrow Down To Line",
			"className": "fa-person-arrow-down-to-line",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa885",
			"title": "Person Arrow Up From Line",
			"className": "fa-person-arrow-up-from-line",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa886",
			"title": "Person Burst",
			"className": "fa-person-burst",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa887",
			"title": "Person Circle Check",
			"className": "fa-person-circle-check",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa888",
			"title": "Person Circle Exclamation",
			"className": "fa-person-circle-exclamation",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa889",
			"title": "Person Circle Minus",
			"className": "fa-person-circle-minus",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa890",
			"title": "Person Circle Plus",
			"className": "fa-person-circle-plus",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa891",
			"title": "Person Circle Question",
			"className": "fa-person-circle-question",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa892",
			"title": "Person Circle Xmark",
			"className": "fa-person-circle-xmark",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa893",
			"title": "Person Dress",
			"className": "fa-person-dress",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa894",
			"title": "Person Dress Burst",
			"className": "fa-person-dress-burst",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa895",
			"title": "Person Falling",
			"className": "fa-person-falling",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa896",
			"title": "Person Falling Burst",
			"className": "fa-person-falling-burst",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa897",
			"title": "Person Harassing",
			"className": "fa-person-harassing",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa898",
			"title": "Person Military Pointing",
			"className": "fa-person-military-pointing",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa899",
			"title": "Person Military Rifle",
			"className": "fa-person-military-rifle",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa900",
			"title": "Person Military To Person",
			"className": "fa-person-military-to-person",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa901",
			"title": "Person Pregnant",
			"className": "fa-person-pregnant",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa902",
			"title": "Person Rays",
			"className": "fa-person-rays",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa903",
			"title": "Person Through Window",
			"className": "fa-person-through-window",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa904",
			"title": "Person Walking",
			"className": "fa-person-walking",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa905",
			"title": "Person Walking Luggage",
			"className": "fa-person-walking-luggage",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa906",
			"title": "Pills",
			"className": "fa-pills",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa907",
			"title": "Plane Circle Check",
			"className": "fa-plane-circle-check",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa908",
			"title": "Plane Circle Exclamation",
			"className": "fa-plane-circle-exclamation",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa909",
			"title": "Plane Circle Xmark",
			"className": "fa-plane-circle-xmark",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa910",
			"title": "Plane Lock",
			"className": "fa-plane-lock",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa911",
			"title": "Plane Up",
			"className": "fa-plane-up",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa912",
			"title": "Radio",
			"className": "fa-radio",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa913",
			"title": "Ranking Star",
			"className": "fa-ranking-star",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa914",
			"title": "Road",
			"className": "fa-road",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa915",
			"title": "Road Barrier",
			"className": "fa-road-barrier",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa916",
			"title": "Road Bridge",
			"className": "fa-road-bridge",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa917",
			"title": "Road Circle Check",
			"className": "fa-road-circle-check",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa918",
			"title": "Road Circle Exclamation",
			"className": "fa-road-circle-exclamation",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa919",
			"title": "Road Circle Xmark",
			"className": "fa-road-circle-xmark",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa920",
			"title": "Road Lock",
			"className": "fa-road-lock",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa921",
			"title": "Road Spikes",
			"className": "fa-road-spikes",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa922",
			"title": "Sack Dollar",
			"className": "fa-sack-dollar",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa923",
			"title": "Sack Xmark",
			"className": "fa-sack-xmark",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa924",
			"title": "Sailboat",
			"className": "fa-sailboat",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa925",
			"title": "Scale Balanced",
			"className": "fa-scale-balanced",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa926",
			"title": "Shield Heart",
			"className": "fa-shield-heart",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa927",
			"title": "Ship",
			"className": "fa-ship",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa928",
			"title": "Square Nfi",
			"className": "fa-square-nfi",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa929",
			"title": "Square Person Confined",
			"className": "fa-square-person-confined",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa930",
			"title": "Square Virus",
			"className": "fa-square-virus",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa931",
			"title": "Staff Snake",
			"className": "fa-staff-snake",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa932",
			"title": "Stethoscope",
			"className": "fa-stethoscope",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa933",
			"title": "Suitcase Medical",
			"className": "fa-suitcase-medical",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa934",
			"title": "Syringe",
			"className": "fa-syringe",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa935",
			"title": "Train Subway",
			"className": "fa-train-subway",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa936",
			"title": "Truck Arrow Right",
			"className": "fa-truck-arrow-right",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa937",
			"title": "Truck Droplet",
			"className": "fa-truck-droplet",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa938",
			"title": "Truck Front",
			"className": "fa-truck-front",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa939",
			"title": "Truck Plane",
			"className": "fa-truck-plane",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa940",
			"title": "User Doctor",
			"className": "fa-user-doctor",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa941",
			"title": "User Injured",
			"className": "fa-user-injured",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa942",
			"title": "Users Between Lines",
			"className": "fa-users-between-lines",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa943",
			"title": "Users Line",
			"className": "fa-users-line",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa944",
			"title": "Users Rays",
			"className": "fa-users-rays",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa945",
			"title": "Users Rectangle",
			"className": "fa-users-rectangle",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa946",
			"title": "Users Viewfinder",
			"className": "fa-users-viewfinder",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa947",
			"title": "Vial Circle Check",
			"className": "fa-vial-circle-check",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa948",
			"title": "Vial Virus",
			"className": "fa-vial-virus",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa949",
			"title": "Virus",
			"className": "fa-virus",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa950",
			"title": "Virus Covid",
			"className": "fa-virus-covid",
			"type": "fa",
			"categories": [
				"humanitarian"
			]
		},
		{
			"name": "fa951",
			"title": "Anchor Circle Check",
			"className": "fa-anchor-circle-check",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa952",
			"title": "Anchor Circle Exclamation",
			"className": "fa-anchor-circle-exclamation",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa953",
			"title": "Anchor Circle Xmark",
			"className": "fa-anchor-circle-xmark",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa954",
			"title": "Anchor Lock",
			"className": "fa-anchor-lock",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa955",
			"title": "Box",
			"className": "fa-box",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa956",
			"title": "Boxes Packing",
			"className": "fa-boxes-packing",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa957",
			"title": "Boxes Stacked",
			"className": "fa-boxes-stacked",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa958",
			"title": "Bridge",
			"className": "fa-bridge",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa959",
			"title": "Bridge Circle Check",
			"className": "fa-bridge-circle-check",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa960",
			"title": "Bridge Circle Exclamation",
			"className": "fa-bridge-circle-exclamation",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa961",
			"title": "Bridge Circle Xmark",
			"className": "fa-bridge-circle-xmark",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa962",
			"title": "Bridge Lock",
			"className": "fa-bridge-lock",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa963",
			"title": "Bridge Water",
			"className": "fa-bridge-water",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa964",
			"title": "Cart Flatbed",
			"className": "fa-cart-flatbed",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa965",
			"title": "Clipboard Check",
			"className": "fa-clipboard-check",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa966",
			"title": "Clipboard List",
			"className": "fa-clipboard-list",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa967",
			"title": "Clipboard Question",
			"className": "fa-clipboard-question",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa968",
			"title": "Dolly",
			"className": "fa-dolly",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa969",
			"title": "Ferry",
			"className": "fa-ferry",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa970",
			"title": "Helicopter",
			"className": "fa-helicopter",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa971",
			"title": "Helicopter Symbol",
			"className": "fa-helicopter-symbol",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa972",
			"title": "Jet Fighter Up",
			"className": "fa-jet-fighter-up",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa973",
			"title": "Pallet",
			"className": "fa-pallet",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa974",
			"title": "Train",
			"className": "fa-train",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa975",
			"title": "Truck Fast",
			"className": "fa-truck-fast",
			"type": "fa",
			"categories": [
				"logistics"
			]
		},
		{
			"name": "fa976",
			"title": "Bag Shopping",
			"className": "fa-bag-shopping",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa977",
			"title": "Basket Shopping",
			"className": "fa-basket-shopping",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa978",
			"title": "Bicycle",
			"className": "fa-bicycle",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa979",
			"title": "Bomb",
			"className": "fa-bomb",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa980",
			"title": "Book",
			"className": "fa-book",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa981",
			"title": "Book Atlas",
			"className": "fa-book-atlas",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa982",
			"title": "Bookmark",
			"className": "fa-bookmark",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa983",
			"title": "Briefcase",
			"className": "fa-briefcase",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa984",
			"title": "Cart Shopping",
			"className": "fa-cart-shopping",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa985",
			"title": "Diamond Turn Right",
			"className": "fa-diamond-turn-right",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa986",
			"title": "Flag Checkered",
			"className": "fa-flag-checkered",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa987",
			"title": "Gavel",
			"className": "fa-gavel",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa988",
			"title": "Heart Pulse",
			"className": "fa-heart-pulse",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa989",
			"title": "Image",
			"className": "fa-image",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa990",
			"title": "Images",
			"className": "fa-images",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa991",
			"title": "Info",
			"className": "fa-info",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa992",
			"title": "Jet Fighter",
			"className": "fa-jet-fighter",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa993",
			"title": "Key",
			"className": "fa-key",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa994",
			"title": "Life Ring",
			"className": "fa-life-ring",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa995",
			"title": "Location Crosshairs",
			"className": "fa-location-crosshairs",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa996",
			"title": "Location Dot",
			"className": "fa-location-dot",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa997",
			"title": "Location Pin",
			"className": "fa-location-pin",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa998",
			"title": "Location Pin Lock",
			"className": "fa-location-pin-lock",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa999",
			"title": "Magnet",
			"className": "fa-magnet",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1000",
			"title": "Magnifying Glass",
			"className": "fa-magnifying-glass",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1001",
			"title": "Magnifying Glass Location",
			"className": "fa-magnifying-glass-location",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1002",
			"title": "Magnifying Glass Minus",
			"className": "fa-magnifying-glass-minus",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1003",
			"title": "Magnifying Glass Plus",
			"className": "fa-magnifying-glass-plus",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1004",
			"title": "Map Pin",
			"className": "fa-map-pin",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1005",
			"title": "Money Bill",
			"className": "fa-money-bill",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1006",
			"title": "Money Bill1",
			"className": "fa-money-bill-1",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1007",
			"title": "Newspaper",
			"className": "fa-newspaper",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1008",
			"title": "Plane",
			"className": "fa-plane",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1009",
			"title": "Restroom",
			"className": "fa-restroom",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1010",
			"title": "Rocket",
			"className": "fa-rocket",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1011",
			"title": "Scale Unbalanced",
			"className": "fa-scale-unbalanced",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1012",
			"title": "Scale Unbalanced Flip",
			"className": "fa-scale-unbalanced-flip",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1013",
			"title": "Snowplow",
			"className": "fa-snowplow",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1014",
			"title": "Square Parking",
			"className": "fa-square-parking",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1015",
			"title": "Square Plus",
			"className": "fa-square-plus",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1016",
			"title": "Street View",
			"className": "fa-street-view",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1017",
			"title": "Suitcase",
			"className": "fa-suitcase",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1018",
			"title": "Tag",
			"className": "fa-tag",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1019",
			"title": "Tags",
			"className": "fa-tags",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1020",
			"title": "Thumbtack",
			"className": "fa-thumbtack",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1021",
			"title": "Ticket Simple",
			"className": "fa-ticket-simple",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1022",
			"title": "Traffic Light",
			"className": "fa-traffic-light",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1023",
			"title": "Train Tram",
			"className": "fa-train-tram",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1024",
			"title": "Trophy",
			"className": "fa-trophy",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1025",
			"title": "Umbrella",
			"className": "fa-umbrella",
			"type": "fa",
			"categories": [
				"maps"
			]
		},
		{
			"name": "fa1026",
			"title": "Person Swimming",
			"className": "fa-person-swimming",
			"type": "fa",
			"categories": [
				"general"
			]
		},
		{
			"name": "fa1027",
			"title": "Calculator",
			"className": "fa-calculator",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1028",
			"title": "Circle Minus",
			"className": "fa-circle-minus",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1029",
			"title": "Circle Plus",
			"className": "fa-circle-plus",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1030",
			"title": "Circle Xmark",
			"className": "fa-circle-xmark",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1031",
			"title": "Divide",
			"className": "fa-divide",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1032",
			"title": "Equals",
			"className": "fa-equals",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1033",
			"title": "Greater Than",
			"className": "fa-greater-than",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1034",
			"title": "Greater Than Equal",
			"className": "fa-greater-than-equal",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1035",
			"title": "Infinity",
			"className": "fa-infinity",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1036",
			"title": "Less Than",
			"className": "fa-less-than",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1037",
			"title": "Less Than Equal",
			"className": "fa-less-than-equal",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1038",
			"title": "Not Equal",
			"className": "fa-not-equal",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1039",
			"title": "Percent",
			"className": "fa-percent",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1040",
			"title": "Plus Minus",
			"className": "fa-plus-minus",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1041",
			"title": "Square Minus",
			"className": "fa-square-minus",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1042",
			"title": "Square Root Variable",
			"className": "fa-square-root-variable",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1043",
			"title": "Square Xmark",
			"className": "fa-square-xmark",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1044",
			"title": "Subscript",
			"className": "fa-subscript",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1045",
			"title": "Superscript",
			"className": "fa-superscript",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1046",
			"title": "Wave Square",
			"className": "fa-wave-square",
			"type": "fa",
			"categories": [
				"mathematics"
			]
		},
		{
			"name": "fa1047",
			"title": "Mediaplayback Backward",
			"className": "fa-backward",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1048",
			"title": "Mediaplayback Backward Fast",
			"className": "fa-backward-fast",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1049",
			"title": "Mediaplayback Backward Step",
			"className": "fa-backward-step",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1050",
			"title": "Mediaplayback Circle Pause",
			"className": "fa-circle-pause",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1051",
			"title": "Mediaplayback Circle Play",
			"className": "fa-circle-play",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1052",
			"title": "Mediaplayback Circle Stop",
			"className": "fa-circle-stop",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1053",
			"title": "Mediaplayback Compress",
			"className": "fa-compress",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1054",
			"title": "Mediaplayback Eject",
			"className": "fa-eject",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1055",
			"title": "Mediaplayback Expand",
			"className": "fa-expand",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1056",
			"title": "Mediaplayback Forward",
			"className": "fa-forward",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1057",
			"title": "Mediaplayback Forward Fast",
			"className": "fa-forward-fast",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1058",
			"title": "Mediaplayback Forward Step",
			"className": "fa-forward-step",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1059",
			"title": "Mediaplayback Minimize",
			"className": "fa-minimize",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1060",
			"title": "Mediaplayback Pause",
			"className": "fa-pause",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1061",
			"title": "Mediaplayback Play",
			"className": "fa-play",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1062",
			"title": "Mediaplayback Stop",
			"className": "fa-stop",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1063",
			"title": "Mediaplayback Volume High",
			"className": "fa-volume-high",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1064",
			"title": "Mediaplayback Volume Low",
			"className": "fa-volume-low",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1065",
			"title": "Mediaplayback Volume Off",
			"className": "fa-volume-off",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1066",
			"title": "Mediaplayback Volume Xmark",
			"className": "fa-volume-xmark",
			"type": "fa",
			"categories": [
				"media-playback"
			]
		},
		{
			"name": "fa1067",
			"title": "Bacteria",
			"className": "fa-bacteria",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1068",
			"title": "Bacterium",
			"className": "fa-bacterium",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1069",
			"title": "Ban Smoking",
			"className": "fa-ban-smoking",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1070",
			"title": "Bed Pulse",
			"className": "fa-bed-pulse",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1071",
			"title": "Bong",
			"className": "fa-bong",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1072",
			"title": "Book Medical",
			"className": "fa-book-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1073",
			"title": "Brain",
			"className": "fa-brain",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1074",
			"title": "Briefcase Medical",
			"className": "fa-briefcase-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1075",
			"title": "Cannabis",
			"className": "fa-cannabis",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1076",
			"title": "Capsules",
			"className": "fa-capsules",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1077",
			"title": "Clipboard User",
			"className": "fa-clipboard-user",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1078",
			"title": "Crutch",
			"className": "fa-crutch",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1079",
			"title": "Disease",
			"className": "fa-disease",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1080",
			"title": "Dna",
			"className": "fa-dna",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1081",
			"title": "File Medical",
			"className": "fa-file-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1082",
			"title": "File Prescription",
			"className": "fa-file-prescription",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1083",
			"title": "File Waveform",
			"className": "fa-file-waveform",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1084",
			"title": "Flask Vial",
			"className": "fa-flask-vial",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1085",
			"title": "Head Side Cough",
			"className": "fa-head-side-cough",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1086",
			"title": "Head Side Cough Slash",
			"className": "fa-head-side-cough-slash",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1087",
			"title": "Head Side Mask",
			"className": "fa-head-side-mask",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1088",
			"title": "Head Side Virus",
			"className": "fa-head-side-virus",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1089",
			"title": "Heart Circle Bolt",
			"className": "fa-heart-circle-bolt",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1090",
			"title": "Heart Circle Check",
			"className": "fa-heart-circle-check",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1091",
			"title": "Heart Circle Exclamation",
			"className": "fa-heart-circle-exclamation",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1092",
			"title": "Heart Circle Minus",
			"className": "fa-heart-circle-minus",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1093",
			"title": "Heart Circle Plus",
			"className": "fa-heart-circle-plus",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1094",
			"title": "Heart Circle Xmark",
			"className": "fa-heart-circle-xmark",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1095",
			"title": "Id Card Clip",
			"className": "fa-id-card-clip",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1096",
			"title": "Joint",
			"className": "fa-joint",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1097",
			"title": "Laptop Medical",
			"className": "fa-laptop-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1098",
			"title": "Lungs",
			"className": "fa-lungs",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1099",
			"title": "Lungs Virus",
			"className": "fa-lungs-virus",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1100",
			"title": "Mask Face",
			"className": "fa-mask-face",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1101",
			"title": "Mask Ventilator",
			"className": "fa-mask-ventilator",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1102",
			"title": "Mortar Pestle",
			"className": "fa-mortar-pestle",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1103",
			"title": "Notes Medical",
			"className": "fa-notes-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1104",
			"title": "Pager",
			"className": "fa-pager",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1105",
			"title": "Person Dots From Line",
			"className": "fa-person-dots-from-line",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1106",
			"title": "Prescription",
			"className": "fa-prescription",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1107",
			"title": "Prescription Bottle",
			"className": "fa-prescription-bottle",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1108",
			"title": "Prescription Bottle Medical",
			"className": "fa-prescription-bottle-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1109",
			"title": "Pump Medical",
			"className": "fa-pump-medical",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1110",
			"title": "Receipt",
			"className": "fa-receipt",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1111",
			"title": "Shield Virus",
			"className": "fa-shield-virus",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1112",
			"title": "Smoking",
			"className": "fa-smoking",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1113",
			"title": "Star Of Life",
			"className": "fa-star-of-life",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1114",
			"title": "Tablets",
			"className": "fa-tablets",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1115",
			"title": "Teeth",
			"className": "fa-teeth",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1116",
			"title": "Teeth Open",
			"className": "fa-teeth-open",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1117",
			"title": "Thermometer",
			"className": "fa-thermometer",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1118",
			"title": "Tooth",
			"className": "fa-tooth",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1119",
			"title": "User Nurse",
			"className": "fa-user-nurse",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1120",
			"title": "Vial",
			"className": "fa-vial",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1121",
			"title": "Vials",
			"className": "fa-vials",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1122",
			"title": "Virus Covid Slash",
			"className": "fa-virus-covid-slash",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1123",
			"title": "Viruses",
			"className": "fa-viruses",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1124",
			"title": "Virus Slash",
			"className": "fa-virus-slash",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1125",
			"title": "Weight Scale",
			"className": "fa-weight-scale",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1126",
			"title": "XRay",
			"className": "fa-x-ray",
			"type": "fa",
			"categories": [
				"medical+health"
			]
		},
		{
			"name": "fa1127",
			"title": "Austral Sign",
			"className": "fa-austral-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1128",
			"title": "Baht Sign",
			"className": "fa-baht-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1129",
			"title": "Bangladeshi Taka Sign",
			"className": "fa-bangladeshi-taka-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1130",
			"title": "Bitcoin",
			"className": "fa-bitcoin",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1131",
			"title": "Bitcoin Sign",
			"className": "fa-bitcoin-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1132",
			"title": "Brazilian Real Sign",
			"className": "fa-brazilian-real-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1133",
			"title": "Btc",
			"className": "btc",
        "type": "sui",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1134",
			"title": "Cash Register",
			"className": "fa-cash-register",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1135",
			"title": "Cedi Sign",
			"className": "fa-cedi-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1136",
			"title": "Cent Sign",
			"className": "fa-cent-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1137",
			"title": "Coins",
			"className": "fa-coins",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1138",
			"title": "Colon Sign",
			"className": "fa-colon-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1139",
			"title": "Comment Dollar",
			"className": "fa-comment-dollar",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1140",
			"title": "Comments Dollar",
			"className": "fa-comments-dollar",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1141",
			"title": "Credit Card",
			"className": "fa-credit-card",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1142",
			"title": "Cruzeiro Sign",
			"className": "fa-cruzeiro-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1143",
			"title": "Dong Sign",
			"className": "fa-dong-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1144",
			"title": "Ethereum",
            "className": "ethereum",
            "type": "sui",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1145",
			"title": "Euro Sign",
			"className": "fa-euro-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1146",
			"title": "File Invoice",
			"className": "fa-file-invoice",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1147",
			"title": "File Invoice Dollar",
			"className": "fa-file-invoice-dollar",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1148",
			"title": "Florin Sign",
			"className": "fa-florin-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1149",
			"title": "Franc Sign",
			"className": "fa-franc-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1150",
			"title": "Gg",
			"className": "gg",
        "type": "sui",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1151",
			"title": "Gg Circle",
			"className": "gg circle",
        "type": "sui",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1152",
			"title": "Guarani Sign",
			"className": "fa-guarani-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1153",
			"title": "Hryvnia Sign",
			"className": "fa-hryvnia-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1154",
			"title": "Indian Rupee Sign",
			"className": "fa-indian-rupee-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1155",
			"title": "Kip Sign",
			"className": "fa-kip-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1156",
			"title": "Lari Sign",
			"className": "fa-lari-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1157",
			"title": "Lira Sign",
			"className": "fa-lira-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1158",
			"title": "Litecoin Sign",
			"className": "fa-litecoin-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1159",
			"title": "Manat Sign",
			"className": "fa-manat-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1160",
			"title": "Mill Sign",
			"className": "fa-mill-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1161",
			"title": "Bill1Wave",
			"className": "fa-money-bill-1-wave",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1162",
			"title": "Bills",
			"className": "fa-money-bills",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1163",
			"title": "Bill Transfer",
			"className": "fa-money-bill-transfer",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1164",
			"title": "Bill Trend Up",
			"className": "fa-money-bill-trend-up",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1165",
			"title": "Bill Wave",
			"className": "fa-money-bill-wave",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1166",
			"title": "Bill Wheat",
			"className": "fa-money-bill-wheat",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1167",
			"title": "Check",
			"className": "fa-money-check",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1168",
			"title": "Check Dollar",
			"className": "fa-money-check-dollar",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1169",
			"title": "Naira Sign",
			"className": "fa-naira-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1170",
			"title": "Peseta Sign",
			"className": "fa-peseta-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1171",
			"title": "Peso Sign",
			"className": "fa-peso-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1172",
			"title": "Ruble Sign",
			"className": "fa-ruble-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1173",
			"title": "Rupee Sign",
			"className": "fa-rupee-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1174",
			"title": "Rupiah Sign",
			"className": "fa-rupiah-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1175",
			"title": "Shekel Sign",
			"className": "fa-shekel-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1176",
			"title": "Sterling Sign",
			"className": "fa-sterling-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1177",
			"title": "Tenge Sign",
			"className": "fa-tenge-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1178",
			"title": "Turkish Lira Sign",
			"className": "fa-turkish-lira-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1179",
			"title": "Vault",
			"className": "fa-vault",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1180",
			"title": "Wallet",
			"className": "fa-wallet",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1181",
			"title": "Won Sign",
			"className": "fa-won-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1182",
			"title": "Yen Sign",
			"className": "fa-yen-sign",
			"type": "fa",
			"categories": [
				"money"
			]
		},
		{
			"name": "fa1183",
			"title": "Box Open",
			"className": "fa-box-open",
			"type": "fa",
			"categories": [
				"moving"
			]
		},
		{
			"name": "fa1184",
			"title": "People Carry Box",
			"className": "fa-people-carry-box",
			"type": "fa",
			"categories": [
				"moving"
			]
		},
		{
			"name": "fa1185",
			"title": "Sign Hanging",
			"className": "fa-sign-hanging",
			"type": "fa",
			"categories": [
				"moving"
			]
		},
		{
			"name": "fa1186",
			"title": "Tape",
			"className": "fa-tape",
			"type": "fa",
			"categories": [
				"moving"
			]
		},
		{
			"name": "fa1187",
			"title": "Truck",
			"className": "fa-truck-moving",
			"type": "fa",
			"categories": [
				"moving"
			]
		},
		{
			"name": "fa1188",
			"title": "Truck Ramp Box",
			"className": "fa-truck-ramp-box",
			"type": "fa",
			"categories": [
				"moving"
			]
		},
		{
			"name": "fa1189",
			"title": "Drum",
			"className": "fa-drum",
			"type": "fa",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1190",
			"title": "Drum Steelpan",
			"className": "fa-drum-steelpan",
			"type": "fa",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1191",
			"title": "Guitar",
			"className": "fa-guitar",
			"type": "fa",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1192",
			"title": "Headphones Simple",
			"className": "fa-headphones-simple",
			"type": "fa",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1193",
			"title": "Napster",
			"className": "fa-napster",
			"type": "fa",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1194",
			"title": "Record Vinyl",
			"className": "fa-record-vinyl",
			"type": "fa",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1195",
			"title": "Soundcloud",
			"className": "soundcloud",
        "type": "sui",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1196",
			"title": "Spotify",
			"className": "spotify",
        "type": "sui",
			"categories": [
				"music+video"
			]
		},
		{
			"name": "fa1197",
			"title": "Cloud Sun",
			"className": "fa-cloud-sun",
			"type": "fa",
			"categories": [
				"nature"
			]
		},
		{
			"name": "fa1198",
			"title": "Clover",
			"className": "fa-clover",
			"type": "fa",
			"categories": [
				"nature"
			]
		},
		{
			"name": "fa1199",
			"title": "Icicles",
			"className": "fa-icicles",
			"type": "fa",
			"categories": [
				"nature"
			]
		},
		{
			"name": "fa1200",
			"title": "0",
			"className": "fa-0",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1201",
			"title": "1",
			"className": "fa-1",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1202",
			"title": "2",
			"className": "fa-2",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1203",
			"title": "3",
			"className": "fa-3",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1204",
			"title": "4",
			"className": "fa-4",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1205",
			"title": "5",
			"className": "fa-5",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1206",
			"title": "6",
			"className": "fa-6",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1207",
			"title": "7",
			"className": "fa-7",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1208",
			"title": "8",
			"className": "fa-8",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1209",
			"title": "9",
			"className": "fa-9",
			"type": "fa",
			"categories": [
				"numbers"
			]
		},
		{
			"name": "fa1210",
			"title": "Bolt Lightning",
			"className": "fa-bolt-lightning",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1211",
			"title": "Camera Rotate",
			"className": "fa-camera-rotate",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1212",
			"title": "Id Badge",
			"className": "fa-id-badge",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1213",
			"title": "Id Card",
			"className": "fa-id-card",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1214",
			"title": "Image Portrait",
			"className": "fa-image-portrait",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1215",
			"title": "Panorama",
			"className": "fa-panorama",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1216",
			"title": "Unsplash",
			"className": "fa-unsplash",
			"type": "fa",
			"categories": [
				"photos+images"
			]
		},
		{
			"name": "fa1217",
			"title": "Check To Slot",
			"className": "fa-check-to-slot",
			"type": "fa",
			"categories": [
				"political"
			]
		},
		{
			"name": "fa1218",
			"title": "Democrat",
			"className": "fa-democrat",
			"type": "fa",
			"categories": [
				"political"
			]
		},
		{
			"name": "fa1219",
			"title": "Flag Usa",
			"className": "fa-flag-usa",
			"type": "fa",
			"categories": [
				"political"
			]
		},
		{
			"name": "fa1220",
			"title": "Person Booth",
			"className": "fa-person-booth",
			"type": "fa",
			"categories": [
				"political"
			]
		},
		{
			"name": "fa1221",
			"title": "Republican",
			"className": "fa-republican",
			"type": "fa",
			"categories": [
				"political"
			]
		},
		{
			"name": "fa1222",
			"title": "Asterisk",
			"className": "fa-asterisk",
			"type": "fa",
			"categories": [
				"punctuation+symbols"
			]
		},
		{
			"name": "fa1223",
			"title": "Hashtag",
			"className": "fa-hashtag",
			"type": "fa",
			"categories": [
				"punctuation+symbols"
			]
		},
		{
			"name": "fa1224",
			"title": "Section",
			"className": "fa-section",
			"type": "fa",
			"categories": [
				"punctuation+symbols"
			]
		},
		{
			"name": "fa1225",
			"title": "Ankh",
			"className": "fa-ankh",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1226",
			"title": "Bahai",
			"className": "fa-bahai",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1227",
			"title": "Book Bible",
			"className": "fa-book-bible",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1228",
			"title": "Book Journal Whills",
			"className": "fa-book-journal-whills",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1229",
			"title": "Book Quran",
			"className": "fa-book-quran",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1230",
			"title": "Book Tanakh",
			"className": "fa-book-tanakh",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1231",
			"title": "Cross",
			"className": "fa-cross",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1232",
			"title": "Dharmachakra",
			"className": "fa-dharmachakra",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1233",
			"title": "Hamsa",
			"className": "fa-hamsa",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1234",
			"title": "Hanukiah",
			"className": "fa-hanukiah",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1235",
			"title": "Jedi",
			"className": "fa-jedi",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1236",
			"title": "Khanda",
			"className": "fa-khanda",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1237",
			"title": "Om",
			"className": "fa-om",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1238",
			"title": "Peace",
			"className": "fa-peace",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1239",
			"title": "Person Praying",
			"className": "fa-person-praying",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1240",
			"title": "Scroll Torah",
			"className": "fa-scroll-torah",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1241",
			"title": "Spaghetti Monster Flying",
			"className": "fa-spaghetti-monster-flying",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1242",
			"title": "Star And Crescent",
			"className": "fa-star-and-crescent",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1243",
			"title": "Star Of David",
			"className": "fa-star-of-david",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1244",
			"title": "Yin Yang",
			"className": "fa-yin-yang",
			"type": "fa",
			"categories": [
				"religion"
			]
		},
		{
			"name": "fa1248",
			"title": "Sciencefiction Old Republic",
			"className": "fa-old-republic",
			"type": "fa",
			"categories": [
				"science-fiction"
			]
		},
		{
			"name": "fa1250",
			"title": "Temperature High",
			"className": "fa-temperature-high",
			"type": "fa",
			"categories": [
				"general"
			]
		},
		{
			"name": "fa1251",
			"title": "Temperature Low",
			"className": "fa-temperature-low",
			"type": "fa",
			"categories": [
				"general"
			]
		},
		{
			"name": "fa1252",
			"title": "Ban",
			"className": "fa-ban",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1253",
			"title": "File Contract",
			"className": "fa-file-contract",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1254",
			"title": "File Signature",
			"className": "fa-file-signature",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1255",
			"title": "Gun",
			"className": "fa-gun",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1256",
			"title": "Handcuffs",
			"className": "fa-handcuffs",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1257",
			"title": "Land Mine On",
			"className": "fa-land-mine-on",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1258",
			"title": "Lock",
			"className": "fa-lock",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1259",
			"title": "Lock Open",
			"className": "fa-lock-open",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1260",
			"title": "Mars And Venus Burst",
			"className": "fa-mars-and-venus-burst",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1261",
			"title": "Passport",
			"className": "fa-passport",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1262",
			"title": "Unlock",
			"className": "fa-unlock",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1263",
			"title": "Unlock Keyhole",
			"className": "fa-unlock-keyhole",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1264",
			"title": "User Lock",
			"className": "fa-user-lock",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1265",
			"title": "User Shield",
			"className": "fa-user-shield",
			"type": "fa",
			"categories": [
				"security"
			]
		},
		{
			"name": "fa1266",
			"title": "Calendar",
			"className": "fa-calendar",
			"type": "fa",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "fa1267",
			"title": "Certificate",
			"className": "fa-certificate",
			"type": "fa",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "fa1268",
			"title": "Crown",
			"className": "fa-crown",
			"type": "fa",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "fa1269",
			"title": "Heart Crack",
			"className": "fa-heart-crack",
			"type": "fa",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "fa1270",
			"title": "Square",
			"className": "fa-square",
			"type": "fa",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "fa1271",
			"title": "Star",
			"className": "fa-star",
			"type": "fa",
			"categories": [
				"shapes"
			]
		},
		{
			"name": "fa1273",
			"title": "Amazon Pay",
			"className": "amazon pay",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1274",
			"title": "Apple Pay",
			"className": "apple pay",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1275",
			"title": "Cart Arrow Down",
			"className": "fa-cart-arrow-down",
			"type": "fa",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1276",
			"title": "Cart Plus",
			"className": "cart plus",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1277",
			"title": "Cc Amazon Pay",
			"className": "amazon pay",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1278",
			"title": "Cc Amex",
			"className": "cc amex",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1279",
			"title": "Cc Apple Pay",
			"className": "cc apple pay",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1280",
			"title": "Cc Diners Club",
			"className": "cc diners club",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1281",
			"title": "Cc Discover",
			"className": "cc discover",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1282",
			"title": "Cc Jcb",
			"className": "cc jcb",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1283",
			"title": "Cc Mastercard",
			"className": "cc mastercard",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1284",
			"title": "Cc Paypal",
			"className": "cc paypal",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1285",
			"title": "Cc Stripe",
			"className": "cc stripe",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1286",
			"title": "Cc Visa",
			"className": "cc visa",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1287",
			"title": "Gem",
			"className": "gem",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1288",
			"title": "Google Pay",
			"className": "google pay",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1289",
			"title": "Google Wallet",
			"className": "google wallet",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1290",
			"title": "Nfc Directional",
			"className": "fa-nfc-directional",
			"type": "fa",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1291",
			"title": "Nfc Symbol",
			"className": "fa-nfc-symbol",
			"type": "fa",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1292",
			"title": "Paypal",
			"className": "paypal",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1293",
			"title": "Shop Slash",
			"className": "shop slash",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1294",
			"title": "Store Slash",
			"className": "stripe",
        "type": "sui",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1295",
			"title": "Stripe",
			"className": "fa-stripe",
			"type": "fa",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1296",
			"title": "Stripe S",
			"className": "fa-stripe-s",
			"type": "fa",
			"categories": [
				"shopping"
			]
		},
		{
			"name": "fa1297",
			"title": "Circle User",
			"className": "fa-circle-user",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1298",
			"title": "Share Nodes",
			"className": "fa-share-nodes",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1299",
			"title": "Square Share Nodes",
			"className": "fa-square-share-nodes",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1300",
			"title": "User",
			"className": "fa-user",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1301",
			"title": "User Group",
			"className": "fa-user-group",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1302",
			"title": "User Plus",
			"className": "fa-user-plus",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1303",
			"title": "Users",
			"className": "fa-users",
			"type": "fa",
			"categories": [
				"social"
			]
		},
		{
			"name": "fa1304",
			"title": "Circle Notch",
			"className": "fa-circle-notch",
			"type": "fa",
			"categories": [
				"techy"
			]
		},
		{
			"name": "fa1305",
			"title": "Slash",
			"className": "fa-slash",
			"type": "fa",
			"categories": [
				"techy"
			]
		},
		{
			"name": "fa1306",
			"title": "Spinner",
			"className": "fa-spinner",
			"type": "fa",
			"categories": [
				"techy"
			]
		},
		{
			"name": "fa1307",
			"title": "Baseball",
			"className": "fa-baseball",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1308",
			"title": "Basketball",
			"className": "fa-basketball",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1309",
			"title": "Bowling Ball",
			"className": "fa-bowling-ball",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1310",
			"title": "Broom Ball",
			"className": "fa-broom-ball",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1311",
			"title": "Dumbbell",
			"className": "fa-dumbbell",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1312",
			"title": "Football",
			"className": "fa-football",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1313",
			"title": "Futbol",
			"className": "fa-futbol",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1314",
			"title": "Golf Ball Tee",
			"className": "fa-golf-ball-tee",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1315",
			"title": "Hockey Puck",
			"className": "fa-hockey-puck",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1316",
			"title": "Medal",
			"className": "fa-medal",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1317",
			"title": "Person Running",
			"className": "fa-person-running",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1318",
			"title": "Person Skating",
			"className": "fa-person-skating",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1319",
			"title": "Person Skiing",
			"className": "fa-person-skiing",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1320",
			"title": "Person Skiing Nordic",
			"className": "fa-person-skiing-nordic",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1321",
			"title": "Person Snowboarding",
			"className": "fa-person-snowboarding",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1322",
			"title": "Spa",
			"className": "fa-spa",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1323",
			"title": "Stopwatch20",
			"className": "fa-stopwatch-20",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1324",
			"title": "Table Tennis Paddle Ball",
			"className": "fa-table-tennis-paddle-ball",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1325",
			"title": "Volleyball",
			"className": "fa-volleyball",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1326",
			"title": "Weight Hanging",
			"className": "fa-weight-hanging",
			"type": "fa",
			"categories": [
				"sports+fitness"
			]
		},
		{
			"name": "fa1327",
			"title": "Textformatting Align Center",
			"className": "fa-align-center",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1328",
			"title": "Textformatting Align Justify",
			"className": "fa-align-justify",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1329",
			"title": "Textformatting Align Left",
			"className": "fa-align-left",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1330",
			"title": "Textformatting Align Right",
			"className": "fa-align-right",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1331",
			"title": "Textformatting Bold",
			"className": "fa-bold",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1332",
			"title": "Textformatting Border All",
			"className": "fa-border-all",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1333",
			"title": "Textformatting Border None",
			"className": "fa-border-none",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1334",
			"title": "Textformatting Border Top Left",
			"className": "fa-border-top-left",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1335",
			"title": "Textformatting Filter Circle Xmark",
			"className": "fa-filter-circle-xmark",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1336",
			"title": "Textformatting Font",
			"className": "fa-font",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1337",
			"title": "Textformatting Heading",
			"className": "fa-heading",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1338",
			"title": "Textformatting ICursor",
			"className": "fa-i-cursor",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1339",
			"title": "Textformatting Indent",
			"className": "fa-indent",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1340",
			"title": "Textformatting Italic",
			"className": "fa-italic",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1341",
			"title": "Textformatting List",
			"className": "fa-list",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1342",
			"title": "Textformatting List Check",
			"className": "fa-list-check",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1343",
			"title": "Textformatting List Ol",
			"className": "fa-list-ol",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1344",
			"title": "Textformatting List Ul",
			"className": "fa-list-ul",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1345",
			"title": "Textformatting Outdent",
			"className": "fa-outdent",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1346",
			"title": "Textformatting Paragraph",
			"className": "fa-paragraph",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1347",
			"title": "Textformatting Rectangle List",
			"className": "fa-rectangle-list",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1348",
			"title": "Textformatting Spell Check",
			"className": "fa-spell-check",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1349",
			"title": "Textformatting Strikethrough",
			"className": "fa-strikethrough",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1350",
			"title": "Textformatting Table",
			"className": "fa-table",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1351",
			"title": "Textformatting Table Cells",
			"className": "fa-table-cells",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1352",
			"title": "Textformatting Table Cells Column Lock",
			"className": "fa-table-cells-column-lock",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1353",
			"title": "Textformatting Table Cells Large",
			"className": "fa-table-cells-large",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1354",
			"title": "Textformatting Table Cells Row Lock",
			"className": "fa-table-cells-row-lock",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1355",
			"title": "Textformatting Table Columns",
			"className": "fa-table-columns",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1356",
			"title": "Textformatting Table List",
			"className": "fa-table-list",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1357",
			"title": "Textformatting Text Height",
			"className": "fa-text-height",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1358",
			"title": "Textformatting Text Slash",
			"className": "fa-text-slash",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1359",
			"title": "Textformatting Text Width",
			"className": "fa-text-width",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1360",
			"title": "Textformatting Underline",
			"className": "fa-underline",
			"type": "fa",
			"categories": [
				"text-formatting"
			]
		},
		{
			"name": "fa1361",
			"title": "Calendar Check",
			"className": "fa-calendar-check",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1362",
			"title": "Calendar Day",
			"className": "fa-calendar-day",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1363",
			"title": "Calendar Days",
			"className": "fa-calendar-days",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1364",
			"title": "Calendar Minus",
			"className": "fa-calendar-minus",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1365",
			"title": "Calendar Plus",
			"className": "fa-calendar-plus",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1366",
			"title": "Calendar Week",
			"className": "fa-calendar-week",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1367",
			"title": "Calendar Xmark",
			"className": "fa-calendar-xmark",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1368",
			"title": "Clock",
			"className": "fa-clock",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1369",
			"title": "Hourglass",
			"className": "fa-hourglass",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1370",
			"title": "Hourglass End",
			"className": "fa-hourglass-end",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1371",
			"title": "Hourglass Half",
			"className": "fa-hourglass-half",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1372",
			"title": "Hourglass Start",
			"className": "fa-hourglass-start",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1373",
			"title": "Stopwatch",
			"className": "fa-stopwatch",
			"type": "fa",
			"categories": [
				"time"
			]
		},
		{
			"name": "fa1374",
			"title": "Bullseye",
			"className": "fa-bullseye",
			"type": "fa",
			"categories": [
				"toggle"
			]
		},
		{
			"name": "fa1375",
			"title": "Circle Dot",
			"className": "fa-circle-dot",
			"type": "fa",
			"categories": [
				"toggle"
			]
		},
		{
			"name": "fa1376",
			"title": "Star Half",
			"className": "fa-star-half",
			"type": "fa",
			"categories": [
				"toggle"
			]
		},
		{
			"name": "fa1377",
			"title": "Star Half Stroke",
			"className": "fa-star-half-stroke",
			"type": "fa",
			"categories": [
				"toggle"
			]
		},
		{
			"name": "fa1378",
			"title": "Off",
			"className": "fa-toggle-off",
			"type": "fa",
			"categories": [
				"toggle"
			]
		},
		{
			"name": "fa1379",
			"title": "On",
			"className": "fa-toggle-on",
			"type": "fa",
			"categories": [
				"toggle"
			]
		},
		{
			"name": "fa1380",
			"title": "Cable Car",
			"className": "fa-cable-car",
			"type": "fa",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fa1381",
			"title": "Plane Slash",
			"className": "fa-plane-slash",
			"type": "fa",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fa1382",
			"title": "Tractor",
			"className": "fa-tractor",
			"type": "fa",
			"categories": [
				"transportation"
			]
		},
		{
			"name": "fa1383",
			"title": "Arrows Down To People",
			"className": "fa-arrows-down-to-people",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1384",
			"title": "Elevator",
			"className": "fa-elevator",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1385",
			"title": "Hot Tub Person",
			"className": "fa-hot-tub-person",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1386",
			"title": "User Check",
			"className": "fa-user-check",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1387",
			"title": "User Clock",
			"className": "fa-user-clock",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1388",
			"title": "User Gear",
			"className": "fa-user-gear",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1389",
			"title": "User Large",
			"className": "fa-user-large",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1390",
			"title": "User Large Slash",
			"className": "fa-user-large-slash",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1391",
			"title": "User Minus",
			"className": "fa-user-minus",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1392",
			"title": "User Ninja",
			"className": "fa-user-ninja",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1393",
			"title": "User Pen",
			"className": "fa-user-pen",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1394",
			"title": "Users Gear",
			"className": "fa-users-gear",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1395",
			"title": "User Slash",
			"className": "fa-user-slash",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1396",
			"title": "Users Slash",
			"className": "fa-users-slash",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1397",
			"title": "User Tag",
			"className": "fa-user-tag",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1398",
			"title": "User Xmark",
			"className": "fa-user-xmark",
			"type": "fa",
			"categories": [
				"users+people"
			]
		},
		{
			"name": "fa1399",
			"title": "Cloud Moon Rain",
			"className": "fa-cloud-moon-rain",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1400",
			"title": "Cloud Rain",
			"className": "fa-cloud-rain",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1401",
			"title": "Cloud Sun Rain",
			"className": "fa-cloud-sun-rain",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1402",
			"title": "Poo Storm",
			"className": "fa-poo-storm",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1403",
			"title": "Rainbow",
			"className": "fa-rainbow",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1404",
			"title": "Smog",
			"className": "fa-smog",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1405",
			"title": "Temperature Empty",
			"className": "fa-temperature-empty",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1406",
			"title": "Temperature Full",
			"className": "fa-temperature-full",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1407",
			"title": "Temperature Half",
			"className": "fa-temperature-half",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1408",
			"title": "Temperature Quarter",
			"className": "fa-temperature-quarter",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1409",
			"title": "Temperature Three Quarters",
			"className": "fa-temperature-three-quarters",
			"type": "fa",
			"categories": [
				"weather"
			]
		},
		{
			"name": "fa1410",
			"title": "Blog",
			"className": "fa-blog",
			"type": "fa",
			"categories": [
				"techy"
			]
		},
		{
			"name": "fa1411",
			"title": "Book Bookmark",
			"className": "fa-book-bookmark",
			"type": "fa",
			"categories": [
				"techy"
			]
		},
		{
			"name": "fa1412",
			"title": "Paperclip",
			"className": "fa-paperclip",
			"type": "fa",
			"categories": [
				"office"
			]
		}
	],
"categories": [
    {
        "name": "shapes",
        "title": "Shapes"
    },
    {
        "name": "typography",
        "title": "Typography"
    },
    {
        "name": "transportation",
        "title": "Transportation"
    },
    {
        "name": "devices",
        "title": "Devices"
    },
    {
        "name": "brand",
        "title": "Brand"
    },
    {
        "name": "graphics",
        "title": "Graphics"
    },
    {
        "name": "user+interface",
        "title": "User Interface"
    },
    {
        "name": "apps",
        "title": "Apps"
    },
    {
        "name": "arrows",
        "title": "Arrows"
    },
    {
        "name": "media",
        "title": "Media"
    },
    {
        "name": "communications",
        "title": "Communications"
    },
    {
        "name": "real+world",
        "title": "Real World"
    },
    {
        "name": "travel",
        "title": "Travel"
    },
    {
        "name": "badges",
        "title": "Badges"
    },
    {
        "name": "commerce",
        "title": "Commerce"
    },
    {
        "name": "miscellaneous",
        "title": "Miscellaneous"
    },
    {
        "name": "bootstrap",
        "title": "Bootstrap"
    },
    {
        "name": "box arrows",
        "title": "Box Arrows"
    },
    {
        "name": "tools",
        "title": "Tools"
    },
    {
        "name": "buildings",
        "title": "Buildings"
    },
    {
        "name": "geo",
        "title": "Geo"
    },
    {
        "name": "medical",
        "title": "Medical"
    },
    {
        "name": "carets",
        "title": "Carets"
    },
    {
        "name": "alerts",
        "title": "Alerts"
    },
    {
        "name": "chevrons",
        "title": "Chevrons"
    },
    {
        "name": "clouds",
        "title": "Clouds"
    },
    {
        "name": "weather",
        "title": "Weather"
    },
    {
        "name": "layout",
        "title": "Layout"
    },
    {
        "name": "emoji",
        "title": "Emoji"
    },
    {
        "name": "sort+filter",
        "title": "Sort Filter"
    },
    {
        "name": "security",
        "title": "Security"
    },
    {
        "name": "people",
        "title": "People"
    },
    {
        "name": "hands",
        "title": "Hands"
    },
    {
        "name": "love",
        "title": "Love"
    },
    {
        "name": "controls",
        "title": "Controls"
    },
    {
        "name": "admin",
        "title": "Admin"
    },
    {
        "name": "format",
        "title": "Format"
    },
    {
        "name": "image",
        "title": "Image"
    },
    {
        "name": "database",
        "title": "Database"
    },
    {
        "name": "align",
        "title": "Align"
    },
    {
        "name": "block",
        "title": "Block"
    },
    {
        "name": "tinymce",
        "title": "Tinymce"
    },
    {
        "name": "general",
        "title": "General"
    },
    {
        "name": "remove",
        "title": "Remove"
    },
    {
        "name": "social",
        "title": "Social"
    },
    {
        "name": "office",
        "title": "Office"
    },
    {
        "name": "techy",
        "title": "Techy"
    },
    {
        "name": "buddicons",
        "title": "Buddicons"
    },
    {
        "name": "notifications",
        "title": "Notifications"
    },
    {
        "name": "graphs",
        "title": "Graphs"
    },
    {
        "name": "accessibility",
        "title": "Accessibility"
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
        "name": "astronomy",
        "title": "Astronomy"
    },
    {
        "name": "automotive",
        "title": "Automotive"
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
        "name": "energy",
        "title": "Energy"
    },
    {
        "name": "files",
        "title": "Files"
    },
    {
        "name": "food+beverage",
        "title": "Food Beverage"
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
        "name": "mathematics",
        "title": "Mathematics"
    },
    {
        "name": "media-playback",
        "title": "Media-playback"
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
        "name": "shopping",
        "title": "Shopping"
    },
    {
        "name": "sports+fitness",
        "title": "Sports Fitness"
    },
    {
        "name": "text-formatting",
        "title": "Text-formatting"
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
        "name": "users+people",
        "title": "Users People"
    }
]
	
}

export function geClasstIcons(){
	return classIconIndex
}
