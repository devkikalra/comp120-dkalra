1. I have determined my geolocation and placed a marker of where I am on the map 
2. I have made a succesful request to the ride-hailing API and have marked each vehicle from the list 
    onto the map
3. I have written a function (nearestCar()) which finds the shortest distance between me and a car and 
    have confirmed that this works by using console.log(shortest_distance) statements. However, I was unable
    to display this information in an infowindow as I was pressed on time. If possible, I am going to try to work on this before the end of the class. 
4. I have not rendered a polyline which connects my marker to the marker of the closest vehicle. 


Results of the performance enhancement techniques (from part 1): 

Before performance optimization: 
* Page load times: 
    * Finish: 2.40s 
    * Load: 1.63s 
* File sizes: 
    * 285 B / 810 kB transferred 
    * 17.9 kB / 1.6 MB resources 

After loading the CSS first: 
* Page load times: 
    * Finish: 1.63s 
    * Load: 908ms
* File sizes: 
    * 0 B / 7.7 kB transferred
    * 17.9 kB / 1.6 MB resources 

After minifying the CSS: 
* Page load times: 
    * Finish: 1.51s
    * Load: 739ms 
* File sizes: 
    * 244 B / 7.9 kB transferred
    * 17.8 kB / 1.6 MB resources

After moving JS includes and code to the bottom of the HTML: 
* Page load times: 
    * Finish: 1.53s
    * Load: 846ms 
* File sizes: 
    * 60 B / 12.6 kB transferred
    * 15.0 kB / 1.6 MB resources

After minifying the JS: 
* Page load times: 
    * Finish: 1.46s
    * Load: 693ms 
* File sizes: 
    * 0 B / 8.5 kB transferred
    * 17.8 kB / 1.6 MB resources

I worked on this lab independently and spent around 4-5 hours on it. 

    
