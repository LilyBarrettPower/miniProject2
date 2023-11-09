Job Search Pro

Q1 - What was the requirements gathering process:
- I looked at the free APIs and based my project around what APIs I could use
- I did some sketches on my iPad
- I chose a colour scheme using Coolors
- I chose what text fonts I wanted to use
- I wrote the requirements I wanted the project to cover

Q2 - Give an overview of the project and its features:
- The project is a job seeking application with login functionality
- There is a database that stores the users information
- Once logged in the home page has 10 popular jobs wihch have been cached to minimise API calls
- The user can go to the search page and search for any jobs they want, a fetch will occur when the user presses the search button
- The first 10 jobs will be displayed, there is then pagination to show more jobs which will trigger another API fetch
- There is a profile page for each user which is a protected route and can only be accessed if a user is logged in

  Q3 - Where does the data come from?
  - The jobs come from the JSearch external API from RapidAPI, using fetch to get the data
  - The user data is fetched from an internal JSON file
 
  Q4 - How is the data processed and displayed?
  - The external API is fetched using the useFetchPopular and useFetchSearch custom hooks Theyre then implemented in the Search and PopularJobs components where the fetched data is iterated and a bootstrap card is generated for each job
  - The internal json data is fetched using useEffect hook from React, this data is then compared to the data inputted into the login form to validate the user
 
  Q5 - How can the user interact with the application?
  - The user can navigate pages using the navbar from the NavBar component
  - Users can click on the apply now button of each job and be taken to the actual job advert
  - Users can search for specific jobs
  - Users can login / log out

  Q7 - How have you structured your code?
  - I have split my code into folders - components, context, hooks, routes, src, styling, pages and database
  - The database folder has my internal JSON file with the users
  - styling folder has all of the custom CSS files which are all split into each file for each component
  - The pages folder has the pages that are rendered and navigatable, they only contain components
  - The components contain all of the stuff to be rendered and utilise the hooks, context etc.
 
  Q8 - WHat kinds of react hooks have you used?
  - useEffect - to fetch data, lets us synchronise our components with external data
  - useState - whereever there is user input or data that needs to be remembered between renders
  - useNavigate - to allow for navigation between pages (using AppRoutes.jsx)
  - useContext - so the whole application has the context of the user when theyre logged in
 
  Q9 - WHat external libraries have you used?
  - I used React Bootstrap because I am familiar with bootstrap as it was the easiest thing for me to implement for styling
  - I installed bootstrap then I just imported each bootstrap component as needed
  - I used google fonts for the fonts anmd I used the @import url in my global CSS file to implement the fonts throughout the whole application
 
  Q10 - How might you extend the features in future:
  - Move the login logic and json database to a server so that the authentication os more secure
  - Have each users profile show their portfolio of work
  - Create a way to for new users to make accounts 
    
