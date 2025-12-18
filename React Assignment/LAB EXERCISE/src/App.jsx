import './index.css'

import WelcomeJSX from './components/WelcomeJSX'
import Greeting from './components/Greeting'
import WelcomeMessage from './components/WelcomeMessage'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import ClickButton from './components/ClickButton'
import DynamicInput from './components/DynamicInput'
import LoginLogout from './components/LoginLogout'
import VotingEligibility from './components/VotingEligibility'
import FruitList from './components/FruitList'
import UserList from './components/UserList'
import ControlledForm from './components/ControlledForm'
import DataFetcherClass from './components/DataFetcherClass'
import CounterHooks from './components/CounterHooks'
import DataFetcherHooks from './components/DataFetcherHooks'
import ReduxCounter from './components/ReduxCounter'
import UseRefExample from './components/UseRefExample'


function App() {
  return (
    <div className="container py-3">
      <h1 className="mb-4">React Fundamentals</h1>

     

      <div className="card mb-3 p-3">
        <h5>Lab 1: JSX</h5>
        <WelcomeJSX />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 2: Components</h5>
        <Greeting name="Satvik" />
        <WelcomeMessage />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 3: Props & State</h5>
        <UserCard name="John" age={25} location="New York" />
        <Counter />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 4: Events</h5>
        <ClickButton />
        <DynamicInput />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 5: Conditional Rendering</h5>
        <LoginLogout />
        <VotingEligibility />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 6: Lists</h5>
        <FruitList />
        <UserList />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 7: Forms</h5>
        <ControlledForm />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 8: Lifecycle</h5>
        <DataFetcherClass />
      </div>

      <div className="card mb-3 p-3">
        <h5>Lab 9: Hooks</h5>
        <CounterHooks />
        <DataFetcherHooks />
        <ReduxCounter />
        <UseRefExample />
      </div>
    </div>
  )
}

export default App
