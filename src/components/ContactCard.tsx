import { getDictionary, type Locale } from "@/i18n";
import { site } from "@/content";
import { Icon } from "./Icon";

/** WhatsApp first (guests already use it), then email, phone and the booking apps. */
export function ContactCard({ lang }: { lang: Locale }) {
  const d = getDictionary(lang);
  const { whatsapp, email, phone } = site.contact;
  return (
    <div className="flex flex-col gap-4 rounded-[22px] bg-ink p-5 text-paper">
      <div>
        <h2 className="font-serif text-[21px]">{d.stuckTitle}</h2>
        <p className="mt-1 text-sm leading-relaxed text-[#d8ccbe]">{d.stuckBody}</p>
      </div>
      <a
        href={`https://wa.me/${whatsapp}`}
        className="flex h-12 items-center justify-center gap-2 rounded-[14px] bg-paper text-[15px] font-semibold text-ink no-underline"
      >
        <Icon name="chat" size={18} />
        {d.messageWhatsApp}
      </a>
      <div className="text-sm text-[#d8ccbe]">
        <p>{d.orContact}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <a href={`mailto:${email}`} className="flex min-h-11 items-center gap-2 rounded-xl bg-white/10 px-3 text-paper no-underline">
            <Icon name="mail" size={16} />
            {d.email}
          </a>
          <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex min-h-11 items-center gap-2 rounded-xl bg-white/10 px-3 text-paper no-underline">
            <Icon name="phone" size={16} />
            {d.phone}
          </a>
        </div>
        <p className="mt-3">{d.bookingApp}</p>
      </div>
    </div>
  );
}
