import DataTable from "@/components/data-table.jsx";
import Modal from "@/components/Modal.jsx";
import { columns } from "@/components/columns.jsx";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

function Home() {
	return (
		<>
			<div className="container mx-auto text-center mt-10">
				<Modal
					width={600}
					title="New subscription"
					description="Add new subscription to track"
					buttonContent="Add subscription"
				/>
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
