---
---
var events = []
{% for post in site.posts %}
  var date = new Date({{ post.date | date: "%Y,%m,%d" }});
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': '{{ post.title }}', 'Link': function(){on('{{ post.url }}');}};
  events.push(event);
{% endfor %}


var events2 = [
  {'Date': new Date(2020, 1, 1), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2020, 1, 7), 'Title': 'New Garfield movie comes out!', 'Link': function(){on();}},
  {'Date': new Date(2020, 1, 11), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];


var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

