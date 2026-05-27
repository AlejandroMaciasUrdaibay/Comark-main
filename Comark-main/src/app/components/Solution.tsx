import { motion } from "motion/react";
import { CheckCircle2, Zap, Shield, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Clientes, citas, pedidos o inventario",
    description: "Todo en un solo lugar para que dejes de buscar información en papel o mensajes."
  },
  {
    icon: Shield,
    title: "Tú decides qué necesitas",
    description: "Nos adaptamos a tu negocio y construimos solo lo que realmente usas."
  },
  {
    icon: BarChart3,
    title: "Lo usas desde el celular",
    description: "Sin instalar nada, sin descargas. Desde cualquier navegador con acceso inmediato."
  },
  {
    icon: CheckCircle2,
    title: "Hecho para tu negocio, no para cualquiera",
    description: "Interfaz accesible y sin tecnicismos para que lo use cualquier miembro del equipo."
  }
];

export function Solution() {
  return (
    <section id="solucion" className="py-20 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Un sistema hecho para tu negocio, no para cualquiera
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Clientes, citas, pedidos o inventario, todo en un solo lugar. Tú decides qué necesitas, nosotros lo construimos.
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Lo usas desde el celular, sin instalar nada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 bg-[#111318] rounded-xl p-6 border border-white/10 hover:border-[#00C6FF]/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C6FF]/20 to-[#00FF94]/20 flex items-center justify-center group-hover:from-[#00C6FF]/30 group-hover:to-[#00FF94]/30 transition-all">
                  <Icon className="w-6 h-6 text-[#00C6FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF] to-[#00FF94] opacity-10"></div>
          <div className="relative border border-[#00C6FF]/30 rounded-2xl p-10 text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">
              Imagina tener todo tu negocio en{" "}
              <span className="bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent">
                una sola pantalla
              </span>
            </p>
            <p className="text-gray-400 mt-4 text-lg">
              Clientes, pedidos, citas, inventario, cobros — todo en tiempo real desde cualquier dispositivo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
