import { createContext, useContext, useState, useEffect } from 'react';
import { products as data } from './ultils/constant'
import { customers as feedback } from './ultils/constant';
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [showButtonScroll, setShowButtonScroll] = useState(false);
    const [tempProducts, setTempProducts] = useState([]);
    // setup data
    useEffect(() => {
        setProduct(data);
        setIsLoading(false);
        setCustomers(feedback);
        setTempProducts(data);
    }, []);


    // handle close - open sidebar
    const handleOpenSidebar = () => {
        setIsOpenSidebar(true);
    }
    const handleCloseSidebar = () => {
        setIsOpenSidebar(false);
    }

    // handle resize - close sidebar
    const handleResize = () => {
        if (window.innerWidth > 992) {
            setIsOpenSidebar(false);
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize
        )

        return (() => {
            window.removeEventListener('resize', handleResize)
        })
    }, [window.innerWidth])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    }

    const handleFilterBrand = (name) =>{
        const result = products.filter((item, index)=>{
            if(item.brand === name){
                return true;
            }
            return false;
        })
        setTempProducts(result);
    }
    return <GlobalContext.Provider value={{
        products, setProduct,
        isLoading, setIsLoading,
        handleCloseSidebar, handleOpenSidebar,
        isOpenSidebar, customers,
        showButtonScroll, setShowButtonScroll,
        handleScrollToTop, tempProducts, setTempProducts, handleFilterBrand,
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
