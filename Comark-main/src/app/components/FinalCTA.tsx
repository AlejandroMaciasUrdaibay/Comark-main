import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const whatsappNumber = "5215512345678";
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero ver mi sistema funcionando. ¿Cuándo podemos hablar?"
  );
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-24 px-4 bg-[#111318] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00C6FF]/10 to-[#00FF94]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para dejar el caos atrás?
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Hablemos por WhatsApp y ve cómo tu negocio puede pasar de desordenado a ordenado sin letra chica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FF94] text-[#0D0D0D] font-bold rounded-xl hover:shadow-2xl hover:shadow-[#00C6FF]/30 transition-all duration-300 group text-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-6 h-6" />
              Habla con nosotros
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="mt-8 text-gray-500 text-sm">
            Sin costo inicial. Sin contratos. Solo resultados.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
