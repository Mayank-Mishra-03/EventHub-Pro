"use client";
import React from "react";
import Container from "@/components/helperComponents/Container";
import SectionHeadingAndSubHeading from "@/components/helperComponents/SectionHeadingAndSubHeading";
import { MapPin, Car, Bus, Map as MapIcon, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";

const DirectionsPage = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.9167!3d18.5626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13fa0cbbe41%3A0xce0014b27814b72e!2sPhoenix%20Market%20City%2C%20Viman%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const externalMapLink =
    "https://maps.google.com/?q=Phoenix+Market+City+Pune+Viman+Nagar";

  return (
    <div className="bg-linear-to-br from-blue-100 via-white to-orange-100 min-h-screen pt-10 pb-20">
      <Container>
        <SectionHeadingAndSubHeading
          heading="Venue & Directions"
          subHeading="Find your way to the biggest tech event of the year."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
                <MapPin className="text-accent" /> Conference Center
              </h3>
              <p className="text-lg font-medium text-neutral-800">
                Phoenix Market City / Palladium
              </p>
              <p className="text-text-secondary mt-1">
                S No. 207, Viman Nagar Road, <br />
                Viman Nagar, Pune, Maharashtra 411014
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-primary border-b border-neutral-100 pb-2">
                Transportation Tips
              </h4>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                  <Car size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-neutral-900">By Car</h5>
                  <p className="text-sm text-text-secondary">
                    Ample parking is available in the mall basement. valet
                    service is available at the main entrance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
                  <Bus size={24} />
                </div>
                <div>
                  <h5 className="font-semibold text-neutral-900">
                    Public Transport
                  </h5>
                  <p className="text-sm text-text-secondary">
                    Accessible via Pune Metro (Ramwadi Station) and frequent
                    PMPML bus services from Pune Station.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={externalMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-accent text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
              >
                <MapIcon size={20} />
                Open in Google Maps
                <ExternalLink size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-[400px] lg:h-full min-h-[400px] bg-neutral-100 rounded-2xl overflow-hidden shadow-md border-2 border-white relative group"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-50 group-hover:grayscale-0 transition-all duration-300"
            ></iframe>

            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold shadow-xs pointer-events-none text-neutral-600">
              Interactive Map
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default DirectionsPage;
