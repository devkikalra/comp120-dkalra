All aspects of the lab have been correctly implemented: the map is centered on south station, all vehicles are marked on the map with the car icon image used as a marker, and I have performed all the specified performance enhancements. 

Results of the performance enhancement techniques: 

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

    
