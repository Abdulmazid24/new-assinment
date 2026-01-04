import { useParams } from 'react-router-dom';

function TrainerDetail() {
    const { id } = useParams();

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card p-8 text-center">
                    <div className="text-6xl mb-4">👨‍🏫</div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Trainer Profile</h2>
                    <p className="text-gray-600 mb-6">
                        Detailed trainer profile page - Coming in next phases
                    </p>
                    <p className="text-sm text-gray-500">Trainer ID: {id}</p>
                </div>
            </div>
        </div>
    );
}

export default TrainerDetail;
