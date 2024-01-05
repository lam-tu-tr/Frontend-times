# Portfolio : Frontend Times newspaper

Bay Area news highlighting local software engineer, projects, as well as current technologies

**Link to project:** https://www.frontendtimes.dev/



## How It's Made:

**Tech used:** HTML, CSS, React, NextJS, Sass/Scss

Prototyped the design in Figma. Utilized the mobile first approach to place and organize the newspaper materials. Coded using the modular approach with each React component having its own module.scss file to ensure that each style sheet is as short and concise as possible. Added media queries for desktop. Finally add a light dark mode switcher in the form of glasses(sunglasses for light mode, regular for dark mode).

## Lessons Learned:

I attacked this project with the mindset of "Less is More"for my HTML and CSS. Writing each line with deliberate intention and separating style sheets into modules for each component to keep each sheet as short as possible(a little more than a screen size each). This made it so much easier debugging and testing new styles as I did not have to scroll through screens and screens of text to find the id or class like I had in the past. I knew exactly where each selector is. I don't think I can code without Sass anymore. It is mandatory due to how much it streamlines the selection process.

Next, the mobile first approach is definitely the way to go. Starting mobile first means that I can utilize the responsiveness of pure html, limiting the need for Css. Transitioning to desktop is as simple as adding media queries to change the layout as needed. Components like heading, navs, and footers are more or less the same. Since mobile websites are typically only 1 column, a single display:flex for the whole page works wonder.

Furthermore, I wanted to implement dark mode toggle so I did some digging to see the best approach. I found that there is a media query "@media(prefers-color-scheme: dark), which automatically inverts colors according to the browser settings when the user has dark mode enabled. However, the colors vary between browsers, and since I wanted to toggle manually, I created a 'data-theme' for the body element, toggline it between dark and light to change the Css variable color declarations. This worked great and I got to choose specific colors I wanted.

Finally, I have come to recognize that having a design is essential before coding(which should have been obvious). Initially I had the idea to make a news site in my head, which I styled as I code. After going around in circles for about two week, I finally budged and decided to put my ideas into reality on Figma.Lo and behold, having a visual basis sped up my code ten folds. And I breezed through the project. Instead of scratching my head and hoping whatever idea I come up with at the time can conform to the current styling that I had, I was now able to plan ahead in a strategic and systematic manner.

## Other Projects:

Check out these projects I have here.

**Ai-Itinerary-Planner:** https://github.com/lam-tu-tr/PlanMyTrip

**Sinnoh Pokedex:** https://github.com/lam-tu-tr/SinnohPokedex
