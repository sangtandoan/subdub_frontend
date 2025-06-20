let cache = new Map();

export function fetchData(pagination, is_cancelled) {
    const queryKey = JSON.stringify(pagination) + "_" + is_cancelled;

    if (!cache.has(queryKey)) {
        cache.set(queryKey, getData(pagination, is_cancelled));
    }
    return cache.get(queryKey);
}

async function getData(pagination, is_cancelled) {
    //     const url = `${import.meta.env.VITE_API_URL}/subscriptions
    // ?limit=${pagination.pageSize}&offset=${pagination.pageIndex * pagination.pageSize}&is_cancelled=${is_cancelled}`;

    const url = `${import.meta.env.VITE_API_URL}/subscriptions
?limit=${pagination.pageSize}&page=${pagination.pageIndex}&isCancelled=${is_cancelled}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    });

    const json = await response.json();

    return {
        // rows: json.data.subscriptions ? json.data.subscriptions : [],
        // total: json.data.count,
        rows: json.data.content ? json.data.content : [],
        total: json.data.page.total_pages,
    };
}
