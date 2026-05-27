import { motion } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";

const problems = [
  "Pierdes clientes porque no tienes su historial",
  "Tus citas o pedidos se cruzan y se olvidan",
  "No sabes cuánto vendiste ni qué tienes en inventario",
  "Tienes cobros pendientes sin seguimiento",
  "Todo vive en tu cabeza o en un papel que se pierde"
];

export function Problem() {
  return (
    <section id="problema" className="py-20 px-4 bg-[#111318]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Te pasa alguno de estos?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-[#0D0D0D] p-6 rounded-lg border border-red-500/20 hover:border-red-500/40 transition-colors"
            >
              <div className="flex-shrink-0 mt-1">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <p className="text-gray-300">{problem}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00C6FF]/10 to-[#00FF94]/10 border border-[#00C6FF]/30 px-6 py-3 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-[#00FF94]" />
            <p className="text-lg">
              Si marcaste aunque sea uno,{" "}
              <span className="font-semibold bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent">
                tenemos algo para ti
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
