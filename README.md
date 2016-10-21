# Rails5-react

## For Production
```
npm run build
SECRET_KEY_BASE=$(rails secret) RAILS_SERVE_STATIC_FILES=true RAILS_ENV=production bundle exec rails server
```

## For Development
```
foreman start
```
Foreman process are in Procfile.

## Ruby Version
* 2.3.1

## JS
* React
* Babel
  * es2015

## CSS
* PostCSS
  * cssnext
* CSS Modules

## Frameworks and Libraries
* Bootstrap
* Font Awesome