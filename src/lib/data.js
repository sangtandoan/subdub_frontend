let cache = new Map();

export function fetchData(pagination, is_cancelled) {
	const queryKey = JSON.stringify(pagination) + "_" + is_cancelled;

	if (!cache.has(queryKey)) {
		cache.set(queryKey, getData(pagination, is_cancelled));
	}
	return cache.get(queryKey);
}

async function getData(pagination, is_cancelled) {
	const url = `http://localhost:8080/api/v1/subscriptions/
?limit=${pagination.pageSize}&offset=${pagination.pageIndex * pagination.pageSize}&is_cancelled=${is_cancelled}`;

	console.log(url);
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
	});

	const json = await response.json();
	console.log(json);

	return {
		rows: json.data.subscriptions,
		total: json.data.count,
	};
}
