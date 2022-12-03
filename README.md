
# PHP + React Developer test assignment

## This is my solution for the assignment test made by UpTime.eu group.

- Quick description:  Create an app which finds anagrams from a list uploaded on a database. 
- Languages: ReactJs + PHP-Laravel. Database MySql, phpmyadmin
- Requirements: React FRONTEND authentication (three premade users), Anagram finder, Wordbase uploader (i used .txt only lists)

Wish me luck, lets go! :relaxed:

Lower is going to be frontend part of assignment made by Mark Neiman.




## REACT FRONTEND

https://ecommerce.webaza.eu/

### How it works?

My app devided by components, like any React app:

#### Components folder
  - AnagramFinder - jsx/js fetched via axios to the database for fiding a typed word from database tables.
  - WordbaseUploader - jsx/js fetched via axios to the database for uploading a .txt list to the database tables.
  - Logout - just a small jsx for login out option, nothing special. 
#### Pages folder
  - Login - well login is login but uses, here i wanted to show myself :smile:, React createContext feature. Fetches via axios to
    the database, finds out does the user exists or not.
  - Home - just takes into all components and builds the app.
#### Context folder
  - authContext - made for checking does the user is allowed to find or upload anagrams. Also controls login functions. In app.js used 
  react router dom to make it work.

#### "What about SOLID" you may ask.
- Well, i am not experinced with it but found information/recomendations. I tried to implement some features like Single-responsibility principle. thats why i created  Context, i created custom hooks to make code clean and easy to understand, i hope i used these recomendations right.

#### Clean code?
- Yes, i used all known to me features to make everything maximum clean.

#### What should you do before uploading?
- Before you upload .txt list i kindly ask to replace all estonian characters like äöõü to aoou, otherwise anagram will not be found.

#### Users for signing in.

    https://ecommerce.webaza.eu/login 

	email:  liana@webaza.eu
	password:   liana123

	email:  vinc@webaza.eu
	password:   vinc123

	email:  musa@webaza.eu
	password:   musa123

#### Do you need your private user? 
You can register using Insomnia, postman and send post requests to https://ecommerce.webaza.eu/public/api/register. I used password hashing methond, so your password will not be seen to anyone.

{
"name":"Musa Pittman", 
"email":"musa@webaza.eu",
"password":"musa123"
}

## PS.
- I am really thankful to take part in the assignment! It was not for me that easy as it may look, i tried do my best and make the CLEAN app. Everything in this task made me think on every character i coded. Thank you for your work also, hope you like it! Have a nice day. :wink:






