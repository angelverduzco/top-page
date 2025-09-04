import { useContext } from "react";
import DiscographyContext from "../contexts/DiscographyContext";

function useDiscography() {
    const discography = useContext(DiscographyContext);
    return discography;
}

export default useDiscography;
