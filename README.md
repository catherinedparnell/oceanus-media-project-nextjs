![Logo](https://user-images.githubusercontent.com/56173614/120265697-8811ef80-c26e-11eb-9d4f-e129d37d0750.png)
OceanUS is a media project with the purpose of increasing awareness about ocean plastic pollution. By illuminating the impacts of plastic on sea turtles and human health in particular, the site aims to build recognition of ocean plastic pollution as an important environmental problem. **This repository is a refactored version of our [original project](https://github.com/catherinedparnell/oceanus-media-project) to use NextJS.** Check out the originally hosted site (without NextJS) at http://www.oceanusamerica.us/ or deployed at our netlify link [here](https://oceanus.netlify.app/).

*Note: This site is not yet responsive to all screen sizes, as it is currently optimized for the size of a standard MacBook Pro. Larger or smaller screen sizes may distort the sizing/positioning of some of our svgs*

## Architecture
### Tech Stack
* [React](https://reactjs.org/) javascript framework
* Hosted with [Netlify](https://www.netlify.com/)
* [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Notable Libraries
* [Tailwind CSS](https://tailwindcss.com/) for CSS simplicity
* [Framer Motion](https://www.framer.com/motion/) for custom animations
* [Lottie React](https://github.com/LottieFiles/lottie-react) for custom Adobe After Effects animations
* [React Chart.js](https://www.npmjs.com/package/react-chartjs-2) for data visualizations

### Style
* [Airbnb's ESLint Configuration](https://airbnb.io/javascript/)

### File Structure

```
├──oceanus-media-project/                     # Root
|  └──.github/
|  └──images/
|  └──animations/                             # Animations related data
|  └──components/  
|     └──america.js                           # America component for home page
|     └──animatedPlastics.js                  # Plastic animation using Framer motion
|     └──barChart.js                          # Chart.js bar graph
|     └──bubbleChart.js                       # Chart.js bubble graph
|     └──lineChart.js                         # Chart.js line graph
|     └──lottieAnimation.js                   # Reusable component for rendering from Lottie
|     └──nav.js                               # Navigation bar for static site
|     └──navigationPage.js                    # Flow navigation component
|     └──pieChart.js                          # Chart.js pie graph
|     └──scrollToTop.js                       # Wrapper for scrolling page to top on navigation
|     └──toggle.js                            # Custom toggle component
|     └──vectors.js                           # Custom SVGs from Figma
|     └──vectors-explore.js                   # Custom SVGs from Figma
|  └──constants/                              # Folder to store constants for pages
|  └──data/                                   # Contains relevant datasets and python scripts
|     └──cleaned/                             # Folder containing cleaned json data
|        └──cleaned-plastic-in-oceans.json  
|        └──future-plastic-data.json      
|        └──plastic-per-person.json         
|     └──raw/                                 # Folder containing raw data
|     └──README.md                            # Details on methodology
|     └──scripts/                             # Folder containing python scripts for data manipulation
|        └──plastic-in-oceans.py           
|        └──future-plastic-data.py         
|        └──plastic-per-person.py     
|     └──future.js                            # Cleaned chartjs data for future page               
|     └──eco.js                               # Cleaned chartjs data for eco page  
|     └──human.js                             # Cleaned chartjs data for human page  
|     └──intro.js                             # Cleaned chartjs data for intro page 
|  └──pages/
|     └──explore/                             # Folder containing static 'explore' pages
|           └──action.js                      # Take action page
|           └──health.js                      # Human Health page
|           └──home.js                        # Home page of static site
|           └──methods.js                     # Methods/sources for project page on static site
|           └──plastic.js                     # More about plastics page
|           └──suzie.js                       # More about sea turtles page
|     └──flows/                               # Folder containing flows related pages
|        └──future.js                         # Future impact flow
|        └──eco.js                            # Ecological impact flow
|        └──human.js                          # Human impact flow
|        └──intro.js                          # Introduction flow
|     └──_app.js
|     └──_document.js
|     └──index.js                             # Home page
|  └──public/                                 # Public directory to store image assets
|  └──styles/
|     └──globals.css.                         # Styling with Tailwind
|     └──style.scss.                          # Styling with CSS/SASS
|  └──.eslintrc 
|  └──.gitignore 
|  └──next.config.js
|  └──package.json
|  └──postcss.config.js
|  └──README.md
|  └──tailwind.config.js                      # Styling config with Tailwind.js
|  └──yarn.lock
```

For more detailed documentation on file structure and specific functions in the code, check the project files themselves.

## Designs
### Figma
Designs for the project were created using Figma. This included the stylization of the website's story flows and pages and the creation of custom SVGs to depict animals, people, and other graphics. Check out the project's Figma [here](https://www.figma.com/file/H9cc0642iE5lUzLiup6LrR/Website?node-id=149%3A192).

Here are some relevant screenshots:
<img width="1440" alt="Screen Shot 2021-06-02 at 12 57 47 AM" src="https://user-images.githubusercontent.com/56173614/120426412-0d180a00-c33e-11eb-8dcc-d3413cf23c11.png">
<img width="1440" alt="Screen Shot 2021-06-02 at 12 59 10 AM" src="https://user-images.githubusercontent.com/56173614/120426424-11dcbe00-c33e-11eb-9fef-ac98724001d0.png">
<img width="1440" alt="Screen Shot 2021-06-02 at 12 58 50 AM" src="https://user-images.githubusercontent.com/56173614/120426502-39338b00-c33e-11eb-937f-933081025f65.png">
<img width="1440" alt="Screen Shot 2021-06-02 at 12 59 34 AM" src="https://user-images.githubusercontent.com/56173614/120426429-13a68180-c33e-11eb-89b6-ef2a669b16d8.png">
<img width="1440" alt="Screen Shot 2021-06-02 at 12 59 23 AM" src="https://user-images.githubusercontent.com/56173614/120426430-14d7ae80-c33e-11eb-9c7c-69ebe111ed86.png">

### Animations
We created animations in [Adobe After Effects](https://www.adobe.com/products/aftereffects.html?sdid=KKQOW&kw=semgeneric&mv=search&ef_id=CjwKCAjwtdeFBhBAEiwAKOIy57-l71oNDjKwZOMwbgoWCZ6579dpdp2R2I0eDStaCpWmBQTj7-1k5hoCyroQAvD_BwE:G:s&s_kwcid=AL!3085!3!384483773473!e!!g!!after%20effects&gclid=CjwKCAjwtdeFBhBAEiwAKOIy57-l71oNDjKwZOMwbgoWCZ6579dpdp2R2I0eDStaCpWmBQTj7-1k5hoCyroQAvD_BwE) using custom made SVGs from our [Figma](https://www.figma.com/file/H9cc0642iE5lUzLiup6LrR/Website?node-id=149%3A192). These include several animations of Suzie the Sea Turtle, a human figure consuming a plastic particle, a sequence depicting plastic degradation, and others.

### Visualizations
We used [React Chart.js](https://www.npmjs.com/package/react-chartjs-2) to build our data visualizations. A more comprehensive breakdown of our methodology is available in the ```data``` folder located within ```src```, where you'll also find the relevant data and Python scripts used for analysis.

---

### Authors
* Catherine Parnell '22, developer + designer
* Julie Jones '22, designer + animator
