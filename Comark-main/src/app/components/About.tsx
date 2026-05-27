import { motion } from "motion/react";
import { Code2, Heart, MapPin } from "lucide-react";
import logo from "../../imports/WhatsApp_Image_2026-05-25_at_7.59.19_PM.jpeg";

const values = [
  {
    icon: Code2,
    title: "Desarrolladores, no vendedores",
    description:
      "Somos nosotros quienes construimos tu sistema. Sin intermediarios, sin subcontratistas. Tú hablas directo con quien hace el trabajo."
  },
  {
    icon: Heart,
    title: "Apasionados por los negocios locales",
    description:
      "Creemos que las pequeñas empresas merecen la misma tecnología que las grandes. Trabajamos para que eso sea posible."
  },
  {
    icon: MapPin,
    title: "Locales como tú",
    description:
      "Somos de aquí, conocemos el contexto y hablamos tu idioma. No eres un ticket, eres una persona con un negocio que queremos ver crecer."
  }
];

export function About() {
  return (
    <section id="nosotros" className="py-20 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre nosotros</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Somos dos desarrolladores que resuelven problemas reales con tecnología. Comar-K nació de ver cómo los negocios pequeños pierden tiempo y dinero por falta de herramientas digitales.
          </p>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            No somos una agencia grande, somos los que sí te contestan el WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#00C6FF]/20 to-[#00FF94]/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-[#111318] rounded-2xl p-10 border border-white/10 flex flex-col items-center gap-6">
                <img
                  src={logo}
                  alt="Comar-K Tecnología"
                  className="w-40 h-40 object-contain"
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">Comar-K Tecnología</h3>
                  <p className="text-[#00C6FF]">Sistemas web a la medida</p>
                </div>
                <div className="w-full grid grid-cols-3 gap-4 text-center pt-4 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent">2</div>
                    <div className="text-xs text-gray-500">Desarrolladores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent">48h</div>
                    <div className="text-xs text-gray-500">Entrega</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent">100%</div>
                    <div className="text-xs text-gray-500">A la medida</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-4 bg-[#111318] rounded-xl p-5 border border-white/10 hover:border-[#00C6FF]/30 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C6FF]/20 to-[#00FF94]/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00C6FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
