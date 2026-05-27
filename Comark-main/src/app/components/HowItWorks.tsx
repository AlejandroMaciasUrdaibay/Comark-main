import { motion } from "motion/react";
import { MessageCircle, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Nos contactas y entendemos tu negocio",
    description:
      "Hablamos por WhatsApp y escuchamos cómo funciona tu operación para identificar lo que realmente necesitas.",
    color: "#00C6FF"
  },
  {
    number: "02",
    icon: Settings,
    title: "En 48 horas tienes tu sistema listo",
    description:
      "Armamos tu plataforma web con las funciones que tu negocio usa hoy, sin complicaciones ni tiempos largos.",
    color: "#00E5C6"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Tu negocio funciona con orden",
    description:
      "Dejas atrás libretas y WhatsApp. Empiezas a trabajar con un sistema claro, accesible y sin depender de nadie.",
    color: "#00FF94"
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-[#111318]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cómo funciona — 3 pasos
          </h2>
          <p className="text-gray-400 text-lg">
            Nos contactas, lo armamos y tu negocio funciona con orden.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.6%] right-[16.6%] h-0.5 bg-gradient-to-r from-[#00C6FF] via-[#00E5C6] to-[#00FF94] opacity-30"></div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                    style={{ background: `${step.color}20`, border: `2px solid ${step.color}50` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>

                  <div
                    className="text-6xl font-black mb-3 bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent select-none"
                  >
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-block bg-[#0D0D0D] border border-white/10 rounded-lg px-6 py-3">
            <span className="text-gray-400">Tiempo total desde que nos contactas hasta tener tu sistema: </span>
            <span className="font-bold text-white">48 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
