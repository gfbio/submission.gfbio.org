# Submission user-interface

ReactJs based user-interface code and components, 
like data-submission-forms, dashboards, etc..

- urls.py to determine root of urls that are managed by react router.
    Django templates that initialise react apps are rendered here.


## Note on set-up 

- TODO: axios instead of whatwg fetch ???

## Commands

- refer to react_boilerplate_docs

### Develop standalone with hot-reloading

      npm start

start a local node server that provides access
to localhost and network internal IP. E.g:
  
      Access URLs:
      -----------------------------------
      Localhost: http://localhost:3000
      LAN: http://172.30.172.168:3000
  
### Develop in conjunction with django+templates

start a script that perform a complete production build
of the react-app and copies, renames, replaces all wherever
necessary, to then perform a collect static action for django:
  
      npm run collect
      
then access app via django development server. 

### Develop/Design standaline in layout_playground

Based on free bootstrap 4 template. Gulp used for
development and build commands.

- local layout development only (html, (s)css, etc...)

        cd layout_playground
        gulp dev
        
              Local: http://localhost:3000
           External: http://172.30.172.168:3000
             ---------------------------------------
                      UI: http://localhost:3001
             UI External: http://localhost:3001

- build and copy results to static

        npm run copylayout


### Git and built app in django static directory

#### Initial Approach

- app code is under version control. build/ and its content is not.
- built app code in static/js or static/css 
  (copied by 'npm collect' for example) may be under 
  version control. This is not a strict rule since app can be rebuild
  at any time.
- if built app code is under VC and is updated, old js chunks should be
  deleted
  
  
  

