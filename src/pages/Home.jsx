import DataTable from "@/components/data-table.jsx";
import Modal from "@/components/Modal.jsx";
import { columns } from "@/components/columns.jsx";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Delete session from db and remove cookie contains refresh token
            const url = `${import.meta.env.VITE_API_URL}/auth/logout`;
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
                credentials: "include",
            });

            if (!res.ok) {
                throw new Error("Network response was not ok");
            }

            // Remove access token from local storage
            localStorage.removeItem("access_token");
            navigate("/login");
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <>
            <div className="container mx-auto text-center mt-10 flex justify-end">
                <div className="flex-1">
                    <Modal
                        width={600}
                        title="New subscription"
                        description="Add new subscription to track"
                        buttonContent="Add subscription"
                        className="relative right-[-30px]"
                    />
                </div>
                <Button variant="ghost" className="" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
            <div className="container mx-auto py-4">
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <DataTable columns={columns} is_cancelled={false} />
                    </Suspense>
                </ErrorBoundary>
            </div>
            <div className="container mx-auto py-4">
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <DataTable columns={columns} is_cancelled={true} />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </>
    );
}

export default Home;
