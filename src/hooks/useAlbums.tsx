import useSWR from "swr";

const BASE_URL = import.meta.env.VITE_BE_URL;

export type Album = {
    id: number;
    title: string;
    img: string;
    description: string;
    link: string;
};

type UseAlbumsReturn = {
    data: { albums: Album[] } | undefined;
    isLoading: boolean;
    isError: unknown;
};


const useAlbums = (): UseAlbumsReturn => {
    const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then(res => res.json());

    const { data, error, isLoading } = useSWR<{ albums: Album[] }>(`${BASE_URL}/albums`, fetcher)

    return {
        data,
        isLoading,
        isError: error
    }
};

export default useAlbums;