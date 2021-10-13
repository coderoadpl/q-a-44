import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageScroll from './PageScroll';

const App = () => {
  return (
    <div>
      <Router>
        <Route
          path={'/:scrollPosition'}
          component={PageScroll}
        />
      </Router>
    </div>
  );
}

export default App;
