
const About = () => {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Header Section */}
        <header className="bg-blue-500 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="mt-2 text-lg">Discover more about your favorite movies</p>
          </div>
        </header>
  
        {/* Main Content */}
        <main className="container mx-auto py-12 px-4">
          {/* Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to our movie portal, where we bring the magic of cinema right to your fingertips. 
              Our platform is designed for movie enthusiasts to explore, discover, and learn more about 
              their favorite films, genres, and actors. Whether you’re a casual viewer or a hardcore cinephile, 
              we've got something for you!
            </p>
          </section>
  
          {/* Mission */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to create a platform that fosters a love for movies and storytelling. 
              Our mission is to be the go-to destination for movie enthusiasts by providing accurate 
              information, insightful reviews, and an engaging user experience.
            </p>
          </section>
  
          {/* Features */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-700">Comprehensive Movie Database</h3>
                <p className="text-gray-600 mt-2">
                  Access detailed information about movies, including genres, cast, ratings, and more.
                </p>
              </div>
  
              {/* Feature 2 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-700">Personalized Recommendations</h3>
                <p className="text-gray-600 mt-2">
                  Get tailored movie suggestions based on your preferences and watch history.
                </p>
              </div>
  
              {/* Feature 3 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-700">Latest Reviews and Updates</h3>
                <p className="text-gray-600 mt-2">
                  Stay updated with the latest reviews, news, and trends in the world of cinema.
                </p>
              </div>
  
              {/* Feature 4 */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-700">User-Friendly Interface</h3>
                <p className="text-gray-600 mt-2">
                  Enjoy a seamless and intuitive browsing experience, designed with simplicity in mind.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default About;
  