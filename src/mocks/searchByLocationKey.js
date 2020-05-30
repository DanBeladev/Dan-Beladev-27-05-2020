const result = {
    "Version": 1,
    "Key": "213490",
    "Type": "City",
    "Rank": 20,
    "LocalizedName": "Rome",
    "EnglishName": "Rome",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "EUR",
      "LocalizedName": "Europe",
      "EnglishName": "Europe"
    },
    "Country": {
      "ID": "IT",
      "LocalizedName": "Italy",
      "EnglishName": "Italy"
    },
    "AdministrativeArea": {
      "ID": "62",
      "LocalizedName": "Lazio",
      "EnglishName": "Lazio",
      "Level": 1,
      "LocalizedType": "Region",
      "EnglishType": "Region",
      "CountryID": "IT"
    },
    "TimeZone": {
      "Code": "CEST",
      "Name": "Europe/Rome",
      "GmtOffset": 2,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-10-25T01:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 41.892,
      "Longitude": 12.511,
      "Elevation": {
        "Metric": {
          "Value": 45,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 147,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [
      {
        "Level": 2,
        "LocalizedName": "Roma",
        "EnglishName": "Roma"
      },
      {
        "Level": 3,
        "LocalizedName": "Roma",
        "EnglishName": "Roma"
      }
    ],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence"
    ],
    "Details": {
      "Key": "213490",
      "StationCode": "LII7",
      "StationGmtOffset": 1,
      "BandMap": "IY",
      "Climo": "LIRA",
      "LocalRadar": "",
      "MediaRegion": null,
      "Metar": "LIRA",
      "NXMetro": "",
      "NXState": "",
      "Population": 2295319,
      "PrimaryWarningCountyCode": "",
      "PrimaryWarningZoneCode": "",
      "Satellite": "EUR3",
      "Synoptic": "16239",
      "MarineStation": "",
      "MarineStationGMTOffset": null,
      "VideoCode": "",
      "LocationStem": "it/rome/213490",
      "PartnerID": null,
      "Sources": [
        {
          "DataType": "CurrentConditions",
          "Source": "AccuWeather",
          "SourceId": 1
        },
        {
          "DataType": "DailyForecast",
          "Source": "AccuWeather",
          "SourceId": 1
        },
        {
          "DataType": "ForecastConfidence",
          "Source": "AccuWeather",
          "SourceId": 1
        },
        {
          "DataType": "HourlyForecast",
          "Source": "AccuWeather",
          "SourceId": 1
        },
        {
          "DataType": "Alerts",
          "Source": "Servizio Meteorologico",
          "SourceId": 25
        },
        {
          "DataType": "Dangerous Thunderstorm Alert Push Notifications",
          "Source": "Earth Networks",
          "SourceId": 57
        },
        {
          "DataType": "AirQualityCurrentConditions",
          "Source": "Plume Labs",
          "SourceId": 63
        },
        {
          "DataType": "AirQualityForecasts",
          "Source": "Plume Labs",
          "SourceId": 63
        },
        {
          "DataType": "Alerts",
          "Source": "United States Geological Survey",
          "SourceId": 70
        }
      ],
      "CanonicalPostalCode": "",
      "CanonicalLocationKey": "213490"
    }
  }
  export default result;