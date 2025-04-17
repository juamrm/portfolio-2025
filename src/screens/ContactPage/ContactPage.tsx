

export const ContactPage = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Contact Hero Section */}
      <section className="max-w-[800px]">
        <h1 className="font-heading-1 text-4xl md:text-[length:var(--heading-1-font-size)] text-main-black tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] mb-8">
          Let's work together
        </h1>
      </section>

      {/* Contact Information */}
      <section className="flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="font-heading-2 text-2xl text-main-black mb-4">Get in touch</h2>
          
          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-heading-2 text-xl text-main-gray" aria-hidden="true">Email:</span>
            <a 
              href="mailto:juamorim@me.com"
              className="inline-flex items-center gap-4 group"
              aria-label="Email me at juamorim@me.com"
            >
              <span className="font-heading-2 text-xl md:text-[length:var(--heading-2-font-size)] text-main-black group-hover:text-app-secondary transition-colors">
                juamorim@me.com
              </span>
              <img
                className="w-6 h-[21px] group-hover:translate-x-2 transition-transform"
                alt=""
                aria-hidden="true"
                src="/-.svg"
              />
            </a>
          </div>
          
          {/* WhatsApp */}
          <div className="flex items-center gap-4 mb-6">
            <span className="font-heading-2 text-xl text-main-gray" aria-hidden="true">WhatsApp:</span>
            <a 
              href="https://wa.me/34635800212"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group"
              aria-label="Contact me on WhatsApp at +34 635 800 212"
            >
              <span className="font-heading-2 text-xl md:text-[length:var(--heading-2-font-size)] text-main-black group-hover:text-app-secondary transition-colors">
                +34 635 800 212
              </span>
              <img
                className="w-6 h-[21px] group-hover:translate-x-2 transition-transform"
                alt=""
                aria-hidden="true"
                src="/-.svg"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-heading-2 text-2xl text-main-black mb-4">Connect</h2>
          <div className="flex gap-8">
            <a 
              href="https://linkedin.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-main-black hover:text-app-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm px-2"
              aria-label="Visit my LinkedIn profile"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-main-black hover:text-app-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-app-secondary focus:ring-offset-2 rounded-sm px-2"
              aria-label="Visit my GitHub profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
