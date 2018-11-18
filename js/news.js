//you have to paste your API key in line 4 and 5.

function news_fetch(input){
  var favourite_news="https://newsapi.org/v2/everything?q=avengers%204&language=en&sortBy=publishedAt&apiKey=YourAPIkeyHere";
  var national_news="https://newsapi.org/v2/top-headlines?country=in&apiKey=YourAPIkeyHere";
  switch(input)
  {
    case 'india':
    {
      news_api=national_news;
      break;
    }
    case 'favourite':
    {
      news_api=favourite_news;
      break;
    }
    default:
    news_api=favourite_news;
  }
   $.getJSON(news_api, newscallback);
   function newscallback(news_result){
     console.log(news_result);
     for(i=0;i<5;i++)
     {
       news_object=news_result['articles'][i];
       news_title=news_object['title'];
       news_source=news_object['source']['name'];
       $("#"+i).text(news_title+"  -  "+news_source);
     }
   }
 }
 news_fetch();
