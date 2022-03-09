import useWeb from "@/Context/WebContext";

const useLoading = () => {
    const { loading, setLoading } = useWeb();
    return {
        loading,
        setLoading,
    }
}

export default useLoading