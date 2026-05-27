import { MessageCircle, Mail } from "lucide-react";
import logo from "../../imports/WhatsApp_Image_2026-05-25_at_7.59.19_PM.jpeg";

export function Footer() {
  const whatsappNumber = "5215512345678";
  const whatsappMessage = encodeURIComponent("Hola, quiero más información");
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navLinks = [
    { label: "El problema", href: "#problema" },
    { label: "La solución", href: "#solucion" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Servicios", href: "#servicios" },
    { label: "Precios", href: "#precios" },
    { label: "Nosotros", href: "#nosotros" }
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/10 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Comar-K Tecnología"
              className="w-20 h-20 object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Sistemas web a la medida para pequeños negocios locales. Hechos por desarrolladores que entienden tu realidad.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#00C6FF] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contáctanos</h4>
            <div className="space-y-3">
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00FF94] transition-colors text-sm group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform text-[#00FF94]" />
                WhatsApp
              </a>
              <a
                href="mailto:contacto@comar-k.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#00C6FF] transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform text-[#00C6FF]" />
                contacto@comar-k.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 Comar-K Tecnología
          </p>
          <p className="text-gray-600 text-xs">
            Hecho con{" "}
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#00FF94] bg-clip-text text-transparent font-semibold">
              pasión
            </span>{" "}
            en México
          </p>
        </div>
      </div>
    </footer>
  );
}
