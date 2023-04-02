import useData from "./useData";

interface Platform {
    id: number;
    name:string;
    slug:string;
}

const usePlatform = () => useData<Platform>("/platforms/lists/parents"); 
    //{params:{platforms: selectedPlatform?.id}}, [selectedPlatform?.id]);

export default usePlatform;