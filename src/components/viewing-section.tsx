import { contactLinks } from "@/lib/collection";
import { InstagramIcon, WhatsAppIcon } from "@/components/social-icons";
import { EnquiryForm } from "@/components/enquiry-form";

export function ViewingSection() {
  return (
    <section id="viewing" className="section-shell py-24 sm:py-32 lg:px-12 lg:py-40">
      <div>
        <p className="eyebrow">Private viewing</p>
        <h2 className="type-display mt-5 max-w-6xl font-serif">
          Some pieces are worn. Others become part of your story.
        </h2>
      </div>

      <div className="mt-16 border-t border-stone-900/15 pt-12 sm:mt-20 sm:pt-14 lg:mt-24 lg:pt-16">
        <p className="max-w-3xl text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
          For prices, availability and private viewings, leave an enquiry with
          the House. You can also begin a conversation on WhatsApp or Instagram.
        </p>
        <div className="mt-8 max-w-none">
          <EnquiryForm />
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="btn-primary gap-2" href={contactLinks.whatsappPrimary} target="_blank" rel="noreferrer"><WhatsAppIcon className="h-4 w-4" />Connect with us</a>
            <a className="btn-secondary" href={contactLinks.call}>Call us</a>
            <a className="btn-secondary gap-2" href={contactLinks.instagram} target="_blank" rel="noreferrer"><InstagramIcon className="h-4 w-4" />DM on Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
