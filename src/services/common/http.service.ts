

export const httpGetPublic = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}${params ? `?${params.toString()}` : ''}`;
    console.log(`Fetching URL: ${url}`); // Agrega un mensaje de depuración
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!res.ok) {
        console.error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`); // Agrega más detalles del error
        throw new Error(`Failed to fetch ${endpoint}`);
    }
    return res.json();
};

export const httpGet = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
    const url = `${process.env.NEXT_PRIVATE_API_UR}/${endpoint}${params ? `?${params.toString()}` : ''}`;
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
    }
    return res.json();
}