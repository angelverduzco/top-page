import { createContext } from "react";
import { ALBUMS, SINGLES, EXTENDED_PLAYS, LIVE_ALBUMS } from "../data";

const DiscographyContext = createContext();

export const DiscographyContextProvider = (props) => {
    return (
        <DiscographyContext.Provider
            value={{
                ALBUMS,
                SINGLES,
                EXTENDED_PLAYS,
                LIVE_ALBUMS,
            }}
        >
            {props.children}
        </DiscographyContext.Provider>
    );
};

export default DiscographyContext;
