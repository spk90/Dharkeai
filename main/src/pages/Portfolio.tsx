import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-32">
        <h1 className="text-4xl font-bold mb-8">Portfolio Management</h1>
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Investment Portfolio</h2>
          <p className="text-muted-foreground mb-4">
            Track and manage your investments in real-time. Get insights into your portfolio performance
            and make data-driven decisions.
          </p>
          {/* Placeholder for portfolio management features */}
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed rounded-lg">
            Portfolio management features coming soon
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;