const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `API error: ${response.status}`);
    }

    return response.json();
}

export const api = {
    get: (endpoint: string) => fetchApi(endpoint, { method: "GET" }),
    post: (endpoint: string, data: any) => fetchApi(endpoint, { method: "POST", body: JSON.stringify(data) }),
    put: (endpoint: string, data: any) => fetchApi(endpoint, { method: "PUT", body: JSON.stringify(data) }),
    delete: (endpoint: string) => fetchApi(endpoint, { method: "DELETE" }),
};
