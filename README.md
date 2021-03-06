# <a id="top"></a>Pie of the Day Finder

A simple react app for finding the best `Pie of the Day`

## Contents

1. **[Background and Problem](#1)**
2. **[Wireframes](#2)**
3. **[Styling Framework](#3)**
4. **[HTTP Client](#4)**
5. **[Test Pipeline](#5)**
6. **[Coding Style](#6)**
7. **[Deployment to Netlify](#7)**
8. **[Other considerations](#8)**
9. **[Final Product](#9)**

## <a id="1"></a>Background and Problem

Jake and his work mates absolutely love pies! In fact, they love pies so much, that they only eat them for lunch. They hate going out of their comfort zone to try out other lovely foods such as: fried rice, banh mi, pho, sushi, fried chicken, etc. Jake and friends tend to order their pies at 10am sharp, so they are guarenteed to get the pies they want (Jake usually mixes it up and goes to a different pie shop for each day of the week). Each pie shop has a 'Pie of the day' that are typically cheaper than the other pies. Jake calls up each shop he knows to find out which shop has the cheapest 'Pie of the day'. Jake and friends only get the 'Pie of the day' since they love variety in their pies and it's cheap. Jake places the order and once it reaches lunch time, Jake and friends go to their selected store to collect their pies.

However, since the price of 'Pie of the day' at each shop changes each day, Jake find's it a pain to call up each shop to find out which 'Pie of the day' is cheapest. He would really like a web application that would make this process easier for him.

[Back to Top](#top)

## <a id="2"></a>Wireframes

My wireframes focus on a simple yet responsive design. For the pie list, it uses a very familiar card design which includes the information about the Pie and its corresponding store. It also includes a color-coded rating marker box similar to Zomato and Rotten Tomatoes.

The idea for the design is to have a listed card layout but with the features of a filterable data table which can sort data and search keywords.

### Mobile

![](/docs/images/Mobile.png)

### Desktop

![](/docs/images/Desktop.png)

[Back to Top](#top)

## <a id="3"></a>Styling Framework

The styling framework used for this project is `Bootstrap 4`. Bootstrap 4 provides cross-browser compatibility and a very useful set of classes which makes styling a lot easier. The card layout also fits the design that was established in my wireframes.

For the fonts, I chose to use `Lobster` for the app's heading and `Raleway` for the rest of the page. With a little bit of research, I found that this is a good combination to have in restaurant/food websites.

[Back to Top](#top)

## <a id="4"></a>HTTP Client

The HTTP client of choice for this project is `Axios`. Among all the HTTP client libraries, Axios is the one that I am most familiar with. It provides easy setup for configurations such as base URLs and authentication tokens. It also works really well with the `async/await` syntax as it is a Promise-based HTTP client.

[Back to Top](#top)

## <a id="5"></a>Test Pipeline

The test framework that I used for the project is `Jest` together with `Flow` syntax checker.

### Jest

My tests cover all functions used by the react app which includes API fetches from the Pie API and utility functions such as searching, sorting and retrieving the full address of a store.

Due to my limited knowledge of front-end TDD, I decided not to use Jest for my front-end components. This is something that I would like to improve in the future.

There is also a warning that I could not remove from the jest test of App.js. The message `Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.` is an enigma for me at the moment as this does not usually happen in my previous projects. The reason why it appears in the test is because the state is being set on a catch block from within a function called by `componentDidMount()` and I chose to keep that setState block so I can output errors when there are issues loading my lists.
![](/docs/images/Jest.png)

### Flow

My flow tests are just simple and straightforward but it reinforces my confidence with the syntax and coding style that I adapted. Majority of the flow issues I purposedly ignored are `type annotation errors` and `setState blocks` which look at undefined variables when the components have not yet been mounted.

![](/docs/images/Flow.png)

[Back to Top](#top)

## <a id="6"></a>Coding Style

The coding style that I adapted and most comfortable with is `ES6 / ES7`. I find that my code is cleaner and more manageable with this syntax.

In addition, I used the `async/await` syntax very widely as I prefer it over numerous amount of `then/catch` Promise blocks.

The coding style for my React components follow a `single smart component / multiple dumb component` pattern. This allows me to manage my state exclusively in App.js.

[Back to Top](#top)

## <a id="7"></a>Deployment to Netlify

To showcase the app without the hassle of deployment, I decided to deploy the app to
https://pie-of-the-day.netlify.com

[Back to Top](#top)

## <a id="8"></a>Other Considerations

### Use of API for Searching/Sorting

I purposedly did not use the API for searching and sorting the pie list. I chose to use the `filter` syntax instead as it allows my single page app to respond quicker with just this few amount of records. There are several use cases however that I would prefer using the API for searcing/sorting. Such use cases would be when there are millions of records and a lazy load approach is much more preferable.

### Adding more filters

It is possible to add more filters such as `Rating Ascending/Descending`. However, since it is store data and is not present in the pie data by default, it would require us to populate the list with store data using the store id.

[Back to Top](#top)

## <a id="9"></a>Final Product

I enjoyed doing this challenge as much as my other projects.

### Desktop

![](/docs/images/Desktop-Final.png)

### Tablet

![](/docs/images/Tablet-Final.png)

### Mobile

![](/docs/images/Mobile-Final.png)

[Back to Top](#top)