import { motion } from "motion/react";
import { CheckCircle2, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "Gratis",
    period: "Sistema funcional + soporte inicial",
    description: "Empieza sin pagar para ver cómo mejora tu operación.",
    features: [
      "Sistema funcional a medida",
      "Soporte inicial para configuración",
      "Acceso desde cualquier dispositivo",
      "Sin contrato inicial"
    ],
    cta: "Quiero el básico",
    highlighted: false
  },
  {
    name: "Mantenimiento",
    price: "$300",
    period: "por mes",
    description: "Respaldo, limpieza de datos y soporte por WhatsApp.",
    features: [
      "Respaldos periódicos",
      "Limpieza y orden de datos",
      "Soporte por WhatsApp",
      "Ajustes menores cuando los necesites"
    ],
    cta: "Contratar mantenimiento",
    highlighted: true
  },
  {
    name: "Funciones nuevas",
    price: "Desde $300",
    period: "cada una",
    description: "Sumamos nuevas herramientas solo cuando tú las necesites.",
    features: [
      "Función personalizada por módulo",
      "Integración con tu forma de trabajar",
      "Precio claro desde el inicio",
      "Construido sobre tu sistema existente"
    ],
    cta: "Pedir función nueva",
    highlighted: false
  }
];

export function Pricing() {
  const whatsappNumber = "5215512345678";
  const whatsappMessage = encodeURIComponent("Hola, quiero información sobre precios");
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="precios" className="py-20 px-4 bg-[#111318]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Arranca gratis. Paga solo si lo quieres mantener.</h2>
          <p className="text-gray-400 text-lg">
            Básico gratis, mantenimiento $300/mes y funciones nuevas desde $300 c/u.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "border-[#00C6FF]/60 bg-gradient-to-b from-[#00C6FF]/10 to-[#00FF94]/5 shadow-lg shadow-[#00C6FF]/10"
                  : "border-white/10 bg-[#0D0D0D] hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00C6FF] to-[#00FF94] text-[#0D0D0D] text-xs font-bold px-4 py-1.5 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-black text-white">{plan.price}</div>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00FF94] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#00C6FF] to-[#00FF94] text-[#0D0D0D] hover:shadow-lg hover:shadow-[#00C6FF]/30"
                    : "border border-white/20 text-white hover:border-[#00C6FF]/50 hover:text-[#00C6FF]"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 mt-10 text-sm"
        >
          Arranca gratis. Paga solo si lo quieres mantener.
        </motion.p>
      </div>
    </section>
  );
}
