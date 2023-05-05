## setup

Next.js, blitz, react and zod with final form.


```bash
npm i

# setup dev environment
blitz dev

# build app

# seed db

npx node --loader ts-node/esm "db/seed.ts"

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
tester
welcome123


LEVEL 2

tester2
tester2@gmail.com



## List of Pages and Flow

```
├── home
│   ├── login/signup
│   │   ├── /dashboard
│   │   ├── /apps
│   │   ├── /apps/facebook
│   │   ├── /pricing
│   │   ├── /account/upgrade
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


// TODO: themes, that can be selected
https://linktr.ee/s/templates/


## THEMES




### USER THEMES



The theming/template system will use mui to apply a default theme to profile page.

1. When the user first signs up, the default theme `modern.tsx` is entered into the database.

This file comes from

`https://github.com/ameshkin/subgrow/blob/bfc85b159894a59008ea3ff926b6d9758d929b79/data/userthemes/modern.tsx`


2. On the profile page itself, a logged in user will see a pallete icon

This will open a side panel with design options.

Selections on this page will update the state, and update the theme in real time.

The save button will save this into the `Profile` table.  The files in `data/userthemes` will only be used when the user first signs up.


3.

### Breakpoints
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

Three Level Subscription system

Checkout Forms
src/account

Upgrade Page
src/pages/account/upgrade.tsx

#### Webhooks

[Webhook Docs](https://stripe.com/docs/webhooks)

[Webhook Testing](https://stripe.com/docs/webhooks/test)


#### Subscription and Customer Management
https://stripe.com/docs/customer-management

[Integrate Portal](https://stripe.com/docs/customer-management/integrate-customer-portal)


Linking to Stripe's Subscription Management Page is the easiest
way to manage a user's subscription.
https://billing.stripe.com/p/login/3csaFqbet2r7duo5kk



#### Stripe Testing
http://localhost:3000/account/upgrade

anyemail@gmail.com

Credit Card
4242424242424242


Debit
4000056655665556


```json
  {
    "schema": "db/schema.prisma"
  }

```

#### ACCOUNT

1. settings


2. deactivation

Changes status of user table to `inactive` but keeps all data


#### CRON

1. Subscription cancel

We MAY need a cron to go through Customer table and check `sub_end` field

If past this date, then change `level` in customer, user, and session tables





1. username system

After a user signs up

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




#### User Box, icons, drop down user



#### Apps Page
https://linktr.ee/marketplace

Apps and options are set as `widgets` in Profile table

The `Apps` table will only hold generic data about the service, such as facebook API.

{facebook: show_feed: 1}


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
A simple mysql database is used with prisma and is currently temporarily hosted
on godaddy.
https://www.prisma.io/docs/guides/migrate/seed-database


#### Seeding DB

This file contains some sql that can be used to seed the DB withouot prisma.

`.scripts/seed.sql`


Database exports are being saved here for the time being.

`data/database`



```bash




```


```bash

# format, validate and generate prisma
npm run db

npx prisma db seed

```

```mysql

# nuke delete all tables
# https://github.com/ameshkin/subgrow/blob/d420b33c5f257113dc0a0d7d01974fe6983eed35/.scripts/nuke.sql

# Seed
# https://github.com/ameshkin/subgrow/blob/d420b33c5f257113dc0a0d7d01974fe6983eed35/.scripts/seed.sql


```






### CONFIG

Not using other ones

`src/configs`

[theme.config.tsx](src%2Fconfigs%2Ftheme.config.tsx)


[plans.config.tsx](src%2Fconfigs%2Fplans.config.tsx)



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
12. Custom Header/Footer

![exampl1.png](.examples%2Fexampl1.png)





1. getSession() gives you session
2. On subscription creation, update User table.  ROLE = LEVELx
3. Recreate the session, update publicData with new role
4. Automatically fill out email field, if possible
5.






