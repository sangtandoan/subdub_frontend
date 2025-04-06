import DataTable from "@/components/data-table.jsx";
import { columns } from "@/components/columns.jsx";

const data = [
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

function Home() {
    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}

export default Home;
