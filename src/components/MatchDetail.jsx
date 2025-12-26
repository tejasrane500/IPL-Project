import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function MatchDetail(){

    let {id} = useParams();

    let fixedData = {

  "matchid": 45886,
  "seriesid": 4061,
  "seriesname": "Indian Premier League 2022",
  "matchdesc": "1st Match",
  "matchformat": "T20",
  "startdate": 1648303200000,
  "enddate": 1648315800000,
  "state": "Complete",
  "status": "Kolkata Knight Riders won by 6 wkts",
  "team1": {
    "teamid": 58,
    "teamname": "Chennai Super Kings",
    "teamsname": "CSK",
    "isfullmember": false,
    "isassociated": false,
    "isleagueteam": false,
    "iswomenteam": false,
    "isheader": false,
    "isactive": false,
    "teampriority": "",
    "isvideopresent": false,
    "imageid": 0,
    "countryname": "",
    "belongsto": ""
  },
  "team2": {
    "teamid": 63,
    "teamname": "Kolkata Knight Riders",
    "teamsname": "KKR",
    "isfullmember": false,
    "isassociated": false,
    "isleagueteam": false,
    "iswomenteam": false,
    "isheader": false,
    "isactive": false,
    "teampriority": "",
    "isvideopresent": false,
    "imageid": 0,
    "countryname": "",
    "belongsto": ""
  },
  "umpire1": {
    "id": 8862,
    "name": "Nitin Menon",
    "country": "IND"
  },
  "umpire2": {
    "id": 8297,
    "name": "Anil Kumar Chaudhary",
    "country": "IND"
  },
  "umpire3": {
    "id": 8909,
    "name": "Virender Sharma",
    "country": "IND"
  },
  "referee": {
    "id": 7596,
    "name": "Manu Nayyar",
    "country": "IND"
  },
  "venueinfo": {
    "id": 81,
    "ground": "Wankhede Stadium",
    "city": "Mumbai",
    "country": "India",
    "timezone": "",
    "established": 1974,
    "capacity": "33,000",
    "knownas": "",
    "ends": "Garware Pavilion End, Tata End",
    "hometeam": "Mumbai, Mumbai Indians",
    "floodlights": false,
    "curator": "",
    "profile": "",
    "imageurl": "",
    "groundlength": 0,
    "groundwidth": 0,
    "othersports": "",
    "imageid": "",
    "latitude": "",
    "longitude": ""
  },
  "currbatteamid": 0,
  "ismatchnotcovered": false,
  "appindex": {
    "seotitle": "Cricket match facts CSK vs KKR 1st Match,Indian Premier League 2022 | Cricbuzz.com",
    "weburl": "http://www.cricbuzz.com/cricket-match-facts/45886/csk-vs-kkr-1st-match-indian-premier-league-2022"
  },
  "istournament": true,
  "tossstatus": "",
  "seriesstartdt": 1648303200000,
  "seriesenddt": 1648315800000,
  "istimeannounced": false,
  "statetitle": "",
  "replacematchid": 0,
  "livestreamenabled": false,
  "isfantasyenabled": false,
  "broadcastinfo": [],
  "daynight": true,
  "matchtype": "league",
  "seriestype": "IPL",
  "shortstatus": "KKR won",
  "boundarytrackervalues": {
    "boundarytrackervalue": []
  },
  "matchimageid": 379130,
  "islivestreamenabled": false,
  "isfantasyhandbookenabled": false

}

    let playerData = {
  "team1": {
    "team": {
      "teamid": 58,
      "teamname": "Chennai Super Kings",
      "teamsname": "CSK",
      "isfullmember": false,
      "isassociated": false,
      "isleagueteam": false,
      "iswomenteam": false,
      "isheader": false,
      "isactive": false,
      "teampriority": "",
      "isvideopresent": false,
      "imageid": 225641,
      "countryname": "",
      "belongsto": ""
    },
    "players": [
      {
        "player": [
          {
            "id": "11813",
            "name": "Ruturaj Gaikwad",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226277,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "9838",
            "name": "Conway",
            "captain": false,
            "role": "WK-Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 207888,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "527",
            "name": "Uthappa",
            "captain": false,
            "role": "WK-Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 153928,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "6311",
            "name": "Rayudu",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 171012,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "587",
            "name": "Ravindra Jadeja",
            "captain": true,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 170670,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "11195",
            "name": "Shivam Dube",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 183291,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "265",
            "name": "Dhoni",
            "captain": false,
            "role": "WK-Batter",
            "keeper": true,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 170677,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "242",
            "name": "DJ Bravo",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 171033,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "10100",
            "name": "Santner",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 170741,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "7625",
            "name": "Milne",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 154574,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "11307",
            "name": "Tushar Deshpande",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 190903,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          }
        ],
        "category": "playing XI"
      },
      {
        "player": [
          {
            "id": "6532",
            "name": "Chris Jordan",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 148144,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "14599",
            "name": "Rajvardhan Hangargekar",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226294,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "18504",
            "name": "M Theekshana",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 216498,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "11623",
            "name": "Hari Nishanth",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226549,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "11675",
            "name": "N Jagadeesan",
            "captain": false,
            "role": "WK-Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "11804",
            "name": "Subhranshu Senapati",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "12805",
            "name": "Prashant Solanki",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "13184",
            "name": "Mukesh Choudhary",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "13483",
            "name": "KM Asif",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226409,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "14163",
            "name": "Simarjeet Singh",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "19253",
            "name": "Bhagath Varma",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Chennai Super Kings",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          }
        ],
        "category": "bench"
      }
    ]
  },
  "team2": {
    "team": {
      "teamid": 63,
      "teamname": "Kolkata Knight Riders",
      "teamsname": "KKR",
      "isfullmember": false,
      "isassociated": false,
      "isleagueteam": false,
      "iswomenteam": false,
      "isheader": false,
      "isactive": false,
      "teampriority": "",
      "isvideopresent": false,
      "imageid": 225646,
      "countryname": "",
      "belongsto": ""
    },
    "players": [
      {
        "player": [
          {
            "id": "10917",
            "name": "Venkatesh Iyer",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226278,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "1447",
            "name": "Rahane",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 171082,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "9428",
            "name": "Shreyas Iyer",
            "captain": true,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 171024,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "9204",
            "name": "Nitish Rana",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 171047,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "7990",
            "name": "Billings",
            "captain": false,
            "role": "WK-Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 156173,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "7736",
            "name": "Russell",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 170821,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "2276",
            "name": "Narine",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 152654,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "8846",
            "name": "Jackson",
            "captain": false,
            "role": "WK-Batter",
            "keeper": true,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 169694,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "1858",
            "name": "Umesh",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 153874,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "12345",
            "name": "Shivam Mavi",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 155147,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "12926",
            "name": "Chakaravarthy",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226220,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          }
        ],
        "category": "playing XI"
      },
      {
        "player": [
          {
            "id": "9500",
            "name": "C Karunaratne",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 216499,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "14274",
            "name": "Rasikh Salam",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "3007",
            "name": "Nabi",
            "captain": false,
            "role": "Bowling Allrounder",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 170853,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "9624",
            "name": "Indrajith",
            "captain": false,
            "role": "WK-Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 226621,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "10896",
            "name": "Rinku Singh",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 187877,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "1057",
            "name": "Southee",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 170753,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "12344",
            "name": "Anukul Roy",
            "captain": false,
            "role": "Batting Allrounder",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 153915,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "12640",
            "name": "Pratham Singh",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "12813",
            "name": "Abhijeet Tomar",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "19473",
            "name": "Aman Hakim Khan",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "24261",
            "name": "Ashok Sharma",
            "captain": false,
            "role": "Bowler",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          },
          {
            "id": "24281",
            "name": "Ramesh Kumar",
            "captain": false,
            "role": "Batter",
            "keeper": false,
            "teamname": "Kolkata Knight Riders",
            "isheader": false,
            "imageId": 0,
            "battingStyle": "",
            "bowlingStyle": "",
            "faceimageid": 182026,
            "countryimageid": 0,
            "playingxichange": "",
            "inmatchchange": "",
            "isoverseas": false
          }
        ],
        "category": "bench"
      }
    ]
  
}
    }

    const [data , setData] = useState(null);
    const [player , setPlayer] = useState(null);

    async function FetchMatchDetail(){
        const url = `https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/${id}`;
        const options = {
        	method: 'GET',
        	headers: {
        		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
        	}
        };

        try {
        	const response = await fetch(url, options);
        	const result = await response.json();
          setData(result);
        	console.log(result);
        } catch (error) {
        	console.error(error);
        }
    }


    async function FetchPlayerData() {
      const url = `https://cricbuzz-cricket2.p.rapidapi.com/mcenter/v1/${id}/teams`;
      const options = {
      	method: 'GET',
      	headers: {
      		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      		'x-rapidapi-host': 'cricbuzz-cricket2.p.rapidapi.com'
      	}
      };

      try {
      	const response = await fetch(url, options);
      	const result = await response.json();
        setPlayer(result);
      	console.log(result);
      } catch (error) {
      	console.error(error);
      }
    }


    useEffect(() => {
      FetchMatchDetail();
      FetchPlayerData();
    },[])



    if (!data || !player) {
      return <h1>Loading...</h1>;
    }

return (
  <>
    <div className="text-2xl text-center m-3">MatchDetail</div>

    <InPageNavigation
      teams={[fixedData.team1.teamsname, fixedData.team2.teamsname]}
    >

      {/* TEAM 1 PLAYING XI */}
      {player.team1.players[0].player.map(p => (
        <div key={p.id} className="text-xl m-5">
          <h1>{p.name}</h1>
          <h3 className="opacity-50 text-sm">{p.role}</h3>
        </div>
      ))}

      {/* TEAM 2 PLAYING XI */}
      {player.team2.players[0].player.map(p => (
        <div key={p.id} className="text-xl m-5">
          <h1>{p.name}</h1>
          <h3 className="opacity-50 text-sm">{p.role}</h3>
        </div>
      ))}

    </InPageNavigation>
  </>
);
}

export default MatchDetail;
