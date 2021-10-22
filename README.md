
# 22 Mern Redux Store


## User Story

```md
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

## Acceptance Criteria

```md
GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context API
```
## Usage

- e-commerce site that is arraned by category.
- Items can be added to and deleted from cart directly directly from the product page.
- Quantities can be updated in cart.
- To continue to purchase their items, users must sign up and login.
- Payments are handled by Stripe.
- Users purchases will be saved in history.

## Deployed App

![Redux-Store-Screenshot](https://user-images.githubusercontent.com/82725636/138528262-09d67fa1-2781-4c47-a609-049852146be0.png)
![redux-store-screenshot-2](https://user-images.githubusercontent.com/82725636/138528450-e81eda75-8733-4100-a278-fad68ba8446a.png)
)

## Technologies Used

<p><a href=https://redux.js.org>redux</a> 

