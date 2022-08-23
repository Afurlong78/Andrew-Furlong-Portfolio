import React, { useState, useEffect, useContext } from "react";

const ObserverContext = React.createContext();

export const useObserverContext = () => {
  return useContext(ObserverContext);
};

export function ObserverProvider({ children }) {
  // const [cardVisible, setCardVisible] = useState();

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         setCardVisible(entry.isIntersecting);
  //         if (entry.isIntersecting) observer.unobserve(entry.target);
  //       });
  //     },
  //     {
  //       threshold: 0.75,
  //     }
  //   );
  //   observer.observe(cardRef.current);
  // }, []);

  const observer_state = {};

  return (
    <ObserverContext.Provider value={observer_state}>
      {children}
    </ObserverContext.Provider>
  );
}

export default ObserverProvider;
