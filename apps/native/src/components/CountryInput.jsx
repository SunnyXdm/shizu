import React, { useEffect } from 'react'
import { TextInput, View, Dimensions, Text } from 'react-native';
const { width, height } = Dimensions.get('window');
const inputWidth = width * 0.8;

const CountryInput = ({ dialCode }) => {
    const [country, setCountry] = React.useState("Country");

    useEffect(() => {
        if (dialCode !== null) {
            console.log('dialCode:', dialCode)
            setCountry(countries?.[dialCode]?.name ?? 'Invalid country code')
        }
    }, [dialCode])

    return <View style={{
        width: inputWidth,
        height: 50,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#c0f7a6',
        paddingHorizontal: 15,
        flexDirection: 'row',
    }}>
        <Text style={{
            fontSize: 16,
            color: 'white',
            marginRight: 10,
            alignSelf: 'center',
        }}>{country}</Text>
    </View>
}

export default CountryInput


const countries = {
    "1": {
        "name": "United States",
        "dial_code": "1",
        "code": "US"
    },
    "7": {
        "name": "Russia",
        "dial_code": "7",
        "code": "RU"
    },
    "20": {
        "name": "Egypt",
        "dial_code": "20",
        "code": "EG"
    },
    "27": {
        "name": "South Africa",
        "dial_code": "27",
        "code": "ZA"
    },
    "30": {
        "name": "Greece",
        "dial_code": "30",
        "code": "GR"
    },
    "31": {
        "name": "Netherlands",
        "dial_code": "31",
        "code": "NL"
    },
    "32": {
        "name": "Belgium",
        "dial_code": "32",
        "code": "BE"
    },
    "33": {
        "name": "France",
        "dial_code": "33",
        "code": "FR"
    },
    "34": {
        "name": "Spain",
        "dial_code": "34",
        "code": "ES"
    },
    "36": {
        "name": "Hungary",
        "dial_code": "36",
        "code": "HU"
    },
    "39": {
        "name": "Italy",
        "dial_code": "39",
        "code": "IT"
    },
    "40": {
        "name": "Romania",
        "dial_code": "40",
        "code": "RO"
    },
    "41": {
        "name": "Switzerland",
        "dial_code": "41",
        "code": "CH"
    },
    "43": {
        "name": "Austria",
        "dial_code": "43",
        "code": "AT"
    },
    "44": {
        "name": "United Kingdom",
        "dial_code": "44",
        "code": "GB"
    },
    "45": {
        "name": "Denmark",
        "dial_code": "45",
        "code": "DK"
    },
    "46": {
        "name": "Sweden",
        "dial_code": "46",
        "code": "SE"
    },
    "47": {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "47",
        "code": "SJ"
    },
    "48": {
        "name": "Poland",
        "dial_code": "48",
        "code": "PL"
    },
    "49": {
        "name": "Germany",
        "dial_code": "49",
        "code": "DE"
    },
    "51": {
        "name": "Peru",
        "dial_code": "51",
        "code": "PE"
    },
    "52": {
        "name": "Mexico",
        "dial_code": "52",
        "code": "MX"
    },
    "53": {
        "name": "Cuba",
        "dial_code": "53",
        "code": "CU"
    },
    "54": {
        "name": "Argentina",
        "dial_code": "54",
        "code": "AR"
    },
    "55": {
        "name": "Brazil",
        "dial_code": "55",
        "code": "BR"
    },
    "56": {
        "name": "Chile",
        "dial_code": "56",
        "code": "CL"
    },
    "57": {
        "name": "Colombia",
        "dial_code": "57",
        "code": "CO"
    },
    "58": {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "58",
        "code": "VE"
    },
    "60": {
        "name": "Malaysia",
        "dial_code": "60",
        "code": "MY"
    },
    "61": {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "61",
        "code": "CC"
    },
    "62": {
        "name": "Indonesia",
        "dial_code": "62",
        "code": "ID"
    },
    "63": {
        "name": "Philippines",
        "dial_code": "63",
        "code": "PH"
    },
    "64": {
        "name": "New Zealand",
        "dial_code": "64",
        "code": "NZ"
    },
    "65": {
        "name": "Singapore",
        "dial_code": "65",
        "code": "SG"
    },
    "66": {
        "name": "Thailand",
        "dial_code": "66",
        "code": "TH"
    },
    "77": {
        "name": "Kazakhstan",
        "dial_code": "77",
        "code": "KZ"
    },
    "81": {
        "name": "Japan",
        "dial_code": "81",
        "code": "JP"
    },
    "82": {
        "name": "Korea, Republic of South Korea",
        "dial_code": "82",
        "code": "KR"
    },
    "84": {
        "name": "Vietnam",
        "dial_code": "84",
        "code": "VN"
    },
    "86": {
        "name": "China",
        "dial_code": "86",
        "code": "CN"
    },
    "90": {
        "name": "Turkey",
        "dial_code": "90",
        "code": "TR"
    },
    "91": {
        "name": "India",
        "dial_code": "91",
        "code": "IN"
    },
    "92": {
        "name": "Pakistan",
        "dial_code": "92",
        "code": "PK"
    },
    "93": {
        "name": "Afghanistan",
        "dial_code": "93",
        "code": "AF"
    },
    "94": {
        "name": "Sri Lanka",
        "dial_code": "94",
        "code": "LK"
    },
    "95": {
        "name": "Myanmar",
        "dial_code": "95",
        "code": "MM"
    },
    "98": {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "98",
        "code": "IR"
    },
    "211": {
        "name": "South Sudan",
        "dial_code": "211",
        "code": "SS"
    },
    "212": {
        "name": "Morocco",
        "dial_code": "212",
        "code": "MA"
    },
    "213": {
        "name": "Algeria",
        "dial_code": "213",
        "code": "DZ"
    },
    "216": {
        "name": "Tunisia",
        "dial_code": "216",
        "code": "TN"
    },
    "218": {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "218",
        "code": "LY"
    },
    "220": {
        "name": "Gambia",
        "dial_code": "220",
        "code": "GM"
    },
    "221": {
        "name": "Senegal",
        "dial_code": "221",
        "code": "SN"
    },
    "222": {
        "name": "Mauritania",
        "dial_code": "222",
        "code": "MR"
    },
    "223": {
        "name": "Mali",
        "dial_code": "223",
        "code": "ML"
    },
    "224": {
        "name": "Guinea",
        "dial_code": "224",
        "code": "GN"
    },
    "225": {
        "name": "Cote d'Ivoire",
        "dial_code": "225",
        "code": "CI"
    },
    "226": {
        "name": "Burkina Faso",
        "dial_code": "226",
        "code": "BF"
    },
    "227": {
        "name": "Niger",
        "dial_code": "227",
        "code": "NE"
    },
    "228": {
        "name": "Togo",
        "dial_code": "228",
        "code": "TG"
    },
    "229": {
        "name": "Benin",
        "dial_code": "229",
        "code": "BJ"
    },
    "230": {
        "name": "Mauritius",
        "dial_code": "230",
        "code": "MU"
    },
    "231": {
        "name": "Liberia",
        "dial_code": "231",
        "code": "LR"
    },
    "232": {
        "name": "Sierra Leone",
        "dial_code": "232",
        "code": "SL"
    },
    "233": {
        "name": "Ghana",
        "dial_code": "233",
        "code": "GH"
    },
    "234": {
        "name": "Nigeria",
        "dial_code": "234",
        "code": "NG"
    },
    "235": {
        "name": "Chad",
        "dial_code": "235",
        "code": "TD"
    },
    "236": {
        "name": "Central African Republic",
        "dial_code": "236",
        "code": "CF"
    },
    "237": {
        "name": "Cameroon",
        "dial_code": "237",
        "code": "CM"
    },
    "238": {
        "name": "Cape Verde",
        "dial_code": "238",
        "code": "CV"
    },
    "239": {
        "name": "Sao Tome and Principe",
        "dial_code": "239",
        "code": "ST"
    },
    "240": {
        "name": "Equatorial Guinea",
        "dial_code": "240",
        "code": "GQ"
    },
    "241": {
        "name": "Gabon",
        "dial_code": "241",
        "code": "GA"
    },
    "242": {
        "name": "Congo",
        "dial_code": "242",
        "code": "CG"
    },
    "243": {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "243",
        "code": "CD"
    },
    "244": {
        "name": "Angola",
        "dial_code": "244",
        "code": "AO"
    },
    "245": {
        "name": "Guinea-Bissau",
        "dial_code": "245",
        "code": "GW"
    },
    "246": {
        "name": "British Indian Ocean Territory",
        "dial_code": "246",
        "code": "IO"
    },
    "248": {
        "name": "Seychelles",
        "dial_code": "248",
        "code": "SC"
    },
    "249": {
        "name": "Sudan",
        "dial_code": "249",
        "code": "SD"
    },
    "250": {
        "name": "Rwanda",
        "dial_code": "250",
        "code": "RW"
    },
    "251": {
        "name": "Ethiopia",
        "dial_code": "251",
        "code": "ET"
    },
    "252": {
        "name": "Somalia",
        "dial_code": "252",
        "code": "SO"
    },
    "253": {
        "name": "Djibouti",
        "dial_code": "253",
        "code": "DJ"
    },
    "254": {
        "name": "Kenya",
        "dial_code": "254",
        "code": "KE"
    },
    "255": {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "255",
        "code": "TZ"
    },
    "256": {
        "name": "Uganda",
        "dial_code": "256",
        "code": "UG"
    },
    "257": {
        "name": "Burundi",
        "dial_code": "257",
        "code": "BI"
    },
    "258": {
        "name": "Mozambique",
        "dial_code": "258",
        "code": "MZ"
    },
    "260": {
        "name": "Zambia",
        "dial_code": "260",
        "code": "ZM"
    },
    "261": {
        "name": "Madagascar",
        "dial_code": "261",
        "code": "MG"
    },
    "262": {
        "name": "Reunion",
        "dial_code": "262",
        "code": "RE"
    },
    "263": {
        "name": "Zimbabwe",
        "dial_code": "263",
        "code": "ZW"
    },
    "264": {
        "name": "Namibia",
        "dial_code": "264",
        "code": "NA"
    },
    "265": {
        "name": "Malawi",
        "dial_code": "265",
        "code": "MW"
    },
    "266": {
        "name": "Lesotho",
        "dial_code": "266",
        "code": "LS"
    },
    "267": {
        "name": "Botswana",
        "dial_code": "267",
        "code": "BW"
    },
    "268": {
        "name": "Swaziland",
        "dial_code": "268",
        "code": "SZ"
    },
    "269": {
        "name": "Comoros",
        "dial_code": "269",
        "code": "KM"
    },
    "290": {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "290",
        "code": "SH"
    },
    "291": {
        "name": "Eritrea",
        "dial_code": "291",
        "code": "ER"
    },
    "297": {
        "name": "Aruba",
        "dial_code": "297",
        "code": "AW"
    },
    "298": {
        "name": "Faroe Islands",
        "dial_code": "298",
        "code": "FO"
    },
    "299": {
        "name": "Greenland",
        "dial_code": "299",
        "code": "GL"
    },
    "350": {
        "name": "Gibraltar",
        "dial_code": "350",
        "code": "GI"
    },
    "351": {
        "name": "Portugal",
        "dial_code": "351",
        "code": "PT"
    },
    "352": {
        "name": "Luxembourg",
        "dial_code": "352",
        "code": "LU"
    },
    "353": {
        "name": "Ireland",
        "dial_code": "353",
        "code": "IE"
    },
    "354": {
        "name": "Iceland",
        "dial_code": "354",
        "code": "IS"
    },
    "355": {
        "name": "Albania",
        "dial_code": "355",
        "code": "AL"
    },
    "356": {
        "name": "Malta",
        "dial_code": "356",
        "code": "MT"
    },
    "357": {
        "name": "Cyprus",
        "dial_code": "357",
        "code": "CY"
    },
    "358": {
        "name": "Finland",
        "dial_code": "358",
        "code": "FI"
    },
    "359": {
        "name": "Bulgaria",
        "dial_code": "359",
        "code": "BG"
    },
    "370": {
        "name": "Lithuania",
        "dial_code": "370",
        "code": "LT"
    },
    "371": {
        "name": "Latvia",
        "dial_code": "371",
        "code": "LV"
    },
    "372": {
        "name": "Estonia",
        "dial_code": "372",
        "code": "EE"
    },
    "373": {
        "name": "Moldova",
        "dial_code": "373",
        "code": "MD"
    },
    "374": {
        "name": "Armenia",
        "dial_code": "374",
        "code": "AM"
    },
    "375": {
        "name": "Belarus",
        "dial_code": "375",
        "code": "BY"
    },
    "376": {
        "name": "Andorra",
        "dial_code": "376",
        "code": "AD"
    },
    "377": {
        "name": "Monaco",
        "dial_code": "377",
        "code": "MC"
    },
    "378": {
        "name": "San Marino",
        "dial_code": "378",
        "code": "SM"
    },
    "379": {
        "name": "Holy See (Vatican City State)",
        "dial_code": "379",
        "code": "VA"
    },
    "380": {
        "name": "Ukraine",
        "dial_code": "380",
        "code": "UA"
    },
    "381": {
        "name": "Serbia",
        "dial_code": "381",
        "code": "RS"
    },
    "382": {
        "name": "Montenegro",
        "dial_code": "382",
        "code": "ME"
    },
    "385": {
        "name": "Croatia",
        "dial_code": "385",
        "code": "HR"
    },
    "386": {
        "name": "Slovenia",
        "dial_code": "386",
        "code": "SI"
    },
    "387": {
        "name": "Bosnia and Herzegovina",
        "dial_code": "387",
        "code": "BA"
    },
    "389": {
        "name": "Macedonia",
        "dial_code": "389",
        "code": "MK"
    },
    "420": {
        "name": "Czech Republic",
        "dial_code": "420",
        "code": "CZ"
    },
    "421": {
        "name": "Slovakia",
        "dial_code": "421",
        "code": "SK"
    },
    "423": {
        "name": "Liechtenstein",
        "dial_code": "423",
        "code": "LI"
    },
    "500": {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "500",
        "code": "GS"
    },
    "501": {
        "name": "Belize",
        "dial_code": "501",
        "code": "BZ"
    },
    "502": {
        "name": "Guatemala",
        "dial_code": "502",
        "code": "GT"
    },
    "503": {
        "name": "El Salvador",
        "dial_code": "503",
        "code": "SV"
    },
    "504": {
        "name": "Honduras",
        "dial_code": "504",
        "code": "HN"
    },
    "505": {
        "name": "Nicaragua",
        "dial_code": "505",
        "code": "NI"
    },
    "506": {
        "name": "Costa Rica",
        "dial_code": "506",
        "code": "CR"
    },
    "507": {
        "name": "Panama",
        "dial_code": "507",
        "code": "PA"
    },
    "508": {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "508",
        "code": "PM"
    },
    "509": {
        "name": "Haiti",
        "dial_code": "509",
        "code": "HT"
    },
    "590": {
        "name": "Saint Martin",
        "dial_code": "590",
        "code": "MF"
    },
    "591": {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "591",
        "code": "BO"
    },
    "593": {
        "name": "Ecuador",
        "dial_code": "593",
        "code": "EC"
    },
    "594": {
        "name": "French Guiana",
        "dial_code": "594",
        "code": "GF"
    },
    "595": {
        "name": "Paraguay",
        "dial_code": "595",
        "code": "PY"
    },
    "596": {
        "name": "Martinique",
        "dial_code": "596",
        "code": "MQ"
    },
    "597": {
        "name": "Suriname",
        "dial_code": "597",
        "code": "SR"
    },
    "598": {
        "name": "Uruguay",
        "dial_code": "598",
        "code": "UY"
    },
    "599": {
        "name": "Netherlands Antilles",
        "dial_code": "599",
        "code": "AN"
    },
    "670": {
        "name": "Timor-Leste",
        "dial_code": "670",
        "code": "TL"
    },
    "672": {
        "name": "Norfolk Island",
        "dial_code": "672",
        "code": "NF"
    },
    "673": {
        "name": "Brunei Darussalam",
        "dial_code": "673",
        "code": "BN"
    },
    "674": {
        "name": "Nauru",
        "dial_code": "674",
        "code": "NR"
    },
    "675": {
        "name": "Papua New Guinea",
        "dial_code": "675",
        "code": "PG"
    },
    "676": {
        "name": "Tonga",
        "dial_code": "676",
        "code": "TO"
    },
    "677": {
        "name": "Solomon Islands",
        "dial_code": "677",
        "code": "SB"
    },
    "678": {
        "name": "Vanuatu",
        "dial_code": "678",
        "code": "VU"
    },
    "679": {
        "name": "Fiji",
        "dial_code": "679",
        "code": "FJ"
    },
    "680": {
        "name": "Palau",
        "dial_code": "680",
        "code": "PW"
    },
    "681": {
        "name": "Wallis and Futuna",
        "dial_code": "681",
        "code": "WF"
    },
    "682": {
        "name": "Cook Islands",
        "dial_code": "682",
        "code": "CK"
    },
    "683": {
        "name": "Niue",
        "dial_code": "683",
        "code": "NU"
    },
    "685": {
        "name": "Samoa",
        "dial_code": "685",
        "code": "WS"
    },
    "686": {
        "name": "Kiribati",
        "dial_code": "686",
        "code": "KI"
    },
    "687": {
        "name": "New Caledonia",
        "dial_code": "687",
        "code": "NC"
    },
    "688": {
        "name": "Tuvalu",
        "dial_code": "688",
        "code": "TV"
    },
    "689": {
        "name": "French Polynesia",
        "dial_code": "689",
        "code": "PF"
    },
    "690": {
        "name": "Tokelau",
        "dial_code": "690",
        "code": "TK"
    },
    "691": {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "691",
        "code": "FM"
    },
    "692": {
        "name": "Marshall Islands",
        "dial_code": "692",
        "code": "MH"
    },
    "850": {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "850",
        "code": "KP"
    },
    "852": {
        "name": "Hong Kong",
        "dial_code": "852",
        "code": "HK"
    },
    "853": {
        "name": "Macao",
        "dial_code": "853",
        "code": "MO"
    },
    "855": {
        "name": "Cambodia",
        "dial_code": "855",
        "code": "KH"
    },
    "856": {
        "name": "Laos",
        "dial_code": "856",
        "code": "LA"
    },
    "872": {
        "name": "Pitcairn",
        "dial_code": "872",
        "code": "PN"
    },
    "880": {
        "name": "Bangladesh",
        "dial_code": "880",
        "code": "BD"
    },
    "886": {
        "name": "Taiwan",
        "dial_code": "886",
        "code": "TW"
    },
    "960": {
        "name": "Maldives",
        "dial_code": "960",
        "code": "MV"
    },
    "961": {
        "name": "Lebanon",
        "dial_code": "961",
        "code": "LB"
    },
    "962": {
        "name": "Jordan",
        "dial_code": "962",
        "code": "JO"
    },
    "963": {
        "name": "Syrian Arab Republic",
        "dial_code": "963",
        "code": "SY"
    },
    "964": {
        "name": "Iraq",
        "dial_code": "964",
        "code": "IQ"
    },
    "965": {
        "name": "Kuwait",
        "dial_code": "965",
        "code": "KW"
    },
    "966": {
        "name": "Saudi Arabia",
        "dial_code": "966",
        "code": "SA"
    },
    "967": {
        "name": "Yemen",
        "dial_code": "967",
        "code": "YE"
    },
    "968": {
        "name": "Oman",
        "dial_code": "968",
        "code": "OM"
    },
    "970": {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "970",
        "code": "PS"
    },
    "971": {
        "name": "United Arab Emirates",
        "dial_code": "971",
        "code": "AE"
    },
    "972": {
        "name": "Israel",
        "dial_code": "972",
        "code": "IL"
    },
    "973": {
        "name": "Bahrain",
        "dial_code": "973",
        "code": "BH"
    },
    "974": {
        "name": "Qatar",
        "dial_code": "974",
        "code": "QA"
    },
    "975": {
        "name": "Bhutan",
        "dial_code": "975",
        "code": "BT"
    },
    "976": {
        "name": "Mongolia",
        "dial_code": "976",
        "code": "MN"
    },
    "977": {
        "name": "Nepal",
        "dial_code": "977",
        "code": "NP"
    },
    "992": {
        "name": "Tajikistan",
        "dial_code": "992",
        "code": "TJ"
    },
    "993": {
        "name": "Turkmenistan",
        "dial_code": "993",
        "code": "TM"
    },
    "994": {
        "name": "Azerbaijan",
        "dial_code": "994",
        "code": "AZ"
    },
    "995": {
        "name": "Georgia",
        "dial_code": "995",
        "code": "GE"
    },
    "996": {
        "name": "Kyrgyzstan",
        "dial_code": "996",
        "code": "KG"
    },
    "998": {
        "name": "Uzbekistan",
        "dial_code": "998",
        "code": "UZ"
    },
    "1242": {
        "name": "Bahamas",
        "dial_code": "1242",
        "code": "BS"
    },
    "1246": {
        "name": "Barbados",
        "dial_code": "1246",
        "code": "BB"
    },
    "1264": {
        "name": "Anguilla",
        "dial_code": "1264",
        "code": "AI"
    },
    "1268": {
        "name": "Antigua and Barbuda",
        "dial_code": "1268",
        "code": "AG"
    },
    "1284": {
        "name": "Virgin Islands, British",
        "dial_code": "1284",
        "code": "VG"
    },
    "1340": {
        "name": "Virgin Islands, U.S.",
        "dial_code": "1340",
        "code": "VI"
    },
    "1441": {
        "name": "Bermuda",
        "dial_code": "1441",
        "code": "BM"
    },
    "1473": {
        "name": "Grenada",
        "dial_code": "1473",
        "code": "GD"
    },
    "1649": {
        "name": "Turks and Caicos Islands",
        "dial_code": "1649",
        "code": "TC"
    },
    "1664": {
        "name": "Montserrat",
        "dial_code": "1664",
        "code": "MS"
    },
    "1670": {
        "name": "Northern Mariana Islands",
        "dial_code": "1670",
        "code": "MP"
    },
    "1671": {
        "name": "Guam",
        "dial_code": "1671",
        "code": "GU"
    },
    "1684": {
        "name": "AmericanSamoa",
        "dial_code": "1684",
        "code": "AS"
    },
    "1758": {
        "name": "Saint Lucia",
        "dial_code": "1758",
        "code": "LC"
    },
    "1767": {
        "name": "Dominica",
        "dial_code": "1767",
        "code": "DM"
    },
    "1784": {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "1784",
        "code": "VC"
    },
    "1849": {
        "name": "Dominican Republic",
        "dial_code": "1849",
        "code": "DO"
    },
    "1868": {
        "name": "Trinidad and Tobago",
        "dial_code": "1868",
        "code": "TT"
    },
    "1869": {
        "name": "Saint Kitts and Nevis",
        "dial_code": "1869",
        "code": "KN"
    },
    "1876": {
        "name": "Jamaica",
        "dial_code": "1876",
        "code": "JM"
    },
    "1939": {
        "name": "Puerto Rico",
        "dial_code": "1939",
        "code": "PR"
    },
    "1345": {
        "name": "Cayman Islands",
        "dial_code": "1345",
        "code": "KY"
    }
}