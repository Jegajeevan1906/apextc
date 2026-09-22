import React from 'react';
import { MapPin, Phone, Clock, Navigation, PhoneCall, Building2 } from 'lucide-react';

export default function LocationSection() {
  const address = "Medway Hospital Near, Pillayampettai, Kumbakonam";
  const contactNumber = "6382256206";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Medway Hospitals Kumbakonam Pillayampettai")}`;

  return (
    <section id="location" className="section-location py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4CC] border border-[#F6C945] mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F26B5E]" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#F26B5E]">
              Center Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#593B57] tracking-tight font-heading mb-4">
            Find APEX
          </h2>
          <p className="text-base sm:text-lg text-[#593B57] font-semibold leading-relaxed">
            Conveniently located near Medway Hospital in Kumbakonam with easy accessibility for students.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Contact & Address Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFF4CC] rounded-3xl p-8 border border-[#F6C945] shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#F26B5E] text-[#FFF0D5] flex items-center justify-center shadow-xs font-bold">
                  <Building2 className="w-6 h-6 text-[#FFF0D5]" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#593B57] font-heading">
                    APEX Tuition Center
                  </h3>
                  <p className="text-xs font-extrabold text-[#F26B5E] tracking-wide uppercase">
                    Pillayampettai, Kumbakonam
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0D5] border border-[#F8B878] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F26B5E]/20 text-[#F26B5E] border border-[#F26B5E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#F26B5E] block mb-1">
                      Center Address
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-[#593B57] leading-snug">
                      {address}
                    </p>
                    <p className="text-xs text-[#593B57] font-semibold mt-1">
                      Landmark: Very close to Medway Hospital
                    </p>
                  </div>
                </div>

                {/* Phone Contact Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0D5] border border-[#F8B878] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#F6C945]/30 text-[#F28C38] border border-[#F6C945] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#F28C38] block mb-1">
                      Direct Telephone / Inquiries
                    </span>
                    <a
                      href={`tel:${contactNumber}`}
                      className="text-xl sm:text-2xl font-black text-[#593B57] font-heading hover:text-[#F26B5E] transition-colors tracking-tight"
                    >
                      {contactNumber}
                    </a>
                    <p className="text-xs text-[#593B57] font-semibold mt-0.5">
                      Available for admissions &amp; student queries
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF0D5] border border-[#F8B878] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#8064A2]/20 text-[#8064A2] border border-[#8064A2]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#8064A2] block mb-1">
                      Class Timings
                    </span>
                    <p className="text-base font-extrabold text-[#593B57]">
                      5:00 PM – 9:00 PM
                    </p>
                    <p className="text-xs text-[#593B57] font-semibold mt-0.5">
                      Daily Evening Batches • Saturday Weekly Tests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#F6C945] flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-[#FFF0D5] bg-[#F26B5E] hover:bg-[#D9574D] rounded-xl shadow-md transition-all duration-200"
              >
                <Navigation className="w-4 h-4 text-[#FFF0D5]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${contactNumber}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-[#FFF0D5] bg-[#8064A2] hover:bg-[#6C508E] border border-[#8064A2] rounded-xl shadow-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#FFF0D5]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Map Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#F6C945] shadow-xs relative bg-[#FFF4CC]">
              {/* Google Maps Iframe */}
              <iframe
                title="APEX Tuition Center Kumbakonam Location Map"
                src="https://maps.google.com/maps?q=Medway+Hospitals+Kumbakonam+Pillayampettai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[400px] border-0 opacity-95 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Map Banner */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-[#FFF0D5] px-4 py-3 rounded-2xl border border-[#F8B878] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F26B5E] text-[#FFF0D5] font-bold flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#FFF0D5]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#593B57]">Near Medway Hospital</div>
                  <div className="text-[11px] text-[#F26B5E] font-bold">Pillayampettai, Kumbakonam</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

