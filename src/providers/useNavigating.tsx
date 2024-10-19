import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigation } from "react-router-dom";

const NavigatingContext = createContext({ isNavigating: false });

export const useNavigatingContext = () => useContext(NavigatingContext);

export const NavigationProvider = ({ children }) => {
    const [isNavigating, setIsNavigating] = useState(false);
    const navigation = useNavigation();

    // Detect when navigation starts and ends
    useEffect(() => {
        console.log(navigation.state)
        if (navigation.state === 'loading') {
            setIsNavigating(true);  // Show LinearProgress when navigation starts
        } else {
            setIsNavigating(false); // Hide LinearProgress when navigation is done
        }
    }, [navigation.state]);

    // Memoize the value passed to the Context provider
    const value = useMemo(
        () => ({ isNavigating }),
        [isNavigating] // This value will only be recalculated if `isNavigating` changes
    );

    return (
        <NavigatingContext.Provider value={value}>
            {children}
        </NavigatingContext.Provider>
    );
};
