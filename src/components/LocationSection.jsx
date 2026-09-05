import React from 'react';
import { MapPin, Phone, Clock, Navigation, PhoneCall, Sparkles, Building2 } from 'lucide-react';

export default function LocationSection() {
  const address = "Medway Hospital Near, Pillayampettail, Kumbakonam";
  const contactNumber = "6382256206";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Medway Hospitals Kumbakonam Pillayampettai")}`;

  return (
    <section id="location" className="py-20 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-900">
              Center Location
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading mb-4">
            Find APEX
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Conveniently located near Medway Hospital in Kumbakonam with easy accessibility for students.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Contact & Address Information Card */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-8 border border-slate-200/80 shadow-lg">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-royal-gradient text-amber-300 flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">
                    APEX Tuition Center
                  </h3>
                  <p className="text-xs font-semibold text-blue-800 tracking-wide uppercase">
                    Pillayampettai, Kumbakonam
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Center Address
                    </span>
                    <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                      {address}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Landmark: Very close to Medway Hospital
                    </p>
                  </div>
                </div>

                {/* Phone Contact Item */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Direct Telephone / Inquiries
                    </span>
                    <a
                      href={`tel:${contactNumber}`}
                      className="text-xl sm:text-2xl font-black text-slate-900 font-heading hover:text-blue-700 transition-colors tracking-tight"
                    >
                      {contactNumber}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Available for admissions &amp; student queries
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Class Timings
                    </span>
                    <p className="text-base font-bold text-slate-800">
                      5:00 PM – 9:00 PM
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Daily Evening Batches • Saturday Weekly Tests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-white bg-royal-gradient rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${contactNumber}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-slate-800 bg-amber-400 hover:bg-amber-500 rounded-xl shadow-md transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-slate-900" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Map Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
              {/* Google Maps Iframe */}
              <iframe
                title="APEX Tuition Center Kumbakonam Location Map"
                src="https://maps.google.com/maps?q=Medway+Hospitals+Kumbakonam+Pillayampettai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[400px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Map Banner */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto glass-panel px-4 py-3 rounded-2xl border border-white/80 shadow-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Near Medway Hospital</div>
                  <div className="text-[11px] text-slate-500 font-medium">Pillayampettai, Kumbakonam</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
