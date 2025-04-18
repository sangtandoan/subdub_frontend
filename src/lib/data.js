export const data = [
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

export const dataTrue = [
    {
        id: "1",
        name: "netflex subscription",
        status: "active",
        subscripted_at: "2025-04-01",
        end_at: "2025-04-01",
        duration: "1 month",
        is_cancelled: true,
    },
    {
        id: "2",
        name: "genshin impact subscription",
        status: "active",
        subscripted_at: "2025-03-01",
        end_at: "2025-04-01",
        duration: "1 month",
        is_cancelled: true,
    },
    {
        id: "3",
        name: "zzz subscription",
        status: "active",
        subscripted_at: "2025-02-01",
        end_at: "2025-02-01",
        duration: "1 month",
        is_cancelled: true,
    },
    {
        id: "4",
        name: "hsr subscription",
        status: "active",
        subscripted_at: "2025-01-01",
        end_at: "2025-05-01",
        duration: "1 month",
        is_cancelled: true,
    },
    {
        id: "5",
        name: "youtube subscription",
        status: "active",
        subscripted_at: "2025-03-01",
        end_at: "2025-05-01",
        duration: "1 month",
        is_cancelled: true,
    },
];
let cache = new Map();

export function fetchData(pagination, isCancelled) {
    const queryKey = JSON.stringify(pagination) + isCancelled;

    if (!cache.has(queryKey)) {
        cache.set(queryKey, getData(pagination, isCancelled));
    }
    return cache.get(queryKey);
}

async function getData(pagination, isCacelled) {
    // Add a fake delay to make waiting noticeable.
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    if (isCacelled) {
        return data.filter((row, index) => {
            const start = pagination.pageIndex * pagination.pageSize;
            const end = start + pagination.pageSize;

            return index >= start && index < end;
        });
    } else {
        return dataTrue.filter((row, index) => {
            const start = pagination.pageIndex * pagination.pageSize;
            const end = start + pagination.pageSize;

            return index >= start && index < end;
        });
    }
}
