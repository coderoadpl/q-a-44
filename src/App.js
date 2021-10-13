import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PageScroll, { scrollPositions } from './PageScroll';

const App = () => {
  return (
    <div>
      <Router>
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: 50,
            width: '100%',
            display: 'flex',
            backgroundColor: 'white',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {
            Object.values(scrollPositions).map((scrollId) => {
              return (
                <Link to={`/${scrollId}`}>
                  {scrollId.toUpperCase()}
                </Link>
              )
            })
          }
        </div>
        <Route
          path={'/:scrollPosition'}
          component={PageScroll}
        />
      </Router>
    </div>
  );
}

export default App;
