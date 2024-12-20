
export function getIconEl({iconname, icontype, iconclass}){
    let tmpClasses = iconname || iconclass || '';

    if( icontype == 'fa' ){
        if( iconclass ){
            return <i class={'' + tmpClasses}></i>;
        } else {
            return <i class={'icon faicon ' + tmpClasses}></i>;
        }
    } else if( icontype == 'dash' ){
        return <span class={'icon dashicons ' + tmpClasses }></span>;
    } else {
        return <i class={'icon  ' + tmpClasses}></i>;
    }
}

export const classIconIndex = {
	"icons": [
        {
            "name": "sui-users",
            "title": "UI Users",
            "className": "users",
            "type":"sui","categories": [
                "accessibility"
            ]
        },
        {
            "name": "dash-smiley",
            "title": "Dash Smiley",
            "className": "dashicons-smiley",
            "type":"dash","categories": [
                "accessibility"
            ]
        },
    {
        "name": "fa-AccessibilityAddressCard",
        "title": "Address Card",
        "className": "fa-solid fa-address-card",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityAudioDescription",
        "title": "Audio Description",
        "className": "fa-solid fa-audio-description",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityBraille",
        "title": "Braille",
        "className": "fa-solid fa-braille",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityCircleInfo",
        "title": "Circle Info",
        "className": "fa-solid fa-circle-info",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityCircleQuestion",
        "title": "Circle Question",
        "className": "fa-solid fa-circle-question",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityClosedCaptioning",
        "title": "Closed Captioning",
        "className": "fa-solid fa-closed-captioning",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityEarDeaf",
        "title": "Ear Deaf",
        "className": "fa-solid fa-ear-deaf",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityEarListen",
        "title": "Ear Listen",
        "className": "fa-solid fa-ear-listen",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityEyeLowVision",
        "title": "Eye Low Vision",
        "className": "fa-solid fa-eye-low-vision",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityFingerprint",
        "title": "Fingerprint",
        "className": "fa-solid fa-fingerprint",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityHands",
        "title": "Hands",
        "className": "fa-solid fa-hands",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityHandsAslInterpreting",
        "title": "Hands Asl Interpreting",
        "className": "fa-solid fa-hands-asl-interpreting",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityHandshakeAngle",
        "title": "Handshake Angle",
        "className": "fa-solid fa-handshake-angle",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityPersonCane",
        "title": "Person Cane",
        "className": "fa-solid fa-person-cane",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityPersonWalkingWithCane",
        "title": "Person Walking With Cane",
        "className": "fa-solid fa-person-walking-with-cane",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityPhoneVolume",
        "title": "Phone Volume",
        "className": "fa-solid fa-phone-volume",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityQuestion",
        "title": "Question",
        "className": "fa-solid fa-question",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityTty",
        "title": "Tty",
        "className": "fa-solid fa-tty",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityUniversalAccess",
        "title": "Universal Access",
        "className": "fa-solid fa-universal-access",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AccessibilityWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "accessibility"
        ]
    },
    {
        "name": "fa-AlertBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertBellSlash",
        "title": "Bell Slash",
        "className": "fa-solid fa-bell-slash",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertCircleExclamation",
        "title": "Circle Exclamation",
        "className": "fa-solid fa-circle-exclamation",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertCircleRadiation",
        "title": "Circle Radiation",
        "className": "fa-solid fa-circle-radiation",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertExclamation",
        "title": "Exclamation",
        "className": "fa-solid fa-exclamation",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertQuestion",
        "title": "Question",
        "className": "fa-solid fa-question",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlertTriangleExclamation",
        "title": "Triangle Exclamation",
        "className": "fa-solid fa-triangle-exclamation",
        "type":"fa","categories": [
            "alert"
        ]
    },
    {
        "name": "fa-AlphabetA",
        "title": "A",
        "className": "fa-solid fa-a",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetAddressCard",
        "title": "Address Card",
        "className": "fa-solid fa-address-card",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetB",
        "title": "B",
        "className": "fa-solid fa-b",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetC",
        "title": "C",
        "className": "fa-solid fa-c",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetCircleH",
        "title": "Circle H",
        "className": "fa-solid fa-circle-h",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetD",
        "title": "D",
        "className": "fa-solid fa-d",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetE",
        "title": "E",
        "className": "fa-solid fa-e",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetF",
        "title": "F",
        "className": "fa-solid fa-f",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetG",
        "title": "G",
        "className": "fa-solid fa-g",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetH",
        "title": "H",
        "className": "fa-solid fa-h",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetI",
        "title": "I",
        "className": "fa-solid fa-i",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetJ",
        "title": "J",
        "className": "fa-solid fa-j",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetK",
        "title": "K",
        "className": "fa-solid fa-k",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetL",
        "title": "L",
        "className": "fa-solid fa-l",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetM",
        "title": "M",
        "className": "fa-solid fa-m",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetN",
        "title": "N",
        "className": "fa-solid fa-n",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetO",
        "title": "O",
        "className": "fa-solid fa-o",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetP",
        "title": "P",
        "className": "fa-solid fa-p",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetQ",
        "title": "Q",
        "className": "fa-solid fa-q",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetR",
        "title": "R",
        "className": "fa-solid fa-r",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetS",
        "title": "S",
        "className": "fa-solid fa-s",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetSquareH",
        "title": "Square H",
        "className": "fa-solid fa-square-h",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetT",
        "title": "T",
        "className": "fa-solid fa-t",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetU",
        "title": "U",
        "className": "fa-solid fa-u",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetV",
        "title": "V",
        "className": "fa-solid fa-v",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetW",
        "title": "W",
        "className": "fa-solid fa-w",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetX",
        "title": "X",
        "className": "fa-solid fa-x",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetY",
        "title": "Y",
        "className": "fa-solid fa-y",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AlphabetZ",
        "title": "Z",
        "className": "fa-solid fa-z",
        "type":"fa","categories": [
            "alphabet"
        ]
    },
    {
        "name": "fa-AnimalsBugs",
        "title": "Bugs",
        "className": "fa-solid fa-bugs",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsCat",
        "title": "Cat",
        "className": "fa-solid fa-cat",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsCow",
        "title": "Cow",
        "className": "fa-solid fa-cow",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsCrow",
        "title": "Crow",
        "className": "fa-solid fa-crow",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsDog",
        "title": "Dog",
        "className": "fa-solid fa-dog",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsDove",
        "title": "Dove",
        "className": "fa-solid fa-dove",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsDragon",
        "title": "Dragon",
        "className": "fa-solid fa-dragon",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsFeather",
        "title": "Feather",
        "className": "fa-solid fa-feather",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsFeatherPointed",
        "title": "Feather Pointed",
        "className": "fa-solid fa-feather-pointed",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsFish",
        "title": "Fish",
        "className": "fa-solid fa-fish",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsFishFins",
        "title": "Fish Fins",
        "className": "fa-solid fa-fish-fins",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsFrog",
        "title": "Frog",
        "className": "fa-solid fa-frog",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsHippo",
        "title": "Hippo",
        "className": "fa-solid fa-hippo",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsHorse",
        "title": "Horse",
        "className": "fa-solid fa-horse",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsHorseHead",
        "title": "Horse Head",
        "className": "fa-solid fa-horse-head",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsKiwiBird",
        "title": "Kiwi Bird",
        "className": "fa-solid fa-kiwi-bird",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsLocust",
        "title": "Locust",
        "className": "fa-solid fa-locust",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsMosquito",
        "title": "Mosquito",
        "className": "fa-solid fa-mosquito",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsOtter",
        "title": "Otter",
        "className": "fa-solid fa-otter",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsPaw",
        "title": "Paw",
        "className": "fa-solid fa-paw",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsShieldCat",
        "title": "Shield Cat",
        "className": "fa-solid fa-shield-cat",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsShieldDog",
        "title": "Shield Dog",
        "className": "fa-solid fa-shield-dog",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsShrimp",
        "title": "Shrimp",
        "className": "fa-solid fa-shrimp",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsSpider",
        "title": "Spider",
        "className": "fa-solid fa-spider",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-AnimalsWorm",
        "title": "Worm",
        "className": "fa-solid fa-worm",
        "type":"fa","categories": [
            "animals"
        ]
    },
    {
        "name": "fa-ArrowsAngleDown",
        "title": "Angle Down",
        "className": "fa-solid fa-angle-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAngleLeft",
        "title": "Angle Left",
        "className": "fa-solid fa-angle-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAngleRight",
        "title": "Angle Right",
        "className": "fa-solid fa-angle-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesDown",
        "title": "Angles Down",
        "className": "fa-solid fa-angles-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesLeft",
        "title": "Angles Left",
        "className": "fa-solid fa-angles-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesRight",
        "title": "Angles Right",
        "className": "fa-solid fa-angles-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAnglesUp",
        "title": "Angles Up",
        "className": "fa-solid fa-angles-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsAngleUp",
        "title": "Angle Up",
        "className": "fa-solid fa-angle-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDown",
        "title": "Arrow Down",
        "className": "fa-solid fa-arrow-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDown19",
        "title": "Arrow Down19",
        "className": "fa-solid fa-arrow-down-1-9",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDown91",
        "title": "Arrow Down91",
        "className": "fa-solid fa-arrow-down-9-1",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownAZ",
        "title": "Arrow Down AZ",
        "className": "fa-solid fa-arrow-down-a-z",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownLong",
        "title": "Arrow Down Long",
        "className": "fa-solid fa-arrow-down-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownShortWide",
        "title": "Arrow Down Short Wide",
        "className": "fa-solid fa-arrow-down-short-wide",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownUpAcrossLine",
        "title": "Arrow Down Up Across Line",
        "className": "fa-solid fa-arrow-down-up-across-line",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownUpLock",
        "title": "Arrow Down Up Lock",
        "className": "fa-solid fa-arrow-down-up-lock",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownWideShort",
        "title": "Arrow Down Wide Short",
        "className": "fa-solid fa-arrow-down-wide-short",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowDownZA",
        "title": "Arrow Down ZA",
        "className": "fa-solid fa-arrow-down-z-a",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowLeft",
        "title": "Arrow Left",
        "className": "fa-solid fa-arrow-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowLeftLong",
        "title": "Arrow Left Long",
        "className": "fa-solid fa-arrow-left-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowPointer",
        "title": "Arrow Pointer",
        "className": "fa-solid fa-arrow-pointer",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRight",
        "title": "Arrow Right",
        "className": "fa-solid fa-arrow-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightArrowLeft",
        "title": "Arrow Right Arrow Left",
        "className": "fa-solid fa-arrow-right-arrow-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightFromBracket",
        "title": "Arrow Right From Bracket",
        "className": "fa-solid fa-arrow-right-from-bracket",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightLong",
        "title": "Arrow Right Long",
        "className": "fa-solid fa-arrow-right-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRightToBracket",
        "title": "Arrow Right To Bracket",
        "className": "fa-solid fa-arrow-right-to-bracket",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRotateLeft",
        "title": "Arrow Rotate Left",
        "className": "fa-solid fa-arrow-rotate-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowRotateRight",
        "title": "Arrow Rotate Right",
        "className": "fa-solid fa-arrow-rotate-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsDownToLine",
        "title": "Down To Line",
        "className": "fa-solid fa-arrows-down-to-line",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsLeftRight",
        "title": "Left Right",
        "className": "fa-solid fa-arrows-left-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsLeftRightToLine",
        "title": "Left Right To Line",
        "className": "fa-solid fa-arrows-left-right-to-line",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsRotate",
        "title": "Rotate",
        "className": "fa-solid fa-arrows-rotate",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsSpin",
        "title": "Spin",
        "className": "fa-solid fa-arrows-spin",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsSplitUpAndLeft",
        "title": "Split Up And Left",
        "className": "fa-solid fa-arrows-split-up-and-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsToCircle",
        "title": "To Circle",
        "className": "fa-solid fa-arrows-to-circle",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsToDot",
        "title": "To Dot",
        "className": "fa-solid fa-arrows-to-dot",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsToEye",
        "title": "To Eye",
        "className": "fa-solid fa-arrows-to-eye",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsTurnRight",
        "title": "Turn Right",
        "className": "fa-solid fa-arrows-turn-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsTurnToDots",
        "title": "Turn To Dots",
        "className": "fa-solid fa-arrows-turn-to-dots",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsUpDown",
        "title": "Up Down",
        "className": "fa-solid fa-arrows-up-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsUpDownLeftRight",
        "title": "Up Down Left Right",
        "className": "fa-solid fa-arrows-up-down-left-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowsUpToLine",
        "title": "Up To Line",
        "className": "fa-solid fa-arrows-up-to-line",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTrendDown",
        "title": "Arrow Trend Down",
        "className": "fa-solid fa-arrow-trend-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTrendUp",
        "title": "Arrow Trend Up",
        "className": "fa-solid fa-arrow-trend-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTurnDown",
        "title": "Arrow Turn Down",
        "className": "fa-solid fa-arrow-turn-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowTurnUp",
        "title": "Arrow Turn Up",
        "className": "fa-solid fa-arrow-turn-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUp",
        "title": "Arrow Up",
        "className": "fa-solid fa-arrow-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUp19",
        "title": "Arrow Up19",
        "className": "fa-solid fa-arrow-up-1-9",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUp91",
        "title": "Arrow Up91",
        "className": "fa-solid fa-arrow-up-9-1",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpAZ",
        "title": "Arrow Up AZ",
        "className": "fa-solid fa-arrow-up-a-z",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpFromBracket",
        "title": "Arrow Up From Bracket",
        "className": "fa-solid fa-arrow-up-from-bracket",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpLong",
        "title": "Arrow Up Long",
        "className": "fa-solid fa-arrow-up-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpRightDots",
        "title": "Arrow Up Right Dots",
        "className": "fa-solid fa-arrow-up-right-dots",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpRightFromSquare",
        "title": "Arrow Up Right From Square",
        "className": "fa-solid fa-arrow-up-right-from-square",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpShortWide",
        "title": "Arrow Up Short Wide",
        "className": "fa-solid fa-arrow-up-short-wide",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpWideShort",
        "title": "Arrow Up Wide Short",
        "className": "fa-solid fa-arrow-up-wide-short",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsArrowUpZA",
        "title": "Arrow Up ZA",
        "className": "fa-solid fa-arrow-up-z-a",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretDown",
        "title": "Caret Down",
        "className": "fa-solid fa-caret-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretLeft",
        "title": "Caret Left",
        "className": "fa-solid fa-caret-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretRight",
        "title": "Caret Right",
        "className": "fa-solid fa-caret-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCaretUp",
        "title": "Caret Up",
        "className": "fa-solid fa-caret-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronDown",
        "title": "Chevron Down",
        "className": "fa-solid fa-chevron-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronLeft",
        "title": "Chevron Left",
        "className": "fa-solid fa-chevron-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronRight",
        "title": "Chevron Right",
        "className": "fa-solid fa-chevron-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsChevronUp",
        "title": "Chevron Up",
        "className": "fa-solid fa-chevron-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowDown",
        "title": "Circle Arrow Down",
        "className": "fa-solid fa-circle-arrow-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowLeft",
        "title": "Circle Arrow Left",
        "className": "fa-solid fa-circle-arrow-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowRight",
        "title": "Circle Arrow Right",
        "className": "fa-solid fa-circle-arrow-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleArrowUp",
        "title": "Circle Arrow Up",
        "className": "fa-solid fa-circle-arrow-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronDown",
        "title": "Circle Chevron Down",
        "className": "fa-solid fa-circle-chevron-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronLeft",
        "title": "Circle Chevron Left",
        "className": "fa-solid fa-circle-chevron-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronRight",
        "title": "Circle Chevron Right",
        "className": "fa-solid fa-circle-chevron-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleChevronUp",
        "title": "Circle Chevron Up",
        "className": "fa-solid fa-circle-chevron-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleDown",
        "title": "Circle Down",
        "className": "fa-solid fa-circle-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleLeft",
        "title": "Circle Left",
        "className": "fa-solid fa-circle-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleRight",
        "title": "Circle Right",
        "className": "fa-solid fa-circle-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCircleUp",
        "title": "Circle Up",
        "className": "fa-solid fa-circle-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsClockRotateLeft",
        "title": "Clock Rotate Left",
        "className": "fa-solid fa-clock-rotate-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCloudArrowDown",
        "title": "Cloud Arrow Down",
        "className": "fa-solid fa-cloud-arrow-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsCloudArrowUp",
        "title": "Cloud Arrow Up",
        "className": "fa-solid fa-cloud-arrow-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsDownLeftAndUpRightToCenter",
        "title": "Down Left And Up Right To Center",
        "className": "fa-solid fa-down-left-and-up-right-to-center",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsDownload",
        "title": "Download",
        "className": "fa-solid fa-download",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsDownLong",
        "title": "Down Long",
        "className": "fa-solid fa-down-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsLeftLong",
        "title": "Left Long",
        "className": "fa-solid fa-left-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsLeftRight",
        "title": "Left Right",
        "className": "fa-solid fa-left-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsLocationArrow",
        "title": "Location Arrow",
        "className": "fa-solid fa-location-arrow",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsMaximize",
        "title": "Maximize",
        "className": "fa-solid fa-maximize",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRecycle",
        "title": "Recycle",
        "className": "fa-solid fa-recycle",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRepeat",
        "title": "Repeat",
        "className": "fa-solid fa-repeat",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsReply",
        "title": "Reply",
        "className": "fa-solid fa-reply",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsReplyAll",
        "title": "Reply All",
        "className": "fa-solid fa-reply-all",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRetweet",
        "title": "Retweet",
        "className": "fa-solid fa-retweet",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightFromBracket",
        "title": "Right From Bracket",
        "className": "fa-solid fa-right-from-bracket",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightLeft",
        "title": "Right Left",
        "className": "fa-solid fa-right-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightLong",
        "title": "Right Long",
        "className": "fa-solid fa-right-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRightToBracket",
        "title": "Right To Bracket",
        "className": "fa-solid fa-right-to-bracket",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRotate",
        "title": "Rotate",
        "className": "fa-solid fa-rotate",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRotateLeft",
        "title": "Rotate Left",
        "className": "fa-solid fa-rotate-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsRotateRight",
        "title": "Rotate Right",
        "className": "fa-solid fa-rotate-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsShare",
        "title": "Share",
        "className": "fa-solid fa-share",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsShareFromSquare",
        "title": "Share From Square",
        "className": "fa-solid fa-share-from-square",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsShuffle",
        "title": "Shuffle",
        "className": "fa-solid fa-shuffle",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSort",
        "title": "Sort",
        "className": "fa-solid fa-sort",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSortDown",
        "title": "Sort Down",
        "className": "fa-solid fa-sort-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSortUp",
        "title": "Sort Up",
        "className": "fa-solid fa-sort-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareArrowUpRight",
        "title": "Square Arrow Up Right",
        "className": "fa-solid fa-square-arrow-up-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretDown",
        "title": "Square Caret Down",
        "className": "fa-solid fa-square-caret-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretLeft",
        "title": "Square Caret Left",
        "className": "fa-solid fa-square-caret-left",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretRight",
        "title": "Square Caret Right",
        "className": "fa-solid fa-square-caret-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareCaretUp",
        "title": "Square Caret Up",
        "className": "fa-solid fa-square-caret-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsSquareUpRight",
        "title": "Square Up Right",
        "className": "fa-solid fa-square-up-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsTurnDown",
        "title": "Turn Down",
        "className": "fa-solid fa-turn-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsTurnUp",
        "title": "Turn Up",
        "className": "fa-solid fa-turn-up",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpDown",
        "title": "Up Down",
        "className": "fa-solid fa-up-down",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpDownLeftRight",
        "title": "Up Down Left Right",
        "className": "fa-solid fa-up-down-left-right",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpload",
        "title": "Upload",
        "className": "fa-solid fa-upload",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpLong",
        "title": "Up Long",
        "className": "fa-solid fa-up-long",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpRightAndDownLeftFromCenter",
        "title": "Up Right And Down Left From Center",
        "className": "fa-solid fa-up-right-and-down-left-from-center",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-ArrowsUpRightFromSquare",
        "title": "Up Right From Square",
        "className": "fa-solid fa-up-right-from-square",
        "type":"fa","categories": [
            "arrows"
        ]
    },
    {
        "name": "fa-AstronomyBinoculars",
        "title": "Binoculars",
        "className": "fa-solid fa-binoculars",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomyGlobe",
        "title": "Globe",
        "className": "fa-solid fa-globe",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomyMeteor",
        "title": "Meteor",
        "className": "fa-solid fa-meteor",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomyMoon",
        "title": "Moon",
        "className": "fa-solid fa-moon",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomySatellite",
        "title": "Satellite",
        "className": "fa-solid fa-satellite",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomySatelliteDish",
        "title": "Satellite Dish",
        "className": "fa-solid fa-satellite-dish",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomyShuttleSpace",
        "title": "Shuttle Space",
        "className": "fa-solid fa-shuttle-space",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AstronomyUserAstronaut",
        "title": "User Astronaut",
        "className": "fa-solid fa-user-astronaut",
        "type":"fa","categories": [
            "astronomy"
        ]
    },
    {
        "name": "fa-AutomotiveBus",
        "title": "Bus",
        "className": "fa-solid fa-bus",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveBusSimple",
        "title": "Bus Simple",
        "className": "fa-solid fa-bus-simple",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCaravan",
        "title": "Caravan",
        "className": "fa-solid fa-caravan",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCarBattery",
        "title": "Car Battery",
        "className": "fa-solid fa-car-battery",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCarBurst",
        "title": "Car Burst",
        "className": "fa-solid fa-car-burst",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCarOn",
        "title": "Car On",
        "className": "fa-solid fa-car-on",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCarRear",
        "title": "Car Rear",
        "className": "fa-solid fa-car-rear",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCarSide",
        "title": "Car Side",
        "className": "fa-solid fa-car-side",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveCarTunnel",
        "title": "Car Tunnel",
        "className": "fa-solid fa-car-tunnel",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveChargingStation",
        "title": "Charging Station",
        "className": "fa-solid fa-charging-station",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGasPump",
        "title": "Gas Pump",
        "className": "fa-solid fa-gas-pump",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGauge",
        "title": "Gauge",
        "className": "fa-solid fa-gauge",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGaugeHigh",
        "title": "Gauge High",
        "className": "fa-solid fa-gauge-high",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGaugeSimple",
        "title": "Gauge Simple",
        "className": "fa-solid fa-gauge-simple",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveGaugeSimpleHigh",
        "title": "Gauge Simple High",
        "className": "fa-solid fa-gauge-simple-high",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveMotorcycle",
        "title": "Motorcycle",
        "className": "fa-solid fa-motorcycle",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveOilCan",
        "title": "Oil Can",
        "className": "fa-solid fa-oil-can",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveSprayCanSparkles",
        "title": "Spray Can Sparkles",
        "className": "fa-solid fa-spray-can-sparkles",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTaxi",
        "title": "Taxi",
        "className": "fa-solid fa-taxi",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTrailer",
        "title": "Trailer",
        "className": "fa-solid fa-trailer",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTruckField",
        "title": "Truck Field",
        "className": "fa-solid fa-truck-field",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTruckFieldUn",
        "title": "Truck Field Un",
        "className": "fa-solid fa-truck-field-un",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTruckMonster",
        "title": "Truck Monster",
        "className": "fa-solid fa-truck-monster",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveTruckPickup",
        "title": "Truck Pickup",
        "className": "fa-solid fa-truck-pickup",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-AutomotiveVanShuttle",
        "title": "Van Shuttle",
        "className": "fa-solid fa-van-shuttle",
        "type":"fa","categories": [
            "automotive"
        ]
    },
    {
        "name": "fa-BuildingsArchway",
        "title": "Archway",
        "className": "fa-solid fa-archway",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsArrowRightToCity",
        "title": "Arrow Right To City",
        "className": "fa-solid fa-arrow-right-to-city",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuilding",
        "title": "Building",
        "className": "fa-solid fa-building",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleArrowRight",
        "title": "Building Circle Arrow Right",
        "className": "fa-solid fa-building-circle-arrow-right",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleCheck",
        "title": "Building Circle Check",
        "className": "fa-solid fa-building-circle-check",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleExclamation",
        "title": "Building Circle Exclamation",
        "className": "fa-solid fa-building-circle-exclamation",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingCircleXmark",
        "title": "Building Circle Xmark",
        "className": "fa-solid fa-building-circle-xmark",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingColumns",
        "title": "Building Columns",
        "className": "fa-solid fa-building-columns",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingFlag",
        "title": "Building Flag",
        "className": "fa-solid fa-building-flag",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingLock",
        "title": "Building Lock",
        "className": "fa-solid fa-building-lock",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingNgo",
        "title": "Building Ngo",
        "className": "fa-solid fa-building-ngo",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingShield",
        "title": "Building Shield",
        "className": "fa-solid fa-building-shield",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingUn",
        "title": "Building Un",
        "className": "fa-solid fa-building-un",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingUser",
        "title": "Building User",
        "className": "fa-solid fa-building-user",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsBuildingWheat",
        "title": "Building Wheat",
        "className": "fa-solid fa-building-wheat",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsCampground",
        "title": "Campground",
        "className": "fa-solid fa-campground",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsChurch",
        "title": "Church",
        "className": "fa-solid fa-church",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsCity",
        "title": "City",
        "className": "fa-solid fa-city",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsDungeon",
        "title": "Dungeon",
        "className": "fa-solid fa-dungeon",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsGopuram",
        "title": "Gopuram",
        "className": "fa-solid fa-gopuram",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHospital",
        "title": "Hospital",
        "className": "fa-solid fa-hospital",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHospitalUser",
        "title": "Hospital User",
        "className": "fa-solid fa-hospital-user",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHotel",
        "title": "Hotel",
        "className": "fa-solid fa-hotel",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouse",
        "title": "House",
        "className": "fa-solid fa-house",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimney",
        "title": "House Chimney",
        "className": "fa-solid fa-house-chimney",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimneyCrack",
        "title": "House Chimney Crack",
        "className": "fa-solid fa-house-chimney-crack",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimneyMedical",
        "title": "House Chimney Medical",
        "className": "fa-solid fa-house-chimney-medical",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseChimneyWindow",
        "title": "House Chimney Window",
        "className": "fa-solid fa-house-chimney-window",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCircleCheck",
        "title": "House Circle Check",
        "className": "fa-solid fa-house-circle-check",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCircleExclamation",
        "title": "House Circle Exclamation",
        "className": "fa-solid fa-house-circle-exclamation",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCircleXmark",
        "title": "House Circle Xmark",
        "className": "fa-solid fa-house-circle-xmark",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseCrack",
        "title": "House Crack",
        "className": "fa-solid fa-house-crack",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseFire",
        "title": "House Fire",
        "className": "fa-solid fa-house-fire",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseFlag",
        "title": "House Flag",
        "className": "fa-solid fa-house-flag",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseLock",
        "title": "House Lock",
        "className": "fa-solid fa-house-lock",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedical",
        "title": "House Medical",
        "className": "fa-solid fa-house-medical",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalCircleCheck",
        "title": "House Medical Circle Check",
        "className": "fa-solid fa-house-medical-circle-check",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalCircleExclamation",
        "title": "House Medical Circle Exclamation",
        "className": "fa-solid fa-house-medical-circle-exclamation",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalCircleXmark",
        "title": "House Medical Circle Xmark",
        "className": "fa-solid fa-house-medical-circle-xmark",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsHouseMedicalFlag",
        "title": "House Medical Flag",
        "className": "fa-solid fa-house-medical-flag",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsIgloo",
        "title": "Igloo",
        "className": "fa-solid fa-igloo",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsIndustry",
        "title": "Industry",
        "className": "fa-solid fa-industry",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsKaaba",
        "title": "Kaaba",
        "className": "fa-solid fa-kaaba",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsLandmark",
        "title": "Landmark",
        "className": "fa-solid fa-landmark",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsLandmarkDome",
        "title": "Landmark Dome",
        "className": "fa-solid fa-landmark-dome",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsLandmarkFlag",
        "title": "Landmark Flag",
        "className": "fa-solid fa-landmark-flag",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsMonument",
        "title": "Monument",
        "className": "fa-solid fa-monument",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsMosque",
        "title": "Mosque",
        "className": "fa-solid fa-mosque",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsMountainCity",
        "title": "Mountain City",
        "className": "fa-solid fa-mountain-city",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsOilWell",
        "title": "Oil Well",
        "className": "fa-solid fa-oil-well",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsPlaceOfWorship",
        "title": "Place Of Worship",
        "className": "fa-solid fa-place-of-worship",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSchool",
        "title": "School",
        "className": "fa-solid fa-school",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSchoolCircleCheck",
        "title": "School Circle Check",
        "className": "fa-solid fa-school-circle-check",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSchoolCircleExclamation",
        "title": "School Circle Exclamation",
        "className": "fa-solid fa-school-circle-exclamation",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSchoolCircleXmark",
        "title": "School Circle Xmark",
        "className": "fa-solid fa-school-circle-xmark",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSchoolFlag",
        "title": "School Flag",
        "className": "fa-solid fa-school-flag",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSchoolLock",
        "title": "School Lock",
        "className": "fa-solid fa-school-lock",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsShop",
        "title": "Shop",
        "className": "fa-solid fa-shop",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsShopLock",
        "title": "Shop Lock",
        "className": "fa-solid fa-shop-lock",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsStore",
        "title": "Store",
        "className": "fa-solid fa-store",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsSynagogue",
        "title": "Synagogue",
        "className": "fa-solid fa-synagogue",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTent",
        "title": "Tent",
        "className": "fa-solid fa-tent",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowDownToLine",
        "title": "Tent Arrow Down To Line",
        "className": "fa-solid fa-tent-arrow-down-to-line",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowLeftRight",
        "title": "Tent Arrow Left Right",
        "className": "fa-solid fa-tent-arrow-left-right",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowsDown",
        "title": "Tent Arrows Down",
        "className": "fa-solid fa-tent-arrows-down",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTentArrowTurnLeft",
        "title": "Tent Arrow Turn Left",
        "className": "fa-solid fa-tent-arrow-turn-left",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTents",
        "title": "Tents",
        "className": "fa-solid fa-tents",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsToiletPortable",
        "title": "Toilet Portable",
        "className": "fa-solid fa-toilet-portable",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsToiletsPortable",
        "title": "Toilets Portable",
        "className": "fa-solid fa-toilets-portable",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsToriiGate",
        "title": "Torii Gate",
        "className": "fa-solid fa-torii-gate",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTowerObservation",
        "title": "Tower Observation",
        "className": "fa-solid fa-tower-observation",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsTreeCity",
        "title": "Tree City",
        "className": "fa-solid fa-tree-city",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsVihara",
        "title": "Vihara",
        "className": "fa-solid fa-vihara",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-BuildingsWarehouse",
        "title": "Warehouse",
        "className": "fa-solid fa-warehouse",
        "type":"fa","categories": [
            "buildings"
        ]
    },
    {
        "name": "fa-CampingBinoculars",
        "title": "Binoculars",
        "className": "fa-solid fa-binoculars",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingBottleWater",
        "title": "Bottle Water",
        "className": "fa-solid fa-bottle-water",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingBucket",
        "title": "Bucket",
        "className": "fa-solid fa-bucket",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingCampground",
        "title": "Campground",
        "className": "fa-solid fa-campground",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingCaravan",
        "title": "Caravan",
        "className": "fa-solid fa-caravan",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingCompass",
        "title": "Compass",
        "className": "fa-solid fa-compass",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingFaucet",
        "title": "Faucet",
        "className": "fa-solid fa-faucet",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingFaucetDrip",
        "title": "Faucet Drip",
        "className": "fa-solid fa-faucet-drip",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingFire",
        "title": "Fire",
        "className": "fa-solid fa-fire",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingFireBurner",
        "title": "Fire Burner",
        "className": "fa-solid fa-fire-burner",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingFireFlameCurved",
        "title": "Fire Flame Curved",
        "className": "fa-solid fa-fire-flame-curved",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingFrog",
        "title": "Frog",
        "className": "fa-solid fa-frog",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingKitMedical",
        "title": "Kit Medical",
        "className": "fa-solid fa-kit-medical",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMap",
        "title": "Map",
        "className": "fa-solid fa-map",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMapLocation",
        "title": "Map Location",
        "className": "fa-solid fa-map-location",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMapLocationDot",
        "title": "Map Location Dot",
        "className": "fa-solid fa-map-location-dot",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMattressPillow",
        "title": "Mattress Pillow",
        "className": "fa-solid fa-mattress-pillow",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMosquito",
        "title": "Mosquito",
        "className": "fa-solid fa-mosquito",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMosquitoNet",
        "title": "Mosquito Net",
        "className": "fa-solid fa-mosquito-net",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMountain",
        "title": "Mountain",
        "className": "fa-solid fa-mountain",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingMountainSun",
        "title": "Mountain Sun",
        "className": "fa-solid fa-mountain-sun",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingPeopleRoof",
        "title": "People Roof",
        "className": "fa-solid fa-people-roof",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingPersonHiking",
        "title": "Person Hiking",
        "className": "fa-solid fa-person-hiking",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingPersonShelter",
        "title": "Person Shelter",
        "className": "fa-solid fa-person-shelter",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingRoute",
        "title": "Route",
        "className": "fa-solid fa-route",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingSignsPost",
        "title": "Signs Post",
        "className": "fa-solid fa-signs-post",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTarp",
        "title": "Tarp",
        "className": "fa-solid fa-tarp",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTarpDroplet",
        "title": "Tarp Droplet",
        "className": "fa-solid fa-tarp-droplet",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTent",
        "title": "Tent",
        "className": "fa-solid fa-tent",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTentArrowDownToLine",
        "title": "Tent Arrow Down To Line",
        "className": "fa-solid fa-tent-arrow-down-to-line",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTentArrowLeftRight",
        "title": "Tent Arrow Left Right",
        "className": "fa-solid fa-tent-arrow-left-right",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTentArrowsDown",
        "title": "Tent Arrows Down",
        "className": "fa-solid fa-tent-arrows-down",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTentArrowTurnLeft",
        "title": "Tent Arrow Turn Left",
        "className": "fa-solid fa-tent-arrow-turn-left",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTents",
        "title": "Tents",
        "className": "fa-solid fa-tents",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingToiletPaper",
        "title": "Toilet Paper",
        "className": "fa-solid fa-toilet-paper",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTrailer",
        "title": "Trailer",
        "className": "fa-solid fa-trailer",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CampingTree",
        "title": "Tree",
        "className": "fa-solid fa-tree",
        "type":"fa","categories": [
            "camping"
        ]
    },
    {
        "name": "fa-CharityCircleDollarToSlot",
        "title": "Circle Dollar To Slot",
        "className": "fa-solid fa-circle-dollar-to-slot",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityDollarSign",
        "title": "Dollar Sign",
        "className": "fa-solid fa-dollar-sign",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityDove",
        "title": "Dove",
        "className": "fa-solid fa-dove",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityGift",
        "title": "Gift",
        "className": "fa-solid fa-gift",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityGlobe",
        "title": "Globe",
        "className": "fa-solid fa-globe",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandHoldingDollar",
        "title": "Hand Holding Dollar",
        "className": "fa-solid fa-hand-holding-dollar",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandHoldingDroplet",
        "title": "Hand Holding Droplet",
        "className": "fa-solid fa-hand-holding-droplet",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandHoldingHand",
        "title": "Hand Holding Hand",
        "className": "fa-solid fa-hand-holding-hand",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandHoldingHeart",
        "title": "Hand Holding Heart",
        "className": "fa-solid fa-hand-holding-heart",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandshake",
        "title": "Handshake",
        "className": "fa-solid fa-handshake",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandshakeAngle",
        "title": "Handshake Angle",
        "className": "fa-solid fa-handshake-angle",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandshakeSimple",
        "title": "Handshake Simple",
        "className": "fa-solid fa-handshake-simple",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandsHoldingChild",
        "title": "Hands Holding Child",
        "className": "fa-solid fa-hands-holding-child",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHandsHoldingCircle",
        "title": "Hands Holding Circle",
        "className": "fa-solid fa-hands-holding-circle",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityLeaf",
        "title": "Leaf",
        "className": "fa-solid fa-leaf",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityParachuteBox",
        "title": "Parachute Box",
        "className": "fa-solid fa-parachute-box",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityPiggyBank",
        "title": "Piggy Bank",
        "className": "fa-solid fa-piggy-bank",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharityRibbon",
        "title": "Ribbon",
        "className": "fa-solid fa-ribbon",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-CharitySeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "charity"
        ]
    },
    {
        "name": "fa-ChartsDiagramsBarsProgress",
        "title": "Bars Progress",
        "className": "fa-solid fa-bars-progress",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartArea",
        "title": "Chart Area",
        "className": "fa-solid fa-chart-area",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartBar",
        "title": "Chart Bar",
        "className": "fa-solid fa-chart-bar",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartColumn",
        "title": "Chart Column",
        "className": "fa-solid fa-chart-column",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartGantt",
        "title": "Chart Gantt",
        "className": "fa-solid fa-chart-gantt",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartLine",
        "title": "Chart Line",
        "className": "fa-solid fa-chart-line",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartPie",
        "title": "Chart Pie",
        "className": "fa-solid fa-chart-pie",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsChartSimple",
        "title": "Chart Simple",
        "className": "fa-solid fa-chart-simple",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsCircleHalfStroke",
        "title": "Circle Half Stroke",
        "className": "fa-solid fa-circle-half-stroke",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramNext",
        "title": "Diagram Next",
        "className": "fa-solid fa-diagram-next",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramPredecessor",
        "title": "Diagram Predecessor",
        "className": "fa-solid fa-diagram-predecessor",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramProject",
        "title": "Diagram Project",
        "className": "fa-solid fa-diagram-project",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsDiagramSuccessor",
        "title": "Diagram Successor",
        "className": "fa-solid fa-diagram-successor",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsSquarePollHorizontal",
        "title": "Square Poll Horizontal",
        "className": "fa-solid fa-square-poll-horizontal",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChartsDiagramsSquarePollVertical",
        "title": "Square Poll Vertical",
        "className": "fa-solid fa-square-poll-vertical",
        "type":"fa","categories": [
            "charts+diagrams"
        ]
    },
    {
        "name": "fa-ChildhoodAppleWhole",
        "title": "Apple Whole",
        "className": "fa-solid fa-apple-whole",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodBaby",
        "title": "Baby",
        "className": "fa-solid fa-baby",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodBabyCarriage",
        "title": "Baby Carriage",
        "className": "fa-solid fa-baby-carriage",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodBaseballBatBall",
        "title": "Baseball Bat Ball",
        "className": "fa-solid fa-baseball-bat-ball",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodBath",
        "title": "Bath",
        "className": "fa-solid fa-bath",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodBucket",
        "title": "Bucket",
        "className": "fa-solid fa-bucket",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodCakeCandles",
        "title": "Cake Candles",
        "className": "fa-solid fa-cake-candles",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodChild",
        "title": "Child",
        "className": "fa-solid fa-child",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodChildDress",
        "title": "Child Dress",
        "className": "fa-solid fa-child-dress",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodChildReaching",
        "title": "Child Reaching",
        "className": "fa-solid fa-child-reaching",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodChildren",
        "title": "Children",
        "className": "fa-solid fa-children",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodCookie",
        "title": "Cookie",
        "className": "fa-solid fa-cookie",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodCookieBite",
        "title": "Cookie Bite",
        "className": "fa-solid fa-cookie-bite",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodCubesStacked",
        "title": "Cubes Stacked",
        "className": "fa-solid fa-cubes-stacked",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodGamepad",
        "title": "Gamepad",
        "className": "fa-solid fa-gamepad",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodHandsHoldingChild",
        "title": "Hands Holding Child",
        "className": "fa-solid fa-hands-holding-child",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodIceCream",
        "title": "Ice Cream",
        "className": "fa-solid fa-ice-cream",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodMitten",
        "title": "Mitten",
        "className": "fa-solid fa-mitten",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodPersonBiking",
        "title": "Person Biking",
        "className": "fa-solid fa-person-biking",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodPersonBreastfeeding",
        "title": "Person Breastfeeding",
        "className": "fa-solid fa-person-breastfeeding",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodPuzzlePiece",
        "title": "Puzzle Piece",
        "className": "fa-solid fa-puzzle-piece",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodRobot",
        "title": "Robot",
        "className": "fa-solid fa-robot",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodSchool",
        "title": "School",
        "className": "fa-solid fa-school",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodShapes",
        "title": "Shapes",
        "className": "fa-solid fa-shapes",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ChildhoodSnowman",
        "title": "Snowman",
        "className": "fa-solid fa-snowman",
        "type":"fa","categories": [
            "childhood"
        ]
    },
    {
        "name": "fa-ClothingFashionGlasses",
        "title": "Glasses",
        "className": "fa-solid fa-glasses",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionGraduationCap",
        "title": "Graduation Cap",
        "className": "fa-solid fa-graduation-cap",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionHatCowboy",
        "title": "Hat Cowboy",
        "className": "fa-solid fa-hat-cowboy",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionHatCowboySide",
        "title": "Hat Cowboy Side",
        "className": "fa-solid fa-hat-cowboy-side",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionHatWizard",
        "title": "Hat Wizard",
        "className": "fa-solid fa-hat-wizard",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionMitten",
        "title": "Mitten",
        "className": "fa-solid fa-mitten",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionShirt",
        "title": "Shirt",
        "className": "fa-solid fa-shirt",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionShoePrints",
        "title": "Shoe Prints",
        "className": "fa-solid fa-shoe-prints",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionSocks",
        "title": "Socks",
        "className": "fa-solid fa-socks",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionUserTie",
        "title": "User Tie",
        "className": "fa-solid fa-user-tie",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionVest",
        "title": "Vest",
        "className": "fa-solid fa-vest",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-ClothingFashionVestPatches",
        "title": "Vest Patches",
        "className": "fa-solid fa-vest-patches",
        "type":"fa","categories": [
            "clothing+fashion"
        ]
    },
    {
        "name": "fa-CodingBarcode",
        "title": "Barcode",
        "className": "fa-solid fa-barcode",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBars",
        "title": "Bars",
        "className": "fa-solid fa-bars",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBarsStaggered",
        "title": "Bars Staggered",
        "className": "fa-solid fa-bars-staggered",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBath",
        "title": "Bath",
        "className": "fa-solid fa-bath",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBoxArchive",
        "title": "Box Archive",
        "className": "fa-solid fa-box-archive",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBug",
        "title": "Bug",
        "className": "fa-solid fa-bug",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingBugSlash",
        "title": "Bug Slash",
        "className": "fa-solid fa-bug-slash",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCircleNodes",
        "title": "Circle Nodes",
        "className": "fa-solid fa-circle-nodes",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCode",
        "title": "Code",
        "className": "fa-solid fa-code",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeBranch",
        "title": "Code Branch",
        "className": "fa-solid fa-code-branch",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeCommit",
        "title": "Code Commit",
        "className": "fa-solid fa-code-commit",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeCompare",
        "title": "Code Compare",
        "className": "fa-solid fa-code-compare",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeFork",
        "title": "Code Fork",
        "className": "fa-solid fa-code-fork",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodeMerge",
        "title": "Code Merge",
        "className": "fa-solid fa-code-merge",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCodePullRequest",
        "title": "Code Pull Request",
        "className": "fa-solid fa-code-pull-request",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCube",
        "title": "Cube",
        "className": "fa-solid fa-cube",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingCubes",
        "title": "Cubes",
        "className": "fa-solid fa-cubes",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingDiagramProject",
        "title": "Diagram Project",
        "className": "fa-solid fa-diagram-project",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFile",
        "title": "File",
        "className": "fa-solid fa-file",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFileCode",
        "title": "File Code",
        "className": "fa-solid fa-file-code",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFileLines",
        "title": "File Lines",
        "className": "fa-solid fa-file-lines",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFilter",
        "title": "Filter",
        "className": "fa-solid fa-filter",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFireExtinguisher",
        "title": "Fire Extinguisher",
        "className": "fa-solid fa-fire-extinguisher",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFolder",
        "title": "Folder",
        "className": "fa-solid fa-folder",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFolderOpen",
        "title": "Folder Open",
        "className": "fa-solid fa-folder-open",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingFontAwesome",
        "title": "Font Awesome",
        "className": "fa-solid fa-font-awesome",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingGear",
        "title": "Gear",
        "className": "fa-solid fa-gear",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingGears",
        "title": "Gears",
        "className": "fa-solid fa-gears",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingKeyboard",
        "title": "Keyboard",
        "className": "fa-solid fa-keyboard",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingLaptopCode",
        "title": "Laptop Code",
        "className": "fa-solid fa-laptop-code",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingMicrochip",
        "title": "Microchip",
        "className": "fa-solid fa-microchip",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingMugSaucer",
        "title": "Mug Saucer",
        "className": "fa-solid fa-mug-saucer",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingNetworkWired",
        "title": "Network Wired",
        "className": "fa-solid fa-network-wired",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingNotdef",
        "title": "Notdef",
        "className": "fa-solid fa-notdef",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingQrcode",
        "title": "Qrcode",
        "className": "fa-solid fa-qrcode",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingRectangleXmark",
        "title": "Rectangle Xmark",
        "className": "fa-solid fa-rectangle-xmark",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingShield",
        "title": "Shield",
        "className": "fa-solid fa-shield",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingShieldHalved",
        "title": "Shield Halved",
        "className": "fa-solid fa-shield-halved",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingSitemap",
        "title": "Sitemap",
        "className": "fa-solid fa-sitemap",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingTerminal",
        "title": "Terminal",
        "className": "fa-solid fa-terminal",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingUserSecret",
        "title": "User Secret",
        "className": "fa-solid fa-user-secret",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingWebAwesome",
        "title": "Web Awesome",
        "className": "fa-solid fa-web-awesome",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingWindowMaximize",
        "title": "Window Maximize",
        "className": "fa-solid fa-window-maximize",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingWindowMinimize",
        "title": "Window Minimize",
        "className": "fa-solid fa-window-minimize",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CodingWindowRestore",
        "title": "Window Restore",
        "className": "fa-solid fa-window-restore",
        "type":"fa","categories": [
            "coding"
        ]
    },
    {
        "name": "fa-CommunicationAddressBook",
        "title": "Address Book",
        "className": "fa-solid fa-address-book",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationAddressCard",
        "title": "Address Card",
        "className": "fa-solid fa-address-card",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationAt",
        "title": "At",
        "className": "fa-solid fa-at",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationBlenderPhone",
        "title": "Blender Phone",
        "className": "fa-solid fa-blender-phone",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationBluetoothB",
        "title": "Bluetooth B",
        "className": "fa-solid fa-bluetooth-b",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationBullhorn",
        "title": "Bullhorn",
        "className": "fa-solid fa-bullhorn",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationComment",
        "title": "Comment",
        "className": "fa-solid fa-comment",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentDots",
        "title": "Comment Dots",
        "className": "fa-solid fa-comment-dots",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentMedical",
        "title": "Comment Medical",
        "className": "fa-solid fa-comment-medical",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationComments",
        "title": "Comments",
        "className": "fa-solid fa-comments",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentSlash",
        "title": "Comment Slash",
        "className": "fa-solid fa-comment-slash",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationCommentSms",
        "title": "Comment Sms",
        "className": "fa-solid fa-comment-sms",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationEarListen",
        "title": "Ear Listen",
        "className": "fa-solid fa-ear-listen",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationEnvelope",
        "title": "Envelope",
        "className": "fa-solid fa-envelope",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationEnvelopeCircleCheck",
        "title": "Envelope Circle Check",
        "className": "fa-solid fa-envelope-circle-check",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationEnvelopeOpen",
        "title": "Envelope Open",
        "className": "fa-solid fa-envelope-open",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationFaceFrown",
        "title": "Face Frown",
        "className": "fa-solid fa-face-frown",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationFaceMeh",
        "title": "Face Meh",
        "className": "fa-solid fa-face-meh",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationFaceSmile",
        "title": "Face Smile",
        "className": "fa-solid fa-face-smile",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationFax",
        "title": "Fax",
        "className": "fa-solid fa-fax",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationHandsAslInterpreting",
        "title": "Hands Asl Interpreting",
        "className": "fa-solid fa-hands-asl-interpreting",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationIcons",
        "title": "Icons",
        "className": "fa-solid fa-icons",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationInbox",
        "title": "Inbox",
        "className": "fa-solid fa-inbox",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationLanguage",
        "title": "Language",
        "className": "fa-solid fa-language",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMessage",
        "title": "Message",
        "className": "fa-solid fa-message",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMicrophone",
        "title": "Microphone",
        "className": "fa-solid fa-microphone",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMicrophoneLines",
        "title": "Microphone Lines",
        "className": "fa-solid fa-microphone-lines",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMicrophoneLinesSlash",
        "title": "Microphone Lines Slash",
        "className": "fa-solid fa-microphone-lines-slash",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMicrophoneSlash",
        "title": "Microphone Slash",
        "className": "fa-solid fa-microphone-slash",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMobile",
        "title": "Mobile",
        "className": "fa-solid fa-mobile",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMobileButton",
        "title": "Mobile Button",
        "className": "fa-solid fa-mobile-button",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMobileRetro",
        "title": "Mobile Retro",
        "className": "fa-solid fa-mobile-retro",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMobileScreen",
        "title": "Mobile Screen",
        "className": "fa-solid fa-mobile-screen",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationMobileScreenButton",
        "title": "Mobile Screen Button",
        "className": "fa-solid fa-mobile-screen-button",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPaperPlane",
        "title": "Paper Plane",
        "className": "fa-solid fa-paper-plane",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPhone",
        "title": "Phone",
        "className": "fa-solid fa-phone",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPhoneFlip",
        "title": "Phone Flip",
        "className": "fa-solid fa-phone-flip",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPhoneSlash",
        "title": "Phone Slash",
        "className": "fa-solid fa-phone-slash",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPhoneVolume",
        "title": "Phone Volume",
        "className": "fa-solid fa-phone-volume",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationPoo",
        "title": "Poo",
        "className": "fa-solid fa-poo",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationQuoteLeft",
        "title": "Quote Left",
        "className": "fa-solid fa-quote-left",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationQuoteRight",
        "title": "Quote Right",
        "className": "fa-solid fa-quote-right",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationSquareEnvelope",
        "title": "Square Envelope",
        "className": "fa-solid fa-square-envelope",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationSquarePhone",
        "title": "Square Phone",
        "className": "fa-solid fa-square-phone",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationSquarePhoneFlip",
        "title": "Square Phone Flip",
        "className": "fa-solid fa-square-phone-flip",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationSquareRss",
        "title": "Square Rss",
        "className": "fa-solid fa-square-rss",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationTowerCell",
        "title": "Tower Cell",
        "className": "fa-solid fa-tower-cell",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationTty",
        "title": "Tty",
        "className": "fa-solid fa-tty",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationVideo",
        "title": "Video",
        "className": "fa-solid fa-video",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationVideoSlash",
        "title": "Video Slash",
        "className": "fa-solid fa-video-slash",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationVoicemail",
        "title": "Voicemail",
        "className": "fa-solid fa-voicemail",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-CommunicationWalkieTalkie",
        "title": "Walkie Talkie",
        "className": "fa-solid fa-walkie-talkie",
        "type":"fa","categories": [
            "communication"
        ]
    },
    {
        "name": "fa-ConnectivityBluetooth",
        "title": "Bluetooth",
        "className": "fa-solid fa-bluetooth",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityCircleNodes",
        "title": "Circle Nodes",
        "className": "fa-solid fa-circle-nodes",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityCloud",
        "title": "Cloud",
        "className": "fa-solid fa-cloud",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityCloudArrowDown",
        "title": "Cloud Arrow Down",
        "className": "fa-solid fa-cloud-arrow-down",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityCloudArrowUp",
        "title": "Cloud Arrow Up",
        "className": "fa-solid fa-cloud-arrow-up",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityEthernet",
        "title": "Ethernet",
        "className": "fa-solid fa-ethernet",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityGlobe",
        "title": "Globe",
        "className": "fa-solid fa-globe",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityHouseSignal",
        "title": "House Signal",
        "className": "fa-solid fa-house-signal",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityRss",
        "title": "Rss",
        "className": "fa-solid fa-rss",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivitySatelliteDish",
        "title": "Satellite Dish",
        "className": "fa-solid fa-satellite-dish",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivitySignal",
        "title": "Signal",
        "className": "fa-solid fa-signal",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityTowerBroadcast",
        "title": "Tower Broadcast",
        "className": "fa-solid fa-tower-broadcast",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityTowerCell",
        "title": "Tower Cell",
        "className": "fa-solid fa-tower-cell",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConnectivityWifi",
        "title": "Wifi",
        "className": "fa-solid fa-wifi",
        "type":"fa","categories": [
            "connectivity"
        ]
    },
    {
        "name": "fa-ConstructionArrowUpFromGroundWater",
        "title": "Arrow Up From Ground Water",
        "className": "fa-solid fa-arrow-up-from-ground-water",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionBoreHole",
        "title": "Bore Hole",
        "className": "fa-solid fa-bore-hole",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionBrush",
        "title": "Brush",
        "className": "fa-solid fa-brush",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionBucket",
        "title": "Bucket",
        "className": "fa-solid fa-bucket",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionCompassDrafting",
        "title": "Compass Drafting",
        "className": "fa-solid fa-compass-drafting",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionDumpster",
        "title": "Dumpster",
        "className": "fa-solid fa-dumpster",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionDumpsterFire",
        "title": "Dumpster Fire",
        "className": "fa-solid fa-dumpster-fire",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionHammer",
        "title": "Hammer",
        "className": "fa-solid fa-hammer",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionHelmetSafety",
        "title": "Helmet Safety",
        "className": "fa-solid fa-helmet-safety",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionMound",
        "title": "Mound",
        "className": "fa-solid fa-mound",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionPaintRoller",
        "title": "Paint Roller",
        "className": "fa-solid fa-paint-roller",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionPencil",
        "title": "Pencil",
        "className": "fa-solid fa-pencil",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionPenRuler",
        "title": "Pen Ruler",
        "className": "fa-solid fa-pen-ruler",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionPersonDigging",
        "title": "Person Digging",
        "className": "fa-solid fa-person-digging",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionRuler",
        "title": "Ruler",
        "className": "fa-solid fa-ruler",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionRulerCombined",
        "title": "Ruler Combined",
        "className": "fa-solid fa-ruler-combined",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionRulerHorizontal",
        "title": "Ruler Horizontal",
        "className": "fa-solid fa-ruler-horizontal",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionRulerVertical",
        "title": "Ruler Vertical",
        "className": "fa-solid fa-ruler-vertical",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionScrewdriver",
        "title": "Screwdriver",
        "className": "fa-solid fa-screwdriver",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionScrewdriverWrench",
        "title": "Screwdriver Wrench",
        "className": "fa-solid fa-screwdriver-wrench",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionSheetPlastic",
        "title": "Sheet Plastic",
        "className": "fa-solid fa-sheet-plastic",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionTarp",
        "title": "Tarp",
        "className": "fa-solid fa-tarp",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionTarpDroplet",
        "title": "Tarp Droplet",
        "className": "fa-solid fa-tarp-droplet",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionToiletPortable",
        "title": "Toilet Portable",
        "className": "fa-solid fa-toilet-portable",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionToiletsPortable",
        "title": "Toilets Portable",
        "className": "fa-solid fa-toilets-portable",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionToolbox",
        "title": "Toolbox",
        "className": "fa-solid fa-toolbox",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionTrowel",
        "title": "Trowel",
        "className": "fa-solid fa-trowel",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionTrowelBricks",
        "title": "Trowel Bricks",
        "className": "fa-solid fa-trowel-bricks",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionTruckPickup",
        "title": "Truck Pickup",
        "className": "fa-solid fa-truck-pickup",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-ConstructionWrench",
        "title": "Wrench",
        "className": "fa-solid fa-wrench",
        "type":"fa","categories": [
            "construction"
        ]
    },
    {
        "name": "fa-DesignBezierCurve",
        "title": "Bezier Curve",
        "className": "fa-solid fa-bezier-curve",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignBrush",
        "title": "Brush",
        "className": "fa-solid fa-brush",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCircleHalfStroke",
        "title": "Circle Half Stroke",
        "className": "fa-solid fa-circle-half-stroke",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCircleNodes",
        "title": "Circle Nodes",
        "className": "fa-solid fa-circle-nodes",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignClone",
        "title": "Clone",
        "className": "fa-solid fa-clone",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCompassDrafting",
        "title": "Compass Drafting",
        "className": "fa-solid fa-compass-drafting",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCopy",
        "title": "Copy",
        "className": "fa-solid fa-copy",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCrop",
        "title": "Crop",
        "className": "fa-solid fa-crop",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCropSimple",
        "title": "Crop Simple",
        "className": "fa-solid fa-crop-simple",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCrosshairs",
        "title": "Crosshairs",
        "className": "fa-solid fa-crosshairs",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCube",
        "title": "Cube",
        "className": "fa-solid fa-cube",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignCubes",
        "title": "Cubes",
        "className": "fa-solid fa-cubes",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignDrawPolygon",
        "title": "Draw Polygon",
        "className": "fa-solid fa-draw-polygon",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignDroplet",
        "title": "Droplet",
        "className": "fa-solid fa-droplet",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignDropletSlash",
        "title": "Droplet Slash",
        "className": "fa-solid fa-droplet-slash",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignEraser",
        "title": "Eraser",
        "className": "fa-solid fa-eraser",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignEyeDropper",
        "title": "Eye Dropper",
        "className": "fa-solid fa-eye-dropper",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignEyeSlash",
        "title": "Eye Slash",
        "className": "fa-solid fa-eye-slash",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignFill",
        "title": "Fill",
        "className": "fa-solid fa-fill",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignFillDrip",
        "title": "Fill Drip",
        "className": "fa-solid fa-fill-drip",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignFloppyDisk",
        "title": "Floppy Disk",
        "className": "fa-solid fa-floppy-disk",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignFontAwesome",
        "title": "Font Awesome",
        "className": "fa-solid fa-font-awesome",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignHighlighter",
        "title": "Highlighter",
        "className": "fa-solid fa-highlighter",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignIcons",
        "title": "Icons",
        "className": "fa-solid fa-icons",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignLayerGroup",
        "title": "Layer Group",
        "className": "fa-solid fa-layer-group",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignLinesLeaning",
        "title": "Lines Leaning",
        "className": "fa-solid fa-lines-leaning",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignMarker",
        "title": "Marker",
        "className": "fa-solid fa-marker",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignObjectGroup",
        "title": "Object Group",
        "className": "fa-solid fa-object-group",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignObjectUngroup",
        "title": "Object Ungroup",
        "className": "fa-solid fa-object-ungroup",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPaintbrush",
        "title": "Paintbrush",
        "className": "fa-solid fa-paintbrush",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPaintRoller",
        "title": "Paint Roller",
        "className": "fa-solid fa-paint-roller",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPalette",
        "title": "Palette",
        "className": "fa-solid fa-palette",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPaste",
        "title": "Paste",
        "className": "fa-solid fa-paste",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPen",
        "title": "Pen",
        "className": "fa-solid fa-pen",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPencil",
        "title": "Pencil",
        "className": "fa-solid fa-pencil",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPenClip",
        "title": "Pen Clip",
        "className": "fa-solid fa-pen-clip",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPenFancy",
        "title": "Pen Fancy",
        "className": "fa-solid fa-pen-fancy",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPenNib",
        "title": "Pen Nib",
        "className": "fa-solid fa-pen-nib",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPenRuler",
        "title": "Pen Ruler",
        "className": "fa-solid fa-pen-ruler",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignPenToSquare",
        "title": "Pen To Square",
        "className": "fa-solid fa-pen-to-square",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignRulerCombined",
        "title": "Ruler Combined",
        "className": "fa-solid fa-ruler-combined",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignRulerHorizontal",
        "title": "Ruler Horizontal",
        "className": "fa-solid fa-ruler-horizontal",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignRulerVertical",
        "title": "Ruler Vertical",
        "className": "fa-solid fa-ruler-vertical",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignScissors",
        "title": "Scissors",
        "className": "fa-solid fa-scissors",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignSplotch",
        "title": "Splotch",
        "className": "fa-solid fa-splotch",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignSprayCan",
        "title": "Spray Can",
        "className": "fa-solid fa-spray-can",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignStamp",
        "title": "Stamp",
        "className": "fa-solid fa-stamp",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignStapler",
        "title": "Stapler",
        "className": "fa-solid fa-stapler",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignSwatchbook",
        "title": "Swatchbook",
        "className": "fa-solid fa-swatchbook",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignVectorSquare",
        "title": "Vector Square",
        "className": "fa-solid fa-vector-square",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignWandMagic",
        "title": "Wand Magic",
        "className": "fa-solid fa-wand-magic",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignWandMagicSparkles",
        "title": "Wand Magic Sparkles",
        "className": "fa-solid fa-wand-magic-sparkles",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DesignWebAwesome",
        "title": "Web Awesome",
        "className": "fa-solid fa-web-awesome",
        "type":"fa","categories": [
            "design"
        ]
    },
    {
        "name": "fa-DevicesHardwareBlenderPhone",
        "title": "Blender Phone",
        "className": "fa-solid fa-blender-phone",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareCamera",
        "title": "Camera",
        "className": "fa-solid fa-camera",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareCameraRetro",
        "title": "Camera Retro",
        "className": "fa-solid fa-camera-retro",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareCarBattery",
        "title": "Car Battery",
        "className": "fa-solid fa-car-battery",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareCompactDisc",
        "title": "Compact Disc",
        "className": "fa-solid fa-compact-disc",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareComputer",
        "title": "Computer",
        "className": "fa-solid fa-computer",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareComputerMouse",
        "title": "Computer Mouse",
        "className": "fa-solid fa-computer-mouse",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDatabase",
        "title": "Database",
        "className": "fa-solid fa-database",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDesktop",
        "title": "Desktop",
        "className": "fa-solid fa-desktop",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDisplay",
        "title": "Display",
        "className": "fa-solid fa-display",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareDownload",
        "title": "Download",
        "className": "fa-solid fa-download",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareEthernet",
        "title": "Ethernet",
        "className": "fa-solid fa-ethernet",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareFax",
        "title": "Fax",
        "className": "fa-solid fa-fax",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareFloppyDisk",
        "title": "Floppy Disk",
        "className": "fa-solid fa-floppy-disk",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareGamepad",
        "title": "Gamepad",
        "className": "fa-solid fa-gamepad",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareHardDrive",
        "title": "Hard Drive",
        "className": "fa-solid fa-hard-drive",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareHeadphones",
        "title": "Headphones",
        "className": "fa-solid fa-headphones",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareHouseLaptop",
        "title": "House Laptop",
        "className": "fa-solid fa-house-laptop",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareKeyboard",
        "title": "Keyboard",
        "className": "fa-solid fa-keyboard",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareLaptop",
        "title": "Laptop",
        "className": "fa-solid fa-laptop",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareLaptopFile",
        "title": "Laptop File",
        "className": "fa-solid fa-laptop-file",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMemory",
        "title": "Memory",
        "className": "fa-solid fa-memory",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMicrochip",
        "title": "Microchip",
        "className": "fa-solid fa-microchip",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMobile",
        "title": "Mobile",
        "className": "fa-solid fa-mobile",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMobileButton",
        "title": "Mobile Button",
        "className": "fa-solid fa-mobile-button",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMobileRetro",
        "title": "Mobile Retro",
        "className": "fa-solid fa-mobile-retro",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMobileScreen",
        "title": "Mobile Screen",
        "className": "fa-solid fa-mobile-screen",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareMobileScreenButton",
        "title": "Mobile Screen Button",
        "className": "fa-solid fa-mobile-screen-button",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwarePlug",
        "title": "Plug",
        "className": "fa-solid fa-plug",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwarePowerOff",
        "title": "Power Off",
        "className": "fa-solid fa-power-off",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwarePrint",
        "title": "Print",
        "className": "fa-solid fa-print",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareSatellite",
        "title": "Satellite",
        "className": "fa-solid fa-satellite",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareSatelliteDish",
        "title": "Satellite Dish",
        "className": "fa-solid fa-satellite-dish",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareSdCard",
        "title": "Sd Card",
        "className": "fa-solid fa-sd-card",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareServer",
        "title": "Server",
        "className": "fa-solid fa-server",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareSimCard",
        "title": "Sim Card",
        "className": "fa-solid fa-sim-card",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTablet",
        "title": "Tablet",
        "className": "fa-solid fa-tablet",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTabletButton",
        "title": "Tablet Button",
        "className": "fa-solid fa-tablet-button",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTabletScreenButton",
        "title": "Tablet Screen Button",
        "className": "fa-solid fa-tablet-screen-button",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTachographDigital",
        "title": "Tachograph Digital",
        "className": "fa-solid fa-tachograph-digital",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareTv",
        "title": "Tv",
        "className": "fa-solid fa-tv",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareUpload",
        "title": "Upload",
        "className": "fa-solid fa-upload",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DevicesHardwareWalkieTalkie",
        "title": "Walkie Talkie",
        "className": "fa-solid fa-walkie-talkie",
        "type":"fa","categories": [
            "devices+hardware"
        ]
    },
    {
        "name": "fa-DisasterCrisisBiohazard",
        "title": "Biohazard",
        "className": "fa-solid fa-biohazard",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisBugs",
        "title": "Bugs",
        "className": "fa-solid fa-bugs",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisBurst",
        "title": "Burst",
        "className": "fa-solid fa-burst",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisChildCombatant",
        "title": "Child Combatant",
        "className": "fa-solid fa-child-combatant",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisCircleRadiation",
        "title": "Circle Radiation",
        "className": "fa-solid fa-circle-radiation",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisCloudBolt",
        "title": "Cloud Bolt",
        "className": "fa-solid fa-cloud-bolt",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisCloudShowersHeavy",
        "title": "Cloud Showers Heavy",
        "className": "fa-solid fa-cloud-showers-heavy",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisCloudShowersWater",
        "title": "Cloud Showers Water",
        "className": "fa-solid fa-cloud-showers-water",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHelmetUn",
        "title": "Helmet Un",
        "className": "fa-solid fa-helmet-un",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHillAvalanche",
        "title": "Hill Avalanche",
        "className": "fa-solid fa-hill-avalanche",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHillRockslide",
        "title": "Hill Rockslide",
        "className": "fa-solid fa-hill-rockslide",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseChimneyCrack",
        "title": "House Chimney Crack",
        "className": "fa-solid fa-house-chimney-crack",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseCrack",
        "title": "House Crack",
        "className": "fa-solid fa-house-crack",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseFire",
        "title": "House Fire",
        "className": "fa-solid fa-house-fire",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseFloodWater",
        "title": "House Flood Water",
        "className": "fa-solid fa-house-flood-water",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseFloodWaterCircleArrowRight",
        "title": "House Flood Water Circle Arrow Right",
        "className": "fa-solid fa-house-flood-water-circle-arrow-right",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHouseTsunami",
        "title": "House Tsunami",
        "className": "fa-solid fa-house-tsunami",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisHurricane",
        "title": "Hurricane",
        "className": "fa-solid fa-hurricane",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisLocust",
        "title": "Locust",
        "className": "fa-solid fa-locust",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisMosquito",
        "title": "Mosquito",
        "className": "fa-solid fa-mosquito",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonDrowning",
        "title": "Person Drowning",
        "className": "fa-solid fa-person-drowning",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonRifle",
        "title": "Person Rifle",
        "className": "fa-solid fa-person-rifle",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonWalkingArrowLoopLeft",
        "title": "Person Walking Arrow Loop Left",
        "className": "fa-solid fa-person-walking-arrow-loop-left",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonWalkingArrowRight",
        "title": "Person Walking Arrow Right",
        "className": "fa-solid fa-person-walking-arrow-right",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisPersonWalkingDashedLineArrowRight",
        "title": "Person Walking Dashed Line Arrow Right",
        "className": "fa-solid fa-person-walking-dashed-line-arrow-right",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisPlantWilt",
        "title": "Plant Wilt",
        "className": "fa-solid fa-plant-wilt",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisSnowflake",
        "title": "Snowflake",
        "className": "fa-solid fa-snowflake",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisSunPlantWilt",
        "title": "Sun Plant Wilt",
        "className": "fa-solid fa-sun-plant-wilt",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisTemperatureArrowDown",
        "title": "Temperature Arrow Down",
        "className": "fa-solid fa-temperature-arrow-down",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisTemperatureArrowUp",
        "title": "Temperature Arrow Up",
        "className": "fa-solid fa-temperature-arrow-up",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisTornado",
        "title": "Tornado",
        "className": "fa-solid fa-tornado",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisVolcano",
        "title": "Volcano",
        "className": "fa-solid fa-volcano",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisWheatAwnCircleExclamation",
        "title": "Wheat Awn Circle Exclamation",
        "className": "fa-solid fa-wheat-awn-circle-exclamation",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisWind",
        "title": "Wind",
        "className": "fa-solid fa-wind",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisWorm",
        "title": "Worm",
        "className": "fa-solid fa-worm",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-DisasterCrisisXmarksLines",
        "title": "Xmarks Lines",
        "className": "fa-solid fa-xmarks-lines",
        "type":"fa","categories": [
            "disaster+crisis"
        ]
    },
    {
        "name": "fa-EditingArrowsRotate",
        "title": "Arrows Rotate",
        "className": "fa-solid fa-arrows-rotate",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingBandage",
        "title": "Bandage",
        "className": "fa-solid fa-bandage",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingBars",
        "title": "Bars",
        "className": "fa-solid fa-bars",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingBrush",
        "title": "Brush",
        "className": "fa-solid fa-brush",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingChartSimple",
        "title": "Chart Simple",
        "className": "fa-solid fa-chart-simple",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCheck",
        "title": "Check",
        "className": "fa-solid fa-check",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCheckDouble",
        "title": "Check Double",
        "className": "fa-solid fa-check-double",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCircleCheck",
        "title": "Circle Check",
        "className": "fa-solid fa-circle-check",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCircleHalfStroke",
        "title": "Circle Half Stroke",
        "className": "fa-solid fa-circle-half-stroke",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCrop",
        "title": "Crop",
        "className": "fa-solid fa-crop",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCropSimple",
        "title": "Crop Simple",
        "className": "fa-solid fa-crop-simple",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingCube",
        "title": "Cube",
        "className": "fa-solid fa-cube",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingDeleteLeft",
        "title": "Delete Left",
        "className": "fa-solid fa-delete-left",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingEllipsis",
        "title": "Ellipsis",
        "className": "fa-solid fa-ellipsis",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingEllipsisVertical",
        "title": "Ellipsis Vertical",
        "className": "fa-solid fa-ellipsis-vertical",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingEyeDropper",
        "title": "Eye Dropper",
        "className": "fa-solid fa-eye-dropper",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingEyeSlash",
        "title": "Eye Slash",
        "className": "fa-solid fa-eye-slash",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGear",
        "title": "Gear",
        "className": "fa-solid fa-gear",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGrip",
        "title": "Grip",
        "className": "fa-solid fa-grip",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGripLines",
        "title": "Grip Lines",
        "className": "fa-solid fa-grip-lines",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGripLinesVertical",
        "title": "Grip Lines Vertical",
        "className": "fa-solid fa-grip-lines-vertical",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingGripVertical",
        "title": "Grip Vertical",
        "className": "fa-solid fa-grip-vertical",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingLink",
        "title": "Link",
        "className": "fa-solid fa-link",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingLinkSlash",
        "title": "Link Slash",
        "className": "fa-solid fa-link-slash",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingMinus",
        "title": "Minus",
        "className": "fa-solid fa-minus",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPaintbrush",
        "title": "Paintbrush",
        "className": "fa-solid fa-paintbrush",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPen",
        "title": "Pen",
        "className": "fa-solid fa-pen",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPencil",
        "title": "Pencil",
        "className": "fa-solid fa-pencil",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPenClip",
        "title": "Pen Clip",
        "className": "fa-solid fa-pen-clip",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPenFancy",
        "title": "Pen Fancy",
        "className": "fa-solid fa-pen-fancy",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPenNib",
        "title": "Pen Nib",
        "className": "fa-solid fa-pen-nib",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPenRuler",
        "title": "Pen Ruler",
        "className": "fa-solid fa-pen-ruler",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPenToSquare",
        "title": "Pen To Square",
        "className": "fa-solid fa-pen-to-square",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingPlus",
        "title": "Plus",
        "className": "fa-solid fa-plus",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingRotate",
        "title": "Rotate",
        "className": "fa-solid fa-rotate",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingScissors",
        "title": "Scissors",
        "className": "fa-solid fa-scissors",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingSignature",
        "title": "Signature",
        "className": "fa-solid fa-signature",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingSliders",
        "title": "Sliders",
        "className": "fa-solid fa-sliders",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingSquareCheck",
        "title": "Square Check",
        "className": "fa-solid fa-square-check",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingSquarePen",
        "title": "Square Pen",
        "className": "fa-solid fa-square-pen",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingTrash",
        "title": "Trash",
        "className": "fa-solid fa-trash",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingTrashArrowUp",
        "title": "Trash Arrow Up",
        "className": "fa-solid fa-trash-arrow-up",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingTrashCan",
        "title": "Trash Can",
        "className": "fa-solid fa-trash-can",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingTrashCanArrowUp",
        "title": "Trash Can Arrow Up",
        "className": "fa-solid fa-trash-can-arrow-up",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingWandMagic",
        "title": "Wand Magic",
        "className": "fa-solid fa-wand-magic",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingWandMagicSparkles",
        "title": "Wand Magic Sparkles",
        "className": "fa-solid fa-wand-magic-sparkles",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EditingXmark",
        "title": "Xmark",
        "className": "fa-solid fa-xmark",
        "type":"fa","categories": [
            "editing"
        ]
    },
    {
        "name": "fa-EducationAppleWhole",
        "title": "Apple Whole",
        "className": "fa-solid fa-apple-whole",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationAtom",
        "title": "Atom",
        "className": "fa-solid fa-atom",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationAward",
        "title": "Award",
        "className": "fa-solid fa-award",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationBellSlash",
        "title": "Bell Slash",
        "className": "fa-solid fa-bell-slash",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationBookOpen",
        "title": "Book Open",
        "className": "fa-solid fa-book-open",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationBookOpenReader",
        "title": "Book Open Reader",
        "className": "fa-solid fa-book-open-reader",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationChalkboard",
        "title": "Chalkboard",
        "className": "fa-solid fa-chalkboard",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationChalkboardUser",
        "title": "Chalkboard User",
        "className": "fa-solid fa-chalkboard-user",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationGraduationCap",
        "title": "Graduation Cap",
        "className": "fa-solid fa-graduation-cap",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationLaptopCode",
        "title": "Laptop Code",
        "className": "fa-solid fa-laptop-code",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationLaptopFile",
        "title": "Laptop File",
        "className": "fa-solid fa-laptop-file",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationMasksTheater",
        "title": "Masks Theater",
        "className": "fa-solid fa-masks-theater",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationMicroscope",
        "title": "Microscope",
        "className": "fa-solid fa-microscope",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationMusic",
        "title": "Music",
        "className": "fa-solid fa-music",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationPersonChalkboard",
        "title": "Person Chalkboard",
        "className": "fa-solid fa-person-chalkboard",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationSchool",
        "title": "School",
        "className": "fa-solid fa-school",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationSchoolCircleCheck",
        "title": "School Circle Check",
        "className": "fa-solid fa-school-circle-check",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationSchoolCircleExclamation",
        "title": "School Circle Exclamation",
        "className": "fa-solid fa-school-circle-exclamation",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationSchoolCircleXmark",
        "title": "School Circle Xmark",
        "className": "fa-solid fa-school-circle-xmark",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationSchoolFlag",
        "title": "School Flag",
        "className": "fa-solid fa-school-flag",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationSchoolLock",
        "title": "School Lock",
        "className": "fa-solid fa-school-lock",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationShapes",
        "title": "Shapes",
        "className": "fa-solid fa-shapes",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EducationUserGraduate",
        "title": "User Graduate",
        "className": "fa-solid fa-user-graduate",
        "type":"fa","categories": [
            "education"
        ]
    },
    {
        "name": "fa-EmojiFaceAngry",
        "title": "Face Angry",
        "className": "fa-solid fa-face-angry",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceDizzy",
        "title": "Face Dizzy",
        "className": "fa-solid fa-face-dizzy",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceFlushed",
        "title": "Face Flushed",
        "className": "fa-solid fa-face-flushed",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceFrown",
        "title": "Face Frown",
        "className": "fa-solid fa-face-frown",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceFrownOpen",
        "title": "Face Frown Open",
        "className": "fa-solid fa-face-frown-open",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrimace",
        "title": "Face Grimace",
        "className": "fa-solid fa-face-grimace",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrin",
        "title": "Face Grin",
        "className": "fa-solid fa-face-grin",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinBeam",
        "title": "Face Grin Beam",
        "className": "fa-solid fa-face-grin-beam",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinBeamSweat",
        "title": "Face Grin Beam Sweat",
        "className": "fa-solid fa-face-grin-beam-sweat",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinHearts",
        "title": "Face Grin Hearts",
        "className": "fa-solid fa-face-grin-hearts",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinSquint",
        "title": "Face Grin Squint",
        "className": "fa-solid fa-face-grin-squint",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinSquintTears",
        "title": "Face Grin Squint Tears",
        "className": "fa-solid fa-face-grin-squint-tears",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinStars",
        "title": "Face Grin Stars",
        "className": "fa-solid fa-face-grin-stars",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTears",
        "title": "Face Grin Tears",
        "className": "fa-solid fa-face-grin-tears",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTongue",
        "title": "Face Grin Tongue",
        "className": "fa-solid fa-face-grin-tongue",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTongueSquint",
        "title": "Face Grin Tongue Squint",
        "className": "fa-solid fa-face-grin-tongue-squint",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinTongueWink",
        "title": "Face Grin Tongue Wink",
        "className": "fa-solid fa-face-grin-tongue-wink",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinWide",
        "title": "Face Grin Wide",
        "className": "fa-solid fa-face-grin-wide",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceGrinWink",
        "title": "Face Grin Wink",
        "className": "fa-solid fa-face-grin-wink",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceKiss",
        "title": "Face Kiss",
        "className": "fa-solid fa-face-kiss",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceKissBeam",
        "title": "Face Kiss Beam",
        "className": "fa-solid fa-face-kiss-beam",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceKissWinkHeart",
        "title": "Face Kiss Wink Heart",
        "className": "fa-solid fa-face-kiss-wink-heart",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaugh",
        "title": "Face Laugh",
        "className": "fa-solid fa-face-laugh",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaughBeam",
        "title": "Face Laugh Beam",
        "className": "fa-solid fa-face-laugh-beam",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaughSquint",
        "title": "Face Laugh Squint",
        "className": "fa-solid fa-face-laugh-squint",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceLaughWink",
        "title": "Face Laugh Wink",
        "className": "fa-solid fa-face-laugh-wink",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceMeh",
        "title": "Face Meh",
        "className": "fa-solid fa-face-meh",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceMehBlank",
        "title": "Face Meh Blank",
        "className": "fa-solid fa-face-meh-blank",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceRollingEyes",
        "title": "Face Rolling Eyes",
        "className": "fa-solid fa-face-rolling-eyes",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSadCry",
        "title": "Face Sad Cry",
        "className": "fa-solid fa-face-sad-cry",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSadTear",
        "title": "Face Sad Tear",
        "className": "fa-solid fa-face-sad-tear",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSmile",
        "title": "Face Smile",
        "className": "fa-solid fa-face-smile",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSmileBeam",
        "title": "Face Smile Beam",
        "className": "fa-solid fa-face-smile-beam",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSmileWink",
        "title": "Face Smile Wink",
        "className": "fa-solid fa-face-smile-wink",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceSurprise",
        "title": "Face Surprise",
        "className": "fa-solid fa-face-surprise",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EmojiFaceTired",
        "title": "Face Tired",
        "className": "fa-solid fa-face-tired",
        "type":"fa","categories": [
            "emoji"
        ]
    },
    {
        "name": "fa-EnergyArrowUpFromGroundWater",
        "title": "Arrow Up From Ground Water",
        "className": "fa-solid fa-arrow-up-from-ground-water",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyAtom",
        "title": "Atom",
        "className": "fa-solid fa-atom",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryEmpty",
        "title": "Battery Empty",
        "className": "fa-solid fa-battery-empty",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryFull",
        "title": "Battery Full",
        "className": "fa-solid fa-battery-full",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryHalf",
        "title": "Battery Half",
        "className": "fa-solid fa-battery-half",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryQuarter",
        "title": "Battery Quarter",
        "className": "fa-solid fa-battery-quarter",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBatteryThreeQuarters",
        "title": "Battery Three Quarters",
        "className": "fa-solid fa-battery-three-quarters",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyBolt",
        "title": "Bolt",
        "className": "fa-solid fa-bolt",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyCarBattery",
        "title": "Car Battery",
        "className": "fa-solid fa-car-battery",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyChargingStation",
        "title": "Charging Station",
        "className": "fa-solid fa-charging-station",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyCircleRadiation",
        "title": "Circle Radiation",
        "className": "fa-solid fa-circle-radiation",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyExplosion",
        "title": "Explosion",
        "className": "fa-solid fa-explosion",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyFan",
        "title": "Fan",
        "className": "fa-solid fa-fan",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyFire",
        "title": "Fire",
        "className": "fa-solid fa-fire",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyFireFlameCurved",
        "title": "Fire Flame Curved",
        "className": "fa-solid fa-fire-flame-curved",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyFireFlameSimple",
        "title": "Fire Flame Simple",
        "className": "fa-solid fa-fire-flame-simple",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyGasPump",
        "title": "Gas Pump",
        "className": "fa-solid fa-gas-pump",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyIndustry",
        "title": "Industry",
        "className": "fa-solid fa-industry",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyLeaf",
        "title": "Leaf",
        "className": "fa-solid fa-leaf",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyLightbulb",
        "title": "Lightbulb",
        "className": "fa-solid fa-lightbulb",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyOilWell",
        "title": "Oil Well",
        "className": "fa-solid fa-oil-well",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlug",
        "title": "Plug",
        "className": "fa-solid fa-plug",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleBolt",
        "title": "Plug Circle Bolt",
        "className": "fa-solid fa-plug-circle-bolt",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleCheck",
        "title": "Plug Circle Check",
        "className": "fa-solid fa-plug-circle-check",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleExclamation",
        "title": "Plug Circle Exclamation",
        "className": "fa-solid fa-plug-circle-exclamation",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleMinus",
        "title": "Plug Circle Minus",
        "className": "fa-solid fa-plug-circle-minus",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlugCirclePlus",
        "title": "Plug Circle Plus",
        "className": "fa-solid fa-plug-circle-plus",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPlugCircleXmark",
        "title": "Plug Circle Xmark",
        "className": "fa-solid fa-plug-circle-xmark",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPoop",
        "title": "Poop",
        "className": "fa-solid fa-poop",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyPowerOff",
        "title": "Power Off",
        "className": "fa-solid fa-power-off",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergySeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergySolarPanel",
        "title": "Solar Panel",
        "className": "fa-solid fa-solar-panel",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergySun",
        "title": "Sun",
        "className": "fa-solid fa-sun",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyTowerBroadcast",
        "title": "Tower Broadcast",
        "className": "fa-solid fa-tower-broadcast",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyWater",
        "title": "Water",
        "className": "fa-solid fa-water",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-EnergyWind",
        "title": "Wind",
        "className": "fa-solid fa-wind",
        "type":"fa","categories": [
            "energy"
        ]
    },
    {
        "name": "fa-FilesBoxArchive",
        "title": "Box Archive",
        "className": "fa-solid fa-box-archive",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesClone",
        "title": "Clone",
        "className": "fa-solid fa-clone",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesCopy",
        "title": "Copy",
        "className": "fa-solid fa-copy",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFile",
        "title": "File",
        "className": "fa-solid fa-file",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileArrowDown",
        "title": "File Arrow Down",
        "className": "fa-solid fa-file-arrow-down",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileArrowUp",
        "title": "File Arrow Up",
        "className": "fa-solid fa-file-arrow-up",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileAudio",
        "title": "File Audio",
        "className": "fa-solid fa-file-audio",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleCheck",
        "title": "File Circle Check",
        "className": "fa-solid fa-file-circle-check",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleExclamation",
        "title": "File Circle Exclamation",
        "className": "fa-solid fa-file-circle-exclamation",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleMinus",
        "title": "File Circle Minus",
        "className": "fa-solid fa-file-circle-minus",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCirclePlus",
        "title": "File Circle Plus",
        "className": "fa-solid fa-file-circle-plus",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleQuestion",
        "title": "File Circle Question",
        "className": "fa-solid fa-file-circle-question",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCircleXmark",
        "title": "File Circle Xmark",
        "className": "fa-solid fa-file-circle-xmark",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCode",
        "title": "File Code",
        "className": "fa-solid fa-file-code",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileCsv",
        "title": "File Csv",
        "className": "fa-solid fa-file-csv",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileExcel",
        "title": "File Excel",
        "className": "fa-solid fa-file-excel",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileExport",
        "title": "File Export",
        "className": "fa-solid fa-file-export",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileImage",
        "title": "File Image",
        "className": "fa-solid fa-file-image",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileImport",
        "title": "File Import",
        "className": "fa-solid fa-file-import",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileLines",
        "title": "File Lines",
        "className": "fa-solid fa-file-lines",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFilePdf",
        "title": "File Pdf",
        "className": "fa-solid fa-file-pdf",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFilePen",
        "title": "File Pen",
        "className": "fa-solid fa-file-pen",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFilePowerpoint",
        "title": "File Powerpoint",
        "className": "fa-solid fa-file-powerpoint",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileShield",
        "title": "File Shield",
        "className": "fa-solid fa-file-shield",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileVideo",
        "title": "File Video",
        "className": "fa-solid fa-file-video",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileWord",
        "title": "File Word",
        "className": "fa-solid fa-file-word",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFileZipper",
        "title": "File Zipper",
        "className": "fa-solid fa-file-zipper",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFloppyDisk",
        "title": "Floppy Disk",
        "className": "fa-solid fa-floppy-disk",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFolder",
        "title": "Folder",
        "className": "fa-solid fa-folder",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFolderClosed",
        "title": "Folder Closed",
        "className": "fa-solid fa-folder-closed",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesFolderOpen",
        "title": "Folder Open",
        "className": "fa-solid fa-folder-open",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesNoteSticky",
        "title": "Note Sticky",
        "className": "fa-solid fa-note-sticky",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesPaste",
        "title": "Paste",
        "className": "fa-solid fa-paste",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesPhotoFilm",
        "title": "Photo Film",
        "className": "fa-solid fa-photo-film",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilesScissors",
        "title": "Scissors",
        "className": "fa-solid fa-scissors",
        "type":"fa","categories": [
            "files"
        ]
    },
    {
        "name": "fa-FilmVideoAudioDescription",
        "title": "Audio Description",
        "className": "fa-solid fa-audio-description",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoCircle",
        "title": "Circle",
        "className": "fa-solid fa-circle",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoClapperboard",
        "title": "Clapperboard",
        "className": "fa-solid fa-clapperboard",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoClosedCaptioning",
        "title": "Closed Captioning",
        "className": "fa-solid fa-closed-captioning",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoCompactDisc",
        "title": "Compact Disc",
        "className": "fa-solid fa-compact-disc",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoFileAudio",
        "title": "File Audio",
        "className": "fa-solid fa-file-audio",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoFileVideo",
        "title": "File Video",
        "className": "fa-solid fa-file-video",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoFilm",
        "title": "Film",
        "className": "fa-solid fa-film",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoHeadphones",
        "title": "Headphones",
        "className": "fa-solid fa-headphones",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoMicrophone",
        "title": "Microphone",
        "className": "fa-solid fa-microphone",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoMicrophoneLines",
        "title": "Microphone Lines",
        "className": "fa-solid fa-microphone-lines",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoMicrophoneLinesSlash",
        "title": "Microphone Lines Slash",
        "className": "fa-solid fa-microphone-lines-slash",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoMicrophoneSlash",
        "title": "Microphone Slash",
        "className": "fa-solid fa-microphone-slash",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoPhotoFilm",
        "title": "Photo Film",
        "className": "fa-solid fa-photo-film",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoPodcast",
        "title": "Podcast",
        "className": "fa-solid fa-podcast",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoSquareRss",
        "title": "Square Rss",
        "className": "fa-solid fa-square-rss",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoTicket",
        "title": "Ticket",
        "className": "fa-solid fa-ticket",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoTowerBroadcast",
        "title": "Tower Broadcast",
        "className": "fa-solid fa-tower-broadcast",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoTowerCell",
        "title": "Tower Cell",
        "className": "fa-solid fa-tower-cell",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoTv",
        "title": "Tv",
        "className": "fa-solid fa-tv",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoVideo",
        "title": "Video",
        "className": "fa-solid fa-video",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoVideoSlash",
        "title": "Video Slash",
        "className": "fa-solid fa-video-slash",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FilmVideoYoutube",
        "title": "Youtube",
        "className": "fa-solid fa-youtube",
        "type":"fa","categories": [
            "film+video"
        ]
    },
    {
        "name": "fa-FoodBeverageAppleWhole",
        "title": "Apple Whole",
        "className": "fa-solid fa-apple-whole",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBacon",
        "title": "Bacon",
        "className": "fa-solid fa-bacon",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBeerMugEmpty",
        "title": "Beer Mug Empty",
        "className": "fa-solid fa-beer-mug-empty",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBlender",
        "title": "Blender",
        "className": "fa-solid fa-blender",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBone",
        "title": "Bone",
        "className": "fa-solid fa-bone",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBottleDroplet",
        "title": "Bottle Droplet",
        "className": "fa-solid fa-bottle-droplet",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBottleWater",
        "title": "Bottle Water",
        "className": "fa-solid fa-bottle-water",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBowlFood",
        "title": "Bowl Food",
        "className": "fa-solid fa-bowl-food",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBowlRice",
        "title": "Bowl Rice",
        "className": "fa-solid fa-bowl-rice",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBreadSlice",
        "title": "Bread Slice",
        "className": "fa-solid fa-bread-slice",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageBurger",
        "title": "Burger",
        "className": "fa-solid fa-burger",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCakeCandles",
        "title": "Cake Candles",
        "className": "fa-solid fa-cake-candles",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCandyCane",
        "title": "Candy Cane",
        "className": "fa-solid fa-candy-cane",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCarrot",
        "title": "Carrot",
        "className": "fa-solid fa-carrot",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageChampagneGlasses",
        "title": "Champagne Glasses",
        "className": "fa-solid fa-champagne-glasses",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCheese",
        "title": "Cheese",
        "className": "fa-solid fa-cheese",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCloudMeatball",
        "title": "Cloud Meatball",
        "className": "fa-solid fa-cloud-meatball",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCookie",
        "title": "Cookie",
        "className": "fa-solid fa-cookie",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageCubesStacked",
        "title": "Cubes Stacked",
        "className": "fa-solid fa-cubes-stacked",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageDrumstickBite",
        "title": "Drumstick Bite",
        "className": "fa-solid fa-drumstick-bite",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageEgg",
        "title": "Egg",
        "className": "fa-solid fa-egg",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageFish",
        "title": "Fish",
        "className": "fa-solid fa-fish",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageFishFins",
        "title": "Fish Fins",
        "className": "fa-solid fa-fish-fins",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageFlask",
        "title": "Flask",
        "className": "fa-solid fa-flask",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageGlassWater",
        "title": "Glass Water",
        "className": "fa-solid fa-glass-water",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageGlassWaterDroplet",
        "title": "Glass Water Droplet",
        "className": "fa-solid fa-glass-water-droplet",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageHotdog",
        "title": "Hotdog",
        "className": "fa-solid fa-hotdog",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageIceCream",
        "title": "Ice Cream",
        "className": "fa-solid fa-ice-cream",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageJar",
        "title": "Jar",
        "className": "fa-solid fa-jar",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageJarWheat",
        "title": "Jar Wheat",
        "className": "fa-solid fa-jar-wheat",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageLemon",
        "title": "Lemon",
        "className": "fa-solid fa-lemon",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMartiniGlass",
        "title": "Martini Glass",
        "className": "fa-solid fa-martini-glass",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMartiniGlassCitrus",
        "title": "Martini Glass Citrus",
        "className": "fa-solid fa-martini-glass-citrus",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMartiniGlassEmpty",
        "title": "Martini Glass Empty",
        "className": "fa-solid fa-martini-glass-empty",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMugHot",
        "title": "Mug Hot",
        "className": "fa-solid fa-mug-hot",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageMugSaucer",
        "title": "Mug Saucer",
        "className": "fa-solid fa-mug-saucer",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeveragePepperHot",
        "title": "Pepper Hot",
        "className": "fa-solid fa-pepper-hot",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeveragePizzaSlice",
        "title": "Pizza Slice",
        "className": "fa-solid fa-pizza-slice",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeveragePlateWheat",
        "title": "Plate Wheat",
        "className": "fa-solid fa-plate-wheat",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageSeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageShrimp",
        "title": "Shrimp",
        "className": "fa-solid fa-shrimp",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageStroopwafel",
        "title": "Stroopwafel",
        "className": "fa-solid fa-stroopwafel",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWheatAwn",
        "title": "Wheat Awn",
        "className": "fa-solid fa-wheat-awn",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWheatAwnCircleExclamation",
        "title": "Wheat Awn Circle Exclamation",
        "className": "fa-solid fa-wheat-awn-circle-exclamation",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWhiskeyGlass",
        "title": "Whiskey Glass",
        "className": "fa-solid fa-whiskey-glass",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWineBottle",
        "title": "Wine Bottle",
        "className": "fa-solid fa-wine-bottle",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWineGlass",
        "title": "Wine Glass",
        "className": "fa-solid fa-wine-glass",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FoodBeverageWineGlassEmpty",
        "title": "Wine Glass Empty",
        "className": "fa-solid fa-wine-glass-empty",
        "type":"fa","categories": [
            "food+beverage"
        ]
    },
    {
        "name": "fa-FruitsVegetablesAppleWhole",
        "title": "Apple Whole",
        "className": "fa-solid fa-apple-whole",
        "type":"fa","categories": [
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-FruitsVegetablesCarrot",
        "title": "Carrot",
        "className": "fa-solid fa-carrot",
        "type":"fa","categories": [
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-FruitsVegetablesLeaf",
        "title": "Leaf",
        "className": "fa-solid fa-leaf",
        "type":"fa","categories": [
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-FruitsVegetablesLemon",
        "title": "Lemon",
        "className": "fa-solid fa-lemon",
        "type":"fa","categories": [
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-FruitsVegetablesPepperHot",
        "title": "Pepper Hot",
        "className": "fa-solid fa-pepper-hot",
        "type":"fa","categories": [
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-FruitsVegetablesSeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "fruits+vegetables"
        ]
    },
    {
        "name": "fa-GamingBookSkull",
        "title": "Book Skull",
        "className": "fa-solid fa-book-skull",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChess",
        "title": "Chess",
        "className": "fa-solid fa-chess",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessBishop",
        "title": "Chess Bishop",
        "className": "fa-solid fa-chess-bishop",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessBoard",
        "title": "Chess Board",
        "className": "fa-solid fa-chess-board",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessKing",
        "title": "Chess King",
        "className": "fa-solid fa-chess-king",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessKnight",
        "title": "Chess Knight",
        "className": "fa-solid fa-chess-knight",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessPawn",
        "title": "Chess Pawn",
        "className": "fa-solid fa-chess-pawn",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessQueen",
        "title": "Chess Queen",
        "className": "fa-solid fa-chess-queen",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingChessRook",
        "title": "Chess Rook",
        "className": "fa-solid fa-chess-rook",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingCriticalRole",
        "title": "Critical Role",
        "className": "fa-solid fa-critical-role",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDAndD",
        "title": "DAnd D",
        "className": "fa-solid fa-d-and-d",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDAndDBeyond",
        "title": "DAnd DBeyond",
        "className": "fa-solid fa-d-and-d-beyond",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiamond",
        "title": "Diamond",
        "className": "fa-solid fa-diamond",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDice",
        "title": "Dice",
        "className": "fa-solid fa-dice",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceD20",
        "title": "Dice D20",
        "className": "fa-solid fa-dice-d20",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceD6",
        "title": "Dice D6",
        "className": "fa-solid fa-dice-d6",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceFive",
        "title": "Dice Five",
        "className": "fa-solid fa-dice-five",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceFour",
        "title": "Dice Four",
        "className": "fa-solid fa-dice-four",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceOne",
        "title": "Dice One",
        "className": "fa-solid fa-dice-one",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceSix",
        "title": "Dice Six",
        "className": "fa-solid fa-dice-six",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceThree",
        "title": "Dice Three",
        "className": "fa-solid fa-dice-three",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDiceTwo",
        "title": "Dice Two",
        "className": "fa-solid fa-dice-two",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDragon",
        "title": "Dragon",
        "className": "fa-solid fa-dragon",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingDungeon",
        "title": "Dungeon",
        "className": "fa-solid fa-dungeon",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingFantasyFlightGames",
        "title": "Fantasy Flight Games",
        "className": "fa-solid fa-fantasy-flight-games",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingGamepad",
        "title": "Gamepad",
        "className": "fa-solid fa-gamepad",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingGhost",
        "title": "Ghost",
        "className": "fa-solid fa-ghost",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingHandFist",
        "title": "Hand Fist",
        "className": "fa-solid fa-hand-fist",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingHatWizard",
        "title": "Hat Wizard",
        "className": "fa-solid fa-hat-wizard",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingHeadset",
        "title": "Headset",
        "className": "fa-solid fa-headset",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingPlaystation",
        "title": "Playstation",
        "className": "fa-solid fa-playstation",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingPuzzlePiece",
        "title": "Puzzle Piece",
        "className": "fa-solid fa-puzzle-piece",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingRing",
        "title": "Ring",
        "className": "fa-solid fa-ring",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingScroll",
        "title": "Scroll",
        "className": "fa-solid fa-scroll",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingShieldHalved",
        "title": "Shield Halved",
        "className": "fa-solid fa-shield-halved",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingSquareFull",
        "title": "Square Full",
        "className": "fa-solid fa-square-full",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingSquareSteam",
        "title": "Square Steam",
        "className": "fa-solid fa-square-steam",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingSteam",
        "title": "Steam",
        "className": "fa-solid fa-steam",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingSteamSymbol",
        "title": "Steam Symbol",
        "className": "fa-solid fa-steam-symbol",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingTwitch",
        "title": "Twitch",
        "className": "fa-solid fa-twitch",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingVrCardboard",
        "title": "Vr Cardboard",
        "className": "fa-solid fa-vr-cardboard",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingWandSparkles",
        "title": "Wand Sparkles",
        "className": "fa-solid fa-wand-sparkles",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingWizardsOfTheCoast",
        "title": "Wizards Of The Coast",
        "className": "fa-solid fa-wizards-of-the-coast",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GamingXbox",
        "title": "Xbox",
        "className": "fa-solid fa-xbox",
        "type":"fa","categories": [
            "gaming"
        ]
    },
    {
        "name": "fa-GendersGenderless",
        "title": "Genderless",
        "className": "fa-solid fa-genderless",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMars",
        "title": "Mars",
        "className": "fa-solid fa-mars",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsAndVenus",
        "title": "Mars And Venus",
        "className": "fa-solid fa-mars-and-venus",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsDouble",
        "title": "Mars Double",
        "className": "fa-solid fa-mars-double",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsStroke",
        "title": "Mars Stroke",
        "className": "fa-solid fa-mars-stroke",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsStrokeRight",
        "title": "Mars Stroke Right",
        "className": "fa-solid fa-mars-stroke-right",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMarsStrokeUp",
        "title": "Mars Stroke Up",
        "className": "fa-solid fa-mars-stroke-up",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersMercury",
        "title": "Mercury",
        "className": "fa-solid fa-mercury",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersNeuter",
        "title": "Neuter",
        "className": "fa-solid fa-neuter",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersPersonHalfDress",
        "title": "Person Half Dress",
        "className": "fa-solid fa-person-half-dress",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersTransgender",
        "title": "Transgender",
        "className": "fa-solid fa-transgender",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersVenus",
        "title": "Venus",
        "className": "fa-solid fa-venus",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersVenusDouble",
        "title": "Venus Double",
        "className": "fa-solid fa-venus-double",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-GendersVenusMars",
        "title": "Venus Mars",
        "className": "fa-solid fa-venus-mars",
        "type":"fa","categories": [
            "genders"
        ]
    },
    {
        "name": "fa-HalloweenBookSkull",
        "title": "Book Skull",
        "className": "fa-solid fa-book-skull",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenBroom",
        "title": "Broom",
        "className": "fa-solid fa-broom",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenCat",
        "title": "Cat",
        "className": "fa-solid fa-cat",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenCloudMoon",
        "title": "Cloud Moon",
        "className": "fa-solid fa-cloud-moon",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenCrow",
        "title": "Crow",
        "className": "fa-solid fa-crow",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenGhost",
        "title": "Ghost",
        "className": "fa-solid fa-ghost",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenHatWizard",
        "title": "Hat Wizard",
        "className": "fa-solid fa-hat-wizard",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenMask",
        "title": "Mask",
        "className": "fa-solid fa-mask",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenSkull",
        "title": "Skull",
        "className": "fa-solid fa-skull",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenSpider",
        "title": "Spider",
        "className": "fa-solid fa-spider",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenToiletPaper",
        "title": "Toilet Paper",
        "className": "fa-solid fa-toilet-paper",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HalloweenWandSparkles",
        "title": "Wand Sparkles",
        "className": "fa-solid fa-wand-sparkles",
        "type":"fa","categories": [
            "halloween"
        ]
    },
    {
        "name": "fa-HandsHand",
        "title": "Hand",
        "className": "fa-solid fa-hand",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandBackFist",
        "title": "Hand Back Fist",
        "className": "fa-solid fa-hand-back-fist",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandDots",
        "title": "Hand Dots",
        "className": "fa-solid fa-hand-dots",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandFist",
        "title": "Hand Fist",
        "className": "fa-solid fa-hand-fist",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHolding",
        "title": "Hand Holding",
        "className": "fa-solid fa-hand-holding",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHoldingDollar",
        "title": "Hand Holding Dollar",
        "className": "fa-solid fa-hand-holding-dollar",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHoldingDroplet",
        "title": "Hand Holding Droplet",
        "className": "fa-solid fa-hand-holding-droplet",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHoldingHand",
        "title": "Hand Holding Hand",
        "className": "fa-solid fa-hand-holding-hand",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHoldingHeart",
        "title": "Hand Holding Heart",
        "className": "fa-solid fa-hand-holding-heart",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandHoldingMedical",
        "title": "Hand Holding Medical",
        "className": "fa-solid fa-hand-holding-medical",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandLizard",
        "title": "Hand Lizard",
        "className": "fa-solid fa-hand-lizard",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandMiddleFinger",
        "title": "Hand Middle Finger",
        "className": "fa-solid fa-hand-middle-finger",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPeace",
        "title": "Hand Peace",
        "className": "fa-solid fa-hand-peace",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointDown",
        "title": "Hand Point Down",
        "className": "fa-solid fa-hand-point-down",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointer",
        "title": "Hand Pointer",
        "className": "fa-solid fa-hand-pointer",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointLeft",
        "title": "Hand Point Left",
        "className": "fa-solid fa-hand-point-left",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointRight",
        "title": "Hand Point Right",
        "className": "fa-solid fa-hand-point-right",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandPointUp",
        "title": "Hand Point Up",
        "className": "fa-solid fa-hand-point-up",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsBound",
        "title": "Bound",
        "className": "fa-solid fa-hands-bound",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsBubbles",
        "title": "Bubbles",
        "className": "fa-solid fa-hands-bubbles",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandScissors",
        "title": "Hand Scissors",
        "className": "fa-solid fa-hand-scissors",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsClapping",
        "title": "Clapping",
        "className": "fa-solid fa-hands-clapping",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshake",
        "title": "hake",
        "className": "fa-solid fa-handshake",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshakeAngle",
        "title": "hake Angle",
        "className": "fa-solid fa-handshake-angle",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshakeSimple",
        "title": "hake Simple",
        "className": "fa-solid fa-handshake-simple",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshakeSimpleSlash",
        "title": "hake Simple Slash",
        "className": "fa-solid fa-handshake-simple-slash",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandshakeSlash",
        "title": "hake Slash",
        "className": "fa-solid fa-handshake-slash",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsHolding",
        "title": "Holding",
        "className": "fa-solid fa-hands-holding",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsHoldingChild",
        "title": "Holding Child",
        "className": "fa-solid fa-hands-holding-child",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsHoldingCircle",
        "title": "Holding Circle",
        "className": "fa-solid fa-hands-holding-circle",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandSparkles",
        "title": "Hand Sparkles",
        "className": "fa-solid fa-hand-sparkles",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandSpock",
        "title": "Hand Spock",
        "className": "fa-solid fa-hand-spock",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsHandsPraying",
        "title": "Praying",
        "className": "fa-solid fa-hands-praying",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsThumbsDown",
        "title": "Thumbs Down",
        "className": "fa-solid fa-thumbs-down",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HandsThumbsUp",
        "title": "Thumbs Up",
        "className": "fa-solid fa-thumbs-up",
        "type":"fa","categories": [
            "hands"
        ]
    },
    {
        "name": "fa-HolidaysCandyCane",
        "title": "Candy Cane",
        "className": "fa-solid fa-candy-cane",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysCarrot",
        "title": "Carrot",
        "className": "fa-solid fa-carrot",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysChampagneGlasses",
        "title": "Champagne Glasses",
        "className": "fa-solid fa-champagne-glasses",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysCookieBite",
        "title": "Cookie Bite",
        "className": "fa-solid fa-cookie-bite",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysFaceGrinHearts",
        "title": "Face Grin Hearts",
        "className": "fa-solid fa-face-grin-hearts",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysFaceKissWinkHeart",
        "title": "Face Kiss Wink Heart",
        "className": "fa-solid fa-face-kiss-wink-heart",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysGift",
        "title": "Gift",
        "className": "fa-solid fa-gift",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysGifts",
        "title": "Gifts",
        "className": "fa-solid fa-gifts",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysHollyBerry",
        "title": "Holly Berry",
        "className": "fa-solid fa-holly-berry",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysMenorah",
        "title": "Menorah",
        "className": "fa-solid fa-menorah",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysMugHot",
        "title": "Mug Hot",
        "className": "fa-solid fa-mug-hot",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysSleigh",
        "title": "Sleigh",
        "className": "fa-solid fa-sleigh",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HolidaysSnowman",
        "title": "Snowman",
        "className": "fa-solid fa-snowman",
        "type":"fa","categories": [
            "holidays"
        ]
    },
    {
        "name": "fa-HouseholdArrowUpFromWaterPump",
        "title": "Arrow Up From Water Pump",
        "className": "fa-solid fa-arrow-up-from-water-pump",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdBath",
        "title": "Bath",
        "className": "fa-solid fa-bath",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdBed",
        "title": "Bed",
        "className": "fa-solid fa-bed",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdBlender",
        "title": "Blender",
        "className": "fa-solid fa-blender",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdBoxTissue",
        "title": "Box Tissue",
        "className": "fa-solid fa-box-tissue",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdChair",
        "title": "Chair",
        "className": "fa-solid fa-chair",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdComputer",
        "title": "Computer",
        "className": "fa-solid fa-computer",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdCouch",
        "title": "Couch",
        "className": "fa-solid fa-couch",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdDoorClosed",
        "title": "Door Closed",
        "className": "fa-solid fa-door-closed",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdDoorOpen",
        "title": "Door Open",
        "className": "fa-solid fa-door-open",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdDungeon",
        "title": "Dungeon",
        "className": "fa-solid fa-dungeon",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdFan",
        "title": "Fan",
        "className": "fa-solid fa-fan",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdFaucet",
        "title": "Faucet",
        "className": "fa-solid fa-faucet",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdFaucetDrip",
        "title": "Faucet Drip",
        "className": "fa-solid fa-faucet-drip",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdFireBurner",
        "title": "Fire Burner",
        "className": "fa-solid fa-fire-burner",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseChimneyUser",
        "title": "House Chimney User",
        "className": "fa-solid fa-house-chimney-user",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseChimneyWindow",
        "title": "House Chimney Window",
        "className": "fa-solid fa-house-chimney-window",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseFire",
        "title": "House Fire",
        "className": "fa-solid fa-house-fire",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseLaptop",
        "title": "House Laptop",
        "className": "fa-solid fa-house-laptop",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseLock",
        "title": "House Lock",
        "className": "fa-solid fa-house-lock",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseSignal",
        "title": "House Signal",
        "className": "fa-solid fa-house-signal",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdHouseUser",
        "title": "House User",
        "className": "fa-solid fa-house-user",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdJar",
        "title": "Jar",
        "className": "fa-solid fa-jar",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdJarWheat",
        "title": "Jar Wheat",
        "className": "fa-solid fa-jar-wheat",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdJugDetergent",
        "title": "Jug Detergent",
        "className": "fa-solid fa-jug-detergent",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdKitchenSet",
        "title": "Kitchen Set",
        "className": "fa-solid fa-kitchen-set",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdLightbulb",
        "title": "Lightbulb",
        "className": "fa-solid fa-lightbulb",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdMattressPillow",
        "title": "Mattress Pillow",
        "className": "fa-solid fa-mattress-pillow",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdMugSaucer",
        "title": "Mug Saucer",
        "className": "fa-solid fa-mug-saucer",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdPeopleRoof",
        "title": "People Roof",
        "className": "fa-solid fa-people-roof",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdPlug",
        "title": "Plug",
        "className": "fa-solid fa-plug",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdPumpSoap",
        "title": "Pump Soap",
        "className": "fa-solid fa-pump-soap",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdRug",
        "title": "Rug",
        "className": "fa-solid fa-rug",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdSheetPlastic",
        "title": "Sheet Plastic",
        "className": "fa-solid fa-sheet-plastic",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdShower",
        "title": "Shower",
        "className": "fa-solid fa-shower",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdSink",
        "title": "Sink",
        "className": "fa-solid fa-sink",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdSnowflake",
        "title": "Snowflake",
        "className": "fa-solid fa-snowflake",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdSoap",
        "title": "Soap",
        "className": "fa-solid fa-soap",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdSpoon",
        "title": "Spoon",
        "className": "fa-solid fa-spoon",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdStairs",
        "title": "Stairs",
        "className": "fa-solid fa-stairs",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdTemperatureArrowDown",
        "title": "Temperature Arrow Down",
        "className": "fa-solid fa-temperature-arrow-down",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdTemperatureArrowUp",
        "title": "Temperature Arrow Up",
        "className": "fa-solid fa-temperature-arrow-up",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdToilet",
        "title": "Toilet",
        "className": "fa-solid fa-toilet",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdToiletPaper",
        "title": "Toilet Paper",
        "className": "fa-solid fa-toilet-paper",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdToiletPaperSlash",
        "title": "Toilet Paper Slash",
        "className": "fa-solid fa-toilet-paper-slash",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdTv",
        "title": "Tv",
        "className": "fa-solid fa-tv",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HouseholdUtensils",
        "title": "Utensils",
        "className": "fa-solid fa-utensils",
        "type":"fa","categories": [
            "household"
        ]
    },
    {
        "name": "fa-HumanitarianAnchor",
        "title": "Anchor",
        "className": "fa-solid fa-anchor",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianArrowUpRightFromSquare",
        "title": "Arrow Up Right From Square",
        "className": "fa-solid fa-arrow-up-right-from-square",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianBaby",
        "title": "Baby",
        "className": "fa-solid fa-baby",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianBuilding",
        "title": "Building",
        "className": "fa-solid fa-building",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianChurch",
        "title": "Church",
        "className": "fa-solid fa-church",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianDroplet",
        "title": "Droplet",
        "className": "fa-solid fa-droplet",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianEnvelope",
        "title": "Envelope",
        "className": "fa-solid fa-envelope",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianFile",
        "title": "File",
        "className": "fa-solid fa-file",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianFilePdf",
        "title": "File Pdf",
        "className": "fa-solid fa-file-pdf",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianFlag",
        "title": "Flag",
        "className": "fa-solid fa-flag",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianGopuram",
        "title": "Gopuram",
        "className": "fa-solid fa-gopuram",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianHammer",
        "title": "Hammer",
        "className": "fa-solid fa-hammer",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianHeadset",
        "title": "Headset",
        "className": "fa-solid fa-headset",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianHospital",
        "title": "Hospital",
        "className": "fa-solid fa-hospital",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianHotel",
        "title": "Hotel",
        "className": "fa-solid fa-hotel",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianLandmark",
        "title": "Landmark",
        "className": "fa-solid fa-landmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianLaptop",
        "title": "Laptop",
        "className": "fa-solid fa-laptop",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianMountainCity",
        "title": "Mountain City",
        "className": "fa-solid fa-mountain-city",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianMountainSun",
        "title": "Mountain Sun",
        "className": "fa-solid fa-mountain-sun",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianOilWell",
        "title": "Oil Well",
        "className": "fa-solid fa-oil-well",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianParachuteBox",
        "title": "Parachute Box",
        "className": "fa-solid fa-parachute-box",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleArrows",
        "title": "People Arrows",
        "className": "fa-solid fa-people-arrows",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleGroup",
        "title": "People Group",
        "className": "fa-solid fa-people-group",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleLine",
        "title": "People Line",
        "className": "fa-solid fa-people-line",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPeoplePulling",
        "title": "People Pulling",
        "className": "fa-solid fa-people-pulling",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleRobbery",
        "title": "People Robbery",
        "className": "fa-solid fa-people-robbery",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPeopleRoof",
        "title": "People Roof",
        "className": "fa-solid fa-people-roof",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPerson",
        "title": "Person",
        "className": "fa-solid fa-person",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonArrowDownToLine",
        "title": "Person Arrow Down To Line",
        "className": "fa-solid fa-person-arrow-down-to-line",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonArrowUpFromLine",
        "title": "Person Arrow Up From Line",
        "className": "fa-solid fa-person-arrow-up-from-line",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonBreastfeeding",
        "title": "Person Breastfeeding",
        "className": "fa-solid fa-person-breastfeeding",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonBurst",
        "title": "Person Burst",
        "className": "fa-solid fa-person-burst",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCane",
        "title": "Person Cane",
        "className": "fa-solid fa-person-cane",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonChalkboard",
        "title": "Person Chalkboard",
        "className": "fa-solid fa-person-chalkboard",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleCheck",
        "title": "Person Circle Check",
        "className": "fa-solid fa-person-circle-check",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleExclamation",
        "title": "Person Circle Exclamation",
        "className": "fa-solid fa-person-circle-exclamation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleMinus",
        "title": "Person Circle Minus",
        "className": "fa-solid fa-person-circle-minus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCirclePlus",
        "title": "Person Circle Plus",
        "className": "fa-solid fa-person-circle-plus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleQuestion",
        "title": "Person Circle Question",
        "className": "fa-solid fa-person-circle-question",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonCircleXmark",
        "title": "Person Circle Xmark",
        "className": "fa-solid fa-person-circle-xmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonDigging",
        "title": "Person Digging",
        "className": "fa-solid fa-person-digging",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonDress",
        "title": "Person Dress",
        "className": "fa-solid fa-person-dress",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonDressBurst",
        "title": "Person Dress Burst",
        "className": "fa-solid fa-person-dress-burst",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonDrowning",
        "title": "Person Drowning",
        "className": "fa-solid fa-person-drowning",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonFalling",
        "title": "Person Falling",
        "className": "fa-solid fa-person-falling",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonFallingBurst",
        "title": "Person Falling Burst",
        "className": "fa-solid fa-person-falling-burst",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonHalfDress",
        "title": "Person Half Dress",
        "className": "fa-solid fa-person-half-dress",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonHarassing",
        "title": "Person Harassing",
        "className": "fa-solid fa-person-harassing",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonMilitaryPointing",
        "title": "Person Military Pointing",
        "className": "fa-solid fa-person-military-pointing",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonMilitaryRifle",
        "title": "Person Military Rifle",
        "className": "fa-solid fa-person-military-rifle",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonMilitaryToPerson",
        "title": "Person Military To Person",
        "className": "fa-solid fa-person-military-to-person",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonPregnant",
        "title": "Person Pregnant",
        "className": "fa-solid fa-person-pregnant",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonRays",
        "title": "Person Rays",
        "className": "fa-solid fa-person-rays",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonRifle",
        "title": "Person Rifle",
        "className": "fa-solid fa-person-rifle",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonShelter",
        "title": "Person Shelter",
        "className": "fa-solid fa-person-shelter",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonThroughWindow",
        "title": "Person Through Window",
        "className": "fa-solid fa-person-through-window",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalking",
        "title": "Person Walking",
        "className": "fa-solid fa-person-walking",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalkingArrowLoopLeft",
        "title": "Person Walking Arrow Loop Left",
        "className": "fa-solid fa-person-walking-arrow-loop-left",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalkingArrowRight",
        "title": "Person Walking Arrow Right",
        "className": "fa-solid fa-person-walking-arrow-right",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalkingDashedLineArrowRight",
        "title": "Person Walking Dashed Line Arrow Right",
        "className": "fa-solid fa-person-walking-dashed-line-arrow-right",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPersonWalkingLuggage",
        "title": "Person Walking Luggage",
        "className": "fa-solid fa-person-walking-luggage",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPills",
        "title": "Pills",
        "className": "fa-solid fa-pills",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneCircleCheck",
        "title": "Plane Circle Check",
        "className": "fa-solid fa-plane-circle-check",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneCircleExclamation",
        "title": "Plane Circle Exclamation",
        "className": "fa-solid fa-plane-circle-exclamation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneCircleXmark",
        "title": "Plane Circle Xmark",
        "className": "fa-solid fa-plane-circle-xmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneLock",
        "title": "Plane Lock",
        "className": "fa-solid fa-plane-lock",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlaneUp",
        "title": "Plane Up",
        "className": "fa-solid fa-plane-up",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlantWilt",
        "title": "Plant Wilt",
        "className": "fa-solid fa-plant-wilt",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlateWheat",
        "title": "Plate Wheat",
        "className": "fa-solid fa-plate-wheat",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlug",
        "title": "Plug",
        "className": "fa-solid fa-plug",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlugCircleBolt",
        "title": "Plug Circle Bolt",
        "className": "fa-solid fa-plug-circle-bolt",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlugCircleCheck",
        "title": "Plug Circle Check",
        "className": "fa-solid fa-plug-circle-check",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlugCircleExclamation",
        "title": "Plug Circle Exclamation",
        "className": "fa-solid fa-plug-circle-exclamation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlugCircleMinus",
        "title": "Plug Circle Minus",
        "className": "fa-solid fa-plug-circle-minus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlugCirclePlus",
        "title": "Plug Circle Plus",
        "className": "fa-solid fa-plug-circle-plus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPlugCircleXmark",
        "title": "Plug Circle Xmark",
        "className": "fa-solid fa-plug-circle-xmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianPumpSoap",
        "title": "Pump Soap",
        "className": "fa-solid fa-pump-soap",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRadio",
        "title": "Radio",
        "className": "fa-solid fa-radio",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRankingStar",
        "title": "Ranking Star",
        "className": "fa-solid fa-ranking-star",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoad",
        "title": "Road",
        "className": "fa-solid fa-road",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadBarrier",
        "title": "Road Barrier",
        "className": "fa-solid fa-road-barrier",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadBridge",
        "title": "Road Bridge",
        "className": "fa-solid fa-road-bridge",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadCircleCheck",
        "title": "Road Circle Check",
        "className": "fa-solid fa-road-circle-check",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadCircleExclamation",
        "title": "Road Circle Exclamation",
        "className": "fa-solid fa-road-circle-exclamation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadCircleXmark",
        "title": "Road Circle Xmark",
        "className": "fa-solid fa-road-circle-xmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadLock",
        "title": "Road Lock",
        "className": "fa-solid fa-road-lock",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRoadSpikes",
        "title": "Road Spikes",
        "className": "fa-solid fa-road-spikes",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianRug",
        "title": "Rug",
        "className": "fa-solid fa-rug",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSackDollar",
        "title": "Sack Dollar",
        "className": "fa-solid fa-sack-dollar",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSackXmark",
        "title": "Sack Xmark",
        "className": "fa-solid fa-sack-xmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSatelliteDish",
        "title": "Satellite Dish",
        "className": "fa-solid fa-satellite-dish",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianScaleBalanced",
        "title": "Scale Balanced",
        "className": "fa-solid fa-scale-balanced",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSchool",
        "title": "School",
        "className": "fa-solid fa-school",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSchoolCircleCheck",
        "title": "School Circle Check",
        "className": "fa-solid fa-school-circle-check",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSchoolCircleExclamation",
        "title": "School Circle Exclamation",
        "className": "fa-solid fa-school-circle-exclamation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSchoolCircleXmark",
        "title": "School Circle Xmark",
        "className": "fa-solid fa-school-circle-xmark",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSchoolFlag",
        "title": "School Flag",
        "className": "fa-solid fa-school-flag",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSchoolLock",
        "title": "School Lock",
        "className": "fa-solid fa-school-lock",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSheetPlastic",
        "title": "Sheet Plastic",
        "className": "fa-solid fa-sheet-plastic",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShieldCat",
        "title": "Shield Cat",
        "className": "fa-solid fa-shield-cat",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShieldDog",
        "title": "Shield Dog",
        "className": "fa-solid fa-shield-dog",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShieldHeart",
        "title": "Shield Heart",
        "className": "fa-solid fa-shield-heart",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShirt",
        "title": "Shirt",
        "className": "fa-solid fa-shirt",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShop",
        "title": "Shop",
        "className": "fa-solid fa-shop",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShopLock",
        "title": "Shop Lock",
        "className": "fa-solid fa-shop-lock",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianShower",
        "title": "Shower",
        "className": "fa-solid fa-shower",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSnowflake",
        "title": "Snowflake",
        "className": "fa-solid fa-snowflake",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSoap",
        "title": "Soap",
        "className": "fa-solid fa-soap",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSquareNfi",
        "title": "Square Nfi",
        "className": "fa-solid fa-square-nfi",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSquarePersonConfined",
        "title": "Square Person Confined",
        "className": "fa-solid fa-square-person-confined",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSquareVirus",
        "title": "Square Virus",
        "className": "fa-solid fa-square-virus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianStaffSnake",
        "title": "Staff Snake",
        "className": "fa-solid fa-staff-snake",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianStethoscope",
        "title": "Stethoscope",
        "className": "fa-solid fa-stethoscope",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSuitcaseMedical",
        "title": "Suitcase Medical",
        "className": "fa-solid fa-suitcase-medical",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSunPlantWilt",
        "title": "Sun Plant Wilt",
        "className": "fa-solid fa-sun-plant-wilt",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianSyringe",
        "title": "Syringe",
        "className": "fa-solid fa-syringe",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTarp",
        "title": "Tarp",
        "className": "fa-solid fa-tarp",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTarpDroplet",
        "title": "Tarp Droplet",
        "className": "fa-solid fa-tarp-droplet",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTemperatureArrowDown",
        "title": "Temperature Arrow Down",
        "className": "fa-solid fa-temperature-arrow-down",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTemperatureArrowUp",
        "title": "Temperature Arrow Up",
        "className": "fa-solid fa-temperature-arrow-up",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTent",
        "title": "Tent",
        "className": "fa-solid fa-tent",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTentArrowDownToLine",
        "title": "Tent Arrow Down To Line",
        "className": "fa-solid fa-tent-arrow-down-to-line",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTentArrowLeftRight",
        "title": "Tent Arrow Left Right",
        "className": "fa-solid fa-tent-arrow-left-right",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTentArrowsDown",
        "title": "Tent Arrows Down",
        "className": "fa-solid fa-tent-arrows-down",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTentArrowTurnLeft",
        "title": "Tent Arrow Turn Left",
        "className": "fa-solid fa-tent-arrow-turn-left",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTents",
        "title": "Tents",
        "className": "fa-solid fa-tents",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianToilet",
        "title": "Toilet",
        "className": "fa-solid fa-toilet",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianToiletPortable",
        "title": "Toilet Portable",
        "className": "fa-solid fa-toilet-portable",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianToiletsPortable",
        "title": "Toilets Portable",
        "className": "fa-solid fa-toilets-portable",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTornado",
        "title": "Tornado",
        "className": "fa-solid fa-tornado",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTowerBroadcast",
        "title": "Tower Broadcast",
        "className": "fa-solid fa-tower-broadcast",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTowerCell",
        "title": "Tower Cell",
        "className": "fa-solid fa-tower-cell",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTowerObservation",
        "title": "Tower Observation",
        "className": "fa-solid fa-tower-observation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTrainSubway",
        "title": "Train Subway",
        "className": "fa-solid fa-train-subway",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTrashCan",
        "title": "Trash Can",
        "className": "fa-solid fa-trash-can",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTreeCity",
        "title": "Tree City",
        "className": "fa-solid fa-tree-city",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTrowel",
        "title": "Trowel",
        "className": "fa-solid fa-trowel",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTrowelBricks",
        "title": "Trowel Bricks",
        "className": "fa-solid fa-trowel-bricks",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckArrowRight",
        "title": "Truck Arrow Right",
        "className": "fa-solid fa-truck-arrow-right",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckDroplet",
        "title": "Truck Droplet",
        "className": "fa-solid fa-truck-droplet",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckField",
        "title": "Truck Field",
        "className": "fa-solid fa-truck-field",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckFieldUn",
        "title": "Truck Field Un",
        "className": "fa-solid fa-truck-field-un",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckFront",
        "title": "Truck Front",
        "className": "fa-solid fa-truck-front",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianTruckPlane",
        "title": "Truck Plane",
        "className": "fa-solid fa-truck-plane",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUserDoctor",
        "title": "User Doctor",
        "className": "fa-solid fa-user-doctor",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUserInjured",
        "title": "User Injured",
        "className": "fa-solid fa-user-injured",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUsersBetweenLines",
        "title": "Users Between Lines",
        "className": "fa-solid fa-users-between-lines",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUsersLine",
        "title": "Users Line",
        "className": "fa-solid fa-users-line",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUsersRays",
        "title": "Users Rays",
        "className": "fa-solid fa-users-rays",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUsersRectangle",
        "title": "Users Rectangle",
        "className": "fa-solid fa-users-rectangle",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianUsersViewfinder",
        "title": "Users Viewfinder",
        "className": "fa-solid fa-users-viewfinder",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianVialCircleCheck",
        "title": "Vial Circle Check",
        "className": "fa-solid fa-vial-circle-check",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianVialVirus",
        "title": "Vial Virus",
        "className": "fa-solid fa-vial-virus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianVihara",
        "title": "Vihara",
        "className": "fa-solid fa-vihara",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianVirus",
        "title": "Virus",
        "className": "fa-solid fa-virus",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianVirusCovid",
        "title": "Virus Covid",
        "className": "fa-solid fa-virus-covid",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianVolcano",
        "title": "Volcano",
        "className": "fa-solid fa-volcano",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWalkieTalkie",
        "title": "Walkie Talkie",
        "className": "fa-solid fa-walkie-talkie",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWheatAwn",
        "title": "Wheat Awn",
        "className": "fa-solid fa-wheat-awn",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWheatAwnCircleExclamation",
        "title": "Wheat Awn Circle Exclamation",
        "className": "fa-solid fa-wheat-awn-circle-exclamation",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWifi",
        "title": "Wifi",
        "className": "fa-solid fa-wifi",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWind",
        "title": "Wind",
        "className": "fa-solid fa-wind",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianWorm",
        "title": "Worm",
        "className": "fa-solid fa-worm",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-HumanitarianXmarksLines",
        "title": "Xmarks Lines",
        "className": "fa-solid fa-xmarks-lines",
        "type":"fa","categories": [
            "humanitarian"
        ]
    },
    {
        "name": "fa-LogisticsAnchor",
        "title": "Anchor",
        "className": "fa-solid fa-anchor",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsAnchorCircleCheck",
        "title": "Anchor Circle Check",
        "className": "fa-solid fa-anchor-circle-check",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsAnchorCircleExclamation",
        "title": "Anchor Circle Exclamation",
        "className": "fa-solid fa-anchor-circle-exclamation",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsAnchorCircleXmark",
        "title": "Anchor Circle Xmark",
        "className": "fa-solid fa-anchor-circle-xmark",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsAnchorLock",
        "title": "Anchor Lock",
        "className": "fa-solid fa-anchor-lock",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBox",
        "title": "Box",
        "className": "fa-solid fa-box",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBoxesPacking",
        "title": "Boxes Packing",
        "className": "fa-solid fa-boxes-packing",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBoxesStacked",
        "title": "Boxes Stacked",
        "className": "fa-solid fa-boxes-stacked",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridge",
        "title": "Bridge",
        "className": "fa-solid fa-bridge",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeCircleCheck",
        "title": "Bridge Circle Check",
        "className": "fa-solid fa-bridge-circle-check",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeCircleExclamation",
        "title": "Bridge Circle Exclamation",
        "className": "fa-solid fa-bridge-circle-exclamation",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeCircleXmark",
        "title": "Bridge Circle Xmark",
        "className": "fa-solid fa-bridge-circle-xmark",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeLock",
        "title": "Bridge Lock",
        "className": "fa-solid fa-bridge-lock",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBridgeWater",
        "title": "Bridge Water",
        "className": "fa-solid fa-bridge-water",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBus",
        "title": "Bus",
        "className": "fa-solid fa-bus",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsBusSimple",
        "title": "Bus Simple",
        "className": "fa-solid fa-bus-simple",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsCartFlatbed",
        "title": "Cart Flatbed",
        "className": "fa-solid fa-cart-flatbed",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsCarTunnel",
        "title": "Car Tunnel",
        "className": "fa-solid fa-car-tunnel",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsChartSimple",
        "title": "Chart Simple",
        "className": "fa-solid fa-chart-simple",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsClipboardCheck",
        "title": "Clipboard Check",
        "className": "fa-solid fa-clipboard-check",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsClipboardList",
        "title": "Clipboard List",
        "className": "fa-solid fa-clipboard-list",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsClipboardQuestion",
        "title": "Clipboard Question",
        "className": "fa-solid fa-clipboard-question",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsDolly",
        "title": "Dolly",
        "className": "fa-solid fa-dolly",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsFerry",
        "title": "Ferry",
        "className": "fa-solid fa-ferry",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsGasPump",
        "title": "Gas Pump",
        "className": "fa-solid fa-gas-pump",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsGears",
        "title": "Gears",
        "className": "fa-solid fa-gears",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsHelicopter",
        "title": "Helicopter",
        "className": "fa-solid fa-helicopter",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsHelicopterSymbol",
        "title": "Helicopter Symbol",
        "className": "fa-solid fa-helicopter-symbol",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsHelmetSafety",
        "title": "Helmet Safety",
        "className": "fa-solid fa-helmet-safety",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsJetFighterUp",
        "title": "Jet Fighter Up",
        "className": "fa-solid fa-jet-fighter-up",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsPallet",
        "title": "Pallet",
        "className": "fa-solid fa-pallet",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsPlaneCircleCheck",
        "title": "Plane Circle Check",
        "className": "fa-solid fa-plane-circle-check",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsPlaneCircleExclamation",
        "title": "Plane Circle Exclamation",
        "className": "fa-solid fa-plane-circle-exclamation",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsPlaneCircleXmark",
        "title": "Plane Circle Xmark",
        "className": "fa-solid fa-plane-circle-xmark",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsPlaneLock",
        "title": "Plane Lock",
        "className": "fa-solid fa-plane-lock",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoad",
        "title": "Road",
        "className": "fa-solid fa-road",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoadBarrier",
        "title": "Road Barrier",
        "className": "fa-solid fa-road-barrier",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoadBridge",
        "title": "Road Bridge",
        "className": "fa-solid fa-road-bridge",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoadCircleCheck",
        "title": "Road Circle Check",
        "className": "fa-solid fa-road-circle-check",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoadCircleExclamation",
        "title": "Road Circle Exclamation",
        "className": "fa-solid fa-road-circle-exclamation",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoadCircleXmark",
        "title": "Road Circle Xmark",
        "className": "fa-solid fa-road-circle-xmark",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsRoadLock",
        "title": "Road Lock",
        "className": "fa-solid fa-road-lock",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsSquareNfi",
        "title": "Square Nfi",
        "className": "fa-solid fa-square-nfi",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTrain",
        "title": "Train",
        "className": "fa-solid fa-train",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTrainSubway",
        "title": "Train Subway",
        "className": "fa-solid fa-train-subway",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruckArrowRight",
        "title": "Truck Arrow Right",
        "className": "fa-solid fa-truck-arrow-right",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruckFast",
        "title": "Truck Fast",
        "className": "fa-solid fa-truck-fast",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruckField",
        "title": "Truck Field",
        "className": "fa-solid fa-truck-field",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruckFieldUn",
        "title": "Truck Field Un",
        "className": "fa-solid fa-truck-field-un",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruckFront",
        "title": "Truck Front",
        "className": "fa-solid fa-truck-front",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsTruckPlane",
        "title": "Truck Plane",
        "className": "fa-solid fa-truck-plane",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsWarehouse",
        "title": "Warehouse",
        "className": "fa-solid fa-warehouse",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-LogisticsXmarksLines",
        "title": "Xmarks Lines",
        "className": "fa-solid fa-xmarks-lines",
        "type":"fa","categories": [
            "logistics"
        ]
    },
    {
        "name": "fa-MapsAnchor",
        "title": "Anchor",
        "className": "fa-solid fa-anchor",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBagShopping",
        "title": "Bag Shopping",
        "className": "fa-solid fa-bag-shopping",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBasketShopping",
        "title": "Basket Shopping",
        "className": "fa-solid fa-basket-shopping",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBath",
        "title": "Bath",
        "className": "fa-solid fa-bath",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBed",
        "title": "Bed",
        "className": "fa-solid fa-bed",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBeerMugEmpty",
        "title": "Beer Mug Empty",
        "className": "fa-solid fa-beer-mug-empty",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBellSlash",
        "title": "Bell Slash",
        "className": "fa-solid fa-bell-slash",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBicycle",
        "title": "Bicycle",
        "className": "fa-solid fa-bicycle",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBinoculars",
        "title": "Binoculars",
        "className": "fa-solid fa-binoculars",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBomb",
        "title": "Bomb",
        "className": "fa-solid fa-bomb",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBook",
        "title": "Book",
        "className": "fa-solid fa-book",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBookAtlas",
        "title": "Book Atlas",
        "className": "fa-solid fa-book-atlas",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBookmark",
        "title": "Bookmark",
        "className": "fa-solid fa-bookmark",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBridge",
        "title": "Bridge",
        "className": "fa-solid fa-bridge",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBridgeWater",
        "title": "Bridge Water",
        "className": "fa-solid fa-bridge-water",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBriefcase",
        "title": "Briefcase",
        "className": "fa-solid fa-briefcase",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBuilding",
        "title": "Building",
        "className": "fa-solid fa-building",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsBuildingColumns",
        "title": "Building Columns",
        "className": "fa-solid fa-building-columns",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsCakeCandles",
        "title": "Cake Candles",
        "className": "fa-solid fa-cake-candles",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsCartShopping",
        "title": "Cart Shopping",
        "className": "fa-solid fa-cart-shopping",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsCircleInfo",
        "title": "Circle Info",
        "className": "fa-solid fa-circle-info",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsCrosshairs",
        "title": "Crosshairs",
        "className": "fa-solid fa-crosshairs",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsDiamondTurnRight",
        "title": "Diamond Turn Right",
        "className": "fa-solid fa-diamond-turn-right",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsDollarSign",
        "title": "Dollar Sign",
        "className": "fa-solid fa-dollar-sign",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsDrawPolygon",
        "title": "Draw Polygon",
        "className": "fa-solid fa-draw-polygon",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsDroplet",
        "title": "Droplet",
        "className": "fa-solid fa-droplet",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsEyeLowVision",
        "title": "Eye Low Vision",
        "className": "fa-solid fa-eye-low-vision",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsEyeSlash",
        "title": "Eye Slash",
        "className": "fa-solid fa-eye-slash",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFire",
        "title": "Fire",
        "className": "fa-solid fa-fire",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFireExtinguisher",
        "title": "Fire Extinguisher",
        "className": "fa-solid fa-fire-extinguisher",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFireFlameCurved",
        "title": "Fire Flame Curved",
        "className": "fa-solid fa-fire-flame-curved",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFlag",
        "title": "Flag",
        "className": "fa-solid fa-flag",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFlagCheckered",
        "title": "Flag Checkered",
        "className": "fa-solid fa-flag-checkered",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsFlask",
        "title": "Flask",
        "className": "fa-solid fa-flask",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsGamepad",
        "title": "Gamepad",
        "className": "fa-solid fa-gamepad",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsGavel",
        "title": "Gavel",
        "className": "fa-solid fa-gavel",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsGift",
        "title": "Gift",
        "className": "fa-solid fa-gift",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsGlobe",
        "title": "Globe",
        "className": "fa-solid fa-globe",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsGraduationCap",
        "title": "Graduation Cap",
        "className": "fa-solid fa-graduation-cap",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHeartPulse",
        "title": "Heart Pulse",
        "className": "fa-solid fa-heart-pulse",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHelicopter",
        "title": "Helicopter",
        "className": "fa-solid fa-helicopter",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHelicopterSymbol",
        "title": "Helicopter Symbol",
        "className": "fa-solid fa-helicopter-symbol",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHospital",
        "title": "Hospital",
        "className": "fa-solid fa-hospital",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsHouse",
        "title": "House",
        "className": "fa-solid fa-house",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsImage",
        "title": "Image",
        "className": "fa-solid fa-image",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsImages",
        "title": "Images",
        "className": "fa-solid fa-images",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsIndustry",
        "title": "Industry",
        "className": "fa-solid fa-industry",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsInfo",
        "title": "Info",
        "className": "fa-solid fa-info",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsJetFighter",
        "title": "Jet Fighter",
        "className": "fa-solid fa-jet-fighter",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsKey",
        "title": "Key",
        "className": "fa-solid fa-key",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLandmark",
        "title": "Landmark",
        "className": "fa-solid fa-landmark",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLandmarkFlag",
        "title": "Landmark Flag",
        "className": "fa-solid fa-landmark-flag",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLayerGroup",
        "title": "Layer Group",
        "className": "fa-solid fa-layer-group",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLeaf",
        "title": "Leaf",
        "className": "fa-solid fa-leaf",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLemon",
        "title": "Lemon",
        "className": "fa-solid fa-lemon",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLifeRing",
        "title": "Life Ring",
        "className": "fa-solid fa-life-ring",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLightbulb",
        "title": "Lightbulb",
        "className": "fa-solid fa-lightbulb",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLocationArrow",
        "title": "Location Arrow",
        "className": "fa-solid fa-location-arrow",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLocationCrosshairs",
        "title": "Location Crosshairs",
        "className": "fa-solid fa-location-crosshairs",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLocationDot",
        "title": "Location Dot",
        "className": "fa-solid fa-location-dot",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLocationPin",
        "title": "Location Pin",
        "className": "fa-solid fa-location-pin",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsLocationPinLock",
        "title": "Location Pin Lock",
        "className": "fa-solid fa-location-pin-lock",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnet",
        "title": "Magnet",
        "className": "fa-solid fa-magnet",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlass",
        "title": "Magnifying Glass",
        "className": "fa-solid fa-magnifying-glass",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlassLocation",
        "title": "Magnifying Glass Location",
        "className": "fa-solid fa-magnifying-glass-location",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlassMinus",
        "title": "Magnifying Glass Minus",
        "className": "fa-solid fa-magnifying-glass-minus",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMagnifyingGlassPlus",
        "title": "Magnifying Glass Plus",
        "className": "fa-solid fa-magnifying-glass-plus",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMap",
        "title": "Map",
        "className": "fa-solid fa-map",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMapPin",
        "title": "Map Pin",
        "className": "fa-solid fa-map-pin",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMartiniGlassEmpty",
        "title": "Martini Glass Empty",
        "className": "fa-solid fa-martini-glass-empty",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMoneyBill",
        "title": "Money Bill",
        "className": "fa-solid fa-money-bill",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMoneyBill1",
        "title": "Money Bill1",
        "className": "fa-solid fa-money-bill-1",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMonument",
        "title": "Monument",
        "className": "fa-solid fa-monument",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMotorcycle",
        "title": "Motorcycle",
        "className": "fa-solid fa-motorcycle",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMountainSun",
        "title": "Mountain Sun",
        "className": "fa-solid fa-mountain-sun",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMugSaucer",
        "title": "Mug Saucer",
        "className": "fa-solid fa-mug-saucer",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsMusic",
        "title": "Music",
        "className": "fa-solid fa-music",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsNewspaper",
        "title": "Newspaper",
        "className": "fa-solid fa-newspaper",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPaw",
        "title": "Paw",
        "className": "fa-solid fa-paw",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPerson",
        "title": "Person",
        "className": "fa-solid fa-person",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPersonWalkingWithCane",
        "title": "Person Walking With Cane",
        "className": "fa-solid fa-person-walking-with-cane",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPhone",
        "title": "Phone",
        "className": "fa-solid fa-phone",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPhoneFlip",
        "title": "Phone Flip",
        "className": "fa-solid fa-phone-flip",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPhoneVolume",
        "title": "Phone Volume",
        "className": "fa-solid fa-phone-volume",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPlane",
        "title": "Plane",
        "className": "fa-solid fa-plane",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPlug",
        "title": "Plug",
        "className": "fa-solid fa-plug",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPlus",
        "title": "Plus",
        "className": "fa-solid fa-plus",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsPrint",
        "title": "Print",
        "className": "fa-solid fa-print",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsRecycle",
        "title": "Recycle",
        "className": "fa-solid fa-recycle",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsRestroom",
        "title": "Restroom",
        "className": "fa-solid fa-restroom",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsRoad",
        "title": "Road",
        "className": "fa-solid fa-road",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsRocket",
        "title": "Rocket",
        "className": "fa-solid fa-rocket",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsRoute",
        "title": "Route",
        "className": "fa-solid fa-route",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsScaleBalanced",
        "title": "Scale Balanced",
        "className": "fa-solid fa-scale-balanced",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsScaleUnbalanced",
        "title": "Scale Unbalanced",
        "className": "fa-solid fa-scale-unbalanced",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsScaleUnbalancedFlip",
        "title": "Scale Unbalanced Flip",
        "className": "fa-solid fa-scale-unbalanced-flip",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsShoePrints",
        "title": "Shoe Prints",
        "className": "fa-solid fa-shoe-prints",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsShower",
        "title": "Shower",
        "className": "fa-solid fa-shower",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSignsPost",
        "title": "Signs Post",
        "className": "fa-solid fa-signs-post",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSnowplow",
        "title": "Snowplow",
        "className": "fa-solid fa-snowplow",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSpoon",
        "title": "Spoon",
        "className": "fa-solid fa-spoon",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSquareH",
        "title": "Square H",
        "className": "fa-solid fa-square-h",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSquareParking",
        "title": "Square Parking",
        "className": "fa-solid fa-square-parking",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSquarePhone",
        "title": "Square Phone",
        "className": "fa-solid fa-square-phone",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSquarePhoneFlip",
        "title": "Square Phone Flip",
        "className": "fa-solid fa-square-phone-flip",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSquarePlus",
        "title": "Square Plus",
        "className": "fa-solid fa-square-plus",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsStreetView",
        "title": "Street View",
        "className": "fa-solid fa-street-view",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSuitcase",
        "title": "Suitcase",
        "className": "fa-solid fa-suitcase",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsSuitcaseMedical",
        "title": "Suitcase Medical",
        "className": "fa-solid fa-suitcase-medical",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTag",
        "title": "Tag",
        "className": "fa-solid fa-tag",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTags",
        "title": "Tags",
        "className": "fa-solid fa-tags",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTaxi",
        "title": "Taxi",
        "className": "fa-solid fa-taxi",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsThumbtack",
        "title": "Thumbtack",
        "className": "fa-solid fa-thumbtack",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTicket",
        "title": "Ticket",
        "className": "fa-solid fa-ticket",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTicketSimple",
        "title": "Ticket Simple",
        "className": "fa-solid fa-ticket-simple",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTrafficLight",
        "title": "Traffic Light",
        "className": "fa-solid fa-traffic-light",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTrain",
        "title": "Train",
        "className": "fa-solid fa-train",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTrainSubway",
        "title": "Train Subway",
        "className": "fa-solid fa-train-subway",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTrainTram",
        "title": "Train Tram",
        "className": "fa-solid fa-train-tram",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTree",
        "title": "Tree",
        "className": "fa-solid fa-tree",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTrophy",
        "title": "Trophy",
        "className": "fa-solid fa-trophy",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsTty",
        "title": "Tty",
        "className": "fa-solid fa-tty",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsUmbrella",
        "title": "Umbrella",
        "className": "fa-solid fa-umbrella",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsUtensils",
        "title": "Utensils",
        "className": "fa-solid fa-utensils",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsVest",
        "title": "Vest",
        "className": "fa-solid fa-vest",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsVestPatches",
        "title": "Vest Patches",
        "className": "fa-solid fa-vest-patches",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsWifi",
        "title": "Wifi",
        "className": "fa-solid fa-wifi",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsWineGlass",
        "title": "Wine Glass",
        "className": "fa-solid fa-wine-glass",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MapsWrench",
        "title": "Wrench",
        "className": "fa-solid fa-wrench",
        "type":"fa","categories": [
            "maps"
        ]
    },
    {
        "name": "fa-MaritimeAnchor",
        "title": "Anchor",
        "className": "fa-solid fa-anchor",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeAnchorCircleCheck",
        "title": "Anchor Circle Check",
        "className": "fa-solid fa-anchor-circle-check",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeAnchorCircleExclamation",
        "title": "Anchor Circle Exclamation",
        "className": "fa-solid fa-anchor-circle-exclamation",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeAnchorCircleXmark",
        "title": "Anchor Circle Xmark",
        "className": "fa-solid fa-anchor-circle-xmark",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeAnchorLock",
        "title": "Anchor Lock",
        "className": "fa-solid fa-anchor-lock",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeFerry",
        "title": "Ferry",
        "className": "fa-solid fa-ferry",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeFish",
        "title": "Fish",
        "className": "fa-solid fa-fish",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeFishFins",
        "title": "Fish Fins",
        "className": "fa-solid fa-fish-fins",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeOtter",
        "title": "Otter",
        "className": "fa-solid fa-otter",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimePersonSwimming",
        "title": "Person Swimming",
        "className": "fa-solid fa-person-swimming",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeShrimp",
        "title": "Shrimp",
        "className": "fa-solid fa-shrimp",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MaritimeWater",
        "title": "Water",
        "className": "fa-solid fa-water",
        "type":"fa","categories": [
            "maritime"
        ]
    },
    {
        "name": "fa-MarketingAnchor",
        "title": "Anchor",
        "className": "fa-solid fa-anchor",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingAnchorCircleCheck",
        "title": "Anchor Circle Check",
        "className": "fa-solid fa-anchor-circle-check",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingAnchorCircleExclamation",
        "title": "Anchor Circle Exclamation",
        "className": "fa-solid fa-anchor-circle-exclamation",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingAnchorCircleXmark",
        "title": "Anchor Circle Xmark",
        "className": "fa-solid fa-anchor-circle-xmark",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingAnchorLock",
        "title": "Anchor Lock",
        "className": "fa-solid fa-anchor-lock",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingFerry",
        "title": "Ferry",
        "className": "fa-solid fa-ferry",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingFish",
        "title": "Fish",
        "className": "fa-solid fa-fish",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingFishFins",
        "title": "Fish Fins",
        "className": "fa-solid fa-fish-fins",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingOtter",
        "title": "Otter",
        "className": "fa-solid fa-otter",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingPersonSwimming",
        "title": "Person Swimming",
        "className": "fa-solid fa-person-swimming",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingShrimp",
        "title": "Shrimp",
        "className": "fa-solid fa-shrimp",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MarketingWater",
        "title": "Water",
        "className": "fa-solid fa-water",
        "type":"fa","categories": [
            "marketing"
        ]
    },
    {
        "name": "fa-MathematicsCalculator",
        "title": "Calculator",
        "className": "fa-solid fa-calculator",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsCircleMinus",
        "title": "Circle Minus",
        "className": "fa-solid fa-circle-minus",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsCirclePlus",
        "title": "Circle Plus",
        "className": "fa-solid fa-circle-plus",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsCircleXmark",
        "title": "Circle Xmark",
        "className": "fa-solid fa-circle-xmark",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsDivide",
        "title": "Divide",
        "className": "fa-solid fa-divide",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsEquals",
        "title": "Equals",
        "className": "fa-solid fa-equals",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsGreaterThan",
        "title": "Greater Than",
        "className": "fa-solid fa-greater-than",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsGreaterThanEqual",
        "title": "Greater Than Equal",
        "className": "fa-solid fa-greater-than-equal",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsInfinity",
        "title": "Infinity",
        "className": "fa-solid fa-infinity",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsLessThan",
        "title": "Less Than",
        "className": "fa-solid fa-less-than",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsLessThanEqual",
        "title": "Less Than Equal",
        "className": "fa-solid fa-less-than-equal",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsMinus",
        "title": "Minus",
        "className": "fa-solid fa-minus",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsNotEqual",
        "title": "Not Equal",
        "className": "fa-solid fa-not-equal",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsPercent",
        "title": "Percent",
        "className": "fa-solid fa-percent",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsPlus",
        "title": "Plus",
        "className": "fa-solid fa-plus",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsPlusMinus",
        "title": "Plus Minus",
        "className": "fa-solid fa-plus-minus",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSquareMinus",
        "title": "Square Minus",
        "className": "fa-solid fa-square-minus",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSquareRootVariable",
        "title": "Square Root Variable",
        "className": "fa-solid fa-square-root-variable",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSquareXmark",
        "title": "Square Xmark",
        "className": "fa-solid fa-square-xmark",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSubscript",
        "title": "Subscript",
        "className": "fa-solid fa-subscript",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsSuperscript",
        "title": "Superscript",
        "className": "fa-solid fa-superscript",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsWaveSquare",
        "title": "Wave Square",
        "className": "fa-solid fa-wave-square",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MathematicsXmark",
        "title": "Xmark",
        "className": "fa-solid fa-xmark",
        "type":"fa","categories": [
            "mathematics"
        ]
    },
    {
        "name": "fa-MediaplaybackArrowRotateLeft",
        "title": "Mediaplayback Arrow Rotate Left",
        "className": "fa-solid fa-arrow-rotate-left",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackArrowRotateRight",
        "title": "Mediaplayback Arrow Rotate Right",
        "className": "fa-solid fa-arrow-rotate-right",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackArrowsRotate",
        "title": "Mediaplayback Arrows Rotate",
        "className": "fa-solid fa-arrows-rotate",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackBackward",
        "title": "Mediaplayback Backward",
        "className": "fa-solid fa-backward",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackBackwardFast",
        "title": "Mediaplayback Backward Fast",
        "className": "fa-solid fa-backward-fast",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackBackwardStep",
        "title": "Mediaplayback Backward Step",
        "className": "fa-solid fa-backward-step",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCirclePause",
        "title": "Mediaplayback Circle Pause",
        "className": "fa-solid fa-circle-pause",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCirclePlay",
        "title": "Mediaplayback Circle Play",
        "className": "fa-solid fa-circle-play",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCircleStop",
        "title": "Mediaplayback Circle Stop",
        "className": "fa-solid fa-circle-stop",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackCompress",
        "title": "Mediaplayback Compress",
        "className": "fa-solid fa-compress",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackDownLeftAndUpRightToCenter",
        "title": "Mediaplayback Down Left And Up Right To Center",
        "className": "fa-solid fa-down-left-and-up-right-to-center",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackEject",
        "title": "Mediaplayback Eject",
        "className": "fa-solid fa-eject",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackExpand",
        "title": "Mediaplayback Expand",
        "className": "fa-solid fa-expand",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackForward",
        "title": "Mediaplayback Forward",
        "className": "fa-solid fa-forward",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackForwardFast",
        "title": "Mediaplayback Forward Fast",
        "className": "fa-solid fa-forward-fast",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackForwardStep",
        "title": "Mediaplayback Forward Step",
        "className": "fa-solid fa-forward-step",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackHand",
        "title": "Mediaplayback Hand",
        "className": "fa-solid fa-hand",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackMaximize",
        "title": "Mediaplayback Maximize",
        "className": "fa-solid fa-maximize",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackMinimize",
        "title": "Mediaplayback Minimize",
        "className": "fa-solid fa-minimize",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackMusic",
        "title": "Mediaplayback Music",
        "className": "fa-solid fa-music",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackPause",
        "title": "Mediaplayback Pause",
        "className": "fa-solid fa-pause",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackPhoneVolume",
        "title": "Mediaplayback Phone Volume",
        "className": "fa-solid fa-phone-volume",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackPlay",
        "title": "Mediaplayback Play",
        "className": "fa-solid fa-play",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackPlusMinus",
        "title": "Mediaplayback Plus Minus",
        "className": "fa-solid fa-plus-minus",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackRepeat",
        "title": "Mediaplayback Repeat",
        "className": "fa-solid fa-repeat",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackRotate",
        "title": "Mediaplayback Rotate",
        "className": "fa-solid fa-rotate",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackRotateLeft",
        "title": "Mediaplayback Rotate Left",
        "className": "fa-solid fa-rotate-left",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackRotateRight",
        "title": "Mediaplayback Rotate Right",
        "className": "fa-solid fa-rotate-right",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackRss",
        "title": "Mediaplayback Rss",
        "className": "fa-solid fa-rss",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackShuffle",
        "title": "Mediaplayback Shuffle",
        "className": "fa-solid fa-shuffle",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackSliders",
        "title": "Mediaplayback Sliders",
        "className": "fa-solid fa-sliders",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackStop",
        "title": "Mediaplayback Stop",
        "className": "fa-solid fa-stop",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackUpRightAndDownLeftFromCenter",
        "title": "Mediaplayback Up Right And Down Left From Center",
        "className": "fa-solid fa-up-right-and-down-left-from-center",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeHigh",
        "title": "Mediaplayback Volume High",
        "className": "fa-solid fa-volume-high",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeLow",
        "title": "Mediaplayback Volume Low",
        "className": "fa-solid fa-volume-low",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeOff",
        "title": "Mediaplayback Volume Off",
        "className": "fa-solid fa-volume-off",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
    {
        "name": "fa-MediaplaybackVolumeXmark",
        "title": "Mediaplayback Volume Xmark",
        "className": "fa-solid fa-volume-xmark",
        "type":"fa","categories": [
            "media-playback"
        ]
    },
     {
        "name": "fa-MedicalHealthBacteria",
        "title": "Bacteria",
        "className": "fa-solid fa-bacteria",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBacterium",
        "title": "Bacterium",
        "className": "fa-solid fa-bacterium",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBandage",
        "title": "Bandage",
        "className": "fa-solid fa-bandage",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBanSmoking",
        "title": "Ban Smoking",
        "className": "fa-solid fa-ban-smoking",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBedPulse",
        "title": "Bed Pulse",
        "className": "fa-solid fa-bed-pulse",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBiohazard",
        "title": "Biohazard",
        "className": "fa-solid fa-biohazard",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBone",
        "title": "Bone",
        "className": "fa-solid fa-bone",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBong",
        "title": "Bong",
        "className": "fa-solid fa-bong",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBookMedical",
        "title": "Book Medical",
        "className": "fa-solid fa-book-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBrain",
        "title": "Brain",
        "className": "fa-solid fa-brain",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthBriefcaseMedical",
        "title": "Briefcase Medical",
        "className": "fa-solid fa-briefcase-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCannabis",
        "title": "Cannabis",
        "className": "fa-solid fa-cannabis",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCapsules",
        "title": "Capsules",
        "className": "fa-solid fa-capsules",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCircleH",
        "title": "Circle H",
        "className": "fa-solid fa-circle-h",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCircleRadiation",
        "title": "Circle Radiation",
        "className": "fa-solid fa-circle-radiation",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthClipboardUser",
        "title": "Clipboard User",
        "className": "fa-solid fa-clipboard-user",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthClockRotateLeft",
        "title": "Clock Rotate Left",
        "className": "fa-solid fa-clock-rotate-left",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCommentMedical",
        "title": "Comment Medical",
        "className": "fa-solid fa-comment-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthCrutch",
        "title": "Crutch",
        "className": "fa-solid fa-crutch",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthDisease",
        "title": "Disease",
        "className": "fa-solid fa-disease",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthDna",
        "title": "Dna",
        "className": "fa-solid fa-dna",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthDroplet",
        "title": "Droplet",
        "className": "fa-solid fa-droplet",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthDropletSlash",
        "title": "Droplet Slash",
        "className": "fa-solid fa-droplet-slash",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthEyeDropper",
        "title": "Eye Dropper",
        "className": "fa-solid fa-eye-dropper",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFileMedical",
        "title": "File Medical",
        "className": "fa-solid fa-file-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFilePrescription",
        "title": "File Prescription",
        "className": "fa-solid fa-file-prescription",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFileWaveform",
        "title": "File Waveform",
        "className": "fa-solid fa-file-waveform",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFireFlameSimple",
        "title": "Fire Flame Simple",
        "className": "fa-solid fa-fire-flame-simple",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFlask",
        "title": "Flask",
        "className": "fa-solid fa-flask",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthFlaskVial",
        "title": "Flask Vial",
        "className": "fa-solid fa-flask-vial",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHandDots",
        "title": "Hand Dots",
        "className": "fa-solid fa-hand-dots",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHandHoldingDroplet",
        "title": "Hand Holding Droplet",
        "className": "fa-solid fa-hand-holding-droplet",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHandHoldingMedical",
        "title": "Hand Holding Medical",
        "className": "fa-solid fa-hand-holding-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideCough",
        "title": "Head Side Cough",
        "className": "fa-solid fa-head-side-cough",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideCoughSlash",
        "title": "Head Side Cough Slash",
        "className": "fa-solid fa-head-side-cough-slash",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideMask",
        "title": "Head Side Mask",
        "className": "fa-solid fa-head-side-mask",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeadSideVirus",
        "title": "Head Side Virus",
        "className": "fa-solid fa-head-side-virus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleBolt",
        "title": "Heart Circle Bolt",
        "className": "fa-solid fa-heart-circle-bolt",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleCheck",
        "title": "Heart Circle Check",
        "className": "fa-solid fa-heart-circle-check",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleExclamation",
        "title": "Heart Circle Exclamation",
        "className": "fa-solid fa-heart-circle-exclamation",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleMinus",
        "title": "Heart Circle Minus",
        "className": "fa-solid fa-heart-circle-minus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCirclePlus",
        "title": "Heart Circle Plus",
        "className": "fa-solid fa-heart-circle-plus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartCircleXmark",
        "title": "Heart Circle Xmark",
        "className": "fa-solid fa-heart-circle-xmark",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHeartPulse",
        "title": "Heart Pulse",
        "className": "fa-solid fa-heart-pulse",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHospital",
        "title": "Hospital",
        "className": "fa-solid fa-hospital",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHospitalUser",
        "title": "Hospital User",
        "className": "fa-solid fa-hospital-user",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHouseChimneyMedical",
        "title": "House Chimney Medical",
        "className": "fa-solid fa-house-chimney-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHouseMedical",
        "title": "House Medical",
        "className": "fa-solid fa-house-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHouseMedicalCircleCheck",
        "title": "House Medical Circle Check",
        "className": "fa-solid fa-house-medical-circle-check",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHouseMedicalCircleExclamation",
        "title": "House Medical Circle Exclamation",
        "className": "fa-solid fa-house-medical-circle-exclamation",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHouseMedicalCircleXmark",
        "title": "House Medical Circle Xmark",
        "className": "fa-solid fa-house-medical-circle-xmark",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthHouseMedicalFlag",
        "title": "House Medical Flag",
        "className": "fa-solid fa-house-medical-flag",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthIdCardClip",
        "title": "Id Card Clip",
        "className": "fa-solid fa-id-card-clip",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthJoint",
        "title": "Joint",
        "className": "fa-solid fa-joint",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthKitMedical",
        "title": "Kit Medical",
        "className": "fa-solid fa-kit-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthLaptopMedical",
        "title": "Laptop Medical",
        "className": "fa-solid fa-laptop-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthLungs",
        "title": "Lungs",
        "className": "fa-solid fa-lungs",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthLungsVirus",
        "title": "Lungs Virus",
        "className": "fa-solid fa-lungs-virus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMaskFace",
        "title": "Mask Face",
        "className": "fa-solid fa-mask-face",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMaskVentilator",
        "title": "Mask Ventilator",
        "className": "fa-solid fa-mask-ventilator",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMicroscope",
        "title": "Microscope",
        "className": "fa-solid fa-microscope",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthMortarPestle",
        "title": "Mortar Pestle",
        "className": "fa-solid fa-mortar-pestle",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthNotesMedical",
        "title": "Notes Medical",
        "className": "fa-solid fa-notes-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPager",
        "title": "Pager",
        "className": "fa-solid fa-pager",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPersonBreastfeeding",
        "title": "Person Breastfeeding",
        "className": "fa-solid fa-person-breastfeeding",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPersonCane",
        "title": "Person Cane",
        "className": "fa-solid fa-person-cane",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPersonDotsFromLine",
        "title": "Person Dots From Line",
        "className": "fa-solid fa-person-dots-from-line",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPersonHalfDress",
        "title": "Person Half Dress",
        "className": "fa-solid fa-person-half-dress",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPills",
        "title": "Pills",
        "className": "fa-solid fa-pills",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPlus",
        "title": "Plus",
        "className": "fa-solid fa-plus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPoop",
        "title": "Poop",
        "className": "fa-solid fa-poop",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPrescription",
        "title": "Prescription",
        "className": "fa-solid fa-prescription",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPrescriptionBottle",
        "title": "Prescription Bottle",
        "className": "fa-solid fa-prescription-bottle",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPrescriptionBottleMedical",
        "title": "Prescription Bottle Medical",
        "className": "fa-solid fa-prescription-bottle-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthPumpMedical",
        "title": "Pump Medical",
        "className": "fa-solid fa-pump-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthReceipt",
        "title": "Receipt",
        "className": "fa-solid fa-receipt",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthShieldVirus",
        "title": "Shield Virus",
        "className": "fa-solid fa-shield-virus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSkull",
        "title": "Skull",
        "className": "fa-solid fa-skull",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSmoking",
        "title": "Smoking",
        "className": "fa-solid fa-smoking",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSquareH",
        "title": "Square H",
        "className": "fa-solid fa-square-h",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSquarePlus",
        "title": "Square Plus",
        "className": "fa-solid fa-square-plus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSquareVirus",
        "title": "Square Virus",
        "className": "fa-solid fa-square-virus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthStaffSnake",
        "title": "Staff Snake",
        "className": "fa-solid fa-staff-snake",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthStarOfLife",
        "title": "Star Of Life",
        "className": "fa-solid fa-star-of-life",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthStethoscope",
        "title": "Stethoscope",
        "className": "fa-solid fa-stethoscope",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSuitcaseMedical",
        "title": "Suitcase Medical",
        "className": "fa-solid fa-suitcase-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthSyringe",
        "title": "Syringe",
        "className": "fa-solid fa-syringe",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTablets",
        "title": "Tablets",
        "className": "fa-solid fa-tablets",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTeeth",
        "title": "Teeth",
        "className": "fa-solid fa-teeth",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTeethOpen",
        "title": "Teeth Open",
        "className": "fa-solid fa-teeth-open",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthThermometer",
        "title": "Thermometer",
        "className": "fa-solid fa-thermometer",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTooth",
        "title": "Tooth",
        "className": "fa-solid fa-tooth",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTruckDroplet",
        "title": "Truck Droplet",
        "className": "fa-solid fa-truck-droplet",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthUserDoctor",
        "title": "User Doctor",
        "className": "fa-solid fa-user-doctor",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthUserNurse",
        "title": "User Nurse",
        "className": "fa-solid fa-user-nurse",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVial",
        "title": "Vial",
        "className": "fa-solid fa-vial",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVialCircleCheck",
        "title": "Vial Circle Check",
        "className": "fa-solid fa-vial-circle-check",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVials",
        "title": "Vials",
        "className": "fa-solid fa-vials",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVialVirus",
        "title": "Vial Virus",
        "className": "fa-solid fa-vial-virus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVirus",
        "title": "Virus",
        "className": "fa-solid fa-virus",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVirusCovid",
        "title": "Virus Covid",
        "className": "fa-solid fa-virus-covid",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVirusCovidSlash",
        "title": "Virus Covid Slash",
        "className": "fa-solid fa-virus-covid-slash",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthViruses",
        "title": "Viruses",
        "className": "fa-solid fa-viruses",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthVirusSlash",
        "title": "Virus Slash",
        "className": "fa-solid fa-virus-slash",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthWeightScale",
        "title": "Weight Scale",
        "className": "fa-solid fa-weight-scale",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MedicalHealthXRay",
        "title": "XRay",
        "className": "fa-solid fa-x-ray",
        "type":"fa","categories": [
            "medical+health"
        ]
    },
    {
        "name": "fa-MoneyAustralSign",
        "title": "Austral Sign",
        "className": "fa-solid fa-austral-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBahtSign",
        "title": "Baht Sign",
        "className": "fa-solid fa-baht-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBangladeshiTakaSign",
        "title": "Bangladeshi Taka Sign",
        "className": "fa-solid fa-bangladeshi-taka-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBitcoin",
        "title": "Bitcoin",
        "className": "fa-solid fa-bitcoin",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBitcoinSign",
        "title": "Bitcoin Sign",
        "className": "fa-solid fa-bitcoin-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBrazilianRealSign",
        "title": "Brazilian Real Sign",
        "className": "fa-solid fa-brazilian-real-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyBtc",
        "title": "Btc",
        "className": "fa-solid fa-btc",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCashRegister",
        "title": "Cash Register",
        "className": "fa-solid fa-cash-register",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCediSign",
        "title": "Cedi Sign",
        "className": "fa-solid fa-cedi-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCentSign",
        "title": "Cent Sign",
        "className": "fa-solid fa-cent-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyChartLine",
        "title": "Chart Line",
        "className": "fa-solid fa-chart-line",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyChartPie",
        "title": "Chart Pie",
        "className": "fa-solid fa-chart-pie",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCircleDollarToSlot",
        "title": "Circle Dollar To Slot",
        "className": "fa-solid fa-circle-dollar-to-slot",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCoins",
        "title": "Coins",
        "className": "fa-solid fa-coins",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyColonSign",
        "title": "Colon Sign",
        "className": "fa-solid fa-colon-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCommentDollar",
        "title": "Comment Dollar",
        "className": "fa-solid fa-comment-dollar",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCommentsDollar",
        "title": "Comments Dollar",
        "className": "fa-solid fa-comments-dollar",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCreditCard",
        "title": "Credit Card",
        "className": "fa-solid fa-credit-card",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyCruzeiroSign",
        "title": "Cruzeiro Sign",
        "className": "fa-solid fa-cruzeiro-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyDollarSign",
        "title": "Dollar Sign",
        "className": "fa-solid fa-dollar-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyDongSign",
        "title": "Dong Sign",
        "className": "fa-solid fa-dong-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyEthereum",
        "title": "Ethereum",
        "className": "fa-solid fa-ethereum",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyEuroSign",
        "title": "Euro Sign",
        "className": "fa-solid fa-euro-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFileInvoice",
        "title": "File Invoice",
        "className": "fa-solid fa-file-invoice",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFileInvoiceDollar",
        "title": "File Invoice Dollar",
        "className": "fa-solid fa-file-invoice-dollar",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFlorinSign",
        "title": "Florin Sign",
        "className": "fa-solid fa-florin-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyFrancSign",
        "title": "Franc Sign",
        "className": "fa-solid fa-franc-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyGg",
        "title": "Gg",
        "className": "fa-solid fa-gg",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyGgCircle",
        "title": "Gg Circle",
        "className": "fa-solid fa-gg-circle",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyGuaraniSign",
        "title": "Guarani Sign",
        "className": "fa-solid fa-guarani-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyHandHoldingDollar",
        "title": "Hand Holding Dollar",
        "className": "fa-solid fa-hand-holding-dollar",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyHryvniaSign",
        "title": "Hryvnia Sign",
        "className": "fa-solid fa-hryvnia-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyIndianRupeeSign",
        "title": "Indian Rupee Sign",
        "className": "fa-solid fa-indian-rupee-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyKipSign",
        "title": "Kip Sign",
        "className": "fa-solid fa-kip-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLandmark",
        "title": "Landmark",
        "className": "fa-solid fa-landmark",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLariSign",
        "title": "Lari Sign",
        "className": "fa-solid fa-lari-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLiraSign",
        "title": "Lira Sign",
        "className": "fa-solid fa-lira-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyLitecoinSign",
        "title": "Litecoin Sign",
        "className": "fa-solid fa-litecoin-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyManatSign",
        "title": "Manat Sign",
        "className": "fa-solid fa-manat-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMillSign",
        "title": "Mill Sign",
        "className": "fa-solid fa-mill-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBill",
        "title": "Bill",
        "className": "fa-solid fa-money-bill",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBill1",
        "title": "Bill1",
        "className": "fa-solid fa-money-bill-1",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBill1Wave",
        "title": "Bill1Wave",
        "className": "fa-solid fa-money-bill-1-wave",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBills",
        "title": "Bills",
        "className": "fa-solid fa-money-bills",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillTransfer",
        "title": "Bill Transfer",
        "className": "fa-solid fa-money-bill-transfer",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillTrendUp",
        "title": "Bill Trend Up",
        "className": "fa-solid fa-money-bill-trend-up",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillWave",
        "title": "Bill Wave",
        "className": "fa-solid fa-money-bill-wave",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyBillWheat",
        "title": "Bill Wheat",
        "className": "fa-solid fa-money-bill-wheat",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyCheck",
        "title": "Check",
        "className": "fa-solid fa-money-check",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyMoneyCheckDollar",
        "title": "Check Dollar",
        "className": "fa-solid fa-money-check-dollar",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyNairaSign",
        "title": "Naira Sign",
        "className": "fa-solid fa-naira-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyPercent",
        "title": "Percent",
        "className": "fa-solid fa-percent",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyPesetaSign",
        "title": "Peseta Sign",
        "className": "fa-solid fa-peseta-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyPesoSign",
        "title": "Peso Sign",
        "className": "fa-solid fa-peso-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyPiggyBank",
        "title": "Piggy Bank",
        "className": "fa-solid fa-piggy-bank",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyReceipt",
        "title": "Receipt",
        "className": "fa-solid fa-receipt",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyRubleSign",
        "title": "Ruble Sign",
        "className": "fa-solid fa-ruble-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyRupeeSign",
        "title": "Rupee Sign",
        "className": "fa-solid fa-rupee-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyRupiahSign",
        "title": "Rupiah Sign",
        "className": "fa-solid fa-rupiah-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneySackDollar",
        "title": "Sack Dollar",
        "className": "fa-solid fa-sack-dollar",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneySackXmark",
        "title": "Sack Xmark",
        "className": "fa-solid fa-sack-xmark",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyScaleBalanced",
        "title": "Scale Balanced",
        "className": "fa-solid fa-scale-balanced",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyScaleUnbalanced",
        "title": "Scale Unbalanced",
        "className": "fa-solid fa-scale-unbalanced",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyScaleUnbalancedFlip",
        "title": "Scale Unbalanced Flip",
        "className": "fa-solid fa-scale-unbalanced-flip",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyShekelSign",
        "title": "Shekel Sign",
        "className": "fa-solid fa-shekel-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyStamp",
        "title": "Stamp",
        "className": "fa-solid fa-stamp",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneySterlingSign",
        "title": "Sterling Sign",
        "className": "fa-solid fa-sterling-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyTengeSign",
        "title": "Tenge Sign",
        "className": "fa-solid fa-tenge-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyTurkishLiraSign",
        "title": "Turkish Lira Sign",
        "className": "fa-solid fa-turkish-lira-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyVault",
        "title": "Vault",
        "className": "fa-solid fa-vault",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyWallet",
        "title": "Wallet",
        "className": "fa-solid fa-wallet",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyWonSign",
        "title": "Won Sign",
        "className": "fa-solid fa-won-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MoneyYenSign",
        "title": "Yen Sign",
        "className": "fa-solid fa-yen-sign",
        "type":"fa","categories": [
            "money"
        ]
    },
    {
        "name": "fa-MovingBoxArchive",
        "title": "Box Archive",
        "className": "fa-solid fa-box-archive",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingBoxesPacking",
        "title": "Boxes Packing",
        "className": "fa-solid fa-boxes-packing",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingBoxOpen",
        "title": "Box Open",
        "className": "fa-solid fa-box-open",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingCaravan",
        "title": "Caravan",
        "className": "fa-solid fa-caravan",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingCouch",
        "title": "Couch",
        "className": "fa-solid fa-couch",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingDolly",
        "title": "Dolly",
        "className": "fa-solid fa-dolly",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingHouseChimney",
        "title": "House Chimney",
        "className": "fa-solid fa-house-chimney",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingPeopleCarryBox",
        "title": "People Carry Box",
        "className": "fa-solid fa-people-carry-box",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingRoute",
        "title": "Route",
        "className": "fa-solid fa-route",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingSignHanging",
        "title": "Sign Hanging",
        "className": "fa-solid fa-sign-hanging",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingSuitcase",
        "title": "Suitcase",
        "className": "fa-solid fa-suitcase",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTape",
        "title": "Tape",
        "className": "fa-solid fa-tape",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTrailer",
        "title": "Trailer",
        "className": "fa-solid fa-trailer",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTruckMoving",
        "title": "Truck",
        "className": "fa-solid fa-truck-moving",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingTruckRampBox",
        "title": "Truck Ramp Box",
        "className": "fa-solid fa-truck-ramp-box",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MovingWineGlass",
        "title": "Wine Glass",
        "className": "fa-solid fa-wine-glass",
        "type":"fa","categories": [
            "moving"
        ]
    },
    {
        "name": "fa-MusicVideoCompactDisc",
        "title": "Compact Disc",
        "className": "fa-solid fa-compact-disc",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoDrum",
        "title": "Drum",
        "className": "fa-solid fa-drum",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoDrumSteelpan",
        "title": "Drum Steelpan",
        "className": "fa-solid fa-drum-steelpan",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoFileAudio",
        "title": "File Audio",
        "className": "fa-solid fa-file-audio",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoGuitar",
        "title": "Guitar",
        "className": "fa-solid fa-guitar",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoHeadphones",
        "title": "Headphones",
        "className": "fa-solid fa-headphones",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoHeadphonesSimple",
        "title": "Headphones Simple",
        "className": "fa-solid fa-headphones-simple",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoMicrophone",
        "title": "Microphone",
        "className": "fa-solid fa-microphone",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoMicrophoneLines",
        "title": "Microphone Lines",
        "className": "fa-solid fa-microphone-lines",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoMicrophoneLinesSlash",
        "title": "Microphone Lines Slash",
        "className": "fa-solid fa-microphone-lines-slash",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoMicrophoneSlash",
        "title": "Microphone Slash",
        "className": "fa-solid fa-microphone-slash",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoMusic",
        "title": "Music",
        "className": "fa-solid fa-music",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoNapster",
        "title": "Napster",
        "className": "fa-solid fa-napster",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoRadio",
        "title": "Radio",
        "className": "fa-solid fa-radio",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoRecordVinyl",
        "title": "Record Vinyl",
        "className": "fa-solid fa-record-vinyl",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoSliders",
        "title": "Sliders",
        "className": "fa-solid fa-sliders",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoSoundcloud",
        "title": "Soundcloud",
        "className": "fa-solid fa-soundcloud",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoSpotify",
        "title": "Spotify",
        "className": "fa-solid fa-spotify",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoVolumeHigh",
        "title": "Volume High",
        "className": "fa-solid fa-volume-high",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoVolumeLow",
        "title": "Volume Low",
        "className": "fa-solid fa-volume-low",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoVolumeOff",
        "title": "Volume Off",
        "className": "fa-solid fa-volume-off",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoVolumeXmark",
        "title": "Volume Xmark",
        "className": "fa-solid fa-volume-xmark",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-MusicVideoWaveSquare",
        "title": "Wave Square",
        "className": "fa-solid fa-wave-square",
        "type":"fa","categories": [
            "music+video"
        ]
    },
    {
        "name": "fa-NatureBinoculars",
        "title": "Binoculars",
        "className": "fa-solid fa-binoculars",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureBug",
        "title": "Bug",
        "className": "fa-solid fa-bug",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureBugs",
        "title": "Bugs",
        "className": "fa-solid fa-bugs",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureCannabis",
        "title": "Cannabis",
        "className": "fa-solid fa-cannabis",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureCloudSun",
        "title": "Cloud Sun",
        "className": "fa-solid fa-cloud-sun",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureClover",
        "title": "Clover",
        "className": "fa-solid fa-clover",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureFeather",
        "title": "Feather",
        "className": "fa-solid fa-feather",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureFeatherPointed",
        "title": "Feather Pointed",
        "className": "fa-solid fa-feather-pointed",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureFire",
        "title": "Fire",
        "className": "fa-solid fa-fire",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureFrog",
        "title": "Frog",
        "className": "fa-solid fa-frog",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureIcicles",
        "title": "Icicles",
        "className": "fa-solid fa-icicles",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureLeaf",
        "title": "Leaf",
        "className": "fa-solid fa-leaf",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureLocust",
        "title": "Locust",
        "className": "fa-solid fa-locust",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureMosquito",
        "title": "Mosquito",
        "className": "fa-solid fa-mosquito",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureMound",
        "title": "Mound",
        "className": "fa-solid fa-mound",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureMountain",
        "title": "Mountain",
        "className": "fa-solid fa-mountain",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureMountainCity",
        "title": "Mountain City",
        "className": "fa-solid fa-mountain-city",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureMountainSun",
        "title": "Mountain Sun",
        "className": "fa-solid fa-mountain-sun",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NaturePersonHiking",
        "title": "Person Hiking",
        "className": "fa-solid fa-person-hiking",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NaturePlantWilt",
        "title": "Plant Wilt",
        "className": "fa-solid fa-plant-wilt",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureSeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureSignsPost",
        "title": "Signs Post",
        "className": "fa-solid fa-signs-post",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureSpider",
        "title": "Spider",
        "className": "fa-solid fa-spider",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureTree",
        "title": "Tree",
        "className": "fa-solid fa-tree",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureVolcano",
        "title": "Volcano",
        "className": "fa-solid fa-volcano",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureWater",
        "title": "Water",
        "className": "fa-solid fa-water",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureWind",
        "title": "Wind",
        "className": "fa-solid fa-wind",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-NatureWorm",
        "title": "Worm",
        "className": "fa-solid fa-worm",
        "type":"fa","categories": [
            "nature"
        ]
    },
    {
        "name": "fa-Numbers0",
        "title": "0",
        "className": "fa-solid fa-0",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers1",
        "title": "1",
        "className": "fa-solid fa-1",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers2",
        "title": "2",
        "className": "fa-solid fa-2",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers3",
        "title": "3",
        "className": "fa-solid fa-3",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers4",
        "title": "4",
        "className": "fa-solid fa-4",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers5",
        "title": "5",
        "className": "fa-solid fa-5",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers6",
        "title": "6",
        "className": "fa-solid fa-6",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers7",
        "title": "7",
        "className": "fa-solid fa-7",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers8",
        "title": "8",
        "className": "fa-solid fa-8",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-Numbers9",
        "title": "9",
        "className": "fa-solid fa-9",
        "type":"fa","categories": [
            "numbers"
        ]
    },
    {
        "name": "fa-PhotosImagesBolt",
        "title": "Bolt",
        "className": "fa-solid fa-bolt",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesBoltLightning",
        "title": "Bolt Lightning",
        "className": "fa-solid fa-bolt-lightning",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesCamera",
        "title": "Camera",
        "className": "fa-solid fa-camera",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesCameraRetro",
        "title": "Camera Retro",
        "className": "fa-solid fa-camera-retro",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesCameraRotate",
        "title": "Camera Rotate",
        "className": "fa-solid fa-camera-rotate",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesChalkboard",
        "title": "Chalkboard",
        "className": "fa-solid fa-chalkboard",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesCircleHalfStroke",
        "title": "Circle Half Stroke",
        "className": "fa-solid fa-circle-half-stroke",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesClone",
        "title": "Clone",
        "className": "fa-solid fa-clone",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesDroplet",
        "title": "Droplet",
        "className": "fa-solid fa-droplet",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesEyeDropper",
        "title": "Eye Dropper",
        "className": "fa-solid fa-eye-dropper",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesEyeSlash",
        "title": "Eye Slash",
        "className": "fa-solid fa-eye-slash",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesFileImage",
        "title": "File Image",
        "className": "fa-solid fa-file-image",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesFilm",
        "title": "Film",
        "className": "fa-solid fa-film",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesIdBadge",
        "title": "Id Badge",
        "className": "fa-solid fa-id-badge",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesIdCard",
        "title": "Id Card",
        "className": "fa-solid fa-id-card",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesImage",
        "title": "Image",
        "className": "fa-solid fa-image",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesImagePortrait",
        "title": "Image Portrait",
        "className": "fa-solid fa-image-portrait",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesImages",
        "title": "Images",
        "className": "fa-solid fa-images",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesMinimize",
        "title": "Minimize",
        "className": "fa-solid fa-minimize",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesPanorama",
        "title": "Panorama",
        "className": "fa-solid fa-panorama",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesPhotoFilm",
        "title": "Photo Film",
        "className": "fa-solid fa-photo-film",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesSliders",
        "title": "Sliders",
        "className": "fa-solid fa-sliders",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PhotosImagesUnsplash",
        "title": "Unsplash",
        "className": "fa-solid fa-unsplash",
        "type":"fa","categories": [
            "photos+images"
        ]
    },
    {
        "name": "fa-PoliticalAward",
        "title": "Award",
        "className": "fa-solid fa-award",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalBuildingFlag",
        "title": "Building Flag",
        "className": "fa-solid fa-building-flag",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalBullhorn",
        "title": "Bullhorn",
        "className": "fa-solid fa-bullhorn",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalCheckDouble",
        "title": "Check Double",
        "className": "fa-solid fa-check-double",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalCheckToSlot",
        "title": "Check To Slot",
        "className": "fa-solid fa-check-to-slot",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalCircleDollarToSlot",
        "title": "Circle Dollar To Slot",
        "className": "fa-solid fa-circle-dollar-to-slot",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalDemocrat",
        "title": "Democrat",
        "className": "fa-solid fa-democrat",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalDove",
        "title": "Dove",
        "className": "fa-solid fa-dove",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalDumpsterFire",
        "title": "Dumpster Fire",
        "className": "fa-solid fa-dumpster-fire",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalFlagUsa",
        "title": "Flag Usa",
        "className": "fa-solid fa-flag-usa",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalHandFist",
        "title": "Hand Fist",
        "className": "fa-solid fa-hand-fist",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalHandshake",
        "title": "Handshake",
        "className": "fa-solid fa-handshake",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalLandmarkDome",
        "title": "Landmark Dome",
        "className": "fa-solid fa-landmark-dome",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalLandmarkFlag",
        "title": "Landmark Flag",
        "className": "fa-solid fa-landmark-flag",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalPersonBooth",
        "title": "Person Booth",
        "className": "fa-solid fa-person-booth",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalPiggyBank",
        "title": "Piggy Bank",
        "className": "fa-solid fa-piggy-bank",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalRepublican",
        "title": "Republican",
        "className": "fa-solid fa-republican",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalScaleBalanced",
        "title": "Scale Balanced",
        "className": "fa-solid fa-scale-balanced",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalScaleUnbalanced",
        "title": "Scale Unbalanced",
        "className": "fa-solid fa-scale-unbalanced",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PoliticalScaleUnbalancedFlip",
        "title": "Scale Unbalanced Flip",
        "className": "fa-solid fa-scale-unbalanced-flip",
        "type":"fa","categories": [
            "political"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsAsterisk",
        "title": "Asterisk",
        "className": "fa-solid fa-asterisk",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsAt",
        "title": "At",
        "className": "fa-solid fa-at",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsCheck",
        "title": "Check",
        "className": "fa-solid fa-check",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsCheckDouble",
        "title": "Check Double",
        "className": "fa-solid fa-check-double",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsCircleExclamation",
        "title": "Circle Exclamation",
        "className": "fa-solid fa-circle-exclamation",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsCircleQuestion",
        "title": "Circle Question",
        "className": "fa-solid fa-circle-question",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsEquals",
        "title": "Equals",
        "className": "fa-solid fa-equals",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsExclamation",
        "title": "Exclamation",
        "className": "fa-solid fa-exclamation",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsGreaterThan",
        "title": "Greater Than",
        "className": "fa-solid fa-greater-than",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsHashtag",
        "title": "Hashtag",
        "className": "fa-solid fa-hashtag",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsLessThan",
        "title": "Less Than",
        "className": "fa-solid fa-less-than",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsMinus",
        "title": "Minus",
        "className": "fa-solid fa-minus",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsPercent",
        "title": "Percent",
        "className": "fa-solid fa-percent",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsPlus",
        "title": "Plus",
        "className": "fa-solid fa-plus",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsQuestion",
        "title": "Question",
        "className": "fa-solid fa-question",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsQuoteLeft",
        "title": "Quote Left",
        "className": "fa-solid fa-quote-left",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsQuoteRight",
        "title": "Quote Right",
        "className": "fa-solid fa-quote-right",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-PunctuationSymbolsSection",
        "title": "Section",
        "className": "fa-solid fa-section",
        "type":"fa","categories": [
            "punctuation+symbols"
        ]
    },
    {
        "name": "fa-ReligionAnkh",
        "title": "Ankh",
        "className": "fa-solid fa-ankh",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionAtom",
        "title": "Atom",
        "className": "fa-solid fa-atom",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBahai",
        "title": "Bahai",
        "className": "fa-solid fa-bahai",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBookBible",
        "title": "Book Bible",
        "className": "fa-solid fa-book-bible",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBookJournalWhills",
        "title": "Book Journal Whills",
        "className": "fa-solid fa-book-journal-whills",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBookQuran",
        "title": "Book Quran",
        "className": "fa-solid fa-book-quran",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionBookTanakh",
        "title": "Book Tanakh",
        "className": "fa-solid fa-book-tanakh",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionChurch",
        "title": "Church",
        "className": "fa-solid fa-church",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionCross",
        "title": "Cross",
        "className": "fa-solid fa-cross",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionDharmachakra",
        "title": "Dharmachakra",
        "className": "fa-solid fa-dharmachakra",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionDove",
        "title": "Dove",
        "className": "fa-solid fa-dove",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionGopuram",
        "title": "Gopuram",
        "className": "fa-solid fa-gopuram",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionHamsa",
        "title": "Hamsa",
        "className": "fa-solid fa-hamsa",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionHandsPraying",
        "title": "Hands Praying",
        "className": "fa-solid fa-hands-praying",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionHanukiah",
        "title": "Hanukiah",
        "className": "fa-solid fa-hanukiah",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionJedi",
        "title": "Jedi",
        "className": "fa-solid fa-jedi",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionKaaba",
        "title": "Kaaba",
        "className": "fa-solid fa-kaaba",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionKhanda",
        "title": "Khanda",
        "className": "fa-solid fa-khanda",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionMenorah",
        "title": "Menorah",
        "className": "fa-solid fa-menorah",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionMosque",
        "title": "Mosque",
        "className": "fa-solid fa-mosque",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionOm",
        "title": "Om",
        "className": "fa-solid fa-om",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionPeace",
        "title": "Peace",
        "className": "fa-solid fa-peace",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionPersonPraying",
        "title": "Person Praying",
        "className": "fa-solid fa-person-praying",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionPlaceOfWorship",
        "title": "Place Of Worship",
        "className": "fa-solid fa-place-of-worship",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionScrollTorah",
        "title": "Scroll Torah",
        "className": "fa-solid fa-scroll-torah",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionSpaghettiMonsterFlying",
        "title": "Spaghetti Monster Flying",
        "className": "fa-solid fa-spaghetti-monster-flying",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionStarAndCrescent",
        "title": "Star And Crescent",
        "className": "fa-solid fa-star-and-crescent",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionStarOfDavid",
        "title": "Star Of David",
        "className": "fa-solid fa-star-of-david",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionSynagogue",
        "title": "Synagogue",
        "className": "fa-solid fa-synagogue",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionToriiGate",
        "title": "Torii Gate",
        "className": "fa-solid fa-torii-gate",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionVihara",
        "title": "Vihara",
        "className": "fa-solid fa-vihara",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ReligionYinYang",
        "title": "Yin Yang",
        "className": "fa-solid fa-yin-yang",
        "type":"fa","categories": [
            "religion"
        ]
    },
    {
        "name": "fa-ScienceAtom",
        "title": "Atom",
        "className": "fa-solid fa-atom",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceBiohazard",
        "title": "Biohazard",
        "className": "fa-solid fa-biohazard",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceBrain",
        "title": "Brain",
        "className": "fa-solid fa-brain",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceCapsules",
        "title": "Capsules",
        "className": "fa-solid fa-capsules",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceCircleRadiation",
        "title": "Circle Radiation",
        "className": "fa-solid fa-circle-radiation",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceClipboardCheck",
        "title": "Clipboard Check",
        "className": "fa-solid fa-clipboard-check",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceDisease",
        "title": "Disease",
        "className": "fa-solid fa-disease",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceDna",
        "title": "Dna",
        "className": "fa-solid fa-dna",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceEyeDropper",
        "title": "Eye Dropper",
        "className": "fa-solid fa-eye-dropper",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-SciencefictionAtom",
        "title": "Sciencefiction Atom",
        "className": "fa-solid fa-atom",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionBookJournalWhills",
        "title": "Sciencefiction Book Journal Whills",
        "className": "fa-solid fa-book-journal-whills",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionExplosion",
        "title": "Sciencefiction Explosion",
        "className": "fa-solid fa-explosion",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionGalacticRepublic",
        "title": "Sciencefiction Galactic Republic",
        "className": "fa-solid fa-galactic-republic",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionGalacticSenate",
        "title": "Sciencefiction Galactic Senate",
        "className": "fa-solid fa-galactic-senate",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionHandSpock",
        "title": "Sciencefiction Hand Spock",
        "className": "fa-solid fa-hand-spock",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionJedi",
        "title": "Sciencefiction Jedi",
        "className": "fa-solid fa-jedi",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionJediOrder",
        "title": "Sciencefiction Jedi Order",
        "className": "fa-solid fa-jedi-order",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionOldRepublic",
        "title": "Sciencefiction Old Republic",
        "className": "fa-solid fa-old-republic",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionRobot",
        "title": "Sciencefiction Robot",
        "className": "fa-solid fa-robot",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionRocket",
        "title": "Sciencefiction Rocket",
        "className": "fa-solid fa-rocket",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionSpaceAwesome",
        "title": "Sciencefiction Space Awesome",
        "className": "fa-solid fa-space-awesome",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-SciencefictionUserAstronaut",
        "title": "Sciencefiction User Astronaut",
        "className": "fa-solid fa-user-astronaut",
        "type":"fa","categories": [
            "science-fiction"
        ]
    },
    {
        "name": "fa-ScienceFilter",
        "title": "Filter",
        "className": "fa-solid fa-filter",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceFire",
        "title": "Fire",
        "className": "fa-solid fa-fire",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceFireFlameCurved",
        "title": "Fire Flame Curved",
        "className": "fa-solid fa-fire-flame-curved",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceFireFlameSimple",
        "title": "Fire Flame Simple",
        "className": "fa-solid fa-fire-flame-simple",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceFlask",
        "title": "Flask",
        "className": "fa-solid fa-flask",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceFlaskVial",
        "title": "Flask Vial",
        "className": "fa-solid fa-flask-vial",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceFrog",
        "title": "Frog",
        "className": "fa-solid fa-frog",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceMagnet",
        "title": "Magnet",
        "className": "fa-solid fa-magnet",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceMicroscope",
        "title": "Microscope",
        "className": "fa-solid fa-microscope",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceMortarPestle",
        "title": "Mortar Pestle",
        "className": "fa-solid fa-mortar-pestle",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-SciencePills",
        "title": "Pills",
        "className": "fa-solid fa-pills",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-SciencePrescriptionBottle",
        "title": "Prescription Bottle",
        "className": "fa-solid fa-prescription-bottle",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceRadiation",
        "title": "Radiation",
        "className": "fa-solid fa-radiation",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceSeedling",
        "title": "Seedling",
        "className": "fa-solid fa-seedling",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceSkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceSquareVirus",
        "title": "Square Virus",
        "className": "fa-solid fa-square-virus",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceSyringe",
        "title": "Syringe",
        "className": "fa-solid fa-syringe",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceTablets",
        "title": "Tablets",
        "className": "fa-solid fa-tablets",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceTemperatureHigh",
        "title": "Temperature High",
        "className": "fa-solid fa-temperature-high",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceTemperatureLow",
        "title": "Temperature Low",
        "className": "fa-solid fa-temperature-low",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceVial",
        "title": "Vial",
        "className": "fa-solid fa-vial",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceVialCircleCheck",
        "title": "Vial Circle Check",
        "className": "fa-solid fa-vial-circle-check",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceVials",
        "title": "Vials",
        "className": "fa-solid fa-vials",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-ScienceVialVirus",
        "title": "Vial Virus",
        "className": "fa-solid fa-vial-virus",
        "type":"fa","categories": [
            "science"
        ]
    },
    {
        "name": "fa-SecurityBan",
        "title": "Ban",
        "className": "fa-solid fa-ban",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityBug",
        "title": "Bug",
        "className": "fa-solid fa-bug",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityBugSlash",
        "title": "Bug Slash",
        "className": "fa-solid fa-bug-slash",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityBuildingLock",
        "title": "Building Lock",
        "className": "fa-solid fa-building-lock",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityBuildingShield",
        "title": "Building Shield",
        "className": "fa-solid fa-building-shield",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityBurst",
        "title": "Burst",
        "className": "fa-solid fa-burst",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityCarOn",
        "title": "Car On",
        "className": "fa-solid fa-car-on",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityDoorClosed",
        "title": "Door Closed",
        "className": "fa-solid fa-door-closed",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityDoorOpen",
        "title": "Door Open",
        "className": "fa-solid fa-door-open",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityDungeon",
        "title": "Dungeon",
        "className": "fa-solid fa-dungeon",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityExplosion",
        "title": "Explosion",
        "className": "fa-solid fa-explosion",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityEye",
        "title": "Eye",
        "className": "fa-solid fa-eye",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityEyeSlash",
        "title": "Eye Slash",
        "className": "fa-solid fa-eye-slash",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityFileContract",
        "title": "File Contract",
        "className": "fa-solid fa-file-contract",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityFileShield",
        "title": "File Shield",
        "className": "fa-solid fa-file-shield",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityFileSignature",
        "title": "File Signature",
        "className": "fa-solid fa-file-signature",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityFingerprint",
        "title": "Fingerprint",
        "className": "fa-solid fa-fingerprint",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityGun",
        "title": "Gun",
        "className": "fa-solid fa-gun",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHandcuffs",
        "title": "Handcuffs",
        "className": "fa-solid fa-handcuffs",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHandsBound",
        "title": "Hands Bound",
        "className": "fa-solid fa-hands-bound",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHandsHoldingChild",
        "title": "Hands Holding Child",
        "className": "fa-solid fa-hands-holding-child",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHandsHoldingCircle",
        "title": "Hands Holding Circle",
        "className": "fa-solid fa-hands-holding-circle",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHouseFire",
        "title": "House Fire",
        "className": "fa-solid fa-house-fire",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityHouseLock",
        "title": "House Lock",
        "className": "fa-solid fa-house-lock",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityIdBadge",
        "title": "Id Badge",
        "className": "fa-solid fa-id-badge",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityIdCard",
        "title": "Id Card",
        "className": "fa-solid fa-id-card",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityIdCardClip",
        "title": "Id Card Clip",
        "className": "fa-solid fa-id-card-clip",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityKey",
        "title": "Key",
        "className": "fa-solid fa-key",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityLandMineOn",
        "title": "Land Mine On",
        "className": "fa-solid fa-land-mine-on",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityLock",
        "title": "Lock",
        "className": "fa-solid fa-lock",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityLockOpen",
        "title": "Lock Open",
        "className": "fa-solid fa-lock-open",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityMarsAndVenusBurst",
        "title": "Mars And Venus Burst",
        "className": "fa-solid fa-mars-and-venus-burst",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityMask",
        "title": "Mask",
        "className": "fa-solid fa-mask",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPassport",
        "title": "Passport",
        "className": "fa-solid fa-passport",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPeoplePulling",
        "title": "People Pulling",
        "className": "fa-solid fa-people-pulling",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPeopleRobbery",
        "title": "People Robbery",
        "className": "fa-solid fa-people-robbery",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonBurst",
        "title": "Person Burst",
        "className": "fa-solid fa-person-burst",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonDressBurst",
        "title": "Person Dress Burst",
        "className": "fa-solid fa-person-dress-burst",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonFallingBurst",
        "title": "Person Falling Burst",
        "className": "fa-solid fa-person-falling-burst",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonHarassing",
        "title": "Person Harassing",
        "className": "fa-solid fa-person-harassing",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonMilitaryPointing",
        "title": "Person Military Pointing",
        "className": "fa-solid fa-person-military-pointing",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonMilitaryRifle",
        "title": "Person Military Rifle",
        "className": "fa-solid fa-person-military-rifle",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonMilitaryToPerson",
        "title": "Person Military To Person",
        "className": "fa-solid fa-person-military-to-person",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonRifle",
        "title": "Person Rifle",
        "className": "fa-solid fa-person-rifle",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonShelter",
        "title": "Person Shelter",
        "className": "fa-solid fa-person-shelter",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityPersonThroughWindow",
        "title": "Person Through Window",
        "className": "fa-solid fa-person-through-window",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityRoadSpikes",
        "title": "Road Spikes",
        "className": "fa-solid fa-road-spikes",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityShield",
        "title": "Shield",
        "className": "fa-solid fa-shield",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityShieldCat",
        "title": "Shield Cat",
        "className": "fa-solid fa-shield-cat",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityShieldDog",
        "title": "Shield Dog",
        "className": "fa-solid fa-shield-dog",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityShieldHalved",
        "title": "Shield Halved",
        "className": "fa-solid fa-shield-halved",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityShieldHeart",
        "title": "Shield Heart",
        "className": "fa-solid fa-shield-heart",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecuritySkullCrossbones",
        "title": "Skull Crossbones",
        "className": "fa-solid fa-skull-crossbones",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecuritySquarePersonConfined",
        "title": "Square Person Confined",
        "className": "fa-solid fa-square-person-confined",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityTowerObservation",
        "title": "Tower Observation",
        "className": "fa-solid fa-tower-observation",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUnlock",
        "title": "Unlock",
        "className": "fa-solid fa-unlock",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUnlockKeyhole",
        "title": "Unlock Keyhole",
        "className": "fa-solid fa-unlock-keyhole",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUserLock",
        "title": "User Lock",
        "className": "fa-solid fa-user-lock",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUserSecret",
        "title": "User Secret",
        "className": "fa-solid fa-user-secret",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityUserShield",
        "title": "User Shield",
        "className": "fa-solid fa-user-shield",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-SecurityVault",
        "title": "Vault",
        "className": "fa-solid fa-vault",
        "type":"fa","categories": [
            "security"
        ]
    },
    {
        "name": "fa-ShapesBookmark",
        "title": "Bookmark",
        "className": "fa-solid fa-bookmark",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesBurst",
        "title": "Burst",
        "className": "fa-solid fa-burst",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCalendar",
        "title": "Calendar",
        "className": "fa-solid fa-calendar",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCertificate",
        "title": "Certificate",
        "className": "fa-solid fa-certificate",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCircle",
        "title": "Circle",
        "className": "fa-solid fa-circle",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCircleHalfStroke",
        "title": "Circle Half Stroke",
        "className": "fa-solid fa-circle-half-stroke",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCloud",
        "title": "Cloud",
        "className": "fa-solid fa-cloud",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesClover",
        "title": "Clover",
        "className": "fa-solid fa-clover",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesComment",
        "title": "Comment",
        "className": "fa-solid fa-comment",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCrown",
        "title": "Crown",
        "className": "fa-solid fa-crown",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesCubesStacked",
        "title": "Cubes Stacked",
        "className": "fa-solid fa-cubes-stacked",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesDiamond",
        "title": "Diamond",
        "className": "fa-solid fa-diamond",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesFile",
        "title": "File",
        "className": "fa-solid fa-file",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesFolder",
        "title": "Folder",
        "className": "fa-solid fa-folder",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesHeartCrack",
        "title": "Heart Crack",
        "className": "fa-solid fa-heart-crack",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesLinesLeaning",
        "title": "Lines Leaning",
        "className": "fa-solid fa-lines-leaning",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesLocationPin",
        "title": "Location Pin",
        "className": "fa-solid fa-location-pin",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesPlay",
        "title": "Play",
        "className": "fa-solid fa-play",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesShapes",
        "title": "",
        "className": "fa-solid fa-shapes",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesShield",
        "title": "Shield",
        "className": "fa-solid fa-shield",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesSquare",
        "title": "Square",
        "className": "fa-solid fa-square",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesStar",
        "title": "Star",
        "className": "fa-solid fa-star",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShapesTicketSimple",
        "title": "Ticket Simple",
        "className": "fa-solid fa-ticket-simple",
        "type":"fa","categories": [
            "shapes"
        ]
    },
    {
        "name": "fa-ShoppingAlipay",
        "title": "Alipay",
        "className": "fa-solid fa-alipay",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingAmazonPay",
        "title": "Amazon Pay",
        "className": "fa-solid fa-amazon-pay",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingApplePay",
        "title": "Apple Pay",
        "className": "fa-solid fa-apple-pay",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBagShopping",
        "title": "Bag",
        "className": "fa-solid fa-bag-shopping",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBarcode",
        "title": "Barcode",
        "className": "fa-solid fa-barcode",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBasketShopping",
        "title": "Basket",
        "className": "fa-solid fa-basket-shopping",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBitcoin",
        "title": "Bitcoin",
        "className": "fa-solid fa-bitcoin",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBookmark",
        "title": "Bookmark",
        "className": "fa-solid fa-bookmark",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBtc",
        "title": "Btc",
        "className": "fa-solid fa-btc",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingBullhorn",
        "title": "Bullhorn",
        "className": "fa-solid fa-bullhorn",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCamera",
        "title": "Camera",
        "className": "fa-solid fa-camera",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCameraRetro",
        "title": "Camera Retro",
        "className": "fa-solid fa-camera-retro",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCartArrowDown",
        "title": "Cart Arrow Down",
        "className": "fa-solid fa-cart-arrow-down",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCartPlus",
        "title": "Cart Plus",
        "className": "fa-solid fa-cart-plus",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCartShopping",
        "title": "Cart",
        "className": "fa-solid fa-cart-shopping",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCashRegister",
        "title": "Cash Register",
        "className": "fa-solid fa-cash-register",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcAmazonPay",
        "title": "Cc Amazon Pay",
        "className": "fa-solid fa-cc-amazon-pay",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcAmex",
        "title": "Cc Amex",
        "className": "fa-solid fa-cc-amex",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcApplePay",
        "title": "Cc Apple Pay",
        "className": "fa-solid fa-cc-apple-pay",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcDinersClub",
        "title": "Cc Diners Club",
        "className": "fa-solid fa-cc-diners-club",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcDiscover",
        "title": "Cc Discover",
        "className": "fa-solid fa-cc-discover",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcJcb",
        "title": "Cc Jcb",
        "className": "fa-solid fa-cc-jcb",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcMastercard",
        "title": "Cc Mastercard",
        "className": "fa-solid fa-cc-mastercard",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcPaypal",
        "title": "Cc Paypal",
        "className": "fa-solid fa-cc-paypal",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcStripe",
        "title": "Cc Stripe",
        "className": "fa-solid fa-cc-stripe",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCcVisa",
        "title": "Cc Visa",
        "className": "fa-solid fa-cc-visa",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCertificate",
        "title": "Certificate",
        "className": "fa-solid fa-certificate",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingCreditCard",
        "title": "Credit Card",
        "className": "fa-solid fa-credit-card",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingEthereum",
        "title": "Ethereum",
        "className": "fa-solid fa-ethereum",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGem",
        "title": "Gem",
        "className": "fa-solid fa-gem",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGift",
        "title": "Gift",
        "className": "fa-solid fa-gift",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGifts",
        "title": "Gifts",
        "className": "fa-solid fa-gifts",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGooglePay",
        "title": "Google Pay",
        "className": "fa-solid fa-google-pay",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingGoogleWallet",
        "title": "Google Wallet",
        "className": "fa-solid fa-google-wallet",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingHandshake",
        "title": "Handshake",
        "className": "fa-solid fa-handshake",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingKey",
        "title": "Key",
        "className": "fa-solid fa-key",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingMoneyCheck",
        "title": "Money Check",
        "className": "fa-solid fa-money-check",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingMoneyCheckDollar",
        "title": "Money Check Dollar",
        "className": "fa-solid fa-money-check-dollar",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingNfcDirectional",
        "title": "Nfc Directional",
        "className": "fa-solid fa-nfc-directional",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingNfcSymbol",
        "title": "Nfc Symbol",
        "className": "fa-solid fa-nfc-symbol",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingPaypal",
        "title": "Paypal",
        "className": "fa-solid fa-paypal",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingPersonBooth",
        "title": "Person Booth",
        "className": "fa-solid fa-person-booth",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingReceipt",
        "title": "Receipt",
        "className": "fa-solid fa-receipt",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingShirt",
        "title": "Shirt",
        "className": "fa-solid fa-shirt",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingShop",
        "title": "Shop",
        "className": "fa-solid fa-shop",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingShopLock",
        "title": "Shop Lock",
        "className": "fa-solid fa-shop-lock",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingShopSlash",
        "title": "Shop Slash",
        "className": "fa-solid fa-shop-slash",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingStar",
        "title": "Star",
        "className": "fa-solid fa-star",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingStore",
        "title": "Store",
        "className": "fa-solid fa-store",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingStoreSlash",
        "title": "Store Slash",
        "className": "fa-solid fa-store-slash",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingStripe",
        "title": "Stripe",
        "className": "fa-solid fa-stripe",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingStripeS",
        "title": "Stripe S",
        "className": "fa-solid fa-stripe-s",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingTag",
        "title": "Tag",
        "className": "fa-solid fa-tag",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingTags",
        "title": "Tags",
        "className": "fa-solid fa-tags",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingThumbsDown",
        "title": "Thumbs Down",
        "className": "fa-solid fa-thumbs-down",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingThumbsUp",
        "title": "Thumbs Up",
        "className": "fa-solid fa-thumbs-up",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingTrophy",
        "title": "Trophy",
        "className": "fa-solid fa-trophy",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-ShoppingTruckFast",
        "title": "Truck Fast",
        "className": "fa-solid fa-truck-fast",
        "type":"fa","categories": [
            "shopping"
        ]
    },
    {
        "name": "fa-SocialBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialCakeCandles",
        "title": "Cake Candles",
        "className": "fa-solid fa-cake-candles",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialCamera",
        "title": "Camera",
        "className": "fa-solid fa-camera",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialCircleUser",
        "title": "Circle User",
        "className": "fa-solid fa-circle-user",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialComment",
        "title": "Comment",
        "className": "fa-solid fa-comment",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialEnvelope",
        "title": "Envelope",
        "className": "fa-solid fa-envelope",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialHashtag",
        "title": "Hashtag",
        "className": "fa-solid fa-hashtag",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialIcons",
        "title": "Icons",
        "className": "fa-solid fa-icons",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialImage",
        "title": "Image",
        "className": "fa-solid fa-image",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialImages",
        "title": "Images",
        "className": "fa-solid fa-images",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialLocationDot",
        "title": "Location Dot",
        "className": "fa-solid fa-location-dot",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialLocationPin",
        "title": "Location Pin",
        "className": "fa-solid fa-location-pin",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialMessage",
        "title": "Message",
        "className": "fa-solid fa-message",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialPhotoFilm",
        "title": "Photo Film",
        "className": "fa-solid fa-photo-film",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialRetweet",
        "title": "Retweet",
        "className": "fa-solid fa-retweet",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialShare",
        "title": "Share",
        "className": "fa-solid fa-share",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialShareFromSquare",
        "title": "Share From Square",
        "className": "fa-solid fa-share-from-square",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialShareNodes",
        "title": "Share Nodes",
        "className": "fa-solid fa-share-nodes",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialSquarePollHorizontal",
        "title": "Square Poll Horizontal",
        "className": "fa-solid fa-square-poll-horizontal",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialSquarePollVertical",
        "title": "Square Poll Vertical",
        "className": "fa-solid fa-square-poll-vertical",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialSquareShareNodes",
        "title": "Square Share Nodes",
        "className": "fa-solid fa-square-share-nodes",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialStar",
        "title": "Star",
        "className": "fa-solid fa-star",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialThumbsDown",
        "title": "Thumbs Down",
        "className": "fa-solid fa-thumbs-down",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialThumbsUp",
        "title": "Thumbs Up",
        "className": "fa-solid fa-thumbs-up",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialThumbtack",
        "title": "Thumbtack",
        "className": "fa-solid fa-thumbtack",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialUser",
        "title": "User",
        "className": "fa-solid fa-user",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialUserGroup",
        "title": "User Group",
        "className": "fa-solid fa-user-group",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialUserPlus",
        "title": "User Plus",
        "className": "fa-solid fa-user-plus",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialUsers",
        "title": "Users",
        "className": "fa-solid fa-users",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SocialVideo",
        "title": "Video",
        "className": "fa-solid fa-video",
        "type":"fa","categories": [
            "social"
        ]
    },
    {
        "name": "fa-SpinnersArrowRotateLeft",
        "title": "Arrow Rotate Left",
        "className": "fa-solid fa-arrow-rotate-left",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersArrowRotateRight",
        "title": "Arrow Rotate Right",
        "className": "fa-solid fa-arrow-rotate-right",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersArrowsRotate",
        "title": "Arrows Rotate",
        "className": "fa-solid fa-arrows-rotate",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersArrowsSpin",
        "title": "Arrows Spin",
        "className": "fa-solid fa-arrows-spin",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersAsterisk",
        "title": "Asterisk",
        "className": "fa-solid fa-asterisk",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersAtom",
        "title": "Atom",
        "className": "fa-solid fa-atom",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersBahai",
        "title": "Bahai",
        "className": "fa-solid fa-bahai",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersCertificate",
        "title": "Certificate",
        "className": "fa-solid fa-certificate",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersCircleNotch",
        "title": "Circle Notch",
        "className": "fa-solid fa-circle-notch",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersCompactDisc",
        "title": "Compact Disc",
        "className": "fa-solid fa-compact-disc",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersCompass",
        "title": "Compass",
        "className": "fa-solid fa-compass",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersCrosshairs",
        "title": "Crosshairs",
        "className": "fa-solid fa-crosshairs",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersDharmachakra",
        "title": "Dharmachakra",
        "className": "fa-solid fa-dharmachakra",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersFan",
        "title": "Fan",
        "className": "fa-solid fa-fan",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersGear",
        "title": "Gear",
        "className": "fa-solid fa-gear",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersHurricane",
        "title": "Hurricane",
        "className": "fa-solid fa-hurricane",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersLifeRing",
        "title": "Life Ring",
        "className": "fa-solid fa-life-ring",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersPalette",
        "title": "Palette",
        "className": "fa-solid fa-palette",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersRing",
        "title": "Ring",
        "className": "fa-solid fa-ring",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersRotate",
        "title": "Rotate",
        "className": "fa-solid fa-rotate",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersRotateLeft",
        "title": "Rotate Left",
        "className": "fa-solid fa-rotate-left",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersRotateRight",
        "title": "Rotate Right",
        "className": "fa-solid fa-rotate-right",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersSlash",
        "title": "Slash",
        "className": "fa-solid fa-slash",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersSnowflake",
        "title": "Snowflake",
        "className": "fa-solid fa-snowflake",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersSpinner",
        "title": "Spinner",
        "className": "fa-solid fa-spinner",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersStroopwafel",
        "title": "Stroopwafel",
        "className": "fa-solid fa-stroopwafel",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersSun",
        "title": "Sun",
        "className": "fa-solid fa-sun",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SpinnersYinYang",
        "title": "Yin Yang",
        "className": "fa-solid fa-yin-yang",
        "type":"fa","categories": [
            "spinners"
        ]
    },
    {
        "name": "fa-SportsFitnessBaseball",
        "title": "Baseball",
        "className": "fa-solid fa-baseball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBaseballBatBall",
        "title": "Baseball Bat Ball",
        "className": "fa-solid fa-baseball-bat-ball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBasketball",
        "title": "Basketball",
        "className": "fa-solid fa-basketball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBicycle",
        "title": "Bicycle",
        "className": "fa-solid fa-bicycle",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBowlingBall",
        "title": "Bowling Ball",
        "className": "fa-solid fa-bowling-ball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessBroomBall",
        "title": "Broom Ball",
        "className": "fa-solid fa-broom-ball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessDumbbell",
        "title": "Dumbbell",
        "className": "fa-solid fa-dumbbell",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessFireFlameCurved",
        "title": "Fire Flame Curved",
        "className": "fa-solid fa-fire-flame-curved",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessFireFlameSimple",
        "title": "Fire Flame Simple",
        "className": "fa-solid fa-fire-flame-simple",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessFootball",
        "title": "Football",
        "className": "fa-solid fa-football",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessFutbol",
        "title": "Futbol",
        "className": "fa-solid fa-futbol",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessGolfBallTee",
        "title": "Golf Ball Tee",
        "className": "fa-solid fa-golf-ball-tee",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessHeart",
        "title": "Heart",
        "className": "fa-solid fa-heart",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessHeartPulse",
        "title": "Heart Pulse",
        "className": "fa-solid fa-heart-pulse",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessHockeyPuck",
        "title": "Hockey Puck",
        "className": "fa-solid fa-hockey-puck",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessMedal",
        "title": "Medal",
        "className": "fa-solid fa-medal",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessMound",
        "title": "Mound",
        "className": "fa-solid fa-mound",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonBiking",
        "title": "Person Biking",
        "className": "fa-solid fa-person-biking",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonHiking",
        "title": "Person Hiking",
        "className": "fa-solid fa-person-hiking",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonRunning",
        "title": "Person Running",
        "className": "fa-solid fa-person-running",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSkating",
        "title": "Person Skating",
        "className": "fa-solid fa-person-skating",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSkiing",
        "title": "Person Skiing",
        "className": "fa-solid fa-person-skiing",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSkiingNordic",
        "title": "Person Skiing Nordic",
        "className": "fa-solid fa-person-skiing-nordic",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSnowboarding",
        "title": "Person Snowboarding",
        "className": "fa-solid fa-person-snowboarding",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonSwimming",
        "title": "Person Swimming",
        "className": "fa-solid fa-person-swimming",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessPersonWalking",
        "title": "Person Walking",
        "className": "fa-solid fa-person-walking",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessRankingStar",
        "title": "Ranking Star",
        "className": "fa-solid fa-ranking-star",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessShoePrints",
        "title": "Shoe Prints",
        "className": "fa-solid fa-shoe-prints",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessSpa",
        "title": "Spa",
        "className": "fa-solid fa-spa",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessStopwatch20",
        "title": "Stopwatch20",
        "className": "fa-solid fa-stopwatch-20",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessTableTennisPaddleBall",
        "title": "Table Tennis Paddle Ball",
        "className": "fa-solid fa-table-tennis-paddle-ball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessVolleyball",
        "title": "Volleyball",
        "className": "fa-solid fa-volleyball",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-SportsFitnessWeightHanging",
        "title": "Weight Hanging",
        "className": "fa-solid fa-weight-hanging",
        "type":"fa","categories": [
            "sports+fitness"
        ]
    },
    {
        "name": "fa-TextformattingAlignCenter",
        "title": "Textformatting Align Center",
        "className": "fa-solid fa-align-center",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingAlignJustify",
        "title": "Textformatting Align Justify",
        "className": "fa-solid fa-align-justify",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingAlignLeft",
        "title": "Textformatting Align Left",
        "className": "fa-solid fa-align-left",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingAlignRight",
        "title": "Textformatting Align Right",
        "className": "fa-solid fa-align-right",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBold",
        "title": "Textformatting Bold",
        "className": "fa-solid fa-bold",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBorderAll",
        "title": "Textformatting Border All",
        "className": "fa-solid fa-border-all",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBorderNone",
        "title": "Textformatting Border None",
        "className": "fa-solid fa-border-none",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingBorderTopLeft",
        "title": "Textformatting Border Top Left",
        "className": "fa-solid fa-border-top-left",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingCheck",
        "title": "Textformatting Check",
        "className": "fa-solid fa-check",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingCheckDouble",
        "title": "Textformatting Check Double",
        "className": "fa-solid fa-check-double",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingCircleCheck",
        "title": "Textformatting Circle Check",
        "className": "fa-solid fa-circle-check",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingFilterCircleXmark",
        "title": "Textformatting Filter Circle Xmark",
        "className": "fa-solid fa-filter-circle-xmark",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingFont",
        "title": "Textformatting Font",
        "className": "fa-solid fa-font",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingHeading",
        "title": "Textformatting Heading",
        "className": "fa-solid fa-heading",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingHighlighter",
        "title": "Textformatting Highlighter",
        "className": "fa-solid fa-highlighter",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingIcons",
        "title": "Textformatting Icons",
        "className": "fa-solid fa-icons",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingICursor",
        "title": "Textformatting ICursor",
        "className": "fa-solid fa-i-cursor",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingIndent",
        "title": "Textformatting Indent",
        "className": "fa-solid fa-indent",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingItalic",
        "title": "Textformatting Italic",
        "className": "fa-solid fa-italic",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingList",
        "title": "Textformatting List",
        "className": "fa-solid fa-list",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingListCheck",
        "title": "Textformatting List Check",
        "className": "fa-solid fa-list-check",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingListOl",
        "title": "Textformatting List Ol",
        "className": "fa-solid fa-list-ol",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingListUl",
        "title": "Textformatting List Ul",
        "className": "fa-solid fa-list-ul",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingOutdent",
        "title": "Textformatting Outdent",
        "className": "fa-solid fa-outdent",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingParagraph",
        "title": "Textformatting Paragraph",
        "className": "fa-solid fa-paragraph",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingRectangleList",
        "title": "Textformatting Rectangle List",
        "className": "fa-solid fa-rectangle-list",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingSpellCheck",
        "title": "Textformatting Spell Check",
        "className": "fa-solid fa-spell-check",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingSquareCheck",
        "title": "Textformatting Square Check",
        "className": "fa-solid fa-square-check",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingStrikethrough",
        "title": "Textformatting Strikethrough",
        "className": "fa-solid fa-strikethrough",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingSubscript",
        "title": "Textformatting Subscript",
        "className": "fa-solid fa-subscript",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingSuperscript",
        "title": "Textformatting Superscript",
        "className": "fa-solid fa-superscript",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTable",
        "title": "Textformatting Table",
        "className": "fa-solid fa-table",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCells",
        "title": "Textformatting Table Cells",
        "className": "fa-solid fa-table-cells",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCellsColumnLock",
        "title": "Textformatting Table Cells Column Lock",
        "className": "fa-solid fa-table-cells-column-lock",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCellsLarge",
        "title": "Textformatting Table Cells Large",
        "className": "fa-solid fa-table-cells-large",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableCellsRowLock",
        "title": "Textformatting Table Cells Row Lock",
        "className": "fa-solid fa-table-cells-row-lock",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableColumns",
        "title": "Textformatting Table Columns",
        "className": "fa-solid fa-table-columns",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTableList",
        "title": "Textformatting Table List",
        "className": "fa-solid fa-table-list",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTextHeight",
        "title": "Textformatting Text Height",
        "className": "fa-solid fa-text-height",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTextSlash",
        "title": "Textformatting Text Slash",
        "className": "fa-solid fa-text-slash",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingTextWidth",
        "title": "Textformatting Text Width",
        "className": "fa-solid fa-text-width",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TextformattingUnderline",
        "title": "Textformatting Underline",
        "className": "fa-solid fa-underline",
        "type":"fa","categories": [
            "text-formatting"
        ]
    },
    {
        "name": "fa-TimeBell",
        "title": "Bell",
        "className": "fa-solid fa-bell",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeBellSlash",
        "title": "Bell Slash",
        "className": "fa-solid fa-bell-slash",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendar",
        "title": "Calendar",
        "className": "fa-solid fa-calendar",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarCheck",
        "title": "Calendar Check",
        "className": "fa-solid fa-calendar-check",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarDay",
        "title": "Calendar Day",
        "className": "fa-solid fa-calendar-day",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarDays",
        "title": "Calendar Days",
        "className": "fa-solid fa-calendar-days",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarMinus",
        "title": "Calendar Minus",
        "className": "fa-solid fa-calendar-minus",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarPlus",
        "title": "Calendar Plus",
        "className": "fa-solid fa-calendar-plus",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarWeek",
        "title": "Calendar Week",
        "className": "fa-solid fa-calendar-week",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeCalendarXmark",
        "title": "Calendar Xmark",
        "className": "fa-solid fa-calendar-xmark",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeClock",
        "title": "Clock",
        "className": "fa-solid fa-clock",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglass",
        "title": "Hourglass",
        "className": "fa-solid fa-hourglass",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglassEnd",
        "title": "Hourglass End",
        "className": "fa-solid fa-hourglass-end",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglassHalf",
        "title": "Hourglass Half",
        "className": "fa-solid fa-hourglass-half",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeHourglassStart",
        "title": "Hourglass Start",
        "className": "fa-solid fa-hourglass-start",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeStopwatch",
        "title": "Stopwatch",
        "className": "fa-solid fa-stopwatch",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-TimeStopwatch20",
        "title": "Stopwatch20",
        "className": "fa-solid fa-stopwatch-20",
        "type":"fa","categories": [
            "time"
        ]
    },
    {
        "name": "fa-ToggleBullseye",
        "title": "Bullseye",
        "className": "fa-solid fa-bullseye",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleCircle",
        "title": "Circle",
        "className": "fa-solid fa-circle",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleCircleCheck",
        "title": "Circle Check",
        "className": "fa-solid fa-circle-check",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleCircleDot",
        "title": "Circle Dot",
        "className": "fa-solid fa-circle-dot",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleLocationCrosshairs",
        "title": "Location Crosshairs",
        "className": "fa-solid fa-location-crosshairs",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleMicrophone",
        "title": "Microphone",
        "className": "fa-solid fa-microphone",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleMicrophoneSlash",
        "title": "Microphone Slash",
        "className": "fa-solid fa-microphone-slash",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-TogglePlaneUp",
        "title": "Plane Up",
        "className": "fa-solid fa-plane-up",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleSignal",
        "title": "Signal",
        "className": "fa-solid fa-signal",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleStar",
        "title": "Star",
        "className": "fa-solid fa-star",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleStarHalf",
        "title": "Star Half",
        "className": "fa-solid fa-star-half",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleStarHalfStroke",
        "title": "Star Half Stroke",
        "className": "fa-solid fa-star-half-stroke",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleToggleOff",
        "title": "Off",
        "className": "fa-solid fa-toggle-off",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleToggleOn",
        "title": "On",
        "className": "fa-solid fa-toggle-on",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-ToggleWifi",
        "title": "Wifi",
        "className": "fa-solid fa-wifi",
        "type":"fa","categories": [
            "toggle"
        ]
    },
    {
        "name": "fa-TransportationBabyCarriage",
        "title": "Baby Carriage",
        "className": "fa-solid fa-baby-carriage",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationBicycle",
        "title": "Bicycle",
        "className": "fa-solid fa-bicycle",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationBus",
        "title": "Bus",
        "className": "fa-solid fa-bus",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationBusSimple",
        "title": "Bus Simple",
        "className": "fa-solid fa-bus-simple",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCableCar",
        "title": "Cable Car",
        "className": "fa-solid fa-cable-car",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCarBurst",
        "title": "Car Burst",
        "className": "fa-solid fa-car-burst",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCarRear",
        "title": "Car Rear",
        "className": "fa-solid fa-car-rear",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCarSide",
        "title": "Car Side",
        "className": "fa-solid fa-car-side",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCartShopping",
        "title": "Cart Shopping",
        "className": "fa-solid fa-cart-shopping",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationCarTunnel",
        "title": "Car Tunnel",
        "className": "fa-solid fa-car-tunnel",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationFerry",
        "title": "Ferry",
        "className": "fa-solid fa-ferry",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationHelicopter",
        "title": "Helicopter",
        "className": "fa-solid fa-helicopter",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationHorse",
        "title": "Horse",
        "className": "fa-solid fa-horse",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationJetFighter",
        "title": "Jet Fighter",
        "className": "fa-solid fa-jet-fighter",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationJetFighterUp",
        "title": "Jet Fighter Up",
        "className": "fa-solid fa-jet-fighter-up",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationMotorcycle",
        "title": "Motorcycle",
        "className": "fa-solid fa-motorcycle",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationMound",
        "title": "Mound",
        "className": "fa-solid fa-mound",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationPaperPlane",
        "title": "Paper Plane",
        "className": "fa-solid fa-paper-plane",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationPlane",
        "title": "Plane",
        "className": "fa-solid fa-plane",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationPlaneSlash",
        "title": "Plane Slash",
        "className": "fa-solid fa-plane-slash",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationPlaneUp",
        "title": "Plane Up",
        "className": "fa-solid fa-plane-up",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationRoad",
        "title": "Road",
        "className": "fa-solid fa-road",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationRoadBarrier",
        "title": "Road Barrier",
        "className": "fa-solid fa-road-barrier",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationRoadSpikes",
        "title": "Road Spikes",
        "className": "fa-solid fa-road-spikes",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationRocket",
        "title": "Rocket",
        "className": "fa-solid fa-rocket",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationShuttleSpace",
        "title": "Shuttle Space",
        "className": "fa-solid fa-shuttle-space",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationSleigh",
        "title": "Sleigh",
        "className": "fa-solid fa-sleigh",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationSnowplow",
        "title": "Snowplow",
        "className": "fa-solid fa-snowplow",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTaxi",
        "title": "Taxi",
        "className": "fa-solid fa-taxi",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTractor",
        "title": "Tractor",
        "className": "fa-solid fa-tractor",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTrain",
        "title": "Train",
        "className": "fa-solid fa-train",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTrainSubway",
        "title": "Train Subway",
        "className": "fa-solid fa-train-subway",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTrainTram",
        "title": "Train Tram",
        "className": "fa-solid fa-train-tram",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckArrowRight",
        "title": "Truck Arrow Right",
        "className": "fa-solid fa-truck-arrow-right",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckDroplet",
        "title": "Truck Droplet",
        "className": "fa-solid fa-truck-droplet",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckField",
        "title": "Truck Field",
        "className": "fa-solid fa-truck-field",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckFieldUn",
        "title": "Truck Field Un",
        "className": "fa-solid fa-truck-field-un",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckFront",
        "title": "Truck Front",
        "className": "fa-solid fa-truck-front",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckMonster",
        "title": "Truck Monster",
        "className": "fa-solid fa-truck-monster",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckPickup",
        "title": "Truck Pickup",
        "className": "fa-solid fa-truck-pickup",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationTruckPlane",
        "title": "Truck Plane",
        "className": "fa-solid fa-truck-plane",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationVanShuttle",
        "title": "Van Shuttle",
        "className": "fa-solid fa-van-shuttle",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TransportationWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "transportation"
        ]
    },
    {
        "name": "fa-TravelHotelBabyCarriage",
        "title": "Baby Carriage",
        "className": "fa-solid fa-baby-carriage",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelBicycle",
        "title": "Bicycle",
        "className": "fa-solid fa-bicycle",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelBus",
        "title": "Bus",
        "className": "fa-solid fa-bus",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelBusSimple",
        "title": "Bus Simple",
        "className": "fa-solid fa-bus-simple",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCableCar",
        "title": "Cable Car",
        "className": "fa-solid fa-cable-car",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCar",
        "title": "Car",
        "className": "fa-solid fa-car",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCarBurst",
        "title": "Car Burst",
        "className": "fa-solid fa-car-burst",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCarRear",
        "title": "Car Rear",
        "className": "fa-solid fa-car-rear",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCarSide",
        "title": "Car Side",
        "className": "fa-solid fa-car-side",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCartShopping",
        "title": "Cart Shopping",
        "className": "fa-solid fa-cart-shopping",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelCarTunnel",
        "title": "Car Tunnel",
        "className": "fa-solid fa-car-tunnel",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelFerry",
        "title": "Ferry",
        "className": "fa-solid fa-ferry",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelHelicopter",
        "title": "Helicopter",
        "className": "fa-solid fa-helicopter",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelHorse",
        "title": "Horse",
        "className": "fa-solid fa-horse",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelJetFighter",
        "title": "Jet Fighter",
        "className": "fa-solid fa-jet-fighter",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelJetFighterUp",
        "title": "Jet Fighter Up",
        "className": "fa-solid fa-jet-fighter-up",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelMotorcycle",
        "title": "Motorcycle",
        "className": "fa-solid fa-motorcycle",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelMound",
        "title": "Mound",
        "className": "fa-solid fa-mound",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelPaperPlane",
        "title": "Paper Plane",
        "className": "fa-solid fa-paper-plane",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelPlane",
        "title": "Plane",
        "className": "fa-solid fa-plane",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelPlaneSlash",
        "title": "Plane Slash",
        "className": "fa-solid fa-plane-slash",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelPlaneUp",
        "title": "Plane Up",
        "className": "fa-solid fa-plane-up",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelRoad",
        "title": "Road",
        "className": "fa-solid fa-road",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelRoadBarrier",
        "title": "Road Barrier",
        "className": "fa-solid fa-road-barrier",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelRoadSpikes",
        "title": "Road Spikes",
        "className": "fa-solid fa-road-spikes",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelRocket",
        "title": "Rocket",
        "className": "fa-solid fa-rocket",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelSailboat",
        "title": "Sailboat",
        "className": "fa-solid fa-sailboat",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelShip",
        "title": "Ship",
        "className": "fa-solid fa-ship",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelShuttleSpace",
        "title": "Shuttle Space",
        "className": "fa-solid fa-shuttle-space",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelSleigh",
        "title": "Sleigh",
        "className": "fa-solid fa-sleigh",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelSnowplow",
        "title": "Snowplow",
        "className": "fa-solid fa-snowplow",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTaxi",
        "title": "Taxi",
        "className": "fa-solid fa-taxi",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTractor",
        "title": "Tractor",
        "className": "fa-solid fa-tractor",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTrain",
        "title": "Train",
        "className": "fa-solid fa-train",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTrainSubway",
        "title": "Train Subway",
        "className": "fa-solid fa-train-subway",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTrainTram",
        "title": "Train Tram",
        "className": "fa-solid fa-train-tram",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruck",
        "title": "Truck",
        "className": "fa-solid fa-truck",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckArrowRight",
        "title": "Truck Arrow Right",
        "className": "fa-solid fa-truck-arrow-right",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckDroplet",
        "title": "Truck Droplet",
        "className": "fa-solid fa-truck-droplet",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckField",
        "title": "Truck Field",
        "className": "fa-solid fa-truck-field",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckFieldUn",
        "title": "Truck Field Un",
        "className": "fa-solid fa-truck-field-un",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckFront",
        "title": "Truck Front",
        "className": "fa-solid fa-truck-front",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckMedical",
        "title": "Truck Medical",
        "className": "fa-solid fa-truck-medical",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckMonster",
        "title": "Truck Monster",
        "className": "fa-solid fa-truck-monster",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckPickup",
        "title": "Truck Pickup",
        "className": "fa-solid fa-truck-pickup",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelTruckPlane",
        "title": "Truck Plane",
        "className": "fa-solid fa-truck-plane",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelVanShuttle",
        "title": "Van Shuttle",
        "className": "fa-solid fa-van-shuttle",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-TravelHotelWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "travel+hotel"
        ]
    },
    {
        "name": "fa-UsersPeopleAddressBook",
        "title": "Address Book",
        "className": "fa-solid fa-address-book",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleAddressCard",
        "title": "Address Card",
        "className": "fa-solid fa-address-card",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleArrowsDownToPeople",
        "title": "Arrows Down To People",
        "className": "fa-solid fa-arrows-down-to-people",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleBaby",
        "title": "Baby",
        "className": "fa-solid fa-baby",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleBed",
        "title": "Bed",
        "className": "fa-solid fa-bed",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleChalkboardUser",
        "title": "Chalkboard User",
        "className": "fa-solid fa-chalkboard-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleChild",
        "title": "Child",
        "className": "fa-solid fa-child",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleChildDress",
        "title": "Child Dress",
        "className": "fa-solid fa-child-dress",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleChildReaching",
        "title": "Child Reaching",
        "className": "fa-solid fa-child-reaching",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleChildren",
        "title": "Children",
        "className": "fa-solid fa-children",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleCircleUser",
        "title": "Circle User",
        "className": "fa-solid fa-circle-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleClipboardUser",
        "title": "Clipboard User",
        "className": "fa-solid fa-clipboard-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleElevator",
        "title": "Elevator",
        "className": "fa-solid fa-elevator",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleFaceFrown",
        "title": "Face Frown",
        "className": "fa-solid fa-face-frown",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleFaceMeh",
        "title": "Face Meh",
        "className": "fa-solid fa-face-meh",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleFaceSmile",
        "title": "Face Smile",
        "className": "fa-solid fa-face-smile",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHeadSideCough",
        "title": "Head Side Cough",
        "className": "fa-solid fa-head-side-cough",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHeadSideCoughSlash",
        "title": "Head Side Cough Slash",
        "className": "fa-solid fa-head-side-cough-slash",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHeadSideMask",
        "title": "Head Side Mask",
        "className": "fa-solid fa-head-side-mask",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHeadSideVirus",
        "title": "Head Side Virus",
        "className": "fa-solid fa-head-side-virus",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHospitalUser",
        "title": "Hospital User",
        "className": "fa-solid fa-hospital-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHotTubPerson",
        "title": "Hot Tub Person",
        "className": "fa-solid fa-hot-tub-person",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHouseChimneyUser",
        "title": "House Chimney User",
        "className": "fa-solid fa-house-chimney-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleHouseUser",
        "title": "House User",
        "className": "fa-solid fa-house-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleIdBadge",
        "title": "Id Badge",
        "className": "fa-solid fa-id-badge",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleIdCard",
        "title": "Id Card",
        "className": "fa-solid fa-id-card",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleIdCardClip",
        "title": "Id Card Clip",
        "className": "fa-solid fa-id-card-clip",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleImagePortrait",
        "title": "Image Portrait",
        "className": "fa-solid fa-image-portrait",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleMarsAndVenusBurst",
        "title": "Mars And Venus Burst",
        "className": "fa-solid fa-mars-and-venus-burst",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeopleArrows",
        "title": "People Arrows",
        "className": "fa-solid fa-people-arrows",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeopleCarryBox",
        "title": "People Carry Box",
        "className": "fa-solid fa-people-carry-box",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeopleGroup",
        "title": "People Group",
        "className": "fa-solid fa-people-group",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeopleLine",
        "title": "People Line",
        "className": "fa-solid fa-people-line",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeoplePulling",
        "title": "People Pulling",
        "className": "fa-solid fa-people-pulling",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeopleRobbery",
        "title": "People Robbery",
        "className": "fa-solid fa-people-robbery",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePeopleRoof",
        "title": "People Roof",
        "className": "fa-solid fa-people-roof",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePerson",
        "title": "Person",
        "className": "fa-solid fa-person",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonArrowDownToLine",
        "title": "Person Arrow Down To Line",
        "className": "fa-solid fa-person-arrow-down-to-line",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonArrowUpFromLine",
        "title": "Person Arrow Up From Line",
        "className": "fa-solid fa-person-arrow-up-from-line",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonBiking",
        "title": "Person Biking",
        "className": "fa-solid fa-person-biking",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonBooth",
        "title": "Person Booth",
        "className": "fa-solid fa-person-booth",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonBreastfeeding",
        "title": "Person Breastfeeding",
        "className": "fa-solid fa-person-breastfeeding",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonBurst",
        "title": "Person Burst",
        "className": "fa-solid fa-person-burst",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCane",
        "title": "Person Cane",
        "className": "fa-solid fa-person-cane",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonChalkboard",
        "title": "Person Chalkboard",
        "className": "fa-solid fa-person-chalkboard",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCircleCheck",
        "title": "Person Circle Check",
        "className": "fa-solid fa-person-circle-check",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCircleExclamation",
        "title": "Person Circle Exclamation",
        "className": "fa-solid fa-person-circle-exclamation",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCircleMinus",
        "title": "Person Circle Minus",
        "className": "fa-solid fa-person-circle-minus",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCirclePlus",
        "title": "Person Circle Plus",
        "className": "fa-solid fa-person-circle-plus",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCircleQuestion",
        "title": "Person Circle Question",
        "className": "fa-solid fa-person-circle-question",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonCircleXmark",
        "title": "Person Circle Xmark",
        "className": "fa-solid fa-person-circle-xmark",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonDigging",
        "title": "Person Digging",
        "className": "fa-solid fa-person-digging",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonDotsFromLine",
        "title": "Person Dots From Line",
        "className": "fa-solid fa-person-dots-from-line",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonDress",
        "title": "Person Dress",
        "className": "fa-solid fa-person-dress",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonDressBurst",
        "title": "Person Dress Burst",
        "className": "fa-solid fa-person-dress-burst",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonDrowning",
        "title": "Person Drowning",
        "className": "fa-solid fa-person-drowning",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonFalling",
        "title": "Person Falling",
        "className": "fa-solid fa-person-falling",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonFallingBurst",
        "title": "Person Falling Burst",
        "className": "fa-solid fa-person-falling-burst",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonHalfDress",
        "title": "Person Half Dress",
        "className": "fa-solid fa-person-half-dress",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonHarassing",
        "title": "Person Harassing",
        "className": "fa-solid fa-person-harassing",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonHiking",
        "title": "Person Hiking",
        "className": "fa-solid fa-person-hiking",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonMilitaryPointing",
        "title": "Person Military Pointing",
        "className": "fa-solid fa-person-military-pointing",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonMilitaryRifle",
        "title": "Person Military Rifle",
        "className": "fa-solid fa-person-military-rifle",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonMilitaryToPerson",
        "title": "Person Military To Person",
        "className": "fa-solid fa-person-military-to-person",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonPraying",
        "title": "Person Praying",
        "className": "fa-solid fa-person-praying",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonPregnant",
        "title": "Person Pregnant",
        "className": "fa-solid fa-person-pregnant",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonRays",
        "title": "Person Rays",
        "className": "fa-solid fa-person-rays",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonRifle",
        "title": "Person Rifle",
        "className": "fa-solid fa-person-rifle",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonRunning",
        "title": "Person Running",
        "className": "fa-solid fa-person-running",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonShelter",
        "title": "Person Shelter",
        "className": "fa-solid fa-person-shelter",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonSkating",
        "title": "Person Skating",
        "className": "fa-solid fa-person-skating",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonSkiing",
        "title": "Person Skiing",
        "className": "fa-solid fa-person-skiing",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonSkiingNordic",
        "title": "Person Skiing Nordic",
        "className": "fa-solid fa-person-skiing-nordic",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonSnowboarding",
        "title": "Person Snowboarding",
        "className": "fa-solid fa-person-snowboarding",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonSwimming",
        "title": "Person Swimming",
        "className": "fa-solid fa-person-swimming",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonThroughWindow",
        "title": "Person Through Window",
        "className": "fa-solid fa-person-through-window",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonWalking",
        "title": "Person Walking",
        "className": "fa-solid fa-person-walking",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonWalkingArrowLoopLeft",
        "title": "Person Walking Arrow Loop Left",
        "className": "fa-solid fa-person-walking-arrow-loop-left",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonWalkingArrowRight",
        "title": "Person Walking Arrow Right",
        "className": "fa-solid fa-person-walking-arrow-right",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonWalkingDashedLineArrowRight",
        "title": "Person Walking Dashed Line Arrow Right",
        "className": "fa-solid fa-person-walking-dashed-line-arrow-right",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonWalkingLuggage",
        "title": "Person Walking Luggage",
        "className": "fa-solid fa-person-walking-luggage",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePersonWalkingWithCane",
        "title": "Person Walking With Cane",
        "className": "fa-solid fa-person-walking-with-cane",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeoplePoo",
        "title": "Poo",
        "className": "fa-solid fa-poo",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleRestroom",
        "title": "Restroom",
        "className": "fa-solid fa-restroom",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleSkull",
        "title": "Skull",
        "className": "fa-solid fa-skull",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleSquarePersonConfined",
        "title": "Square Person Confined",
        "className": "fa-solid fa-square-person-confined",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleStreetView",
        "title": "Street View",
        "className": "fa-solid fa-street-view",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUser",
        "title": "User",
        "className": "fa-solid fa-user",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserAstronaut",
        "title": "User Astronaut",
        "className": "fa-solid fa-user-astronaut",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserCheck",
        "title": "User Check",
        "className": "fa-solid fa-user-check",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserClock",
        "title": "User Clock",
        "className": "fa-solid fa-user-clock",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserDoctor",
        "title": "User Doctor",
        "className": "fa-solid fa-user-doctor",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserGear",
        "title": "User Gear",
        "className": "fa-solid fa-user-gear",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserGraduate",
        "title": "User Graduate",
        "className": "fa-solid fa-user-graduate",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserGroup",
        "title": "User Group",
        "className": "fa-solid fa-user-group",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserInjured",
        "title": "User Injured",
        "className": "fa-solid fa-user-injured",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserLarge",
        "title": "User Large",
        "className": "fa-solid fa-user-large",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserLargeSlash",
        "title": "User Large Slash",
        "className": "fa-solid fa-user-large-slash",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserLock",
        "title": "User Lock",
        "className": "fa-solid fa-user-lock",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserMinus",
        "title": "User Minus",
        "className": "fa-solid fa-user-minus",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserNinja",
        "title": "User Ninja",
        "className": "fa-solid fa-user-ninja",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserNurse",
        "title": "User Nurse",
        "className": "fa-solid fa-user-nurse",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserPen",
        "title": "User Pen",
        "className": "fa-solid fa-user-pen",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserPlus",
        "title": "User Plus",
        "className": "fa-solid fa-user-plus",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsers",
        "title": "Users",
        "className": "fa-solid fa-users",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersBetweenLines",
        "title": "Users Between Lines",
        "className": "fa-solid fa-users-between-lines",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserSecret",
        "title": "User Secret",
        "className": "fa-solid fa-user-secret",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersGear",
        "title": "Users Gear",
        "className": "fa-solid fa-users-gear",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserShield",
        "title": "User Shield",
        "className": "fa-solid fa-user-shield",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserSlash",
        "title": "User Slash",
        "className": "fa-solid fa-user-slash",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersLine",
        "title": "Users Line",
        "className": "fa-solid fa-users-line",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersRays",
        "title": "Users Rays",
        "className": "fa-solid fa-users-rays",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersRectangle",
        "title": "Users Rectangle",
        "className": "fa-solid fa-users-rectangle",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersSlash",
        "title": "Users Slash",
        "className": "fa-solid fa-users-slash",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUsersViewfinder",
        "title": "Users Viewfinder",
        "className": "fa-solid fa-users-viewfinder",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserTag",
        "title": "User Tag",
        "className": "fa-solid fa-user-tag",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserTie",
        "title": "User Tie",
        "className": "fa-solid fa-user-tie",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleUserXmark",
        "title": "User Xmark",
        "className": "fa-solid fa-user-xmark",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleWheelchair",
        "title": "Wheelchair",
        "className": "fa-solid fa-wheelchair",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-UsersPeopleWheelchairMove",
        "title": "Wheelchair Move",
        "className": "fa-solid fa-wheelchair-move",
        "type":"fa","categories": [
            "users+people"
        ]
    },
    {
        "name": "fa-WeatherBolt",
        "title": "Bolt",
        "className": "fa-solid fa-bolt",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherBoltLightning",
        "title": "Bolt Lightning",
        "className": "fa-solid fa-bolt-lightning",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloud",
        "title": "Cloud",
        "className": "fa-solid fa-cloud",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudBolt",
        "title": "Cloud Bolt",
        "className": "fa-solid fa-cloud-bolt",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudMeatball",
        "title": "Cloud Meatball",
        "className": "fa-solid fa-cloud-meatball",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudMoon",
        "title": "Cloud Moon",
        "className": "fa-solid fa-cloud-moon",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudMoonRain",
        "title": "Cloud Moon Rain",
        "className": "fa-solid fa-cloud-moon-rain",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudRain",
        "title": "Cloud Rain",
        "className": "fa-solid fa-cloud-rain",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudShowersHeavy",
        "title": "Cloud Showers Heavy",
        "className": "fa-solid fa-cloud-showers-heavy",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudShowersWater",
        "title": "Cloud Showers Water",
        "className": "fa-solid fa-cloud-showers-water",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudSun",
        "title": "Cloud Sun",
        "className": "fa-solid fa-cloud-sun",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherCloudSunRain",
        "title": "Cloud Sun Rain",
        "className": "fa-solid fa-cloud-sun-rain",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherHouseTsunami",
        "title": "House Tsunami",
        "className": "fa-solid fa-house-tsunami",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherHurricane",
        "title": "Hurricane",
        "className": "fa-solid fa-hurricane",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherIcicles",
        "title": "Icicles",
        "className": "fa-solid fa-icicles",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherMeteor",
        "title": "Meteor",
        "className": "fa-solid fa-meteor",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherMoon",
        "title": "Moon",
        "className": "fa-solid fa-moon",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherPooStorm",
        "title": "Poo Storm",
        "className": "fa-solid fa-poo-storm",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherRainbow",
        "title": "Rainbow",
        "className": "fa-solid fa-rainbow",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherSmog",
        "title": "Smog",
        "className": "fa-solid fa-smog",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherSnowflake",
        "title": "Snowflake",
        "className": "fa-solid fa-snowflake",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherSun",
        "title": "Sun",
        "className": "fa-solid fa-sun",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherSunPlantWilt",
        "title": "Sun Plant Wilt",
        "className": "fa-solid fa-sun-plant-wilt",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureArrowDown",
        "title": "Temperature Arrow Down",
        "className": "fa-solid fa-temperature-arrow-down",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureArrowUp",
        "title": "Temperature Arrow Up",
        "className": "fa-solid fa-temperature-arrow-up",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureEmpty",
        "title": "Temperature Empty",
        "className": "fa-solid fa-temperature-empty",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureFull",
        "title": "Temperature Full",
        "className": "fa-solid fa-temperature-full",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureHalf",
        "title": "Temperature Half",
        "className": "fa-solid fa-temperature-half",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureHigh",
        "title": "Temperature High",
        "className": "fa-solid fa-temperature-high",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureLow",
        "title": "Temperature Low",
        "className": "fa-solid fa-temperature-low",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureQuarter",
        "title": "Temperature Quarter",
        "className": "fa-solid fa-temperature-quarter",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTemperatureThreeQuarters",
        "title": "Temperature Three Quarters",
        "className": "fa-solid fa-temperature-three-quarters",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherTornado",
        "title": "Tornado",
        "className": "fa-solid fa-tornado",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherUmbrella",
        "title": "Umbrella",
        "className": "fa-solid fa-umbrella",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherVolcano",
        "title": "Volcano",
        "className": "fa-solid fa-volcano",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherWater",
        "title": "Water",
        "className": "fa-solid fa-water",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WeatherWind",
        "title": "Wind",
        "className": "fa-solid fa-wind",
        "type":"fa","categories": [
            "weather"
        ]
    },
    {
        "name": "fa-WritingBlog",
        "title": "Blog",
        "className": "fa-solid fa-blog",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingBook",
        "title": "Book",
        "className": "fa-solid fa-book",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingBookBookmark",
        "title": "Book Bookmark",
        "className": "fa-solid fa-book-bookmark",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingBookmark",
        "title": "Bookmark",
        "className": "fa-solid fa-bookmark",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingBoxArchive",
        "title": "Box Archive",
        "className": "fa-solid fa-box-archive",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingEnvelope",
        "title": "Envelope",
        "className": "fa-solid fa-envelope",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingEnvelopeOpen",
        "title": "Envelope Open",
        "className": "fa-solid fa-envelope-open",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingEraser",
        "title": "Eraser",
        "className": "fa-solid fa-eraser",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingFile",
        "title": "File",
        "className": "fa-solid fa-file",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingFileLines",
        "title": "File Lines",
        "className": "fa-solid fa-file-lines",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingFolder",
        "title": "Folder",
        "className": "fa-solid fa-folder",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingFolderOpen",
        "title": "Folder Open",
        "className": "fa-solid fa-folder-open",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingKeyboard",
        "title": "Keyboard",
        "className": "fa-solid fa-keyboard",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingNewspaper",
        "title": "Newspaper",
        "className": "fa-solid fa-newspaper",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingNotdef",
        "title": "Notdef",
        "className": "fa-solid fa-notdef",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingNoteSticky",
        "title": "Note Sticky",
        "className": "fa-solid fa-note-sticky",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPaperclip",
        "title": "Paperclip",
        "className": "fa-solid fa-paperclip",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPaperPlane",
        "title": "Paper Plane",
        "className": "fa-solid fa-paper-plane",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingParagraph",
        "title": "Paragraph",
        "className": "fa-solid fa-paragraph",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPen",
        "title": "Pen",
        "className": "fa-solid fa-pen",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPencil",
        "title": "Pencil",
        "className": "fa-solid fa-pencil",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPenClip",
        "title": "Pen Clip",
        "className": "fa-solid fa-pen-clip",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingPenToSquare",
        "title": "Pen To Square",
        "className": "fa-solid fa-pen-to-square",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingQuoteLeft",
        "title": "Quote Left",
        "className": "fa-solid fa-quote-left",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingQuoteRight",
        "title": "Quote Right",
        "className": "fa-solid fa-quote-right",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingSignature",
        "title": "Signature",
        "className": "fa-solid fa-signature",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingSquarePen",
        "title": "Square Pen",
        "className": "fa-solid fa-square-pen",
        "type":"fa","categories": [
            "writing"
        ]
    },
    {
        "name": "fa-WritingThumbtack",
        "title": "Thumbtack",
        "className": "fa-solid fa-thumbtack",
        "type":"fa","categories": [
            "writing"
        ]
    }
],
"type":"fa","categories": [
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
