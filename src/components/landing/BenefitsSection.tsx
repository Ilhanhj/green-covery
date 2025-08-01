import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, HeartPulse, Leaf, Scale, ShieldCheck, Zap } from "lucide-react";

const benefits = [
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Turunkan Berat Badan",
    description: "Asam klorogenat membantu mempercepat metabolisme dan pembakaran lemak.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Kaya Antioksidan",
    description: "Melindungi tubuh dari kerusakan sel akibat radikal bebas.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Jaga Kesehatan Jantung",
    description: "Membantu menstabilkan tekanan darah dan kadar gula dalam tubuh.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Tingkatkan Metabolisme",
    description: "Kafein alami dan jahe mendorong metabolisme tubuh lebih efisien.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Daya Tahan Tubuh",
    description: "Sifat anti-inflamasi dari jahe dan kayu manis meningkatkan imunitas.",
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Menjaga Kesehatan Otak",
    description: "Antioksidan dalam kopi hijau dapat membantu melindungi fungsi otak.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-8 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
          Manfaat Terbaik dari Alam
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Setiap tegukan GREEN BEAN COFFEE memberikan kebaikan alami yang dibutuhkan tubuh Anda setiap hari.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center flex flex-col items-center p-6 border-2 border-transparent hover:border-secondary hover:shadow-lg transition-all duration-300 rounded-xl bg-background/50 hover:bg-background">
              <CardHeader className="p-0 mb-4">
                <div className="bg-accent rounded-full p-4 mb-4 w-max mx-auto transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
