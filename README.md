

removed babel, may not be needed
https://blog.bitsrc.io/why-you-should-replace-babel-with-swc-in-next-js-7d47510d0e0d
```{
"presets": ["next/babel"],
"plugins": ["preval", "macros"]
}
```



## heroku

heroku logs --app=subgrow --tail



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

```
