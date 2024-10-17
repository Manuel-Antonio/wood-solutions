import { useState, useEffect } from 'preact/hooks';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  let scrollTimeout = null;

  const handleScroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setIsVisible(false);

    scrollTimeout = setTimeout(() => {
      setIsVisible(window.scrollY > 300);
    }, 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ease-in-out hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="28px"
            height="28px"
          >
            <path d="M12 4.5c-.4 0-.8.2-1.1.6l-7 8c-.5.6-.4 1.5.2 2s1.5.4 2-.2l5.9-6.7 5.9 6.7c.3.4.8.6 1.2.6.3 0 .7-.1 1-.3.6-.5.7-1.4.2-2l-7-8c-.3-.4-.7-.6-1.1-.6z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
