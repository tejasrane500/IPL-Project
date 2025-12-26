import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

function News() {

    let NewsData = {
  "storyList": [
    {
      "story": {
        "id": 129682,
        "hline": "Ishan, Shreyas vs BCCI: What exactly happened ",
        "intro": "The inside story on the events that led to a watershed moment in Indian cricket in the modern era",
        "pubTime": "1709208833097",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 383303,
        "seoHeadline": "Ishan, Shreyas vs BCCI: What exactly happened ",
        "context": "Inside Story",
        "coverImage": {
          "id": "383303",
          "caption": "There is a lingering sense of impression that the players are prioritising IPL over every form of cricket",
          "source": "BCCI"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials",
          "teamId": [
            2
          ]
        },
        "adsType": {}
      }
    },
    {
      "ad": {
        "name": "native_news_index",
        "layout": "native_large",
        "position": 1
      }
    },
    {
      "story": {
        "id": 126438,
        "hline": "The unlikely story behind Europe's cricket revolution",
        "intro": "A disastrous first event and a global pandemic are hardly the ingredients for a successful new league in an underdeveloped region. Yet three years later, the European Cricket Network continues to ride the fantasy cricket wave and go from strength to strength",
        "pubTime": "1682999787766",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 307720,
        "seoHeadline": "The unlikely story behind Europe's cricket revolution",
        "context": "Inside Story",
        "coverImage": {
          "id": "307720",
          "caption": "The European Cricket Network continues to ride the fantasy cricket wave and go from strength to strength",
          "source": "European Cricket League"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials"
        },
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 126315,
        "hline": "IPL 2023: The broadcast wars",
        "intro": "The biggest factor to watch out for is how much growth in viewership will have an impact on the value of bilateral rights of the BCCI which will be out in the market soon enough ",
        "pubTime": "1681923994933",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 293364,
        "seoHeadline": "IPL 2023: The broadcast wars",
        "context": "Inside Story",
        "coverImage": {
          "id": "293364",
          "caption": "According to BARC, an external agency that provides television ratings, there have been 6230 crore minutes of watch time for the opening 10 matches on TV",
          "source": "BCCI"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials",
          "seriesId": 5945
        },
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 123479,
        "hline": "Ben Stokes: Portrait of a 'Mentality Monster'",
        "intro": "Three coaches and colleagues reveal how Ben Stokes has channeled his unique personality traits away from destructive behaviour and turned them towards creative genius",
        "pubTime": "1660730186697",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 240475,
        "seoHeadline": "Ben Stokes: Portrait of a 'Mentality Monster'",
        "context": "Featured Story",
        "coverImage": {
          "id": "240475",
          "caption": "Ben Stokes didn't buckle in the final. Maybe he was innately choke-resistant",
          "source": "Getty"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials",
          "teamId": [
            9
          ]
        },
        "adsType": {}
      }
    },
    {
      "ad": {
        "name": "native_news_index_2",
        "layout": "native_large",
        "position": 5
      }
    },
    {
      "story": {
        "id": 123080,
        "hline": "How will the IPL riches shape Indian cricket",
        "intro": "The new media deal's potential as a game-changer has already been acknowledged, but what changes could it really usher?",
        "pubTime": "1657887226101",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 239064,
        "seoHeadline": "How will the IPL riches shape Indian cricket",
        "context": "Inside Story",
        "coverImage": {
          "id": "239064",
          "caption": "Representative Image: What will the BCCI do with it's IPL windfall?",
          "source": "BCCI/IPL"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials"
        },
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 120214,
        "hline": "Kohli, Rohit, and a multilayered decision shaping Indian cricket",
        "intro": "Unravelling the variety of thoughts within BCCI that led to the removal of Virat Kohli as the ODI captain",
        "pubTime": "1639068315157",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 219905,
        "seoHeadline": "Kohli, Rohit, and a multilayered decision shaping Indian cricket",
        "context": "Inside Story",
        "coverImage": {
          "id": "219905",
          "caption": "Rohit Sharma has replaced Virat Kohli as India's white-ball captain",
          "source": "Getty"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials",
          "teamId": [
            2
          ]
        },
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 119765,
        "hline": "How Pakistan's darkest hour gave birth to the age of Babar",
        "intro": "When New Zealand pulled out of a tour in September, Pakistan's players were devastated. Yet the emotion has been channelled into a momentous T20 World Cup campaign, with Babar Azam proving an authoritative new leader",
        "pubTime": "1636376577192",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 217760,
        "seoHeadline": "How Pakistan's darkest hour gave birth to the age of Babar",
        "context": "The Inside Story",
        "coverImage": {
          "id": "217760",
          "caption": "\"If Babar says, it's night, we will believe that as well. No questions asked\"",
          "source": "Getty"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials",
          "teamId": [
            3
          ],
          "seriesId": 2798
        },
        "adsType": {}
      }
    },
    {
      "story": {
        "id": 117431,
        "hline": "What went wrong in IPL 2021",
        "intro": "The inside story of how the tournament fell apart midway through the season",
        "pubTime": "1620957247882",
        "source": "Cricbuzz",
        "storyType": "Cricbuzz Plus",
        "imageId": 206911,
        "seoHeadline": "What went wrong in IPL 2021, Amit Mishra, Tim Seifert, Prasidh Krishna",
        "context": "IPL suspension - Inside story ",
        "coverImage": {
          "id": "206911",
          "caption": "IPL 2021 was suspended indefinitely following a rise in cases of COVID-19 within the bio bubble.",
          "source": "BCCI/IPL"
        },
        "planId": 1,
        "entitlements": {
          "type": "Premium News",
          "name": "Plus Editorials",
          "teamId": [
            61,
            63
          ]
        },
        "adsType": {}
      }
    }
  ],
  "lastUpdatedTime": "1766579972722",
  "appIndex": {
    "seoTitle": "Cricket's latest, important issues - Cricbuzz | Cricbuzz.com",
    "webURL": "http://www.cricbuzz.com/cricket-news/info"
  },
  "topicName": "Inside Story"
    }

    const [News , setNews] = useState(NewsData.storyList[0].story);

    async function FetchNews() {
        const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/topics/349';
            const options = {
            	method: 'GET',
            	headers: {
            		'x-rapidapi-key': 'a898cb9fb2mshf6214489306fb64p12ab42jsn0061e751a114',
            		'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
            	}
            };

            try {
            	const response = await fetch(url, options);
            	const result = await response.json();
            	console.log(result);
                setNews(result.storyList[0].story)
            } catch (error) {
	        console.error(error);
        }
    }

    useEffect(() => {
        setNews(NewsData.storyList[0].story)
    } , [])


  return (
    <div>
        Comming soon ...
    </div>
  )
}

export default News;
