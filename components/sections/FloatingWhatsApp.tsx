import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { businessInfo } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <Link
      href={`https://wa.me/${businessInfo.phoneDigits}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="whatsapp-pulse fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle size={25} />
    </Link>
  );
}
