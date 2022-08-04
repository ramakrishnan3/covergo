# Architecture

I have implemented the solution using React library and supporting modules like **react-router-dom** for routing and **tailwindcss** for easy styling as highlighted in the document.


# Components

## Hero

We have a generic Hero component that we have reused across the home, summary and error pages by passing the props accordingly. Here I have showcased component reusability

## Form

Form component is the main and complex component. We have used hooks **useState** for saving the state, **useEffect** logic based on specific state change and **useNavigate** to navigate to other components.

*useEffect* calculates the premium every time one of the factors related to premium changes *[country, age, plan]*
*handleClick* function decides where the Next button has to take based on the age of the person.
We have also addd form Validation which alerts if the required fields are not filled in.
Premium for other plans are calculated on the fly and displayed next to it in each render cycle.

## Layout

Layout is a high level component that has all the wrapper elements and renders the child routes within it. We have not used this component extensively here but as the project grows this will be needed/handy.

Further, components can be created in the similar fashion wherever necessary.

# Run the project
npm i
npm start