import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home"

function App() {
  const [loading, setLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  const loadingRef = useRef(null)
  const unLoadingRef = useRef()
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  
  return (
    <>
      {
        loading ? (
          <div ref={loadingRef} className="flex items-center justify-center h-screen bg-gray-600 text-white text-xl">
            <div>
              <div>{loadingPercent}+</div>
              <div className="mt-4 h-2 w-full bg-gray-300">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${loadingPercent}%`, transition: 'width 0.3s ease-in-out' }}
                ></div>
              </div>
            </div>
          </div>
        ) : <div ref={unLoadingRef}>
          <Home /></div>
      }
    </>
  )
}

export default App
