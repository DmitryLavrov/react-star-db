# react-star-db
### React App
___
Use Bootstrap dark theme from https://bootswatch.com/

API server with "Star Wars" database: https://swapi.dev

Pictures are getting from https://starwars-visualguide.com/assets/img/planets/

Regular expressions made using https://regex101.com/

Spinner made using https://loading.io/

For testing compiled project use [npx http-server build](https://www.npmjs.com/package/http-server)
___
####Install [prop-types](https://www.npmjs.com/package/prop-types): npm i prop-types
See documentation about React PropType on [reactjs.org](https://reactjs.org/docs/typechecking-with-proptypes.html)

Another custom React PropType validators form [Airbnb](https://github.com/airbnb/prop-types)
___
## React Router
Use [react-router-dom](https://www.npmjs.com/package/react-router-dom) for web app
```
npm install --save react-router-dom
```
Simple routes
```javascript   
import {BrowserRouter, Route} from 'react-router-dom'

<BrowserRouter>
    <Route path={"/"} exact render={() => <h2>Welcome to StarDB</h2>}/>
    <Route path={"/people"} exact render={() => <h2>People</h2>}/>
    
    <Route path={"/people"} component={PeoplePage}/>
    <Route path={"/planets"} component={PlanetsPage}/>
    <Route path={"/starships"} component={StarshipsPage}/>
</BrowserRouter>              
```
Use `<Link>` instead of `<a>`
```javascript  
import {Link} from "react-router-dom"
   
<Link to="/people">People</Link>
```
Route to detail page
```javascript
<Route path={"/starships"} exact component={StarshipsPage}/>
<Route path={"/starships/:id"} exact render={({match}) => {
  return <StarshipDetails itemId={match.params.id}/>
}}/>
```
Route using HOC withRouter - access to the history object

```javascript
import {withRouter} from "react-router-dom"

const StarshipsPage = ({history}) => {
  return <StarshipList onItemSelected={(itemId) => {
    history.push(`/starships/${itemId}`)
  }}/>
}

export default withRouter(StarshipsPage)
```
Route at the same page using history object
```javascript
const PeoplePage = ({match, history}) => {
    return (
      <Row left={<PersonList onItemSelected={id => history.push(id)}/>}
           right={<PersonDetails itemId={match.params.id}/>}
      />
    )
}
```