It is a weather report app where the user enters any location and the temperature , the current weather is displayed along with a similar image .

As soon as the user enters a location , it is captured inside a variable city and the HTML form resets . I have created two JS files mainly for DOM manipulation and api handling . Using fetch we make a network request and in return it gives a promise. If the promise resolves successfully , then , we update the UI with the fetched data or else , an error is printed to console .

Usually , when the user press enter the form resets and the value vanishes . But , here , I used the browser's local storage to save the current location and then , I checked if there is any value present , then , simply call the appropriate function and display the value . This way even if the user reloads or opens the site after closing it , the previous value will be stored in the local storage and will be displayed . 
