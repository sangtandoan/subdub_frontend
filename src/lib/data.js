export let data = [
    {
        id: "1",
        name: "netflex subscription",
        status: "active",
        subscripted_at: "2025-04-01",
        end_at: "2025-04-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "2",
        name: "genshin impact subscription",
        status: "active",
        subscripted_at: "2025-03-01",
        end_at: "2025-04-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "3",
        name: "zzz subscription",
        status: "active",
        subscripted_at: "2025-02-01",
        end_at: "2025-02-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "4",
        name: "hsr subscription",
        status: "active",
        subscripted_at: "2025-01-01",
        end_at: "2025-05-01",
        duration: "1 month",
        is_cancelled: false,
    },
    {
        id: "5",
        name: "youtube subscription",
        status: "active",
        subscripted_at: "2025-03-01",
        end_at: "2025-05-01",
        duration: "1 month",
        is_cancelled: false,
    },
];

let cache = new Map();

export function fetchData(pagination) {
    const queryKey = JSON.stringify(pagination);

    if (!cache.has(queryKey)) {
        cache.set(queryKey, getData(pagination));
    }
    return cache.get(queryKey);
}

async function getData(pagination) {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    const url = `http://localhost:8080/api/v1/subscriptions/?limit=${pagination.pageSize}&offset=${pagination.pageIndex}`;

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "",
        },
    });

    const json = await response.json();
    console.log("Hello");
    return {
        rows: json.data.subscriptions,
        total: json.data.count,
    };
}
