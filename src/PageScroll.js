import React from 'react';
import { useParams } from 'react-router';

const scrollPositions = {
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
}

const PageScroll = () => {
  const { scrollPosition } = useParams();

  React.useEffect(() => {
    const scrollId = scrollPositions[scrollPosition]

    if(!scrollId) return

    const domElement = document.querySelector(`#${scrollId}`)

    const scrollHeight = domElement.offsetTop
    
    window.scrollTo(0, scrollHeight)
  }, [scrollPosition])

  return (
    <div>
      <div
        id={scrollPositions.first}
        style={{ width: '100%', height: '100vh', backgroundColor: 'red' }}
      >

      </div>
      <div
        id={scrollPositions.second}
        style={{ width: '100%', height: '100vh', backgroundColor: 'yellow' }}
      >

      </div>
      <div
        id={scrollPositions.third}
        style={{ width: '100%', height: '100vh', backgroundColor: 'black' }}
      >

      </div>
      <div
        id={scrollPositions.fourth}
        style={{ width: '100%', height: '100vh', backgroundColor: 'blue' }}
      >

      </div>
    </div>
  );
}

export default PageScroll;
