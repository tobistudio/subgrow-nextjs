
## TODO LIST


### Drag Drop
email me
amir.meshkin@gmail.com

DB mutation
https://github.com/ameshkin/subgrow/blob/324456f1cf466f438c1fda5142b295d08c57ff4e/src/sites/mutations/updateLinkOrder.ts



### Fix error with state
### udpate react redux to 8, and fix startup error
redux-persist failed to create sync storage. falling back to noop storage.
problem with action { type: '@@redux/INITr.o.o.s.s' }

Also store state in local storage

// TODO: endAdornment with if else condtional instead of state

Keep in mind, the state variables are built. I just need the upgrade, and some modifications to the files.

Also, cleanup to stop the state from running a bunch of times



removed babel, may not be needed
https://blog.bitsrc.io/why-you-should-replace-babel-with-swc-in-next-js-7d47510d0e0d
```{
"presets": ["next/babel"],
"plugins": ["preval", "macros"]
}
```



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
TRUNCATE TABLE Site;
TRUNCATE TABLE Profile;
SET FOREIGN_KEY_CHECKS=1;  -- turn on foreign key checks
```


// TOdo: bug with session and Session table.
needs to delete if user is deleted, or user logs out

// TODO: dashboard page, when facebook link, icon appears





FIVER









### Check Widget




Finish the widget

Update lists

Delete button
https://github.com/ameshkin/subgrow/blob/324456f1cf466f438c1fda5142b295d08c57ff4e/src/components/dashboard/LinkListCard.tsx





Hello there. I need some help with a blitz/next js website.   Mostly minor UI things that have to do with material UI and connecting it to the database.

Such as drag drop.

Most of the work is done.  I just need someone to finish the mutations.

I will point you directly to the code, and it should be very easy.

https://github.com/ameshkin/subgrow/blob/324456f1cf466f438c1fda5142b295d08c57ff4e/src/components/dashboard/AddLinkWidget.tsx





### Remember Me Check

Store remember me in local storage






