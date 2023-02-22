
# Digital Business Card 
This project was built with React.

![business-card](https://user-images.githubusercontent.com/77986239/219899304-66930e0e-63f2-4e7e-ba34-354b32daca0f.PNG)

## Quick Setup
Fork then clone the project into local machine 🍴\
run 'npm install' in the root folder to install all the necessary packages 👩‍💻\
Happy coding 💻

**NB:**

1. The noselect class prevents selction of texts
```css
  .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
         -khtml-user-select: none; /* Konqueror HTML */
           -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
    }
```

1. The nodrag class prevents image selection and dragging
```css
  .nodrag {  

      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-drag: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
   }
```
