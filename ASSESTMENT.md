## Challenges Encountered

Before writing tests, I had already implemented the dark and light modes in the application. This led to a big delay in getting the tests to work. The main problem was the need to wrap the components in the test with the ThemeProvider, ensuring that the theme context was appropriately applied, otherwise test broke.

I explored Styled Components for the first time and I must acknowledge that I am uncertain whether my usage aligns entirely with best practices.
