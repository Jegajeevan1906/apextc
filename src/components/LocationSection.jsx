import React from 'react';
import { MapPin, Phone, Clock, Navigation, PhoneCall, Building2 } from 'lucide-react';

export default function LocationSection() {
  const address = "Medway Hospital Near, Pillayampettai, Kumbakonam";
  const contactNumber = "6382256206";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Medway Hospitals Kumbakonam Pillayampettai")}`;

  return (
    <section id="location" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FBF6ED] border border-[#E8D8BD] mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#B85C38]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#B85C38]">
              Center Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#493447] tracking-tight font-heading mb-4">
            Find APEX
          </h2>
          <p className="text-base sm:text-lg text-[#3B302A] font-normal leading-relaxed">
            Conveniently located near Medway Hospital in Kumbakonam with easy accessibility for students.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left: Contact & Address Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FBF6ED] rounded-3xl p-8 border border-[#E8D8BD] shadow-xs">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#B85C38] text-[#F7F0E3] flex items-center justify-center shadow-xs font-bold">
                  <Building2 className="w-6 h-6 text-[#F7F0E3]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#493447] font-heading">
                    APEX Tuition Center
                  </h3>
                  <p className="text-xs font-semibold text-[#B85C38] tracking-wide uppercase">
                    Pillayampettai, Kumbakonam
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F0E3] border border-[#E8D8BD] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#B85C38]/15 text-[#B85C38] border border-[#B85C38]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A9A78] block mb-1">
                      Center Address
                    </span>
                    <p className="text-sm sm:text-base font-bold text-[#493447] leading-snug">
                      {address}
                    </p>
                    <p className="text-xs text-[#3B302A] mt-1">
                      Landmark: Very close to Medway Hospital
                    </p>
                  </div>
                </div>

                {/* Phone Contact Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F0E3] border border-[#E8D8BD] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#C59B4A]/15 text-[#C59B4A] border border-[#C59B4A]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A9A78] block mb-1">
                      Direct Telephone / Inquiries
                    </span>
                    <a
                      href={`tel:${contactNumber}`}
                      className="text-xl sm:text-2xl font-black text-[#493447] font-heading hover:text-[#B85C38] transition-colors tracking-tight"
                    >
                      {contactNumber}
                    </a>
                    <p className="text-xs text-[#3B302A] mt-0.5">
                      Available for admissions &amp; student queries
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F0E3] border border-[#E8D8BD] shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#8A9A78]/15 text-[#6F795D] border border-[#8A9A78]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8A9A78] block mb-1">
                      Class Timings
                    </span>
                    <p className="text-base font-bold text-[#493447]">
                      5:00 PM – 9:00 PM
                    </p>
                    <p className="text-xs text-[#3B302A] mt-0.5">
                      Daily Evening Batches • Saturday Weekly Tests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#E8D8BD] flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-[#F7F0E3] bg-[#B85C38] hover:bg-[#91452F] rounded-xl shadow-md transition-all duration-200"
              >
                <Navigation className="w-4 h-4 text-[#F7F0E3]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${contactNumber}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-[#493447] bg-[#F7F0E3] hover:bg-[#E8D8BD] border border-[#E8D8BD] rounded-xl shadow-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-[#B85C38]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Map Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden border border-[#E8D8BD] shadow-xs relative bg-[#FBF6ED]">
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
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-[#F7F0E3] px-4 py-3 rounded-2xl border border-[#E8D8BD] shadow-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#B85C38] text-[#F7F0E3] font-bold flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#F7F0E3]" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#493447]">Near Medway Hospital</div>
                  <div className="text-[11px] text-[#3B302A] font-medium">Pillayampettai, Kumbakonam</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

