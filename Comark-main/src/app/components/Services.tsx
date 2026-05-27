import { motion } from "motion/react";
import { Calendar, Users, Package, DollarSign, ClipboardList, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Sistema de pedidos en línea",
    description:
      "Recibe y gestiona pedidos sin que se pierdan en cadenas de mensajes. Todo el historial en un solo lugar."
  },
  {
    icon: Calendar,
    title: "Agenda de citas con recordatorios",
    description:
      "Controla horarios, evita cruces y recuerda a tus clientes sus citas de forma automática."
  },
  {
    icon: Users,
    title: "Gestión de clientes e historial",
    description:
      "Guarda datos, acuerdos y compras de cada cliente para que no se repitan errores ni se pierda información."
  },
  {
    icon: DollarSign,
    title: "Control de pagos y deudores",
    description:
      "Lleva seguimiento de cobros pendientes y ventas realizadas para que no se te escape nada."
  },
  {
    icon: ClipboardList,
    title: "Inventario simple con alertas",
    description:
      "Registra existencias, entradas y salidas con avisos cuando el stock cae para actuar sin sorpresas."
  },
  {
    icon: BarChart3,
    title: "Panel de reportes y estadísticas",
    description:
      "Mira ventas, productos movidos y resultados clave sin tablas complicadas."
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 px-4 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios que ordenan tu negocio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sistema de pedidos, citas, clientes, pagos, inventario y reportes. Todo hecho para que tu día a día sea más simple.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111318] rounded-xl p-6 border border-white/10 hover:border-[#00C6FF]/40 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C6FF]/20 to-[#00FF94]/20 flex items-center justify-center mb-5 group-hover:from-[#00C6FF]/30 group-hover:to-[#00FF94]/30 transition-all">
                  <Icon className="w-6 h-6 text-[#00C6FF]" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{service.description}</p>

                <div className="mt-4">
                  <span className="text-xs uppercase tracking-[0.18em] text-[#00C6FF]/80">
                    Para cualquier negocio local
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 mt-10"
        >
          ¿Necesitas algo que no ves aquí? Lo construimos también. Cuéntanos.
        </motion.p>
      </div>
    </section>
  );
}
