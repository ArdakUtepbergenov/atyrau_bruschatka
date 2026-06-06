import doPosle1 from "@/assets/do_posle1.jpeg";
import doPosle2 from "@/assets/do_posle2.jpeg";
import doPosle3 from "@/assets/do_posle3.jpeg";

const BeforeAfter = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">До и после</h2>
            <p className="text-lg text-muted-foreground">Реальные результаты наших работ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[doPosle1, doPosle2, doPosle3].map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-card group">
                <img
                  src={img}
                  alt={`До и после ${index + 1}`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
