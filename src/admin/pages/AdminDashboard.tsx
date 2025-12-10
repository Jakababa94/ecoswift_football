const AdminDashboard = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6">Tournament Dashboard</h1>
            <p className="text-gray-400">Welcome to the Ecoswift Football Admin Portal.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Stats placeholders */}
                <div className="bg-dark-surface p-6 rounded-lg border border-white/10">
                    <h3 className="text-gray-400 text-sm font-medium uppercase">Total Teams</h3>
                    <p className="text-3xl font-bold text-white mt-2">--</p>
                </div>
                <div className="bg-dark-surface p-6 rounded-lg border border-white/10">
                    <h3 className="text-gray-400 text-sm font-medium uppercase">Pending Reviews</h3>
                    <p className="text-3xl font-bold text-gold mt-2">--</p>
                </div>
                <div className="bg-dark-surface p-6 rounded-lg border border-white/10">
                    <h3 className="text-gray-400 text-sm font-medium uppercase">Total Revenue</h3>
                    <p className="text-3xl font-bold text-green mt-2">--</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
