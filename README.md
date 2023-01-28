# ABN-assignment
Hi,

With this application I aimed to keep the code as simple as possible by reusing code and keeping it compact.
I chose to create the application with Vue 3 and current recommended packages like Vite (dev server), Typescript (tighter checks) and Pinia (for state management). 
Next to this I used Tailwind for easy and uniform styling.

Regarding the solution I used Netflix as a loose example. When opening the application the user can immediatly see different shows and hover over them to see some summarised information like genre, rating and description. 

The user can also select different genres with the pull buttons on the top, or use the search bar which uses the search API to fuzzy search shows. 

If the user found their show they can click on it and continue on the details page. Here they can see all the details and the show's episodes. 

By properly using reactivity (and a fast API) the results are lightning fast which makes the UX quite pleasurable. 

I hope you'll enjoy this small application and tips/questions are more than welcome. 

Kind regards,
Jorrit. 

----------------------------------------------------------

To run the application:

npm install
npm run dev
