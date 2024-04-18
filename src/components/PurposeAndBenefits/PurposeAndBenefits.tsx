const PurposeAndBenefits = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Purpose and Benefits of IOSPdb
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover, collaborate, and contribute to open-source projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Purpose</h3>
              <p className="mt-4 text-gray-600">
                IOSPdb is a centralized platform to connect individuals within
                the open-source community.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                For Project Owners
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>Showcase your open-source projects</li>
                <li>Recruit developers and collaborators</li>
                <li>Manage project resources and track contributions</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                For Contributors
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>Discover and explore open-source projects</li>
                <li>Collaborate with project owners and contributors</li>
                <li>Build your portfolio and expand your network</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">For Beginners</h3>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>Access beginner-friendly projects and resources</li>
                <li>Learn from experienced developers</li>
                <li>Receive guidance to navigate the open-source landscape</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurposeAndBenefits;
