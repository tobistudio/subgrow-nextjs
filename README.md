## setup

Next.js, blitz, react and zod with final form.


```bash
npm i

# setup dev environment
blitz dev

# build app



```

## WORKFLOW

Production will be done on the `develop` branch, and merged into the `main` branch

Husky will take care of database updates on commit


`blitz build` will run on push to `main` branch


Branches are created from `develop`

And PR's are merged back into `develop`

A full build is done once it's merged into `main`



## Test Accounts

Login using this account with username tester
http://localhost:3000/auth/login

tester@gmail.com
welcome123


## List of Pages and Flow

```
├── home
│   ├── login/signup
│   │   ├── /dashboard
│   │   ├── /apps
│   │   ├── /apps/facebook
│   │   ├── /pricing
│   │   ├── /upgrade
│   │   ├── /account/settings
│   │          -> link to stripe subscription manager
├── landing
├── /[profile-username]

```


Profile Page
http://localhost:3000/tester

Dashboard Page
http://localhost:3000/dashboard


Signup
http://localhost:3000/auth/signup


Apps
http://localhost:3000/sites/1/edit


Create FB App
http://localhost:3000/apps/facebook

Profile page
http://localhost:3000/ameshkin3

Settings Page
http://localhost:3000/account/settings


## THEMES


#### Breakpoints
https://mui.com/material-ui/customization/breakpoints/


Default breakpoints
Each breakpoint (a key) matches with a fixed screen width (a value):

xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
These values can be customized.

## STRIPE CUSTOMER FLOW

Three Level Subcription system

Checkout Forms
src/account

Upgrade Page
src/pages/account/upgrade.tsx




## TODO LIST

#### Subscription Page
// TODO: subscription


// TODO: add stripe subscriptions
// https://stripe.com/docs/billing/subscriptions/coupons

// https://www.mohammadfaisal.dev/blog/how-to-create-a-stripe-subscription-with-reactjs-and-nodejs
// https://stripe.com/docs/billing/subscriptions/build-subscriptions?ui=checkout

// PHASE I
// 1. Subscription Page
// https://github.com/stripe-samples/checkout-single-subscription

// PHASE II
// 1. // TODO: coupon code
// 2. easy to change subscription, with a modal showing pricing tables component
//


// Followed at first
// https://www.mohammadfaisal.dev/blog/how-to-create-a-stripe-subscription-with-reactjs-and-nodejs


// TODO: after upgrade, need to also change the role in
// Session
LEVEL3

#### pricing tables
Linked to sub page

https://linktr.ee/s/pricing/

#### apps page
https://linktr.ee/marketplace



#### User Box, icons, drop down user



#### Apps Page




#### individual GA analytics


#### Social Media features, like icons
// TODO: dashboard page, when facebook link, icon appears





### Fix error with state
### udpate react redux to 8, and fix startup error
redux-persist failed to create sync storage. falling back to noop storage.
problem with action { type: '@@redux/INITr.o.o.s.s' }

Also store state in local storage

// TODO: endAdornment with if else condtional instead of state

Keep in mind, the state variables are built. I just need the upgrade, and some modifications to the files.

Also, cleanup to stop the state from running a bunch of times



Fix Sidepanel State
https://github.com/ameshkin/subgrow/blob/b535280ad63dc7c530b80bb0cafc3935da903fb8/src/components/template/SidePanel/ProfileDesignPanel.js




### add loaders

dash, login, sign up forms, middle of screen



## heroku
```bash
# https://blitzjs.com/docs/deploy-heroku
heroku logs --app=subgrow --tail




```

```bash

# find port and kill
lsof -i :3000
kill -9 <PID>

# run typescript linter

npx tsc


# https://www.npmjs.com/package/fb-react-sdk


# most recent node

nvm install 18
nvm use 18
nvm alias default


ANALYZE=true npm run build


heroku config:set SESSION_SECRET_KEY=



```


### database

```mysql


SET FOREIGN_KEY_CHECKS=0;  -- turn off foreign key checks
TRUNCATE TABLE User;  -- truncate tables
TRUNCATE TABLE Session;
TRUNCATE TABLE Link;
TRUNCATE TABLE Profile;
SET FOREIGN_KEY_CHECKS=1;  -- turn on foreign key checks
```






### Remember Me Check

Store remember me in local storage


### MISC

removed babel, may not be needed
https://blog.bitsrc.io/why-you-should-replace-babel-with-swc-in-next-js-7d47510d0e0d
```{
"presets": ["next/babel"],
"plugins": ["preval", "macros"]
}
```


## ISSUES

1. FB Login

https://subgrow.herokuapp.com/auth/login
You are overriding current access token, that means some other app is expecting different access token and you will probably break things. Please consider passing access_token directly to API parameters instead of overriding the global settings.



## PREMIUM FEATURES
https://linktr.ee/s/pricing/

1. Google Analytics
2. Support
3. Mailchimp Integration
2. Customizable Templates
3. Custom Backgrounds
4. Custom Fonts/Buttons
3. Twitter feed, fb, api services
4. hide logo, buttons
5. NFT Features = $10 Validation fee, user sends ETH from wallet to verify ownership
6. Google Analytics, and some custom charts, etc
7. Click Tracking, conversions
8. 2FA
9. Special Dashboard that lists all profiles, easy access, followers, basic info
10. Subscribe feature, mailchimp integration
11. upload/or preferebly show pics from other services


![exampl1.png](.examples%2Fexampl1.png)
