var events = []

  var date = new Date(2020,03,15);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Sun, Mar 15, 7PM', 'Link': function(){on('/2020/03/15/1.html');}};
  events.push(event);

  var date = new Date(2020,03,14);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Sat, Mar 14, 8PM', 'Link': function(){on('/2020/03/14/1.html');}};
  events.push(event);

  var date = new Date(2020,03,13);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Fri, Mar 13, 8PM', 'Link': function(){on('/2020/03/13/1.html');}};
  events.push(event);

  var date = new Date(2020,03,12);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Thu, Mar 12, 8PM', 'Link': function(){on('/2020/03/12/1.html');}};
  events.push(event);

  var date = new Date(2020,03,08);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Sun, Mar 8, 4PM', 'Link': function(){on('/2020/03/08/2.html');}};
  events.push(event);

  var date = new Date(2020,03,07);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Sat, Mar 7, 8PM', 'Link': function(){on('/2020/03/07/1.html');}};
  events.push(event);

  var date = new Date(2020,03,06);
  date.setMonth(date.getMonth()-1);
  var event = {'Date': date, 'Title': 'Fri, Mar 6, 8PM', 'Link': function(){on('/2020/03/06/1.html');}};
  events.push(event);



var events2 = [
  {'Date': new Date(2020, 1, 1), 'Title': 'Doctor appointment at 3:25pm.'},
  {'Date': new Date(2020, 1, 7), 'Title': 'New Garfield movie comes out!', 'Link': function(){on();}},
  {'Date': new Date(2020, 1, 11), 'Title': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];


var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);

