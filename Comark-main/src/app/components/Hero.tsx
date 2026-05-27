import { motion } from "motion/react";
import { ArrowRight, Smartphone } from "lucide-react";
import logo from "../../imports/WhatsApp_Image_2026-05-25_at_7.59.19_PM.jpeg";

export function Hero() {
  const whatsappNumber = "5215512345678"; // Cambiar por el número real
  const whatsappMessage = encodeURIComponent("Hola, quiero ver mi sistema funcionando");
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#00C6FF] rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#00FF94] rounded-full blur-[128px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <img src={logo} alt="Comar-K Tecnología" className="w-64 mx-auto lg:mx-0 mb-8" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿Sigues manejando tu negocio con{" "}
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent">
              libretas y WhatsApp?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Te hacemos un sistema web en 48 horas, hecho para tu negocio. Sin complicaciones, sin letra chica.
          </p>

          <motion.a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00C6FF] to-[#00FF94] text-[#0D0D0D] font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00C6FF]/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quiero verlo funcionando
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="text-sm text-gray-500 mt-4">Sin costo inicial. Si no te convence, no pagas nada.</p>
        </motion.div>

        {/* Right side - Visual mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-br from-[#111318] to-[#1a1a1f] rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00C6FF] to-[#00FF94] rounded-full blur-xl opacity-50"></div>

            <div className="flex items-center gap-2 mb-6">
              <Smartphone className="w-6 h-6 text-[#00C6FF]" />
              <div className="text-sm text-gray-400">Sistema de Gestión</div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0D0D0D] rounded-lg p-4 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Clientes registrados</span>
                  <span className="text-2xl font-bold text-[#00FF94]">247</span>
                </div>
                <div className="h-2 bg-[#1a1a1f] rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#00C6FF] to-[#00FF94]"></div>
                </div>
              </div>

              <div className="bg-[#0D0D0D] rounded-lg p-4 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Citas hoy</span>
                  <span className="text-2xl font-bold text-[#00C6FF]">12</span>
                </div>
                <div className="text-xs text-gray-500">3 pendientes, 9 completadas</div>
              </div>

              <div className="bg-[#0D0D0D] rounded-lg p-4 border border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Cobros pendientes</span>
                  <span className="text-xl font-bold text-white">$4,250</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
              Todo en un solo lugar, desde tu celular
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
