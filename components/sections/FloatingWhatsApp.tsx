import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { businessInfo } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <Link
      href={businessInfo.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-pulse group fixed bottom-6 right-6 z-50 inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_14px_40px_rgba(37,211,102,0.45)]"
    >
      <MessageCircle size={26} />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-brand-ebony/95 px-3 py-2 text-xs font-medium text-brand-parchment opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
        Fale conosco
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 border-4 border-transparent border-l-brand-ebony/95" />
      </span>
    </Link>
  );
}
